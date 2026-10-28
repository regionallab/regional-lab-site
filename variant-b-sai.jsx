// Variant B: 「彩」Layered Washi
// Layered paper-like surfaces, vertical Japanese typography accents.
// Palette: 藍 indigo / 苔 moss / 茜 madder / 生成り off-white / 墨 ink

const saiPalette = {
  paper: '#f1ead8',
  paperDeep: '#e6dcc0',
  ink: '#1f1a14',
  ai: '#1f3552',      // 藍
  aiDeep: '#13243a',
  koke: '#5a6b3d',    // 苔
  akane: '#9a3324',   // 茜
  muted: '#766a52',
};

const saiFont = {
  jpSerif: '"Zen Old Mincho", "Noto Serif JP", serif',
  jpAlt: '"Shippori Mincho", "Noto Serif JP", serif',
  enSerif: '"Cormorant Garamond", serif',
  mono: '"JetBrains Mono", ui-monospace, monospace',
};

function SaiNav() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '24px 56px',
      background: saiVeil(saiPalette.paper, 0.92),
      borderBottom: `1px solid ${saiPalette.ink}22`,
    }}>
      <div onClick={() => window.saiNavigate && window.saiNavigate('home')} style={{ display: 'flex', alignItems: 'center', gap: 14, cursor: 'pointer' }}>
        <div style={{ width: 64, height: 64, borderRadius: 32, overflow: 'hidden', flexShrink: 0 }}>
          <img
            src="assets/logo-regionallab.png"
            alt="Regional Lab"
            style={{ width: '135%', height: '135%', objectFit: 'cover', display: 'block', marginLeft: '-17.5%', marginTop: '-17.5%' }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', lineHeight: 1.1, gap: 6 }}>
          <div style={{ fontFamily: saiFont.jpSerif, fontSize: 24, fontWeight: 600, letterSpacing: 1, color: saiPalette.ink }}>Regional Lab</div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 28, fontFamily: saiFont.jpSerif, fontSize: 14, color: saiPalette.ink, alignItems: 'center', letterSpacing: 2 }}>
        {[['ホーム','home'],['私たちについて','about'],['屋号概要','company','Profile'],['事業概要','business'],['お知らせ','news'],['お問い合わせ','contact'],['パートナー','partners']].map(([jp, en, sub]) => (
          <div
            key={en}
            onClick={() => window.saiNavigate && window.saiNavigate(en)}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, cursor: 'pointer' }}
          >
            <span style={{ whiteSpace: 'nowrap' }}>{window.t(jp)}</span>
            <span style={{ fontFamily: saiFont.mono, fontSize: 8, opacity: 0.5, letterSpacing: 2 }}>{(sub || en).toUpperCase()}</span>
          </div>
        ))}
        <div
          onClick={() => window.saiSetLang(window.saiLang === 'en' ? 'ja' : 'en')}
          title="Switch language"
          style={{
            padding: '8px 16px', border: `1px solid ${saiPalette.ink}`, fontFamily: saiFont.mono, fontSize: 11, letterSpacing: 2,
            cursor: 'pointer', display: 'flex', gap: 6, whiteSpace: 'nowrap',
          }}>
          <span style={{ opacity: window.saiLang === 'ja' ? 1 : 0.4, fontWeight: window.saiLang === 'ja' ? 700 : 400 }}>JP</span>
          <span style={{ opacity: 0.4 }}>/</span>
          <span style={{ opacity: window.saiLang === 'en' ? 1 : 0.4, fontWeight: window.saiLang === 'en' ? 700 : 400 }}>EN</span>
        </div>
      </div>
    </div>
  );
}

function SaiHero() {
  return (
    <div style={{
      position: 'relative',
      padding: '64px 56px 80px',
      background: `linear-gradient(180deg, ${saiVeil(saiPalette.paper)} 0%, ${saiVeil(saiPalette.paperDeep)} 100%)`,
      overflow: 'hidden',
      minHeight: 760,
    }}>
      {/* 藍の和紙パネル（背面）。背景写真が緑〜碧なので、藍は濃いほうを使って
          写真と沈み込まないようにしている（前面の若草パネルとの差も大きくなる）。 */}
      <div style={{
        position: 'absolute',
        left: 56, top: 64,
        width: 720, height: 600,
        background: saiBackdropOn() ? saiPalette.aiDeep : saiPalette.ai,
      }} />
      {/* Photo */}
      <div style={{ position: 'absolute', left: 320, top: 180, width: 540, height: 680, overflow: 'hidden', background: '#d5d492' }}>
        <img src="assets/hero-logo-hq.png" alt="Regional Lab" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </div>
      {/* Headline — vertical in JP, horizontal in EN */}
      {window.saiLang === 'en' ? (
      <div style={{ position: 'absolute', right: 72, top: 96, width: 520, textAlign: 'right' }}>
        <div style={{ fontFamily: saiFont.jpAlt, fontSize: 15, lineHeight: 2, color: saiOnPhoto(saiPalette.akane), textShadow: saiShadow(), letterSpacing: '0.18em', marginBottom: 20 }}>
          {window.t('─ 新潟県南魚沼市を支え続ける企業へ')}
        </div>
        <div style={{ fontFamily: saiFont.enSerif, fontSize: 68, lineHeight: 1.15, color: saiOnPhoto(saiPalette.ink), textShadow: saiShadow(), letterSpacing: '0.01em', fontWeight: 500 }}>
          {window.t('地方の未来を、')}<br/>{window.t('彩る組織へ')}
        </div>
      </div>
      ) : (
      <div style={{ position: 'absolute', right: 80, top: 80, display: 'flex', flexDirection: 'row-reverse', alignItems: 'flex-start', gap: 28 }}>
        <Vertical style={{ fontFamily: saiFont.jpAlt, fontSize: 18, lineHeight: 2.2, color: saiOnPhoto(saiPalette.akane), textShadow: saiShadow(), letterSpacing: '0.3em', whiteSpace: 'nowrap', marginTop: 24 }}>
          ─ 新潟県南魚沼市を支え続ける企業へ ─
        </Vertical>
        <Vertical style={{ fontFamily: saiFont.jpSerif, fontSize: 84, lineHeight: 1.35, color: saiOnPhoto(saiPalette.ink), textShadow: saiShadow(), letterSpacing: '0.08em', fontWeight: 500, whiteSpace: 'nowrap' }}>
          地方の未来を、
        </Vertical>
        <Vertical style={{ fontFamily: saiFont.jpSerif, fontSize: 84, lineHeight: 1.35, color: saiOnPhoto(saiPalette.ink), textShadow: saiShadow(), letterSpacing: '0.08em', fontWeight: 500, whiteSpace: 'nowrap', marginTop: 88 }}>
          彩る組織へ
        </Vertical>
      </div>
      )}

      {/* Bottom metadata strip */}
      <div style={{
        position: 'absolute', left: 56, bottom: 40, right: 56,
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
      }}>
        <div style={{ background: saiPalette.paper, padding: '16px 24px', maxWidth: 380, border: `1px solid ${saiPalette.ink}22` }}>
          <div style={{ fontFamily: saiFont.mono, fontSize: 10, letterSpacing: 2, color: saiPalette.akane, marginBottom: 8 }}>—— EST. 2024.10.09</div>
          <p style={{ fontFamily: saiFont.jpSerif, fontSize: 14, lineHeight: 1.9, color: saiPalette.ink, margin: 0 }}>
            {window.t('イベント、コミュニティ、アパレル、DX&AX。')}<br/>{window.t('四つの事業で、地方創生を立体的に描く。')}
          </p>
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <div onClick={() => window.saiNavigate && window.saiNavigate('business')} style={{
            padding: '14px 28px', background: saiPalette.akane, color: saiPalette.paper,
            fontFamily: saiFont.jpSerif, fontSize: 14, letterSpacing: 3, cursor: 'pointer',
          }}>{window.t('事業を見る →')}</div>
          <div onClick={() => window.saiNavigate && window.saiNavigate('contact')} style={{
            padding: '14px 28px', border: `1px solid ${saiPalette.ink}`, color: saiPalette.ink,
            fontFamily: saiFont.jpSerif, fontSize: 14, letterSpacing: 3, cursor: 'pointer',
          }}>{window.t('お問い合わせ')}</div>
        </div>
      </div>
    </div>
  );
}

function SaiMission() {
  return (
    <div style={{ background: saiVeil(saiPalette.paperDeep), padding: '96px 56px', position: 'relative' }}>
      {/* faded kanji */}
      <Vertical style={{
        position: 'absolute', right: 40, top: 40,
        fontFamily: saiFont.jpSerif, fontSize: 240, color: saiOnPhoto(saiPalette.ink), opacity: 0.04, letterSpacing: 0,
      }}>彩</Vertical>

      <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 64, position: 'relative' }}>
        <div>
          <div style={{ writingMode: 'vertical-rl', fontFamily: saiFont.jpSerif, fontSize: 28, letterSpacing: 8, color: saiOnPhoto(saiPalette.ai), textShadow: saiShadow() }}>
            {window.t('─ 理念 / 使命 / 展望')}
          </div>
        </div>
        <div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24 }}>
          {[
            { label: 'PHILOSOPHY', jp: window.t('理念'), body: [window.t('個の研鑽をもって、'), window.t('日本の礎であり続ける。')], bg: saiPalette.paper, color: saiPalette.ink },
            { label: 'MISSION', jp: window.t('使命'), body: [window.t('地域の歩みに寄り添い、'), window.t('新たな希望を見出す。')], bg: saiPalette.ai, color: saiPalette.paper },
            { label: 'VISION', jp: window.t('展望'), body: [window.t('南魚沼を支える企業へ、'), window.t('地方の未来を彩る組織へ。')], bg: saiPalette.koke, color: saiPalette.paper },
          ].map(c => (
            <div key={c.label} style={{
              background: c.bg, color: c.color,
              padding: '40px 28px',
              minHeight: 320,
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              borderRadius: 4,
            }}>
              <div>
                <div style={{ fontFamily: saiFont.mono, fontSize: 10, letterSpacing: 3, opacity: 0.7 }}>{c.label}</div>
                <div style={{ fontFamily: saiFont.jpSerif, fontSize: 16, letterSpacing: 6, marginTop: 6, opacity: 0.85 }}>{c.jp}</div>
              </div>
              <div style={{ fontFamily: saiFont.jpSerif, fontSize: 22, lineHeight: 1.8, letterSpacing: '0.04em' }}>
                {c.body[0]}<br/>{c.body[1]}
              </div>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: saiFont.jpSerif, fontSize: 15, lineHeight: 2.2, color: saiOnPhoto(saiPalette.ink), textShadow: saiShadow(), margin: '32px 0 0', maxWidth: 940 }}>
          {window.siteData.mission.body}
        </p>
        </div>
      </div>
    </div>
  );
}

function SaiBusiness() {
  const items = window.siteData.business;
  return (
    <div id="business-section" style={{ background: saiVeil(saiPalette.paper), padding: '120px 56px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 64 }}>
        <h2 style={{ fontFamily: saiFont.jpSerif, fontSize: 64, fontWeight: 400, margin: 0, color: saiOnPhoto(saiPalette.ink), textShadow: saiShadow(), letterSpacing: '0.04em' }}>
          {window.t('四つの')}<span style={{ color: saiOnPhoto(saiPalette.akane) }}>{window.t('柱')}</span>
        </h2>
        <div style={{ fontFamily: saiFont.mono, fontSize: 11, letterSpacing: 3, color: saiOnPhoto(saiPalette.muted), textShadow: saiShadow() }}>OUR BUSINESS — 04 SECTORS</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 24 }}>
        {items.map((s, i) => (
          <div key={s.tag} style={{ background: saiPalette.paperDeep, padding: 28, position: 'relative', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'absolute', top: -8, left: 28, fontFamily: saiFont.mono, fontSize: 10, letterSpacing: 3, background: saiPalette.paper, padding: '4px 8px', color: s.accent }}>
              0{i+1} / 0{items.length}
            </div>
            {s.img ? (
              <div style={{ width: '100%', aspectRatio: '16/10', overflow: 'hidden' }}>
                <img src={s.img} alt={s.tag} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            ) : (
              <Placeholder label={s.en} ratio="16/10" color1="#d8c9a3" color2="#c6b181" textColor={saiPalette.ink} />
            )}
            <div style={{ marginTop: 20, display: 'flex', alignItems: 'baseline', gap: 12 }}>
              <span style={{ fontFamily: saiFont.jpAlt, fontSize: 28, color: s.accent, letterSpacing: 1 }}>{s.tag}</span>
            </div>
            <div style={{ fontFamily: saiFont.jpSerif, fontSize: 15, letterSpacing: 3, color: saiPalette.muted, marginTop: 4 }}>{s.jp}</div>
            <p style={{ fontFamily: saiFont.jpSerif, fontSize: 14, lineHeight: 2, color: saiPalette.ink, marginTop: 16 }}>
              {Array.isArray(s.body)
                ? s.body.join(window.saiLang === 'en' ? ' ' : '')
                : s.body}
            </p>
            <div style={{
              marginTop: 'auto', padding: '10px 14px',
              background: s.accent, color: saiPalette.paper,
              alignSelf: 'flex-start',
              fontFamily: saiFont.jpSerif, fontSize: 13, letterSpacing: 3,
            }}>
              「{s.key}」
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SaiConsulting() {
  const c = window.siteData.consulting;
  return (
    <div style={{ background: saiVeil(saiPalette.paper), color: saiPalette.ink, padding: '96px 56px 56px', position: 'relative', overflow: 'hidden' }}>
      {/* faded kanji */}
      <Vertical style={{
        position: 'absolute', right: 56, top: 24,
        fontFamily: saiFont.jpSerif, fontSize: 220, color: saiOnPhoto(saiPalette.ink), opacity: 0.05, letterSpacing: 0,
      }}>導</Vertical>

      <div style={{ position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 28 }}>
          <span style={{ fontFamily: saiFont.mono, fontSize: 11, letterSpacing: 3, color: saiOnPhoto(saiPalette.akane), textShadow: saiShadow(), whiteSpace: 'nowrap' }}>{c.eyebrow} — {c.scope}</span>
          <span style={{ flex: 1, height: 1, background: saiLine(saiPalette.ink, '22') }} />
        </div>
        <h2 style={{
          fontFamily: saiFont.jpSerif, fontSize: 'clamp(38px, 4.2vw, 58px)', fontWeight: 400, margin: 0,
          color: saiOnPhoto(saiPalette.ink), textShadow: saiShadow(), letterSpacing: '0.06em', lineHeight: 1.4,
        }}>
          {c.heading[0]}<span style={{ color: saiOnPhoto(saiPalette.akane) }}>{c.heading[1]}</span>{c.heading[2]}
        </h2>
        <p style={{ fontFamily: saiFont.jpSerif, fontSize: 15, lineHeight: 2.2, color: saiOnPhoto(saiPalette.muted), textShadow: saiShadow(), margin: '28px 0 0', maxWidth: 940 }}>
          {c.body}
        </p>
      </div>
    </div>
  );
}

function SaiTimeline() {
  const events = window.siteData.timeline;
  return (
    <div style={{ background: saiVeil(saiPalette.aiDeep, 0.55), padding: '120px 0', color: saiPalette.paper, position: 'relative', overflow: 'hidden' }}>
      <Vertical style={{
        position: 'absolute', right: 56, top: 56,
        fontFamily: saiFont.jpSerif, fontSize: 160, opacity: 0.08, letterSpacing: 0,
      }}>歩</Vertical>
      <div style={{ padding: '0 56px', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 56, position: 'relative', zIndex: 2 }}>
        <h2 style={{ fontFamily: saiFont.jpSerif, fontSize: 56, fontWeight: 400, margin: 0, letterSpacing: '0.04em' }}>
          {window.t('歩みは続く')}<span style={{ fontFamily: saiFont.enSerif, fontStyle: 'italic', color: saiPalette.akane, fontSize: 36 }}>— ongoing.</span>
        </h2>
        <span style={{ fontFamily: saiFont.mono, fontSize: 11, letterSpacing: 3, opacity: 0.7 }}>04 / EVENTS — 2024–2026</span>
      </div>

      {/* 右から左へ無限スクロール。同じ並びを2組つないで -50% まで動かすので継ぎ目が出ない */}
      <div style={{ overflow: 'hidden', width: '100%' }}>
        {/* gap ではなく各カードの marginRight で間隔をとる。
            こうすると「カード幅＋間隔」が均一になり、-50% がちょうど1セット分と一致して継ぎ目が出ない */}
        <div className="sai-marquee" style={{ display: 'flex', width: 'max-content' }}>
          {[...events, ...events].map(([date, name, loc, img, glyph], i) => (
            <div key={i} style={{
              flexShrink: 0, width: 260, height: 330, marginRight: 20,
              border: `1px solid ${saiPalette.paper}33`,
              padding: 20,
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              position: 'relative', overflow: 'hidden',
            }}>
              {img && (
                <React.Fragment>
                  <img src={img} alt={name} style={{
                    position: 'absolute', inset: 0, width: '100%', height: '100%',
                    objectFit: 'cover', zIndex: 0,
                  }} />
                  <div style={{
                    position: 'absolute', inset: 0, zIndex: 1,
                    background: `linear-gradient(180deg, ${saiPalette.aiDeep}99 0%, ${saiPalette.aiDeep}33 40%, ${saiPalette.aiDeep}ee 100%)`,
                  }} />
                </React.Fragment>
              )}
              {!img && glyph && (
                <span aria-hidden="true" style={{
                  position: 'absolute', right: -14, bottom: -44, zIndex: 0,
                  fontFamily: saiFont.jpSerif, fontSize: 200, lineHeight: 1,
                  color: saiPalette.paper, opacity: 0.1, letterSpacing: 0,
                }}>{glyph}</span>
              )}
              <div style={{ fontFamily: saiFont.mono, fontSize: 10, letterSpacing: 2, opacity: 0.9, position: 'relative', zIndex: 2 }}>{date}</div>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ fontFamily: saiFont.jpSerif, fontSize: 17, lineHeight: 1.6, letterSpacing: '0.04em' }}>{name}</div>
                <div style={{ fontFamily: saiFont.mono, fontSize: 9, letterSpacing: 2, opacity: 0.8, marginTop: 8 }}>{loc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes saiMarquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .sai-marquee { animation: saiMarquee 62s linear infinite; }
        .sai-marquee:hover { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) { .sai-marquee { animation: none; } }
      `}</style>
    </div>
  );
}
function SaiCTA() {
  const tabs = [
    ['私たちについて', 'About', ['目的と設立背景', 'メンバー紹介']],
    ['屋号概要', 'Profile', ['事業紹介', '屋号情報', '拠点'], 'company'],
    ['お知らせ', 'News', ['新着記事', 'プレスリリース', 'メディア掲載']],
    ['お問い合わせ', 'Contact', ['法人の方', '学生の方', '取材依頼']],
    ['パートナー', 'Partners', ['H.O.I.Consulting', '(株)遊然', 'LITERAS AI']],
  ];
  return (
    <div style={{ background: saiVeil(saiPalette.paper), padding: '96px 56px 32px', position: 'relative' }}>
      <div style={{ textAlign: 'center', maxWidth: 1200, margin: '0 auto 80px' }}>
        <div style={{ fontFamily: saiFont.mono, fontSize: 11, letterSpacing: 3, color: saiOnPhoto(saiPalette.akane), textShadow: saiShadow(), marginBottom: 20 }}>—— TOGETHER</div>
        <h2 style={{ fontFamily: saiFont.jpSerif, fontSize: 'clamp(36px, 4.6vw, 60px)', fontWeight: 400, margin: 0, color: saiOnPhoto(saiPalette.ink), textShadow: saiShadow(), letterSpacing: '0.06em', lineHeight: 1.3, whiteSpace: 'nowrap' }}>
          {window.t('その地に、もう一度、')}<span style={{ color: saiOnPhoto(saiPalette.ai) }}>{window.t('光を。')}</span>
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 24, paddingTop: 48, borderTop: `1px solid ${saiLine(saiPalette.ink, '33')}` }}>
        {tabs.map(([jp, en, sub, id]) => (
          <div
            key={en}
            onClick={() => window.saiNavigate && window.saiNavigate(id || en.toLowerCase())}
            style={{ cursor: 'pointer' }}
          >
            <div style={{ fontFamily: saiFont.jpSerif, fontSize: 15, color: saiOnPhoto(saiPalette.ink), textShadow: saiShadow(), letterSpacing: 2, fontWeight: 500 }}>{window.t(jp)}</div>
            <div style={{ fontFamily: saiFont.mono, fontSize: 9, letterSpacing: 2, color: saiOnPhoto(saiPalette.akane), textShadow: saiShadow(), marginTop: 2, marginBottom: 14 }}>{en.toUpperCase()}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {sub.map(s => (
                <span key={s} style={{ fontFamily: saiFont.jpSerif, fontSize: 12, color: saiOnPhoto(saiPalette.muted), textShadow: saiShadow(), letterSpacing: 1 }}>— {window.t(s)}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 64, paddingTop: 24, borderTop: `1px solid ${saiLine(saiPalette.ink, '22')}`, display: 'flex', justifyContent: 'space-between', fontFamily: saiFont.mono, fontSize: 10, letterSpacing: 2, color: saiOnPhoto(saiPalette.muted), textShadow: saiShadow() }}>
        <span>© REGIONAL LAB 2026</span>
        <span>{window.t('魚沼エリア × 宮城エリア × 東京エリア')}</span>
        <span>{window.t('個の研鑽をもって、日本の礎であり続ける。')}</span>
      </div>
    </div>
  );
}

function SaiVariant() {
  return (
    <div style={{ fontFamily: saiFont.jpSerif, color: saiOnPhoto(saiPalette.ink), background: saiBackdropOn() ? 'transparent' : saiPalette.paper }}>
      <SaiNav />
      <SaiHero />
      <SaiMission />
      <SaiConsulting />
      <SaiBusiness />
      <SaiTimeline />
      <SaiCTA />
    </div>
  );
}

Object.assign(window, { SaiVariant, SaiNav, SaiCTA });
