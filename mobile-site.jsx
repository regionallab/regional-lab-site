// ==========================================================
// MOBILE SITE — Regional Lab 専用モバイルレイアウト
// ==========================================================

const mPalette = {
  paper: '#f1ead8',
  paperDeep: '#e6dcc0',
  ink: '#1f1a14',
  ai: '#1f3552',
  koke: '#5a6b3d',
  akane: '#9a3324',
  muted: '#766a52',
};
const mFont = {
  jpSerif: '"Zen Old Mincho", "Noto Serif JP", serif',
  jpAlt: '"Shippori Mincho", "Noto Serif JP", serif',
  enSerif: '"Cormorant Garamond", serif',
  mono: '"JetBrains Mono", ui-monospace, monospace',
};

// ----------------------------------------------------------
// Mobile Nav (hamburger drawer)
// ----------------------------------------------------------
function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const navItems = [
    ['ホーム', 'home'],
    ['私たちについて', 'about'],
    ['会社概要', 'company'],
    ['お知らせ', 'news'],
    ['パートナー', 'partners'],
    ['お問い合わせ', 'contact'],
  ];
  return (
    <React.Fragment>
      <div style={{
        position: 'sticky', top: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '14px 18px',
        background: mPalette.paper,
        borderBottom: `1px solid ${mPalette.ink}22`,
      }}>
        <div onClick={() => { window.saiNavigate && window.saiNavigate('home'); setOpen(false); }} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 44, height: 44, borderRadius: 22, overflow: 'hidden', flexShrink: 0 }}>
            <img src="assets/logo-regionallab.jpg" alt="Regional Lab" style={{ width: '135%', height: '135%', objectFit: 'cover', marginLeft: '-17.5%', marginTop: '-17.5%', display: 'block' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1, gap: 3 }}>
            <div style={{ fontFamily: mFont.jpSerif, fontSize: 15, letterSpacing: 2, color: mPalette.ink }}>Regional Lab</div>
            <div style={{ fontFamily: mFont.jpSerif, fontSize: 11, letterSpacing: 2, color: mPalette.ink, paddingLeft: 20 }}>Minamiuonuma</div>
          </div>
        </div>
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          style={{ background: 'none', border: 'none', padding: 8, cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 5 }}
        >
          <span style={{ width: 24, height: 2, background: mPalette.ink, display: 'block', transition: 'all 0.2s', transform: open ? 'translateY(7px) rotate(45deg)' : 'none' }}></span>
          <span style={{ width: 24, height: 2, background: mPalette.ink, display: 'block', opacity: open ? 0 : 1, transition: 'all 0.2s' }}></span>
          <span style={{ width: 24, height: 2, background: mPalette.ink, display: 'block', transition: 'all 0.2s', transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none' }}></span>
        </button>
      </div>
      {open && (
        <div style={{
          position: 'fixed', top: 73, left: 0, right: 0, bottom: 0, zIndex: 99,
          background: mPalette.paper,
          padding: '40px 24px',
          display: 'flex', flexDirection: 'column', gap: 4,
        }}>
          {navItems.map(([jp, en]) => (
            <div
              key={en}
              onClick={() => { window.saiNavigate && window.saiNavigate(en); setOpen(false); }}
              style={{
                padding: '18px 8px',
                borderBottom: `1px solid ${mPalette.ink}22`,
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                cursor: 'pointer',
              }}
            >
              <span style={{ fontFamily: mFont.jpSerif, fontSize: 18, color: mPalette.ink, letterSpacing: 2 }}>{jp}</span>
              <span style={{ fontFamily: mFont.mono, fontSize: 10, letterSpacing: 2, color: mPalette.akane }}>{en.toUpperCase()} →</span>
            </div>
          ))}
        </div>
      )}
    </React.Fragment>
  );
}

// ----------------------------------------------------------
// Mobile Footer (compact CTA + sitemap)
// ----------------------------------------------------------
function MobileFooter() {
  const navItems = [
    ['私たちについて', 'about'],
    ['会社概要', 'company'],
    ['お知らせ', 'news'],
    ['パートナー', 'partners'],
    ['お問い合わせ', 'contact'],
  ];
  return (
    <div style={{ background: mPalette.paper, padding: '64px 24px 32px' }}>
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <div style={{ fontFamily: mFont.mono, fontSize: 10, letterSpacing: 3, color: mPalette.akane, marginBottom: 16 }}>—— TOGETHER</div>
        <h2 style={{ fontFamily: mFont.jpSerif, fontSize: 28, fontWeight: 400, margin: 0, color: mPalette.ink, letterSpacing: '0.04em', lineHeight: 1.5 }}>
          その地に、もう一度、<br /><span style={{ color: mPalette.ai }}>光を。</span>
        </h2>
      </div>
      <div style={{ borderTop: `1px solid ${mPalette.ink}33`, paddingTop: 28, display: 'flex', flexDirection: 'column', gap: 2 }}>
        {navItems.map(([jp, en]) => (
          <div
            key={en}
            onClick={() => window.saiNavigate && window.saiNavigate(en)}
            style={{
              padding: '14px 4px', borderBottom: `1px solid ${mPalette.ink}11`,
              display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer',
            }}
          >
            <span style={{ fontFamily: mFont.jpSerif, fontSize: 15, letterSpacing: 2, color: mPalette.ink }}>{jp}</span>
            <span style={{ fontFamily: mFont.mono, fontSize: 9, letterSpacing: 2, color: mPalette.akane }}>{en.toUpperCase()}</span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 32, paddingTop: 20, borderTop: `1px solid ${mPalette.ink}22`, display: 'flex', flexDirection: 'column', gap: 8, fontFamily: mFont.mono, fontSize: 10, letterSpacing: 1.5, color: mPalette.muted, textAlign: 'center' }}>
        <span>© REGIONAL LAB 2026</span>
        <span>新潟県南魚沼市 × 東京 × 宮城</span>
      </div>
    </div>
  );
}

// ----------------------------------------------------------
// Mobile Page Header (used by sub-pages)
// ----------------------------------------------------------
function MobilePageHeader({ no, jp, en, lead }) {
  return (
    <div style={{ background: mPalette.paperDeep, padding: '48px 24px 40px', borderBottom: `1px solid ${mPalette.ink}22` }}>
      <div style={{ fontFamily: mFont.mono, fontSize: 10, letterSpacing: 3, color: mPalette.akane, marginBottom: 14 }}>SECTION {no} — {en.toUpperCase()}</div>
      <h1 style={{ fontFamily: mFont.jpSerif, fontSize: 40, fontWeight: 500, margin: 0, color: mPalette.ink, letterSpacing: '0.05em', lineHeight: 1.2 }}>{jp}</h1>
      <div style={{ fontFamily: mFont.enSerif, fontStyle: 'italic', fontSize: 20, color: mPalette.muted, marginTop: 8 }}>{en}</div>
      {lead && <p style={{ marginTop: 20, fontFamily: mFont.jpSerif, fontSize: 14, color: mPalette.ink, lineHeight: 2, margin: '20px 0 0' }}>{lead}</p>}
    </div>
  );
}

// ----------------------------------------------------------
// HOME
// ----------------------------------------------------------
function MobileHome() {
  const business = [
    { tag: 'Re.Event', jp: 'イベント事業', body: '行政・地元企業・地元住人との参画で、地域課題を扱うアイデアソンやビジコンを開催。学生に「人生の分岐点」となる経験を提供します。', accent: mPalette.akane, key: '人生の分岐点', img: 'assets/re-event.jpg' },
    { tag: 'Re.Lab', jp: 'コミュニティ事業', body: '招待制・審査制のコミュニティで、ビジネス知識、企業研究、社長1on1、コーチング等提供。卒業後、必ず何者かになっている — そんな未来を確約します。', accent: mPalette.ai, key: '何者かになる', img: 'assets/re-lab.jpg' },
    { tag: 'Regional.', jp: 'アパレル事業', body: '地方の伝統産品を現代の需要へと再構築。日本を代表する誇れるブランドとして、伝統と未来を形にして残します。', accent: mPalette.koke, key: '形として残す', img: 'assets/regional.jpg' },
  ];
  const events = [
    ['2024.12', '地方創生アイデアソン', 'Online'],
    ['2025.03', '地方創生ビジコン', '東京スクエアガーデン'],
    ['2025.09', '第1回ビジコン in 秋保', '宮城・蘭亭旅館'],
    ['2025.09', '地域創生×国際交流', 'Online'],
    ['2025.12', '地方産品大忘年会', '東京スクエアガーデン'],
    ['2026.03', '第2回ビジコン in 蔵王', 'メルキュール宮城蔵王'],
  ];

  return (
    <div style={{ background: mPalette.paper }}>
      {/* HERO */}
      <div style={{ padding: '40px 24px 56px', background: `linear-gradient(180deg, ${mPalette.paper} 0%, ${mPalette.paperDeep} 100%)`, position: 'relative' }}>
        <div style={{ fontFamily: mFont.mono, fontSize: 10, letterSpacing: 3, color: mPalette.akane, marginBottom: 24 }}>—— 新潟県南魚沼市を支え続ける企業へ</div>
        <h1 style={{ fontFamily: mFont.jpSerif, fontSize: 44, fontWeight: 500, margin: 0, color: mPalette.ink, letterSpacing: '0.04em', lineHeight: 1.3 }}>
          <span style={{ display: 'block', whiteSpace: 'nowrap' }}>地方の未来を、</span>
          <span style={{ display: 'block', whiteSpace: 'nowrap' }}>彩る組織へ</span>
        </h1>
        <div style={{ marginTop: 32, width: '100%', aspectRatio: '4/5', overflow: 'hidden' }}>
          <img src="assets/hero-logo.jpg" alt="Regional Lab" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
      </div>

      {/* MISSION */}
      <div style={{ background: mPalette.paperDeep, padding: '64px 24px' }}>
        <div style={{ fontFamily: mFont.mono, fontSize: 10, letterSpacing: 3, color: mPalette.akane, marginBottom: 18 }}>—— OUR MISSION</div>
        <h2 style={{ fontFamily: mFont.jpSerif, fontSize: 32, fontWeight: 400, color: mPalette.ink, letterSpacing: '0.04em', lineHeight: 1.5, margin: 0 }}>
          地方の<span style={{ color: mPalette.akane }}>礎</span>として、<br />
          地方の<span style={{ color: mPalette.ai }}>未来</span>を彩る。
        </h2>
        <p style={{ marginTop: 28, fontFamily: mFont.jpSerif, fontSize: 14, color: mPalette.ink, lineHeight: 2, margin: '28px 0 0' }}>
          私たちは、新潟県南魚沼市を起点に、地方の魅力を再発見し、再構築し、未来へと継承していく組織です。
          イベント、コミュニティ、アパレル — 三つの事業で、地方の可能性を引き出します。
        </p>
      </div>

      {/* BUSINESS — 三つの柱 */}
      <div style={{ padding: '64px 24px', background: mPalette.paper }}>
        <div style={{ marginBottom: 36 }}>
          <h2 style={{ fontFamily: mFont.jpSerif, fontSize: 40, fontWeight: 400, margin: 0, color: mPalette.ink, letterSpacing: '0.04em' }}>
            三つの<span style={{ color: mPalette.akane }}>柱</span>
          </h2>
          <div style={{ fontFamily: mFont.mono, fontSize: 10, letterSpacing: 3, color: mPalette.muted, marginTop: 6 }}>OUR BUSINESS — 03 SECTORS</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
          {business.map((s, i) => (
            <div key={s.tag} style={{ background: mPalette.paperDeep, padding: 20, position: 'relative' }}>
              <div style={{ position: 'absolute', top: -8, left: 20, fontFamily: mFont.mono, fontSize: 10, letterSpacing: 3, background: mPalette.paper, padding: '4px 8px', color: s.accent }}>
                0{i+1} / 03
              </div>
              <div style={{ width: '100%', aspectRatio: '16/10', overflow: 'hidden', marginTop: 8 }}>
                <img src={s.img} alt={s.tag} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ marginTop: 18, fontFamily: mFont.jpAlt, fontSize: 26, color: s.accent, letterSpacing: 1 }}>{s.tag}</div>
              <div style={{ fontFamily: mFont.jpSerif, fontSize: 13, letterSpacing: 3, color: mPalette.muted, marginTop: 4 }}>{s.jp}</div>
              <p style={{ fontFamily: mFont.jpSerif, fontSize: 14, lineHeight: 2, color: mPalette.ink, marginTop: 14, margin: '14px 0 16px' }}>
                {s.body}
              </p>
              <div style={{
                padding: '10px 14px', background: s.accent, color: mPalette.paper,
                alignSelf: 'flex-start', display: 'inline-block',
                fontFamily: mFont.jpSerif, fontSize: 13, letterSpacing: 3,
              }}>
                「{s.key}」
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TIMELINE */}
      <div style={{ background: mPalette.paperDeep, padding: '64px 24px' }}>
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ fontFamily: mFont.jpSerif, fontSize: 36, fontWeight: 400, margin: 0, color: mPalette.ink, letterSpacing: '0.04em' }}>歩み</h2>
          <div style={{ fontFamily: mFont.mono, fontSize: 10, letterSpacing: 3, color: mPalette.muted, marginTop: 6 }}>OUR JOURNEY</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {events.map(([date, title, place]) => (
            <div key={date} style={{ background: mPalette.paper, padding: 18, display: 'flex', flexDirection: 'column', gap: 6 }}>
              <div style={{ fontFamily: mFont.mono, fontSize: 11, letterSpacing: 2, color: mPalette.akane }}>{date}</div>
              <div style={{ fontFamily: mFont.jpSerif, fontSize: 16, color: mPalette.ink, letterSpacing: 1 }}>{title}</div>
              <div style={{ fontFamily: mFont.mono, fontSize: 10, letterSpacing: 2, color: mPalette.muted }}>{place}</div>
            </div>
          ))}
        </div>
      </div>

      <MobileFooter />
    </div>
  );
}

// ----------------------------------------------------------
// ABOUT
// ----------------------------------------------------------
function MobileAbout() {
  const members = [
    { role: '代表 / Founder & CEO', jp: '木寺 蒼真', en: 'Kidera Soma', bio: '南魚沼に出会い、地方創生に身を投じる。観光客から地域課題と向き合い、日本の地方の未来を彩る組織へ。' },
    { role: '副代表 / Co-founder & COO', jp: '中原 光輝', en: 'Nakahara Koki', bio: '事業戦略を促進し、組織の調和を築き、事業を並行で成長へと導く。' },
    { role: 'Re.Event 事業統括責任者', jp: '渡邉 輝', en: 'Watanabe Akira', bio: '事業戦略を促進し統括。より事業を解像度があり、再現性があるものに落とし込む。' },
    { role: 'Re.Lab 事業統括責任者', jp: '峯 奏音', en: 'Mine Kanato', bio: '事業戦略を促進し統括。より事業を解像度があり、再現性があるものに落とし込む。' },
  ];
  return (
    <div style={{ background: mPalette.paper }}>
      <MobilePageHeader no="01" jp="私たちについて" en="About" lead="地方の礎として、地方の未来を彩る。Regional Labの理念とメンバーをご紹介します。" />
      <div style={{ padding: '48px 24px' }}>
        <div style={{ marginBottom: 36 }}>
          <div style={{ fontFamily: mFont.mono, fontSize: 10, letterSpacing: 3, color: mPalette.akane, marginBottom: 14 }}>—— OUR PURPOSE</div>
          <h2 style={{ fontFamily: mFont.jpSerif, fontSize: 26, fontWeight: 500, margin: '0 0 20px', color: mPalette.ink, letterSpacing: '0.04em', lineHeight: 1.5 }}>
            個の研鑽をもって、<br />日本の礎であり続ける。
          </h2>
          <p style={{ fontFamily: mFont.jpSerif, fontSize: 14, color: mPalette.ink, lineHeight: 2, margin: 0 }}>
            新潟県南魚沼市を起点に、日本の地方の魅力を永続させる。一観光客の懐疑から、創業へ。地方の課題に真正面から向き合い、解決の手段を生み出していきます。
          </p>
        </div>
        <div style={{ marginTop: 48 }}>
          <div style={{ fontFamily: mFont.mono, fontSize: 10, letterSpacing: 3, color: mPalette.akane, marginBottom: 18 }}>—— MEMBERS</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {members.map(m => (
              <div key={m.jp} style={{ background: mPalette.paperDeep, padding: 22 }}>
                <div style={{ fontFamily: mFont.mono, fontSize: 10, letterSpacing: 2, color: mPalette.akane, marginBottom: 10 }}>{m.role}</div>
                <div style={{ fontFamily: mFont.jpSerif, fontSize: 22, color: mPalette.ink, letterSpacing: '0.05em' }}>{m.jp}</div>
                <div style={{ fontFamily: mFont.enSerif, fontStyle: 'italic', fontSize: 16, color: mPalette.muted, marginTop: 4 }}>{m.en}</div>
                <p style={{ fontFamily: mFont.jpSerif, fontSize: 13, color: mPalette.ink, lineHeight: 1.9, marginTop: 14, margin: '14px 0 0' }}>{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <MobileFooter />
    </div>
  );
}

// ----------------------------------------------------------
// COMPANY
// ----------------------------------------------------------
function MobileCompany() {
  const services = [
    { tag: 'Re.Event', jp: 'イベント事業', body: '地域の課題解決の機会を創出しながら、参加者である学生に対して成長の分岐点を提供。', color: mPalette.akane },
    { tag: 'Re.Lab', jp: 'コミュニティ事業', body: 'ビジネス知識・情報・コーチング等を提供し、人事コンサルティングを行う。', color: mPalette.ai },
    { tag: 'Regional.', jp: 'アパレル事業', body: '地方の伝統産品の歴史を引き継ぎながら、時代と共に変化する需要あるものへと加工。', color: mPalette.koke },
  ];
  const info = [
    ['会社名', '株式会社 リージョナルラボ'],
    ['英名', 'Regional Lab, Inc.'],
    ['設立', '2024年10月09日'],
    ['代表', '木寺 蒼真'],
    ['資本金', '7,500,000円'],
    ['役員', '7名'],
  ];
  const offices = [
    ['本社', '〒949-7302  新潟県南魚沼市浦佐 2479'],
    ['東京支社 ①', '〒150-0001  東京都渋谷区神宮前 6-23-4'],
    ['東京支社 ②', '〒171-0021  東京都豊島区西池袋 5-20-4'],
  ];
  return (
    <div style={{ background: mPalette.paper }}>
      <MobilePageHeader no="02" jp="会社概要" en="Company" lead={<><span style={{ display: 'block' }}>株式会社リージョナルラボの事業内容、会社情報、</span><span style={{ display: 'block' }}>ビジョンをご紹介します。</span></>} />
      <div style={{ padding: '48px 24px' }}>
        <div style={{ marginBottom: 40 }}>
          <div style={{ fontFamily: mFont.mono, fontSize: 10, letterSpacing: 3, color: mPalette.akane, marginBottom: 14 }}>SECTION 01 — BUSINESS</div>
          <h2 style={{ fontFamily: mFont.jpSerif, fontSize: 28, margin: '0 0 24px', color: mPalette.ink, letterSpacing: '0.04em', fontWeight: 500 }}>事業紹介</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {services.map(s => (
              <div key={s.tag} style={{ background: mPalette.paperDeep, padding: 20, borderTop: `2px solid ${s.color}` }}>
                <div style={{ fontFamily: mFont.jpAlt, fontSize: 22, color: s.color, letterSpacing: 1 }}>{s.tag}</div>
                <div style={{ fontFamily: mFont.jpSerif, fontSize: 13, letterSpacing: 3, color: mPalette.muted, marginTop: 4 }}>{s.jp}</div>
                <p style={{ fontFamily: mFont.jpSerif, fontSize: 13, lineHeight: 1.9, color: mPalette.ink, marginTop: 12, margin: '12px 0 0' }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: 40 }}>
          <div style={{ fontFamily: mFont.mono, fontSize: 10, letterSpacing: 3, color: mPalette.akane, marginBottom: 14 }}>SECTION 02 — CORPORATE PROFILE</div>
          <h2 style={{ fontFamily: mFont.jpSerif, fontSize: 28, margin: '0 0 24px', color: mPalette.ink, letterSpacing: '0.04em', fontWeight: 500 }}>会社情報</h2>
          <div style={{ background: mPalette.paperDeep, padding: 22, display: 'flex', flexDirection: 'column', gap: 14 }}>
            {info.map(([k, v]) => (
              <div key={k} style={{ display: 'flex', flexDirection: 'column', gap: 4, paddingBottom: 12, borderBottom: `1px solid ${mPalette.ink}22` }}>
                <div style={{ fontFamily: mFont.mono, fontSize: 10, letterSpacing: 2, color: mPalette.akane }}>{k.toUpperCase()}</div>
                <div style={{ fontFamily: mFont.jpSerif, fontSize: 14, color: mPalette.ink, letterSpacing: 1 }}>{v}</div>
              </div>
            ))}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ fontFamily: mFont.mono, fontSize: 10, letterSpacing: 2, color: mPalette.akane }}>OFFICES</div>
              {offices.map(([k, v]) => (
                <div key={k} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <span style={{ background: mPalette.akane, color: mPalette.paper, fontFamily: mFont.jpSerif, fontSize: 11, letterSpacing: 2, padding: '4px 10px', alignSelf: 'flex-start' }}>{k}</span>
                  <div style={{ fontFamily: mFont.jpSerif, fontSize: 13, color: mPalette.ink, lineHeight: 1.7 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <MobileFooter />
    </div>
  );
}

// ----------------------------------------------------------
// NEWS
// ----------------------------------------------------------
function MobileNews() {
  const articles = [
    {
      no: '01',
      date: '2026.05.10',
      cat: 'PRODUCT',
      catColor: mPalette.ai,
      title: 'Re.Lab バージョン 2.0 リリースのお知らせ',
      lead: 'コミュニティの根幹を見直し、より個に寄り添うコーチング体験へ。新たな招待制システムと選抜プロセスを実装しました。',
      body: '個別最適化された伴走、企業研究会議のオンライン化、コーチングログのアーカイブ機能など、卒業後の進路実現をより強力にサポートします。',
      img: 'assets/news-relab-v2.jpg',
    },
    {
      no: '02',
      date: '2026.05.10',
      cat: 'PRODUCT',
      catColor: mPalette.akane,
      title: 'Re.Event「Event Lab」リリースのお知らせ',
      lead: 'イベント主催者の集客課題を解決する、質と集客力を両立した次世代プラットフォームが誕生。',
      body: 'Event Lab は、イベント開催における集客のお悩みを解決する集客プラットフォームです。質の高いイベント情報の閲覧、質の高い学生との接点、(株)遊然様提供のマーケティング商材の学習機会、そして集客を確約するサービスまで ─ イベントに特化した魅力ある場をご用意しました。',
      img: 'assets/news-event-lab.jpg',
    },
    {
      no: '03',
      date: '2026.04.20',
      cat: 'EVENT',
      catColor: mPalette.koke,
      title: '第3回 地方創生ビジネスコンテスト 9月開催のお知らせ',
      lead: '地域密着型の本質的な地方創生ビジコン、第3回の開催地・日程が決定しました。',
      body: '第3回となる今回も、対象地域に深く根を下ろし、2泊3日の没入型プログラムとして実施します。詳細は順次お知らせいたします。',
      img: 'assets/news-bizcon3.jpg',
    },
    {
      no: '04',
      date: '2026.04.15',
      cat: 'EVENT',
      catColor: mPalette.akane,
      title: '第2回 地方産品大忘年会、今年も年末に開催決定',
      lead: '日本各地の特産品を持ち寄り、垣根を超えた交流の場を、今年も東京にて。',
      body: '昨年好評をいただいた地方産品大忘年会、第2回も2026年末に開催いたします。学生、社会人、社長 ─ 立場の異なる方々が地方の魅力を味わいながら交わる、特別な一夜を演出します。',
      img: 'assets/news-bonenkai2.jpg',
    },
  ];
  return (
    <div style={{ background: mPalette.paper }}>
      <MobilePageHeader no="03" jp="お知らせ" en="News" lead="プロダクト、イベント、メディア掲載 ─ Regional Lab からの最新のお知らせです。" />
      <div style={{ padding: '40px 24px 48px' }}>
        <div style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
          {['ALL', 'PRODUCT', 'EVENT', 'PRESS'].map((c, i) => (
            <div key={c} style={{
              padding: '6px 14px',
              border: `1px solid ${mPalette.ink}`,
              background: i === 0 ? mPalette.ink : 'transparent',
              color: i === 0 ? mPalette.paper : mPalette.ink,
              fontFamily: mFont.mono, fontSize: 10, letterSpacing: 2,
            }}>{c}</div>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {articles.map(a => (
            <div key={a.no} style={{
              background: mPalette.paperDeep,
              padding: 20,
              display: 'flex', flexDirection: 'column', gap: 14,
              borderLeft: `4px solid ${a.catColor}`,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                <span style={{ fontFamily: mFont.mono, fontSize: 10, letterSpacing: 2, color: mPalette.muted }}>{a.date}</span>
                <span style={{ fontFamily: mFont.mono, fontSize: 9, letterSpacing: 2, color: a.catColor, border: `1px solid ${a.catColor}`, padding: '3px 8px' }}>{a.cat}</span>
                <span style={{ fontFamily: mFont.enSerif, fontStyle: 'italic', fontSize: 13, color: mPalette.muted, marginLeft: 'auto' }}>No. {a.no}</span>
              </div>
              {a.img && (
                <div style={{ width: '100%', aspectRatio: '4/3', overflow: 'hidden' }}>
                  <img src={a.img} alt={a.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              )}
              <h3 style={{ fontFamily: mFont.jpSerif, fontSize: 17, fontWeight: 500, margin: 0, letterSpacing: '0.04em', lineHeight: 1.55 }}>{a.title}</h3>
              <p style={{ fontFamily: mFont.jpSerif, fontSize: 13, lineHeight: 1.95, color: mPalette.akane, margin: 0 }}>{a.lead}</p>
              <p style={{ fontSize: 12, lineHeight: 2, color: mPalette.ink, margin: 0 }}>{a.body}</p>
              <div style={{ fontFamily: mFont.enSerif, fontStyle: 'italic', fontSize: 13, color: mPalette.ink, borderBottom: `1px solid ${mPalette.ink}`, display: 'inline-block', alignSelf: 'flex-start', paddingBottom: 2 }}>
                Read more →
              </div>
            </div>
          ))}
        </div>
      </div>
      <MobileFooter />
    </div>
  );
}

// ----------------------------------------------------------
// PARTNERS
// ----------------------------------------------------------
function MobilePartners() {
  const partners = [
    {
      no: '01',
      name: 'H.O.I.Consulting 株式会社',
      en: 'H.O.I.Consulting, Inc.',
      relation: 'イベント支援・Re.Lab連携',
      body: 'イベント開催の場所提供と後援、Re.Labとの連携において、長期パートナーシップを構築。',
      tags: ['イベント支援', 'コーチング', 'Re.Lab連携'],
      color: mPalette.ai,
      url: 'https://eichi-oi.co.jp/company/',
    },
    {
      no: '02',
      name: '株式会社 遊然',
      en: 'Yuzen, Inc.',
      relation: 'マーケティング教材支援・イベント共催',
      body: 'ビジネスコンテストの共催、Event Labへのマーケティング教材提供等で連携。',
      tags: ['マーケティング', 'イベント共催', 'Event Lab連携'],
      color: mPalette.akane,
      url: 'https://yuu-zen.co.jp/',
    },
    {
      no: '03',
      name: '地方創生団体 リーボシ',
      en: 'Reboshi',
      relation: '地方創生・コミュニティ連携',
      body: '地方産品大忘年会の共催、地方創生における幅広い連携を構築。',
      tags: ['地方創生', 'コミュニティ', 'イベント共催'],
      color: mPalette.koke,
      url: 'https://campuslink.studio.site/notes/3-gXChyH',
    },
  ];
  return (
    <div style={{ background: mPalette.paper }}>
      <MobilePageHeader no="04" jp="パートナー" en="Partners" lead="共に地方の未来を彩る、私たちの大切なパートナー様をご紹介します。" />
      <div style={{ padding: '48px 24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          {partners.map(p => (
            <div key={p.no} style={{ background: mPalette.paperDeep, padding: 22, display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 56, height: 56, borderRadius: 28, background: p.color, color: mPalette.paper, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: mFont.jpSerif, fontSize: 22, flexShrink: 0 }}>{p.no}</div>
                <div>
                  <div style={{ fontFamily: mFont.mono, fontSize: 9, letterSpacing: 2, color: p.color, marginBottom: 4 }}>{p.relation}</div>
                  <div style={{ fontFamily: mFont.jpSerif, fontSize: 17, color: mPalette.ink, letterSpacing: '0.04em', lineHeight: 1.4 }}>{p.name}</div>
                  <div style={{ fontFamily: mFont.enSerif, fontStyle: 'italic', fontSize: 13, color: mPalette.muted }}>{p.en}</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {p.tags.map(t => (
                  <span key={t} style={{ fontFamily: mFont.jpSerif, fontSize: 10, letterSpacing: 1.5, padding: '4px 8px', border: `1px solid ${mPalette.ink}55`, color: mPalette.ink }}>{t}</span>
                ))}
              </div>
              <p style={{ fontFamily: mFont.jpSerif, fontSize: 13, lineHeight: 1.9, color: mPalette.ink, margin: 0 }}>{p.body}</p>
              <a href={p.url} target="_blank" rel="noopener noreferrer" style={{ fontFamily: mFont.enSerif, fontStyle: 'italic', fontSize: 14, color: mPalette.ai, borderBottom: `1px solid ${mPalette.ai}`, alignSelf: 'flex-start', paddingBottom: 2, textDecoration: 'none' }}>
                View partner →
              </a>
            </div>
          ))}
        </div>
      </div>
      <MobileFooter />
    </div>
  );
}

// ----------------------------------------------------------
// CONTACT
// ----------------------------------------------------------
function MobileContact() {
  const mInputStyle = {
    fontFamily: '"Zen Old Mincho", serif',
    fontSize: 16,
    padding: '14px 14px',
    background: mPalette.paper,
    border: `1px solid ${mPalette.ink}33`,
    color: mPalette.ink,
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box',
  };
  return (
    <div style={{ background: mPalette.paper }}>
      <MobilePageHeader no="05" jp="お問い合わせ" en="Contact" lead="ご相談・取材・パートナーシップ等のお問い合わせを承っております。お気軽にご連絡ください。" />
      <div style={{ padding: '48px 24px' }}>
        {/* Contact cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 32 }}>
          {[
            { tag: 'EMAIL', jp: 'メールでのご連絡', lines: ['info@regionallab.jp', '受付 : 24時間（返信2営業日以内）'], color: mPalette.ai },
            { tag: 'PHONE', jp: 'お電話でのご連絡', lines: ['025-000-0000', '受付 : 平日 10:00 – 18:00'], color: mPalette.akane },
            { tag: 'OFFICE', jp: '本社所在地', lines: ['〒949-7302', '新潟県南魚沼市浦佐 2479'], color: mPalette.koke },
          ].map(c => (
            <div key={c.tag} style={{ background: mPalette.paperDeep, padding: 20, borderTop: `2px solid ${c.color}` }}>
              <div style={{ fontFamily: mFont.mono, fontSize: 10, letterSpacing: 3, color: c.color }}>{c.tag}</div>
              <div style={{ fontFamily: mFont.jpSerif, fontSize: 17, color: mPalette.ink, letterSpacing: '0.04em', marginTop: 8 }}>{c.jp}</div>
              <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 4 }}>
                {c.lines.map((l, i) => (
                  <div key={i} style={{ fontFamily: mFont.jpSerif, fontSize: 13, color: mPalette.ink, lineHeight: 1.7 }}>{l}</div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <div style={{ background: mPalette.paperDeep, padding: 22, display: 'flex', flexDirection: 'column', gap: 18, borderTop: `2px solid ${mPalette.ai}` }}>
          <div>
            <div style={{ fontFamily: mFont.mono, fontSize: 10, letterSpacing: 3, color: mPalette.akane }}>—— INQUIRY FORM</div>
            <h3 style={{ fontFamily: mFont.jpSerif, fontSize: 20, margin: '6px 0 0', color: mPalette.ink, letterSpacing: '0.04em' }}>お問い合わせフォーム</h3>
          </div>

          <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontFamily: mFont.jpSerif, fontSize: 13, color: mPalette.ink, letterSpacing: 2 }}>お問い合わせ種別<span style={{ color: mPalette.akane, marginLeft: 4 }}>*</span></span>
            <select style={mInputStyle} defaultValue="">
              <option value="" disabled>選択してください</option>
              <option>法人の方</option>
              <option>学生の方</option>
              <option>取材・メディア</option>
              <option>パートナー協業</option>
              <option>その他</option>
            </select>
          </label>

          <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontFamily: mFont.jpSerif, fontSize: 13, color: mPalette.ink, letterSpacing: 2 }}>お名前<span style={{ color: mPalette.akane, marginLeft: 4 }}>*</span></span>
            <input type="text" placeholder="山田 太郎" style={mInputStyle} />
          </label>

          <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontFamily: mFont.jpSerif, fontSize: 13, color: mPalette.ink, letterSpacing: 2 }}>メールアドレス<span style={{ color: mPalette.akane, marginLeft: 4 }}>*</span></span>
            <input type="email" placeholder="example@regionallab.jp" style={mInputStyle} />
          </label>

          <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontFamily: mFont.jpSerif, fontSize: 13, color: mPalette.ink, letterSpacing: 2 }}>お電話番号</span>
            <input type="tel" placeholder="090-0000-0000" style={mInputStyle} />
          </label>

          <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontFamily: mFont.jpSerif, fontSize: 13, color: mPalette.ink, letterSpacing: 2 }}>お問い合わせ内容<span style={{ color: mPalette.akane, marginLeft: 4 }}>*</span></span>
            <textarea rows={6} placeholder="ご相談内容をご記入ください。" style={{ ...mInputStyle, resize: 'vertical', lineHeight: 1.7 }} />
          </label>

          <button
            type="button"
            onClick={() => alert('お問い合わせを受け付けました（デモ）')}
            style={{
              fontFamily: mFont.jpSerif, fontSize: 15, letterSpacing: 4,
              padding: '16px 0', background: mPalette.ink, color: mPalette.paper,
              border: 'none', cursor: 'pointer', marginTop: 4,
            }}
          >
            送信する　→
          </button>
        </div>
      </div>
      <MobileFooter />
    </div>
  );
}

// ----------------------------------------------------------
// Mobile App router (matches desktop page IDs)
// ----------------------------------------------------------
function MobileApp({ page }) {
  switch (page) {
    case 'about':    return <MobileAbout />;
    case 'company':  return <MobileCompany />;
    case 'news':     return <MobileNews />;
    case 'partners': return <MobilePartners />;
    case 'contact':  return <MobileContact />;
    case 'home':
    case 'business':
    default:         return <MobileHome />;
  }
}

function MobileSite({ page }) {
  return (
    <div style={{ fontFamily: mFont.jpSerif, color: mPalette.ink, background: mPalette.paper, minHeight: '100vh' }}>
      <MobileNav />
      <MobileApp page={page} />
    </div>
  );
}

Object.assign(window, { MobileSite });
