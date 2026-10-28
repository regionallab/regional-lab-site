// 自動生成ファイル — 編集しないでください。編集は variant-b-pages.jsx を直し、bash tools/build.sh を実行。
// Sub-pages for Regional Lab corporate site (Variant B / 彩)
// About / Company / News / Partners
// Reuses saiPalette + saiFont from variant-b-sai.jsx (loaded first via window assign).

const saiB = {
  paper: '#f1ead8',
  paperDeep: '#e6dcc0',
  ink: '#1f1a14',
  ai: '#1f3552',
  aiDeep: '#13243a',
  koke: '#5a6b3d',
  akane: '#9a3324',
  muted: '#766a52'
};
const saiBFont = {
  jpSerif: '"Zen Old Mincho", "Noto Serif JP", serif',
  jpAlt: '"Shippori Mincho", "Noto Serif JP", serif',
  enSerif: '"Cormorant Garamond", serif',
  mono: '"JetBrains Mono", ui-monospace, monospace'
};

// 読点で改行し、語の途中で折り返されないようにする（英語は読点が無いので1行のまま）
function saiBreakAtComma(text) {
  const parts = String(text).split('、');
  return parts.map((part, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, part, i < parts.length - 1 ? '、' : '', i < parts.length - 1 ? /*#__PURE__*/React.createElement("br", null) : null));
}
function SaiPageHeader({
  no,
  jp,
  en,
  lead
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: saiB.paperDeep,
      padding: '80px 56px 64px',
      borderBottom: `1px solid ${saiB.ink}22`,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Vertical, {
    style: {
      position: 'absolute',
      right: 56,
      top: 40,
      fontFamily: saiBFont.jpSerif,
      fontSize: 220,
      opacity: 0.06,
      letterSpacing: 0
    }
  }, jp.charAt(0)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: saiBFont.mono,
      fontSize: 11,
      letterSpacing: 3,
      color: saiB.akane
    }
  }, "\u2014 ", no, " / PAGE"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 24,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: saiBFont.jpSerif,
      fontSize: 72,
      fontWeight: 400,
      margin: 0,
      color: saiB.ink,
      letterSpacing: '0.04em'
    }
  }, jp), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: saiBFont.enSerif,
      fontStyle: 'italic',
      fontSize: 36,
      color: saiB.ai
    }
  }, en)), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: saiBFont.jpSerif,
      fontSize: 15,
      lineHeight: 2.0,
      color: saiB.muted,
      marginTop: 20,
      maxWidth: 900
    }
  }, lead));
}

// =========================================================
// ABOUT — 私たちについて
// =========================================================
function SaiAbout() {
  const members = window.siteData.about.members;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: saiPageVeil(saiB.paper),
      fontFamily: saiBFont.jpSerif,
      color: saiB.ink
    }
  }, /*#__PURE__*/React.createElement(SaiPageHeader, {
    no: "01",
    jp: window.t('私たちについて'),
    en: "About Us",
    lead: window.siteData.about.lead
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '96px 56px',
      display: 'grid',
      gridTemplateColumns: '280px 1fr',
      gap: 56
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: saiBFont.mono,
      fontSize: 10,
      letterSpacing: 3,
      color: saiB.akane
    }
  }, "SECTION 01"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: saiBFont.jpSerif,
      fontSize: 36,
      fontWeight: 400,
      margin: '12px 0 0',
      letterSpacing: '0.04em',
      lineHeight: 1.4
    }
  }, window.saiLang === 'en' ? /*#__PURE__*/React.createElement(React.Fragment, null, "Purpose &", /*#__PURE__*/React.createElement("br", null), "Founding") : /*#__PURE__*/React.createElement(React.Fragment, null, "\u76EE\u7684\u3068", /*#__PURE__*/React.createElement("br", null), "\u8A2D\u7ACB\u80CC\u666F")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      aspectRatio: '4/5',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/founder-logo.png",
    alt: "Regional Lab \u2014 Minamiuonuma",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 40,
      background: saiB.paperDeep,
      padding: 32,
      borderLeft: `4px solid ${saiB.akane}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: saiBFont.mono,
      fontSize: 11,
      letterSpacing: 3,
      color: saiB.akane
    }
  }, "PURPOSE"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: saiBFont.jpSerif,
      fontSize: 26,
      fontWeight: 400,
      margin: '8px 0 16px',
      letterSpacing: '0.04em'
    }
  }, window.siteData.about.purpose.heading), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 2.1,
      color: saiB.muted,
      margin: 0
    }
  }, window.siteData.about.purpose.body)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: saiBFont.mono,
      fontSize: 11,
      letterSpacing: 3,
      color: saiB.ai
    }
  }, "BACKGROUND"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: saiBFont.jpSerif,
      fontSize: 22,
      fontWeight: 400,
      margin: '8px 0 20px',
      letterSpacing: '0.04em'
    }
  }, window.siteData.about.background.heading), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, window.siteData.about.background.paragraphs.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      fontSize: 15,
      lineHeight: 2.2,
      color: saiB.ink,
      margin: 0
    }
  }, p))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: saiB.ai,
      color: saiB.paper,
      padding: '64px 56px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 32
    }
  }, [...window.siteData.about.pillars].map(([label, body]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      borderLeft: `2px solid ${saiB.akane}`,
      paddingLeft: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: saiBFont.mono,
      fontSize: 10,
      letterSpacing: 3,
      opacity: 0.7
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: saiBFont.jpSerif,
      fontSize: 18,
      lineHeight: 1.9,
      marginTop: 10,
      letterSpacing: '0.04em'
    }
  }, saiBreakAtComma(body)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '96px 56px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: saiBFont.mono,
      fontSize: 10,
      letterSpacing: 3,
      color: saiB.akane
    }
  }, "SECTION 02"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: saiBFont.jpSerif,
      fontSize: 44,
      fontWeight: 400,
      margin: '8px 0 0',
      letterSpacing: '0.04em'
    }
  }, window.t('メンバー紹介'), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: saiBFont.enSerif,
      fontStyle: 'italic',
      color: saiB.ai,
      fontSize: 28
    }
  }, "\u2014 our four."))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: saiBFont.mono,
      fontSize: 11,
      letterSpacing: 3,
      color: saiB.muted
    }
  }, "04 MEMBERS")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24
    }
  }, members.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: m.role,
    style: {
      background: saiB.paperDeep,
      padding: 28,
      display: 'grid',
      gridTemplateColumns: '180px 1fr',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, m.img ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      aspectRatio: '4/5',
      overflow: 'hidden'
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
  })) : /*#__PURE__*/React.createElement(Placeholder, {
    label: "portrait",
    ratio: "4/5",
    color1: "#d2c1a0",
    color2: "#bfa97a",
    textColor: saiB.ink
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: saiBFont.mono,
      fontSize: 9,
      letterSpacing: 2,
      color: saiB.muted,
      marginTop: 8
    }
  }, "0", i + 1, " / 04")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: saiBFont.mono,
      fontSize: 10,
      letterSpacing: 2,
      color: saiB.akane,
      marginBottom: 8
    }
  }, m.role), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: saiBFont.jpSerif,
      fontSize: 26,
      fontWeight: 500,
      letterSpacing: '0.06em',
      marginBottom: 2
    }
  }, m.jp), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: saiBFont.enSerif,
      fontStyle: 'italic',
      fontSize: 16,
      color: saiB.ai,
      marginBottom: 16
    }
  }, m.en), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      lineHeight: 2,
      color: saiB.ink,
      margin: 0
    }
  }, Array.isArray(m.bio) ? m.bio.map((line, li) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: li
  }, line, li < m.bio.length - 1 && /*#__PURE__*/React.createElement("br", null))) : m.bio)))))));
}

// =========================================================
// COMPANY — 屋号概要
// =========================================================
function SaiCompany() {
  const services = window.siteData.company.services;
  const companyInfo = window.siteData.company.info;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: saiPageVeil(saiB.paper),
      fontFamily: saiBFont.jpSerif,
      color: saiB.ink
    }
  }, /*#__PURE__*/React.createElement(SaiPageHeader, {
    no: "02",
    jp: window.t('屋号概要'),
    en: "Profile",
    lead: window.siteData.company.lead
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '80px 56px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: saiBFont.mono,
      fontSize: 10,
      letterSpacing: 3,
      color: saiB.akane
    }
  }, "SECTION 01 \u2014 BUSINESS PROFILE"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: saiBFont.jpSerif,
      fontSize: 44,
      fontWeight: 400,
      margin: '8px 0 0',
      letterSpacing: '0.04em'
    }
  }, window.t('屋号情報'))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: `1px solid ${saiB.ink}`
    }
  }, [[window.t('屋号名'), window.saiLang === 'en' ? 'Regional Lab' : 'Regional Lab / リージョナルラボ', 'TRADE NAME'], [window.t('設立'), companyInfo.founded, 'FOUNDED'], [window.t('役員'), companyInfo.officers, 'OFFICERS'], [window.t('拠点'), companyInfo.offices, 'LOCATIONS']].map(([label, value, enLabel]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      display: 'grid',
      gridTemplateColumns: '200px 1fr',
      padding: '24px 0',
      borderBottom: `1px solid ${saiB.ink}22`,
      alignItems: 'start',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: saiBFont.jpSerif,
      fontSize: 18,
      fontWeight: 500,
      color: saiB.ai,
      letterSpacing: 4
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: saiBFont.mono,
      fontSize: 9,
      letterSpacing: 2,
      color: saiB.muted,
      marginTop: 4
    }
  }, enLabel)), /*#__PURE__*/React.createElement("div", null, Array.isArray(value) ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, value.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: saiBFont.jpSerif,
      fontSize: 13,
      color: saiB.paper,
      background: saiB.akane,
      padding: '4px 12px',
      letterSpacing: 2,
      minWidth: 70,
      textAlign: 'center'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: saiBFont.jpSerif,
      fontSize: 16,
      color: saiB.ink,
      letterSpacing: '0.04em'
    }
  }, v)))) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: saiBFont.jpSerif,
      fontSize: 18,
      color: saiB.ink,
      letterSpacing: '0.04em'
    }
  }, value)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '80px 56px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: saiBFont.mono,
      fontSize: 10,
      letterSpacing: 3,
      color: saiB.akane
    }
  }, "SECTION 02 \u2014 BUSINESS"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: saiBFont.jpSerif,
      fontSize: 44,
      fontWeight: 400,
      margin: '8px 0 0',
      letterSpacing: '0.04em'
    }
  }, window.t('事業紹介'))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
      gap: 18
    }
  }, services.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.tag,
    style: {
      background: saiB.paperDeep,
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: saiBFont.mono,
      fontSize: 10,
      letterSpacing: 3,
      color: s.color,
      marginBottom: 8
    }
  }, "0", i + 1, " / 0", services.length), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: saiBFont.jpAlt,
      fontSize: 32,
      color: s.color,
      lineHeight: 1.1,
      fontWeight: 500
    }
  }, s.tag), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: saiBFont.jpSerif,
      fontSize: 14,
      color: saiB.muted,
      letterSpacing: 3,
      marginTop: 4,
      marginBottom: 16
    }
  }, s.jp), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      lineHeight: 2,
      margin: 0
    }
  }, s.body))))));
}

// =========================================================
// NEWS — お知らせ
// =========================================================
// 記事カバー — 文字を画像に焼かず本文として描くので、どの解像度でも輪郭が崩れない
function SaiNewsCover({
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
      width: '62%',
      height: 'auto',
      display: 'block',
      overflow: 'visible'
    }
  }, /*#__PURE__*/React.createElement("text", {
    x: "160",
    y: "46",
    textAnchor: "middle",
    fill: saiB.paper,
    fontFamily: saiBFont.enSerif,
    fontSize: "48",
    letterSpacing: "0.5"
  }, cover.label)));
}
function SaiNews() {
  const articles = window.siteData.news.articles;
  const cats = ['ALL', ...Array.from(new Set(articles.map(a => a.cat)))];
  const [active, setActive] = React.useState('ALL');
  const [open, setOpen] = React.useState(null);
  const shown = active === 'ALL' ? articles : articles.filter(a => a.cat === active);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: saiPageVeil(saiB.paper),
      fontFamily: saiBFont.jpSerif,
      color: saiB.ink
    }
  }, /*#__PURE__*/React.createElement(SaiPageHeader, {
    no: "03",
    jp: window.t('お知らせ'),
    en: "News",
    lead: "\u30D7\u30ED\u30C0\u30AF\u30C8\u3001\u30A4\u30D9\u30F3\u30C8\u3001\u30E1\u30C7\u30A3\u30A2\u63B2\u8F09 \u2500 Regional Lab \u304B\u3089\u306E\u6700\u65B0\u306E\u304A\u77E5\u3089\u305B\u3067\u3059\u3002"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '64px 56px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginBottom: 32
    }
  }, cats.map(c => /*#__PURE__*/React.createElement("div", {
    key: c,
    onClick: () => setActive(c),
    style: {
      padding: '8px 18px',
      border: `1px solid ${saiB.ink}`,
      background: active === c ? saiB.ink : 'transparent',
      color: active === c ? saiB.paper : saiB.ink,
      fontFamily: saiBFont.mono,
      fontSize: 11,
      letterSpacing: 2,
      cursor: 'pointer',
      transition: 'all 0.15s'
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
      background: saiB.paperDeep,
      padding: 32,
      display: 'grid',
      gridTemplateColumns: '120px 1.4fr 2fr 40px',
      gap: 24,
      alignItems: 'start',
      borderLeft: `4px solid ${a.catColor}`,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: saiBFont.mono,
      fontSize: 10,
      letterSpacing: 2,
      color: saiB.muted
    }
  }, a.date), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: saiBFont.mono,
      fontSize: 10,
      letterSpacing: 2,
      color: a.catColor,
      marginTop: 6,
      border: `1px solid ${a.catColor}`,
      padding: '3px 8px',
      display: 'inline-block'
    }
  }, a.cat), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: saiBFont.enSerif,
      fontStyle: 'italic',
      fontSize: 18,
      color: saiB.muted,
      marginTop: 16
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
  })) : a.cover ? /*#__PURE__*/React.createElement(SaiNewsCover, {
    cover: a.cover,
    ratio: "4/3"
  }) : /*#__PURE__*/React.createElement(Placeholder, {
    label: a.cat === 'PRODUCT' ? 'product / screen' : 'event / venue',
    ratio: "4/3",
    color1: "#d4c39e",
    color2: "#c0a978",
    textColor: saiB.ink
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: saiBFont.jpSerif,
      fontSize: 24,
      fontWeight: 500,
      margin: 0,
      letterSpacing: '0.04em',
      lineHeight: 1.5
    }
  }, a.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: saiBFont.jpSerif,
      fontSize: 14,
      lineHeight: 2,
      color: saiB.akane,
      marginTop: 12,
      marginBottom: 14
    }
  }, a.lead), /*#__PURE__*/React.createElement(NewsBody, {
    body: a.body,
    firstOnly: true,
    style: {
      fontSize: 13,
      lineHeight: 2.1,
      color: saiB.ink
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      fontFamily: saiBFont.enSerif,
      fontStyle: 'italic',
      fontSize: 14,
      color: saiB.ink,
      borderBottom: `1px solid ${saiB.ink}`,
      display: 'inline-block',
      paddingBottom: 2
    }
  }, "Read more \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: saiBFont.enSerif,
      fontStyle: 'italic',
      fontSize: 20,
      color: saiB.ai,
      textAlign: 'right'
    }
  }, "\u2197"))))), open && /*#__PURE__*/React.createElement(SaiNewsModal, {
    article: open,
    onClose: () => setOpen(null)
  }));
}
function SaiNewsModal({
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
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: '64px 24px',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: saiB.paper,
      maxWidth: 820,
      width: '100%',
      position: 'relative',
      borderTop: `5px solid ${a.catColor}`
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "\u9589\u3058\u308B",
    style: {
      position: 'absolute',
      top: 20,
      right: 20,
      zIndex: 2,
      width: 44,
      height: 44,
      borderRadius: 22,
      border: 'none',
      background: saiB.ink,
      color: saiB.paper,
      fontSize: 20,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, "\xD7"), a.img ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      aspectRatio: '16/9',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: a.img,
    alt: a.title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: a.imgPosWide || a.imgPos || 'center',
      display: 'block'
    }
  })) : a.cover ? /*#__PURE__*/React.createElement(SaiNewsCover, {
    cover: a.cover,
    ratio: "16/9"
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px 48px 56px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: saiBFont.mono,
      fontSize: 11,
      letterSpacing: 2,
      color: a.catColor,
      border: `1px solid ${a.catColor}`,
      padding: '4px 10px'
    }
  }, a.cat), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: saiBFont.mono,
      fontSize: 12,
      letterSpacing: 2,
      color: saiB.muted
    }
  }, a.date), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: saiBFont.enSerif,
      fontStyle: 'italic',
      fontSize: 16,
      color: saiB.muted,
      marginLeft: 'auto'
    }
  }, "No. ", a.no)), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: saiBFont.jpSerif,
      fontSize: 34,
      fontWeight: 500,
      margin: 0,
      letterSpacing: '0.04em',
      lineHeight: 1.5
    }
  }, a.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: saiBFont.jpSerif,
      fontSize: 17,
      lineHeight: 2,
      color: a.catColor,
      margin: '20px 0 24px'
    }
  }, a.lead), /*#__PURE__*/React.createElement(NewsBody, {
    body: a.body,
    style: {
      fontSize: 15,
      lineHeight: 2.4,
      color: saiB.ink
    }
  }), a.url && /*#__PURE__*/React.createElement("a", {
    href: a.url,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      marginTop: 32,
      display: 'inline-block',
      padding: '14px 32px',
      background: a.catColor,
      color: saiB.paper,
      textDecoration: 'none',
      fontFamily: saiBFont.jpSerif,
      fontSize: 15,
      letterSpacing: 3
    }
  }, a.urlLabel, " \u2192"))));
}

// =========================================================
// PARTNERS — パートナー
// =========================================================
function SaiPartners() {
  const partners = window.siteData.partners.list;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: saiPageVeil(saiB.paper),
      fontFamily: saiBFont.jpSerif,
      color: saiB.ink
    }
  }, /*#__PURE__*/React.createElement(SaiPageHeader, {
    no: "04",
    jp: window.t('パートナー'),
    en: "Partners",
    lead: "\u5171\u306B\u5730\u65B9\u306E\u672A\u6765\u3092\u5F69\u308B\u3001\u79C1\u305F\u3061\u306E\u5927\u5207\u306A\u30D1\u30FC\u30C8\u30CA\u30FC\u69D8\u3092\u3054\u7D39\u4ECB\u3057\u307E\u3059\u3002"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '80px 56px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, partners.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.no,
    style: {
      background: saiB.paperDeep,
      padding: '40px 44px',
      display: 'grid',
      gridTemplateColumns: '80px 1.3fr 2fr',
      gap: 40,
      alignItems: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 80,
      height: 80,
      borderRadius: 40,
      background: p.color,
      color: saiB.paper,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: saiBFont.jpSerif,
      fontSize: 32,
      letterSpacing: 1
    }
  }, p.no), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: saiBFont.mono,
      fontSize: 10,
      letterSpacing: 3,
      color: p.color,
      marginBottom: 8
    }
  }, p.relation), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: saiBFont.jpSerif,
      fontSize: 26,
      fontWeight: 500,
      margin: 0,
      letterSpacing: '0.04em'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: saiBFont.enSerif,
      fontStyle: 'italic',
      fontSize: 16,
      color: saiB.muted,
      marginTop: 4
    }
  }, p.en), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 14,
      flexWrap: 'wrap'
    }
  }, p.tags.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      fontFamily: saiBFont.jpSerif,
      fontSize: 11,
      letterSpacing: 2,
      padding: '4px 10px',
      border: `1px solid ${saiB.ink}55`,
      color: saiB.ink
    }
  }, t)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 2.1,
      color: saiB.ink,
      margin: 0
    }
  }, p.body), p.url && /*#__PURE__*/React.createElement("a", {
    href: p.url,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      marginTop: 20,
      fontFamily: saiBFont.enSerif,
      fontStyle: 'italic',
      fontSize: 14,
      color: saiB.ai,
      borderBottom: `1px solid ${saiB.ai}`,
      display: 'inline-block',
      paddingBottom: 2,
      textDecoration: 'none'
    }
  }, "View partner \u2192"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      padding: 40,
      border: `1px dashed ${saiB.ink}55`,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: saiBFont.mono,
      fontSize: 10,
      letterSpacing: 3,
      color: saiB.akane
    }
  }, "BECOME A PARTNER"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: saiBFont.jpSerif,
      fontSize: 22,
      marginTop: 8,
      letterSpacing: '0.04em'
    }
  }, window.t('地方の未来を、共に彩りませんか。')), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      padding: '12px 28px',
      background: saiB.ink,
      color: saiB.paper,
      fontFamily: saiBFont.jpSerif,
      fontSize: 14,
      letterSpacing: 3,
      display: 'inline-block'
    }
  }, window.t('協業のご相談 →')))));
}
Object.assign(window, {
  SaiAbout,
  SaiCompany,
  SaiNews,
  SaiPartners,
  SaiPageHeader
});
