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

Object.assign(window, { Placeholder, Vertical, Hairline, NumTag, PLACEHOLDER_STRIPE });
