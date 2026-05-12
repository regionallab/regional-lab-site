// Shared placeholder + helper components used across all variants.
// Every styles object MUST be uniquely-named.

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
