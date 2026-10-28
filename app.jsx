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

  // スクロールで帯をふわりと現す。JS が動いたときだけ初期状態を透明にするので、
  // 万一 JS が止まっても中身が見えなくなることはない。
  React.useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const root = document.documentElement;
    root.classList.add('sai-reveal-on');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('sai-in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.02, rootMargin: '0px 0px -8% 0px' });
    const scan = () => document.querySelectorAll('.sai-reveal:not(.sai-in)').forEach((el) => io.observe(el));
    const t1 = setTimeout(scan, 60);
    // 取りこぼし防止：充分に時間が経っても現れていない帯は無条件で表示する
    const t2 = setTimeout(() => {
      document.querySelectorAll('.sai-reveal').forEach((el) => el.classList.add('sai-in'));
    }, 20000);
    return () => { clearTimeout(t1); clearTimeout(t2); io.disconnect(); };
  }, [page, lang, isMobile]);

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
            // 画像は縦長なので、余白まで同じ若草色で埋めて全面その色に見せる
            background: '#d5d492',
            zIndex: 9999, pointerEvents: 'none',
          }}
        />
      )}
      <style>{`
        .sai-app-body { animation: saiHomeIn 4s ease-in-out forwards; }
        .sai-reveal-on .sai-reveal {
          opacity: 0;
          transform: translateY(132px) scale(0.92);
          transition: opacity 1500ms cubic-bezier(.16,.86,.3,1), transform 1500ms cubic-bezier(.16,.86,.3,1);
          will-change: opacity, transform;
        }
        .sai-reveal-on .sai-reveal.sai-in { opacity: 1; transform: none; }
        @media (prefers-reduced-motion: reduce) {
          .sai-reveal-on .sai-reveal { opacity: 1; transform: none; transition: none; }
        }
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
