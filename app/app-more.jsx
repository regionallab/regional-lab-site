// ==========================================================
// APP MORE — その他タブ配下の画面
// 私たちについて / 会社概要 / パートナー / 保存した項目 / 検索 /
// お問い合わせ / アプリについて
// ==========================================================

// ----------------------------------------------------------
// その他（メニュー）
// ----------------------------------------------------------
function RaMore() {
  const savedIds = raSaved.use();
  const [lang, setLang] = React.useState(window.saiLang || 'ja');

  const menu = [
    ['more/about', '私たちについて', 'ABOUT'],
    ['more/company', '会社概要', 'COMPANY'],
    ['more/partners', 'パートナー', 'PARTNERS'],
    ['more/contact', 'お問い合わせ', 'CONTACT'],
  ];
  const tools = [
    ['more/search', '検索', 'SEARCH'],
    ['more/saved', '保存した項目', 'SAVED'],
    ['more/app', 'アプリについて', 'ABOUT THIS APP'],
  ];

  const switchLang = (l) => { window.saiSetLang(l); setLang(l); };

  return (
    <RaScreen>
      <div style={raStyles.page}>
        <RaSectionHead label="MENU" jp={raT('メニュー')} />
        <div style={{ marginBottom: 26 }}>
          {menu.map(([path, jp, en]) => (
            <RaRow key={path} title={raT(jp)} meta={en} onClick={() => raNavigate(path)} />
          ))}
        </div>

        <RaSectionHead label="TOOLS" jp={raT('アプリの機能')} color={raPalette.koke} />
        <div style={{ marginBottom: 26 }}>
          {tools.map(([path, jp, en]) => (
            <RaRow key={path} title={raT(jp)} meta={en} onClick={() => raNavigate(path)}
              right={path === 'more/saved' && savedIds.length > 0
                ? <RaChip color={raPalette.akane}>{savedIds.length}</RaChip>
                : undefined} />
          ))}
        </div>

        <RaSectionHead label="LANGUAGE" jp={raT('言語')} color={raPalette.ai} />
        <div style={{ display: 'flex', border: `1px solid ${raPalette.ink}33`, marginBottom: 26 }}>
          {[['ja', '日本語'], ['en', 'English']].map(([id, label]) => (
            <button key={id} onClick={() => switchLang(id)} style={{
              flex: 1, padding: '12px 0', cursor: 'pointer', border: 'none',
              background: lang === id ? raPalette.ink : 'transparent',
              color: lang === id ? raPalette.paper : raPalette.ink,
              fontFamily: raFont.jpSerif, fontSize: 13, letterSpacing: 1.6,
            }}>{label}</button>
          ))}
        </div>

        <a href="../index.html" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '14px 16px', textDecoration: 'none',
          border: `1px solid ${raPalette.ink}33`, color: raPalette.ink,
        }}>
          <span style={{ fontFamily: raFont.jpSerif, fontSize: 13.5, letterSpacing: 1.2 }}>{raT('Web サイトを開く')}</span>
          <RaIcon name="globe" size={17} color={raPalette.muted} />
        </a>
      </div>
      <RaFooterMark />
    </RaScreen>
  );
}

// ----------------------------------------------------------
// 私たちについて
// ----------------------------------------------------------
function RaAbout() {
  const a = window.siteData.about;
  return (
    <RaScreen>
      <div style={raStyles.page}>
        <RaSectionHead label="ABOUT US" jp={raT('私たちについて')} />
        <p style={raStyles.lead}>{a.lead}</p>

        <div style={{ padding: '18px 18px 20px', background: raPalette.ai, color: raPalette.paper, marginBottom: 22 }}>
          <div style={{ fontFamily: raFont.mono, fontSize: 9, letterSpacing: 2.4, color: '#d8c7a5' }}>—— PURPOSE</div>
          <h3 style={{ margin: '12px 0 0', fontFamily: raFont.jpSerif, fontSize: 17, fontWeight: 500, lineHeight: 1.8, letterSpacing: 0.8 }}>
            {raBreakAtComma(a.purpose.heading)}
          </h3>
          <p style={{ margin: '14px 0 0', fontFamily: raFont.jpAlt, fontSize: 13, lineHeight: 2, letterSpacing: 0.4, color: '#e7dcc4' }}>
            {a.purpose.body}
          </p>
        </div>

        <RaSectionHead label="BACKGROUND" jp={a.background.heading} color={raPalette.akane} />
        {a.background.paragraphs.map((p, i) => (
          <p key={i} style={{ ...raStyles.body, marginBottom: 16 }}>{p}</p>
        ))}

        <div style={{ marginTop: 26 }}>
          <RaSectionHead label="PHILOSOPHY" jp={raT('理念') + ' / ' + raT('使命') + ' / ' + raT('展望')} color={raPalette.koke} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {a.pillars.map(([label, text], i) => (
              <RaCard key={i} accent={[raPalette.akane, raPalette.ai, raPalette.koke][i]} style={{ padding: '14px 16px' }}>
                <div style={{ fontFamily: raFont.mono, fontSize: 9, letterSpacing: 2, color: raPalette.muted }}>{label.toUpperCase()}</div>
                <div style={{ marginTop: 7, fontFamily: raFont.jpSerif, fontSize: 15, lineHeight: 1.85, letterSpacing: 0.8 }}>{raBreakAtComma(text)}</div>
              </RaCard>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 28 }}>
          <RaSectionHead label="MEMBERS" jp={raT('メンバー紹介')} color={raPalette.ai} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {a.members.map((m, i) => (
              <RaCard key={i} style={{ padding: 0 }}>
                <div style={{ display: 'flex' }}>
                  <div style={{ width: 104, flexShrink: 0 }}>
                    <RaImage src={m.img} alt={m.jp} ratio="3 / 4" style={{ height: '100%' }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0, padding: '13px 13px 14px 15px' }}>
                    <div style={{ fontFamily: raFont.mono, fontSize: 9, letterSpacing: 1.2, color: raPalette.akane, lineHeight: 1.6 }}>{m.role}</div>
                    <div style={{ marginTop: 7, fontFamily: raFont.jpSerif, fontSize: 16, letterSpacing: 1.4, color: raPalette.ink }}>{m.jp}</div>
                    <div style={{ marginTop: 3, fontFamily: raFont.enSerif, fontSize: 12.5, fontStyle: 'italic', color: raPalette.muted }}>{m.en}</div>
                    <div style={{ marginTop: 9 }}>
                      {m.bio.map((line, j) => (
                        <div key={j} style={{ fontFamily: raFont.jpAlt, fontSize: 11.5, lineHeight: 1.85, color: raPalette.muted }}>{line}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </RaCard>
            ))}
          </div>
        </div>
      </div>
      <RaFooterMark />
    </RaScreen>
  );
}

// ----------------------------------------------------------
// 会社概要
// ----------------------------------------------------------
function RaCompany() {
  const d = window.siteData;
  const c = d.company;
  const rows = [
    [raT('会社名'), 'Regional Lab ' + raT('株式会社')],
    [raT('英名'), 'Regional Lab Co., Ltd.'],
    [raT('設立'), c.info.founded],
    [raT('資本金'), c.info.capital],
    [raT('役員'), c.info.officers],
  ].concat(c.info.offices.map(([k, v]) => [k, v]));

  return (
    <RaScreen>
      <div style={raStyles.page}>
        <RaSectionHead label="COMPANY" jp={raT('会社概要')} />
        <p style={raStyles.lead}>{c.lead}</p>

        <div style={{ border: `1px solid ${raPalette.ink}22`, background: raPalette.card, marginBottom: 26 }}>
          {rows.map(([k, v], i) => (
            <div key={i} style={{
              display: 'flex', gap: 12, padding: '13px 15px',
              borderBottom: i < rows.length - 1 ? `1px solid ${raPalette.ink}14` : 'none',
            }}>
              <div style={{ width: 84, flexShrink: 0, fontFamily: raFont.jpSerif, fontSize: 12, letterSpacing: 1, color: raPalette.muted }}>{k}</div>
              <div style={{ flex: 1, fontFamily: raFont.jpAlt, fontSize: 13, lineHeight: 1.8, letterSpacing: 0.3, color: raPalette.ink }}>{v}</div>
            </div>
          ))}
        </div>

        <RaSectionHead label="SERVICES" jp={raT('事業紹介')} color={raPalette.koke} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {c.services.map((s) => (
            <RaCard key={s.tag} accent={s.color} onClick={() => raNavigate('business/' + raSlug(s.tag))} style={{ padding: '14px 16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontFamily: raFont.mono, fontSize: 10, letterSpacing: 1.6, color: s.color }}>{s.tag}</span>
                <span style={{ fontFamily: raFont.jpSerif, fontSize: 14.5, letterSpacing: 1, color: raPalette.ink }}>{s.jp}</span>
                <span style={{ marginLeft: 'auto' }}><RaIcon name="chevron" size={15} color={raPalette.muted} /></span>
              </div>
              <p style={{ margin: '10px 0 0', fontFamily: raFont.jpAlt, fontSize: 12.5, lineHeight: 1.9, letterSpacing: 0.3, color: raPalette.muted }}>{s.body}</p>
            </RaCard>
          ))}
        </div>

        <div style={{ marginTop: 24 }}>
          <a href="https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E7%9C%8C%E5%8D%97%E9%AD%9A%E6%B2%BC%E5%B8%82%E6%B5%A6%E4%BD%902476"
            target="_blank" rel="noreferrer"
            style={{
              display: 'flex', alignItems: 'center', gap: 10, padding: '14px 16px',
              border: `1px solid ${raPalette.ink}33`, textDecoration: 'none', color: raPalette.ink,
            }}>
            <RaIcon name="pin" size={18} color={raPalette.koke} />
            <span style={{ fontFamily: raFont.jpSerif, fontSize: 13.5, letterSpacing: 1 }}>{raT('地図で見る')}</span>
            <span style={{ marginLeft: 'auto' }}><RaIcon name="chevron" size={15} color={raPalette.muted} /></span>
          </a>
        </div>
      </div>
      <RaFooterMark />
    </RaScreen>
  );
}

// ----------------------------------------------------------
// パートナー
// ----------------------------------------------------------
function RaPartners() {
  const p = window.siteData.partners;
  return (
    <RaScreen>
      <div style={raStyles.page}>
        <RaSectionHead label="PARTNERS" jp={raT('パートナー')} />
        <p style={raStyles.lead}>{p.lead}</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {p.list.map((item) => (
            <RaCard key={item.no} accent={item.color} style={{ padding: '16px 16px 18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontFamily: raFont.mono, fontSize: 10, letterSpacing: 1.6, color: item.color }}>{item.no}</span>
                <span style={{ flex: 1, height: 1, background: `${raPalette.ink}1a` }} />
                <span style={{ fontFamily: raFont.mono, fontSize: 9, letterSpacing: 1.4, color: raPalette.muted }}>{item.relation}</span>
              </div>
              <div style={{ marginTop: 11, fontFamily: raFont.jpSerif, fontSize: 16, letterSpacing: 1, color: raPalette.ink }}>{item.name}</div>
              <div style={{ marginTop: 3, fontFamily: raFont.enSerif, fontSize: 12.5, fontStyle: 'italic', color: raPalette.muted }}>{item.en}</div>
              <p style={{ margin: '11px 0 0', fontFamily: raFont.jpAlt, fontSize: 12.5, lineHeight: 1.95, letterSpacing: 0.3, color: raPalette.ink }}>{item.body}</p>
              <div style={{ marginTop: 12, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {item.tags.map((t) => <RaChip key={t} color={item.color}>{t}</RaChip>)}
              </div>
              {item.url && (
                <a href={item.url} target="_blank" rel="noreferrer" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 14,
                  fontFamily: raFont.mono, fontSize: 10, letterSpacing: 1.6, color: item.color, textDecoration: 'none',
                }}>
                  WEBSITE <RaIcon name="chevron" size={13} color={item.color} />
                </a>
              )}
            </RaCard>
          ))}
        </div>
        <button onClick={() => raNavigate('more/contact')} style={{ ...raWideBtn, marginTop: 20 }}>
          {raT('協業のご相談 →')}
        </button>
      </div>
      <RaFooterMark />
    </RaScreen>
  );
}

// ----------------------------------------------------------
// 保存した項目
// ----------------------------------------------------------
function RaSavedScreen() {
  const ids = raSaved.use();
  const d = window.siteData;

  const items = ids.map((id) => {
    const [kind, key] = id.split(':');
    if (kind === 'news') {
      const a = d.news.articles.filter((x) => x.no === key)[0];
      return a && { id, title: a.title, meta: `${a.date}　${a.cat}`, color: a.catColor, path: 'news/' + a.no };
    }
    if (kind === 'event') {
      const t = d.timeline[Number(key)];
      return t && { id, title: t[1], meta: `${t[0]}　${t[2]}`, color: raPalette.koke, path: 'events' };
    }
    if (kind === 'biz') {
      const b = d.business.filter((x) => raSlug(x.tag) === key)[0];
      return b && { id, title: b.jp, meta: b.tag, color: b.accent, path: 'business/' + key };
    }
    return null;
  }).filter(Boolean);

  return (
    <RaScreen>
      <div style={raStyles.page}>
        <RaSectionHead label="SAVED" jp={raT('保存した項目')} color={raPalette.akane} />
        {items.length === 0 ? (
          <RaEmpty
            text={raT('保存した項目はまだありません。お知らせやイベントのしおりアイコンから保存できます。')}
            action={<button onClick={() => raNavigate('news')} style={{ ...raWideBtn, marginTop: 20 }}>{raT('お知らせ')} →</button>}
          />
        ) : (
          items.map((it) => (
            <RaRow key={it.id} title={it.title} meta={it.meta} accent={it.color}
              onClick={() => raNavigate(it.path)}
              right={<RaSaveButton id={it.id} size={18} />} />
          ))
        )}
      </div>
      <RaFooterMark />
    </RaScreen>
  );
}

// ----------------------------------------------------------
// 検索 — サイト内のすべてのコンテンツを横断
// ----------------------------------------------------------
function raSearchIndex() {
  const d = window.siteData;
  const index = [];
  d.business.forEach((b) => index.push({
    kind: raT('事業'), title: b.jp, text: [b.tag, b.en, b.key].concat(b.body).join(' '),
    color: b.accent, path: 'business/' + raSlug(b.tag),
  }));
  d.businessTree.units.forEach((u) => u.groups.forEach((g) => g.items.forEach((item) => index.push({
    kind: u.tag, title: item, text: g.name + ' ' + u.jp, color: u.color, path: 'business/' + raSlug(u.tag),
  }))));
  d.news.articles.forEach((a) => index.push({
    kind: a.cat, title: a.title, text: [a.lead, a.body, a.date].join(' '), color: a.catColor, path: 'news/' + a.no,
  }));
  d.timeline.forEach((t) => index.push({
    kind: raT('イベント'), title: t[1], text: t[0] + ' ' + t[2], color: raPalette.koke, path: 'events',
  }));
  d.partners.list.forEach((p) => index.push({
    kind: raT('パートナー'), title: p.name, text: [p.en, p.relation, p.body].concat(p.tags).join(' '),
    color: p.color, path: 'more/partners',
  }));
  d.about.members.forEach((m) => index.push({
    kind: raT('メンバー紹介'), title: m.jp, text: [m.en, m.role].concat(m.bio).join(' '),
    color: raPalette.ai, path: 'more/about',
  }));
  return index;
}

function RaSearch() {
  const [q, setQ] = React.useState('');
  const index = React.useMemo(raSearchIndex, [window.saiLang]);
  const query = q.trim().toLowerCase();
  const results = query.length === 0 ? [] : index.filter((it) =>
    (it.title + ' ' + it.text + ' ' + it.kind).toLowerCase().indexOf(query) >= 0
  );

  return (
    <RaScreen>
      <div style={raStyles.page}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10, padding: '12px 14px',
          background: raPalette.card, border: `1px solid ${raPalette.ink}33`,
        }}>
          <RaIcon name="search" size={18} color={raPalette.muted} />
          <input
            value={q} onChange={(e) => setQ(e.target.value)} autoFocus
            placeholder={raT('事業・お知らせ・イベントを検索')}
            style={{
              flex: 1, border: 'none', outline: 'none', background: 'transparent',
              fontFamily: raFont.jpAlt, fontSize: 15, color: raPalette.ink, minWidth: 0,
            }} />
          {q && (
            <button onClick={() => setQ('')} style={raStyles.iconBtn} aria-label="クリア">
              <RaIcon name="close" size={15} color={raPalette.muted} />
            </button>
          )}
        </div>

        <div style={{ marginTop: 18 }}>
          {query.length === 0 ? (
            <RaEmpty text={raT('キーワードを入力してください。')} />
          ) : results.length === 0 ? (
            <RaEmpty text={raT('該当する項目は見つかりませんでした。')} />
          ) : (
            <React.Fragment>
              <div style={{ fontFamily: raFont.mono, fontSize: 9.5, letterSpacing: 2, color: raPalette.muted, marginBottom: 6 }}>
                {results.length} RESULTS
              </div>
              {results.map((r, i) => (
                <RaRow key={i} title={r.title} meta={r.kind} accent={r.color} onClick={() => raNavigate(r.path)} />
              ))}
            </React.Fragment>
          )}
        </div>
      </div>
      <RaFooterMark />
    </RaScreen>
  );
}

// ----------------------------------------------------------
// お問い合わせ（Formspree 送信、未設定時はメールソフト起動）
// ----------------------------------------------------------
function RaContact() {
  const [sending, setSending] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const [error, setError] = React.useState('');
  const categories = ['法人の方', '学生の方', '取材・メディア', 'パートナー協業', 'その他'];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const f = e.target;
    if (!f.privacy.checked) { setError(raT('プライバシーポリシーへの同意が必要です。')); return; }
    const cat = f.category.value, name = f.name.value, email = f.email.value, msg = f.message.value;
    if (!cat || !name || !email || !msg) { setError(raT('必須項目（種別・お名前・メール・内容）をご入力ください。')); return; }
    setError('');

    const payload = {
      'お問い合わせ種別': cat, '会社名・団体名': f.org.value, 'お名前': name,
      'ふりがな': f.kana.value, 'メールアドレス': email, 'お電話番号': f.tel.value, 'お問い合わせ内容': msg,
      _subject: `【お問い合わせ】${cat} / ${name} 様`,
    };
    const endpoint = window.siteData.formEndpoint;
    const fallback = window.siteData.formFallbackEmail;

    if (endpoint && endpoint.indexOf('REPLACE_WITH_YOUR_ID') < 0) {
      try {
        setSending(true);
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        setSending(false);
        if (res.ok) { setDone(true); f.reset(); return; }
        setError(raT('送信に失敗しました。お手数ですが、お電話または直接メールにてご連絡ください。'));
      } catch (err) {
        setSending(false);
        setError(raT('送信に失敗しました。通信環境をご確認のうえ、再度お試しください。'));
      }
      return;
    }

    const body =
      `お問い合わせ種別：${cat}\n会社名・団体名：${payload['会社名・団体名']}\nお名前：${name}\n` +
      `ふりがな：${payload['ふりがな']}\nメールアドレス：${email}\nお電話番号：${payload['お電話番号']}\n\n` +
      `【お問い合わせ内容】\n${msg}\n`;
    window.location.href = `mailto:${fallback}?subject=${encodeURIComponent(payload._subject)}&body=${encodeURIComponent(body)}`;
  };

  if (done) {
    return (
      <RaScreen>
        <div style={{ padding: '60px 24px', textAlign: 'center' }}>
          <RaIcon name="check" size={44} color={raPalette.koke} strokeWidth={1.2} />
          <h2 style={{ margin: '20px 0 0', fontFamily: raFont.jpSerif, fontSize: 20, fontWeight: 500, letterSpacing: 1.4, color: raPalette.ink }}>
            {raT('送信しました')}
          </h2>
          <p style={{ margin: '14px 0 0', fontFamily: raFont.jpAlt, fontSize: 13, lineHeight: 2, color: raPalette.muted }}>
            {raT('お問い合わせいただき、ありがとうございます。担当より順次ご連絡いたします。')}
          </p>
          <button onClick={() => raNavigate('home')} style={{ ...raWideBtn, marginTop: 28 }}>{raT('ホーム')} →</button>
        </div>
      </RaScreen>
    );
  }

  return (
    <RaScreen>
      <div style={raStyles.page}>
        <RaSectionHead label="CONTACT" jp={raT('お問い合わせ')} />
        <p style={raStyles.lead}>
          {raT('ご相談・取材・パートナーシップ等のお問い合わせを承っております。お気軽にご連絡ください。')}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 24 }}>
          <RaQuickAction icon="phone" label="080-9541-6870" href="tel:08095416870" />
          <RaQuickAction icon="mail" label={raT('メール')} href={'mailto:' + window.siteData.formFallbackEmail} />
        </div>
        <div style={{
          marginBottom: 24, padding: '12px 14px', border: `1px dashed ${raPalette.ink}44`,
          fontFamily: raFont.jpAlt, fontSize: 11.5, lineHeight: 1.9, color: raPalette.muted,
        }}>
          FAX : 03-5391-6870　/　{raT('受付時間')} : {raT('平日 9:00 – 18:00')}
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <RaField label={raT('お問い合わせ種別')} required>
            <select name="category" style={raInput} defaultValue="">
              <option value="">{raT('選択してください')}</option>
              {categories.map((c) => <option key={c} value={c}>{raT(c)}</option>)}
            </select>
          </RaField>
          <RaField label={raT('会社名・団体名')}>
            <input name="org" style={raInput} placeholder={raT('株式会社 ○○○')} />
          </RaField>
          <RaField label={raT('お名前')} required>
            <input name="name" style={raInput} placeholder={raT('山田 太郎')} />
          </RaField>
          <RaField label={raT('ふりがな')}>
            <input name="kana" style={raInput} placeholder={raT('やまだ たろう')} />
          </RaField>
          <RaField label={raT('メールアドレス')} required>
            <input name="email" type="email" inputMode="email" style={raInput} placeholder="example@example.com" />
          </RaField>
          <RaField label={raT('お電話番号')}>
            <input name="tel" type="tel" inputMode="tel" style={raInput} placeholder="090-0000-0000" />
          </RaField>
          <RaField label={raT('お問い合わせ内容')} required>
            <textarea name="message" rows={6} style={{ ...raInput, resize: 'vertical' }} placeholder={raT('ご相談内容をご記入ください。')} />
          </RaField>

          <label style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: raFont.jpAlt, fontSize: 12.5, color: raPalette.ink }}>
            <input name="privacy" type="checkbox" style={{ width: 17, height: 17, accentColor: raPalette.ai }} />
            {raT('プライバシーポリシーに同意します')}
          </label>

          {error && (
            <div style={{
              padding: '11px 14px', background: `${raPalette.akane}14`, border: `1px solid ${raPalette.akane}55`,
              fontFamily: raFont.jpAlt, fontSize: 12.5, lineHeight: 1.8, color: raPalette.akane,
            }}>{error}</div>
          )}

          <button type="submit" disabled={sending} style={{
            marginTop: 4, padding: '15px 0', border: 'none', cursor: sending ? 'default' : 'pointer',
            background: sending ? raPalette.muted : raPalette.ai, color: raPalette.paper,
            fontFamily: raFont.jpSerif, fontSize: 14, letterSpacing: 2.4,
          }}>{sending ? raT('送信中…') : raT('送信する　→')}</button>
        </form>

        <div style={{
          marginTop: 20, fontFamily: raFont.jpAlt, fontSize: 11, lineHeight: 1.9, color: raPalette.muted,
        }}>
          ※ {raT('いただいたお問い合わせ内容は、当社のプライバシーポリシーに基づき適切に管理いたします。')}
        </div>
      </div>
      <RaFooterMark />
    </RaScreen>
  );
}

const raInput = {
  width: '100%', boxSizing: 'border-box', padding: '13px 14px',
  background: raPalette.card, border: `1px solid ${raPalette.ink}33`,
  fontFamily: raFont.jpAlt, fontSize: 16, color: raPalette.ink,  // 16px：iOS の自動ズームを防ぐ
  letterSpacing: 0.5, outline: 'none', borderRadius: 0, WebkitAppearance: 'none',
};

function RaField({ label, required, children }) {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 7 }}>
        <span style={{ fontFamily: raFont.jpSerif, fontSize: 12.5, letterSpacing: 1.2, color: raPalette.ink }}>{label}</span>
        {required && <span style={{ fontFamily: raFont.mono, fontSize: 8.5, letterSpacing: 1, color: raPalette.akane }}>REQUIRED</span>}
      </div>
      {children}
    </div>
  );
}

// ----------------------------------------------------------
// アプリについて（インストール・オフライン・保存データ）
// ----------------------------------------------------------
function RaAppInfo({ installPrompt, onInstall, online }) {
  const savedIds = raSaved.use();
  const readIds = raRead.use();
  const [cleared, setCleared] = React.useState(false);

  const clearAll = () => {
    raSaved.read().slice().forEach((id) => raSaved.toggle(id));
    raRead.read().slice().forEach((id) => raRead.toggle(id));
    setCleared(true);
    setTimeout(() => setCleared(false), 2000);
  };

  const rows = [
    [raT('バージョン'), window.RA_APP_VERSION],
    [raT('接続状態'), online ? raT('オンライン') : raT('オフライン（保存済みの内容を表示中）')],
    [raT('保存した項目'), String(savedIds.length)],
    [raT('既読のお知らせ'), String(readIds.length)],
  ];

  return (
    <RaScreen>
      <div style={raStyles.page}>
        <RaSectionHead label="ABOUT THIS APP" jp={raT('アプリについて')} />
        <p style={raStyles.lead}>
          {raT('Regional Lab の公式アプリです。事業・イベント・お知らせを、オフラインでもご覧いただけます。')}
        </p>

        {installPrompt && (
          <button onClick={onInstall} style={{
            width: '100%', marginBottom: 22, padding: '15px 0', border: 'none', cursor: 'pointer',
            background: raPalette.akane, color: raPalette.paper,
            fontFamily: raFont.jpSerif, fontSize: 14, letterSpacing: 2,
          }}>{raT('ホーム画面に追加する')}</button>
        )}

        <div style={{ border: `1px solid ${raPalette.ink}22`, background: raPalette.card, marginBottom: 24 }}>
          {rows.map(([k, v], i) => (
            <div key={i} style={{
              display: 'flex', gap: 12, padding: '13px 15px',
              borderBottom: i < rows.length - 1 ? `1px solid ${raPalette.ink}14` : 'none',
            }}>
              <div style={{ width: 96, flexShrink: 0, fontFamily: raFont.jpSerif, fontSize: 12, letterSpacing: 1, color: raPalette.muted }}>{k}</div>
              <div style={{ flex: 1, fontFamily: raFont.jpAlt, fontSize: 13, lineHeight: 1.7, color: raPalette.ink }}>{v}</div>
            </div>
          ))}
        </div>

        <button onClick={clearAll} style={raWideBtn}>
          {cleared ? raT('消去しました') : raT('保存データを消去する')}
        </button>

        <div style={{ marginTop: 26, fontFamily: raFont.jpAlt, fontSize: 11.5, lineHeight: 1.95, color: raPalette.muted }}>
          {raT('※ 保存した項目と既読の状態は、この端末のブラウザ内にのみ保存されます。')}
        </div>
      </div>
      <RaFooterMark />
    </RaScreen>
  );
}

Object.assign(window, {
  RaMore, RaAbout, RaCompany, RaPartners, RaSavedScreen, RaSearch, RaContact, RaAppInfo,
  RaField, raInput, raSearchIndex,
});
