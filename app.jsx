// HOME / ページ切り替えとスプラッシュ（旧 index.html のインラインスクリプト）
// ※ このファイルだけ即時関数で囲んでいます。中の const が、他ファイルが定義する
//    同名のグローバル関数（SaiVariant など）と衝突するのを避けるためです。
(function () {

const { Backdrop, SaiVariant, SaiNav, SaiCTA, SaiAbout, SaiCompany, SaiNews, SaiPartners, SaiContact, SaiBusinessPage, MobileSite } = window;

const PAGE_IDS = ['home', 'about', 'company', 'business', 'news', 'contact', 'partners'];

function getPageFromHash() {
  const h = (window.location.hash || '').replace('#', '');
  return PAGE_IDS.includes(h) ? h : 'home';
}

function App() {
  const [page, setPage] = React.useState(getPageFromHash());
  const [splashDone, setSplashDone] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(() => window.matchMedia('(max-width: 768px)').matches);
  const [lang, setLang] = React.useState(window.saiLang || 'ja');

  React.useEffect(() => {
    window.saiNavigate = (id) => {
      if (!PAGE_IDS.includes(id)) return;
      window.location.hash = id;
      setPage(id);
      // 事業概要は専用ページがないため、ホームの「三つの柱」セクションへスクロール
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    const onHash = () => setPage(getPageFromHash());
    window.addEventListener('hashchange', onHash);
    window.saiOnLangChange = (l) => setLang(l);
    const mql = window.matchMedia('(max-width: 768px)');
    const onResize = (e) => setIsMobile(e.matches);
    mql.addEventListener('change', onResize);
    return () => {
      window.removeEventListener('hashchange', onHash);
      mql.removeEventListener('change', onResize);
    };
  }, []);

  React.useEffect(() => {
    const t = setTimeout(() => setSplashDone(true), 4000);
    return () => clearTimeout(t);
  }, []);

  // Sub-page renderer wraps the page content with the shared nav + footer
  function SubPage({ children }) {
    return (
      <div style={{ fontFamily: '"Shippori Mincho", serif', background: window.saiBackdropOn() ? 'transparent' : '#f1ead8' }}>
        <SaiNav />
        {children}
        <SaiCTA />
      </div>
    );
  }

  let body;
  if (isMobile) {
    body = <div className="mobile-shell"><MobileSite page={page} /></div>;
  } else {
    let desktopBody;
    switch (page) {
      case 'about':    desktopBody = <SubPage><SaiAbout /></SubPage>; break;
      case 'company':  desktopBody = <SubPage><SaiCompany /></SubPage>; break;
      case 'news':     desktopBody = <SubPage><SaiNews /></SubPage>; break;
      case 'partners': desktopBody = <SubPage><SaiPartners /></SubPage>; break;
      case 'contact':  desktopBody = <SubPage><SaiContact /></SubPage>; break;
      case 'business': desktopBody = <SubPage><SaiBusinessPage /></SubPage>; break;
      case 'home':
      default:         desktopBody = <SaiVariant />;
    }
    body = <div className="desktop-shell">{desktopBody}</div>;
  }

  return (
    <React.Fragment>
      <Backdrop />
      <div className="sai-app-body" key={lang}>
        {body}
      </div>
      {!splashDone && (
        <img
          src="assets/splash-noroshi.png"
          alt="Regional Lab"
          className="sai-splash-logo"
          style={{
            position: 'fixed', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'contain', display: 'block',
            zIndex: 9999, pointerEvents: 'none',
          }}
        />
      )}
      <style>{`
        .sai-app-body { animation: saiHomeIn 4s ease-in-out forwards; }
        .sai-splash-logo { animation: saiSplashLogo 4s ease-in-out forwards; }
        @keyframes saiHomeIn {
          0%, 75% { opacity: 0; }
          100%    { opacity: 1; }
        }
        @keyframes saiSplashLogo {
          0%   { opacity: 0; }
          25%  { opacity: 1; }
          50%  { opacity: 1; }
          75%  { opacity: 0; }
          100% { opacity: 0; }
        }
      `}</style>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

})();
