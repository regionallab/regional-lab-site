// 自動生成ファイル — 編集しないでください。編集は app.jsx を直し、bash tools/build.sh を実行。
// HOME / ページ切り替えとスプラッシュ（旧 index.html のインラインスクリプト）
// ※ このファイルだけ即時関数で囲んでいます。中の const が、他ファイルが定義する
//    同名のグローバル関数（SaiVariant など）と衝突するのを避けるためです。
(function () {
  const {
    Backdrop,
    SaiVariant,
    SaiNav,
    SaiCTA,
    SaiAbout,
    SaiCompany,
    SaiNews,
    SaiPartners,
    SaiContact,
    SaiBusinessPage,
    MobileSite
  } = window;
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
      window.saiNavigate = id => {
        if (!PAGE_IDS.includes(id)) return;
        window.location.hash = id;
        setPage(id);
        // 事業概要は専用ページがないため、ホームの「三つの柱」セクションへスクロール
        window.scrollTo({
          top: 0,
          behavior: 'auto'
        });
      };
      const onHash = () => setPage(getPageFromHash());
      window.addEventListener('hashchange', onHash);
      window.saiOnLangChange = l => setLang(l);
      const mql = window.matchMedia('(max-width: 768px)');
      const onResize = e => setIsMobile(e.matches);
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
    function SubPage({
      children
    }) {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          fontFamily: '"Shippori Mincho", serif',
          background: window.saiBackdropOn() ? 'transparent' : '#f1ead8'
        }
      }, /*#__PURE__*/React.createElement(SaiNav, null), children, /*#__PURE__*/React.createElement(SaiCTA, null));
    }
    let body;
    if (isMobile) {
      body = /*#__PURE__*/React.createElement("div", {
        className: "mobile-shell"
      }, /*#__PURE__*/React.createElement(MobileSite, {
        page: page
      }));
    } else {
      let desktopBody;
      switch (page) {
        case 'about':
          desktopBody = /*#__PURE__*/React.createElement(SubPage, null, /*#__PURE__*/React.createElement(SaiAbout, null));
          break;
        case 'company':
          desktopBody = /*#__PURE__*/React.createElement(SubPage, null, /*#__PURE__*/React.createElement(SaiCompany, null));
          break;
        case 'news':
          desktopBody = /*#__PURE__*/React.createElement(SubPage, null, /*#__PURE__*/React.createElement(SaiNews, null));
          break;
        case 'partners':
          desktopBody = /*#__PURE__*/React.createElement(SubPage, null, /*#__PURE__*/React.createElement(SaiPartners, null));
          break;
        case 'contact':
          desktopBody = /*#__PURE__*/React.createElement(SubPage, null, /*#__PURE__*/React.createElement(SaiContact, null));
          break;
        case 'business':
          desktopBody = /*#__PURE__*/React.createElement(SubPage, null, /*#__PURE__*/React.createElement(SaiBusinessPage, null));
          break;
        case 'home':
        default:
          desktopBody = /*#__PURE__*/React.createElement(SaiVariant, null);
      }
      body = /*#__PURE__*/React.createElement("div", {
        className: "desktop-shell"
      }, desktopBody);
    }
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Backdrop, null), /*#__PURE__*/React.createElement("div", {
      className: "sai-app-body",
      key: lang
    }, body), !splashDone && /*#__PURE__*/React.createElement("img", {
      src: "assets/splash-noroshi.png",
      alt: "Regional Lab",
      className: "sai-splash-logo",
      style: {
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        display: 'block',
        // 画像は縦長なので、余白まで同じ若草色で埋めて全面その色に見せる
        background: '#d5d492',
        zIndex: 9999,
        pointerEvents: 'none'
      }
    }), /*#__PURE__*/React.createElement("style", null, `
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
      `));
  }
  ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})();
