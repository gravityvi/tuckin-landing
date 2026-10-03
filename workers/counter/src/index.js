// TuckIn global "tuck-in" counter.
// GET  /count -> { total, countries }
// POST /tap   body {"n": 1..25} -> { total, countries }
// One Durable Object holds the count, so increments are atomic (no lost taps).
import { DurableObject } from "cloudflare:workers";

const MAX_BATCH = 25;          // most taps one request may add
const IP_LIMIT_PER_MIN = 120;  // simple per-IP flood guard

export class Counter extends DurableObject {
  constructor(ctx, env) {
    super(ctx, env);
    this.sql = ctx.storage.sql;
    this.sql.exec(`CREATE TABLE IF NOT EXISTS taps (country TEXT PRIMARY KEY, n INTEGER NOT NULL)`);
    this.recent = new Map(); // ip -> { minute, n }, in memory only
  }

  stats() {
    const row = this.sql.exec(`SELECT COALESCE(SUM(n),0) AS total, COUNT(*) AS countries FROM taps WHERE country != 'XX'`).one();
    const unknown = this.sql.exec(`SELECT COALESCE(SUM(n),0) AS n FROM taps WHERE country = 'XX'`).one();
    return { total: row.total + unknown.n, countries: row.countries };
  }

  tap(n, country, ip) {
    const minute = Math.floor(Date.now() / 60000);
    const r = this.recent.get(ip);
    const used = r && r.minute === minute ? r.n : 0;
    const allowed = Math.max(0, Math.min(n, IP_LIMIT_PER_MIN - used));
    this.recent.set(ip, { minute, n: used + allowed });
    if (this.recent.size > 5000) this.recent.clear();
    if (allowed > 0) {
      this.sql.exec(
        `INSERT INTO taps (country, n) VALUES (?, ?) ON CONFLICT(country) DO UPDATE SET n = n + excluded.n`,
        country, allowed
      );
    }
    return this.stats();
  }
}

function cors(req, env) {
  const origin = req.headers.get("Origin") || "";
  const allowed = (env.ALLOWED_ORIGINS || "").split(",").map(s => s.trim());
  return {
    "Access-Control-Allow-Origin": allowed.includes(origin) ? origin : allowed[0],
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "content-type",
    "Vary": "Origin",
  };
}

export default {
  async fetch(req, env) {
    const url = new URL(req.url);
    const headers = { ...cors(req, env), "content-type": "application/json" };
    if (req.method === "OPTIONS") return new Response(null, { headers });

    const stub = env.COUNTER.get(env.COUNTER.idFromName("global"));

    if (url.pathname === "/count" && req.method === "GET") {
      return new Response(JSON.stringify(await stub.stats()), { headers: { ...headers, "cache-control": "public, max-age=10" } });
    }

    if (url.pathname === "/tap" && req.method === "POST") {
      let n = 1;
      try { n = Number((await req.json()).n) || 1; } catch {}
      n = Math.max(1, Math.min(MAX_BATCH, Math.floor(n)));
      const country = /^[A-Z]{2}$/.test(req.cf?.country || "") ? req.cf.country : "XX";
      const ip = req.headers.get("CF-Connecting-IP") || "unknown";
      return new Response(JSON.stringify(await stub.tap(n, country, ip)), { headers });
    }

    return new Response(JSON.stringify({ error: "not_found" }), { status: 404, headers });
  },
};
