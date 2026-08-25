// CONTACT — お問い合わせ
// Matches variant-b-pages palette/typography.

const saiC = {
  paper: '#f1ead8',
  paperDeep: '#e6dcc0',
  ink: '#1f1a14',
  ai: '#1f3552',
  koke: '#5a6b3d',
  akane: '#9a3324',
  muted: '#766a52',
};
const saiCFont = {
  jpSerif: '"Zen Old Mincho", "Noto Serif JP", serif',
  jpAlt: '"Shippori Mincho", "Noto Serif JP", serif',
  enSerif: '"Cormorant Garamond", serif',
  mono: '"JetBrains Mono", ui-monospace, monospace',
};

function SaiContactHeader() {
  return (
    <div style={{ background: saiC.paperDeep, padding: '80px 56px 64px', borderBottom: `1px solid ${saiC.ink}22`, position: 'relative', overflow: 'hidden' }}>
      <div style={{ fontFamily: saiCFont.mono, fontSize: 11, letterSpacing: 4, color: saiC.akane, marginBottom: 18 }}>SECTION 05 — CONTACT</div>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 40 }}>
        <h1 style={{ fontFamily: saiCFont.jpSerif, fontSize: 72, fontWeight: 500, margin: 0, color: saiC.ink, letterSpacing: '0.06em', lineHeight: 1.1 }}>
          {window.t('お問い合わせ')}
        </h1>
        <div style={{ fontFamily: saiCFont.enSerif, fontStyle: 'italic', fontSize: 28, color: saiC.muted }}>Contact</div>
      </div>
      <p style={{ marginTop: 24, fontFamily: saiCFont.jpSerif, fontSize: 15, color: saiC.ink, lineHeight: 2, maxWidth: 720 }}>
        ご相談・取材・パートナーシップ等のお問い合わせを承っております。<br />
        以下のフォーム、またはメール・お電話より、お気軽にご連絡ください。
      </p>
    </div>
  );
}

function ContactField({ label, en, required, children }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <span style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
        <span style={{ fontFamily: saiCFont.jpSerif, fontSize: 14, letterSpacing: 2, color: saiC.ink }}>
          {label}{required && <span style={{ color: saiC.akane, marginLeft: 6 }}>*</span>}
        </span>
        <span style={{ fontFamily: saiCFont.mono, fontSize: 9, letterSpacing: 2, color: saiC.muted }}>{en}</span>
      </span>
      {children}
    </label>
  );
}

const inputStyle = {
  fontFamily: '"Zen Old Mincho", serif',
  fontSize: 15,
  padding: '14px 16px',
  background: '#f1ead8',
  border: `1px solid ${saiC.ink}33`,
  color: saiC.ink,
  outline: 'none',
  letterSpacing: 1,
};

function SaiContactForm() {
  const categories = ['法人の方', '学生の方', '取材・メディア', 'パートナー協業', 'その他'];

  const [sending, setSending] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const f = e.target;
    if (!f.privacy.checked) { alert('プライバシーポリシーへの同意が必要です。'); return; }
    const cat = f.category.value, name = f.name.value, kana = f.kana.value;
    const org = f.org.value, email = f.email.value, tel = f.tel.value, msg = f.message.value;
    if (!cat || !name || !email || !msg) { alert('必須項目（種別・お名前・メール・内容）をご入力ください。'); return; }

    const endpoint = window.siteData.formEndpoint;
    const fallback = window.siteData.formFallbackEmail;
    const payload = {
      'お問い合わせ種別': cat, '会社名・団体名': org, 'お名前': name,
      'ふりがな': kana, 'メールアドレス': email, 'お電話番号': tel, 'お問い合わせ内容': msg,
      _subject: `【お問い合わせ】${cat} / ${name} 様`,
    };

    if (endpoint && !endpoint.includes('REPLACE_WITH_YOUR_ID')) {
      try {
        setSending(true);
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
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
    const body =
      `お問い合わせ種別：${cat}\n会社名・団体名：${org}\nお名前：${name}\n` +
      `ふりがな：${kana}\nメールアドレス：${email}\nお電話番号：${tel}\n\n` +
      `【お問い合わせ内容】\n${msg}\n`;
    window.location.href =
      `mailto:${fallback}?subject=${encodeURIComponent(payload._subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form onSubmit={handleSubmit} style={{
      background: saiC.paperDeep,
      padding: '48px 52px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 28,
      borderTop: `2px solid ${saiC.ai}`,
    }}>
      <div style={{ gridColumn: '1 / -1' }}>
        <div style={{ fontFamily: saiCFont.mono, fontSize: 10, letterSpacing: 3, color: saiC.akane }}>—— INQUIRY FORM</div>
        <h3 style={{ fontFamily: saiCFont.jpSerif, fontSize: 26, margin: '8px 0 0', letterSpacing: '0.05em', color: saiC.ink }}>{window.t('お問い合わせフォーム')}</h3>
      </div>

      <ContactField label={window.t('お問い合わせ種別')} en="CATEGORY" required>
        <select name="category" style={inputStyle} defaultValue="">
          <option value="" disabled>{window.t('選択してください')}</option>
          {categories.map(c => <option key={c} value={c}>{window.t(c)}</option>)}
        </select>
      </ContactField>
      <ContactField label={window.t('会社名・団体名')} en="ORGANIZATION">
        <input name="org" type="text" placeholder="株式会社 ○○○" style={inputStyle} />
      </ContactField>

      <ContactField label={window.t('お名前')} en="NAME" required>
        <input name="name" type="text" placeholder="山田 太郎" style={inputStyle} />
      </ContactField>
      <ContactField label={window.t('ふりがな')} en="KANA">
        <input name="kana" type="text" placeholder="やまだ たろう" style={inputStyle} />
      </ContactField>

      <ContactField label={window.t('メールアドレス')} en="EMAIL" required>
        <input name="email" type="email" placeholder="example@example.com" style={inputStyle} />
      </ContactField>
      <ContactField label={window.t('お電話番号')} en="PHONE">
        <input name="tel" type="tel" placeholder="090-0000-0000" style={inputStyle} />
      </ContactField>

      <div style={{ gridColumn: '1 / -1' }}>
        <ContactField label={window.t('お問い合わせ内容')} en="MESSAGE" required>
          <textarea name="message" rows={7} placeholder="ご相談内容をご記入ください。" style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.8 }} />
        </ContactField>
      </div>

      <div style={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'center', gap: 14, marginTop: 4 }}>
        <input type="checkbox" name="privacy" id="privacy" style={{ width: 16, height: 16 }} />
        <label htmlFor="privacy" style={{ fontFamily: saiCFont.jpSerif, fontSize: 13, color: saiC.ink, letterSpacing: 1 }}>{window.t('プライバシーポリシーに同意します')}</label>
      </div>

      <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'flex-end', marginTop: 8 }}>
        <button type="submit" disabled={sending} style={{
          fontFamily: saiCFont.jpSerif, fontSize: 15, letterSpacing: 4,
          padding: '16px 44px', background: saiC.ink, color: saiC.paper,
          border: 'none', cursor: sending ? 'wait' : 'pointer', opacity: sending ? 0.6 : 1,
        }}>{sending ? window.t('送信中…') : window.t('送信する　→')}</button>
      </div>
    </form>
  );
}

function ContactCard({ tag, jp, en, lines, color }) {
  return (
    <div style={{ background: saiC.paper, padding: '32px 28px', borderTop: `2px solid ${color}`, display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ fontFamily: saiCFont.mono, fontSize: 10, letterSpacing: 3, color }}>{tag}</div>
      <div>
        <div style={{ fontFamily: saiCFont.jpSerif, fontSize: 20, color: saiC.ink, letterSpacing: '0.05em', fontWeight: 500 }}>{jp}</div>
        <div style={{ fontFamily: saiCFont.enSerif, fontStyle: 'italic', fontSize: 14, color: saiC.muted, marginTop: 2 }}>{en}</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 8 }}>
        {lines.map((l, i) => (
          <div key={i} style={{ fontFamily: saiCFont.jpSerif, fontSize: 14, color: saiC.ink, letterSpacing: 1, lineHeight: 1.8 }}>{l}</div>
        ))}
      </div>
    </div>
  );
}

function SaiContact() {
  return (
    <div style={{ background: saiC.paper, fontFamily: saiCFont.jpSerif, color: saiC.ink }}>
      <SaiContactHeader />

      <div style={{ padding: '64px 56px 96px' }}>
        {/* Direct contact cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, marginBottom: 48 }}>
          <ContactCard
            tag="PHONE"
            jp={window.t('お電話でのご連絡')}
            en="Phone Inquiry"
            color={saiC.akane}
            lines={['FAX : 03-5391-6870', '携帯 : 080-9541-6870', '受付時間 : 平日 9:00 – 18:00']}
          />
          <ContactCard
            tag="OFFICE"
            jp={window.t('本社所在地')}
            en="Head Office"
            color={saiC.koke}
            lines={['〒949-7302', '新潟県南魚沼市浦佐 2476']}
          />
        </div>

        {/* Form */}
        <SaiContactForm />

        {/* Footer note */}
        <div style={{ marginTop: 40, padding: '24px 28px', border: `1px dashed ${saiC.ink}55`, fontFamily: saiCFont.jpSerif, fontSize: 13, color: saiC.muted, letterSpacing: 1, lineHeight: 1.9 }}>
          ※ いただいたお問い合わせ内容は、当社のプライバシーポリシーに基づき適切に管理いたします。<br />
          ※ お問い合わせ内容により、ご返信までにお時間をいただく場合がございます。
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { SaiContact });
