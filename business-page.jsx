// BUSINESS OVERVIEW — 事業概要（事業構造）ページ / デスクトップ
const bizB = { paper: '#f1ead8', paperDeep: '#e6dcc0', ink: '#1f1a14', ai: '#1f3552', koke: '#5a6b3d', akane: '#9a3324', muted: '#766a52' };
const bizFont = { jpSerif: '"Zen Old Mincho", "Noto Serif JP", serif', jpAlt: '"Shippori Mincho", "Noto Serif JP", serif', enSerif: '"Cormorant Garamond", serif', mono: '"JetBrains Mono", ui-monospace, monospace' };

// 連続する同じ branch（To C / To B 等）のグループを一つの帯にまとめる
function bizSections(groups) {
  const out = [];
  groups.forEach(g => {
    const last = out[out.length - 1];
    if (last && last.branch === (g.branch || '')) last.groups.push(g);
    else out.push({ branch: g.branch || '', groups: [g] });
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
  window.scrollTo({ top: y, behavior: reduce ? 'auto' : 'smooth' });
  // 一部の環境では smooth が無視されるため、動いていなければ確実に移動させる
  setTimeout(() => {
    if (Math.abs(window.pageYOffset - y) > 4) window.scrollTo(0, y);
  }, 600);
}

// ---------------------------------------------------------
// 冒頭のインデックス — 四事業を一望し、各事業へ移動する
// ---------------------------------------------------------
function BizIndexCard({ unit, index }) {
  return (
    <button
      type="button"
      onClick={() => bizScrollTo('biz-' + index)}
      style={{
        appearance: 'none', textAlign: 'left', cursor: 'pointer',
        background: bizB.paperDeep, border: 'none', borderTop: `4px solid ${unit.color}`,
        padding: '22px 22px 24px', display: 'flex', flexDirection: 'column', gap: 6, minWidth: 0,
        font: 'inherit', color: bizB.ink,
      }}
    >
      <span style={{ fontFamily: bizFont.mono, fontSize: 10, letterSpacing: 3, color: unit.color }}>
        {bizPad(index + 1)} / 04
      </span>
      <span style={{ fontFamily: bizFont.jpAlt, fontSize: 26, color: unit.color, letterSpacing: '0.04em', lineHeight: 1.2 }}>
        {unit.tag}
      </span>
      <span style={{ fontFamily: bizFont.jpSerif, fontSize: 13, letterSpacing: 3, color: bizB.muted }}>
        {unit.jp}
      </span>
      <span style={{ fontFamily: bizFont.mono, fontSize: 10, letterSpacing: 2, color: bizB.muted, marginTop: 6 }}>
        {bizCount(unit.groups.length)}
      </span>
    </button>
  );
}

// ---------------------------------------------------------
// 区分カード — 色帯の見出し ＋ 罫線区切りの項目（目次形式）
// ---------------------------------------------------------
function BizGroupCard({ group, color, n, total }) {
  return (
    <div style={{ background: bizB.paper, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
      <div style={{
        background: color, color: bizB.paper,
        padding: '11px 14px', display: 'flex', alignItems: 'baseline', gap: 10,
      }}>
        <span style={{ fontFamily: bizFont.mono, fontSize: 10, letterSpacing: 2, opacity: 0.75 }}>
          {bizPad(n)}
        </span>
        <span style={{ fontFamily: bizFont.jpSerif, fontSize: 16, fontWeight: 500, letterSpacing: '0.06em', lineHeight: 1.4 }}>
          {group.name}
        </span>
      </div>
      <ul style={{ listStyle: 'none', margin: 0, padding: '2px 14px 6px', background: color + '0f', flex: 1 }}>
        {group.items.map((it, i) => (
          <li key={it} style={{
            fontFamily: bizFont.jpSerif, fontSize: 13.5, lineHeight: 1.85, color: bizB.ink,
            letterSpacing: '0.02em', padding: '10px 0 10px 16px', position: 'relative',
            borderTop: i === 0 ? 'none' : `1px solid ${bizB.ink}18`,
          }}>
            <span aria-hidden="true" style={{
              position: 'absolute', left: 0, top: '1.65em',
              width: 6, height: 1, background: color,
            }} />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ---------------------------------------------------------
// 事業レコード
// ---------------------------------------------------------
function BizUnit({ unit, index }) {
  const sections = bizSections(unit.groups);
  // ブランチ（To C / To B）が違っても同じ列グリッドに載せ、カードの見せ方を揃える
  const bizCols = Math.min(Math.max.apply(null, sections.map(sec => sec.groups.length)), 4);
  const summaryLines = (window.siteData.business.find(b => b.tag === unit.tag) || {}).body || [];
  // 日本語は行をそのまま連結、英語は語の区切りが必要なので空白で連結
  const summary = summaryLines.join(window.saiLang === 'en' ? ' ' : '');
  let n = 0;

  return (
    <section id={'biz-' + index} style={{
      background: bizB.paperDeep, borderLeft: `5px solid ${unit.color}`,
      padding: '38px 40px 40px', position: 'relative', overflow: 'hidden',
    }}>
      <span aria-hidden="true" style={{
        position: 'absolute', right: 28, top: 6,
        fontFamily: bizFont.mono, fontSize: 108, fontWeight: 500,
        color: unit.color, opacity: 0.05, letterSpacing: -4, lineHeight: 1,
      }}>{bizPad(index + 1)}</span>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start', position: 'relative' }}>
        <div>
          <div style={{ fontFamily: bizFont.mono, fontSize: 10, letterSpacing: 3, color: unit.color }}>
            {bizPad(index + 1)} / 04
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 18, marginTop: 8 }}>
            <span style={{ fontFamily: bizFont.jpAlt, fontSize: 44, color: unit.color, letterSpacing: '0.04em', lineHeight: 1.1 }}>
              {unit.tag}
            </span>
            <span style={{ fontFamily: bizFont.jpSerif, fontSize: 15, letterSpacing: 4, color: bizB.muted }}>
              {unit.jp}
            </span>
          </div>
        </div>
        {summary && (
          <p style={{
            margin: 0, fontFamily: bizFont.jpSerif, fontSize: 13.5, lineHeight: 2.1,
            color: bizB.ink, opacity: 0.85, borderLeft: `1px solid ${unit.color}55`, paddingLeft: 20,
          }}>
            {summary}
          </p>
        )}
      </div>

      <div style={{ height: 1, background: `${bizB.ink}22`, margin: '30px 0 26px' }} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
        {sections.map(sec => (
          <div key={sec.branch || 'main'}>
            {sec.branch && !(sec.groups.length === 1 && sec.groups[0].name === sec.branch) && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12 }}>
                <span style={{
                  fontFamily: bizFont.mono, fontSize: 10, letterSpacing: 3,
                  color: bizB.paper, background: unit.color, padding: '4px 12px',
                }}>{sec.branch}</span>
                <span style={{ flex: 1, height: 1, background: `${unit.color}44` }} />
              </div>
            )}
            <div style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${bizCols}, minmax(0, 1fr))`,
              gap: 16, alignItems: 'start',
            }}>
              {sec.groups.map(g => {
                n += 1;
                return <BizGroupCard key={g.name} group={g} color={unit.color} n={n} total={unit.groups.length} />;
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SaiBusinessPage() {
  const t = window.siteData.businessTree;
  return (
    <div style={{ background: bizB.paper, fontFamily: bizFont.jpSerif, color: bizB.ink }}>
      <SaiPageHeader no="06" jp={window.t('事業概要')} en="Business" lead={t.lead} />

      <div style={{ padding: '64px 56px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
          <span style={{ fontFamily: bizFont.mono, fontSize: 10, letterSpacing: 3, color: bizB.akane }}>
            STRUCTURE — 04 SECTORS
          </span>
          <span style={{ flex: 1, height: 1, background: `${bizB.ink}22` }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 16 }}>
          {t.units.map((u, i) => <BizIndexCard key={u.tag} unit={u} index={i} />)}
        </div>
      </div>

      <div style={{ padding: '48px 56px 40px', display: 'flex', flexDirection: 'column', gap: 28 }}>
        {t.units.map((u, i) => <BizUnit key={u.tag} unit={u} index={i} />)}
      </div>

      <div style={{ padding: '0 56px 88px' }}>
        <div style={{ borderTop: `1px solid ${bizB.ink}33`, borderBottom: `1px solid ${bizB.ink}33`, padding: '26px 0', display: 'grid', gridTemplateColumns: '160px 1fr', gap: 32, alignItems: 'center' }}>
          <span style={{ fontFamily: bizFont.mono, fontSize: 10, letterSpacing: 3, color: bizB.akane }}>AREAS</span>
          <span style={{ fontFamily: bizFont.jpSerif, fontSize: 14, letterSpacing: '0.06em', lineHeight: 1.9, color: bizB.ink }}>
            {t.footer}
          </span>
        </div>
        <div style={{ marginTop: 40, textAlign: 'center', fontFamily: bizFont.jpSerif, fontSize: 24, letterSpacing: '0.1em', lineHeight: 1.8, color: bizB.ai }}>
          {t.tagline}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { SaiBusinessPage });
