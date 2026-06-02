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
            <div style={{ fontFamily: mFont.jpSerif, fontSize: 15, letterSpacing: 2, color: mPalette.ink }}>Regional Lab</div>
            <div style={{ fontFamily: mFont.jpSerif, fontSize: 11, letterSpacing: 2, color: mPalette.ink, paddingLeft: 20 }}>Minamiuonuma</div>
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
              <span style={{ fontFamily: mFont.jpSerif, fontSize: 18, color: mPalette.ink, letterSpacing: 2 }}>{jp}</span>
              <span style={{ fontFamily: mFont.mono, fontSize: 10, letterSpacing: 2, color: mPalette.akane }}>{en.toUpperCase()} →</span>
            </div>
          ))}
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
    ['お知らせ', 'news'],
    ['パートナー', 'partners'],
    ['お問い合わせ', 'contact'],
  ];
  return (
    <div style={{ background: mPalette.paper, padding: '64px 24px 32px' }}>
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <div style={{ fontFamily: mFont.mono, fontSize: 10, letterSpacing: 3, color: mPalette.akane, marginBottom: 16 }}>—— TOGETHER</div>
        <h2 style={{ fontFamily: mFont.jpSerif, fontSize: 28, fontWeight: 400, margin: 0, color: mPalette.ink, letterSpacing: '0.04em', lineHeight: 1.5 }}>
          その地に、もう一度、<br /><span style={{ color: mPalette.ai }}>光を。</span>
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
            <span style={{ fontFamily: mFont.jpSerif, fontSize: 15, letterSpacing: 2, color: mPalette.ink }}>{jp}</span>
            <span style={{ fontFamily: mFont.mono, fontSize: 9, letterSpacing: 2, color: mPalette.akane }}>{en.toUpperCase()}</span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 32, paddingTop: 20, borderTop: `1px solid ${mPalette.ink}22`, display: 'flex', flexDirection: 'column', gap: 8, fontFamily: mFont.mono, fontSize: 10, letterSpacing: 1.5, color: mPalette.muted, textAlign: 'center' }}>
        <span>© REGIONAL LAB 2026</span>
        <span>新潟県南魚沼市 × 東京 × 宮城</span>
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
        <div style={{ fontFamily: mFont.mono, fontSize: 10, letterSpacing: 3, color: mPalette.akane, marginBottom: 24 }}>—— 新潟県南魚沼市を支え続ける企業へ</div>
        <h1 style={{ fontFamily: mFont.jpSerif, fontSize: 44, fontWeight: 500, margin: 0, color: mPalette.ink, letterSpacing: '0.04em', lineHeight: 1.3 }}>
          <span style={{ display: 'block', whiteSpace: 'nowrap' }}>地方の未来を、</span>
          <span style={{ display: 'block', whiteSpace: 'nowrap' }}>彩る組織へ</span>
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

      {/* MISSION */}
      <div style={{ background: mPalette.paperDeep, padding: '64px 24px' }}>
        <div style={{ fontFamily: mFont.mono, fontSize: 10, letterSpacing: 3, color: mPalette.akane, marginBottom: 18 }}>—— OUR MISSION</div>
        <h2 style={{ fontFamily: mFont.jpSerif, fontSize: 32, fontWeight: 400, color: mPalette.ink, letterSpacing: '0.04em', lineHeight: 1.5, margin: 0 }}>
          地方の<span style={{ color: mPalette.akane }}>礎</span>として、<br />
          地方の<span style={{ color: mPalette.ai }}>未来</span>を彩る。
        </h2>
        <p style={{ marginTop: 28, fontFamily: mFont.jpSerif, fontSize: 14, color: mPalette.ink, lineHeight: 2, margin: '28px 0 0' }}>
          私たちは、新潟県南魚沼市を起点に、地方の魅力を再発見し、再構築し、未来へと継承していく組織です。
          イベント、コミュニティ、アパレル — 三つの事業で、地方の可能性を引き出します。
        </p>
      </div>

      {/* BUSINESS — 三つの柱 */}
      <div style={{ padding: '64px 24px', background: mPalette.paper }}>
        <div style={{ marginBottom: 36 }}>
          <h2 style={{ fontFamily: mFont.jpSerif, fontSize: 40, fontWeight: 400, margin: 0, color: mPalette.ink, letterSpacing: '0.04em' }}>
            三つの<span style={{ color: mPalette.akane }}>柱</span>
          </h2>
          <div style={{ fontFamily: mFont.mono, fontSize: 10, letterSpacing: 3, color: mPalette.muted, marginTop: 6 }}>OUR BUSINESS — 03 SECTORS</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
          {business.map((s, i) => (
            <div key={s.tag} style={{ background: mPalette.paperDeep, padding: 20, position: 'relative' }}>
              <div style={{ position: 'absolute', top: -8, left: 20, fontFamily: mFont.mono, fontSize: 10, letterSpacing: 3, background: mPalette.paper, padding: '4px 8px', color: s.accent }}>
                0{i+1} / 03
              </div>
              <div style={{ width: '100%', aspectRatio: '16/10', overflow: 'hidden', marginTop: 8 }}>
                <img src={s.img} alt={s.tag} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
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
            歩みは続く<span style={{ fontFamily: mFont.enSerif, fontStyle: 'italic', color: '#c2452f', fontSize: 20 }}> — ongoing.</span>
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
      <MobilePageHeader no="01" jp="私たちについて" en="About Us" lead={about.lead} />
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
    ['会社名', '株式会社 リージョナルラボ'],
    ['英名', 'Regional Lab, Inc.'],
    ['設立', companyInfo.founded],
    ['代表', '木寺 蒼真'],
    ['資本金', companyInfo.capital],
    ['役員', companyInfo.officers],
  ];
  const offices = companyInfo.offices;
  const visions = window.siteData.company.visions;
  return (
    <div style={{ background: mPalette.paper }}>
      <MobilePageHeader no="02" jp="会社概要" en="Company" lead={<><span style={{ display: 'block' }}>株式会社リージョナルラボの事業内容、会社情報、</span><span style={{ display: 'block' }}>ビジョンをご紹介します。</span></>} />
      <div style={{ padding: '48px 24px' }}>
        <div style={{ marginBottom: 40 }}>
          <div style={{ fontFamily: mFont.mono, fontSize: 10, letterSpacing: 3, color: mPalette.akane, marginBottom: 14 }}>SECTION 01 — BUSINESS</div>
          <h2 style={{ fontFamily: mFont.jpSerif, fontSize: 28, margin: '0 0 24px', color: mPalette.ink, letterSpacing: '0.04em', fontWeight: 500 }}>事業紹介</h2>
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
          <h2 style={{ fontFamily: mFont.jpSerif, fontSize: 28, margin: '0 0 24px', color: mPalette.ink, letterSpacing: '0.04em', fontWeight: 500 }}>会社情報</h2>
          <div style={{ background: mPalette.paperDeep, padding: 22, display: 'flex', flexDirection: 'column', gap: 14 }}>
            {info.map(([k, v]) => (
              <div key={k} style={{ display: 'flex', flexDirection: 'column', gap: 4, paddingBottom: 12, borderBottom: `1px solid ${mPalette.ink}22` }}>
                <div style={{ fontFamily: mFont.mono, fontSize: 10, letterSpacing: 2, color: mPalette.akane }}>{k.toUpperCase()}</div>
                <div style={{ fontFamily: mFont.jpSerif, fontSize: 14, color: mPalette.ink, letterSpacing: 1 }}>{v}</div>
              </div>
            ))}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ fontFamily: mFont.mono, fontSize: 10, letterSpacing: 2, color: mPalette.akane }}>OFFICES</div>
              {offices.map(([k, v]) => (
                <div key={k} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <span style={{ background: mPalette.akane, color: mPalette.paper, fontFamily: mFont.jpSerif, fontSize: 11, letterSpacing: 2, padding: '4px 10px', alignSelf: 'flex-start' }}>{k}</span>
                  <div style={{ fontFamily: mFont.jpSerif, fontSize: 13, color: mPalette.ink, lineHeight: 1.7 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PL Visions 3ヵ年・5ヵ年・10ヵ年 */}
        <div style={{ marginBottom: 8 }}>
          <div style={{ fontFamily: mFont.mono, fontSize: 10, letterSpacing: 3, color: mPalette.akane, marginBottom: 14 }}>SECTION 03 — VISIONS</div>
          <h2 style={{ fontFamily: mFont.jpSerif, fontSize: 28, margin: '0 0 8px', color: mPalette.ink, letterSpacing: '0.04em', fontWeight: 500 }}>3ヵ年・5ヵ年・10ヵ年</h2>
          <p style={{ fontFamily: mFont.jpSerif, fontSize: 13, lineHeight: 1.9, color: mPalette.muted, margin: '0 0 24px' }}>
            私たちが見据える、短期・中期・中長期の成長設計。
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {visions.map(v => (
              <div key={v.term} style={{ background: mPalette.paperDeep, borderTop: `3px solid ${v.color}` }}>
                <div style={{ padding: '16px 18px', borderBottom: `1px solid ${mPalette.ink}11` }}>
                  <div style={{ fontFamily: mFont.jpSerif, fontSize: 18, fontWeight: 500, color: v.color }}>{v.term}</div>
                  <div style={{ fontFamily: mFont.mono, fontSize: 10, letterSpacing: 3, color: mPalette.muted, marginTop: 4 }}>[ {v.sub.toUpperCase()} ]</div>
                </div>
                {v.rows.map((r, ri) => (
                  <div key={ri} style={{ padding: '16px 18px', borderBottom: ri < v.rows.length - 1 ? `1px solid ${mPalette.ink}11` : 'none' }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 10 }}>
                      <span style={{ fontFamily: mFont.jpSerif, fontSize: 20, fontWeight: 500, color: v.color }}>{r[0]}</span>
                      <span style={{ fontFamily: mFont.jpSerif, fontSize: 13, color: mPalette.ink, lineHeight: 1.5 }}>{r[4]}</span>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
                      {[['売上高', r[1], mPalette.ink], ['販管費', r[2], mPalette.muted], ['営業利益', r[3], mPalette.akane]].map(([label, val, col]) => (
                        <div key={label}>
                          <div style={{ fontFamily: mFont.mono, fontSize: 8, letterSpacing: 1, color: mPalette.muted }}>{label}</div>
                          <div style={{ fontFamily: mFont.jpSerif, fontSize: 13, fontWeight: 500, color: col, marginTop: 2 }}>{val}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
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
      <MobilePageHeader no="03" jp="お知らせ" en="News" lead="プロダクト、イベント、メディア掲載 ─ Regional Lab からの最新のお知らせです。" />
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
      <MobilePageHeader no="04" jp="パートナー" en="Partners" lead="共に地方の未来を彩る、私たちの大切なパートナー様をご紹介します。" />
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
              <a href={p.url} target="_blank" rel="noopener noreferrer" style={{ fontFamily: mFont.enSerif, fontStyle: 'italic', fontSize: 14, color: mPalette.ai, borderBottom: `1px solid ${mPalette.ai}`, alignSelf: 'flex-start', paddingBottom: 2, textDecoration: 'none' }}>
                View partner →
              </a>
            </div>
          ))}
        </div>

        {/* BECOME A PARTNER */}
        <div style={{ marginTop: 32, padding: 28, border: `1px dashed ${mPalette.ink}55`, textAlign: 'center' }}>
          <div style={{ fontFamily: mFont.mono, fontSize: 10, letterSpacing: 3, color: mPalette.akane }}>BECOME A PARTNER</div>
          <div style={{ fontFamily: mFont.jpSerif, fontSize: 19, marginTop: 10, letterSpacing: '0.04em', color: mPalette.ink, lineHeight: 1.6 }}>地方の未来を、共に彩りませんか。</div>
          <div onClick={() => window.saiNavigate && window.saiNavigate('contact')} style={{ marginTop: 18, padding: '14px 28px', background: mPalette.ink, color: mPalette.paper, fontFamily: mFont.jpSerif, fontSize: 14, letterSpacing: 3, display: 'inline-block', cursor: 'pointer' }}>
            協業のご相談 →
          </div>
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
      <MobilePageHeader no="05" jp="お問い合わせ" en="Contact" lead="ご相談・取材・パートナーシップ等のお問い合わせを承っております。お気軽にご連絡ください。" />
      <div style={{ padding: '48px 24px' }}>
        {/* Contact cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 32 }}>
          {[
            { tag: 'PHONE', jp: 'お電話でのご連絡', lines: ['080-9541-6870', '受付 : 平日 10:00 – 18:00'], color: mPalette.akane },
            { tag: 'OFFICE', jp: '本社所在地', lines: ['〒949-7302', '新潟県南魚沼市浦佐 2479'], color: mPalette.koke },
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
            <h3 style={{ fontFamily: mFont.jpSerif, fontSize: 20, margin: '6px 0 0', color: mPalette.ink, letterSpacing: '0.04em' }}>お問い合わせフォーム</h3>
          </div>

          <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontFamily: mFont.jpSerif, fontSize: 13, color: mPalette.ink, letterSpacing: 2 }}>お問い合わせ種別<span style={{ color: mPalette.akane, marginLeft: 4 }}>*</span></span>
            <select name="category" style={mInputStyle} defaultValue="">
              <option value="" disabled>選択してください</option>
              <option>法人の方</option>
              <option>学生の方</option>
              <option>取材・メディア</option>
              <option>パートナー協業</option>
              <option>その他</option>
            </select>
          </label>

          <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontFamily: mFont.jpSerif, fontSize: 13, color: mPalette.ink, letterSpacing: 2 }}>お名前<span style={{ color: mPalette.akane, marginLeft: 4 }}>*</span></span>
            <input name="name" type="text" placeholder="山田 太郎" style={mInputStyle} />
          </label>

          <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontFamily: mFont.jpSerif, fontSize: 13, color: mPalette.ink, letterSpacing: 2 }}>メールアドレス<span style={{ color: mPalette.akane, marginLeft: 4 }}>*</span></span>
            <input name="email" type="email" placeholder="example@example.com" style={mInputStyle} />
          </label>

          <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontFamily: mFont.jpSerif, fontSize: 13, color: mPalette.ink, letterSpacing: 2 }}>お電話番号</span>
            <input name="tel" type="tel" placeholder="090-0000-0000" style={mInputStyle} />
          </label>

          <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontFamily: mFont.jpSerif, fontSize: 13, color: mPalette.ink, letterSpacing: 2 }}>お問い合わせ内容<span style={{ color: mPalette.akane, marginLeft: 4 }}>*</span></span>
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
            {sending ? '送信中…' : '送信する　→'}
          </button>
        </form>
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
    case 'home':
    case 'business':
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
