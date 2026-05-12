// Variant B: 「彩」Layered Washi
// Layered paper-like surfaces, vertical Japanese typography accents.
// Palette: 藍 indigo / 苔 moss / 茜 madder / 生成り off-white / 墨 ink

const saiPalette = {
  paper: '#f1ead8',
  paperDeep: '#e6dcc0',
  ink: '#1f1a14',
  ai: '#1f3552',      // 藍
  aiDeep: '#13243a',
  koke: '#5a6b3d',    // 苔
  akane: '#9a3324',   // 茜
  muted: '#766a52',
};

const saiFont = {
  jpSerif: '"Zen Old Mincho", "Noto Serif JP", serif',
  jpAlt: '"Shippori Mincho", "Noto Serif JP", serif',
  enSerif: '"Cormorant Garamond", serif',
  mono: '"JetBrains Mono", ui-monospace, monospace',
};

function SaiNav() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '24px 56px',
      background: saiPalette.paper,
      borderBottom: `1px solid ${saiPalette.ink}22`,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <div style={{
          width: 40, height: 40, borderRadius: 20,
          background: saiPalette.akane,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: saiPalette.paper, fontFamily: saiFont.jpSerif, fontSize: 20,
        }}>礎</div>
        <div>
          <div style={{ fontFamily: saiFont.jpSerif, fontSize: 18, letterSpacing: 3, color: saiPalette.ink }}>Regional Lab</div>
          <div style={{ fontFamily: saiFont.mono, fontSize: 9, letterSpacing: 2, color: saiPalette.muted }}>株式会社 リージョナルラボ</div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 28, fontFamily: saiFont.jpSerif, fontSize: 14, color: saiPalette.ink, alignItems: 'center', letterSpacing: 2 }}>
        {[['私たちについて','about'],['会社概要','company'],['事業概要','business'],['お知らせ','news'],['お問い合わせ','contact'],['パートナー','partners']].map(([jp, en]) => (
          <div key={en} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            <span>{jp}</span>
            <span style={{ fontFamily: saiFont.mono, fontSize: 8, opacity: 0.5, letterSpacing: 2 }}>{en.toUpperCase()}</span>
          </div>
        ))}
        <div style={{
          padding: '8px 16px', border: `1px solid ${saiPalette.ink}`, fontFamily: saiFont.mono, fontSize: 11, letterSpacing: 2,
        }}>JP / EN</div>
      </div>
    </div>
  );
}

function SaiHero() {
  return (
    <div style={{
      position: 'relative',
      padding: '64px 56px 80px',
      background: `linear-gradient(180deg, ${saiPalette.paper} 0%, ${saiPalette.paperDeep} 100%)`,
      overflow: 'hidden',
      minHeight: 760,
    }}>
      {/* Indigo washi panel */}
      <div style={{
        position: 'absolute',
        left: 56, top: 64,
        width: 720, height: 600,
        background: saiPalette.ai,
        backgroundImage: `radial-gradient(${saiPalette.aiDeep} 1px, transparent 1.2px)`,
        backgroundSize: '14px 14px',
      }} />
      {/* Photo */}
      <div style={{ position: 'absolute', left: 320, top: 180, width: 540, height: 680 }}>
        <Placeholder label="hero / 八海山 + 棚田" ratio={undefined} height="100%" color1="#cbb98c" color2="#b59f6b" textColor={saiPalette.ink} />
      </div>
      {/* Vertical Japanese type — explicit columns so each line stays intact */}
      <div style={{ position: 'absolute', right: 80, top: 80, display: 'flex', flexDirection: 'row-reverse', alignItems: 'flex-start', gap: 28 }}>
        <Vertical style={{ fontFamily: saiFont.jpAlt, fontSize: 18, lineHeight: 2.2, color: saiPalette.akane, letterSpacing: '0.3em', whiteSpace: 'nowrap', marginTop: 24 }}>
          ─ 新潟県南魚沼市を支え続ける企業へ
        </Vertical>
        <Vertical style={{ fontFamily: saiFont.jpSerif, fontSize: 84, lineHeight: 1.35, color: saiPalette.ink, letterSpacing: '0.08em', fontWeight: 500, whiteSpace: 'nowrap' }}>
          地方の未来を、
        </Vertical>
        <Vertical style={{ fontFamily: saiFont.jpSerif, fontSize: 84, lineHeight: 1.35, color: saiPalette.ink, letterSpacing: '0.08em', fontWeight: 500, whiteSpace: 'nowrap', marginTop: 88 }}>
          彩る組織へ
        </Vertical>
      </div>

      {/* Bottom metadata strip */}
      <div style={{
        position: 'absolute', left: 56, bottom: 40, right: 56,
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
      }}>
        <div style={{ background: saiPalette.paper, padding: '16px 24px', maxWidth: 380, border: `1px solid ${saiPalette.ink}22` }}>
          <div style={{ fontFamily: saiFont.mono, fontSize: 10, letterSpacing: 2, color: saiPalette.akane, marginBottom: 8 }}>—— EST. 2024</div>
          <p style={{ fontFamily: saiFont.jpSerif, fontSize: 14, lineHeight: 1.9, color: saiPalette.ink, margin: 0 }}>
            イベント、コミュニティ、アパレル。三つの事業で、地方創生を立体的に描く。
          </p>
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <div style={{
            padding: '14px 28px', background: saiPalette.akane, color: saiPalette.paper,
            fontFamily: saiFont.jpSerif, fontSize: 14, letterSpacing: 3,
          }}>事業を見る →</div>
          <div style={{
            padding: '14px 28px', border: `1px solid ${saiPalette.ink}`, color: saiPalette.ink,
            fontFamily: saiFont.jpSerif, fontSize: 14, letterSpacing: 3,
          }}>お問い合わせ</div>
        </div>
      </div>
    </div>
  );
}

function SaiMission() {
  return (
    <div style={{ background: saiPalette.paperDeep, padding: '96px 56px', position: 'relative' }}>
      {/* faded kanji */}
      <Vertical style={{
        position: 'absolute', right: 40, top: 40,
        fontFamily: saiFont.jpSerif, fontSize: 240, color: saiPalette.ink, opacity: 0.04, letterSpacing: 0,
      }}>彩</Vertical>

      <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 64, position: 'relative' }}>
        <div>
          <div style={{ writingMode: 'vertical-rl', fontFamily: saiFont.jpSerif, fontSize: 28, letterSpacing: 8, color: saiPalette.ai }}>
            ─ 理念 / 使命 / 展望
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24 }}>
          {[
            { label: 'PHILOSOPHY', jp: '理念', body: ['個の研鑽をもって、', '日本の礎であり続ける。'], bg: saiPalette.paper, color: saiPalette.ink },
            { label: 'MISSION', jp: '使命', body: ['地域の歩みに寄り添い、', '新たな希望を見出す。'], bg: saiPalette.ai, color: saiPalette.paper },
            { label: 'VISION', jp: '展望', body: ['南魚沼を支える企業へ、', '地方の未来を彩る組織へ。'], bg: saiPalette.koke, color: saiPalette.paper },
          ].map(c => (
            <div key={c.label} style={{
              background: c.bg, color: c.color,
              padding: '40px 28px',
              minHeight: 320,
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              borderRadius: 4,
            }}>
              <div>
                <div style={{ fontFamily: saiFont.mono, fontSize: 10, letterSpacing: 3, opacity: 0.7 }}>{c.label}</div>
                <div style={{ fontFamily: saiFont.jpSerif, fontSize: 16, letterSpacing: 6, marginTop: 6, opacity: 0.85 }}>{c.jp}</div>
              </div>
              <div style={{ fontFamily: saiFont.jpSerif, fontSize: 22, lineHeight: 1.8, letterSpacing: '0.04em' }}>
                {c.body[0]}<br/>{c.body[1]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SaiBusiness() {
  const items = [
    { tag: 'Re.Event', jp: 'イベント事業', en: 'Events / Co-creation', body: '行政・地元企業との参画で、地域課題を扱うアイデアソンやビジネスコンテストを開催。学生に「人生の分岐点」となる経験を提供します。', accent: saiPalette.akane, key: '人生の分岐点' },
    { tag: 'Re.Lab', jp: 'コミュニティ事業', en: 'Community / Coaching', body: '招待制・審査制のコミュニティで、ビジネス基礎、社長1on1、コーチングを提供。卒業後、必ず何者かになっている — そんな未来を確約します。', accent: saiPalette.ai, key: '何者かになる' },
    { tag: 'Regional.', jp: 'アパレル事業', en: 'Apparel / Heritage', body: '地方の伝統産品を現代の需要へと再構築。日本を代表する誇れるブランドとして、伝統と未来を形にして残します。', accent: saiPalette.koke, key: '形として残す' },
  ];
  return (
    <div style={{ background: saiPalette.paper, padding: '120px 56px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 64 }}>
        <h2 style={{ fontFamily: saiFont.jpSerif, fontSize: 64, fontWeight: 400, margin: 0, color: saiPalette.ink, letterSpacing: '0.04em' }}>
          三つの<span style={{ color: saiPalette.akane }}>柱</span>
        </h2>
        <div style={{ fontFamily: saiFont.mono, fontSize: 11, letterSpacing: 3, color: saiPalette.muted }}>OUR BUSINESS — 03 SECTORS</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32 }}>
        {items.map((s, i) => (
          <div key={s.tag} style={{ background: saiPalette.paperDeep, padding: 28, position: 'relative', minHeight: 540 }}>
            <div style={{ position: 'absolute', top: -8, left: 28, fontFamily: saiFont.mono, fontSize: 10, letterSpacing: 3, background: saiPalette.paper, padding: '4px 8px', color: s.accent }}>
              0{i+1} / 03
            </div>
            <Placeholder label={s.en} ratio="16/10" color1="#d8c9a3" color2="#c6b181" textColor={saiPalette.ink} />
            <div style={{ marginTop: 20, display: 'flex', alignItems: 'baseline', gap: 12 }}>
              <span style={{ fontFamily: saiFont.jpAlt, fontSize: 28, color: s.accent, letterSpacing: 1 }}>{s.tag}</span>
            </div>
            <div style={{ fontFamily: saiFont.jpSerif, fontSize: 15, letterSpacing: 3, color: saiPalette.muted, marginTop: 4 }}>{s.jp}</div>
            <p style={{ fontFamily: saiFont.jpSerif, fontSize: 14, lineHeight: 2, color: saiPalette.ink, marginTop: 16 }}>{s.body}</p>
            <div style={{
              marginTop: 20, padding: '10px 14px',
              background: s.accent, color: saiPalette.paper,
              display: 'inline-block',
              fontFamily: saiFont.jpSerif, fontSize: 13, letterSpacing: 3,
            }}>
              「{s.key}」
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SaiTimeline() {
  const events = [
    ['2024.12', '地方創生アイデアソン', 'Online'],
    ['2025.03', '地方創生ビジコン', '東京スクエアガーデン'],
    ['2025.09', '第1回ビジコン in 秋保', '宮城・蘭亭旅館'],
    ['2025.09', '地域創生×国際交流', 'Online'],
    ['2025.12', '地方産品大忘年会', 'Tokyo'],
    ['2026.03', '第2回ビジコン in 蔵王', 'メルキュール宮城蔵王'],
  ];
  return (
    <div style={{ background: saiPalette.aiDeep, padding: '120px 56px', color: saiPalette.paper, position: 'relative', overflow: 'hidden' }}>
      <Vertical style={{
        position: 'absolute', right: 56, top: 56,
        fontFamily: saiFont.jpSerif, fontSize: 160, opacity: 0.08, letterSpacing: 0,
      }}>歩</Vertical>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 56 }}>
        <h2 style={{ fontFamily: saiFont.jpSerif, fontSize: 56, fontWeight: 400, margin: 0, letterSpacing: '0.04em' }}>
          歩みは続く<span style={{ fontFamily: saiFont.enSerif, fontStyle: 'italic', color: saiPalette.akane, fontSize: 36 }}>— ongoing.</span>
        </h2>
        <span style={{ fontFamily: saiFont.mono, fontSize: 11, letterSpacing: 3, opacity: 0.7 }}>04 / EVENTS — 2024–2026</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 16 }}>
        {events.map(([date, name, loc], i) => (
          <div key={i} style={{
            background: i === events.length - 1 ? saiPalette.akane : 'transparent',
            border: `1px solid ${saiPalette.paper}33`,
            padding: 20,
            minHeight: 220,
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          }}>
            <div style={{ fontFamily: saiFont.mono, fontSize: 10, letterSpacing: 2, opacity: 0.8 }}>{date}</div>
            <div>
              <div style={{ fontFamily: saiFont.jpSerif, fontSize: 15, lineHeight: 1.6, letterSpacing: '0.04em' }}>{name}</div>
              <div style={{ fontFamily: saiFont.mono, fontSize: 9, letterSpacing: 2, opacity: 0.7, marginTop: 8 }}>{loc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SaiCTA() {
  const tabs = [
    ['私たちについて', 'About', ['目的と設立背景', 'メンバー紹介']],
    ['会社概要', 'Company', ['事業紹介', '3ヵ年ビジョン', '5ヵ年ビジョン', '10ヵ年ビジョン']],
    ['お知らせ', 'News', ['新着記事', 'プレスリリース', 'メディア掲載']],
    ['お問い合わせ', 'Contact', ['法人の方', '学生の方', '取材依頼']],
    ['パートナー', 'Partners', ['(株)顧問名鑑', '(株)遊然', 'リーボシ']],
  ];
  return (
    <div style={{ background: saiPalette.paper, padding: '96px 56px 32px', position: 'relative' }}>
      <div style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto 80px' }}>
        <div style={{ fontFamily: saiFont.mono, fontSize: 11, letterSpacing: 3, color: saiPalette.akane, marginBottom: 20 }}>—— TOGETHER</div>
        <h2 style={{ fontFamily: saiFont.jpSerif, fontSize: 60, fontWeight: 400, margin: 0, color: saiPalette.ink, letterSpacing: '0.06em', lineHeight: 1.3 }}>
          その地に、もう一度、<span style={{ color: saiPalette.ai }}>光を。</span>
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 24, paddingTop: 48, borderTop: `1px solid ${saiPalette.ink}33` }}>
        {tabs.map(([jp, en, sub]) => (
          <div key={en}>
            <div style={{ fontFamily: saiFont.jpSerif, fontSize: 15, color: saiPalette.ink, letterSpacing: 2, fontWeight: 500 }}>{jp}</div>
            <div style={{ fontFamily: saiFont.mono, fontSize: 9, letterSpacing: 2, color: saiPalette.akane, marginTop: 2, marginBottom: 14 }}>{en.toUpperCase()}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {sub.map(s => (
                <span key={s} style={{ fontFamily: saiFont.jpSerif, fontSize: 12, color: saiPalette.muted, letterSpacing: 1 }}>— {s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 64, paddingTop: 24, borderTop: `1px solid ${saiPalette.ink}22`, display: 'flex', justifyContent: 'space-between', fontFamily: saiFont.mono, fontSize: 10, letterSpacing: 2, color: saiPalette.muted }}>
        <span>© REGIONAL LAB 2026</span>
        <span>新潟県南魚沼市 × 東京 × 宮城</span>
        <span>個の研鑽をもって、日本の礎であり続ける。</span>
      </div>
    </div>
  );
}

function SaiVariant() {
  return (
    <div style={{ fontFamily: saiFont.jpSerif, color: saiPalette.ink, background: saiPalette.paper }}>
      <SaiNav />
      <SaiHero />
      <SaiMission />
      <SaiBusiness />
      <SaiTimeline />
      <SaiCTA />
    </div>
  );
}

Object.assign(window, { SaiVariant });
