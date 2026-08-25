// ==========================================================
// MOBILE SITE — Regional Lab 専用モバイルレイアウト
// ==========================================================

const mPalette = {
  paper: '#f1ead8',
  paperDeep: '#e6dcc0',
  ink: '#1f1a14',
  ai: '#1f3552',
  koke: '#5a6b3d',
  akane: '#9a3324',
  muted: '#766a52',
};
const mFont = {
  jpSerif: '"Zen Old Mincho", "Noto Serif JP", serif',
  jpAlt: '"Shippori Mincho", "Noto Serif JP", serif',
  enSerif: '"Cormorant Garamond", serif',
  mono: '"JetBrains Mono", ui-monospace, monospace',
};

// ----------------------------------------------------------
// Mobile Nav (hamburger drawer)
// ----------------------------------------------------------
function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const navItems = [
    ['ホーム', 'home'],
    ['私たちについて', 'about'],
    ['会社概要', 'company'],
    ['事業概要', 'business'],
    ['お知らせ', 'news'],
    ['パートナー', 'partners'],
    ['お問い合わせ', 'contact'],
  ];
  return (
    <React.Fragment>
      <div style={{
        position: 'sticky', top: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '14px 18px',
        background: mPalette.paper,
        borderBottom: `1px solid ${mPalette.ink}22`,
      }}>
        <div onClick={() => { window.saiNavigate && window.saiNavigate('home'); setOpen(false); }} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 44, height: 44, borderRadius: 22, overflow: 'hidden', flexShrink: 0 }}>
            <img src="assets/logo-regionallab.png" alt="Regional Lab" style={{ width: '135%', height: '135%', objectFit: 'cover', marginLeft: '-17.5%', marginTop: '-17.5%', display: 'block' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1, gap: 3 }}>
            <div style={{ fontFamily: mFont.jpSerif, fontSize: 19, fontWeight: 600, letterSpacing: 0.5, color: mPalette.ink }}>Regional Lab</div>
            <div style={{ fontFamily: mFont.jpSerif, fontSize: 13.5, fontWeight: 600, letterSpacing: 5, color: mPalette.ink, marginTop: 5, paddingLeft: 42 }}>{window.t('株式会社')}</div>
          </div>
        </div>
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          style={{ background: 'none', border: 'none', padding: 8, cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 5 }}
        >
          <span style={{ width: 24, height: 2, background: mPalette.ink, display: 'block', transition: 'all 0.2s', transform: open ? 'translateY(7px) rotate(45deg)' : 'none' }}></span>
          <span style={{ width: 24, height: 2, background: mPalette.ink, display: 'block', opacity: open ? 0 : 1, transition: 'all 0.2s' }}></span>
          <span style={{ width: 24, height: 2, background: mPalette.ink, display: 'block', transition: 'all 0.2s', transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none' }}></span>
        </button>
      </div>
      {open && (
        <div style={{
          position: 'fixed', top: 73, left: 0, right: 0, bottom: 0, zIndex: 99,
          background: mPalette.paper,
          padding: '40px 24px',
          display: 'flex', flexDirection: 'column', gap: 4,
        }}>
          {navItems.map(([jp, en]) => (
            <div
              key={en}
              onClick={() => { window.saiNavigate && window.saiNavigate(en); setOpen(false); }}
              style={{
                padding: '18px 8px',
                borderBottom: `1px solid ${mPalette.ink}22`,
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                cursor: 'pointer',
              }}
            >
              <span style={{ fontFamily: mFont.jpSerif, fontSize: 18, color: mPalette.ink, letterSpacing: 2 }}>{window.t(jp)}</span>
              <span style={{ fontFamily: mFont.mono, fontSize: 10, letterSpacing: 2, color: mPalette.akane }}>{en.toUpperCase()} →</span>
            </div>
          ))}
          <div
            onClick={() => window.saiSetLang(window.saiLang === 'en' ? 'ja' : 'en')}
            style={{ marginTop: 20, padding: '14px 8px', border: `1px solid ${mPalette.ink}`, display: 'flex', gap: 8, justifyContent: 'center', alignItems: 'center', fontFamily: mFont.mono, fontSize: 13, letterSpacing: 2, cursor: 'pointer' }}
          >
            <span style={{ opacity: window.saiLang === 'ja' ? 1 : 0.4, fontWeight: window.saiLang === 'ja' ? 700 : 400 }}>JP</span>
            <span style={{ opacity: 0.4 }}>/</span>
            <span style={{ opacity: window.saiLang === 'en' ? 1 : 0.4, fontWeight: window.saiLang === 'en' ? 700 : 400 }}>EN</span>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

// ----------------------------------------------------------
// Mobile Footer (compact CTA + sitemap)
// ----------------------------------------------------------
function MobileFooter() {
  const navItems = [
    ['私たちについて', 'about'],
    ['会社概要', 'company'],
    ['事業概要', 'business'],
    ['お知らせ', 'news'],
    ['パートナー', 'partners'],
    ['お問い合わせ', 'contact'],
  ];
  return (
    <div style={{ background: mPalette.paper, padding: '64px 24px 32px' }}>
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <div style={{ fontFamily: mFont.mono, fontSize: 10, letterSpacing: 3, color: mPalette.akane, marginBottom: 16 }}>—— TOGETHER</div>
        <h2 style={{ fontFamily: mFont.jpSerif, fontSize: 28, fontWeight: 400, margin: 0, color: mPalette.ink, letterSpacing: '0.04em', lineHeight: 1.5 }}>
          {window.t('その地に、もう一度、')}<br /><span style={{ color: mPalette.ai }}>{window.t('光を。')}</span>
        </h2>
      </div>
      <div style={{ borderTop: `1px solid ${mPalette.ink}33`, paddingTop: 28, display: 'flex', flexDirection: 'column', gap: 2 }}>
        {navItems.map(([jp, en]) => (
          <div
            key={en}
            onClick={() => window.saiNavigate && window.saiNavigate(en)}
            style={{
              padding: '14px 4px', borderBottom: `1px solid ${mPalette.ink}11`,
              display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer',
            }}
          >
            <span style={{ fontFamily: mFont.jpSerif, fontSize: 15, letterSpacing: 2, color: mPalette.ink }}>{window.t(jp)}</span>
            <span style={{ fontFamily: mFont.mono, fontSize: 9, letterSpacing: 2, color: mPalette.akane }}>{en.toUpperCase()}</span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 32, paddingTop: 20, borderTop: `1px solid ${mPalette.ink}22`, display: 'flex', flexDirection: 'column', gap: 8, fontFamily: mFont.mono, fontSize: 10, letterSpacing: 1.5, color: mPalette.muted, textAlign: 'center' }}>
        <span>© REGIONAL LAB 株式会社 2026</span>
        <span>{window.t('魚沼エリア × 宮城エリア × 東京エリア')}</span>
      </div>
    </div>
  );
}

// ----------------------------------------------------------
// Mobile Page Header (used by sub-pages)
// ----------------------------------------------------------
function MobilePageHeader({ no, jp, en, lead }) {
  return (
    <div style={{ background: mPalette.paperDeep, padding: '48px 24px 40px', borderBottom: `1px solid ${mPalette.ink}22` }}>
      <div style={{ fontFamily: mFont.mono, fontSize: 10, letterSpacing: 3, color: mPalette.akane, marginBottom: 14 }}>SECTION {no} — {en.toUpperCase()}</div>
      <h1 style={{ fontFamily: mFont.jpSerif, fontSize: 40, fontWeight: 500, margin: 0, color: mPalette.ink, letterSpacing: '0.05em', lineHeight: 1.2 }}>{jp}</h1>
      <div style={{ fontFamily: mFont.enSerif, fontStyle: 'italic', fontSize: 20, color: mPalette.muted, marginTop: 8 }}>{en}</div>
      {lead && <p style={{ marginTop: 20, fontFamily: mFont.jpSerif, fontSize: 14, color: mPalette.ink, lineHeight: 2, margin: '20px 0 0' }}>{lead}</p>}
    </div>
  );
}

// ----------------------------------------------------------
// HOME
// ----------------------------------------------------------
function MobileHome() {
  const business = window.siteData.business.map(b => ({
    ...b,
    bodyText: Array.isArray(b.body) ? b.body.join('') : b.body,
  }));
  const events = window.siteData.timeline.map(([date, title, place]) => [date, title, place]);

  return (
    <div style={{ background: mPalette.paper }}>
      {/* HERO */}
      <div style={{ padding: '40px 24px 56px', background: `linear-gradient(180deg, ${mPalette.paper} 0%, ${mPalette.paperDeep} 100%)`, position: 'relative' }}>
        <div style={{ fontFamily: mFont.mono, fontSize: 10, letterSpacing: 3, color: mPalette.akane, marginBottom: 24 }}>—— {window.t('新潟県南魚沼市を支え続ける企業へ')} ——</div>
        <h1 style={{ fontFamily: mFont.jpSerif, fontSize: 44, fontWeight: 500, margin: 0, color: mPalette.ink, letterSpacing: '0.04em', lineHeight: 1.3 }}>
          <span style={{ display: 'block', whiteSpace: window.saiLang === 'en' ? 'normal' : 'nowrap' }}>{window.t('地方の未来を、')}</span>
          <span style={{ display: 'block', whiteSpace: window.saiLang === 'en' ? 'normal' : 'nowrap' }}>{window.t('彩る組織へ')}</span>
        </h1>
        <div style={{ marginTop: 32, position: 'relative', paddingTop: 64, paddingLeft: 52 }}>
          {/* 藍色の和紙パネル（背面） */}
          <div style={{
            position: 'absolute', top: 0, left: 0,
            width: '94%', height: '90%',
            background: mPalette.ai,
          }} />
          {/* ロゴ画像（前面・重なり） */}
          <div style={{ position: 'relative', width: '100%', aspectRatio: '4/5', overflow: 'hidden', background: '#d5d492' }}>
            <img src="assets/hero-logo-hq.png" alt="Regional Lab" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
      </div>

      {/* MISSION — 理念 / 使命 / 展望 */}
      <div style={{ background: mPalette.paperDeep, padding: '64px 24px' }}>
        <div style={{ fontFamily: mFont.mono, fontSize: 10, letterSpacing: 3, color: mPalette.akane, marginBottom: 18 }}>—— {window.t('─ 理念 / 使命 / 展望').replace('─ ', '')}</div>
        <h2 style={{ fontFamily: mFont.jpSerif, fontSize: 30, fontWeight: 400, color: mPalette.ink, letterSpacing: '0.04em', lineHeight: 1.5, margin: 0 }}>
          {window.siteData.mission.heading.map((h, i) => (
            <React.Fragment key={i}>
              {h[0]}<span style={{ color: h[2] === 'akane' ? mPalette.akane : mPalette.ai }}>{h[1]}</span>{h[3]}
              {i === 0 && <br />}
            </React.Fragment>
          ))}
        </h2>
        <p style={{ fontFamily: mFont.jpSerif, fontSize: 14, color: mPalette.ink, lineHeight: 2, margin: '28px 0 32px' }}>
          {window.siteData.mission.body}
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {[
            { label: 'PHILOSOPHY', jp: window.t('理念'), body: window.siteData.about.pillars[0][1], bg: mPalette.paper, color: mPalette.ink },
            { label: 'MISSION', jp: window.t('使命'), body: window.siteData.about.pillars[1][1], bg: mPalette.ai, color: mPalette.paper },
            { label: 'VISION', jp: window.t('展望'), body: window.siteData.about.pillars[2][1], bg: mPalette.koke, color: mPalette.paper },
          ].map(c => (
            <div key={c.label} style={{ background: c.bg, color: c.color, padding: '22px 20px', borderRadius: 4 }}>
              <div style={{ fontFamily: mFont.mono, fontSize: 9, letterSpacing: 3, opacity: 0.7 }}>{c.label}</div>
              <div style={{ fontFamily: mFont.jpSerif, fontSize: 14, letterSpacing: 5, marginTop: 4, opacity: 0.85 }}>{c.jp}</div>
              <div style={{ fontFamily: mFont.jpSerif, fontSize: 17, lineHeight: 1.8, letterSpacing: '0.04em', marginTop: 12 }}>{c.body}</div>
            </div>
          ))}
        </div>
      </div>

      {/* BUSINESS — 四つの柱 */}
      <div style={{ padding: '64px 24px', background: mPalette.paper }}>
        <div style={{ marginBottom: 36 }}>
          <h2 style={{ fontFamily: mFont.jpSerif, fontSize: 40, fontWeight: 400, margin: 0, color: mPalette.ink, letterSpacing: '0.04em' }}>
            {window.t('四つの')}<span style={{ color: mPalette.akane }}>{window.t('柱')}</span>
          </h2>
          <div style={{ fontFamily: mFont.mono, fontSize: 10, letterSpacing: 3, color: mPalette.muted, marginTop: 6 }}>OUR BUSINESS — 04 SECTORS</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
          {business.map((s, i) => (
            <div key={s.tag} style={{ background: mPalette.paperDeep, padding: 20, position: 'relative' }}>
              <div style={{ position: 'absolute', top: -8, left: 20, fontFamily: mFont.mono, fontSize: 10, letterSpacing: 3, background: mPalette.paper, padding: '4px 8px', color: s.accent }}>
                0{i+1} / 0{business.length}
              </div>
              {s.img ? (
                <div style={{ width: '100%', aspectRatio: '16/10', overflow: 'hidden', marginTop: 8 }}>
                  <img src={s.img} alt={s.tag} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              ) : (
                <div style={{ width: '100%', aspectRatio: '16/10', marginTop: 8, background: `linear-gradient(135deg, ${s.accent}22 0%, ${s.accent}44 100%)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: mFont.mono, fontSize: 10, letterSpacing: 3, color: s.accent }}>
                  {s.en}
                </div>
              )}
              <div style={{ marginTop: 18, fontFamily: mFont.jpAlt, fontSize: 26, color: s.accent, letterSpacing: 1 }}>{s.tag}</div>
              <div style={{ fontFamily: mFont.jpSerif, fontSize: 13, letterSpacing: 3, color: mPalette.muted, marginTop: 4 }}>{s.jp}</div>
              <p style={{ fontFamily: mFont.jpSerif, fontSize: 14, lineHeight: 2, color: mPalette.ink, marginTop: 14, margin: '14px 0 16px' }}>
                {s.bodyText}
              </p>
              <div style={{
                padding: '10px 14px', background: s.accent, color: mPalette.paper,
                alignSelf: 'flex-start', display: 'inline-block',
                fontFamily: mFont.jpSerif, fontSize: 13, letterSpacing: 3,
              }}>
                「{s.key}」
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TIMELINE */}
      {/* TIMELINE — 右から左へ無限スクロール（回転寿司式） */}
      <div style={{ background: mPalette.aiDeep || '#13243a', padding: '56px 0', color: mPalette.paper, overflow: 'hidden' }}>
        <div style={{ padding: '0 24px', marginBottom: 28 }}>
          <h2 style={{ fontFamily: mFont.jpSerif, fontSize: 32, fontWeight: 400, margin: 0, color: mPalette.paper, letterSpacing: '0.04em' }}>
            {window.t('歩みは続く')}<span style={{ fontFamily: mFont.enSerif, fontStyle: 'italic', color: '#c2452f', fontSize: 20 }}> — ongoing.</span>
          </h2>
          <div style={{ fontFamily: mFont.mono, fontSize: 10, letterSpacing: 3, color: mPalette.paper, opacity: 0.7, marginTop: 8 }}>EVENTS — 2024–2026</div>
        </div>
        <div style={{ overflow: 'hidden', width: '100%' }}>
          <div className="m-marquee" style={{ display: 'flex', gap: 14, width: 'max-content', paddingLeft: 14 }}>
            {[...window.siteData.timeline, ...window.siteData.timeline].map(([date, name, loc, img], i) => (
              <div key={i} style={{
                flexShrink: 0, width: 200, height: 280,
                border: `1px solid ${mPalette.paper}33`,
                position: 'relative', overflow: 'hidden',
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                padding: 16,
              }}>
                {img && (
                  <React.Fragment>
                    <img src={img} alt={name} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
                    <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(180deg, rgba(19,36,58,0.6) 0%, rgba(19,36,58,0.2) 40%, rgba(19,36,58,0.93) 100%)' }} />
                  </React.Fragment>
                )}
                <div style={{ fontFamily: mFont.mono, fontSize: 10, letterSpacing: 2, position: 'relative', zIndex: 2 }}>{date}</div>
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <div style={{ fontFamily: mFont.jpSerif, fontSize: 15, lineHeight: 1.6, letterSpacing: '0.04em' }}>{name}</div>
                  <div style={{ fontFamily: mFont.mono, fontSize: 9, letterSpacing: 2, opacity: 0.85, marginTop: 6 }}>{loc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @keyframes mMarquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
          .m-marquee { animation: mMarquee 32s linear infinite; }
        `}</style>
      </div>

      <MobileFooter />
    </div>
  );
}

// ----------------------------------------------------------
// ABOUT
// ----------------------------------------------------------
function MobileAbout() {
  const about = window.siteData.about;
  const members = about.members.map(m => ({
    ...m,
    bio: Array.isArray(m.bio) ? m.bio.join('') : m.bio,
  }));
  const pillarColors = ['#c2452f', '#d8a13a', '#9bb06a'];
  return (
    <div style={{ background: mPalette.paper }}>
      <MobilePageHeader no="01" jp={window.t('私たちについて')} en="About Us" lead={about.lead} />
      <div style={{ padding: '48px 24px' }}>
        {/* 目的 */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ fontFamily: mFont.mono, fontSize: 10, letterSpacing: 3, color: mPalette.akane, marginBottom: 14 }}>SECTION 01 — PURPOSE</div>
          <div style={{ background: mPalette.paperDeep, padding: 22, borderLeft: `4px solid ${mPalette.akane}` }}>
            <h2 style={{ fontFamily: mFont.jpSerif, fontSize: 22, fontWeight: 500, margin: '0 0 16px', color: mPalette.ink, letterSpacing: '0.04em', lineHeight: 1.6 }}>
              {about.purpose.heading}
            </h2>
            <p style={{ fontFamily: mFont.jpSerif, fontSize: 14, color: mPalette.muted, lineHeight: 2, margin: 0 }}>
              {about.purpose.body}
            </p>
          </div>
        </div>

        {/* 設立背景 */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ fontFamily: mFont.mono, fontSize: 10, letterSpacing: 3, color: mPalette.ai, marginBottom: 10 }}>BACKGROUND</div>
          <h3 style={{ fontFamily: mFont.jpSerif, fontSize: 20, fontWeight: 500, margin: '0 0 16px', color: mPalette.ink, letterSpacing: '0.04em' }}>
            {about.background.heading}
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {about.background.paragraphs.map((p, i) => (
              <p key={i} style={{ fontFamily: mFont.jpSerif, fontSize: 14, color: mPalette.ink, lineHeight: 2, margin: 0 }}>{p}</p>
            ))}
          </div>
        </div>

        {/* 三本柱 理念/使命/展望 */}
        <div style={{ margin: '0 -24px 40px', background: mPalette.ai, color: mPalette.paper, padding: '36px 24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {about.pillars.map(([label, body], i) => (
              <div key={label} style={{ borderLeft: `2px solid ${pillarColors[i]}`, paddingLeft: 16 }}>
                <div style={{ fontFamily: mFont.mono, fontSize: 10, letterSpacing: 3, opacity: 0.7 }}>{label}</div>
                <div style={{ fontFamily: mFont.jpSerif, fontSize: 17, lineHeight: 1.8, marginTop: 8, letterSpacing: '0.04em' }}>{body}</div>
              </div>
            ))}
          </div>
        </div>

        {/* メンバー */}
        <div>
          <div style={{ fontFamily: mFont.mono, fontSize: 10, letterSpacing: 3, color: mPalette.akane, marginBottom: 18 }}>SECTION 02 — MEMBERS</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {members.map((m, i) => (
              <div key={m.jp} style={{ background: mPalette.paperDeep, padding: 22 }}>
                {m.img && (
                  <div style={{ width: '100%', aspectRatio: '4/3', overflow: 'hidden', marginBottom: 16 }}>
                    <img src={m.img} alt={m.jp} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                )}
                <div style={{ fontFamily: mFont.mono, fontSize: 10, letterSpacing: 2, color: mPalette.akane, marginBottom: 10 }}>{m.role}</div>
                <div style={{ fontFamily: mFont.jpSerif, fontSize: 22, color: mPalette.ink, letterSpacing: '0.05em' }}>{m.jp}</div>
                <div style={{ fontFamily: mFont.enSerif, fontStyle: 'italic', fontSize: 16, color: mPalette.ai, marginTop: 4 }}>{m.en}</div>
                <p style={{ fontFamily: mFont.jpSerif, fontSize: 13, color: mPalette.ink, lineHeight: 1.9, marginTop: 14, margin: '14px 0 0' }}>{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <MobileFooter />
    </div>
  );
}

// ----------------------------------------------------------
// COMPANY
// ----------------------------------------------------------
function MobileCompany() {
  const services = window.siteData.company.services;
  const companyInfo = window.siteData.company.info;
  const info = [
    [window.t('会社名'), window.saiLang === 'en' ? 'Regional Lab Inc.' : 'Regional Lab 株式会社'],
    [window.t('英名'), 'Regional Lab Inc.'],
    [window.t('設立'), companyInfo.founded],
    [window.t('代表'), window.saiLang === 'en' ? 'Kidera Soma' : '木寺 蒼真'],
    [window.t('資本金'), companyInfo.capital],
    [window.t('役員'), companyInfo.officers],
  ];
  const offices = companyInfo.offices;
  return (
    <div style={{ background: mPalette.paper }}>
      <MobilePageHeader no="02" jp={window.t('会社概要')} en="Company" lead={window.siteData.company.lead} />
      <div style={{ padding: '48px 24px' }}>
        <div style={{ marginBottom: 40 }}>
          <div style={{ fontFamily: mFont.mono, fontSize: 10, letterSpacing: 3, color: mPalette.akane, marginBottom: 14 }}>SECTION 01 — BUSINESS</div>
          <h2 style={{ fontFamily: mFont.jpSerif, fontSize: 28, margin: '0 0 24px', color: mPalette.ink, letterSpacing: '0.04em', fontWeight: 500 }}>{window.t('事業紹介')}</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {services.map(s => (
              <div key={s.tag} style={{ background: mPalette.paperDeep, padding: 20, borderTop: `2px solid ${s.color}` }}>
                <div style={{ fontFamily: mFont.jpAlt, fontSize: 22, color: s.color, letterSpacing: 1 }}>{s.tag}</div>
                <div style={{ fontFamily: mFont.jpSerif, fontSize: 13, letterSpacing: 3, color: mPalette.muted, marginTop: 4 }}>{s.jp}</div>
                <p style={{ fontFamily: mFont.jpSerif, fontSize: 13, lineHeight: 1.9, color: mPalette.ink, marginTop: 12, margin: '12px 0 0' }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: 40 }}>
          <div style={{ fontFamily: mFont.mono, fontSize: 10, letterSpacing: 3, color: mPalette.akane, marginBottom: 14 }}>SECTION 02 — CORPORATE PROFILE</div>
          <h2 style={{ fontFamily: mFont.jpSerif, fontSize: 28, margin: '0 0 24px', color: mPalette.ink, letterSpacing: '0.04em', fontWeight: 500 }}>{window.t('会社情報')}</h2>
          <div style={{ background: mPalette.paperDeep, padding: 22, display: 'flex', flexDirection: 'column', gap: 14 }}>
            {info.map(([k, v]) => (
              <div key={k} style={{ display: 'flex', flexDirection: 'column', gap: 4, paddingBottom: 12, borderBottom: `1px solid ${mPalette.ink}22` }}>
                <div style={{ fontFamily: mFont.mono, fontSize: 10, letterSpacing: 2, color: mPalette.akane }}>{k.toUpperCase()}</div>
                <div style={{ fontFamily: mFont.jpSerif, fontSize: 14, color: mPalette.ink, letterSpacing: 1 }}>{v}</div>
              </div>
            ))}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ fontFamily: mFont.mono, fontSize: 10, letterSpacing: 2, color: mPalette.akane }}>LOCATIONS</div>
              {offices.map(([k, v]) => (
                <div key={k} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <span style={{ background: mPalette.akane, color: mPalette.paper, fontFamily: mFont.jpSerif, fontSize: 11, letterSpacing: 2, padding: '4px 10px', alignSelf: 'flex-start' }}>{k}</span>
                  <div style={{ fontFamily: mFont.jpSerif, fontSize: 13, color: mPalette.ink, lineHeight: 1.7 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
      <MobileFooter />
    </div>
  );
}

// ----------------------------------------------------------
// NEWS
// ----------------------------------------------------------
function MobileNews() {
  const articles = window.siteData.news.articles;
  const cats = ['ALL', ...Array.from(new Set(articles.map(a => a.cat)))];
  const [active, setActive] = React.useState('ALL');
  const [open, setOpen] = React.useState(null);
  const shown = active === 'ALL' ? articles : articles.filter(a => a.cat === active);
  return (
    <div style={{ background: mPalette.paper }}>
      <MobilePageHeader no="03" jp={window.t('お知らせ')} en="News" lead={window.siteData.news.lead} />
      <div style={{ padding: '40px 24px 48px' }}>
        <div style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
          {cats.map((c) => (
            <div key={c} onClick={() => setActive(c)} style={{
              padding: '8px 16px',
              border: `1px solid ${mPalette.ink}`,
              background: active === c ? mPalette.ink : 'transparent',
              color: active === c ? mPalette.paper : mPalette.ink,
              fontFamily: mFont.mono, fontSize: 11, letterSpacing: 2, cursor: 'pointer',
            }}>{c}</div>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {shown.map(a => (
            <div key={a.no} onClick={() => setOpen(a)} style={{
              background: mPalette.paperDeep,
              padding: 20,
              display: 'flex', flexDirection: 'column', gap: 14,
              borderLeft: `4px solid ${a.catColor}`,
              cursor: 'pointer',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                <span style={{ fontFamily: mFont.mono, fontSize: 10, letterSpacing: 2, color: mPalette.muted }}>{a.date}</span>
                <span style={{ fontFamily: mFont.mono, fontSize: 9, letterSpacing: 2, color: a.catColor, border: `1px solid ${a.catColor}`, padding: '3px 8px' }}>{a.cat}</span>
                <span style={{ fontFamily: mFont.enSerif, fontStyle: 'italic', fontSize: 13, color: mPalette.muted, marginLeft: 'auto' }}>No. {a.no}</span>
              </div>
              {a.img && (
                <div style={{ width: '100%', aspectRatio: '4/3', overflow: 'hidden' }}>
                  <img src={a.img} alt={a.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              )}
              <h3 style={{ fontFamily: mFont.jpSerif, fontSize: 17, fontWeight: 500, margin: 0, letterSpacing: '0.04em', lineHeight: 1.55 }}>{a.title}</h3>
              <p style={{ fontFamily: mFont.jpSerif, fontSize: 13, lineHeight: 1.95, color: mPalette.akane, margin: 0 }}>{a.lead}</p>
              <p style={{ fontSize: 12, lineHeight: 2, color: mPalette.ink, margin: 0 }}>{a.body}</p>
              <div style={{ fontFamily: mFont.enSerif, fontStyle: 'italic', fontSize: 13, color: mPalette.ink, borderBottom: `1px solid ${mPalette.ink}`, display: 'inline-block', alignSelf: 'flex-start', paddingBottom: 2 }}>
                Read more →
              </div>
            </div>
          ))}
        </div>
      </div>
      {open && <MobileNewsModal article={open} onClose={() => setOpen(null)} />}
      <MobileFooter />
    </div>
  );
}

function MobileNewsModal({ article: a, onClose }) {
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, []);
  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, zIndex: 1000,
      background: 'rgba(20,16,10,0.6)', overflowY: 'auto',
      display: 'flex', flexDirection: 'column',
    }}>
      <div onClick={(e) => e.stopPropagation()} style={{
        background: mPalette.paper, minHeight: '100%',
        borderTop: `5px solid ${a.catColor}`, position: 'relative',
      }}>
        <button onClick={onClose} aria-label="閉じる" style={{
          position: 'fixed', top: 16, right: 16, zIndex: 2,
          width: 46, height: 46, borderRadius: 23, border: 'none',
          background: mPalette.ink, color: mPalette.paper, fontSize: 22, cursor: 'pointer',
        }}>×</button>
        {a.img && (
          <div style={{ width: '100%', aspectRatio: '4/3', overflow: 'hidden' }}>
            <img src={a.img} alt={a.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        )}
        <div style={{ padding: '32px 24px 64px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16, flexWrap: 'wrap' }}>
            <span style={{ fontFamily: mFont.mono, fontSize: 10, letterSpacing: 2, color: a.catColor, border: `1px solid ${a.catColor}`, padding: '4px 10px' }}>{a.cat}</span>
            <span style={{ fontFamily: mFont.mono, fontSize: 11, letterSpacing: 2, color: mPalette.muted }}>{a.date}</span>
            <span style={{ fontFamily: mFont.enSerif, fontStyle: 'italic', fontSize: 13, color: mPalette.muted, marginLeft: 'auto' }}>No. {a.no}</span>
          </div>
          <h2 style={{ fontFamily: mFont.jpSerif, fontSize: 24, fontWeight: 500, margin: 0, letterSpacing: '0.04em', lineHeight: 1.5 }}>{a.title}</h2>
          <p style={{ fontFamily: mFont.jpSerif, fontSize: 15, lineHeight: 2, color: a.catColor, margin: '18px 0 20px' }}>{a.lead}</p>
          <p style={{ fontSize: 14, lineHeight: 2.2, color: mPalette.ink, margin: 0 }}>{a.body}</p>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------
// PARTNERS
// ----------------------------------------------------------
function MobilePartners() {
  const partners = window.siteData.partners.list;
  return (
    <div style={{ background: mPalette.paper }}>
      <MobilePageHeader no="04" jp={window.t('パートナー')} en="Partners" lead={window.siteData.partners.lead} />
      <div style={{ padding: '48px 24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          {partners.map(p => (
            <div key={p.no} style={{ background: mPalette.paperDeep, padding: 22, display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 56, height: 56, borderRadius: 28, background: p.color, color: mPalette.paper, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: mFont.jpSerif, fontSize: 22, flexShrink: 0 }}>{p.no}</div>
                <div>
                  <div style={{ fontFamily: mFont.mono, fontSize: 9, letterSpacing: 2, color: p.color, marginBottom: 4 }}>{p.relation}</div>
                  <div style={{ fontFamily: mFont.jpSerif, fontSize: 17, color: mPalette.ink, letterSpacing: '0.04em', lineHeight: 1.4 }}>{p.name}</div>
                  <div style={{ fontFamily: mFont.enSerif, fontStyle: 'italic', fontSize: 13, color: mPalette.muted }}>{p.en}</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {p.tags.map(t => (
                  <span key={t} style={{ fontFamily: mFont.jpSerif, fontSize: 10, letterSpacing: 1.5, padding: '4px 8px', border: `1px solid ${mPalette.ink}55`, color: mPalette.ink }}>{t}</span>
                ))}
              </div>
              <p style={{ fontFamily: mFont.jpSerif, fontSize: 13, lineHeight: 1.9, color: mPalette.ink, margin: 0 }}>{p.body}</p>
              {p.url && (
                <a href={p.url} target="_blank" rel="noopener noreferrer" style={{ fontFamily: mFont.enSerif, fontStyle: 'italic', fontSize: 14, color: mPalette.ai, borderBottom: `1px solid ${mPalette.ai}`, alignSelf: 'flex-start', paddingBottom: 2, textDecoration: 'none' }}>
                  View partner →
                </a>
              )}
            </div>
          ))}
        </div>

        {/* BECOME A PARTNER */}
        <div style={{ marginTop: 32, padding: 28, border: `1px dashed ${mPalette.ink}55`, textAlign: 'center' }}>
          <div style={{ fontFamily: mFont.mono, fontSize: 10, letterSpacing: 3, color: mPalette.akane }}>BECOME A PARTNER</div>
          <div style={{ fontFamily: mFont.jpSerif, fontSize: 19, marginTop: 10, letterSpacing: '0.04em', color: mPalette.ink, lineHeight: 1.6 }}>{window.t('地方の未来を、共に彩りませんか。')}</div>
          <div onClick={() => window.saiNavigate && window.saiNavigate('contact')} style={{ marginTop: 18, padding: '14px 28px', background: mPalette.ink, color: mPalette.paper, fontFamily: mFont.jpSerif, fontSize: 14, letterSpacing: 3, display: 'inline-block', cursor: 'pointer' }}>{window.t('協業のご相談 →')}</div>
        </div>
      </div>
      <MobileFooter />
    </div>
  );
}

// ----------------------------------------------------------
// CONTACT
// ----------------------------------------------------------
function MobileContact() {
  const mInputStyle = {
    fontFamily: '"Zen Old Mincho", serif',
    fontSize: 16,
    padding: '14px 14px',
    background: mPalette.paper,
    border: `1px solid ${mPalette.ink}33`,
    color: mPalette.ink,
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box',
  };
  const [sending, setSending] = React.useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const f = e.target;
    const cat = f.category.value, name = f.name.value, email = f.email.value, tel = f.tel.value, msg = f.message.value;
    if (!cat || !name || !email || !msg) { alert('必須項目（種別・お名前・メール・内容）をご入力ください。'); return; }

    const endpoint = window.siteData.formEndpoint;
    const fallback = window.siteData.formFallbackEmail;
    const payload = {
      'お問い合わせ種別': cat, 'お名前': name, 'メールアドレス': email,
      'お電話番号': tel, 'お問い合わせ内容': msg,
      _subject: `【お問い合わせ】${cat} / ${name} 様`,
    };

    if (endpoint && !endpoint.includes('REPLACE_WITH_YOUR_ID')) {
      try {
        setSending(true);
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        setSending(false);
        if (res.ok) { alert('お問い合わせを送信しました。ありがとうございます。'); f.reset(); }
        else { alert('送信に失敗しました。お手数ですが、お電話または直接メールにてご連絡ください。'); }
      } catch (err) {
        setSending(false);
        alert('送信に失敗しました。お手数ですが、お電話または直接メールにてご連絡ください。');
      }
      return;
    }

    const body =
      `お問い合わせ種別：${cat}\nお名前：${name}\nメールアドレス：${email}\n` +
      `お電話番号：${tel}\n\n【お問い合わせ内容】\n${msg}\n`;
    window.location.href =
      `mailto:${fallback}?subject=${encodeURIComponent(payload._subject)}&body=${encodeURIComponent(body)}`;
  };
  return (
    <div style={{ background: mPalette.paper }}>
      <MobilePageHeader no="05" jp={window.t('お問い合わせ')} en="Contact" lead={window.t('ご相談・取材・パートナーシップ等のお問い合わせを承っております。お気軽にご連絡ください。')} />
      <div style={{ padding: '48px 24px' }}>
        {/* Contact cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 32 }}>
          {[
            { tag: 'PHONE', jp: 'お電話でのご連絡', lines: ['FAX : 03-5391-6870', '携帯 : 080-9541-6870', '受付 : 平日 9:00 – 18:00'], color: mPalette.akane },
            { tag: 'OFFICE', jp: '本社所在地', lines: ['〒949-7302', '新潟県南魚沼市浦佐 2476'], color: mPalette.koke },
          ].map(c => (
            <div key={c.tag} style={{ background: mPalette.paperDeep, padding: 20, borderTop: `2px solid ${c.color}` }}>
              <div style={{ fontFamily: mFont.mono, fontSize: 10, letterSpacing: 3, color: c.color }}>{c.tag}</div>
              <div style={{ fontFamily: mFont.jpSerif, fontSize: 17, color: mPalette.ink, letterSpacing: '0.04em', marginTop: 8 }}>{c.jp}</div>
              <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 4 }}>
                {c.lines.map((l, i) => (
                  <div key={i} style={{ fontFamily: mFont.jpSerif, fontSize: 13, color: mPalette.ink, lineHeight: 1.7 }}>{l}</div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ background: mPalette.paperDeep, padding: 22, display: 'flex', flexDirection: 'column', gap: 18, borderTop: `2px solid ${mPalette.ai}` }}>
          <div>
            <div style={{ fontFamily: mFont.mono, fontSize: 10, letterSpacing: 3, color: mPalette.akane }}>—— INQUIRY FORM</div>
            <h3 style={{ fontFamily: mFont.jpSerif, fontSize: 20, margin: '6px 0 0', color: mPalette.ink, letterSpacing: '0.04em' }}>{window.t('お問い合わせフォーム')}</h3>
          </div>

          <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontFamily: mFont.jpSerif, fontSize: 13, color: mPalette.ink, letterSpacing: 2 }}>{window.t('お問い合わせ種別')}<span style={{ color: mPalette.akane, marginLeft: 4 }}>*</span></span>
            <select name="category" style={mInputStyle} defaultValue="">
              <option value="" disabled>{window.t('選択してください')}</option>
              {['法人の方','学生の方','取材・メディア','パートナー協業','その他'].map(c => <option key={c} value={c}>{window.t(c)}</option>)}
            </select>
          </label>

          <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontFamily: mFont.jpSerif, fontSize: 13, color: mPalette.ink, letterSpacing: 2 }}>{window.t('お名前')}<span style={{ color: mPalette.akane, marginLeft: 4 }}>*</span></span>
            <input name="name" type="text" placeholder="山田 太郎" style={mInputStyle} />
          </label>

          <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontFamily: mFont.jpSerif, fontSize: 13, color: mPalette.ink, letterSpacing: 2 }}>{window.t('メールアドレス')}<span style={{ color: mPalette.akane, marginLeft: 4 }}>*</span></span>
            <input name="email" type="email" placeholder="example@example.com" style={mInputStyle} />
          </label>

          <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontFamily: mFont.jpSerif, fontSize: 13, color: mPalette.ink, letterSpacing: 2 }}>{window.t('お電話番号')}</span>
            <input name="tel" type="tel" placeholder="090-0000-0000" style={mInputStyle} />
          </label>

          <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontFamily: mFont.jpSerif, fontSize: 13, color: mPalette.ink, letterSpacing: 2 }}>{window.t('お問い合わせ内容')}<span style={{ color: mPalette.akane, marginLeft: 4 }}>*</span></span>
            <textarea name="message" rows={6} placeholder="ご相談内容をご記入ください。" style={{ ...mInputStyle, resize: 'vertical', lineHeight: 1.7 }} />
          </label>

          <button
            type="submit"
            disabled={sending}
            style={{
              fontFamily: mFont.jpSerif, fontSize: 15, letterSpacing: 4,
              padding: '16px 0', background: mPalette.ink, color: mPalette.paper,
              border: 'none', cursor: sending ? 'wait' : 'pointer', marginTop: 4, opacity: sending ? 0.6 : 1,
            }}
          >
            {sending ? window.t('送信中…') : window.t('送信する　→')}
          </button>
        </form>
      </div>
      <MobileFooter />
    </div>
  );
}

// ----------------------------------------------------------
// BUSINESS OVERVIEW — 事業概要（組織図）
// ----------------------------------------------------------
function mBizSections(groups) {
  const out = [];
  groups.forEach(g => {
    const last = out[out.length - 1];
    if (last && last.branch === (g.branch || '')) last.groups.push(g);
    else out.push({ branch: g.branch || '', groups: [g] });
  });
  return out;
}

function mBizPad(n) { return (n < 10 ? '0' : '') + n; }

function mBizCount(n) {
  return window.saiLang === 'en' ? n + (n === 1 ? ' area' : ' areas') : n + ' 領域';
}

function mBizScrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const y = el.getBoundingClientRect().top + window.pageYOffset - 12;
  window.scrollTo({ top: y, behavior: reduce ? 'auto' : 'smooth' });
  // 一部の環境では smooth が無視されるため、動いていなければ確実に移動させる
  setTimeout(() => {
    if (Math.abs(window.pageYOffset - y) > 4) window.scrollTo(0, y);
  }, 600);
}

function MobileBizGroup({ group, color, n }) {
  return (
    <div style={{ background: mPalette.paper, display: 'flex', flexDirection: 'column' }}>
      <div style={{ background: color, color: mPalette.paper, padding: '10px 13px', display: 'flex', alignItems: 'baseline', gap: 9 }}>
        <span style={{ fontFamily: mFont.mono, fontSize: 9.5, letterSpacing: 2, opacity: 0.75 }}>{mBizPad(n)}</span>
        <span style={{ fontFamily: mFont.jpSerif, fontSize: 15, fontWeight: 500, letterSpacing: '0.06em', lineHeight: 1.4 }}>{group.name}</span>
      </div>
      <ul style={{ listStyle: 'none', margin: 0, padding: '2px 13px 5px', background: color + '0f' }}>
        {group.items.map((it, i) => (
          <li key={it} style={{
            fontFamily: mFont.jpSerif, fontSize: 13, lineHeight: 1.8, color: mPalette.ink,
            padding: '9px 0 9px 15px', position: 'relative',
            borderTop: i === 0 ? 'none' : `1px solid ${mPalette.ink}18`,
          }}>
            <span aria-hidden="true" style={{ position: 'absolute', left: 0, top: '1.6em', width: 6, height: 1, background: color }} />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

function MobileBusiness() {
  const t = window.siteData.businessTree;
  return (
    <div style={{ background: mPalette.paper }}>
      <MobilePageHeader no="06" jp={window.t('事業概要')} en="Business" lead={t.lead} />

      <div style={{ padding: '32px 24px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
          <span style={{ fontFamily: mFont.mono, fontSize: 9.5, letterSpacing: 3, color: mPalette.akane }}>STRUCTURE — 04 SECTORS</span>
          <span style={{ flex: 1, height: 1, background: `${mPalette.ink}22` }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 10 }}>
          {t.units.map((u, i) => (
            <button
              key={u.tag}
              type="button"
              onClick={() => mBizScrollTo('mbiz-' + i)}
              style={{
                appearance: 'none', textAlign: 'left', cursor: 'pointer', font: 'inherit', color: mPalette.ink,
                background: mPalette.paperDeep, border: 'none', borderTop: `3px solid ${u.color}`,
                padding: '14px 14px 16px', display: 'flex', flexDirection: 'column', gap: 3, minWidth: 0,
              }}
            >
              <span style={{ fontFamily: mFont.mono, fontSize: 9.5, letterSpacing: 2, color: u.color }}>{mBizPad(i + 1)} / 04</span>
              <span style={{ fontFamily: mFont.jpAlt, fontSize: 20, color: u.color, letterSpacing: '0.03em', lineHeight: 1.2 }}>{u.tag}</span>
              <span style={{ fontFamily: mFont.jpSerif, fontSize: 11.5, letterSpacing: 2, color: mPalette.muted }}>{u.jp}</span>
              <span style={{ fontFamily: mFont.mono, fontSize: 9, letterSpacing: 1.5, color: mPalette.muted, marginTop: 4 }}>{mBizCount(u.groups.length)}</span>
            </button>
          ))}
        </div>
      </div>

      <div style={{ padding: '32px 24px 32px', display: 'flex', flexDirection: 'column', gap: 22 }}>
        {t.units.map((u, i) => {
          const sections = mBizSections(u.groups);
          const summaryLines = (window.siteData.business.find(b => b.tag === u.tag) || {}).body || [];
          const summary = summaryLines.join(window.saiLang === 'en' ? ' ' : '');
          let n = 0;
          return (
            <section key={u.tag} id={'mbiz-' + i} style={{
              background: mPalette.paperDeep, borderLeft: `5px solid ${u.color}`,
              padding: '20px 18px 22px', position: 'relative', overflow: 'hidden',
            }}>
              <span aria-hidden="true" style={{
                position: 'absolute', right: 12, top: 2, fontFamily: mFont.mono, fontSize: 64,
                color: u.color, opacity: 0.05, letterSpacing: -3, lineHeight: 1,
              }}>{mBizPad(i + 1)}</span>

              <div style={{ position: 'relative' }}>
                <div style={{ fontFamily: mFont.mono, fontSize: 9.5, letterSpacing: 3, color: u.color }}>{mBizPad(i + 1)} / 04</div>
                <div style={{ fontFamily: mFont.jpAlt, fontSize: 27, color: u.color, letterSpacing: '0.04em', marginTop: 4, lineHeight: 1.1 }}>{u.tag}</div>
                <div style={{ fontFamily: mFont.jpSerif, fontSize: 12.5, letterSpacing: 3, color: mPalette.muted, marginTop: 3 }}>{u.jp}</div>
                {summary && (
                  <p style={{
                    margin: '14px 0 0', fontFamily: mFont.jpSerif, fontSize: 12.5, lineHeight: 1.95,
                    color: mPalette.ink, opacity: 0.85, borderLeft: `1px solid ${u.color}55`, paddingLeft: 12,
                  }}>{summary}</p>
                )}
              </div>

              <div style={{ height: 1, background: `${mPalette.ink}22`, margin: '20px 0 18px' }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                {sections.map(sec => (
                  <div key={sec.branch || 'main'}>
                    {sec.branch && !(sec.groups.length === 1 && sec.groups[0].name === sec.branch) && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                        <span style={{ fontFamily: mFont.mono, fontSize: 9.5, letterSpacing: 2.5, color: mPalette.paper, background: u.color, padding: '3px 10px' }}>{sec.branch}</span>
                        <span style={{ flex: 1, height: 1, background: `${u.color}44` }} />
                      </div>
                    )}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                      {sec.groups.map(g => {
                        n += 1;
                        return <MobileBizGroup key={g.name} group={g} color={u.color} n={n} />;
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <div style={{ padding: '0 24px 40px' }}>
        <div style={{ borderTop: `1px solid ${mPalette.ink}33`, borderBottom: `1px solid ${mPalette.ink}33`, padding: '18px 0' }}>
          <div style={{ fontFamily: mFont.mono, fontSize: 9.5, letterSpacing: 3, color: mPalette.akane, marginBottom: 8 }}>AREAS</div>
          <div style={{ fontFamily: mFont.jpSerif, fontSize: 12.5, lineHeight: 1.9, color: mPalette.ink }}>{t.footer}</div>
        </div>
        <div style={{ marginTop: 26, textAlign: 'center', fontFamily: mFont.jpSerif, fontSize: 17, letterSpacing: '0.08em', color: mPalette.ai, lineHeight: 1.8 }}>
          {t.tagline}
        </div>
      </div>
      <MobileFooter />
    </div>
  );
}

// ----------------------------------------------------------
// Mobile App router (matches desktop page IDs)
// ----------------------------------------------------------
function MobileApp({ page }) {
  switch (page) {
    case 'about':    return <MobileAbout />;
    case 'company':  return <MobileCompany />;
    case 'news':     return <MobileNews />;
    case 'partners': return <MobilePartners />;
    case 'contact':  return <MobileContact />;
    case 'business': return <MobileBusiness />;
    case 'home':
    default:         return <MobileHome />;
  }
}

function MobileSite({ page }) {
  return (
    <div style={{ fontFamily: mFont.jpSerif, color: mPalette.ink, background: mPalette.paper, minHeight: '100vh' }}>
      <MobileNav />
      <MobileApp page={page} />
    </div>
  );
}

Object.assign(window, { MobileSite });
