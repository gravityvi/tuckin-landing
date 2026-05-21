// landing-screens.jsx — phone screen React components used in App Store deck + landing page.
// Auto-extracted from appstore/AppStore Screenshots.html. Edit there, regenerate here.

// Phone screens — faithful recreations of TuckIn's real UI from user screenshots.

const AT = {
  bg: '#EEEEF1',
  card: '#FFFFFF',
  text: '#0E0E12',
  textMute: '#7A7A82',
  textSoft: '#B2B2B9',
  divider: 'rgba(14,14,18,0.08)',
  primary: '#6B5BE8',
  primarySoft: '#E7E3FB',
  primaryInk: '#4B3FBD',
  strain: '#F08A2B',
  strainSoft: '#FDECDC',
  danger: '#EF4444',
  coffee: '#8B5A2B',
  coffeeDeep: '#6E4520',
  coffeeSoft: '#F4EBDD',
  coffeeTint: '#FAF4EA',
  caffMod: '#F08A2B',
  caffModSoft: '#FCE4C8',
  ok: '#22A06B',
};

function Sparkle({ color, size }) {
  const s = size || 14;
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M12 2.5l1.9 5.6 5.6 1.9-5.6 1.9-1.9 5.6-1.9-5.6-5.6-1.9 5.6-1.9z" fill={color}/>
      <path d="M19 14l.9 2.4 2.4.9-2.4.9-.9 2.4-.9-2.4-2.4-.9 2.4-.9z" fill={color} opacity="0.7"/>
    </svg>
  );
}

function CoffeeMug({ size }) {
  const s = size || 28;
  return (
    <svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <path d="M7 13h15v8a5 5 0 01-5 5h-5a5 5 0 01-5-5v-8z" fill={AT.coffee}/>
      <path d="M22 15h2a3 3 0 010 6h-2" stroke={AT.coffee} strokeWidth="2" fill="none"/>
      <path d="M11 8c0-1.5 1-2 1-3s-1-1.5-1-3M15 8c0-1.5 1-2 1-3s-1-1.5-1-3" stroke={AT.coffeeDeep} strokeWidth="1.6" strokeLinecap="round" opacity="0.55"/>
    </svg>
  );
}
function CoffeeCup({ size }) {
  const s = size || 28;
  return (
    <svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <ellipse cx="16" cy="24" rx="10" ry="2" fill={AT.coffee} opacity="0.25"/>
      <path d="M7 14h14v3a6 6 0 01-6 6h-2a6 6 0 01-6-6v-3z" fill={AT.coffee}/>
      <ellipse cx="14" cy="14" rx="7" ry="1.4" fill={AT.coffeeDeep}/>
      <path d="M21 16h2a2.5 2.5 0 010 5h-2" stroke={AT.coffee} strokeWidth="2" fill="none"/>
    </svg>
  );
}

function SleepInsightCard({ children }) {
  return (
    <div style={{ background: AT.primarySoft, borderRadius: 18, padding: '16px 18px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <Sparkle color={AT.primaryInk}/>
        <span style={{ fontSize: 13.5, fontWeight: 700, color: AT.primaryInk, letterSpacing: -0.1 }}>Sleep Insight</span>
      </div>
      <div style={{ marginTop: 10, fontSize: 13.5, color: AT.text, lineHeight: 1.45, fontWeight: 500 }}>{children}</div>
    </div>
  );
}

function CaffeineInsightCard({ children }) {
  return (
    <div style={{ background: AT.coffeeSoft, borderRadius: 18, padding: '16px 18px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <Sparkle color={AT.coffeeDeep}/>
        <span style={{ fontSize: 13.5, fontWeight: 700, color: AT.coffeeDeep, letterSpacing: -0.1 }}>Caffeine Insight</span>
      </div>
      <div style={{ marginTop: 10, fontSize: 13.5, color: AT.text, lineHeight: 1.45, fontWeight: 500 }}>{children}</div>
    </div>
  );
}

function StrainInsightInline({ children }) {
  return (
    <div style={{ background: AT.strainSoft, borderRadius: 14, padding: '12px 14px', display: 'flex', gap: 10 }}>
      <div style={{ flexShrink: 0, marginTop: 1 }}><Sparkle color={AT.strain}/></div>
      <div style={{ fontSize: 12.5, color: AT.text, lineHeight: 1.45, fontWeight: 500 }}>{children}</div>
    </div>
  );
}

function LoggedDoseRow({ Icon, name, time, mg, fillPct, residual }) {
  return (
    <div style={{ background: AT.card, borderRadius: 16, padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 12, boxShadow: '0 1px 3px rgba(14,14,18,0.04)' }}>
      <div style={{ width: 38, height: 38, borderRadius: 999, background: AT.coffeeSoft, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <Icon size={22}/>
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: -0.2 }}>{name} · {time}</div>
        <div style={{ marginTop: 5, height: 4, borderRadius: 999, background: AT.coffeeSoft, overflow: 'hidden' }}>
          <div style={{ width: `${fillPct * 100}%`, height: '100%', background: AT.coffee, borderRadius: 999 }}/>
        </div>
        <div style={{ marginTop: 4, fontSize: 11, color: AT.textMute, fontWeight: 500 }}>{residual} still in your system at bedtime</div>
      </div>
      <div style={{ fontSize: 14, fontWeight: 800, fontVariantNumeric: 'tabular-nums', color: AT.text }}>{mg} mg</div>
    </div>
  );
}

function CaffeineFactorCard({ expanded }) {
  return (
    <div style={{ background: AT.card, borderRadius: 20, padding: '16px 18px', boxShadow: '0 1px 3px rgba(14,14,18,0.04)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ width: 36, height: 36, borderRadius: 10, background: AT.coffeeSoft, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <CoffeeMug size={22}/>
        </div>
        <div style={{ fontSize: 17, fontWeight: 800, letterSpacing: -0.3 }}>Caffeine</div>
        <div style={{
          padding: '4px 10px', borderRadius: 999, background: AT.caffModSoft,
          fontSize: 10.5, fontWeight: 800, letterSpacing: 0.8, color: AT.caffMod,
        }}>MODERATE</div>
        <div style={{ flex: 1 }}/>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0)' }}>
          <path d="M6 9l6 6 6-6" stroke={AT.text} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      {expanded && (
        <div style={{ marginTop: 14, paddingTop: 14, borderTop: `1px solid ${AT.divider}` }}>
          <div style={{ fontSize: 12.5, color: AT.textMute, fontWeight: 500 }}>At bedtime (11:17 PM)</div>
          <div style={{ marginTop: 2, display: 'flex', alignItems: 'baseline', gap: 4 }}>
            <span style={{ fontSize: 30, fontWeight: 900, letterSpacing: -1, color: AT.text, fontVariantNumeric: 'tabular-nums' }}>42</span>
            <span style={{ fontSize: 13, color: AT.textMute, fontWeight: 600 }}>mg</span>
          </div>
          <div style={{ marginTop: 12, background: AT.coffeeSoft, borderRadius: 14, display: 'flex' }}>
            <div style={{ flex: 1, padding: '12px 14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 6, height: 6, borderRadius: 999, background: AT.ok }}/>
                <span style={{ fontSize: 12, fontWeight: 700, color: AT.text }}>Clean by</span>
              </div>
              <div style={{ marginTop: 4, fontSize: 13, color: AT.textMute, textDecoration: 'line-through', fontWeight: 600 }}>past</div>
            </div>
            <div style={{ width: 1, background: 'rgba(110,69,32,0.15)' }}/>
            <div style={{ flex: 1, padding: '12px 14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 6, height: 6, borderRadius: 999, background: AT.coffee }}/>
                <span style={{ fontSize: 12, fontWeight: 700, color: AT.text }}>Last call</span>
              </div>
              <div style={{ marginTop: 4, fontSize: 13, color: AT.textMute, textDecoration: 'line-through', fontWeight: 600 }}>past</div>
            </div>
          </div>
          <div style={{ marginTop: 14, fontSize: 10.5, fontWeight: 800, letterSpacing: 1.4, color: AT.textMute }}>LOGGED TODAY</div>
          <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <LoggedDoseRow Icon={CoffeeMug} name="Black Tea" time="11:00 AM" mg={47} fillPct={0.55} residual="9 mg"/>
            <LoggedDoseRow Icon={CoffeeCup} name="Espresso" time="06:40 PM" mg={63} fillPct={0.85} residual="33 mg"/>
          </div>
          <button style={{
            marginTop: 12, width: '100%', height: 42, borderRadius: 12,
            background: AT.coffee, color: '#fff', border: 'none',
            fontSize: 13.5, fontWeight: 700, cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
          }}>
            <span style={{ fontSize: 16, fontWeight: 700 }}>+</span> Log coffee
          </button>
        </div>
      )}
    </div>
  );
}

function AppStatusBar() {
  return (
    <div style={{
      height: 44, padding: '14px 24px 0',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      fontFamily: '-apple-system, "SF Pro Display", system-ui',
      color: '#000', position: 'relative', zIndex: 20,
    }}>
      <div style={{ fontSize: 15, fontWeight: 600 }}>9:41</div>
      <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
        <svg width="17" height="10" viewBox="0 0 19 12">
          <rect x="0" y="7.5" width="3.2" height="4.5" rx="0.7" fill="#000"/>
          <rect x="4.8" y="5" width="3.2" height="7" rx="0.7" fill="#000"/>
          <rect x="9.6" y="2.5" width="3.2" height="9.5" rx="0.7" fill="#000"/>
          <rect x="14.4" y="0" width="3.2" height="12" rx="0.7" fill="#000"/>
        </svg>
        <svg width="16" height="11" viewBox="0 0 17 12">
          <path d="M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z" fill="#000"/>
          <path d="M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z" fill="#000"/>
          <circle cx="8.5" cy="10.5" r="1.5" fill="#000"/>
        </svg>
        <svg width="24" height="11" viewBox="0 0 27 13">
          <rect x="0.5" y="0.5" width="23" height="12" rx="3.5" stroke="#000" strokeOpacity="0.35" fill="none"/>
          <rect x="2" y="2" width="20" height="9" rx="2" fill="#000"/>
          <path d="M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z" fill="#000" fillOpacity="0.4"/>
        </svg>
      </div>
    </div>
  );
}

function PageHeader({ title, sub }) {
  return (
    <div style={{ padding: '18px 24px 12px', position: 'relative' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: -0.5, color: AT.text }}>{title}</div>
        <div style={{ fontSize: 14, color: AT.textMute, marginTop: 2, fontWeight: 500 }}>{sub}</div>
      </div>
      <button style={{
        position: 'absolute', right: 20, top: 24,
        appearance: 'none', border: 'none', background: '#fff',
        width: 40, height: 40, borderRadius: 999, cursor: 'pointer',
        boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" stroke={AT.text} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="3" stroke={AT.text} strokeWidth="1.6"/>
        </svg>
      </button>
    </div>
  );
}

function BottomTabs({ active }) {
  const Bed = ({ color }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M3 18v-6a3 3 0 013-3h12a3 3 0 013 3v6M3 18v2M21 18v2M3 14h18M7 9V7a1 1 0 011-1h3a1 1 0 011 1v2M13 9V7a1 1 0 011-1h3a1 1 0 011 1v2" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  const Bars = ({ color }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="13" width="3.5" height="7" rx="1" fill={color}/>
      <rect x="10.25" y="9" width="3.5" height="11" rx="1" fill={color}/>
      <rect x="16.5" y="5" width="3.5" height="15" rx="1" fill={color}/>
    </svg>
  );
  const Tab = ({ id, label, Icon }) => {
    const on = active === id;
    return (
      <div style={{
        padding: '10px 18px 10px 14px', borderRadius: 999,
        background: on ? AT.primarySoft : 'transparent',
        display: 'flex', alignItems: 'center', gap: 6,
      }}>
        <Icon color={on ? AT.primary : AT.text}/>
        <span style={{ fontSize: 13, fontWeight: 600, color: on ? AT.primary : AT.text }}>{label}</span>
      </div>
    );
  };
  return (
    <div style={{
      position: 'absolute', bottom: 16, left: '50%', transform: 'translateX(-50%)',
      background: '#fff', borderRadius: 999, padding: 6,
      display: 'flex', gap: 4,
      boxShadow: '0 4px 18px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04)',
      zIndex: 10,
    }}>
      <Tab id="performance" label="Performance" Icon={Bars}/>
      <Tab id="schedule" label="Schedule" Icon={Bed}/>
    </div>
  );
}

function Card({ children, style }) {
  return (
    <div style={{
      background: AT.card, borderRadius: 20, padding: '18px 20px',
      boxShadow: '0 1px 3px rgba(14,14,18,0.04)',
      ...style,
    }}>{children}</div>
  );
}

function NeedRow({ dot, label, value }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 14 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ width: 7, height: 7, borderRadius: 999, background: dot }}/>
        <span style={{ fontWeight: 500 }}>{label}</span>
      </div>
      <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{value}</span>
    </div>
  );
}

function ReminderRow({ label, toggle }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ fontSize: 14, fontWeight: 600 }}>{label}</span>
      {toggle && (
        <div style={{ width: 48, height: 28, background: AT.primary, borderRadius: 999, position: 'relative', boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.08)' }}>
          <div style={{ position: 'absolute', right: 2, top: 2, width: 24, height: 24, background: '#fff', borderRadius: 999, boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }}/>
        </div>
      )}
    </div>
  );
}

function BarRow({ label, value, fill, pct, segments }) {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
        <span style={{ fontWeight: 600 }}>{label}</span>
        <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{value}</span>
      </div>
      <div style={{ marginTop: 6, height: 6, background: '#E9E6EF', borderRadius: 999, overflow: 'hidden', display: 'flex' }}>
        {segments ? segments.map((s, i) => (
          <div key={i} style={{ width: `${s.pct * 100}%`, background: s.fill, height: '100%' }}/>
        )) : (
          <div style={{ width: `${pct * 100}%`, background: fill, height: '100%', borderRadius: 999 }}/>
        )}
      </div>
    </div>
  );
}

function LegendRow({ dot, label, value }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ width: 7, height: 7, borderRadius: 999, background: dot }}/>
        <span style={{ fontWeight: 500 }}>{label}</span>
      </span>
      <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{value}</span>
    </div>
  );
}

// ═══ SCREEN 1 — Schedule (future bedtime) ═══
function ScheduleFutureScreen() {
  return (
    <div style={{ height: '100%', background: AT.bg, position: 'relative', overflow: 'hidden',
      fontFamily: '-apple-system, BlinkMacSystemFont, system-ui, sans-serif', color: AT.text }}>
      <AppStatusBar/>
      <PageHeader title="Schedule" sub="Sat–Sun, 18 Apr"/>
      <div style={{ textAlign: 'center', padding: '18px 0 8px' }}>
        <div style={{ fontSize: 16, color: AT.textMute, fontWeight: 500 }}>BedTime</div>
        <div style={{ marginTop: 4, lineHeight: 1 }}>
          <span style={{ fontSize: 78, fontWeight: 800, letterSpacing: -3, color: AT.text, fontVariantNumeric: 'tabular-nums' }}>22:46</span>
          <span style={{ fontSize: 30, fontWeight: 600, color: AT.textSoft, marginLeft: 6 }}>PM</span>
        </div>
        <div style={{ marginTop: 14, display: 'flex', justifyContent: 'center', gap: 14, fontSize: 13, fontWeight: 600, color: AT.text, alignItems: 'center' }}>
          <span>80%</span><span style={{ color: AT.textSoft }}>│</span>
          <span>06:30 AM</span><span style={{ color: AT.textSoft }}>│</span>
          <span style={{ letterSpacing: 1 }}>PERFORM</span>
        </div>
      </div>
      <div style={{ padding: '16px 14px 0', display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Card>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 8, height: 8, borderRadius: 999, background: AT.strain }}/>
              <span style={{ fontSize: 17, fontWeight: 700, letterSpacing: -0.2 }}>Today's Strain</span>
            </div>
            <span style={{ fontSize: 22, fontWeight: 800, color: AT.strain, letterSpacing: -0.5 }}>11.9</span>
          </div>
          <div style={{ marginTop: 12, height: 6, borderRadius: 999, background: '#E9E6EF', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, width: '62%', background: AT.strain, borderRadius: 999 }}/>
          </div>
          <div style={{ marginTop: 10, fontSize: 12.5, color: AT.textMute, lineHeight: 1.45 }}>
            High strain — bedtime shifted 29 mins earlier to help you fully recover.
          </div>
        </Card>
        <Card>
          <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: -0.3 }}>Sleep Schedule</div>
          <div style={{ marginTop: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div>
              <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: 1.3, color: AT.textMute }}>BEDTIME</div>
              <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.5, marginTop: 2 }}>10:46 PM</div>
            </div>
            <div style={{ fontSize: 14, color: AT.textMute, paddingBottom: 4 }}>7h 43m</div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: 1.3, color: AT.textMute }}>WAKE UP</div>
              <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.5, marginTop: 2 }}>06:30 AM</div>
            </div>
          </div>
          <div style={{ marginTop: 16, position: 'relative', height: 26 }}>
            <div style={{ position: 'absolute', left: 0, right: 0, top: 10, height: 6, background: AT.text, borderRadius: 999 }}/>
            <div style={{ position: 'absolute', left: 0, top: 4, width: 18, height: 18, borderRadius: 999, background: AT.text }}/>
            <div style={{ position: 'absolute', right: 0, top: 4, width: 18, height: 18, borderRadius: 999, background: AT.text }}/>
          </div>
          <div style={{ marginTop: 8, display: 'flex', justifyContent: 'space-between', fontSize: 11, color: AT.textSoft, fontWeight: 500 }}>
            <span>11 PM</span><span>1 AM</span><span>3 AM</span><span>5 AM</span>
          </div>
          <button style={{
            marginTop: 16, width: '100%', height: 48, borderRadius: 14,
            background: AT.primary, color: '#fff', border: 'none',
            fontSize: 15, fontWeight: 700, cursor: 'pointer',
            boxShadow: '0 2px 6px rgba(107,91,232,0.3)',
          }}>Adjust Sleep Schedule</button>
          <div style={{ marginTop: 10, textAlign: 'center', fontSize: 12, color: AT.textMute }}>
            🔔 Reminder set for 10:01 PM
          </div>
        </Card>
      </div>
      <BottomTabs active="schedule"/>
    </div>
  );
}

// ═══ SCREEN 2 — Schedule (NOW) ═══
function ScheduleNowScreen() {
  return (
    <div style={{ height: '100%', background: AT.bg, position: 'relative', overflow: 'hidden',
      fontFamily: '-apple-system, BlinkMacSystemFont, system-ui, sans-serif', color: AT.text }}>
      <AppStatusBar/>
      <PageHeader title="Schedule" sub="Sun–Mon, 20 Apr"/>
      <div style={{ padding: '16px 14px 0', display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Card style={{ padding: '20px 22px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: 1.3, color: AT.textMute }}>BEDTIME</div>
              <div style={{ fontSize: 32, fontWeight: 900, marginTop: 2, color: AT.danger, letterSpacing: -0.5 }}>NOW</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: 1.3, color: AT.textMute }}>WAKE UP</div>
              <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.5, marginTop: 2 }}>06:30 AM</div>
            </div>
          </div>
          <div style={{ marginTop: 16, position: 'relative', height: 26 }}>
            <div style={{ position: 'absolute', left: 0, right: 0, top: 10, height: 6, background: AT.text, borderRadius: 999 }}/>
            <div style={{ position: 'absolute', left: 0, top: 4, width: 18, height: 18, borderRadius: 999, background: AT.text }}/>
            <div style={{ position: 'absolute', right: 0, top: 4, width: 18, height: 18, borderRadius: 999, background: AT.text }}/>
            <div style={{ position: 'absolute', left: '18%', top: -4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: 4, height: 22, background: AT.strain, borderRadius: 2 }}/>
              <div style={{ width: 12, height: 12, borderRadius: 999, background: AT.strain, marginTop: -3, border: '2px solid #fff' }}/>
            </div>
          </div>
          <div style={{ marginTop: 8, display: 'flex', justifyContent: 'space-between', fontSize: 11, color: AT.textSoft, fontWeight: 500 }}>
            <span>12 AM</span><span>1 AM</span><span>2 AM</span><span>3 AM</span><span>4 AM</span><span>5 AM</span><span>6 AM</span>
          </div>
          <button style={{
            marginTop: 16, width: '100%', height: 48, borderRadius: 14,
            background: AT.primary, color: '#fff', border: 'none',
            fontSize: 15, fontWeight: 700, cursor: 'pointer',
            boxShadow: '0 2px 6px rgba(107,91,232,0.3)',
          }}>Adjust Sleep Schedule</button>
          <div style={{ marginTop: 10, textAlign: 'center', fontSize: 12, color: AT.textMute }}>
            🔔 Reminder set for 10:28 PM
          </div>
        </Card>
        <Card>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: -0.3 }}>Sleep Need</div>
            <div style={{ width: 22, height: 22, borderRadius: 999, background: '#E9E6EF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: AT.textMute }}>i</div>
          </div>
          <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <NeedRow dot={AT.text} label="Base Sleep" value="7h 30m"/>
            <NeedRow dot={AT.strain} label="Strain Sleep" value="14m"/>
            <NeedRow dot={AT.primary} label="Sleep Debt" value="1h 22m"/>
          </div>
          <div style={{ marginTop: 14, paddingTop: 14, borderTop: `1px solid ${AT.divider}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontSize: 15, fontWeight: 700 }}>Total Sleep Requirement</div>
            <div style={{ fontSize: 16, fontWeight: 800 }}>9h 6m</div>
          </div>
        </Card>
        <Card>
          <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: -0.3 }}>Reminders</div>
          <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 14 }}>
            <ReminderRow label="Wake-Up Alarm" toggle/>
            <ReminderRow label="Bedtime Reminder" toggle/>
          </div>
        </Card>
      </div>
      <BottomTabs active="schedule"/>
    </div>
  );
}

// ═══ SCREEN 3 — Performance 83% ring ═══
function PerformanceScreen() {
  const size = 200, stroke = 14, r = (size - stroke) / 2;
  const pct = 0.83;
  // Build an explicit arc path so html-to-image doesn't mishandle stroke-dasharray.
  const cx = size / 2, cy = size / 2;
  const startAngle = -Math.PI / 2; // 12 o'clock
  const endAngle = startAngle + 2 * Math.PI * pct;
  const sx = cx + r * Math.cos(startAngle);
  const sy = cy + r * Math.sin(startAngle);
  const ex = cx + r * Math.cos(endAngle);
  const ey = cy + r * Math.sin(endAngle);
  const largeArc = pct > 0.5 ? 1 : 0;
  const arcPath = `M ${sx} ${sy} A ${r} ${r} 0 ${largeArc} 1 ${ex} ${ey}`;
  return (
    <div style={{ height: '100%', background: AT.bg, position: 'relative', overflow: 'hidden',
      fontFamily: '-apple-system, BlinkMacSystemFont, system-ui, sans-serif', color: AT.text }}>
      <AppStatusBar/>
      <PageHeader title="Performance" sub="Sat–Sun, 19 Apr"/>
      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center' }}>
        <div style={{ position: 'relative', width: size, height: size }}>
          <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
            <circle cx={cx} cy={cy} r={r} stroke="#E9E6EF" strokeWidth={stroke} fill="none"/>
            <path d={arcPath} stroke={AT.text} strokeWidth={stroke} fill="none" strokeLinecap="round"/>
          </svg>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ fontSize: 52, fontWeight: 900, letterSpacing: -2, lineHeight: 1, color: AT.text }}>83%</div>
            <div style={{ fontSize: 13, color: AT.textMute, marginTop: 4, fontWeight: 500 }}>of needed</div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 18, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 12, fontSize: 13, fontWeight: 600, color: AT.text }}>
        <span>🌙 11:19 PM</span>
        <span style={{ color: AT.textSoft }}>│</span>
        <span>☀ 07:24 AM</span>
        <span style={{ color: AT.textSoft }}>│</span>
        <span>🛏 8h 5m</span>
      </div>
      <div style={{ padding: '14px 14px 0' }}>
        <SleepInsightCard>
          You didn't get as much sleep as you needed, especially because of caffeine that kept you up later than usual. Try going to bed earlier tonight to help catch up.
        </SleepInsightCard>
      </div>
      <div style={{ padding: '12px 14px 0', display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Card>
          <div style={{ fontSize: 17, fontWeight: 800, letterSpacing: -0.3 }}>Needed vs Actual</div>
          <div style={{ marginTop: 14 }}>
            <BarRow label="Actual" value="05:26" fill={AT.text} pct={0.59}/>
            <div style={{ height: 12 }}/>
            <BarRow label="Needed" value="09:13" segments={[
              { fill: AT.text, pct: 0.81 },
              { fill: AT.strain, pct: 0.08 },
              { fill: AT.primary, pct: 0.11 },
            ]}/>
          </div>
          <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 8, fontSize: 13 }}>
            <LegendRow dot={AT.text} label="Healthy" value="07:30"/>
            <LegendRow dot={AT.strain} label="Strain" value="00:46"/>
            <LegendRow dot={AT.primary} label="Debt" value="00:58"/>
          </div>
          <div style={{ marginTop: 14 }}>
            <StrainInsightInline>
              You were pretty active yesterday and had a higher heart rate all day, which means your body needed more recovery time than usual.
            </StrainInsightInline>
          </div>
        </Card>
      </div>
      <BottomTabs active="performance"/>
    </div>
  );
}

// ═══ SCREEN 4 — Performance: debt chart + weekly bars ═══
function DebtAreaChart() {
  const pts = [48, 42, 46, 44, 42, 42, 40, 38, 28, 42, 34, 30, 28, 32];
  const W = 380, H = 120, padL = 10, padR = 10, padT = 12, padB = 10;
  const stepX = (W - padL - padR) / (pts.length - 1);
  const maxV = 55, minV = 20;
  const y = (v) => padT + (H - padT - padB) * (1 - (v - minV) / (maxV - minV));
  const coords = pts.map((v, i) => [padL + i * stepX, y(v)]);
  const path = coords.map((p, i) => (i === 0 ? 'M' : 'L') + p.join(',')).join(' ');
  const area = `${path} L${W - padR},${H - padB} L${padL},${H - padB} Z`;
  const last = coords[coords.length - 1];
  return (
    <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} style={{ display: 'block', marginTop: 12 }}>
      <defs>
        <linearGradient id="debtGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={AT.primary} stopOpacity="0.28"/>
          <stop offset="100%" stopColor={AT.primary} stopOpacity="0.06"/>
        </linearGradient>
      </defs>
      <line x1={padL} y1={padT+5} x2={W-padR} y2={padT+5} stroke="#E9E6EF" strokeWidth="1"/>
      <line x1={padL} y1={(padT+(H-padT-padB)/2)} x2={W-padR} y2={(padT+(H-padT-padB)/2)} stroke="#E9E6EF" strokeWidth="1"/>
      <line x1={padL} y1={H-padB-2} x2={W-padR} y2={H-padB-2} stroke="#E9E6EF" strokeWidth="1"/>
      <path d={area} fill="url(#debtGrad)"/>
      <path d={path} fill="none" stroke={AT.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      {coords.map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r="3" fill="#fff" stroke={AT.primary} strokeWidth="1.5"/>
      ))}
      <circle cx={last[0]} cy={last[1]} r="5" fill={AT.primary}/>
    </svg>
  );
}
function WeeklyBars() {
  const data = [73, 90, 46, 78, 83, 73, 83];
  const days = ['Mo','Tu','We','Th','Fr','Sa','Su'];
  const avg = 75;
  const H = 150;
  return (
    <div style={{ marginTop: 10 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 8px', fontSize: 11.5, fontWeight: 600 }}>
        {data.map((v, i) => (
          <span key={i} style={{ color: i === 6 ? AT.text : AT.textMute, fontWeight: i === 6 ? 800 : 600 }}>{v}%</span>
        ))}
      </div>
      <div style={{ position: 'relative', height: H, marginTop: 8 }}>
        <div style={{ position: 'absolute', left: 0, right: 0, top: `${(1 - avg / 100) * H}px`, borderTop: `1.5px dashed ${AT.textSoft}` }}/>
        <div style={{ position: 'absolute', right: 4, top: `${(1 - avg / 100) * H - 16}px`, fontSize: 10.5, color: AT.textSoft, fontWeight: 600 }}>avg 75%</div>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '0 6px' }}>
          {data.map((v, i) => (
            <div key={i} style={{ width: 30, height: `${v}%`, background: i === 6 ? AT.text : '#D7D5DE', borderRadius: '6px 6px 0 0' }}/>
          ))}
        </div>
      </div>
      <div style={{ marginTop: 8, display: 'flex', justifyContent: 'space-between', padding: '0 8px', fontSize: 12, color: AT.textSoft, fontWeight: 500 }}>
        {days.map((d, i) => (
          <span key={i} style={{ color: i === 6 ? AT.text : AT.textSoft, fontWeight: i === 6 ? 700 : 500 }}>{d}</span>
        ))}
      </div>
    </div>
  );
}
function DebtScreen() {
  return (
    <div style={{ height: '100%', background: AT.bg, position: 'relative', overflow: 'hidden',
      fontFamily: '-apple-system, BlinkMacSystemFont, system-ui, sans-serif', color: AT.text }}>
      <AppStatusBar/>
      <PageHeader title="Performance" sub="Sat–Sun, 19 Apr"/>
      <div style={{ padding: '12px 14px 0', display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Card>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: -0.3 }}>Sleep Debt</div>
              <div style={{ fontSize: 12.5, color: AT.textMute, marginTop: 2 }}>Over Past Two Weeks</div>
            </div>
            <div style={{ fontSize: 22, fontWeight: 800, color: AT.primary, letterSpacing: -0.5 }}>1h 21m</div>
          </div>
          <DebtAreaChart/>
          <div style={{ marginTop: 8, display: 'flex', justifyContent: 'space-between', fontSize: 10.5, color: AT.textSoft, fontWeight: 600, paddingLeft: 4 }}>
            {['Mo','Tu','We','Th','Fr','Sa','Su','Mo','Tu','We','Th','Fr','Sa','Su'].map((d, i) => (
              <span key={i} style={{ color: i === 13 ? AT.text : AT.textSoft, fontWeight: i === 13 ? 700 : 500 }}>{d}</span>
            ))}
          </div>
        </Card>
        <Card>
          <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: -0.3 }}>Sleep Performance</div>
          <div style={{ fontSize: 12.5, color: AT.textMute, marginTop: 2 }}>This Week</div>
          <WeeklyBars/>
        </Card>
      </div>
      <BottomTabs active="performance"/>
    </div>
  );
}

// ═══ SCREEN 5 — Sleep Need focus ═══
function SleepNeedScreen() {
  return (
    <div style={{ height: '100%', background: AT.bg, position: 'relative', overflow: 'hidden',
      fontFamily: '-apple-system, BlinkMacSystemFont, system-ui, sans-serif', color: AT.text }}>
      <AppStatusBar/>
      <PageHeader title="Schedule" sub="Sat–Sun, 18 Apr"/>
      <div style={{ padding: '14px 14px 0', display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ padding: '4px 6px 0' }}>
          <div style={{ fontSize: 26, fontWeight: 900, letterSpacing: -0.7, color: AT.text }}>
            Factors <span style={{ fontWeight: 700, color: AT.textMute }}>(Beta)</span>
          </div>
          <div style={{ marginTop: 6, fontSize: 13, color: AT.textMute, lineHeight: 1.45, fontWeight: 500 }}>
            Factors adapt to <strong style={{ color: AT.text, fontWeight: 700 }}>you</strong> as you log more. Starting with caffeine — more factors coming soon.
          </div>
        </div>
        <div style={{
          background: 'rgba(14,14,18,0.05)', borderRadius: 14, padding: '12px 14px',
          display: 'flex', alignItems: 'flex-start', gap: 10,
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
            <circle cx="12" cy="12" r="9" stroke={AT.textMute} strokeWidth="1.6"/>
            <path d="M12 11v5M12 8.5v0.01" stroke={AT.textMute} strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
          <div style={{ fontSize: 12.5, color: AT.textMute, lineHeight: 1.45, fontWeight: 500 }}>
            Logging more details helps TuckIn personalise your recommendations over time.
          </div>
        </div>
        <CaffeineFactorCard expanded={true}/>
        <CaffeineInsightCard>
          Late caffeine has been hurting sleep. Tonight, you're projected to be in the moderate caffeine zone, which may impact your sleep negatively.
        </CaffeineInsightCard>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, opacity: 0.55 }}>
          <div style={{ background: AT.card, borderRadius: 16, padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12, boxShadow: '0 1px 3px rgba(14,14,18,0.04)' }}>
            <div style={{ width: 32, height: 32, borderRadius: 9, background: '#EEEAF8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M6 12h12M6 16h8M6 8h12" stroke={AT.primary} strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </div>
            <div style={{ fontSize: 14, fontWeight: 700, color: AT.text }}>Alcohol</div>
            <div style={{ flex: 1 }}/>
            <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: 1, color: AT.textMute }}>SOON</div>
          </div>
          <div style={{ background: AT.card, borderRadius: 16, padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12, boxShadow: '0 1px 3px rgba(14,14,18,0.04)' }}>
            <div style={{ width: 32, height: 32, borderRadius: 9, background: '#FDECDC', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 4v8l5 3" stroke={AT.strain} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="8" stroke={AT.strain} strokeWidth="1.8"/>
              </svg>
            </div>
            <div style={{ fontSize: 14, fontWeight: 700, color: AT.text }}>Late meals</div>
            <div style={{ flex: 1 }}/>
            <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: 1, color: AT.textMute }}>SOON</div>
          </div>
        </div>
      </div>
      <BottomTabs active="schedule"/>
    </div>
  );
}

Object.assign(window, {
  ScheduleFutureScreen, ScheduleNowScreen, PerformanceScreen, DebtScreen, SleepNeedScreen,
});
