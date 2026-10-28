// 自動生成ファイル — 編集しないでください。編集は site-data.jsx を直し、bash tools/build.sh を実行。
// ==========================================================
// SITE DATA — PC版・スマホ版 共通のコンテンツソース
// ここを編集すると PC版・スマホ版 両方に反映されます。
// 色は全パレット共通の hex を直接指定（akane/ai/koke）。
// ==========================================================

const SITE_COLORS = {
  akane: '#9a3324',
  ai: '#1f3552',
  koke: '#5a6b3d'
};
window.siteDataJa = {
  colors: SITE_COLORS,
  // ----- お問い合わせフォーム送信先 -----
  // Formspree のフォームID（https://formspree.io で作成）に置き換えてください。
  // 例: 'https://formspree.io/f/xmyzabcd'
  // 未設定（'REPLACE_...' のまま）の場合は、メールソフト起動（mailto）にフォールバックします。
  formEndpoint: 'https://formspree.io/f/xgoqgned',
  formFallbackEmail: 'souma0615souma@gmail.com',
  // ----- HERO / MISSION (Home) -----
  hero: {
    kicker: '新潟県南魚沼市を支え続ける企業へ',
    title1: '地方の未来を、',
    title2: '彩る組織へ'
  },
  mission: {
    heading: [['日本の', '礎', 'akane', 'として、'], ['地方の', '未来', 'ai', 'を彩る。']],
    body: '私たちは、新潟県南魚沼市に本社を置き、魚沼エリア（南魚沼市・湯沢町）／宮城エリア／東京エリアで実装する地方創生商社です。イベント、コミュニティ、アパレル、DX&AX — 四つの事業で、地方創生を立体的に描きます。'
  },
  // ----- CONSULTING キャッチコピー (Home) -----
  consulting: {
    eyebrow: 'CONSULTING',
    scope: '組織 / 人事 / 地域 / 企業',
    heading: ['コンサルティングで、', '未来', 'を彩る。'],
    body: '人事・地域・組織・企業等のコンサルティングを主とした四つの事業を展開しています。'
  },
  // ----- 三つの柱 / BUSINESS (Home) -----
  business: [{
    tag: 'Re.Event',
    jp: 'イベント事業',
    en: 'Events / Co-creation',
    body: ['行政・地元企業・地元住人との参画で、', '地域課題を扱うアイデアソンやビジコンを開催。', '学生に「人生の分岐点」となる経験を提供します。'],
    accent: SITE_COLORS.akane,
    key: '人生の分岐点',
    img: 'assets/re-event.jpg'
  }, {
    tag: 'Re.Lab',
    jp: 'コミュニティ事業',
    en: 'Community / Coaching',
    body: ['招待制・審査制のコミュニティで、', 'ビジネス知識、企業研究、社長1on1、コーチング等提供。', '卒業後、必ず何者かになっている', '— そんな未来を確約します。'],
    accent: SITE_COLORS.ai,
    key: '何者かになる',
    img: 'assets/re-lab.jpg'
  }, {
    tag: 'Regional.',
    jp: 'アパレル事業',
    en: 'Apparel / Heritage',
    body: ['地方の伝統産品を現代の需要へと再構築。', '日本を代表する誇れるブランドとして、', '伝統と未来を形にして残します。'],
    accent: SITE_COLORS.koke,
    key: '形として残す',
    img: 'assets/regional.jpg'
  }, {
    tag: 'Re.Com',
    jp: 'DX&AX事業',
    en: 'DX & AX / Digital Shift',
    body: ['地方のアナログの価値を見出しながらも、', 'アナログにより生まれている地方課題を、', 'その価値を残しながら解決していきます。'],
    accent: '#8a6d3b',
    key: '価値を捉える',
    img: 'assets/re-com.png'
  }],
  // ----- 歩み / TIMELINE (Home) -----
  timeline: [['2024.12', '地方創生アイデアソン', 'Online', 'assets/event-2024-12.jpg'], ['2025.03', '地方創生ビジコン', '東京スクエアガーデン', 'assets/event-2025-03.jpg'], ['2025.09', '第1回ビジコン in 秋保', '宮城・蘭亭旅館', 'assets/event-2025-09-akiu.jpg'], ['2025.09', '地域創生×国際交流', 'Online', 'assets/event-2025-09-kokusai.jpg'], ['2025.12', '地方産品大忘年会', '東京スクエアガーデン', 'assets/event-2025-12.jpg'], ['2026.03', '第2回ビジコン in 蔵王', 'メルキュール宮城蔵王', 'assets/event-2026-03.jpg'], ['2026.08', 'Event Lab オンライン交流会', 'Online', 'assets/event-2026-08.jpg'], ['2026.09', '親子でDIY in 浦佐', 'URASA HOTEIYA', 'assets/event-2026-09-diy.jpg'], ['2026.09', '第2回 次につながる交流会', 'Online', 'assets/event-2026-09-meetup.jpg'], ['2026.10', '湯沢の旅 フィールドワーク', '新潟・湯沢町', 'assets/event-2026-10-yuzawa.jpg'], ['2026.11', '六日町松下村塾 プレリリース', 'ハイブリッド開催', 'assets/event-2026-11-shokasonjuku.jpg']],
  // ----- ABOUT -----
  about: {
    lead: 'Regional Lab はなぜ生まれたのか。何を目指しているのか。私たちの志と、それを担う4人をご紹介します。',
    purpose: {
      heading: '地域そのものではなく、地域に関わる個人の力量を引き上げる。',
      body: '地域に関わる一人ひとりの力量を引き上げ、力をつけた個人が地域に還ることで、結果として地域が動いていく。この順序を守ることが、当社の一貫した姿勢です。私たちは、地方創生を語る組織ではなく、地方創生を事業として成立させる組織です。'
    },
    background: {
      heading: '一観光客の懐疑から、創業へ。',
      paragraphs: ['都内出身者にとって、地方は非日常的な存在であり、それ故に、価値ある存在として強く心を揺さぶる魅力が宿っています。', 'そのきっかけを与えてくれたのが、新潟県南魚沼市です。地方への観光を通じ、その地の衰退状況を様々な観点から実感した時、「この魅力ある地は今後も永続的に残り続けるのか」という懐疑を抱きました。', '日本を魅力ある国として存続させるため、世界に誇れる国であり続けさせるため、地方というミクロの視点から課題を解いていくべく、創業に至りました。']
    },
    pillars: [['理念 / Philosophy', '個の研鑽をもって、日本の礎であり続ける。'], ['使命 / Mission', '地域の歩みに寄り添い、新たな希望を見出す。'], ['展望 / Vision', '南魚沼を支える企業へ、地方の未来を彩る組織へ。']],
    members: [{
      role: '代表',
      jp: '木寺 蒼真',
      en: 'Kidera Soma',
      bio: ['南魚沼に出会い、地方創生に身を投じる。', '観光客から地域課題と向き合い、日本の未来や地方の魅力を', '残していくべく、Regional Lab を創業。'],
      img: 'assets/member-kidera.jpg'
    }, {
      role: '副代表',
      jp: '中原 光輝',
      en: 'Nakahara Koki',
      bio: ['My Vision Lab 代表。', 'コミュニティ事業を統括し、ToC・ToB 両輪で', '会員の人生設計に伴走する。'],
      img: 'assets/member-nakahara.jpg'
    }, {
      role: '事業統括責任者 ─ Re.Event',
      jp: '峯 奏音',
      en: 'Mine Kanato',
      bio: ['HopeCreater 代表、CRENECTION 代表。', 'Events / Event Lab / Consulting を統括し、', 'イベント事業の設計と運営を率いる。'],
      img: 'assets/member-mine.jpg'
    }, {
      role: '事業統括責任者 ─ Regional.',
      jp: '渡邉 輝',
      en: 'Watanabe Akira',
      bio: ['Global Canvas Japan 代表。', 'アパレル事業を統括し、日本市場と海外市場（店舗・EC）へ', '伝統工芸品を届ける。'],
      img: 'assets/member-watanabe.jpg'
    }]
  },
  // ----- COMPANY -----
  company: {
    lead: '屋号情報と、行なっている四つの事業。新潟県南魚沼市に本社を置く地方創生商社としての設計図をお示しします。',
    info: {
      founded: '2024年10月09日',
      officers: '4名',
      offices: [['本社', '〒949-7302  新潟県南魚沼市浦佐 2476'], ['活動エリア', '魚沼エリア（南魚沼市・湯沢町）／宮城エリア／東京エリア']]
    },
    services: [{
      tag: 'Re.Event',
      jp: 'イベント事業',
      body: '地方創生ビジコンやアイデアソン、地方産品交流会などの企画・運営。集客OS「Event Lab」の提供とコンサルティングを含め、地域への「入口」をつくります。',
      color: SITE_COLORS.akane
    }, {
      tag: 'Re.Lab',
      jp: 'コミュニティ事業',
      body: 'ビジネス教育を軸とした選抜制の会員コミュニティ。無料のグロース、審査制のスタンダード、招待制のプライムの三層とToB向けプログラムで、実践できる人を育てます。',
      color: SITE_COLORS.ai
    }, {
      tag: 'Regional.',
      jp: 'アパレル事業',
      body: '地方の伝統工芸品を現代の需要へ再構築。国内はEC・店舗、海外はEC先行からシンガポールへと販路を広げ、価値を形として残します。',
      color: SITE_COLORS.koke
    }, {
      tag: 'Re.Com',
      jp: 'DX&AX事業',
      body: 'コミュニティではAI人材創出・AIリテラシー研修、企業研修ではAIコンサル・AIセミナーを提供します。',
      color: '#8a6d3b'
    }]
  },
  // ----- BUSINESS OVERVIEW (事業概要ページ / 組織図) -----
  businessTree: {
    lead: '木の根のように広がる事業構造。四つの事業が独立しながら、人と資金の循環をなしています。',
    footer: '活動エリア：魚沼（南魚沼市・湯沢町）／宮城／東京　─　今後、ご縁のある各地方地域へ拡大',
    tagline: '地域・人・未来をつなぎ、それぞれに価値を見出す',
    units: [{
      tag: 'Re.Event',
      jp: 'イベント事業',
      color: SITE_COLORS.ai,
      groups: [{
        name: 'Event Lab',
        items: ['イベント集客 OS', 'イベント開催支援サービス', '質の高い学生コミュニティ']
      }, {
        name: 'Events',
        items: ['地方創生ビジネスコンテスト', '地方創生アイデアソン', '地方産品交流会', '南魚沼諸イベント']
      }, {
        name: 'Consulting',
        items: ['イベント企画＆開発壁打ち', 'マネタイズ構築支援', 'イベントの運営サポート', '組織コンサルティング', '人事コンサルティング', '地域コンサルティング', '企業コンサルティング']
      }]
    }, {
      tag: 'Re.Lab',
      jp: 'コミュニティ事業',
      color: SITE_COLORS.koke,
      groups: [{
        branch: 'To C',
        name: 'グロース',
        items: ['無料コミュニティ', '経験蓄積', '情報蓄積', '自己内省サポート']
      }, {
        branch: 'To C',
        name: 'スタンダード',
        items: ['審査制の選抜型 有料コミュニティ', '前提必須知識', '時事会議', '企業研究会議', '社長 1on1', '1on1 コーチング', 'Event Lab の参加権利']
      }, {
        branch: 'To C',
        name: 'プライム',
        items: ['招待制の選抜型 有料コミュニティ', '起業伴走支援', 'コミュニティ創業支援', '就職伴走支援', 'インターン先紹介支援', '卒業後の進路伴走支援']
      }, {
        branch: 'To C',
        name: '六日町松下村塾',
        items: ['ビジネスの教養とスキル', 'AIの教養とスキル', 'アプリ開発の教養とスキル', '地方創生の教養とスキル', '人生設計の教養とスキル']
      }, {
        branch: 'To B',
        name: 'プレミアム',
        items: ['法人向けプログラム', '法人向けコミュニティ']
      }]
    }, {
      tag: 'Regional.',
      jp: 'アパレル事業',
      color: SITE_COLORS.akane,
      groups: [{
        name: '日本市場',
        items: ['地方の伝統工芸品の加工商品販売', '各地の伝統工芸品の仲介販売', '新規ブランド商品開発＆販売', '店舗／EC']
      }, {
        name: '海外市場',
        items: ['日本の伝統工芸品の加工商品販売', '日本の伝統工芸品の仲介販売', '販路地の伝統文化との融合商品開発', 'EC先行 → ポップアップ → 卸', 'シンガポール展開']
      }]
    }, {
      tag: 'Re.Com',
      jp: 'DX&AX事業',
      color: '#8a6d3b',
      groups: [{
        name: 'コミュニティ',
        items: ['AI人材創出', 'AIリテラシー研修']
      }, {
        name: '企業研修',
        items: ['AIコンサル', 'AIセミナー']
      }]
    }]
  },
  // ----- NEWS -----
  news: {
    lead: 'プロダクト、イベント、メディア掲載 ─ Regional Lab からの最新のお知らせです。',
    articles: [{
      no: '01',
      date: '2026.10.27',
      cat: 'EVENT',
      catColor: SITE_COLORS.ai,
      title: '2027年4月、六日町松下村塾を南魚沼市六日町駅前にて開塾。',
      lead: '「君は何を成すためにこの世に生を受けたのか。」── この地から、日本の礎を築く人材を。',
      body: ['この度、新潟県南魚沼市の中心地である六日町にて、松下村塾を立ち上げます。', '幕末のあの時代に、山口県の小さな村の小さな塾から日本の未来を変えた偉人を次々と輩出した「松下村塾」。', '吉田松陰が先生となり、「君は何を成すためにこの世に生を受けたのか」という志を生徒一人一人に問わせ、各々の未来への可能性とその術を与えた塾でありました。', '科学技術の進歩が目まぐるしく、情報化社会となった現代において、超少子高齢化を根幹に、様々な顕在的課題を有する日本にて、常に複雑に物事が絡み合い、先行きの暗い状況な今、「君は何を成すためにこの世に生を受けたのか。」を問いたいものであります。', 'AIという次世代の武器をものにし、一人一人が自立できる現代の環境において、殻に籠るのか、殻を破るのか。', '2027年4月からオフラインで始まるこの六日町松下村塾にあたって、実装する4ヶ月のプログラムを、プレイベントで、定員10名程度に向け、今回11月からプレリリースします。', '既に、定員の半数以上が参加確定しており、残り数名しか枠がないですが、ご興味ある方は、DMもしくは、コメントにてお待ちしております。', '旧来の松下村塾は、利用者に利用料を求めていなかったため、基本的には六日町松下村塾もプログラム参加者や利用者には、常に参加費をかけずに、学びたい人、何者かになりたい人、社会を変えたい人向けに常に開かれた塾として開校します。', 'この地から日本の礎を築く人材を輩出すべく、我々も尽力して参ります。'],
      img: 'assets/news-shokasonjuku.jpg',
      imgPos: '50% 42%',
      imgPosWide: '50% 31%'
    }, {
      no: '02',
      date: '2026.10.13',
      cat: 'PRODUCT',
      catColor: SITE_COLORS.koke,
      title: 'Re.Event 公式LINE 開設のお知らせ',
      lead: 'イベントを探す。人とつながる。相談する。その入口を、ひとつにまとめました。',
      body: 'Event Lab だけでなく、Re.Event 全体の情報とサービスを LINE から見られるようになりました。Events では月間カレンダーで、Re.Event 主催のイベントも他団体のイベントもまとめて確認でき、気になるものからそのまま申し込みへ進めます。Event Lab は人とつながり活動を広げる場、Consulting は企画や活動についてご相談いただく場です。共催申請・協賛申請や過去イベントの実績も、画面下のメニューからすぐにたどり着けます。',
      cover: {
        label: 'Re.Event',
        bg: SITE_COLORS.koke
      },
      url: 'https://line.me/R/ti/p/@129fzdbv',
      urlLabel: 'Re.Event公式LINEを見る'
    }, {
      no: '03',
      date: '2026.05.10',
      cat: 'PRODUCT',
      catColor: SITE_COLORS.ai,
      title: 'Re.Lab バージョン 2.0 リリースのお知らせ',
      lead: 'コミュニティの根幹を見直し、より個に寄り添うコーチング体験へ。新たな招待制システムと選抜プロセスを実装しました。',
      body: '個別最適化された伴走、企業研究会議のオンライン化、コーチングログのアーカイブ機能など、卒業後の進路実現をより強力にサポートします。',
      img: 'assets/news-relab-v2.jpg'
    }, {
      no: '04',
      date: '2026.05.10',
      cat: 'PRODUCT',
      catColor: SITE_COLORS.akane,
      title: 'Re.Event「Event Lab」リリースのお知らせ',
      lead: 'イベント主催者の集客課題を解決する、質と集客力を両立した次世代プラットフォームが誕生。',
      body: 'Event Lab は、イベント開催における集客のお悩みを解決する集客プラットフォームです。質の高いイベント情報の閲覧、質の高い学生との接点、(株)遊然様提供のマーケティング商材の学習機会、そして集客を確約するサービスまで ─ イベントに特化した魅力ある場をご用意しました。',
      img: 'assets/news-event-lab.jpg'
    }, {
      no: '05',
      date: '2026.04.20',
      cat: 'EVENT',
      catColor: SITE_COLORS.koke,
      title: '第3回 地方創生ビジネスコンテスト 9月開催のお知らせ',
      lead: '地域密着型の本質的な地方創生ビジコン、第3回の開催地・日程が決定しました。',
      body: '第3回となる今回も、対象地域に深く根を下ろし、2泊3日の没入型プログラムとして実施します。詳細は順次お知らせいたします。',
      img: 'assets/news-bizcon3.jpg'
    }, {
      no: '06',
      date: '2026.04.15',
      cat: 'EVENT',
      catColor: SITE_COLORS.akane,
      title: '第2回 地方産品大忘年会、今年も年末に開催決定',
      lead: '日本各地の特産品を持ち寄り、垣根を超えた交流の場を、今年も東京にて。',
      body: '昨年好評をいただいた地方産品大忘年会、第2回も2026年末に開催いたします。学生、社会人、社長 ─ 立場の異なる方々が地方の魅力を味わいながら交わる、特別な一夜を演出します。',
      img: 'assets/news-bonenkai2.jpg'
    }]
  },
  // ----- PARTNERS -----
  partners: {
    lead: '共に地方の未来を彩る、私たちの大切なパートナー様をご紹介します。',
    list: [{
      no: '01',
      name: 'H.O.I.Consulting 株式会社',
      en: 'H.O.I.Consulting, Inc.',
      relation: 'イベント支援・Re.Lab連携',
      url: 'https://eichi-oi.co.jp/company/',
      body: '2025年3月に開催しました地方創生ビジネスコンテストや2025年12月に開催しました地方産品大忘年会の両イベントにて、東京スクエアガーデン7Fの事務所を貸してくださり、同時に、両イベントの後援企業様として様々なご支援をご提供してくださった企業様であり、今後も、定例化していく地方産品大忘年会のイベントや多方面において、パートナー企業様として連携。',
      tags: ['イベント支援', 'コーチング提供', 'Re.Lab連携'],
      color: SITE_COLORS.ai
    }, {
      no: '02',
      name: '株式会社 遊然',
      en: 'Yuzen, Inc.',
      relation: 'マーケティング教材支援・イベント共催',
      url: 'https://yuu-zen.co.jp/',
      body: '2025年9月に開催しました第1回地方創生ビジネスコンテスト in 秋保や2026年3月に開催しました第2回地方創生ビジネスコンテスト in 蔵王の両イベントにて、イベントの共催を行い、他にも Re.Event の Event Lab にて、マーケティング教材の資料提供をしてくださるなど、多岐に渡り連携を行っており、今後も、定例化していくビジネスコンテストや多方面において、パートナー企業様として連携。',
      tags: ['マーケティング', 'イベント共催', 'Event Lab連携'],
      color: SITE_COLORS.akane
    }, {
      no: '03',
      name: '株式会社 LITERAS AI',
      en: 'LITERAS AI, Inc.',
      relation: '地方のDX&AX事業で協業提携',
      url: 'https://literas-ai.jp/',
      body: '地方のDX&AX事業で協業提携。',
      tags: ['DX', 'AX', '協業提携'],
      color: '#8a6d3b'
    }, {
      no: '04',
      name: '株式会社 島田組',
      en: 'Shimadagumi, Inc.',
      relation: 'DX&AX・イベント・コミュニティ協業',
      url: 'https://simadagumi.co.jp/',
      body: '新潟県南魚沼市におけるDX&AX事業、イベント事業、コミュニティ事業において、協業の提携。',
      tags: ['DX&AX', 'イベント事業', 'コミュニティ事業'],
      color: '#5d6e86'
    }]
  }
};

// 言語に応じて日本語版 / 英語版を返す（コンポーネントは window.siteData を読むだけでよい）
Object.defineProperty(window, 'siteData', {
  configurable: true,
  get: function () {
    return window.saiLang === 'en' && window.siteDataEn ? window.siteDataEn : window.siteDataJa;
  }
});
