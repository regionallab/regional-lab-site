// ==========================================================
// APP CORE — Regional Lab アプリ（PWA）の土台
// 配色・書体・保存領域・共通UI部品・ルーター
// コンテンツは Web サイトと同じ window.siteData を参照します
// （site-data.jsx / site-data-en.jsx を編集すれば両方に反映されます）。
// ==========================================================

const raPalette = {
  paper: '#f1ead8',
  paperDeep: '#e6dcc0',
  card: '#f7f2e4',
  ink: '#1f1a14',
  ai: '#1f3552',
  koke: '#5a6b3d',
  akane: '#9a3324',
  gold: '#8a6d3b',
  muted: '#766a52',
};

const raFont = {
  jpSerif: '"Zen Old Mincho", "Noto Serif JP", serif',
  jpAlt: '"Shippori Mincho", "Noto Serif JP", serif',
  enSerif: '"Cormorant Garamond", serif',
  mono: '"JetBrains Mono", ui-monospace, monospace',
};

// サイトのアセットは1階層上（/assets）にあるため、アプリからは ../ を付ける
function raAsset(path) {
  if (!path) return path;
  if (/^(https?:)?\/\//.test(path)) return path;
  return path.indexOf('assets/') === 0 ? '../' + path : path;
}

const raT = function (jp) { return window.t ? window.t(jp) : jp; };

// ----------------------------------------------------------
// 保存領域（localStorage）— 保存した項目・既読のお知らせ
// ----------------------------------------------------------
const raStore = {
  get(key, fallback) {
    try {
      const v = localStorage.getItem('rl-app:' + key);
      return v == null ? fallback : JSON.parse(v);
    } catch (e) { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem('rl-app:' + key, JSON.stringify(value)); } catch (e) {}
  },
};

// 画面をまたいで同期させるため、購読者に配る簡易ストア
function raMakeCollection(key) {
  const listeners = new Set();
  const read = () => raStore.get(key, []);
  const write = (next) => { raStore.set(key, next); listeners.forEach((fn) => fn(next)); };
  return {
    read,
    has: (id) => read().indexOf(id) >= 0,
    add: (id) => { const cur = read(); if (cur.indexOf(id) < 0) write(cur.concat([id])); },
    toggle: (id) => {
      const cur = read();
      write(cur.indexOf(id) >= 0 ? cur.filter((x) => x !== id) : cur.concat([id]));
    },
    use() {
      const [value, setValue] = React.useState(read);
      React.useEffect(() => {
        listeners.add(setValue);
        setValue(read());
        return () => { listeners.delete(setValue); };
      }, []);
      return value;
    },
  };
}

const raSaved = raMakeCollection('saved');  // 保存した項目（お知らせ・イベント・事業）
const raRead = raMakeCollection('read');    // 既読のお知らせ

// ----------------------------------------------------------
// ルーター — #/tab または #/tab/param
// ----------------------------------------------------------
const RA_TABS = ['home', 'business', 'events', 'news', 'more'];

function raParseHash() {
  const raw = (window.location.hash || '').replace(/^#\/?/, '');
  const parts = raw.split('/').filter(Boolean).map(decodeURIComponent);
  const tab = RA_TABS.indexOf(parts[0]) >= 0 ? parts[0] : 'home';
  // タブ配下のサブ画面（more/about など）と、詳細のID（news/02 など）
  return { tab, view: parts[1] || null, param: parts[2] || null };
}

function raNavigate(path) {
  const next = '#/' + String(path).replace(/^#?\/?/, '');
  if (window.location.hash === next) return;
  window.location.hash = next;
}

function raBack() {
  if (window.history.length > 1) window.history.back();
  else raNavigate('home');
}

// ----------------------------------------------------------
// アイコン（インライン SVG）
// ----------------------------------------------------------
function RaIcon({ name, size = 22, color = 'currentColor', strokeWidth = 1.4 }) {
  const paths = {
    home: 'M4 11.5 12 4l8 7.5V20a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1z',
    business: 'M12 21V9m0 0L7 4m5 5 5-5M5 21h14M7 15H4m16 0h-3',
    events: 'M4 6h16v14H4zM4 10h16M8 3v4m8-4v4M9 15h2v2H9z',
    news: 'M4 5h13v14H5a1 1 0 0 1-1-1zm13 3h3v9a2 2 0 0 1-2 2M7 9h7M7 12h7M7 15h4',
    more: 'M4 7h16M4 12h16M4 17h10',
    back: 'm14 5-7 7 7 7',
    close: 'M6 6l12 12M18 6 6 18',
    bookmark: 'M6 4h12v17l-6-4.5L6 21z',
    share: 'M12 16V4m0 0L8 8m4-4 4 4M5 14v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5',
    search: 'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14m5 12 4 4',
    phone: 'M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A15 15 0 0 1 4 5a1 1 0 0 1 1-1',
    mail: 'M3 6h18v12H3zm0 0 9 7 9-7',
    pin: 'M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11m0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5',
    globe: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18m0 0c-3 3-3 15 0 18m0-18c3 3 3 15 0 18M3.5 9h17m-17 6h17',
    check: 'm5 12 5 5 9-10',
    chevron: 'm9 5 7 7-7 7',
    download: 'M12 4v11m0 0 4-4m-4 4-4-4M5 20h14',
    offline: 'M3 3l18 18M8.5 16.5a5 5 0 0 1 7 0M5 13a10 10 0 0 1 4-2.5m10 2.5a10 10 0 0 0-3-2M2 9a15 15 0 0 1 5-3m10 .5A15 15 0 0 1 22 9M12 20h.01',
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      style={{ display: 'block', flexShrink: 0 }} aria-hidden="true">
      <path d={paths[name] || paths.more} />
    </svg>
  );
}

// ----------------------------------------------------------
// 共通 UI 部品
// ----------------------------------------------------------

// 画面上部のバー（ホームはロゴ、サブ画面は戻る矢印＋タイトル）
function RaAppBar({ title, onBack, right }) {
  return (
    <div style={{
      position: 'sticky', top: 0, zIndex: 50,
      display: 'flex', alignItems: 'center', gap: 12,
      minHeight: 56, padding: '10px 14px',
      paddingTop: 'calc(10px + env(safe-area-inset-top))',
      background: 'rgba(241,234,216,0.92)',
      backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
      borderBottom: `1px solid ${raPalette.ink}1f`,
    }}>
      {onBack ? (
        <button onClick={onBack} aria-label="戻る" style={raStyles.iconBtn}>
          <RaIcon name="back" size={20} color={raPalette.ink} />
        </button>
      ) : (
        <div onClick={() => raNavigate('home')} style={{ display: 'flex', alignItems: 'center', gap: 9, cursor: 'pointer' }}>
          <div style={{ width: 34, height: 34, borderRadius: 17, overflow: 'hidden', flexShrink: 0 }}>
            <img src={raAsset('assets/logo-regionallab.png')} alt="Regional Lab"
              style={{ width: '135%', height: '135%', objectFit: 'cover', marginLeft: '-17.5%', marginTop: '-17.5%', display: 'block' }} />
          </div>
          <div style={{ fontFamily: raFont.jpSerif, fontSize: 16, fontWeight: 600, letterSpacing: 0.6, color: raPalette.ink }}>
            Regional Lab
          </div>
        </div>
      )}
      {title && (
        <div style={{
          fontFamily: raFont.jpSerif, fontSize: 16, letterSpacing: 1.5, color: raPalette.ink,
          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
        }}>{title}</div>
      )}
      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 4 }}>{right}</div>
    </div>
  );
}

// 下部タブバー
function RaTabBar({ tab, unread }) {
  // ラベルは英語表示のときだけ差し替える（'その他' は辞書上 'Other' のため個別に指定）
  const en = window.saiLang === 'en';
  const items = [
    ['home', en ? 'Home' : 'ホーム'],
    ['business', en ? 'Business' : '事業'],
    ['events', en ? 'Events' : 'イベント'],
    ['news', en ? 'News' : 'お知らせ'],
    ['more', en ? 'More' : 'その他'],
  ];
  return (
    <nav style={{
      position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 60,
      display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)',
      background: 'rgba(241,234,216,0.96)',
      backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
      borderTop: `1px solid ${raPalette.ink}22`,
      paddingBottom: 'env(safe-area-inset-bottom)',
    }}>
      {items.map(([id, label]) => {
        const active = tab === id;
        return (
          <button key={id} onClick={() => raNavigate(id)} aria-label={label}
            aria-current={active ? 'page' : undefined}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '9px 2px 8px',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
              color: active ? raPalette.akane : raPalette.muted,
              position: 'relative',
            }}>
            <div style={{ position: 'relative' }}>
              <RaIcon name={id} size={21} strokeWidth={active ? 1.7 : 1.3} />
              {id === 'news' && unread > 0 && (
                <span style={{
                  position: 'absolute', top: -3, right: -6,
                  minWidth: 15, height: 15, borderRadius: 8, padding: '0 4px',
                  background: raPalette.akane, color: raPalette.paper,
                  fontFamily: raFont.mono, fontSize: 9, lineHeight: '15px', textAlign: 'center',
                }}>{unread}</span>
              )}
            </div>
            <span style={{
              fontFamily: raFont.jpSerif, fontSize: 10, letterSpacing: 0.6,
              fontWeight: active ? 700 : 400,
            }}>{label}</span>
          </button>
        );
      })}
    </nav>
  );
}

// 画面本体（タブバーぶんの余白を確保）
function RaScreen({ children }) {
  return (
    <div style={{ paddingBottom: 'calc(78px + env(safe-area-inset-bottom))' }}>
      {children}
    </div>
  );
}

// セクション見出し（英字ラベル＋和文見出し）
function RaSectionHead({ label, jp, color = raPalette.akane, style }) {
  return (
    <div style={{ marginBottom: 14, ...style }}>
      <div style={{ fontFamily: raFont.mono, fontSize: 9.5, letterSpacing: 3, color }}>—— {label}</div>
      {jp && (
        <h2 style={{
          margin: '8px 0 0', fontFamily: raFont.jpSerif, fontSize: 20, fontWeight: 500,
          letterSpacing: '0.06em', color: raPalette.ink,
        }}>{jp}</h2>
      )}
    </div>
  );
}

// カード
function RaCard({ children, onClick, accent, style }) {
  return (
    <div onClick={onClick}
      style={{
        background: raPalette.card,
        border: `1px solid ${raPalette.ink}1a`,
        borderLeft: accent ? `3px solid ${accent}` : `1px solid ${raPalette.ink}1a`,
        cursor: onClick ? 'pointer' : 'default',
        overflow: 'hidden',
        ...style,
      }}>
      {children}
    </div>
  );
}

// タグ
function RaChip({ children, color = raPalette.muted, filled }) {
  return (
    <span style={{
      display: 'inline-block', padding: '3px 9px',
      fontFamily: raFont.mono, fontSize: 9.5, letterSpacing: 1.4,
      color: filled ? raPalette.paper : color,
      background: filled ? color : 'transparent',
      border: `1px solid ${color}${filled ? '' : '66'}`,
    }}>{children}</span>
  );
}

// 保存ボタン
function RaSaveButton({ id, size = 20 }) {
  const saved = raSaved.use();
  const on = saved.indexOf(id) >= 0;
  return (
    <button
      onClick={(e) => { e.stopPropagation(); raSaved.toggle(id); }}
      aria-label={on ? '保存を解除' : '保存する'} aria-pressed={on}
      style={raStyles.iconBtn}>
      <svg width={size} height={size} viewBox="0 0 24 24"
        fill={on ? raPalette.akane : 'none'} stroke={on ? raPalette.akane : raPalette.muted}
        strokeWidth="1.4" strokeLinejoin="round" style={{ display: 'block' }}>
        <path d="M6 4h12v17l-6-4.5L6 21z" />
      </svg>
    </button>
  );
}

// 共有ボタン（Web Share API、非対応時はURLをコピー）
function RaShareButton({ title, text, path, size = 20 }) {
  const [done, setDone] = React.useState(false);
  const share = async (e) => {
    e.stopPropagation();
    const url = window.location.origin + window.location.pathname + '#/' + String(path || '').replace(/^#?\/?/, '');
    try {
      if (navigator.share) {
        await navigator.share({ title: title, text: text, url: url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setDone(true);
      setTimeout(() => setDone(false), 1800);
    } catch (err) { /* 共有のキャンセルは無視 */ }
  };
  return (
    <button onClick={share} aria-label="共有する" style={raStyles.iconBtn}>
      <RaIcon name={done ? 'check' : 'share'} size={size} color={done ? raPalette.koke : raPalette.muted} />
    </button>
  );
}

// 一覧の行
function RaRow({ title, sub, meta, onClick, right, accent }) {
  return (
    <div onClick={onClick}
      style={{
        display: 'flex', alignItems: 'center', gap: 12,
        padding: '15px 4px',
        borderBottom: `1px solid ${raPalette.ink}14`,
        cursor: onClick ? 'pointer' : 'default',
      }}>
      {accent && <span style={{ width: 3, alignSelf: 'stretch', background: accent, flexShrink: 0 }} />}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: raFont.jpSerif, fontSize: 15, letterSpacing: 0.8, color: raPalette.ink, lineHeight: 1.5 }}>{title}</div>
        {sub && <div style={{ marginTop: 4, fontFamily: raFont.jpAlt, fontSize: 12.5, color: raPalette.muted, lineHeight: 1.6 }}>{sub}</div>}
        {meta && <div style={{ marginTop: 5, fontFamily: raFont.mono, fontSize: 9.5, letterSpacing: 1.6, color: raPalette.muted }}>{meta}</div>}
      </div>
      {right || <RaIcon name="chevron" size={16} color={`${raPalette.muted}`} />}
    </div>
  );
}

// 画像（読み込み前は縞のプレースホルダ）
function RaImage({ src, alt, ratio = '16 / 9', style }) {
  const [failed, setFailed] = React.useState(false);
  return (
    <div style={{
      width: '100%', aspectRatio: ratio, overflow: 'hidden',
      background: `repeating-linear-gradient(135deg, #e8e3da 0 10px, #ddd6c8 10px 20px)`,
      ...style,
    }}>
      {!failed && (
        <img src={raAsset(src)} alt={alt || ''} loading="lazy" onError={() => setFailed(true)}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      )}
    </div>
  );
}

// 読点で改行（和文が語の途中で折り返されるのを防ぐ）
function raBreakAtComma(text) {
  const parts = String(text).split('、');
  return parts.map((part, i) => (
    <React.Fragment key={i}>
      {part}{i < parts.length - 1 ? '、' : ''}{i < parts.length - 1 ? <br /> : null}
    </React.Fragment>
  ));
}

const raStyles = {
  iconBtn: {
    background: 'none', border: 'none', padding: 8, cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    color: raPalette.muted,
  },
  page: { padding: '22px 18px 8px' },
  lead: {
    fontFamily: raFont.jpAlt, fontSize: 13.5, lineHeight: 2, color: raPalette.muted,
    letterSpacing: 0.5, margin: '0 0 22px',
  },
  body: {
    fontFamily: raFont.jpAlt, fontSize: 14, lineHeight: 2.05, color: raPalette.ink,
    letterSpacing: 0.4, margin: 0,
  },
};

Object.assign(window, {
  raPalette, raFont, raAsset, raT, raStore, raSaved, raRead, raStyles,
  raParseHash, raNavigate, raBack, raBreakAtComma, RA_TABS,
  RaIcon, RaAppBar, RaTabBar, RaScreen, RaSectionHead, RaCard, RaChip,
  RaSaveButton, RaShareButton, RaRow, RaImage,
});
