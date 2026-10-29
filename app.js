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

  // 下層ページの外枠。共通のヘッダーとフッターで中身を挟む。
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
      // 初回だけ、オープニングが明けるのを待ってから最初の画面を立ち上げる。
      // 明けた後は待ち時間を 0 にして、ページを戻ったときすぐ現れるようにする。
      document.documentElement.style.setProperty('--sai-hero-delay', '4.2s');
      const t = setTimeout(() => {
        setSplashDone(true);
        document.documentElement.style.setProperty('--sai-hero-delay', '0s');
      }, 5000);
      return () => clearTimeout(t);
    }, []);

    // 現す対象に印を付ける。ホームは帯ごとに className で直接指定しているが、
    // 下層ページは「この中身を一つずつ現す」という箱に sai-reveal-each を付けておき、
    // その直下の要素をここでまとめて対象にする（箱が入れ子のときは中だけを対象にする）。
    // 描画される前に印を付けるので、一瞬見えてから消えるようなちらつきは起きない。
    const saiTagReveal = () => {
      document.querySelectorAll('.sai-reveal-each > *').forEach(el => {
        if (!el.classList.contains('sai-reveal-each')) el.classList.add('sai-reveal');
      });
    };
    React.useLayoutEffect(() => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      document.documentElement.classList.add('sai-reveal-on');
      saiTagReveal();
    }, [page, lang, isMobile]);

    // スクロールで帯をふわりと現す。JS が動いたときだけ初期状態を透明にするので、
    // 万一 JS が止まっても中身が見えなくなることはない。
    React.useEffect(() => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('sai-in');
            io.unobserve(e.target);
          }
        });
      }, {
        threshold: 0.02,
        rootMargin: '0px 0px -5% 0px'
      });
      // 印を付けるのは切り替え直後の一度だけ。あとから差し替わった中身（お知らせの絞り込みなど）は
      // そのまま表示する。表示済みの帯の中で急に消えるのを避けるため、ここでは印を付けない。
      const scan = () => document.querySelectorAll('.sai-reveal:not(.sai-in)').forEach(el => io.observe(el));
      scan();
      const t1 = setTimeout(scan, 60);
      // 中身が差し替わっても、まだ現れていない帯を見失わないように拾い直す
      const mo = new MutationObserver(scan);
      mo.observe(document.body, {
        childList: true,
        subtree: true
      });
      // 取りこぼし防止：充分に時間が経っても現れていない帯は無条件で表示する
      const t2 = setTimeout(() => {
        document.querySelectorAll('.sai-reveal').forEach(el => el.classList.add('sai-in'));
      }, 20000);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        mo.disconnect();
        io.disconnect();
      };
    }, [page, lang, isMobile]);
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
    }, body), !splashDone &&
    /*#__PURE__*/
    // 若草色の地は最初から敷いておき、その上でロゴだけをゆっくり現す。
    // 地ごと薄く現すと、透けた背景写真が先に見えてしまうため。
    React.createElement("div", {
      className: "sai-splash",
      style: {
        position: 'fixed',
        inset: 0,
        background: '#d5d492',
        zIndex: 9999,
        pointerEvents: 'none'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "assets/splash-noroshi.png",
      alt: "Regional Lab",
      className: "sai-splash-logo",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        display: 'block'
      }
    })), /*#__PURE__*/React.createElement("style", null, `
        .sai-app-body { animation: saiHomeIn 5s ease-in-out forwards; }
        .sai-reveal-on .sai-reveal {
          opacity: 0;
          transform: translateY(180px) scale(0.88);
          transition: opacity 1700ms cubic-bezier(.16,.86,.3,1), transform 1700ms cubic-bezier(.16,.86,.3,1);
          will-change: opacity, transform;
        }
        .sai-reveal-on .sai-reveal.sai-in { opacity: 1; transform: none; will-change: auto; }
        @media (prefers-reduced-motion: reduce) {
          .sai-reveal-on .sai-reveal { opacity: 1; transform: none; transition: none; }
        }
        /* 最初の画面の各要素を、順に下から立ち上げる。
           初回はオープニングが明けてから始めたいので、待ち時間を変数で持つ。 */
        .sai-hero-piece {
          animation: saiHeroIn 1600ms cubic-bezier(.16,.86,.3,1) both;
          animation-delay: calc(var(--sai-hero-delay, 0s) + var(--sai-hero-step, 0s));
        }
        @keyframes saiHeroIn {
          from { opacity: 0; transform: translateY(86px) scale(0.94); }
          to   { opacity: 1; transform: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .sai-hero-piece { animation: none; }
        }
        /* 若草色の地。最初から出ていて、終わりに引いていく */
        .sai-splash { animation: saiSplashVeil 5s ease-in-out forwards; }
        /* ロゴ。2.5秒かけてゆっくり現れ、地と一緒に引いていく */
        .sai-splash-logo { animation: saiSplashLogo 5s ease-in-out forwards; }
        @keyframes saiHomeIn {
          0%, 76% { opacity: 0; }
          100%    { opacity: 1; }
        }
        @keyframes saiSplashVeil {
          0%, 70% { opacity: 1; }
          100%    { opacity: 0; }
        }
        @keyframes saiSplashLogo {
          0%   { opacity: 0; }
          50%  { opacity: 1; }
          100% { opacity: 1; }
        }
      `));
  }
  ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})();
