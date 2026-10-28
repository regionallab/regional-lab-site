// 自動生成ファイル — 編集しないでください。編集は business-page.jsx を直し、bash tools/build.sh を実行。
// BUSINESS OVERVIEW — 事業概要（事業構造）ページ / デスクトップ
const bizB = {
  paper: '#f1ead8',
  paperDeep: '#e6dcc0',
  ink: '#1f1a14',
  ai: '#1f3552',
  koke: '#5a6b3d',
  akane: '#9a3324',
  muted: '#766a52'
};
const bizFont = {
  jpSerif: '"Zen Old Mincho", "Noto Serif JP", serif',
  jpAlt: '"Shippori Mincho", "Noto Serif JP", serif',
  enSerif: '"Cormorant Garamond", serif',
  mono: '"JetBrains Mono", ui-monospace, monospace'
};

// 連続する同じ branch（To C / To B 等）のグループを一つの帯にまとめる
function bizSections(groups) {
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
function bizCount(n) {
  return window.saiLang === 'en' ? n + (n === 1 ? ' area' : ' areas') : n + ' 領域';
}
function bizPad(n) {
  return (n < 10 ? '0' : '') + n;
}
function bizScrollTo(id, offset) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const y = el.getBoundingClientRect().top + window.pageYOffset - (offset || 24);
  window.scrollTo({
    top: y,
    behavior: reduce ? 'auto' : 'smooth'
  });
  // 一部の環境では smooth が無視されるため、動いていなければ確実に移動させる
  setTimeout(() => {
    if (Math.abs(window.pageYOffset - y) > 4) window.scrollTo(0, y);
  }, 600);
}

// ---------------------------------------------------------
// 冒頭のインデックス — 四事業を一望し、各事業へ移動する
// ---------------------------------------------------------
function BizIndexCard({
  unit,
  index
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => bizScrollTo('biz-' + index),
    style: {
      appearance: 'none',
      textAlign: 'left',
      cursor: 'pointer',
      ...saiVars(true),
      color: 'var(--sai-ink)',
      textShadow: 'none',
      background: bizB.paperDeep,
      border: 'none',
      borderTop: `4px solid ${unit.color}`,
      padding: '22px 22px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      minWidth: 0,
      font: 'inherit',
      color: 'var(--sai-ink)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: bizFont.jpAlt,
      fontSize: 26,
      color: unit.color,
      letterSpacing: '0.04em',
      lineHeight: 1.2
    }
  }, unit.tag), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: bizFont.jpSerif,
      fontSize: 13,
      letterSpacing: 3,
      color: 'var(--sai-muted)'
    }
  }, unit.jp), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: bizFont.mono,
      fontSize: 10,
      letterSpacing: 2,
      color: 'var(--sai-muted)',
      marginTop: 6
    }
  }, bizCount(unit.groups.length)));
}

// ---------------------------------------------------------
// 区分カード — 色帯の見出し ＋ 罫線区切りの項目（目次形式）
// ---------------------------------------------------------
function BizGroupCard({
  group,
  color,
  n,
  total
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...saiVars(true),
      color: 'var(--sai-ink)',
      textShadow: 'none',
      background: bizB.paper,
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: color,
      color: bizB.paper,
      padding: '11px 14px',
      display: 'flex',
      alignItems: 'baseline',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: bizFont.jpSerif,
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '0.06em',
      lineHeight: 1.4
    }
  }, group.name)), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: '2px 14px 6px',
      background: color + '0f',
      flex: 1
    }
  }, group.items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: it,
    style: {
      fontFamily: bizFont.jpSerif,
      fontSize: 13.5,
      lineHeight: 1.85,
      color: 'var(--sai-ink)',
      letterSpacing: '0.02em',
      padding: '10px 0',
      borderTop: i === 0 ? 'none' : `1px solid ${saiLine(bizB.ink, '18')}`
    }
  }, it))));
}

// ---------------------------------------------------------
// 事業レコード
// ---------------------------------------------------------
function BizUnit({
  unit,
  index
}) {
  const sections = bizSections(unit.groups);
  // ブランチ（To C / To B）が違っても同じ列グリッドに載せ、カードの見せ方を揃える
  const bizCols = Math.min(Math.max.apply(null, sections.map(sec => sec.groups.length)), 4);
  const summaryLines = (window.siteData.business.find(b => b.tag === unit.tag) || {}).body || [];
  // 日本語は行をそのまま連結、英語は語の区切りが必要なので空白で連結
  const summary = summaryLines.join(window.saiLang === 'en' ? ' ' : '');
  let n = 0;
  return /*#__PURE__*/React.createElement("section", {
    id: 'biz-' + index,
    style: {
      ...saiVars(true),
      color: 'var(--sai-ink)',
      textShadow: 'none',
      background: bizB.paperDeep,
      borderLeft: `5px solid ${unit.color}`,
      padding: '38px 40px 40px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 48,
      alignItems: 'start',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: bizFont.jpAlt,
      fontSize: 44,
      color: unit.color,
      letterSpacing: '0.04em',
      lineHeight: 1.1
    }
  }, unit.tag), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: bizFont.jpSerif,
      fontSize: 15,
      letterSpacing: 4,
      color: 'var(--sai-muted)'
    }
  }, unit.jp))), summary && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: bizFont.jpSerif,
      fontSize: 13.5,
      lineHeight: 2.1,
      color: 'var(--sai-ink)',
      opacity: 0.85,
      borderLeft: `1px solid ${unit.color}55`,
      paddingLeft: 20
    }
  }, summary)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: `${saiLine(bizB.ink, '22')}`,
      margin: '30px 0 26px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 26
    }
  }, sections.map(sec => /*#__PURE__*/React.createElement("div", {
    key: sec.branch || 'main'
  }, sec.branch && !(sec.groups.length === 1 && sec.groups[0].name === sec.branch) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: bizFont.mono,
      fontSize: 10,
      letterSpacing: 3,
      color: bizB.paper,
      background: unit.color,
      padding: '4px 12px'
    }
  }, sec.branch)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${bizCols}, minmax(0, 1fr))`,
      gap: 16,
      alignItems: 'start'
    }
  }, sec.groups.map(g => {
    n += 1;
    return /*#__PURE__*/React.createElement(BizGroupCard, {
      key: g.name,
      group: g,
      color: unit.color,
      n: n,
      total: unit.groups.length
    });
  }))))));
}
function SaiBusinessPage() {
  const t = window.siteData.businessTree;
  return /*#__PURE__*/React.createElement("div", {
    className: "sai-reveal-each",
    style: {
      ...saiVars(false),
      background: saiBackdropOn() ? 'transparent' : bizB.paper,
      fontFamily: bizFont.jpSerif,
      color: 'var(--sai-ink)',
      textShadow: saiShadow()
    }
  }, /*#__PURE__*/React.createElement(SaiPageHeader, {
    no: "06",
    jp: window.t('事業概要'),
    en: "Business",
    lead: t.lead
  }), /*#__PURE__*/React.createElement("div", {
    className: "sai-reveal-each",
    style: {
      padding: '64px 56px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sai-reveal-each",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
      gap: 16
    }
  }, t.units.map((u, i) => /*#__PURE__*/React.createElement(BizIndexCard, {
    key: u.tag,
    unit: u,
    index: i
  })))), /*#__PURE__*/React.createElement("div", {
    className: "sai-reveal-each",
    style: {
      padding: '48px 56px 40px',
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, t.units.map((u, i) => /*#__PURE__*/React.createElement(BizUnit, {
    key: u.tag,
    unit: u,
    index: i
  }))), /*#__PURE__*/React.createElement("div", {
    className: "sai-reveal-each",
    style: {
      padding: '0 56px 88px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: `1px solid ${saiLine(bizB.ink, '33')}`,
      borderBottom: `1px solid ${saiLine(bizB.ink, '33')}`,
      padding: '26px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: bizFont.jpSerif,
      fontSize: 14,
      letterSpacing: '0.06em',
      lineHeight: 1.9,
      color: 'var(--sai-ink)'
    }
  }, t.footer)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      textAlign: 'center',
      fontFamily: bizFont.jpSerif,
      fontSize: 24,
      letterSpacing: '0.1em',
      lineHeight: 1.8,
      color: 'var(--sai-ai)'
    }
  }, t.tagline)));
}
Object.assign(window, {
  SaiBusinessPage
});
