// ==========================================================
// SITE DATA (EN) — 英語版コンテンツ。日本語版の構造をミラーします。
// 画像・URL・カラーは日本語版から継承します。
// ==========================================================
window.siteDataEn = (function () {
  const ja = window.siteDataJa;

  const business = [
    { jp: 'Events', body: ['With local government, businesses and residents,', 'we run ideathons and business contests on real regional issues,', 'offering students a genuine turning point in life.'], key: 'A turning point' },
    { jp: 'Community', body: ['A selective, invitation-based community offering', 'business knowledge, company research, 1-on-1s with founders and coaching.', 'By graduation, every member has become someone', '— that is the future we commit to.'], key: 'Become someone' },
    { jp: 'Apparel', body: ['Rebuilding regional crafts for modern demand.', 'As a brand Japan can be proud of,', 'we keep tradition and future in tangible form.'], key: 'Keep it in form' },
    { jp: 'DX & AX', body: ['We recognise the value of what remains analogue in the regions,', 'and solve the problems that analogue creates', 'without losing that value.'], key: 'Capture the value' },
  ];

  const timeline = [
    ['2024.12', 'Regional Ideathon', 'Online'],
    ['2025.03', 'Regional Business Contest', 'Tokyo Square Garden'],
    ['2025.09', '1st Business Contest in Akiu', 'Rantei, Miyagi'],
    ['2025.09', 'Regional × International Exchange', 'Online'],
    ['2025.12', 'Regional Products Year-End Gathering', 'Tokyo Square Garden'],
    ['2026.03', '2nd Business Contest in Zao', 'Mercure Miyagi Zao'],
  ];

  const members = [
    { role: 'Representative Director / CEO', jp: 'Kidera Soma', en: '木寺 蒼真', bio: ['Met Minamiuonuma and devoted himself to regional revitalization.', 'Moving from tourist to problem-solver, he founded Regional Lab', 'to preserve the appeal of regional Japan.'] },
    { role: 'Executive Officer / COO ─ Head of Re.Lab', jp: 'Nakahara Koki', en: '中原 光輝', bio: ['Representative of My Vision Lab.', 'Leads the community business across ToC and ToB,', 'walking beside members as they design their lives.'] },
    { role: 'Executive Officer / CMO ─ Head of Re.Event', jp: 'Mine Kanato', en: '峯 奏音', bio: ['Representative of HopeCreater and CRENECTION.', 'Leads Events / Event Lab / Consulting,', 'directing the design and operation of the event business.'] },
    { role: 'Executive Officer / CMO ─ Head of Regional.', jp: 'Watanabe Akira', en: '渡邉 輝', bio: ['Representative of Global Canvas Japan.', 'Leads the apparel business, delivering regional crafts', 'to the Japanese and overseas markets (retail and e-commerce).'] },
  ];

  const services = [
    { jp: 'Events', body: 'Planning and running regional business contests, ideathons and product exchange events. With the Event Lab audience platform and event consulting, we create the entry point into each region.' },
    { jp: 'Community', body: 'A selective membership community built on business education: free Growth, screened Standard, invitation-only Prime, plus programmes for companies — developing people who can execute.' },
    { jp: 'Apparel', body: 'Rebuilding regional crafts for modern demand. E-commerce and retail in Japan, e-commerce first then Singapore abroad — keeping value in tangible form.' },
    { jp: 'DX & AX', body: 'For communities: AI talent development and AI literacy training. For companies: AI consulting and AI seminars.' },
  ];

  const treeUnits = [
    {
      jp: 'Events',
      groups: [
        { name: 'Event Lab', items: ['Event audience platform', 'Event production support', 'High-quality student community'] },
        { name: 'Events', items: ['Regional business contests', 'Regional ideathons', 'Regional product exchanges', 'Minamiuonuma events'] },
        { name: 'Event Consulting', items: ['Event planning & development sparring', 'Monetisation design support', 'Operational support'] },
      ],
    },
    {
      jp: 'Community',
      groups: [
        { branch: 'To C', name: 'Growth', items: ['Free community', 'Building experience', 'Building knowledge', 'Self-reflection support'] },
        { branch: 'To C', name: 'Standard', items: ['Screened, paid community', 'Foundational knowledge', 'Current-affairs sessions', 'Company research sessions', '1-on-1 with founders', '1-on-1 coaching', 'Access to Event Lab'] },
        { branch: 'To C', name: 'Prime', items: ['Invitation-only, paid community', 'Startup support', 'Community founding support', 'Career support', 'Internship introductions', 'Post-graduation guidance'] },
        { branch: 'To B', name: 'To B', items: ['Corporate programmes', 'Corporate community'] },
      ],
    },
    {
      jp: 'Apparel',
      groups: [
        { name: 'Japan market', items: ['Products made from regional crafts', 'Wholesale of regional crafts', 'New brand development & sales', 'Retail / e-commerce'] },
        { name: 'Overseas market', items: ['Products made from Japanese crafts', 'Wholesale of Japanese crafts', 'Fusion products with local traditions', 'E-commerce → pop-up → wholesale', 'Expansion into Singapore'] },
      ],
    },
    {
      jp: 'DX & AX',
      groups: [
        { name: 'Community', items: ['AI talent development', 'AI literacy training'] },
        { name: 'Corporate training', items: ['AI consulting', 'AI seminars'] },
      ],
    },
  ];

  const articles = [
    {
      title: 'Re.Lab version 2.0 released',
      lead: 'We rebuilt the core of the community for coaching that stays closer to each individual, with a new invitation system and selection process.',
      body: 'Individually optimised guidance, online company-research sessions and an archive of coaching logs now support each member’s path after graduation far more strongly.',
    },
    {
      title: 'Re.Event launches “Event Lab”',
      lead: 'A next-generation platform that solves organisers’ audience problems while keeping quality high.',
      body: 'Event Lab is an audience platform for event organisers: high-quality event listings, access to motivated students, marketing material provided by Yuzen, Inc., and a service that guarantees attendance — a place built specifically for events.',
    },
    {
      title: '3rd Regional Business Contest to be held in September',
      lead: 'The venue and dates for the third edition of our community-rooted business contest are set.',
      body: 'As before, we will root the programme deeply in the host region and run it as an immersive three-day, two-night experience. Details will follow.',
    },
    {
      title: '2nd Regional Products Year-End Gathering confirmed',
      lead: 'Specialities from across Japan, and a place to meet across boundaries — again in Tokyo this year.',
      body: 'Following last year’s reception, the second gathering will be held at the end of 2026. Students, professionals and founders will meet over the flavours of regional Japan for one special evening.',
    },
  ];

  const partners = [
    {
      name: 'H.O.I.Consulting, Inc.', en: 'H.O.I.Consulting 株式会社',
      relation: 'Event support / Re.Lab collaboration',
      body: 'For both the March 2025 regional business contest and the December 2025 regional products gathering, they provided their office on the 7th floor of Tokyo Square Garden and supported both events as a sponsor. We continue to work with them on the recurring year-end gathering and beyond.',
      tags: ['Event support', 'Coaching', 'Re.Lab'],
    },
    {
      name: 'Yuzen, Inc.', en: '株式会社 遊然',
      relation: 'Marketing material / co-hosted events',
      body: 'They co-hosted the 1st business contest in Akiu (September 2025) and the 2nd in Zao (March 2026), and provide marketing material for Re.Event’s Event Lab. We continue to collaborate on the recurring contests and beyond.',
      tags: ['Marketing', 'Co-hosted events', 'Event Lab'],
    },
    {
      name: 'Reboshi', en: '地方創生団体 リーボシ',
      relation: 'Regional revitalization / community',
      body: 'They co-hosted the December 2025 regional products year-end gathering, and we continue to collaborate on the recurring gathering and beyond.',
      tags: ['Regional revitalization', 'Community', 'Co-hosted events'],
    },
    {
      name: 'LITERAS AI, Inc.', en: '株式会社 LITERAS AI',
      relation: 'Partnership in regional DX & AX',
      body: 'Partnership in regional DX & AX.',
      tags: ['DX', 'AX', 'Partnership'],
    },
    {
      name: 'Shimadagumi, Inc.', en: '株式会社 島田組',
      relation: 'DX & AX / events / community',
      body: 'Partnership across DX & AX, events and community in Minamiuonuma, Niigata.',
      tags: ['DX & AX', 'Events', 'Community'],
    },
  ];

  return {
    ...ja,
    hero: {
      kicker: 'A company that keeps supporting Minamiuonuma, Niigata',
      title1: 'Coloring the future',
      title2: 'of regional Japan',
    },
    mission: {
      heading: [
        ['The ', 'foundation', 'akane', ' of the regions,'],
        ['coloring their ', 'future', 'ai', '.'],
      ],
      body: 'Headquartered in Minamiuonuma, Niigata, we are a regional revitalization company operating across Uonuma (Minamiuonuma and Yuzawa), Miyagi and Tokyo. Events, community, apparel and DX & AX — four businesses that describe regional revitalization in three dimensions.',
    },
    business: ja.business.map((b, i) => ({ ...b, jp: business[i].jp, body: business[i].body, key: business[i].key })),
    timeline: ja.timeline.map((t, i) => [timeline[i][0], timeline[i][1], timeline[i][2], t[3]]),
    about: {
      lead: 'Why Regional Lab exists, and what it is aiming at — our intent, and the four people behind it.',
      purpose: {
        heading: 'We raise the capability of the individuals involved in a region, not the region itself.',
        body: 'When individuals grow and return to their region, the region moves as a result. Keeping that order is our consistent stance. We are not an organisation that talks about regional revitalization; we are one that makes it work as a business.',
      },
      background: {
        heading: 'From one tourist’s doubt to a company.',
        paragraphs: [
          'For someone raised in Tokyo, regional Japan is out of the ordinary — and precisely for that reason it holds a value that moves you deeply.',
          'Minamiuonuma in Niigata gave us that moment. Travelling there and seeing its decline from many angles, we asked ourselves whether such an appealing place would really remain forever.',
          'To keep Japan a country worth admiring, and to keep it something the world can respect, we founded the company to solve problems from the micro perspective of the regions.',
        ],
      },
      pillars: [
        ['Philosophy', 'Through the growth of the individual, we remain the foundation of Japan.'],
        ['Mission', 'Walking beside each region’s history, we uncover new hope.'],
        ['Vision', 'A company that supports Minamiuonuma, an organization that colors the future of regional Japan.'],
      ],
      members: ja.about.members.map((m, i) => ({ ...m, role: members[i].role, jp: members[i].jp, en: members[i].en, bio: members[i].bio })),
    },
    company: {
      lead: 'Corporate information and our four businesses — the blueprint of a regional revitalization company headquartered in Minamiuonuma, Niigata.',
      info: {
        founded: 'October 9, 2024',
        officers: '4 (1 representative director, 3 executive officers)',
        capital: 'JPY 3,000,000',
        offices: [
          ['Head office', '2476 Urasa, Minamiuonuma, Niigata 949-7302, Japan'],
          ['Areas of activity', 'Uonuma (Minamiuonuma / Yuzawa) — Miyagi — Tokyo'],
        ],
      },
      services: ja.company.services.map((s, i) => ({ ...s, jp: services[i].jp, body: services[i].body })),
    },
    businessTree: {
      lead: 'A business structure that spreads like the roots of a tree. Four businesses stand alone, yet circulate people and capital between them.',
      footer: 'Areas of activity: Uonuma (Minamiuonuma / Yuzawa) — Miyagi — Tokyo　─　expanding to other regions as relationships grow',
      tagline: 'Connecting regions, people and the future — finding value in each',
      units: ja.businessTree.units.map((u, i) => ({ ...u, jp: treeUnits[i].jp, groups: treeUnits[i].groups })),
    },
    news: {
      lead: 'Products, events and media — the latest from Regional Lab.',
      articles: ja.news.articles.map((a, i) => ({ ...a, title: articles[i].title, lead: articles[i].lead, body: articles[i].body })),
    },
    partners: {
      lead: 'The partners who color the future of regional Japan together with us.',
      list: ja.partners.list.map((p, i) => ({ ...p, name: partners[i].name, en: partners[i].en, relation: partners[i].relation, body: partners[i].body, tags: partners[i].tags })),
    },
  };
})();
