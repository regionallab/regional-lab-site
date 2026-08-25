// ==========================================================
// I18N — 言語切り替え（JP / EN）
// t('日本語') で英語表示に切り替わります。翻訳は下の EN 辞書。
// ==========================================================
window.saiLang = (function () {
  try { return localStorage.getItem('sai-lang') === 'en' ? 'en' : 'ja'; } catch (e) { return 'ja'; }
})();

const SAI_EN = {
  // nav / chrome
  '私たちについて': 'About Us',
  '会社概要': 'Company',
  '事業概要': 'Business',
  'お知らせ': 'News',
  'お問い合わせ': 'Contact',
  'パートナー': 'Partners',
  'ホーム': 'Home',
  '株式会社': 'Co., Ltd.',
  'メニュー': 'Menu',

  // hero
  '─ 新潟県南魚沼市を支え続ける企業へ': '─ A company that keeps supporting Minamiuonuma, Niigata',
  '地方の未来を、': 'Coloring the future',
  '彩る組織へ': 'of regional Japan',
  '事業を見る →': 'Our business →',
  'イベント、コミュニティ、アパレル、DX&AX。': 'Events, community, apparel, DX & AX.',
  '四つの事業で、地方創生を立体的に描く。': 'Four businesses, one three-dimensional approach to regional revitalization.',

  // mission
  '─ 理念 / 使命 / 展望': '─ Philosophy / Mission / Vision',
  '理念': 'Philosophy',
  '使命': 'Mission',
  '展望': 'Vision',
  '個の研鑽をもって、': 'Through the growth of the individual,',
  '日本の礎であり続ける。': 'we remain the foundation of Japan.',
  '地域の歩みに寄り添い、': 'Walking beside each region’s history,',
  '新たな希望を見出す。': 'we uncover new hope.',
  '南魚沼を支える企業へ、': 'A company that supports Minamiuonuma,',
  '地方の未来を彩る組織へ。': 'an organization that colors the future of regional Japan.',

  // business (home)
  '四つの': 'Four ',
  '柱': 'Pillars',

  // timeline
  '歩みは続く': 'The journey continues',
  '歩': 'Journey',

  // CTA / footer
  'その地に、もう一度、': 'Bringing light back',
  '光を。': 'to the region.',
  '個の研鑽をもって、日本の礎であり続ける。': 'Through the growth of the individual, we remain the foundation of Japan.',
  '魚沼エリア × 宮城エリア × 東京エリア': 'Uonuma × Miyagi × Tokyo',
  '目的と設立背景': 'Purpose & Founding',
  'メンバー紹介': 'Members',
  '事業紹介': 'Our Businesses',
  '会社情報': 'Corporate Profile',
  '新着記事': 'Latest articles',
  'プレスリリース': 'Press releases',
  'メディア掲載': 'In the media',
  '法人の方': 'For businesses',
  '学生の方': 'For students',
  '取材依頼': 'Press inquiries',
  '目的と設立背景 / メンバー紹介': 'Purpose & Founding / Members',

  // section labels
  '設立': 'Founded',
  '資本金': 'Capital',
  '役員': 'Officers',
  '拠点': 'Locations',
  '会社名': 'Company name',
  '英名': 'English name',
  '代表': 'Representative',
  '本社': 'Head office',
  '活動エリア': 'Areas of activity',
  '本社所在地': 'Head office',
  '新潟県南魚沼市を支え続ける企業へ': 'A company that keeps supporting Minamiuonuma, Niigata',
  '地方の未来を、共に彩りませんか。': 'Shall we color the future of regional Japan together?',

  // footer sitemap sub-items
  '目的と設立背景': 'Purpose & founding',
  'H.O.I.Consulting': 'H.O.I.Consulting',
  '(株)遊然': 'Yuzen, Inc.',
  'リーボシ': 'Reboshi',

  // news
  'もっと見る': 'Read more',

  // partners
  '地方の未来を、共に彩りませんか。': 'Shall we color the future of regional Japan together?',
  '協業のご相談 →': 'Discuss a partnership →',

  // contact
  'ご相談・取材・パートナーシップ等のお問い合わせを承っております。お気軽にご連絡ください。': 'We welcome enquiries about collaboration, press and partnerships. Please feel free to get in touch.',
  'お電話でのご連絡': 'By phone',
  'お問い合わせフォーム': 'Inquiry form',
  'お問い合わせ種別': 'Inquiry type',
  '選択してください': 'Please select',
  '会社名・団体名': 'Company / organization',
  'お名前': 'Name',
  'ふりがな': 'Name (kana)',
  'メールアドレス': 'Email',
  'お電話番号': 'Phone',
  'お問い合わせ内容': 'Message',
  'プライバシーポリシーに同意します': 'I agree to the privacy policy',
  '送信する　→': 'Send　→',
  '送信中…': 'Sending…',
  '取材・メディア': 'Press / media',
  'パートナー協業': 'Partnership',
  'その他': 'Other',
  '山田 太郎': 'Taro Yamada',
  'やまだ たろう': 'たろう / Taro',
  '株式会社 ○○○': 'Your company',
  'ご相談内容をご記入ください。': 'Please describe your inquiry.',
};

window.t = function (jp) {
  if (window.saiLang !== 'en') return jp;
  return Object.prototype.hasOwnProperty.call(SAI_EN, jp) ? SAI_EN[jp] : jp;
};

window.saiSetLang = function (lang) {
  window.saiLang = lang === 'en' ? 'en' : 'ja';
  try { localStorage.setItem('sai-lang', window.saiLang); } catch (e) {}
  if (window.saiOnLangChange) window.saiOnLangChange(window.saiLang);
};
