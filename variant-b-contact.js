// 自動生成ファイル — 編集しないでください。編集は variant-b-contact.jsx を直し、bash tools/build.sh を実行。
// CONTACT — お問い合わせ
// Matches variant-b-pages palette/typography.

const saiC = {
  paper: '#f1ead8',
  paperDeep: '#e6dcc0',
  ink: '#1f1a14',
  ai: '#1f3552',
  koke: '#5a6b3d',
  akane: '#9a3324',
  muted: '#766a52'
};
const saiCFont = {
  jpSerif: '"Zen Old Mincho", "Noto Serif JP", serif',
  jpAlt: '"Shippori Mincho", "Noto Serif JP", serif',
  enSerif: '"Cormorant Garamond", serif',
  mono: '"JetBrains Mono", ui-monospace, monospace'
};
function SaiContactHeader() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: saiC.paperDeep,
      padding: '80px 56px 64px',
      borderBottom: `1px solid ${saiC.ink}22`,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: saiCFont.mono,
      fontSize: 11,
      letterSpacing: 4,
      color: saiC.akane,
      marginBottom: 18
    }
  }, "SECTION 05 \u2014 CONTACT"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: saiCFont.jpSerif,
      fontSize: 72,
      fontWeight: 500,
      margin: 0,
      color: saiC.ink,
      letterSpacing: '0.06em',
      lineHeight: 1.1
    }
  }, window.t('お問い合わせ')), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: saiCFont.enSerif,
      fontStyle: 'italic',
      fontSize: 28,
      color: saiC.muted
    }
  }, "Contact")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 24,
      fontFamily: saiCFont.jpSerif,
      fontSize: 15,
      color: saiC.ink,
      lineHeight: 2,
      maxWidth: 720
    }
  }, "\u3054\u76F8\u8AC7\u30FB\u53D6\u6750\u30FB\u30D1\u30FC\u30C8\u30CA\u30FC\u30B7\u30C3\u30D7\u7B49\u306E\u304A\u554F\u3044\u5408\u308F\u305B\u3092\u627F\u3063\u3066\u304A\u308A\u307E\u3059\u3002", /*#__PURE__*/React.createElement("br", null), "\u4EE5\u4E0B\u306E\u30D5\u30A9\u30FC\u30E0\u3001\u307E\u305F\u306F\u30E1\u30FC\u30EB\u30FB\u304A\u96FB\u8A71\u3088\u308A\u3001\u304A\u6C17\u8EFD\u306B\u3054\u9023\u7D61\u304F\u3060\u3055\u3044\u3002"));
}
function ContactField({
  label,
  en,
  required,
  children
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: saiCFont.jpSerif,
      fontSize: 14,
      letterSpacing: 2,
      color: saiC.ink
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: saiC.akane,
      marginLeft: 6
    }
  }, "*")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: saiCFont.mono,
      fontSize: 9,
      letterSpacing: 2,
      color: saiC.muted
    }
  }, en)), children);
}
const inputStyle = {
  fontFamily: '"Zen Old Mincho", serif',
  fontSize: 15,
  padding: '14px 16px',
  background: '#f1ead8',
  border: `1px solid ${saiC.ink}33`,
  color: saiC.ink,
  outline: 'none',
  letterSpacing: 1
};
function SaiContactForm() {
  const categories = ['法人の方', '学生の方', '取材・メディア', 'パートナー協業', 'その他'];
  const [sending, setSending] = React.useState(false);
  const handleSubmit = async e => {
    e.preventDefault();
    const f = e.target;
    if (!f.privacy.checked) {
      alert('プライバシーポリシーへの同意が必要です。');
      return;
    }
    const cat = f.category.value,
      name = f.name.value,
      kana = f.kana.value;
    const org = f.org.value,
      email = f.email.value,
      tel = f.tel.value,
      msg = f.message.value;
    if (!cat || !name || !email || !msg) {
      alert('必須項目（種別・お名前・メール・内容）をご入力ください。');
      return;
    }
    const endpoint = window.siteData.formEndpoint;
    const fallback = window.siteData.formFallbackEmail;
    const payload = {
      'お問い合わせ種別': cat,
      '会社名・団体名': org,
      'お名前': name,
      'ふりがな': kana,
      'メールアドレス': email,
      'お電話番号': tel,
      'お問い合わせ内容': msg,
      _subject: `【お問い合わせ】${cat} / ${name} 様`
    };
    if (endpoint && !endpoint.includes('REPLACE_WITH_YOUR_ID')) {
      try {
        setSending(true);
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });
        setSending(false);
        if (res.ok) {
          alert('お問い合わせを送信しました。ありがとうございます。');
          f.reset();
        } else {
          alert('送信に失敗しました。お手数ですが、お電話または直接メールにてご連絡ください。');
        }
      } catch (err) {
        setSending(false);
        alert('送信に失敗しました。お手数ですが、お電話または直接メールにてご連絡ください。');
      }
      return;
    }

    // フォールバック：メールソフト起動
    const body = `お問い合わせ種別：${cat}\n会社名・団体名：${org}\nお名前：${name}\n` + `ふりがな：${kana}\nメールアドレス：${email}\nお電話番号：${tel}\n\n` + `【お問い合わせ内容】\n${msg}\n`;
    window.location.href = `mailto:${fallback}?subject=${encodeURIComponent(payload._subject)}&body=${encodeURIComponent(body)}`;
  };
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit,
    style: {
      background: saiC.paperDeep,
      padding: '48px 52px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 28,
      borderTop: `2px solid ${saiC.ai}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: saiCFont.mono,
      fontSize: 10,
      letterSpacing: 3,
      color: saiC.akane
    }
  }, "\u2014\u2014 INQUIRY FORM"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: saiCFont.jpSerif,
      fontSize: 26,
      margin: '8px 0 0',
      letterSpacing: '0.05em',
      color: saiC.ink
    }
  }, window.t('お問い合わせフォーム'))), /*#__PURE__*/React.createElement(ContactField, {
    label: window.t('お問い合わせ種別'),
    en: "CATEGORY",
    required: true
  }, /*#__PURE__*/React.createElement("select", {
    name: "category",
    style: inputStyle,
    defaultValue: ""
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, window.t('選択してください')), categories.map(c => /*#__PURE__*/React.createElement("option", {
    key: c,
    value: c
  }, window.t(c))))), /*#__PURE__*/React.createElement(ContactField, {
    label: window.t('会社名・団体名'),
    en: "ORGANIZATION"
  }, /*#__PURE__*/React.createElement("input", {
    name: "org",
    type: "text",
    placeholder: "\u682A\u5F0F\u4F1A\u793E \u25CB\u25CB\u25CB",
    style: inputStyle
  })), /*#__PURE__*/React.createElement(ContactField, {
    label: window.t('お名前'),
    en: "NAME",
    required: true
  }, /*#__PURE__*/React.createElement("input", {
    name: "name",
    type: "text",
    placeholder: "\u5C71\u7530 \u592A\u90CE",
    style: inputStyle
  })), /*#__PURE__*/React.createElement(ContactField, {
    label: window.t('ふりがな'),
    en: "KANA"
  }, /*#__PURE__*/React.createElement("input", {
    name: "kana",
    type: "text",
    placeholder: "\u3084\u307E\u3060 \u305F\u308D\u3046",
    style: inputStyle
  })), /*#__PURE__*/React.createElement(ContactField, {
    label: window.t('メールアドレス'),
    en: "EMAIL",
    required: true
  }, /*#__PURE__*/React.createElement("input", {
    name: "email",
    type: "email",
    placeholder: "example@example.com",
    style: inputStyle
  })), /*#__PURE__*/React.createElement(ContactField, {
    label: window.t('お電話番号'),
    en: "PHONE"
  }, /*#__PURE__*/React.createElement("input", {
    name: "tel",
    type: "tel",
    placeholder: "090-0000-0000",
    style: inputStyle
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(ContactField, {
    label: window.t('お問い合わせ内容'),
    en: "MESSAGE",
    required: true
  }, /*#__PURE__*/React.createElement("textarea", {
    name: "message",
    rows: 7,
    placeholder: "\u3054\u76F8\u8AC7\u5185\u5BB9\u3092\u3054\u8A18\u5165\u304F\u3060\u3055\u3044\u3002",
    style: {
      ...inputStyle,
      resize: 'vertical',
      lineHeight: 1.8
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1',
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    name: "privacy",
    id: "privacy",
    style: {
      width: 16,
      height: 16
    }
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "privacy",
    style: {
      fontFamily: saiCFont.jpSerif,
      fontSize: 13,
      color: saiC.ink,
      letterSpacing: 1
    }
  }, window.t('プライバシーポリシーに同意します'))), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1',
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "submit",
    disabled: sending,
    style: {
      fontFamily: saiCFont.jpSerif,
      fontSize: 15,
      letterSpacing: 4,
      padding: '16px 44px',
      background: saiC.ink,
      color: saiC.paper,
      border: 'none',
      cursor: sending ? 'wait' : 'pointer',
      opacity: sending ? 0.6 : 1
    }
  }, sending ? window.t('送信中…') : window.t('送信する　→'))));
}
function ContactCard({
  tag,
  jp,
  en,
  lines,
  color
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: saiC.paper,
      padding: '32px 28px',
      borderTop: `2px solid ${color}`,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: saiCFont.mono,
      fontSize: 10,
      letterSpacing: 3,
      color
    }
  }, tag), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: saiCFont.jpSerif,
      fontSize: 20,
      color: saiC.ink,
      letterSpacing: '0.05em',
      fontWeight: 500
    }
  }, jp), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: saiCFont.enSerif,
      fontStyle: 'italic',
      fontSize: 14,
      color: saiC.muted,
      marginTop: 2
    }
  }, en)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      marginTop: 8
    }
  }, lines.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      fontFamily: saiCFont.jpSerif,
      fontSize: 14,
      color: saiC.ink,
      letterSpacing: 1,
      lineHeight: 1.8
    }
  }, l))));
}
function SaiContact() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: saiC.paper,
      fontFamily: saiCFont.jpSerif,
      color: saiC.ink
    }
  }, /*#__PURE__*/React.createElement(SaiContactHeader, null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '64px 56px 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 20,
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(ContactCard, {
    tag: "PHONE",
    jp: window.t('お電話でのご連絡'),
    en: "Phone Inquiry",
    color: saiC.akane,
    lines: ['FAX : 03-5391-6870', '携帯 : 080-9541-6870', '受付時間 : 平日 9:00 – 18:00']
  }), /*#__PURE__*/React.createElement(ContactCard, {
    tag: "OFFICE",
    jp: window.t('本社所在地'),
    en: "Head Office",
    color: saiC.koke,
    lines: ['〒949-7302', '新潟県南魚沼市浦佐 2476']
  })), /*#__PURE__*/React.createElement(SaiContactForm, null), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      padding: '24px 28px',
      border: `1px dashed ${saiC.ink}55`,
      fontFamily: saiCFont.jpSerif,
      fontSize: 13,
      color: saiC.muted,
      letterSpacing: 1,
      lineHeight: 1.9
    }
  }, "\u203B \u3044\u305F\u3060\u3044\u305F\u304A\u554F\u3044\u5408\u308F\u305B\u5185\u5BB9\u306F\u3001\u5F53\u793E\u306E\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC\u306B\u57FA\u3065\u304D\u9069\u5207\u306B\u7BA1\u7406\u3044\u305F\u3057\u307E\u3059\u3002", /*#__PURE__*/React.createElement("br", null), "\u203B \u304A\u554F\u3044\u5408\u308F\u305B\u5185\u5BB9\u306B\u3088\u308A\u3001\u3054\u8FD4\u4FE1\u307E\u3067\u306B\u304A\u6642\u9593\u3092\u3044\u305F\u3060\u304F\u5834\u5408\u304C\u3054\u3056\u3044\u307E\u3059\u3002")));
}
Object.assign(window, {
  SaiContact
});
