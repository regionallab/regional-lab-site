// Sub-pages for Regional Lab corporate site (Variant B / 彩)
// About / Company / News / Partners
// Reuses saiPalette + saiFont from variant-b-sai.jsx (loaded first via window assign).

const saiB = {
  paper: '#f1ead8',
  paperDeep: '#e6dcc0',
  ink: '#1f1a14',
  ai: '#1f3552',
  aiDeep: '#13243a',
  koke: '#5a6b3d',
  akane: '#9a3324',
  muted: '#766a52',
};
const saiBFont = {
  jpSerif: '"Zen Old Mincho", "Noto Serif JP", serif',
  jpAlt: '"Shippori Mincho", "Noto Serif JP", serif',
  enSerif: '"Cormorant Garamond", serif',
  mono: '"JetBrains Mono", ui-monospace, monospace',
};

function SaiPageHeader({ no, jp, en, lead }) {
  return (
    <div style={{ background: saiB.paperDeep, padding: '80px 56px 64px', borderBottom: `1px solid ${saiB.ink}22`, position: 'relative', overflow: 'hidden' }}>
      <Vertical style={{ position: 'absolute', right: 56, top: 40, fontFamily: saiBFont.jpSerif, fontSize: 220, opacity: 0.06, letterSpacing: 0 }}>
        {jp.charAt(0)}
      </Vertical>
      <div style={{ fontFamily: saiBFont.mono, fontSize: 11, letterSpacing: 3, color: saiB.akane }}>— {no} / PAGE</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 24, marginTop: 16 }}>
        <h1 style={{ fontFamily: saiBFont.jpSerif, fontSize: 72, fontWeight: 400, margin: 0, color: saiB.ink, letterSpacing: '0.04em' }}>{jp}</h1>
        <span style={{ fontFamily: saiBFont.enSerif, fontStyle: 'italic', fontSize: 36, color: saiB.ai }}>{en}</span>
      </div>
      {lead && <p style={{ fontFamily: saiBFont.jpSerif, fontSize: 15, lineHeight: 2.0, color: saiB.muted, marginTop: 20, maxWidth: 720 }}>{lead}</p>}
    </div>
  );
}

// =========================================================
// ABOUT — 私たちについて
// =========================================================
function SaiAbout() {
  const members = [
    { role: '代表 / Founder & CEO', jp: '木寺 蒼真', en: 'Kidera Soma', bio: ['南魚沼に出会い、地方創生に身を投じる。', '観光客から地域課題と向き合い、日本の未来や地方の魅力を', '残していくべく、Regional Labを創業。'], img: 'assets/member-kidera.jpg' },
    { role: '副代表 / Co-founder & COO', jp: '中原 光輝', en: 'Nakahara Koki', bio: ['事業戦略を促進し、組織の調和を築き、', '事業を並行で成長へと導く。'], img: 'assets/member-nakahara.jpg' },
    { role: 'Re.Event 事業統括責任者', jp: '渡邉 輝', en: 'Watanabe Akira', bio: ['事業戦略を促進し統括。', 'より事業を解像度があり、再現性があるものに落とし込む。'], img: 'assets/member-watanabe.jpg' },
    { role: 'Re.Lab 事業統括責任者', jp: '峯 奏音', en: 'Mine Kanato', bio: ['事業戦略を促進し統括。', 'より事業を解像度があり、再現性があるものに落とし込む。'], img: 'assets/member-mine.jpg' },
  ];

  return (
    <div style={{ background: saiB.paper, fontFamily: saiBFont.jpSerif, color: saiB.ink }}>
      <SaiPageHeader
        no="01"
        jp="私たちについて"
        en="About Us"
        lead="Regional Lab はなぜ生まれたのか。何を目指しているのか。私たちの志と、それを担う4人をご紹介します。"
      />

      {/* 目的と設立背景 */}
      <div style={{ padding: '96px 56px', display: 'grid', gridTemplateColumns: '280px 1fr', gap: 56 }}>
        <div>
          <div style={{ fontFamily: saiBFont.mono, fontSize: 10, letterSpacing: 3, color: saiB.akane }}>SECTION 01</div>
          <h2 style={{ fontFamily: saiBFont.jpSerif, fontSize: 36, fontWeight: 400, margin: '12px 0 0', letterSpacing: '0.04em', lineHeight: 1.4 }}>
            目的と<br/>設立背景
          </h2>
          <div style={{ marginTop: 24 }}>
            <div style={{ width: '100%', aspectRatio: '4/5', overflow: 'hidden' }}>
              <img src="assets/founder-logo.png" alt="Regional Lab — Minamiuonuma" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
        </div>
        <div>
          <div style={{ marginBottom: 40, background: saiB.paperDeep, padding: 32, borderLeft: `4px solid ${saiB.akane}` }}>
            <div style={{ fontFamily: saiBFont.mono, fontSize: 11, letterSpacing: 3, color: saiB.akane }}>PURPOSE</div>
            <h3 style={{ fontFamily: saiBFont.jpSerif, fontSize: 26, fontWeight: 400, margin: '8px 0 16px', letterSpacing: '0.04em' }}>
              新潟県南魚沼市の地域創生を起点に、日本の地方の魅力を永続させる。
            </h3>
            <p style={{ fontSize: 15, lineHeight: 2.1, color: saiB.muted, margin: 0 }}>
              地方創生を通じて、地方に根付く歴史・伝統・文化・自然といった様々な魅力を永続的なものにし、
              同時に、魅力ある日本という国を世界に発信していくこと。それが私たちの目的です。
            </p>
          </div>

          <div style={{ fontFamily: saiBFont.mono, fontSize: 11, letterSpacing: 3, color: saiB.ai }}>BACKGROUND</div>
          <h3 style={{ fontFamily: saiBFont.jpSerif, fontSize: 22, fontWeight: 400, margin: '8px 0 20px', letterSpacing: '0.04em' }}>
            一観光客の懐疑から、創業へ。
          </h3>
          <p style={{ fontSize: 15, lineHeight: 2.2, color: saiB.ink, margin: 0 }}>
            都内出身者にとって、地方は非日常的な存在であり、それ故に、価値ある存在として強く心を揺さぶる魅力が宿っています。<br/><br/>
            地方への観光を通じ、その地の衰退状況を様々な観点から実感した時、「この魅力ある地は今後も永続的に残り続けるのか」という懐疑を抱きました。
            そのきっかけを与えてくれたのが、<span style={{ color: saiB.akane, fontWeight: 500 }}>新潟県南魚沼市</span>です。<br/><br/>
            その後、地方創生への探究、各地の地域課題への熟考を経て、
            日本の未来における地方地域の重要性に気づき、
            日本を魅力ある国として存続させるため、世界に誇れる国であり続けさせるため、
            地方という<span style={{ color: saiB.ai, fontWeight: 500 }}>ミクロの視点</span>から課題を解いていくべく、創業に至りました。
          </p>
        </div>
      </div>

      {/* 三本柱 sash */}
      <div style={{ background: saiB.ai, color: saiB.paper, padding: '64px 56px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
          {[
            ['理念 / Philosophy', '個の研鑽をもって、日本の礎であり続ける。'],
            ['使命 / Mission', '地域の歩みに寄り添い、新たな希望を見出す。'],
            ['展望 / Vision', '南魚沼を支える企業へ、\n地方の未来を彩る組織へ。'],
          ].map(([label, body]) => (
            <div key={label} style={{ borderLeft: `2px solid ${saiB.akane}`, paddingLeft: 20 }}>
              <div style={{ fontFamily: saiBFont.mono, fontSize: 10, letterSpacing: 3, opacity: 0.7 }}>{label}</div>
              <div style={{ fontFamily: saiBFont.jpSerif, fontSize: 18, lineHeight: 1.9, marginTop: 10, letterSpacing: '0.04em', whiteSpace: 'pre-line' }}>{body}</div>
            </div>
          ))}
        </div>
      </div>

      {/* メンバー紹介 */}
      <div style={{ padding: '96px 56px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 48 }}>
          <div>
            <div style={{ fontFamily: saiBFont.mono, fontSize: 10, letterSpacing: 3, color: saiB.akane }}>SECTION 02</div>
            <h2 style={{ fontFamily: saiBFont.jpSerif, fontSize: 44, fontWeight: 400, margin: '8px 0 0', letterSpacing: '0.04em' }}>
              メンバー紹介<span style={{ fontFamily: saiBFont.enSerif, fontStyle: 'italic', color: saiB.ai, fontSize: 28 }}>— our four.</span>
            </h2>
          </div>
          <span style={{ fontFamily: saiBFont.mono, fontSize: 11, letterSpacing: 3, color: saiB.muted }}>04 MEMBERS</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {members.map((m, i) => (
            <div key={m.role} style={{ background: saiB.paperDeep, padding: 28, display: 'grid', gridTemplateColumns: '180px 1fr', gap: 24 }}>
              <div>
                {m.img ? (
                  <div style={{ width: '100%', aspectRatio: '4/5', overflow: 'hidden' }}>
                    <img src={m.img} alt={m.jp} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                ) : (
                  <Placeholder label="portrait" ratio="4/5" color1="#d2c1a0" color2="#bfa97a" textColor={saiB.ink} />
                )}
                <div style={{ fontFamily: saiBFont.mono, fontSize: 9, letterSpacing: 2, color: saiB.muted, marginTop: 8 }}>0{i+1} / 04</div>
              </div>
              <div>
                <div style={{ fontFamily: saiBFont.mono, fontSize: 10, letterSpacing: 2, color: saiB.akane, marginBottom: 8 }}>{m.role}</div>
                <div style={{ fontFamily: saiBFont.jpSerif, fontSize: 26, fontWeight: 500, letterSpacing: '0.06em', marginBottom: 2 }}>{m.jp}</div>
                <div style={{ fontFamily: saiBFont.enSerif, fontStyle: 'italic', fontSize: 16, color: saiB.ai, marginBottom: 16 }}>{m.en}</div>
                <p style={{ fontSize: 13, lineHeight: 2, color: saiB.ink, margin: 0 }}>
                  {Array.isArray(m.bio)
                    ? m.bio.map((line, li) => <React.Fragment key={li}>{line}{li < m.bio.length - 1 && <br/>}</React.Fragment>)
                    : m.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// =========================================================
// COMPANY — 会社概要
// =========================================================
function SaiCompany() {
  const services = [
    { tag: 'Re.Event', jp: 'イベント事業', body: '地域の課題解決の機会を創出しながら、参加者である学生に対して成長の分岐点を提供。行政や地元企業と参画し、地域密着型の本質的な地方創生のもと、地方の未来を彩り続けます。', color: saiB.akane },
    { tag: 'Re.Lab', jp: 'コミュニティ事業', body: 'ビジネス知識・情報・コーチング等を提供し、それぞれの理想ビジョンに向けた人事コンサルティングを実施。社会的に自立できるスキル構築・実績獲得を支援し、日本の礎を築ける人材を育成します。', color: saiB.ai },
    { tag: 'Regional.', jp: 'アパレル事業', body: '地方の魅力ある伝統産品の歴史を引き継ぎながら、時代と共に変化する需要あるものへと加工。地方の伝統を守りつつ、日本という国を誇れるブランドとして、魅力を形に残します。', color: saiB.koke },
  ];

  const visions = [
    {
      term: '3ヵ年 PL ビジョン',
      sub: '短期ビジョン',
      rows: [
        ['1期', '7,500,000円', '6,000,000円', '1,500,000円', '土台形成'],
        ['2期', '25,000,000円', '20,000,000円', '5,000,000円', 'Re.Lab・Re.Event 成熟期 / Regional. 成長期'],
        ['3期', '30,000,000円', '25,000,000円', '5,000,000円', 'Regional. 拡大期 / 南魚沼に知られる企業へ'],
      ],
      color: saiB.akane,
    },
    {
      term: '5期目 PL ビジョン',
      sub: '中期ビジョン',
      rows: [
        ['5期', '50,000,000円', '40,000,000円', '10,000,000円', '新規事業 成長期 / 南魚沼の顔となる企業へ'],
      ],
      color: saiB.ai,
    },
    {
      term: '10期目 PL ビジョン',
      sub: '中長期ビジョン',
      rows: [
        ['10期', '200,000,000円', '100,000,000円', '100,000,000円', '南魚沼を支える企業へ / 地方の未来を彩る組織へ'],
      ],
      color: saiB.koke,
    },
  ];

  return (
    <div style={{ background: saiB.paper, fontFamily: saiBFont.jpSerif, color: saiB.ink }}>
      <SaiPageHeader
        no="02"
        jp="会社概要"
        en="Company"
        lead="会社情報と、行なっている事業、3ヵ年・5ヵ年・10ヵ年で見据える成長のビジョン。私たちの設計図をお示しします。"
      />

      {/* 会社情報 */}
      <div style={{ padding: '80px 56px 0' }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ fontFamily: saiBFont.mono, fontSize: 10, letterSpacing: 3, color: saiB.akane }}>SECTION 01 — CORPORATE PROFILE</div>
          <h2 style={{ fontFamily: saiBFont.jpSerif, fontSize: 44, fontWeight: 400, margin: '8px 0 0', letterSpacing: '0.04em' }}>
            会社情報
          </h2>
        </div>
        <div style={{ borderTop: `1px solid ${saiB.ink}` }}>
          {[
            ['設立', '2024年10月09日'],
            ['役員', '7名'],
            ['事務所', [
              ['本部', '〒949-7302  新潟県南魚沼市浦佐 2479'],
              ['東京支部 ①', '〒150-0001  東京都渋谷区神宮前 6-23-4'],
              ['東京支部 ②', '〒171-0021  東京都豊島区西池袋 5-20-4'],
            ]],
          ].map(([label, value]) => (
            <div key={label} style={{
              display: 'grid',
              gridTemplateColumns: '200px 1fr',
              padding: '24px 0',
              borderBottom: `1px solid ${saiB.ink}22`,
              alignItems: 'start',
              gap: 24,
            }}>
              <div>
                <div style={{ fontFamily: saiBFont.jpSerif, fontSize: 18, fontWeight: 500, color: saiB.ai, letterSpacing: 4 }}>{label}</div>
                <div style={{ fontFamily: saiBFont.mono, fontSize: 9, letterSpacing: 2, color: saiB.muted, marginTop: 4 }}>
                  {label === '設立' ? 'FOUNDED' : label === '役員' ? 'OFFICERS' : 'OFFICES'}
                </div>
              </div>
              <div>
                {Array.isArray(value) ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {value.map(([k, v]) => (
                      <div key={k} style={{ display: 'flex', gap: 20, alignItems: 'baseline' }}>
                        <span style={{
                          fontFamily: saiBFont.jpSerif, fontSize: 13, color: saiB.paper,
                          background: saiB.akane, padding: '4px 12px', letterSpacing: 2, minWidth: 70, textAlign: 'center',
                        }}>{k}</span>
                        <span style={{ fontFamily: saiBFont.jpSerif, fontSize: 16, color: saiB.ink, letterSpacing: '0.04em' }}>{v}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <span style={{ fontFamily: saiBFont.jpSerif, fontSize: 18, color: saiB.ink, letterSpacing: '0.04em' }}>{value}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 事業紹介 */}
      <div style={{ padding: '80px 56px' }}>
        <div style={{ marginBottom: 40 }}>
          <div style={{ fontFamily: saiBFont.mono, fontSize: 10, letterSpacing: 3, color: saiB.akane }}>SECTION 02 — BUSINESS</div>
          <h2 style={{ fontFamily: saiBFont.jpSerif, fontSize: 44, fontWeight: 400, margin: '8px 0 0', letterSpacing: '0.04em' }}>
            事業紹介
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {services.map((s, i) => (
            <div key={s.tag} style={{ background: saiB.paperDeep, padding: 28 }}>
              <div style={{ fontFamily: saiBFont.mono, fontSize: 10, letterSpacing: 3, color: s.color, marginBottom: 8 }}>0{i+1} / 03</div>
              <div style={{ fontFamily: saiBFont.jpAlt, fontSize: 32, color: s.color, lineHeight: 1.1, fontWeight: 500 }}>{s.tag}</div>
              <div style={{ fontFamily: saiBFont.jpSerif, fontSize: 14, color: saiB.muted, letterSpacing: 3, marginTop: 4, marginBottom: 16 }}>{s.jp}</div>
              <p style={{ fontSize: 13, lineHeight: 2, margin: 0 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* PL Visions */}
      <div style={{ background: saiB.paperDeep, padding: '96px 56px' }}>
        <div style={{ marginBottom: 40 }}>
          <div style={{ fontFamily: saiBFont.mono, fontSize: 10, letterSpacing: 3, color: saiB.akane }}>SECTION 03 — VISIONS</div>
          <h2 style={{ fontFamily: saiBFont.jpSerif, fontSize: 44, fontWeight: 400, margin: '8px 0 0', letterSpacing: '0.04em' }}>
            3ヵ年・5ヵ年・10ヵ年
          </h2>
          <p style={{ fontSize: 14, lineHeight: 2, color: saiB.muted, marginTop: 8 }}>
            私たちが見据える、短期・中期・中長期の成長設計。
          </p>
        </div>

        {visions.map((v, vi) => (
          <div key={v.term} style={{ marginBottom: 32, background: saiB.paper, borderTop: `3px solid ${v.color}` }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, padding: '20px 28px', borderBottom: `1px solid ${saiB.ink}11` }}>
              <span style={{ fontFamily: saiBFont.jpSerif, fontSize: 22, fontWeight: 500, color: v.color }}>{v.term}</span>
              <span style={{ fontFamily: saiBFont.mono, fontSize: 11, letterSpacing: 3, color: saiB.muted }}>[ {v.sub.toUpperCase()} ]</span>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '80px 1.2fr 1.2fr 1.2fr 2fr',
              padding: '16px 28px',
              fontFamily: saiBFont.mono, fontSize: 10, letterSpacing: 2, color: saiB.muted, borderBottom: `1px solid ${saiB.ink}11`,
            }}>
              <span>期</span><span>売上高</span><span>販管費</span><span>営業利益</span><span>マイルストーン</span>
            </div>
            {v.rows.map((r, ri) => (
              <div key={ri} style={{
                display: 'grid',
                gridTemplateColumns: '80px 1.2fr 1.2fr 1.2fr 2fr',
                padding: '20px 28px',
                borderBottom: ri < v.rows.length - 1 ? `1px solid ${saiB.ink}11` : 'none',
                alignItems: 'center',
              }}>
                <span style={{ fontFamily: saiBFont.jpSerif, fontSize: 22, color: v.color, fontWeight: 500 }}>{r[0]}</span>
                <span style={{ fontFamily: saiBFont.jpSerif, fontSize: 20, fontWeight: 500 }}>{r[1]}</span>
                <span style={{ fontFamily: saiBFont.jpSerif, fontSize: 16, color: saiB.muted }}>{r[2]}</span>
                <span style={{ fontFamily: saiBFont.jpSerif, fontSize: 20, color: saiB.akane, fontWeight: 500 }}>{r[3]}</span>
                <span style={{ fontFamily: saiBFont.jpSerif, fontSize: 13, color: saiB.ink }}>{r[4]}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// =========================================================
// NEWS — お知らせ
// =========================================================
function SaiNews() {
  const articles = [
    {
      no: '01',
      date: '2026.05.10',
      cat: 'PRODUCT',
      catColor: saiB.ai,
      title: 'Re.Lab バージョン 2.0 リリースのお知らせ',
      lead: 'コミュニティの根幹を見直し、より個に寄り添うコーチング体験へ。新たな招待制システムと選抜プロセスを実装しました。',
      body: '個別最適化された伴走、企業研究会議のオンライン化、コーチングログのアーカイブ機能など、卒業後の進路実現をより強力にサポートします。',
      img: 'assets/news-relab-v2.jpg',
    },
    {
      no: '02',
      date: '2026.05.10',
      cat: 'PRODUCT',
      catColor: saiB.akane,
      title: 'Re.Event「Event Lab」リリースのお知らせ',
      lead: 'イベント主催者の集客課題を解決する、質と集客力を両立した次世代プラットフォームが誕生。',
      body: 'Event Lab は、イベント開催における集客のお悩みを解決する集客プラットフォームです。質の高いイベント情報の閲覧、質の高い学生との接点、(株)遊然様提供のマーケティング商材の学習機会、そして集客を確約するサービスまで ─ イベントに特化した魅力ある場をご用意しました。',
      img: 'assets/news-event-lab.jpg',
    },
    {
      no: '03',
      date: '2026.04.20',
      cat: 'EVENT',
      catColor: saiB.koke,
      title: '第3回 地方創生ビジネスコンテスト 9月開催のお知らせ',
      lead: '地域密着型の本質的な地方創生ビジコン、第3回の開催地・日程が決定しました。',
      body: '第3回となる今回も、対象地域に深く根を下ろし、2泊3日の没入型プログラムとして実施します。詳細は順次お知らせいたします。',
      img: 'assets/news-bizcon3.jpg',
    },
    {
      no: '04',
      date: '2026.04.15',
      cat: 'EVENT',
      catColor: saiB.akane,
      title: '第2回 地方産品大忘年会、今年も年末に開催決定',
      lead: '日本各地の特産品を持ち寄り、垣根を超えた交流の場を、今年も東京にて。',
      body: '昨年好評をいただいた地方産品大忘年会、第2回も2026年末に開催いたします。学生、社会人、社長 ─ 立場の異なる方々が地方の魅力を味わいながら交わる、特別な一夜を演出します。',
      img: 'assets/news-bonenkai2.jpg',
    },
  ];

  return (
    <div style={{ background: saiB.paper, fontFamily: saiBFont.jpSerif, color: saiB.ink }}>
      <SaiPageHeader
        no="03"
        jp="お知らせ"
        en="News"
        lead="プロダクト、イベント、メディア掲載 ─ Regional Lab からの最新のお知らせです。"
      />

      <div style={{ padding: '64px 56px' }}>
        <div style={{ display: 'flex', gap: 12, marginBottom: 32 }}>
          {['ALL', 'PRODUCT', 'EVENT', 'PRESS'].map((c, i) => (
            <div key={c} style={{
              padding: '8px 18px',
              border: `1px solid ${saiB.ink}`,
              background: i === 0 ? saiB.ink : 'transparent',
              color: i === 0 ? saiB.paper : saiB.ink,
              fontFamily: saiBFont.mono, fontSize: 11, letterSpacing: 2,
            }}>{c}</div>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {articles.map(a => (
            <div key={a.no} style={{
              background: saiB.paperDeep,
              padding: 32,
              display: 'grid',
              gridTemplateColumns: '120px 1.4fr 2fr 40px',
              gap: 24,
              alignItems: 'start',
              borderLeft: `4px solid ${a.catColor}`,
            }}>
              <div>
                <div style={{ fontFamily: saiBFont.mono, fontSize: 10, letterSpacing: 2, color: saiB.muted }}>{a.date}</div>
                <div style={{ fontFamily: saiBFont.mono, fontSize: 10, letterSpacing: 2, color: a.catColor, marginTop: 6, border: `1px solid ${a.catColor}`, padding: '3px 8px', display: 'inline-block' }}>{a.cat}</div>
                <div style={{ fontFamily: saiBFont.enSerif, fontStyle: 'italic', fontSize: 18, color: saiB.muted, marginTop: 16 }}>No. {a.no}</div>
              </div>
              {a.img ? (
                <div style={{ width: '100%', aspectRatio: '4/3', overflow: 'hidden' }}>
                  <img src={a.img} alt={a.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              ) : (
                <Placeholder label={a.cat === 'PRODUCT' ? 'product / screen' : 'event / venue'} ratio="4/3" color1="#d4c39e" color2="#c0a978" textColor={saiB.ink} />
              )}
              <div>
                <h3 style={{ fontFamily: saiBFont.jpSerif, fontSize: 24, fontWeight: 500, margin: 0, letterSpacing: '0.04em', lineHeight: 1.5 }}>{a.title}</h3>
                <p style={{ fontFamily: saiBFont.jpSerif, fontSize: 14, lineHeight: 2, color: saiB.akane, marginTop: 12, marginBottom: 14 }}>{a.lead}</p>
                <p style={{ fontSize: 13, lineHeight: 2.1, color: saiB.ink, margin: 0 }}>{a.body}</p>
                <div style={{ marginTop: 16, fontFamily: saiBFont.enSerif, fontStyle: 'italic', fontSize: 14, color: saiB.ink, borderBottom: `1px solid ${saiB.ink}`, display: 'inline-block', paddingBottom: 2 }}>
                  Read more →
                </div>
              </div>
              <div style={{ fontFamily: saiBFont.enSerif, fontStyle: 'italic', fontSize: 20, color: saiB.ai, textAlign: 'right' }}>↗</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// =========================================================
// PARTNERS — パートナー
// =========================================================
function SaiPartners() {
  const partners = [
    {
      no: '01',
      name: '株式会社 顧問名鑑',
      en: 'Komon Meikan, Inc.',
      relation: 'イベント支援・Re.Lab連携',
      body: '2025年3月に開催しました地方創生ビジネスコンテストや2025年12月に開催しました地方産品大忘年会の両イベントにて、東京スクエアガーデン7Fの事務所を貸してくださり、同時に、両イベントの後援企業様として様々なご支援をご提供してくださった企業様であり、今後も、定例化していく地方産品大忘年会のイベントや多方面において、パートナー企業様として連携。',
      tags: ['イベント支援', 'コーチング提供', 'Re.Lab連携'],
      color: saiB.ai,
    },
    {
      no: '02',
      name: '株式会社 遊然',
      en: 'Yuzen, Inc.',
      relation: 'マーケティング教材支援・イベント共催',
      body: '2025年9月に開催しました第1回地方創生ビジネスコンテスト in 秋保や2026年3月に開催しました第2回地方創生ビジネスコンテスト in 蔵王の両イベントにて、イベントの共催を行い、他にも Re.Event の Event Lab にて、マーケティング教材の資料提供をしてくださるなど、多岐に渡り連携を行っており、今後も、定例化していくビジネスコンテストや多方面において、パートナー企業様として連携。',
      tags: ['マーケティング', 'イベント共催', 'Event Lab連携'],
      color: saiB.akane,
    },
    {
      no: '03',
      name: '地方創生団体 リーボシ',
      en: 'Reboshi',
      relation: '地方創生・コミュニティ連携',
      body: '2025年12月に開催しました地方産品大忘年会イベントにて、共催を行い、今後も、定例化していく地方産品大忘年会や多方面において、パートナー団体様として連携。',
      tags: ['地方創生', 'コミュニティ', 'イベント共催'],
      color: saiB.koke,
    },
  ];

  return (
    <div style={{ background: saiB.paper, fontFamily: saiBFont.jpSerif, color: saiB.ink }}>
      <SaiPageHeader
        no="04"
        jp="パートナー"
        en="Partners"
        lead="共に地方の未来を彩る、私たちの大切なパートナー様をご紹介します。"
      />

      <div style={{ padding: '80px 56px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {partners.map(p => (
            <div key={p.no} style={{
              background: saiB.paperDeep,
              padding: '40px 44px',
              display: 'grid',
              gridTemplateColumns: '80px 1.3fr 2fr',
              gap: 40,
              alignItems: 'center',
              position: 'relative',
            }}>
              <div style={{
                width: 80, height: 80,
                borderRadius: 40,
                background: p.color,
                color: saiB.paper,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: saiBFont.jpSerif, fontSize: 32, letterSpacing: 1,
              }}>{p.no}</div>
              <div>
                <div style={{ fontFamily: saiBFont.mono, fontSize: 10, letterSpacing: 3, color: p.color, marginBottom: 8 }}>{p.relation}</div>
                <h3 style={{ fontFamily: saiBFont.jpSerif, fontSize: 26, fontWeight: 500, margin: 0, letterSpacing: '0.04em' }}>{p.name}</h3>
                <div style={{ fontFamily: saiBFont.enSerif, fontStyle: 'italic', fontSize: 16, color: saiB.muted, marginTop: 4 }}>{p.en}</div>
                <div style={{ display: 'flex', gap: 8, marginTop: 14, flexWrap: 'wrap' }}>
                  {p.tags.map(t => (
                    <span key={t} style={{
                      fontFamily: saiBFont.jpSerif, fontSize: 11, letterSpacing: 2,
                      padding: '4px 10px', border: `1px solid ${saiB.ink}55`, color: saiB.ink,
                    }}>{t}</span>
                  ))}
                </div>
              </div>
              <div>
                <p style={{ fontSize: 14, lineHeight: 2.1, color: saiB.ink, margin: 0 }}>{p.body}</p>
                <div style={{ marginTop: 20, fontFamily: saiBFont.enSerif, fontStyle: 'italic', fontSize: 14, color: saiB.ai, borderBottom: `1px solid ${saiB.ai}`, display: 'inline-block', paddingBottom: 2 }}>
                  View partner →
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 48, padding: 40, border: `1px dashed ${saiB.ink}55`, textAlign: 'center' }}>
          <div style={{ fontFamily: saiBFont.mono, fontSize: 10, letterSpacing: 3, color: saiB.akane }}>BECOME A PARTNER</div>
          <div style={{ fontFamily: saiBFont.jpSerif, fontSize: 22, marginTop: 8, letterSpacing: '0.04em' }}>地方の未来を、共に彩りませんか。</div>
          <div style={{ marginTop: 16, padding: '12px 28px', background: saiB.ink, color: saiB.paper, fontFamily: saiBFont.jpSerif, fontSize: 14, letterSpacing: 3, display: 'inline-block' }}>
            協業のご相談 →
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { SaiAbout, SaiCompany, SaiNews, SaiPartners });
