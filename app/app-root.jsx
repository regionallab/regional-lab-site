// ==========================================================
// APP ROOT — ルーティング・アプリバー・タブバー・PWA まわり
// ==========================================================

window.RA_APP_VERSION = '1.0.0';

// 画面ごとのタイトル（アプリバーに表示）
function raTitleFor(route) {
  const d = window.siteData;
  if (route.tab === 'business' && route.view) {
    const b = d.business.filter((x) => raSlug(x.tag) === route.view)[0];
    return b ? b.jp : raT('事業概要');
  }
  if (route.tab === 'news' && route.view) return raT('お知らせ');
  if (route.tab === 'more' && route.view) {
    return {
      about: raT('私たちについて'), company: raT('会社概要'), partners: raT('パートナー'),
      contact: raT('お問い合わせ'), saved: raT('保存した項目'), search: raT('検索'),
      app: raT('アプリについて'),
    }[route.view] || raT('メニュー');
  }
  return null;  // タブのトップ画面はロゴを表示
}

function RaApp() {
  const [route, setRoute] = React.useState(raParseHash);
  const [lang, setLang] = React.useState(window.saiLang || 'ja');
  const [online, setOnline] = React.useState(navigator.onLine);
  const [installPrompt, setInstallPrompt] = React.useState(null);
  const [installHint, setInstallHint] = React.useState(false);
  const readIds = raRead.use();

  React.useEffect(() => {
    const onHash = () => { setRoute(raParseHash()); window.scrollTo({ top: 0, behavior: 'auto' }); };
    window.addEventListener('hashchange', onHash);

    // 言語切替（i18n.jsx の saiSetLang から呼ばれる）
    window.saiOnLangChange = (l) => setLang(l);

    const onOnline = () => setOnline(true);
    const onOffline = () => setOnline(false);
    window.addEventListener('online', onOnline);
    window.addEventListener('offline', onOffline);

    // ホーム画面に追加（Android / デスクトップ Chrome）
    const onBip = (e) => { e.preventDefault(); setInstallPrompt(e); setInstallHint(!raStore.get('installDismissed', false)); };
    window.addEventListener('beforeinstallprompt', onBip);
    window.addEventListener('appinstalled', () => { setInstallPrompt(null); setInstallHint(false); });

    if (!window.location.hash) raNavigate('home');

    return () => {
      window.removeEventListener('hashchange', onHash);
      window.removeEventListener('online', onOnline);
      window.removeEventListener('offline', onOffline);
      window.removeEventListener('beforeinstallprompt', onBip);
    };
  }, []);

  const install = async () => {
    if (!installPrompt) return;
    installPrompt.prompt();
    try { await installPrompt.userChoice; } catch (e) {}
    setInstallPrompt(null);
    setInstallHint(false);
  };

  const dismissInstall = () => { raStore.set('installDismissed', true); setInstallHint(false); };

  const unread = window.siteData.news.articles.filter((a) => readIds.indexOf('news:' + a.no) < 0).length;
  const title = raTitleFor(route);
  const isSub = Boolean(route.view);

  let screen;
  switch (route.tab) {
    case 'business':
      screen = route.view ? <RaBusinessDetail slug={route.view} /> : <RaBusinessList />;
      break;
    case 'events':
      screen = <RaEvents />;
      break;
    case 'news':
      screen = route.view ? <RaNewsDetail no={route.view} /> : <RaNewsList />;
      break;
    case 'more':
      switch (route.view) {
        case 'about':    screen = <RaAbout />; break;
        case 'company':  screen = <RaCompany />; break;
        case 'partners': screen = <RaPartners />; break;
        case 'contact':  screen = <RaContact />; break;
        case 'saved':    screen = <RaSavedScreen />; break;
        case 'search':   screen = <RaSearch />; break;
        case 'app':      screen = <RaAppInfo installPrompt={installPrompt} onInstall={install} online={online} />; break;
        default:         screen = <RaMore />;
      }
      break;
    case 'home':
    default:
      screen = <RaHome />;
  }

  return (
    <React.Fragment>
      <RaAppBar
        title={title}
        onBack={isSub ? raBack : null}
        right={
          <React.Fragment>
            <button onClick={() => raNavigate('more/search')} aria-label={raT('検索')} style={raStyles.iconBtn}>
              <RaIcon name="search" size={19} color={raPalette.ink} />
            </button>
            <button
              onClick={() => window.saiSetLang(window.saiLang === 'en' ? 'ja' : 'en')}
              aria-label="JP / EN"
              style={{ ...raStyles.iconBtn, fontFamily: raFont.mono, fontSize: 11, letterSpacing: 1.4, color: raPalette.ink }}>
              {lang === 'ja' ? 'EN' : 'JP'}
            </button>
          </React.Fragment>
        }
      />

      {!online && (
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8, padding: '9px 16px',
          background: raPalette.ink, color: raPalette.paper,
          fontFamily: raFont.jpAlt, fontSize: 12, letterSpacing: 0.6,
        }}>
          <RaIcon name="offline" size={15} color={raPalette.paper} />
          {raT('オフラインです。保存済みの内容を表示しています。')}
        </div>
      )}

      {/* 言語を変えたら key が変わり、画面全体を描き直す */}
      <div key={lang}>{screen}</div>

      {installHint && installPrompt && (
        <div style={{
          position: 'fixed', left: 12, right: 12, bottom: 'calc(74px + env(safe-area-inset-bottom))', zIndex: 70,
          display: 'flex', alignItems: 'center', gap: 12, padding: '13px 14px',
          background: raPalette.ink, color: raPalette.paper,
          boxShadow: '0 6px 24px rgba(31,26,20,0.28)',
        }}>
          <RaIcon name="download" size={19} color={raPalette.paper} />
          <div style={{ flex: 1, fontFamily: raFont.jpAlt, fontSize: 12.5, lineHeight: 1.7 }}>
            {raT('ホーム画面に追加すると、アプリとして開けます。')}
          </div>
          <button onClick={install} style={{
            padding: '8px 12px', border: 'none', cursor: 'pointer',
            background: raPalette.akane, color: raPalette.paper,
            fontFamily: raFont.jpSerif, fontSize: 12, letterSpacing: 1.2,
          }}>{raT('追加')}</button>
          <button onClick={dismissInstall} aria-label={raT('閉じる')} style={{ ...raStyles.iconBtn, padding: 4 }}>
            <RaIcon name="close" size={15} color={raPalette.paper} />
          </button>
        </div>
      )}

      <RaTabBar tab={route.tab} unread={unread} />
    </React.Fragment>
  );
}

Object.assign(window, { RaApp, raTitleFor });

ReactDOM.createRoot(document.getElementById('root')).render(<RaApp />);

// スプラッシュ（初回描画後にフェードアウト）
const raSplash = document.getElementById('ra-splash');
if (raSplash) {
  setTimeout(() => {
    raSplash.style.opacity = '0';
    setTimeout(() => raSplash.remove(), 600);
  }, 900);
}
