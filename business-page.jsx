// BUSINESS OVERVIEW — 事業概要（組織図）ページ / デスクトップ
const bizB = { paper: '#f1ead8', paperDeep: '#e6dcc0', ink: '#1f1a14', ai: '#1f3552', koke: '#5a6b3d', akane: '#9a3324', muted: '#766a52' };
const bizFont = { jpSerif: '"Zen Old Mincho", "Noto Serif JP", serif', jpAlt: '"Shippori Mincho", "Noto Serif JP", serif', enSerif: '"Cormorant Garamond", serif', mono: '"JetBrains Mono", ui-monospace, monospace' };

function BizGroup({ group, color }) {
  return (
    <div style={{ background: bizB.paper, border: `1px solid ${color}44`, borderTop: `3px solid ${color}`, padding: '18px 16px', display: 'flex', flexDirection: 'column', gap: 10, minWidth: 0 }}>
      {group.branch && <div style={{ fontFamily: bizFont.mono, fontSize: 9, letterSpacing: 3, color: color, opacity: 0.85 }}>{group.branch}</div>}
      <div style={{ fontFamily: bizFont.jpSerif, fontSize: 17, fontWeight: 500, color: color, letterSpacing: '0.06em' }}>{group.name}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
        {group.items.map(it => (
          <div key={it} style={{ fontFamily: bizFont.jpSerif, fontSize: 12.5, lineHeight: 1.6, color: bizB.ink, background: bizB.paperDeep, padding: '8px 10px', letterSpacing: '0.02em' }}>{it}</div>
        ))}
      </div>
    </div>
  );
}

function BizUnit({ unit, index }) {
  return (
    <div style={{ background: bizB.paperDeep, padding: 28, borderLeft: `5px solid ${unit.color}` }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 22 }}>
        <span style={{ fontFamily: bizFont.mono, fontSize: 10, letterSpacing: 3, color: unit.color }}>0{index + 1} / 04</span>
        <span style={{ fontFamily: bizFont.jpAlt, fontSize: 30, color: unit.color, letterSpacing: '0.04em' }}>{unit.tag}</span>
        <span style={{ fontFamily: bizFont.jpSerif, fontSize: 15, letterSpacing: 4, color: bizB.muted }}>{unit.jp}</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${unit.groups.length}, minmax(0, 1fr))`, gap: 16, alignItems: 'start' }}>
        {unit.groups.map(g => <BizGroup key={g.name} group={g} color={unit.color} />)}
      </div>
    </div>
  );
}

function SaiBusinessPage() {
  const t = window.siteData.businessTree;
  return (
    <div style={{ background: bizB.paper, fontFamily: bizFont.jpSerif, color: bizB.ink }}>
      <SaiPageHeader no="06" jp={window.t('事業概要')} en="Business" lead={t.lead} />
      <div style={{ padding: '64px 56px 40px', display: 'flex', flexDirection: 'column', gap: 28 }}>
        {t.units.map((u, i) => <BizUnit key={u.tag} unit={u} index={i} />)}
      </div>
      <div style={{ padding: '0 56px 88px' }}>
        <div style={{ border: `1px dashed ${bizB.ink}55`, padding: '24px 28px', textAlign: 'center', fontFamily: bizFont.jpSerif, fontSize: 14, letterSpacing: '0.06em', color: bizB.ink, lineHeight: 1.9 }}>
          {t.footer}
        </div>
        <div style={{ marginTop: 28, textAlign: 'center', fontFamily: bizFont.jpSerif, fontSize: 22, letterSpacing: '0.1em', color: bizB.ai }}>
          {t.tagline}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { SaiBusinessPage });
