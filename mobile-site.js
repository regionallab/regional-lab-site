// 自動生成ファイル — 編集しないでください。編集は mobile-site.jsx を直し、bash tools/build.sh を実行。
// ==========================================================
// MOBILE SITE — Regional Lab 専用モバイルレイアウト
// ==========================================================

const mPalette = {
  paper: '#f1ead8',
  paperDeep: '#e6dcc0',
  ink: '#1f1a14',
  ai: '#1f3552',
  aiDeep: '#13243a',
  koke: '#5a6b3d',
  akane: '#9a3324',
  muted: '#766a52'
};
const mFont = {
  jpSerif: '"Zen Old Mincho", "Noto Serif JP", serif',
  jpAlt: '"Shippori Mincho", "Noto Serif JP", serif',
  enSerif: '"Cormorant Garamond", serif',
  mono: '"JetBrains Mono", ui-monospace, monospace'
};

// ----------------------------------------------------------
// Mobile Nav (hamburger drawer)
// ----------------------------------------------------------
// 読点で改行し、語の途中で折り返されないようにする（英語は読点が無いので1行のまま）
function mBreakAtComma(text) {
  const parts = String(text).split('、');
  return parts.map((part, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, part, i < parts.length - 1 ? '、' : '', i < parts.length - 1 ? /*#__PURE__*/React.createElement("br", null) : null));
}
function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const navItems = [['ホーム', 'home'], ['私たちについて', 'about'], ['屋号概要', 'company', 'Profile'], ['事業概要', 'business'], ['お知らせ', 'news'], ['パートナー', 'partners'], ['お問い合わせ', 'contact']];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px 18px',
      ...saiVars(true),
      color: 'var(--sai-ink)',
      textShadow: 'none',
      background: saiVeil(mPalette.paper, 0.92),
      borderBottom: `1px solid ${saiLine(mPalette.ink, '22')}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => {
      window.saiNavigate && window.saiNavigate('home');
      setOpen(false);
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 22,
      overflow: 'hidden',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/logo-regionallab.png",
    alt: "Regional Lab",
    style: {
      width: '135%',
      height: '135%',
      objectFit: 'cover',
      marginLeft: '-17.5%',
      marginTop: '-17.5%',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1.1,
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mFont.jpSerif,
      fontSize: 19,
      fontWeight: 600,
      letterSpacing: 0.5,
      color: 'var(--sai-ink)'
    }
  }, "Regional Lab"))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(!open),
    "aria-label": "Menu",
    style: {
      background: 'none',
      border: 'none',
      padding: 8,
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 2,
      background: mPalette.ink,
      display: 'block',
      transition: 'all 0.2s',
      transform: open ? 'translateY(7px) rotate(45deg)' : 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 2,
      background: mPalette.ink,
      display: 'block',
      opacity: open ? 0 : 1,
      transition: 'all 0.2s'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 2,
      background: mPalette.ink,
      display: 'block',
      transition: 'all 0.2s',
      transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none'
    }
  }))), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      top: 73,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 99,
      ...saiVars(true),
      color: 'var(--sai-ink)',
      textShadow: 'none',
      background: mPalette.paper,
      padding: '40px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, navItems.map(([jp, en, sub]) => /*#__PURE__*/React.createElement("div", {
    key: en,
    onClick: () => {
      window.saiNavigate && window.saiNavigate(en);
      setOpen(false);
    },
    style: {
      padding: '18px 8px',
      borderBottom: `1px solid ${saiLine(mPalette.ink, '22')}`,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: mFont.jpSerif,
      fontSize: 18,
      color: 'var(--sai-ink)',
      letterSpacing: 2
    }
  }, window.t(jp)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: mFont.mono,
      fontSize: 10,
      letterSpacing: 2,
      color: 'var(--sai-akane)'
    }
  }, (sub || en).toUpperCase(), " \u2192"))), /*#__PURE__*/React.createElement("div", {
    onClick: () => window.saiSetLang(window.saiLang === 'en' ? 'ja' : 'en'),
    style: {
      marginTop: 20,
      padding: '14px 8px',
      border: `1px solid ${saiLine(mPalette.ink, 'ff')}`,
      display: 'flex',
      gap: 8,
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: mFont.mono,
      fontSize: 13,
      letterSpacing: 2,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: window.saiLang === 'ja' ? 1 : 0.4,
      fontWeight: window.saiLang === 'ja' ? 700 : 400
    }
  }, "JP"), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.4
    }
  }, "/"), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: window.saiLang === 'en' ? 1 : 0.4,
      fontWeight: window.saiLang === 'en' ? 700 : 400
    }
  }, "EN"))));
}

// ----------------------------------------------------------
// Mobile Footer (compact CTA + sitemap)
// ----------------------------------------------------------
function MobileFooter() {
  const navItems = [['私たちについて', 'about'], ['屋号概要', 'company', 'Profile'], ['事業概要', 'business'], ['お知らせ', 'news'], ['パートナー', 'partners'], ['お問い合わせ', 'contact']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: saiVeil(mPalette.paper),
      padding: '64px 24px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mFont.mono,
      fontSize: 10,
      letterSpacing: 3,
      color: saiOnPhoto(mPalette.akane),
      textShadow: saiShadow(),
      marginBottom: 16
    }
  }, "\u2014\u2014 TOGETHER"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: mFont.jpSerif,
      fontSize: 28,
      fontWeight: 400,
      margin: 0,
      color: saiOnPhoto(mPalette.ink),
      textShadow: saiShadow(),
      letterSpacing: '0.04em',
      lineHeight: 1.5
    }
  }, window.t('その地に、もう一度、'), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: saiOnPhoto(mPalette.ai)
    }
  }, window.t('光を。')))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: `1px solid ${saiLine(mPalette.ink, '33')}`,
      paddingTop: 28,
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, navItems.map(([jp, en, sub]) => /*#__PURE__*/React.createElement("div", {
    key: en,
    onClick: () => window.saiNavigate && window.saiNavigate(en),
    style: {
      padding: '14px 4px',
      borderBottom: `1px solid ${saiLine(mPalette.ink, '11')}`,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: mFont.jpSerif,
      fontSize: 15,
      letterSpacing: 2,
      color: saiOnPhoto(mPalette.ink),
      textShadow: saiShadow()
    }
  }, window.t(jp)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: mFont.mono,
      fontSize: 9,
      letterSpacing: 2,
      color: saiOnPhoto(mPalette.akane),
      textShadow: saiShadow()
    }
  }, (sub || en).toUpperCase())))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      paddingTop: 20,
      borderTop: `1px solid ${saiLine(mPalette.ink, '22')}`,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      fontFamily: mFont.mono,
      fontSize: 10,
      letterSpacing: 1.5,
      color: saiOnPhoto(mPalette.muted),
      textShadow: saiShadow(),
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 REGIONAL LAB 2026"), /*#__PURE__*/React.createElement("span", null, window.t('魚沼エリア × 宮城エリア × 東京エリア'))));
}

// ----------------------------------------------------------
// Mobile Page Header (used by sub-pages)
// ----------------------------------------------------------
function MobilePageHeader({
  no,
  jp,
  en,
  lead
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: saiVeil(mPalette.paperDeep),
      padding: '48px 24px 40px',
      borderBottom: `1px solid ${saiLine(mPalette.ink, '22')}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mFont.mono,
      fontSize: 10,
      letterSpacing: 3,
      color: 'var(--sai-akane)',
      marginBottom: 14
    }
  }, "SECTION ", no, " \u2014 ", en.toUpperCase()), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: mFont.jpSerif,
      fontSize: 40,
      fontWeight: 500,
      margin: 0,
      color: 'var(--sai-ink)',
      letterSpacing: '0.05em',
      lineHeight: 1.2
    }
  }, jp), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mFont.enSerif,
      fontStyle: 'italic',
      fontSize: 20,
      color: 'var(--sai-muted)',
      marginTop: 8
    }
  }, en), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 20,
      fontFamily: mFont.jpSerif,
      fontSize: 14,
      color: 'var(--sai-ink)',
      lineHeight: 2,
      margin: '20px 0 0'
    }
  }, lead));
}

// ----------------------------------------------------------
// HOME
// ----------------------------------------------------------
function MobileHome() {
  const business = window.siteData.business.map(b => ({
    ...b,
    bodyText: Array.isArray(b.body) ? b.body.join('') : b.body
  }));
  const events = window.siteData.timeline.map(([date, title, place]) => [date, title, place]);
  const consulting = window.siteData.consulting;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...saiVars(false),
      background: saiBackdropOn() ? 'transparent' : mPalette.paper
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px 24px 56px',
      background: `linear-gradient(180deg, ${saiVeil(mPalette.paper)} 0%, ${saiVeil(mPalette.paperDeep)} 100%)`,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mFont.mono,
      fontSize: 10,
      letterSpacing: 3,
      color: saiOnPhoto(mPalette.akane),
      textShadow: saiShadow(),
      marginBottom: 24
    }
  }, "\u2014\u2014 ", window.t('新潟県南魚沼市を支え続ける企業へ'), " \u2014\u2014"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: mFont.jpSerif,
      fontSize: 44,
      fontWeight: 500,
      margin: 0,
      color: saiOnPhoto(mPalette.ink),
      textShadow: saiShadow(),
      letterSpacing: '0.04em',
      lineHeight: 1.3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      whiteSpace: window.saiLang === 'en' ? 'normal' : 'nowrap'
    }
  }, window.t('地方の未来を、')), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      whiteSpace: window.saiLang === 'en' ? 'normal' : 'nowrap'
    }
  }, window.t('彩る組織へ'))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      position: 'relative',
      paddingTop: 64,
      paddingLeft: 52
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '94%',
      height: '90%',
      background: saiBackdropOn() ? mPalette.aiDeep : mPalette.ai
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      aspectRatio: '4/5',
      overflow: 'hidden',
      background: '#d5d492'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/hero-logo-hq.png",
    alt: "Regional Lab",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: saiVeil(mPalette.paperDeep),
      padding: '64px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mFont.mono,
      fontSize: 10,
      letterSpacing: 3,
      color: saiOnPhoto(mPalette.akane),
      textShadow: saiShadow(),
      marginBottom: 18
    }
  }, "\u2014\u2014 ", window.t('─ 理念 / 使命 / 展望').replace('─ ', '')), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: mFont.jpSerif,
      fontSize: 30,
      fontWeight: 400,
      color: saiOnPhoto(mPalette.ink),
      textShadow: saiShadow(),
      letterSpacing: '0.04em',
      lineHeight: 1.5,
      margin: 0
    }
  }, window.siteData.mission.heading.map((h, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, h[0], /*#__PURE__*/React.createElement("span", {
    style: {
      color: saiOnPhoto(h[2] === 'akane' ? mPalette.akane : mPalette.ai)
    }
  }, h[1]), h[3], i === 0 && /*#__PURE__*/React.createElement("br", null)))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: mFont.jpSerif,
      fontSize: 14,
      color: saiOnPhoto(mPalette.ink),
      textShadow: saiShadow(),
      lineHeight: 2,
      margin: '28px 0 32px'
    }
  }, window.siteData.mission.body), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, [{
    label: 'PHILOSOPHY',
    jp: window.t('理念'),
    body: window.siteData.about.pillars[0][1],
    bg: mPalette.paper,
    color: 'var(--sai-ink)'
  }, {
    label: 'MISSION',
    jp: window.t('使命'),
    body: window.siteData.about.pillars[1][1],
    bg: mPalette.ai,
    color: mPalette.paper
  }, {
    label: 'VISION',
    jp: window.t('展望'),
    body: window.siteData.about.pillars[2][1],
    bg: mPalette.koke,
    color: mPalette.paper
  }].map(c => /*#__PURE__*/React.createElement("div", {
    key: c.label,
    style: {
      background: c.bg,
      color: c.color,
      padding: '22px 20px',
      borderRadius: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mFont.mono,
      fontSize: 9,
      letterSpacing: 3,
      opacity: 0.7
    }
  }, c.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mFont.jpSerif,
      fontSize: 14,
      letterSpacing: 5,
      marginTop: 4,
      opacity: 0.85
    }
  }, c.jp), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mFont.jpSerif,
      fontSize: 17,
      lineHeight: 1.8,
      letterSpacing: '0.04em',
      marginTop: 12
    }
  }, mBreakAtComma(c.body)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: saiVeil(mPalette.paper),
      color: 'var(--sai-ink)',
      padding: '56px 24px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mFont.mono,
      fontSize: 10,
      letterSpacing: 3,
      color: saiOnPhoto(mPalette.akane),
      textShadow: saiShadow(),
      marginBottom: 16
    }
  }, consulting.eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: mFont.jpSerif,
      fontSize: 30,
      fontWeight: 400,
      margin: 0,
      color: saiOnPhoto(mPalette.ink),
      textShadow: saiShadow(),
      letterSpacing: '0.04em',
      lineHeight: 1.5
    }
  }, consulting.heading[0], /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: saiOnPhoto(mPalette.akane)
    }
  }, consulting.heading[1]), consulting.heading[2]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mFont.mono,
      fontSize: 10,
      letterSpacing: 2,
      color: saiOnPhoto(mPalette.muted),
      textShadow: saiShadow(),
      marginTop: 14,
      lineHeight: 1.8
    }
  }, consulting.scope), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: mFont.jpSerif,
      fontSize: 14,
      color: saiOnPhoto(mPalette.muted),
      textShadow: saiShadow(),
      lineHeight: 2,
      margin: '20px 0 0'
    }
  }, consulting.body)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '64px 24px',
      background: saiVeil(mPalette.paper)
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: mFont.jpSerif,
      fontSize: 40,
      fontWeight: 400,
      margin: 0,
      color: saiOnPhoto(mPalette.ink),
      textShadow: saiShadow(),
      letterSpacing: '0.04em'
    }
  }, window.t('四つの'), /*#__PURE__*/React.createElement("span", {
    style: {
      color: saiOnPhoto(mPalette.akane)
    }
  }, window.t('柱'))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mFont.mono,
      fontSize: 10,
      letterSpacing: 3,
      color: saiOnPhoto(mPalette.muted),
      textShadow: saiShadow(),
      marginTop: 6
    }
  }, "OUR BUSINESS \u2014 04 SECTORS")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 36
    }
  }, business.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.tag,
    style: {
      ...saiVars(true),
      color: 'var(--sai-ink)',
      textShadow: 'none',
      background: mPalette.paperDeep,
      padding: 20,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -8,
      left: 20,
      fontFamily: mFont.mono,
      fontSize: 10,
      letterSpacing: 3,
      ...saiVars(true),
      color: 'var(--sai-ink)',
      textShadow: 'none',
      background: mPalette.paper,
      padding: '4px 8px',
      color: s.accent
    }
  }, "0", i + 1, " / 0", business.length), s.img ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      aspectRatio: '16/10',
      overflow: 'hidden',
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: s.img,
    alt: s.tag,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  })) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      aspectRatio: '16/10',
      marginTop: 8,
      background: `linear-gradient(135deg, ${s.accent}22 0%, ${s.accent}44 100%)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: mFont.mono,
      fontSize: 10,
      letterSpacing: 3,
      color: s.accent
    }
  }, s.en), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      fontFamily: mFont.jpAlt,
      fontSize: 26,
      color: s.accent,
      letterSpacing: 1
    }
  }, s.tag), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mFont.jpSerif,
      fontSize: 13,
      letterSpacing: 3,
      color: 'var(--sai-muted)',
      marginTop: 4
    }
  }, s.jp), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: mFont.jpSerif,
      fontSize: 14,
      lineHeight: 2,
      color: 'var(--sai-ink)',
      marginTop: 14,
      margin: '14px 0 16px'
    }
  }, s.bodyText), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 14px',
      background: s.accent,
      color: mPalette.paper,
      alignSelf: 'flex-start',
      display: 'inline-block',
      fontFamily: mFont.jpSerif,
      fontSize: 13,
      letterSpacing: 3
    }
  }, "\u300C", s.key, "\u300D"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: mPalette.aiDeep || '#13243a',
      padding: '56px 0',
      color: mPalette.paper,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 24px',
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: mFont.jpSerif,
      fontSize: 32,
      fontWeight: 400,
      margin: 0,
      color: mPalette.paper,
      letterSpacing: '0.04em'
    }
  }, window.t('歩みは続く'), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: mFont.enSerif,
      fontStyle: 'italic',
      color: '#c2452f',
      fontSize: 20
    }
  }, " \u2014 ongoing.")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mFont.mono,
      fontSize: 10,
      letterSpacing: 3,
      color: mPalette.paper,
      opacity: 0.7,
      marginTop: 8
    }
  }, "EVENTS \u2014 2024\u20132026")), /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "m-marquee",
    style: {
      display: 'flex',
      gap: 14,
      width: 'max-content',
      paddingLeft: 14
    }
  }, [...window.siteData.timeline, ...window.siteData.timeline].map(([date, name, loc, img, glyph], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flexShrink: 0,
      width: 200,
      height: 280,
      border: `1px solid ${mPalette.paper}33`,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: 16
    }
  }, img && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
    src: img,
    alt: name,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 1,
      background: 'linear-gradient(180deg, rgba(19,36,58,0.6) 0%, rgba(19,36,58,0.2) 40%, rgba(19,36,58,0.93) 100%)'
    }
  })), !img && glyph && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: -10,
      bottom: -34,
      zIndex: 0,
      fontFamily: mFont.jpSerif,
      fontSize: 150,
      lineHeight: 1,
      color: mPalette.paper,
      opacity: 0.1,
      letterSpacing: 0
    }
  }, glyph), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mFont.mono,
      fontSize: 10,
      letterSpacing: 2,
      position: 'relative',
      zIndex: 2
    }
  }, date), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mFont.jpSerif,
      fontSize: 15,
      lineHeight: 1.6,
      letterSpacing: '0.04em'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mFont.mono,
      fontSize: 9,
      letterSpacing: 2,
      opacity: 0.85,
      marginTop: 6
    }
  }, loc)))))), /*#__PURE__*/React.createElement("style", null, `
          @keyframes mMarquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
          .m-marquee { animation: mMarquee 57s linear infinite; }
          @media (prefers-reduced-motion: reduce) { .m-marquee { animation: none; } }
        `)), /*#__PURE__*/React.createElement(MobileFooter, null));
}

// ----------------------------------------------------------
// ABOUT
// ----------------------------------------------------------
function MobileAbout() {
  const about = window.siteData.about;
  const members = about.members.map(m => ({
    ...m,
    bio: Array.isArray(m.bio) ? m.bio.join('') : m.bio
  }));
  const pillarColors = ['#c2452f', '#d8a13a', '#9bb06a'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...saiVars(false),
      background: saiBackdropOn() ? 'transparent' : mPalette.paper,
      color: 'var(--sai-ink)',
      textShadow: saiShadow()
    }
  }, /*#__PURE__*/React.createElement(MobilePageHeader, {
    no: "01",
    jp: window.t('私たちについて'),
    en: "About Us",
    lead: about.lead
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '48px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mFont.mono,
      fontSize: 10,
      letterSpacing: 3,
      color: 'var(--sai-akane)',
      marginBottom: 14
    }
  }, "SECTION 01 \u2014 PURPOSE"), /*#__PURE__*/React.createElement("div", {
    style: {
      ...saiVars(true),
      color: 'var(--sai-ink)',
      textShadow: 'none',
      background: mPalette.paperDeep,
      padding: 22,
      borderLeft: `4px solid ${mPalette.akane}`
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: mFont.jpSerif,
      fontSize: 22,
      fontWeight: 500,
      margin: '0 0 16px',
      color: 'var(--sai-ink)',
      letterSpacing: '0.04em',
      lineHeight: 1.6
    }
  }, about.purpose.heading), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: mFont.jpSerif,
      fontSize: 14,
      color: 'var(--sai-muted)',
      lineHeight: 2,
      margin: 0
    }
  }, about.purpose.body))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mFont.mono,
      fontSize: 10,
      letterSpacing: 3,
      color: 'var(--sai-ai)',
      marginBottom: 10
    }
  }, "BACKGROUND"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: mFont.jpSerif,
      fontSize: 20,
      fontWeight: 500,
      margin: '0 0 16px',
      color: 'var(--sai-ink)',
      letterSpacing: '0.04em'
    }
  }, about.background.heading), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, about.background.paragraphs.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      fontFamily: mFont.jpSerif,
      fontSize: 14,
      color: 'var(--sai-ink)',
      lineHeight: 2,
      margin: 0
    }
  }, p)))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '0 -24px 40px',
      background: mPalette.ai,
      color: mPalette.paper,
      padding: '36px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, about.pillars.map(([label, body], i) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      borderLeft: `2px solid ${pillarColors[i]}`,
      paddingLeft: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mFont.mono,
      fontSize: 10,
      letterSpacing: 3,
      opacity: 0.7
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mFont.jpSerif,
      fontSize: 17,
      lineHeight: 1.8,
      marginTop: 8,
      letterSpacing: '0.04em'
    }
  }, mBreakAtComma(body)))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mFont.mono,
      fontSize: 10,
      letterSpacing: 3,
      color: 'var(--sai-akane)',
      marginBottom: 18
    }
  }, "SECTION 02 \u2014 MEMBERS"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, members.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: m.jp,
    style: {
      ...saiVars(true),
      color: 'var(--sai-ink)',
      textShadow: 'none',
      background: mPalette.paperDeep,
      padding: 22
    }
  }, m.img && /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      aspectRatio: '4/3',
      overflow: 'hidden',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: m.img,
    alt: m.jp,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mFont.mono,
      fontSize: 10,
      letterSpacing: 2,
      color: 'var(--sai-akane)',
      marginBottom: 10
    }
  }, m.role), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mFont.jpSerif,
      fontSize: 22,
      color: 'var(--sai-ink)',
      letterSpacing: '0.05em'
    }
  }, m.jp), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mFont.enSerif,
      fontStyle: 'italic',
      fontSize: 16,
      color: 'var(--sai-ai)',
      marginTop: 4
    }
  }, m.en), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: mFont.jpSerif,
      fontSize: 13,
      color: 'var(--sai-ink)',
      lineHeight: 1.9,
      marginTop: 14,
      margin: '14px 0 0'
    }
  }, m.bio)))))), /*#__PURE__*/React.createElement(MobileFooter, null));
}

// ----------------------------------------------------------
// COMPANY
// ----------------------------------------------------------
function MobileCompany() {
  const services = window.siteData.company.services;
  const companyInfo = window.siteData.company.info;
  const info = [[window.t('屋号名'), window.saiLang === 'en' ? 'Regional Lab' : 'Regional Lab / リージョナルラボ'], [window.t('設立'), companyInfo.founded], [window.t('代表'), window.saiLang === 'en' ? 'Kidera Soma' : '木寺 蒼真'], [window.t('役員'), companyInfo.officers]];
  const offices = companyInfo.offices;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...saiVars(false),
      background: saiBackdropOn() ? 'transparent' : mPalette.paper,
      color: 'var(--sai-ink)',
      textShadow: saiShadow()
    }
  }, /*#__PURE__*/React.createElement(MobilePageHeader, {
    no: "02",
    jp: window.t('屋号概要'),
    en: "Profile",
    lead: window.siteData.company.lead
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '48px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mFont.mono,
      fontSize: 10,
      letterSpacing: 3,
      color: 'var(--sai-akane)',
      marginBottom: 14
    }
  }, "SECTION 01 \u2014 BUSINESS"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: mFont.jpSerif,
      fontSize: 28,
      margin: '0 0 24px',
      color: 'var(--sai-ink)',
      letterSpacing: '0.04em',
      fontWeight: 500
    }
  }, window.t('事業紹介')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, services.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.tag,
    style: {
      ...saiVars(true),
      color: 'var(--sai-ink)',
      textShadow: 'none',
      background: mPalette.paperDeep,
      padding: 20,
      borderTop: `2px solid ${s.color}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mFont.jpAlt,
      fontSize: 22,
      color: s.color,
      letterSpacing: 1
    }
  }, s.tag), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mFont.jpSerif,
      fontSize: 13,
      letterSpacing: 3,
      color: 'var(--sai-muted)',
      marginTop: 4
    }
  }, s.jp), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: mFont.jpSerif,
      fontSize: 13,
      lineHeight: 1.9,
      color: 'var(--sai-ink)',
      marginTop: 12,
      margin: '12px 0 0'
    }
  }, s.body))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mFont.mono,
      fontSize: 10,
      letterSpacing: 3,
      color: 'var(--sai-akane)',
      marginBottom: 14
    }
  }, "SECTION 02 \u2014 BUSINESS PROFILE"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: mFont.jpSerif,
      fontSize: 28,
      margin: '0 0 24px',
      color: 'var(--sai-ink)',
      letterSpacing: '0.04em',
      fontWeight: 500
    }
  }, window.t('屋号情報')), /*#__PURE__*/React.createElement("div", {
    style: {
      ...saiVars(true),
      color: 'var(--sai-ink)',
      textShadow: 'none',
      background: mPalette.paperDeep,
      padding: 22,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, info.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      paddingBottom: 12,
      borderBottom: `1px solid ${saiLine(mPalette.ink, '22')}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mFont.mono,
      fontSize: 10,
      letterSpacing: 2,
      color: 'var(--sai-akane)'
    }
  }, k.toUpperCase()), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mFont.jpSerif,
      fontSize: 14,
      color: 'var(--sai-ink)',
      letterSpacing: 1
    }
  }, v))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mFont.mono,
      fontSize: 10,
      letterSpacing: 2,
      color: 'var(--sai-akane)'
    }
  }, "LOCATIONS"), offices.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: mPalette.akane,
      color: mPalette.paper,
      fontFamily: mFont.jpSerif,
      fontSize: 11,
      letterSpacing: 2,
      padding: '4px 10px',
      alignSelf: 'flex-start'
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mFont.jpSerif,
      fontSize: 13,
      color: 'var(--sai-ink)',
      lineHeight: 1.7
    }
  }, v))))))), /*#__PURE__*/React.createElement(MobileFooter, null));
}

// ----------------------------------------------------------
// NEWS
// ----------------------------------------------------------
// 記事カバー（文字を画像に焼かずに描く）
function MobileNewsCover({
  cover,
  ratio
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      aspectRatio: ratio,
      background: cover.bg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 320 64",
    role: "img",
    "aria-label": cover.label,
    style: {
      width: '64%',
      height: 'auto',
      display: 'block',
      overflow: 'visible'
    }
  }, /*#__PURE__*/React.createElement("text", {
    x: "160",
    y: "46",
    textAnchor: "middle",
    fill: mPalette.paper,
    fontFamily: mFont.enSerif,
    fontSize: "48",
    letterSpacing: "0.5"
  }, cover.label)));
}
function MobileNews() {
  const articles = window.siteData.news.articles;
  const cats = ['ALL', ...Array.from(new Set(articles.map(a => a.cat)))];
  const [active, setActive] = React.useState('ALL');
  const [open, setOpen] = React.useState(null);
  const shown = active === 'ALL' ? articles : articles.filter(a => a.cat === active);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...saiVars(false),
      background: saiBackdropOn() ? 'transparent' : mPalette.paper,
      color: 'var(--sai-ink)',
      textShadow: saiShadow()
    }
  }, /*#__PURE__*/React.createElement(MobilePageHeader, {
    no: "03",
    jp: window.t('お知らせ'),
    en: "News",
    lead: window.siteData.news.lead
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px 24px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 24,
      flexWrap: 'wrap'
    }
  }, cats.map(c => /*#__PURE__*/React.createElement("div", {
    key: c,
    onClick: () => setActive(c),
    style: {
      padding: '8px 16px',
      border: `1px solid ${saiLine(mPalette.ink, 'ff')}`,
      background: active === c ? mPalette.ink : 'transparent',
      color: active === c ? mPalette.paper : mPalette.ink,
      fontFamily: mFont.mono,
      fontSize: 11,
      letterSpacing: 2,
      cursor: 'pointer'
    }
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, shown.map(a => /*#__PURE__*/React.createElement("div", {
    key: a.no,
    onClick: () => setOpen(a),
    style: {
      ...saiVars(true),
      color: 'var(--sai-ink)',
      textShadow: 'none',
      background: mPalette.paperDeep,
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      borderLeft: `4px solid ${a.catColor}`,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: mFont.mono,
      fontSize: 10,
      letterSpacing: 2,
      color: 'var(--sai-muted)'
    }
  }, a.date), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: mFont.mono,
      fontSize: 9,
      letterSpacing: 2,
      color: a.catColor,
      border: `1px solid ${a.catColor}`,
      padding: '3px 8px'
    }
  }, a.cat), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: mFont.enSerif,
      fontStyle: 'italic',
      fontSize: 13,
      color: 'var(--sai-muted)',
      marginLeft: 'auto'
    }
  }, "No. ", a.no)), a.img ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      aspectRatio: '4/3',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: a.img,
    alt: a.title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: a.imgPos || 'center',
      display: 'block'
    }
  })) : a.cover ? /*#__PURE__*/React.createElement(MobileNewsCover, {
    cover: a.cover,
    ratio: "4/3"
  }) : null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: mFont.jpSerif,
      fontSize: 17,
      fontWeight: 500,
      margin: 0,
      letterSpacing: '0.04em',
      lineHeight: 1.55
    }
  }, a.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: mFont.jpSerif,
      fontSize: 13,
      lineHeight: 1.95,
      color: 'var(--sai-akane)',
      margin: 0
    }
  }, a.lead), /*#__PURE__*/React.createElement(NewsBody, {
    body: a.body,
    firstOnly: true,
    style: {
      fontSize: 12,
      lineHeight: 2,
      color: 'var(--sai-ink)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mFont.enSerif,
      fontStyle: 'italic',
      fontSize: 13,
      color: 'var(--sai-ink)',
      borderBottom: `1px solid ${saiLine(mPalette.ink, 'ff')}`,
      display: 'inline-block',
      alignSelf: 'flex-start',
      paddingBottom: 2
    }
  }, "Read more \u2192"))))), open && /*#__PURE__*/React.createElement(MobileNewsModal, {
    article: open,
    onClose: () => setOpen(null)
  }), /*#__PURE__*/React.createElement(MobileFooter, null));
}
function MobileNewsModal({
  article: a,
  onClose
}) {
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      background: 'rgba(20,16,10,0.6)',
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      ...saiVars(true),
      color: 'var(--sai-ink)',
      textShadow: 'none',
      background: mPalette.paper,
      minHeight: '100%',
      borderTop: `5px solid ${a.catColor}`,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "\u9589\u3058\u308B",
    style: {
      position: 'fixed',
      top: 16,
      right: 16,
      zIndex: 2,
      width: 46,
      height: 46,
      borderRadius: 23,
      border: 'none',
      background: mPalette.ink,
      color: mPalette.paper,
      fontSize: 22,
      cursor: 'pointer'
    }
  }, "\xD7"), a.img ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      aspectRatio: '4/3',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: a.img,
    alt: a.title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: a.imgPos || 'center',
      display: 'block'
    }
  })) : a.cover ? /*#__PURE__*/React.createElement(MobileNewsCover, {
    cover: a.cover,
    ratio: "4/3"
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '32px 24px 64px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: mFont.mono,
      fontSize: 10,
      letterSpacing: 2,
      color: a.catColor,
      border: `1px solid ${a.catColor}`,
      padding: '4px 10px'
    }
  }, a.cat), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: mFont.mono,
      fontSize: 11,
      letterSpacing: 2,
      color: 'var(--sai-muted)'
    }
  }, a.date), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: mFont.enSerif,
      fontStyle: 'italic',
      fontSize: 13,
      color: 'var(--sai-muted)',
      marginLeft: 'auto'
    }
  }, "No. ", a.no)), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: mFont.jpSerif,
      fontSize: 24,
      fontWeight: 500,
      margin: 0,
      letterSpacing: '0.04em',
      lineHeight: 1.5
    }
  }, a.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: mFont.jpSerif,
      fontSize: 15,
      lineHeight: 2,
      color: a.catColor,
      margin: '18px 0 20px'
    }
  }, a.lead), /*#__PURE__*/React.createElement(NewsBody, {
    body: a.body,
    style: {
      fontSize: 14,
      lineHeight: 2.2,
      color: 'var(--sai-ink)'
    }
  }), a.url && /*#__PURE__*/React.createElement("a", {
    href: a.url,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      marginTop: 26,
      display: 'block',
      textAlign: 'center',
      padding: '15px 20px',
      background: a.catColor,
      color: mPalette.paper,
      textDecoration: 'none',
      fontFamily: mFont.jpSerif,
      fontSize: 14,
      letterSpacing: 2
    }
  }, a.urlLabel, " \u2192"))));
}

// ----------------------------------------------------------
// PARTNERS
// ----------------------------------------------------------
function MobilePartners() {
  const partners = window.siteData.partners.list;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...saiVars(false),
      background: saiBackdropOn() ? 'transparent' : mPalette.paper,
      color: 'var(--sai-ink)',
      textShadow: saiShadow()
    }
  }, /*#__PURE__*/React.createElement(MobilePageHeader, {
    no: "04",
    jp: window.t('パートナー'),
    en: "Partners",
    lead: window.siteData.partners.lead
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '48px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, partners.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.no,
    style: {
      ...saiVars(true),
      color: 'var(--sai-ink)',
      textShadow: 'none',
      background: mPalette.paperDeep,
      padding: 22,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 28,
      background: p.color,
      color: mPalette.paper,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: mFont.jpSerif,
      fontSize: 22,
      flexShrink: 0
    }
  }, p.no), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mFont.mono,
      fontSize: 9,
      letterSpacing: 2,
      color: p.color,
      marginBottom: 4
    }
  }, p.relation), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mFont.jpSerif,
      fontSize: 17,
      color: 'var(--sai-ink)',
      letterSpacing: '0.04em',
      lineHeight: 1.4
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mFont.enSerif,
      fontStyle: 'italic',
      fontSize: 13,
      color: 'var(--sai-muted)'
    }
  }, p.en))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, p.tags.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      fontFamily: mFont.jpSerif,
      fontSize: 10,
      letterSpacing: 1.5,
      padding: '4px 8px',
      border: `1px solid ${saiLine(mPalette.ink, '55')}`,
      color: 'var(--sai-ink)'
    }
  }, t))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: mFont.jpSerif,
      fontSize: 13,
      lineHeight: 1.9,
      color: 'var(--sai-ink)',
      margin: 0
    }
  }, p.body), p.url && /*#__PURE__*/React.createElement("a", {
    href: p.url,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      fontFamily: mFont.enSerif,
      fontStyle: 'italic',
      fontSize: 14,
      color: 'var(--sai-ai)',
      borderBottom: `1px solid ${mPalette.ai}`,
      alignSelf: 'flex-start',
      paddingBottom: 2,
      textDecoration: 'none'
    }
  }, "View partner \u2192")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      padding: 28,
      border: `1px dashed ${saiLine(mPalette.ink, '55')}`,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mFont.mono,
      fontSize: 10,
      letterSpacing: 3,
      color: 'var(--sai-akane)'
    }
  }, "BECOME A PARTNER"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mFont.jpSerif,
      fontSize: 19,
      marginTop: 10,
      letterSpacing: '0.04em',
      color: 'var(--sai-ink)',
      lineHeight: 1.6
    }
  }, window.t('地方の未来を、共に彩りませんか。')), /*#__PURE__*/React.createElement("div", {
    onClick: () => window.saiNavigate && window.saiNavigate('contact'),
    style: {
      marginTop: 18,
      padding: '14px 28px',
      background: mPalette.ink,
      color: mPalette.paper,
      fontFamily: mFont.jpSerif,
      fontSize: 14,
      letterSpacing: 3,
      display: 'inline-block',
      cursor: 'pointer'
    }
  }, window.t('協業のご相談 →')))), /*#__PURE__*/React.createElement(MobileFooter, null));
}

// ----------------------------------------------------------
// CONTACT
// ----------------------------------------------------------
function MobileContact() {
  const mInputStyle = {
    fontFamily: '"Zen Old Mincho", serif',
    fontSize: 16,
    padding: '14px 14px',
    ...saiVars(true),
    color: 'var(--sai-ink)',
    textShadow: 'none',
    background: mPalette.paper,
    border: `1px solid ${saiLine(mPalette.ink, '33')}`,
    color: 'var(--sai-ink)',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box'
  };
  const [sending, setSending] = React.useState(false);
  const handleSubmit = async e => {
    e.preventDefault();
    const f = e.target;
    const cat = f.category.value,
      name = f.name.value,
      email = f.email.value,
      tel = f.tel.value,
      msg = f.message.value;
    if (!cat || !name || !email || !msg) {
      alert('必須項目（種別・お名前・メール・内容）をご入力ください。');
      return;
    }
    const endpoint = window.siteData.formEndpoint;
    const fallback = window.siteData.formFallbackEmail;
    const payload = {
      'お問い合わせ種別': cat,
      'お名前': name,
      'メールアドレス': email,
      'お電話番号': tel,
      'お問い合わせ内容': msg,
      _subject: `【お問い合わせ】${cat} / ${name} 様`
    };
    if (endpoint && !endpoint.includes('REPLACE_WITH_YOUR_ID')) {
      try {
        setSending(true);
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });
        setSending(false);
        if (res.ok) {
          alert('お問い合わせを送信しました。ありがとうございます。');
          f.reset();
        } else {
          alert('送信に失敗しました。お手数ですが、お電話または直接メールにてご連絡ください。');
        }
      } catch (err) {
        setSending(false);
        alert('送信に失敗しました。お手数ですが、お電話または直接メールにてご連絡ください。');
      }
      return;
    }
    const body = `お問い合わせ種別：${cat}\nお名前：${name}\nメールアドレス：${email}\n` + `お電話番号：${tel}\n\n【お問い合わせ内容】\n${msg}\n`;
    window.location.href = `mailto:${fallback}?subject=${encodeURIComponent(payload._subject)}&body=${encodeURIComponent(body)}`;
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...saiVars(false),
      background: saiBackdropOn() ? 'transparent' : mPalette.paper,
      color: 'var(--sai-ink)',
      textShadow: saiShadow()
    }
  }, /*#__PURE__*/React.createElement(MobilePageHeader, {
    no: "05",
    jp: window.t('お問い合わせ'),
    en: "Contact",
    lead: window.t('ご相談・取材・パートナーシップ等のお問い合わせを承っております。お気軽にご連絡ください。')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '48px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      marginBottom: 32
    }
  }, [{
    tag: 'PHONE',
    jp: 'お電話でのご連絡',
    lines: ['FAX : 03-5391-6870', '携帯 : 080-9541-6870', '受付 : 平日 9:00 – 18:00'],
    color: 'var(--sai-akane)'
  }, {
    tag: 'OFFICE',
    jp: '本社所在地',
    lines: ['〒949-7302', '新潟県南魚沼市浦佐 2476'],
    color: 'var(--sai-koke)'
  }].map(c => /*#__PURE__*/React.createElement("div", {
    key: c.tag,
    style: {
      ...saiVars(true),
      color: 'var(--sai-ink)',
      textShadow: 'none',
      background: mPalette.paperDeep,
      padding: 20,
      borderTop: `2px solid ${c.color}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mFont.mono,
      fontSize: 10,
      letterSpacing: 3,
      color: c.color
    }
  }, c.tag), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mFont.jpSerif,
      fontSize: 17,
      color: 'var(--sai-ink)',
      letterSpacing: '0.04em',
      marginTop: 8
    }
  }, c.jp), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, c.lines.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      fontFamily: mFont.jpSerif,
      fontSize: 13,
      color: 'var(--sai-ink)',
      lineHeight: 1.7
    }
  }, l)))))), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit,
    style: {
      ...saiVars(true),
      color: 'var(--sai-ink)',
      textShadow: 'none',
      background: mPalette.paperDeep,
      padding: 22,
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      borderTop: `2px solid ${mPalette.ai}`
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mFont.mono,
      fontSize: 10,
      letterSpacing: 3,
      color: 'var(--sai-akane)'
    }
  }, "\u2014\u2014 INQUIRY FORM"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: mFont.jpSerif,
      fontSize: 20,
      margin: '6px 0 0',
      color: 'var(--sai-ink)',
      letterSpacing: '0.04em'
    }
  }, window.t('お問い合わせフォーム'))), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: mFont.jpSerif,
      fontSize: 13,
      color: 'var(--sai-ink)',
      letterSpacing: 2
    }
  }, window.t('お問い合わせ種別'), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--sai-akane)',
      marginLeft: 4
    }
  }, "*")), /*#__PURE__*/React.createElement("select", {
    name: "category",
    style: mInputStyle,
    defaultValue: ""
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, window.t('選択してください')), ['法人の方', '学生の方', '取材・メディア', 'パートナー協業', 'その他'].map(c => /*#__PURE__*/React.createElement("option", {
    key: c,
    value: c
  }, window.t(c))))), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: mFont.jpSerif,
      fontSize: 13,
      color: 'var(--sai-ink)',
      letterSpacing: 2
    }
  }, window.t('お名前'), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--sai-akane)',
      marginLeft: 4
    }
  }, "*")), /*#__PURE__*/React.createElement("input", {
    name: "name",
    type: "text",
    placeholder: "\u5C71\u7530 \u592A\u90CE",
    style: mInputStyle
  })), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: mFont.jpSerif,
      fontSize: 13,
      color: 'var(--sai-ink)',
      letterSpacing: 2
    }
  }, window.t('メールアドレス'), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--sai-akane)',
      marginLeft: 4
    }
  }, "*")), /*#__PURE__*/React.createElement("input", {
    name: "email",
    type: "email",
    placeholder: "example@example.com",
    style: mInputStyle
  })), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: mFont.jpSerif,
      fontSize: 13,
      color: 'var(--sai-ink)',
      letterSpacing: 2
    }
  }, window.t('お電話番号')), /*#__PURE__*/React.createElement("input", {
    name: "tel",
    type: "tel",
    placeholder: "090-0000-0000",
    style: mInputStyle
  })), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: mFont.jpSerif,
      fontSize: 13,
      color: 'var(--sai-ink)',
      letterSpacing: 2
    }
  }, window.t('お問い合わせ内容'), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--sai-akane)',
      marginLeft: 4
    }
  }, "*")), /*#__PURE__*/React.createElement("textarea", {
    name: "message",
    rows: 6,
    placeholder: "\u3054\u76F8\u8AC7\u5185\u5BB9\u3092\u3054\u8A18\u5165\u304F\u3060\u3055\u3044\u3002",
    style: {
      ...mInputStyle,
      resize: 'vertical',
      lineHeight: 1.7
    }
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    disabled: sending,
    style: {
      fontFamily: mFont.jpSerif,
      fontSize: 15,
      letterSpacing: 4,
      padding: '16px 0',
      background: mPalette.ink,
      color: mPalette.paper,
      border: 'none',
      cursor: sending ? 'wait' : 'pointer',
      marginTop: 4,
      opacity: sending ? 0.6 : 1
    }
  }, sending ? window.t('送信中…') : window.t('送信する　→')))), /*#__PURE__*/React.createElement(MobileFooter, null));
}

// ----------------------------------------------------------
// BUSINESS OVERVIEW — 事業概要（組織図）
// ----------------------------------------------------------
function mBizSections(groups) {
  const out = [];
  groups.forEach(g => {
    const last = out[out.length - 1];
    if (last && last.branch === (g.branch || '')) last.groups.push(g);else out.push({
      branch: g.branch || '',
      groups: [g]
    });
  });
  return out;
}
function mBizPad(n) {
  return (n < 10 ? '0' : '') + n;
}
function mBizCount(n) {
  return window.saiLang === 'en' ? n + (n === 1 ? ' area' : ' areas') : n + ' 領域';
}
function mBizScrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const y = el.getBoundingClientRect().top + window.pageYOffset - 12;
  window.scrollTo({
    top: y,
    behavior: reduce ? 'auto' : 'smooth'
  });
  // 一部の環境では smooth が無視されるため、動いていなければ確実に移動させる
  setTimeout(() => {
    if (Math.abs(window.pageYOffset - y) > 4) window.scrollTo(0, y);
  }, 600);
}
function MobileBizGroup({
  group,
  color,
  n
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...saiVars(true),
      color: 'var(--sai-ink)',
      textShadow: 'none',
      background: mPalette.paper,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: color,
      color: mPalette.paper,
      padding: '10px 13px',
      display: 'flex',
      alignItems: 'baseline',
      gap: 9
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: mFont.mono,
      fontSize: 9.5,
      letterSpacing: 2,
      opacity: 0.75
    }
  }, mBizPad(n)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: mFont.jpSerif,
      fontSize: 15,
      fontWeight: 500,
      letterSpacing: '0.06em',
      lineHeight: 1.4
    }
  }, group.name)), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: '2px 13px 5px',
      background: color + '0f'
    }
  }, group.items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: it,
    style: {
      fontFamily: mFont.jpSerif,
      fontSize: 13,
      lineHeight: 1.8,
      color: 'var(--sai-ink)',
      padding: '9px 0 9px 15px',
      position: 'relative',
      borderTop: i === 0 ? 'none' : `1px solid ${saiLine(mPalette.ink, '18')}`
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 0,
      top: '1.6em',
      width: 6,
      height: 1,
      background: color
    }
  }), it))));
}
function MobileBusiness() {
  const t = window.siteData.businessTree;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...saiVars(false),
      background: saiBackdropOn() ? 'transparent' : mPalette.paper,
      color: 'var(--sai-ink)',
      textShadow: saiShadow()
    }
  }, /*#__PURE__*/React.createElement(MobilePageHeader, {
    no: "06",
    jp: window.t('事業概要'),
    en: "Business",
    lead: t.lead
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '32px 24px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: mFont.mono,
      fontSize: 9.5,
      letterSpacing: 3,
      color: 'var(--sai-akane)'
    }
  }, "STRUCTURE \u2014 04 SECTORS"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: `${saiLine(mPalette.ink, '22')}`
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
      gap: 10
    }
  }, t.units.map((u, i) => /*#__PURE__*/React.createElement("button", {
    key: u.tag,
    type: "button",
    onClick: () => mBizScrollTo('mbiz-' + i),
    style: {
      appearance: 'none',
      textAlign: 'left',
      cursor: 'pointer',
      font: 'inherit',
      color: 'var(--sai-ink)',
      ...saiVars(true),
      color: 'var(--sai-ink)',
      textShadow: 'none',
      background: mPalette.paperDeep,
      border: 'none',
      borderTop: `3px solid ${u.color}`,
      padding: '14px 14px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: mFont.mono,
      fontSize: 9.5,
      letterSpacing: 2,
      color: u.color
    }
  }, mBizPad(i + 1), " / 04"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: mFont.jpAlt,
      fontSize: 20,
      color: u.color,
      letterSpacing: '0.03em',
      lineHeight: 1.2
    }
  }, u.tag), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: mFont.jpSerif,
      fontSize: 11.5,
      letterSpacing: 2,
      color: 'var(--sai-muted)'
    }
  }, u.jp), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: mFont.mono,
      fontSize: 9,
      letterSpacing: 1.5,
      color: 'var(--sai-muted)',
      marginTop: 4
    }
  }, mBizCount(u.groups.length)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '32px 24px 32px',
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, t.units.map((u, i) => {
    const sections = mBizSections(u.groups);
    const summaryLines = (window.siteData.business.find(b => b.tag === u.tag) || {}).body || [];
    const summary = summaryLines.join(window.saiLang === 'en' ? ' ' : '');
    let n = 0;
    return /*#__PURE__*/React.createElement("section", {
      key: u.tag,
      id: 'mbiz-' + i,
      style: {
        ...saiVars(true),
        color: 'var(--sai-ink)',
        textShadow: 'none',
        background: mPalette.paperDeep,
        borderLeft: `5px solid ${u.color}`,
        padding: '20px 18px 22px',
        position: 'relative',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        right: 12,
        top: 2,
        fontFamily: mFont.mono,
        fontSize: 64,
        color: u.color,
        opacity: 0.05,
        letterSpacing: -3,
        lineHeight: 1
      }
    }, mBizPad(i + 1)), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: mFont.mono,
        fontSize: 9.5,
        letterSpacing: 3,
        color: u.color
      }
    }, mBizPad(i + 1), " / 04"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: mFont.jpAlt,
        fontSize: 27,
        color: u.color,
        letterSpacing: '0.04em',
        marginTop: 4,
        lineHeight: 1.1
      }
    }, u.tag), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: mFont.jpSerif,
        fontSize: 12.5,
        letterSpacing: 3,
        color: 'var(--sai-muted)',
        marginTop: 3
      }
    }, u.jp), summary && /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '14px 0 0',
        fontFamily: mFont.jpSerif,
        fontSize: 12.5,
        lineHeight: 1.95,
        color: 'var(--sai-ink)',
        opacity: 0.85,
        borderLeft: `1px solid ${u.color}55`,
        paddingLeft: 12
      }
    }, summary)), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 1,
        background: `${saiLine(mPalette.ink, '22')}`,
        margin: '20px 0 18px'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 18
      }
    }, sections.map(sec => /*#__PURE__*/React.createElement("div", {
      key: sec.branch || 'main'
    }, sec.branch && !(sec.groups.length === 1 && sec.groups[0].name === sec.branch) && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: mFont.mono,
        fontSize: 9.5,
        letterSpacing: 2.5,
        color: mPalette.paper,
        background: u.color,
        padding: '3px 10px'
      }
    }, sec.branch), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: `${u.color}44`
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, sec.groups.map(g => {
      n += 1;
      return /*#__PURE__*/React.createElement(MobileBizGroup, {
        key: g.name,
        group: g,
        color: u.color,
        n: n
      });
    }))))));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 24px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: `1px solid ${saiLine(mPalette.ink, '33')}`,
      borderBottom: `1px solid ${saiLine(mPalette.ink, '33')}`,
      padding: '18px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mFont.mono,
      fontSize: 9.5,
      letterSpacing: 3,
      color: 'var(--sai-akane)',
      marginBottom: 8
    }
  }, "AREAS"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mFont.jpSerif,
      fontSize: 12.5,
      lineHeight: 1.9,
      color: 'var(--sai-ink)'
    }
  }, t.footer)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26,
      textAlign: 'center',
      fontFamily: mFont.jpSerif,
      fontSize: 17,
      letterSpacing: '0.08em',
      color: 'var(--sai-ai)',
      lineHeight: 1.8
    }
  }, t.tagline)), /*#__PURE__*/React.createElement(MobileFooter, null));
}

// ----------------------------------------------------------
// Mobile App router (matches desktop page IDs)
// ----------------------------------------------------------
function MobileApp({
  page
}) {
  switch (page) {
    case 'about':
      return /*#__PURE__*/React.createElement(MobileAbout, null);
    case 'company':
      return /*#__PURE__*/React.createElement(MobileCompany, null);
    case 'news':
      return /*#__PURE__*/React.createElement(MobileNews, null);
    case 'partners':
      return /*#__PURE__*/React.createElement(MobilePartners, null);
    case 'contact':
      return /*#__PURE__*/React.createElement(MobileContact, null);
    case 'business':
      return /*#__PURE__*/React.createElement(MobileBusiness, null);
    case 'home':
    default:
      return /*#__PURE__*/React.createElement(MobileHome, null);
  }
}
function MobileSite({
  page
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...saiVars(false),
      fontFamily: mFont.jpSerif,
      color: 'var(--sai-ink)',
      textShadow: saiShadow(),
      background: saiBackdropOn() ? 'transparent' : mPalette.paper,
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement(MobileNav, null), /*#__PURE__*/React.createElement(MobileApp, {
    page: page
  }));
}
Object.assign(window, {
  MobileSite
});
