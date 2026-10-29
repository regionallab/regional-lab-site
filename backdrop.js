// 自動生成ファイル — 編集しないでください。編集は backdrop.jsx を直し、bash tools/build.sh を実行。
// 背景の風景写真レイヤー。
// site-data の backdrop.photos に並べた写真を、ゆっくり拡大しながらクロスフェードさせる。
// photos が空なら何も描かず、サイトは従来どおりの無地（和紙色）の背景になる。

const BACKDROP_DEFAULTS = {
  interval: 13000,
  // 1枚を映す時間（ms）
  fade: 3600,
  // クロスフェードにかける時間（ms）
  zoomFrom: 1.08,
  // 映り始めの拡大率（横に流すための余白をここで確保する）
  zoom: 1.30,
  // 表示の終わりまでにここまでゆっくり拡大する
  driftX: -3.0,
  // 表示中に横へ流す量（要素幅に対する％）
  driftY: -2.0,
  // 同じく縦へ流す量
  stillZoom: 1.18,
  // スマホの1枚表示で、ゆっくり往復させる拡大率
  stillCycle: 32000,
  // その往復1回にかける時間（ms）
  veil: 0,
  // 見出し帯にかける和紙の濃さ。0 = 写真の色をそのまま出す
  veilPage: 0.88,
  // 本文が詰まったページの地にかける和紙の濃さ（可読性優先）
  // 写真の上の明るい文字を読ませるための膜。色を薄める和紙ではなく「暗く締める」膜にしており、
  // 色相と鮮やかさはそのまま残る（夕景のように沈むだけ）。0 にすれば加工なしの素のまま。
  scrim: 0.45,
  scrimColor: '#120f0a'
};

// 写真の上に出す文字の色。写真の鮮やかさを保つため面を敷かず、文字側を明るくして読ませる。
// 左が従来の色、右が写真の上に出すときの色。
const SAI_ON_PHOTO = {
  '#1f1a14': '#faf6ec',
  // 墨 → 生成り
  '#766a52': '#e6ddc8',
  // 鈍色
  '#9a3324': '#f0907a',
  // 茜（暗所用に明るく）
  '#1f3552': '#b3cbe4',
  // 藍
  '#13243a': '#9db7d4',
  '#5a6b3d': '#bed092' // 苔
};

// 文字色の組をCSS変数で配る。ページの地には「写真の上」の組、
// 和紙の面（カード・帯）には従来の組を流し込むと、中の文字は自動で読める側に揃う。
const SAI_VARS_ON_PHOTO = {
  '--sai-ink': '#faf6ec',
  '--sai-muted': '#e6ddc8',
  '--sai-akane': '#f0907a',
  '--sai-ai': '#b3cbe4',
  '--sai-koke': '#bed092'
};
const SAI_VARS_ON_PAPER = {
  '--sai-ink': '#1f1a14',
  '--sai-muted': '#766a52',
  '--sai-akane': '#9a3324',
  '--sai-ai': '#1f3552',
  '--sai-koke': '#5a6b3d'
};

// onPaper=true なら和紙の面の組。false ならページの地の組（背景写真が無いときは和紙の組）。
function saiVars(onPaper) {
  return onPaper || !saiBackdropOn() ? SAI_VARS_ON_PAPER : SAI_VARS_ON_PHOTO;
}

// 明るい文字が白飛びした空などに溶けないよう、文字の後ろにだけ薄い影を落とす。
const SAI_TEXT_SHADOW = '0 1px 2px rgba(0,0,0,0.6), 0 2px 10px rgba(0,0,0,0.55), 0 0 28px rgba(0,0,0,0.45)';

// 背景写真が設定されているか。未設定なら従来の無地背景のまま動く。
function saiBackdropOn() {
  const b = window.siteData && window.siteData.backdrop;
  return !!(b && b.photos && b.photos.length);
}
function saiBackdropCfg() {
  return Object.assign({}, BACKDROP_DEFAULTS, window.siteData && window.siteData.backdrop || {});
}

// 面の色を半透明にして背景写真を透かす。背景写真が無いときは元の色をそのまま返す。
function saiVeil(hex, alpha) {
  if (!saiBackdropOn()) return hex;
  const h = hex.replace('#', '');
  const full = h.length === 3 ? h.split('').map(c => c + c).join('') : h;
  const n = parseInt(full, 16);
  const a = alpha == null ? saiBackdropCfg().veil : alpha;
  return `rgba(${n >> 16 & 255}, ${n >> 8 & 255}, ${n & 255}, ${a})`;
}

// 背景写真があるときだけ、文字色を明るい側へ入れ替える。無いときは元の色のまま。
function saiOnPhoto(hex) {
  if (!saiBackdropOn()) return hex;
  return SAI_ON_PHOTO[String(hex).toLowerCase()] || hex;
}
function saiShadow() {
  return saiBackdropOn() ? SAI_TEXT_SHADOW : undefined;
}

// 罫線。写真の上では暗い罫が沈むので、明るい側へ入れ替える。
// alpha は元の 16 進アルファ（'22' など）。濃さの比率はそのまま明るい側へ移す。
function saiLine(hex, alpha) {
  const a = alpha || '22';
  if (!saiBackdropOn()) return `${hex}${a}`;
  const v = Math.min(1, parseInt(a, 16) / 255 * 2.2 + 0.12);
  return `rgba(250, 246, 236, ${v.toFixed(2)})`;
}

// 本文が詰まったページの地。写真の上でも読めるよう和紙を濃いめに敷く。
function saiPageVeil(hex) {
  return saiVeil(hex, saiBackdropCfg().veilPage);
}

// 最初の画面をスクロールに合わせて静かに見送る。上へ流しながら薄くしていく。
// 控えめに。画面が流れきるまでかけて、消し切らずに少し残す。
// 「視差効果を減らす」設定の端末では何もしない。
function saiUseScrollFade() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = 0;
    const apply = () => {
      raf = 0;
      const span = (window.innerHeight || 1) * 1.4;
      const p = Math.min(1, Math.max(0, window.scrollY / span));
      el.style.opacity = String(1 - p * 0.55);
      el.style.transform = p ? `translate3d(0, ${(-p * 40).toFixed(1)}px, 0) scale(${(1 - p * 0.02).toFixed(4)})` : '';
      el.style.willChange = p > 0 && p < 1 ? 'opacity, transform' : 'auto';
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(apply);
    };
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    apply();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return ref;
}
function Backdrop() {
  const cfg = saiBackdropCfg();
  const photos = cfg.photos || [];
  const [tick, setTick] = React.useState(0);
  const [reduce] = React.useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [narrow] = React.useState(() => window.matchMedia('(max-width: 768px)').matches);

  // スマホは通信量を抑えるため1枚だけ。ただし動きは付ける（画像の枚数は増えない）。
  // 「視差効果を減らす」設定の端末だけは完全に静止させる。
  const still = narrow || reduce || photos.length < 2;
  React.useEffect(() => {
    if (still) return;
    const id = setInterval(() => setTick(n => n + 1), cfg.interval);
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
  const layer = {
    position: 'absolute',
    inset: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    className: "sai-backdrop",
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 0,
      overflow: 'hidden',
      pointerEvents: 'none',
      background: cfg.scrimColor
    }
  }, still ? /*#__PURE__*/React.createElement("div", {
    className: reduce ? undefined : 'sai-bd-still',
    style: Object.assign({}, layer, {
      backgroundImage: `url("${photos[0]}")`
    })
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, prev && /*#__PURE__*/React.createElement("div", {
    key: 'out-' + tick,
    className: "sai-bd-out",
    style: Object.assign({}, layer, {
      backgroundImage: `url("${prev}")`
    })
  }), /*#__PURE__*/React.createElement("div", {
    key: 'in-' + tick,
    className: "sai-bd-in",
    style: Object.assign({}, layer, {
      backgroundImage: `url("${cur}")`
    })
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: cfg.scrimColor,
      opacity: cfg.scrim
    }
  }), /*#__PURE__*/React.createElement("style", null, `
        .sai-bd-in  { animation: saiBdIn ${cfg.fade}ms ease-in-out both,
                                 saiBdZoom ${cfg.interval + cfg.fade}ms linear both; }
        .sai-bd-out { animation: saiBdOut ${cfg.fade}ms ease-in-out both,
                                 saiBdDrift ${cfg.fade}ms linear both; }
        .sai-bd-still { animation: saiBdStill ${cfg.stillCycle}ms ease-in-out infinite alternate both; }
        @keyframes saiBdIn   { from { opacity: 0; } to { opacity: 1; } }
        @keyframes saiBdOut  { from { opacity: 1; } to { opacity: 0; } }
        @keyframes saiBdZoom {
          from { transform: scale(${cfg.zoomFrom}) translate3d(0, 0, 0); }
          to   { transform: scale(${cfg.zoom}) translate3d(${cfg.driftX}%, ${cfg.driftY}%, 0); }
        }
        /* 消えていく写真が固まって見えないよう、フェード中もそのまま流し続ける */
        @keyframes saiBdDrift {
          from { transform: scale(${cfg.zoom}) translate3d(${cfg.driftX}%, ${cfg.driftY}%, 0); }
          to   { transform: scale(${(cfg.zoom * 1.04).toFixed(3)}) translate3d(${(cfg.driftX * 1.3).toFixed(2)}%, ${(cfg.driftY * 1.3).toFixed(2)}%, 0); }
        }
        @keyframes saiBdStill {
          from { transform: scale(1) translate3d(0, 0, 0); }
          to   { transform: scale(${cfg.stillZoom}) translate3d(${(cfg.driftX * 1.2).toFixed(2)}%, ${(cfg.driftY * 1.2).toFixed(2)}%, 0); }
        }
      `));
}
Object.assign(window, {
  Backdrop,
  saiUseScrollFade,
  saiBackdropOn,
  saiVeil,
  saiPageVeil,
  saiOnPhoto,
  saiShadow,
  saiLine,
  saiVars,
  saiBackdropCfg
});
