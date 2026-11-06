// Shared placeholder + helper components used across all variants.
// Every styles object MUST be uniquely-named.

// 画面の上端に貼り付く帯の高さ。送り先がその裏に隠れないよう、その分だけ余計に空ける。
function saiStickyGap(extra) {
  const bar = document.querySelector('[data-sai-sticky]');
  const h = bar ? Math.round(bar.getBoundingClientRect().height) : 0;
  return h + (extra || 0);
}

// 送り先の位置。帯は現れる前に下へずらして置いてあり、画面からの距離で測ると
// その分だけ行き過ぎる。ずらしの影響を受けない積み上げの位置で測る。
function saiLayoutTop(el) {
  let y = 0;
  for (let n = el; n; n = n.offsetParent) y += n.offsetTop;
  return y;
}

const PLACEHOLDER_STRIPE = (color1, color2) =>
  `repeating-linear-gradient(135deg, ${color1} 0 10px, ${color2} 10px 20px)`;

// A photo placeholder — striped surface with monospace caption.
function Placeholder({ label, ratio, height, color1 = '#e8e3da', color2 = '#ddd6c8', textColor = '#7a6f5c', radius = 0, style }) {
  const ph = {
    width: '100%',
    aspectRatio: ratio,
    height: height,
    background: PLACEHOLDER_STRIPE(color1, color2),
    color: textColor,
    borderRadius: radius,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: '"JetBrains Mono", ui-monospace, monospace',
    fontSize: 11,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    position: 'relative',
    overflow: 'hidden',
    ...style,
  };
  return (
    <div style={ph}>
      <span style={{ background: color1, padding: '4px 10px', border: `1px solid ${textColor}33` }}>
        {label}
      </span>
    </div>
  );
}

// Vertical Japanese text helper
function Vertical({ children, style }) {
  return (
    <span
      style={{
        writingMode: 'vertical-rl',
        textOrientation: 'mixed',
        fontFeatureSettings: '"palt"',
        ...style,
      }}
    >
      {children}
    </span>
  );
}

// Inline hairline divider
// お知らせ本文：配列なら段落ごとに改段、文字列ならこれまでどおり1段落。
// firstOnly は一覧カード用（長い記事でカードが伸びすぎないよう冒頭だけ出す）。
function NewsBody({ body, style, firstOnly }) {
  const list = Array.isArray(body) ? (firstOnly ? body.slice(0, 1) : body) : [body];
  return (
    <React.Fragment>
      {list.map((t, i) => (
        <p key={i} style={{ ...style, margin: 0, marginTop: i === 0 ? 0 : '1.4em' }}>{t}</p>
      ))}
    </React.Fragment>
  );
}

function Hairline({ color = 'currentColor', opacity = 0.2, vertical = false, length = '100%', thickness = 1 }) {
  return (
    <span
      style={{
        display: 'inline-block',
        background: color,
        opacity,
        width: vertical ? thickness : length,
        height: vertical ? length : thickness,
      }}
    />
  );
}

// Number badge in mono
function NumTag({ n, color = '#333', style }) {
  return (
    <span
      style={{
        fontFamily: '"JetBrains Mono", ui-monospace, monospace',
        fontSize: 11,
        letterSpacing: 1,
        color,
        ...style,
      }}
    >
      {n}
    </span>
  );
}

// ----------------------------------------------------------
// Instagram と note への入口。囲みは置かず、マークだけを並べる。
// 色と影は置き場所で変わるので、呼ぶ側から渡す（写真の上なら明るい色＋影、和紙の上なら墨）。
// ----------------------------------------------------------
const SAI_SOCIALS = [
  { label: 'Instagram', href: 'https://www.instagram.com/regional_lab/' },
  { label: 'note', href: 'https://note.com/chihousouseinote' },
];

function SaiInstagramMark({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

// note のマーク（小文字の n）。字ではなく形として置くため、塗りの図形で描く。
function SaiNoteMark({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3 21V3h9.3c5.1 0 8.7 1.9 8.7 6.8V21h-5.2v-9.7c0-2.4-1.2-3.5-3.7-3.5H8.2V21H3z" />
    </svg>
  );
}

function SaiSocialLinks({ size, gap, color, glow }) {
  const mark = size || 26;
  return (
    <div style={{ display: 'flex', gap: gap || 16, alignItems: 'center' }}>
      {SAI_SOCIALS.map((s) => (
        <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
           aria-label={s.label} title={s.label} style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 4,
          color: color || 'currentColor',
          filter: glow
            ? 'drop-shadow(0 1px 2px rgba(0,0,0,0.6)) drop-shadow(0 2px 10px rgba(0,0,0,0.5))'
            : undefined,
          textDecoration: 'none', cursor: 'pointer',
        }}>
          {/* note は塗りのため同じ寸法だと重く見える。少し小さくして目方を揃える */}
          {s.label === 'Instagram'
            ? <SaiInstagramMark size={mark} />
            : <SaiNoteMark size={Math.round(mark * 0.86)} />}
        </a>
      ))}
    </div>
  );
}

Object.assign(window, { Placeholder, Vertical, Hairline, NumTag, PLACEHOLDER_STRIPE, SaiSocialLinks });
