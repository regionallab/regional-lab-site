// 背景の風景写真レイヤー。
// site-data の backdrop.photos に並べた写真を、ゆっくり拡大しながらクロスフェードさせる。
// photos が空なら何も描かず、サイトは従来どおりの無地（和紙色）の背景になる。

const BACKDROP_DEFAULTS = {
  interval: 9000,   // 1枚を映す時間（ms）
  fade: 2400,       // クロスフェードにかける時間（ms）
  zoom: 1.10,       // 表示中にここまでゆっくり拡大する
  veil: 0.72,       // 本文の面にかける和紙の不透明度（0=写真そのまま 1=従来どおり）
  scrim: 0.12,      // 写真全体にうっすら重ねる和紙の濃さ
  scrimColor: '#f1ead8',
};

// 背景写真が設定されているか。未設定なら従来の無地背景のまま動く。
function saiBackdropOn() {
  const b = window.siteData && window.siteData.backdrop;
  return !!(b && b.photos && b.photos.length);
}

function saiBackdropCfg() {
  return Object.assign({}, BACKDROP_DEFAULTS, (window.siteData && window.siteData.backdrop) || {});
}

// 面の色を半透明にして背景写真を透かす。背景写真が無いときは元の色をそのまま返す。
function saiVeil(hex, alpha) {
  if (!saiBackdropOn()) return hex;
  const h = hex.replace('#', '');
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  const n = parseInt(full, 16);
  const a = alpha == null ? saiBackdropCfg().veil : alpha;
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
}

function Backdrop() {
  const cfg = saiBackdropCfg();
  const photos = cfg.photos || [];
  const [tick, setTick] = React.useState(0);
  const [reduce] = React.useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [narrow] = React.useState(() => window.matchMedia('(max-width: 768px)').matches);

  // スマホは通信量を抑えるため1枚だけ、動きも付けない。
  const still = narrow || reduce || photos.length < 2;

  React.useEffect(() => {
    if (still) return;
    const id = setInterval(() => setTick((n) => n + 1), cfg.interval);
    return () => clearInterval(id);
  }, [still, cfg.interval]);

  // 次に出す写真を先に読み込んでおき、切り替わりで白く飛ばさない。
  React.useEffect(() => {
    if (still) return;
    const next = new Image();
    next.src = photos[(tick + 1) % photos.length];
  }, [tick, still]);

  if (!photos.length) return null;

  const cur = photos[tick % photos.length];
  const prev = tick > 0 ? photos[(tick - 1) % photos.length] : null;
  const layer = { position: 'absolute', inset: 0, backgroundSize: 'cover', backgroundPosition: 'center' };

  return (
    <div aria-hidden="true" className="sai-backdrop" style={{
      position: 'fixed', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none',
      background: cfg.scrimColor,
    }}>
      {still ? (
        <div style={Object.assign({}, layer, { backgroundImage: `url("${photos[0]}")` })} />
      ) : (
        <React.Fragment>
          {prev && (
            <div key={'out-' + tick} className="sai-bd-out"
              style={Object.assign({}, layer, { backgroundImage: `url("${prev}")` })} />
          )}
          <div key={'in-' + tick} className="sai-bd-in"
            style={Object.assign({}, layer, { backgroundImage: `url("${cur}")` })} />
        </React.Fragment>
      )}
      <div style={{ position: 'absolute', inset: 0, background: cfg.scrimColor, opacity: cfg.scrim }} />
      <style>{`
        .sai-bd-in  { animation: saiBdIn ${cfg.fade}ms ease-in-out both,
                                 saiBdZoom ${cfg.interval + cfg.fade}ms linear both; }
        .sai-bd-out { animation: saiBdOut ${cfg.fade}ms ease-in-out both; }
        @keyframes saiBdIn   { from { opacity: 0; } to { opacity: 1; } }
        @keyframes saiBdOut  { from { opacity: 1; } to { opacity: 0; } }
        @keyframes saiBdZoom { from { transform: scale(1); } to { transform: scale(${cfg.zoom}); } }
      `}</style>
    </div>
  );
}

Object.assign(window, { Backdrop, saiBackdropOn, saiVeil, saiBackdropCfg });
