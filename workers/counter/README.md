# Tuck-in counter (Cloudflare Worker)

Powers the "N tuck-ins from N countries" counter on the TuckIn site. GitHub Pages only serves static files, so the count lives in this small Cloudflare Worker (free plan is enough).

## Deploy (one time)

    cd workers/counter
    npx wrangler login      # opens the browser to sign in to Cloudflare
    npx wrangler deploy

- Because trytuckin.com is on Cloudflare, the Worker is served at `https://counter.trytuckin.com` (used by both trytuckin.com and tuckin.velocitylabs.dev) and the site works as is.
- If it isn't, delete the `routes = ...` line in `wrangler.toml`, deploy, and copy the `https://tuckin-counter.<you>.workers.dev` URL that wrangler prints into `const API = ...` near the bottom of `../index.html`.

Check it: `curl https://counter.trytuckin.com/count` should return `{"total":0,"countries":0}`.

## What it stores

One Durable Object with a row per country code and a tap count. IP addresses are only held in memory for a per-minute flood limit, never stored.
