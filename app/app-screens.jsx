// ==========================================================
// APP SCREENS — ホーム / 事業 / イベント / お知らせ
// 表示するテキストはすべて window.siteData（サイトと同じ内容）から取得します。
// ==========================================================

// 事業タグから URL 用のスラッグを作る（Re.Lab -> re-lab）
function raSlug(tag) {
  return String(tag).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

// お知らせのうち EVENT カテゴリのものを「開催予定」として扱う
function raUpcoming() {
  return (window.siteData.news.articles || []).filter((a) => a.cat === 'EVENT');
}

// ----------------------------------------------------------
// ホーム
// ----------------------------------------------------------
function RaHome() {
  const d = window.siteData;
  const upcoming = raUpcoming();
  const readIds = raRead.use();

  return (
    <RaScreen>
      {/* ヒーロー */}
      <div style={{ position: 'relative', background: raPalette.ai, color: raPalette.paper, padding: '34px 20px 30px', overflow: 'hidden' }}>
        <span aria-hidden="true" style={{
          position: 'absolute', right: -22, top: 6, fontFamily: raFont.jpSerif, fontSize: 168,
          lineHeight: 1, color: raPalette.paper, opacity: 0.06, pointerEvents: 'none', userSelect: 'none',
        }}>彩</span>
        <div style={{ fontFamily: raFont.mono, fontSize: 9.5, letterSpacing: 2.6, lineHeight: 1.9, color: '#d8c7a5' }}>
          —— {d.hero.kicker}
        </div>
        <h1 style={{
          margin: '16px 0 0', fontFamily: raFont.jpSerif, fontSize: 30, fontWeight: 500,
          letterSpacing: '0.05em', lineHeight: 1.55,
        }}>
          {d.hero.title1}<br />{d.hero.title2}
        </h1>
        <p style={{
          margin: '18px 0 0', fontFamily: raFont.jpAlt, fontSize: 13, lineHeight: 1.95,
          letterSpacing: 0.6, color: '#e7dcc4', opacity: 0.92,
        }}>
          {d.mission.body}
        </p>
        <div style={{ marginTop: 20, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <button onClick={() => raNavigate('business')} style={{
            background: raPalette.akane, color: raPalette.paper, border: 'none',
            padding: '11px 18px', fontFamily: raFont.jpSerif, fontSize: 13, letterSpacing: 1.6, cursor: 'pointer',
          }}>{raT('事業を見る →')}</button>
          <button onClick={() => raNavigate('more/contact')} style={{
            background: 'transparent', color: raPalette.paper, border: `1px solid ${raPalette.paper}66`,
            padding: '11px 18px', fontFamily: raFont.jpSerif, fontSize: 13, letterSpacing: 1.6, cursor: 'pointer',
          }}>{raT('お問い合わせ')}</button>
        </div>
        <div style={{ marginTop: 22, fontFamily: raFont.mono, fontSize: 9, letterSpacing: 2.4, color: '#d8c7a5', opacity: 0.8 }}>
          EST. 2024.10.09 ─ MINAMIUONUMA, NIIGATA
        </div>
      </div>

      {/* 理念 / 使命 / 展望 */}
      <div style={raStyles.page}>
        <RaSectionHead label="PHILOSOPHY" jp={raT('理念')+' / '+raT('使命')+' / '+raT('展望')} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {d.about.pillars.map(([label, text], i) => (
            <RaCard key={i} accent={[raPalette.akane, raPalette.ai, raPalette.koke][i]} style={{ padding: '14px 16px' }}>
              <div style={{ fontFamily: raFont.mono, fontSize: 9, letterSpacing: 2, color: raPalette.muted }}>
                {label.toUpperCase()}
              </div>
              <div style={{ marginTop: 7, fontFamily: raFont.jpSerif, fontSize: 15, lineHeight: 1.85, letterSpacing: 0.8, color: raPalette.ink }}>
                {raBreakAtComma(text)}
              </div>
            </RaCard>
          ))}
        </div>
      </div>

      {/* 開催予定 */}
      {upcoming.length > 0 && (
        <div style={raStyles.page}>
          <RaSectionHead label="UPCOMING" jp={raT('開催予定')} color={raPalette.koke} />
          <RaCard onClick={() => raNavigate('events')} accent={raPalette.koke}>
            <RaImage src={upcoming[0].img} alt={upcoming[0].title} ratio="16 / 9" />
            <div style={{ padding: '14px 16px 16px' }}>
              <div style={{ fontFamily: raFont.mono, fontSize: 9.5, letterSpacing: 1.8, color: raPalette.koke }}>
                {upcoming[0].date}　{upcoming[0].cat}
              </div>
              <div style={{ marginTop: 8, fontFamily: raFont.jpSerif, fontSize: 16, lineHeight: 1.6, letterSpacing: 0.6, color: raPalette.ink }}>
                {upcoming[0].title}
              </div>
            </div>
          </RaCard>
        </div>
      )}

      {/* 四つの柱 */}
      <div style={raStyles.page}>
        <RaSectionHead label="BUSINESS" jp={raT('四つの') + raT('柱')} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {d.business.map((b) => (
            <RaCard key={b.tag} onClick={() => raNavigate('business/' + raSlug(b.tag))} accent={b.accent} style={{ padding: '13px 13px 15px' }}>
              <div style={{ fontFamily: raFont.mono, fontSize: 10, letterSpacing: 1.4, color: b.accent }}>{b.tag}</div>
              <div style={{ marginTop: 7, fontFamily: raFont.jpSerif, fontSize: 14.5, letterSpacing: 0.8, color: raPalette.ink }}>{b.jp}</div>
              <div style={{ marginTop: 8, fontFamily: raFont.jpAlt, fontSize: 11.5, letterSpacing: 0.4, color: raPalette.muted, lineHeight: 1.7 }}>
                「{b.key}」
              </div>
            </RaCard>
          ))}
        </div>
      </div>

      {/* 最新のお知らせ */}
      <div style={raStyles.page}>
        <RaSectionHead label="NEWS" jp={raT('お知らせ')} color={raPalette.ai} />
        {d.news.articles.slice(0, 3).map((a) => (
          <RaRow key={a.no}
            title={a.title}
            meta={`${a.date}　${a.cat}`}
            accent={a.catColor}
            onClick={() => raNavigate('news/' + a.no)}
            right={readIds.indexOf('news:' + a.no) < 0
              ? <RaChip color={raPalette.akane} filled>NEW</RaChip>
              : <RaIcon name="chevron" size={16} color={raPalette.muted} />}
          />
        ))}
        <button onClick={() => raNavigate('news')} style={raWideBtn}>{raT('もっと見る')} →</button>
      </div>

      {/* クイックアクション */}
      <div style={raStyles.page}>
        <RaSectionHead label="QUICK" jp={raT('お問い合わせ')} color={raPalette.gold} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
          <RaQuickAction icon="phone" label={raT('電話')} href="tel:08095416870" />
          <RaQuickAction icon="mail" label={raT('メール')} href={'mailto:' + window.siteData.formFallbackEmail} />
          <RaQuickAction icon="pin" label={raT('本社')} href="https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E7%9C%8C%E5%8D%97%E9%AD%9A%E6%B2%BC%E5%B8%82%E6%B5%A6%E4%BD%902476" />
        </div>
      </div>

      <RaFooterMark />
    </RaScreen>
  );
}

const raWideBtn = {
  width: '100%', marginTop: 14, padding: '12px 0',
  background: 'transparent', border: `1px solid ${raPalette.ink}33`,
  fontFamily: raFont.jpSerif, fontSize: 13, letterSpacing: 1.8, color: raPalette.ink, cursor: 'pointer',
};

function RaQuickAction({ icon, label, href }) {
  return (
    <a href={href} target={href.indexOf('http') === 0 ? '_blank' : undefined} rel="noreferrer"
      style={{
        textDecoration: 'none', background: raPalette.card, border: `1px solid ${raPalette.ink}1a`,
        padding: '15px 6px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        color: raPalette.ink,
      }}>
      <RaIcon name={icon} size={20} color={raPalette.gold} />
      <span style={{ fontFamily: raFont.jpSerif, fontSize: 12, letterSpacing: 1 }}>{label}</span>
    </a>
  );
}

function RaFooterMark() {
  return (
    <div style={{ padding: '34px 18px 26px', textAlign: 'center' }}>
      <div style={{ fontFamily: raFont.mono, fontSize: 9, letterSpacing: 2.6, color: raPalette.muted }}>
        REGIONAL LAB CO., LTD.
      </div>
      <div style={{ marginTop: 8, fontFamily: raFont.jpSerif, fontSize: 12, letterSpacing: 1.2, color: raPalette.muted }}>
        {raT('魚沼エリア × 宮城エリア × 東京エリア')}
      </div>
    </div>
  );
}

// ----------------------------------------------------------
// 事業（一覧）
// ----------------------------------------------------------
function RaBusinessList() {
  const d = window.siteData;
  return (
    <RaScreen>
      <div style={raStyles.page}>
        <RaSectionHead label="BUSINESS" jp={raT('事業概要')} />
        <p style={raStyles.lead}>{d.businessTree.lead}</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {d.business.map((b) => {
            const unit = d.businessTree.units.filter((u) => u.tag === b.tag)[0];
            const count = unit ? unit.groups.reduce((n, g) => n + g.items.length, 0) : 0;
            return (
              <RaCard key={b.tag} accent={b.accent} onClick={() => raNavigate('business/' + raSlug(b.tag))}>
                <div style={{ display: 'flex', alignItems: 'stretch' }}>
                  <div style={{ width: 96, flexShrink: 0 }}>
                    <RaImage src={b.img} alt={b.jp} ratio="1 / 1" style={{ height: '100%' }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0, padding: '14px 14px 14px 15px' }}>
                    <div style={{ fontFamily: raFont.mono, fontSize: 10, letterSpacing: 1.6, color: b.accent }}>{b.tag}</div>
                    <div style={{ marginTop: 6, fontFamily: raFont.jpSerif, fontSize: 16, letterSpacing: 1, color: raPalette.ink }}>{b.jp}</div>
                    <div style={{ marginTop: 6, fontFamily: raFont.enSerif, fontSize: 12, fontStyle: 'italic', color: raPalette.muted }}>{b.en}</div>
                    <div style={{ marginTop: 10, fontFamily: raFont.mono, fontSize: 9, letterSpacing: 1.4, color: raPalette.muted }}>
                      {count} SERVICES →
                    </div>
                  </div>
                </div>
              </RaCard>
            );
          })}
        </div>
        <div style={{
          marginTop: 20, padding: '16px 18px', border: `1px dashed ${raPalette.ink}44`,
          fontFamily: raFont.jpAlt, fontSize: 12, lineHeight: 1.9, letterSpacing: 0.4, color: raPalette.muted,
        }}>
          {d.businessTree.footer}
        </div>
      </div>
      <RaFooterMark />
    </RaScreen>
  );
}

// ----------------------------------------------------------
// 事業（詳細）— 組織図の枝葉を展開して表示
// ----------------------------------------------------------
function RaBusinessDetail({ slug }) {
  const d = window.siteData;
  const pillar = d.business.filter((b) => raSlug(b.tag) === slug)[0];
  if (!pillar) return <RaEmpty text={raT('事業が見つかりませんでした。')} />;

  const unit = d.businessTree.units.filter((u) => u.tag === pillar.tag)[0];
  const service = d.company.services.filter((s) => s.tag === pillar.tag)[0];
  const accent = pillar.accent;

  // To C / To B のような branch があればグループを分けて見出しにする
  const branches = [];
  (unit ? unit.groups : []).forEach((g) => {
    const key = g.branch || '';
    let bucket = branches.filter((b) => b.key === key)[0];
    if (!bucket) { bucket = { key: key, groups: [] }; branches.push(bucket); }
    bucket.groups.push(g);
  });

  return (
    <RaScreen>
      <RaImage src={pillar.img} alt={pillar.jp} ratio="16 / 9" />
      <div style={{ padding: '20px 18px 8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontFamily: raFont.mono, fontSize: 11, letterSpacing: 1.8, color: accent }}>{pillar.tag}</span>
          <span style={{ flex: 1, height: 1, background: `${raPalette.ink}22` }} />
          <RaSaveButton id={'biz:' + slug} />
          <RaShareButton title={'Regional Lab — ' + pillar.jp} path={'business/' + slug} />
        </div>
        <h1 style={{ margin: '12px 0 0', fontFamily: raFont.jpSerif, fontSize: 24, fontWeight: 500, letterSpacing: '0.06em', color: raPalette.ink }}>
          {pillar.jp}
        </h1>
        <div style={{ marginTop: 6, fontFamily: raFont.enSerif, fontSize: 14, fontStyle: 'italic', color: raPalette.muted }}>{pillar.en}</div>

        <div style={{
          marginTop: 18, padding: '16px 18px', background: raPalette.card,
          borderLeft: `3px solid ${accent}`,
        }}>
          {pillar.body.map((line, i) => (
            <div key={i} style={{ fontFamily: raFont.jpAlt, fontSize: 13.5, lineHeight: 2, letterSpacing: 0.4, color: raPalette.ink }}>{line}</div>
          ))}
          <div style={{ marginTop: 12, fontFamily: raFont.jpSerif, fontSize: 17, letterSpacing: 2, color: accent }}>「{pillar.key}」</div>
        </div>

        {service && (
          <div style={{ marginTop: 22 }}>
            <RaSectionHead label="OVERVIEW" jp={raT('事業紹介')} color={accent} />
            <p style={raStyles.body}>{service.body}</p>
          </div>
        )}

        {unit && (
          <div style={{ marginTop: 26 }}>
            <RaSectionHead label="SERVICES" jp={raT('サービス')} color={accent} />
            {branches.map((branch, bi) => (
              <div key={bi} style={{ marginBottom: 18 }}>
                {branch.key && (
                  <div style={{
                    display: 'inline-block', marginBottom: 10, padding: '3px 10px',
                    background: accent, color: raPalette.paper,
                    fontFamily: raFont.mono, fontSize: 10, letterSpacing: 2,
                  }}>{branch.key}</div>
                )}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {branch.groups.map((g) => (
                    <RaCard key={g.name} style={{ padding: '14px 16px' }}>
                      <div style={{ fontFamily: raFont.jpSerif, fontSize: 15, letterSpacing: 1.2, color: accent }}>{g.name}</div>
                      <ul style={{ margin: '10px 0 0', padding: 0, listStyle: 'none' }}>
                        {g.items.map((item, ii) => (
                          <li key={ii} style={{
                            display: 'flex', gap: 9, alignItems: 'flex-start',
                            padding: '6px 0', fontFamily: raFont.jpAlt, fontSize: 13, lineHeight: 1.7,
                            letterSpacing: 0.3, color: raPalette.ink,
                          }}>
                            <span style={{ width: 4, height: 4, marginTop: 8, background: accent, flexShrink: 0 }} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </RaCard>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        <button onClick={() => raNavigate('more/contact')} style={{ ...raWideBtn, marginTop: 10 }}>
          {raT('この事業について相談する')} →
        </button>
      </div>
      <RaFooterMark />
    </RaScreen>
  );
}

// ----------------------------------------------------------
// イベント — 開催予定 と これまでの歩み
// ----------------------------------------------------------
function RaEvents() {
  const d = window.siteData;
  const [tab, setTab] = React.useState('past');
  const upcoming = raUpcoming();
  const past = (d.timeline || []).slice().reverse();

  return (
    <RaScreen>
      <div style={raStyles.page}>
        <RaSectionHead label="EVENTS" jp={raT('イベント')} color={raPalette.koke} />
        <div style={{ display: 'flex', gap: 0, marginBottom: 18, border: `1px solid ${raPalette.ink}33` }}>
          {[['upcoming', raT('開催予定'), upcoming.length], ['past', raT('これまでの歩み'), past.length]].map(([id, label, n]) => (
            <button key={id} onClick={() => setTab(id)} style={{
              flex: 1, padding: '11px 0', cursor: 'pointer', border: 'none',
              background: tab === id ? raPalette.ink : 'transparent',
              color: tab === id ? raPalette.paper : raPalette.ink,
              fontFamily: raFont.jpSerif, fontSize: 13, letterSpacing: 1.4,
            }}>{label}（{n}）</button>
          ))}
        </div>

        {tab === 'upcoming' && (
          upcoming.length === 0
            ? <RaEmpty text={raT('現在、公開中の開催予定はありません。')} />
            : <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {upcoming.map((a) => (
                  <RaCard key={a.no} accent={a.catColor} onClick={() => raNavigate('news/' + a.no)}>
                    <RaImage src={a.img} alt={a.title} ratio="16 / 9" />
                    <div style={{ padding: '14px 16px 16px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <span style={{ fontFamily: raFont.mono, fontSize: 10, letterSpacing: 1.8, color: a.catColor }}>{a.date}</span>
                        <RaChip color={a.catColor}>{a.cat}</RaChip>
                        <span style={{ marginLeft: 'auto' }}><RaSaveButton id={'news:' + a.no} size={18} /></span>
                      </div>
                      <div style={{ marginTop: 10, fontFamily: raFont.jpSerif, fontSize: 16, lineHeight: 1.65, letterSpacing: 0.6, color: raPalette.ink }}>
                        {a.title}
                      </div>
                      <p style={{ margin: '9px 0 0', fontFamily: raFont.jpAlt, fontSize: 12.5, lineHeight: 1.9, color: raPalette.muted }}>
                        {a.lead}
                      </p>
                    </div>
                  </RaCard>
                ))}
              </div>
        )}

        {tab === 'past' && (
          <div style={{ position: 'relative', paddingLeft: 20 }}>
            <span style={{ position: 'absolute', left: 4, top: 8, bottom: 8, width: 1, background: `${raPalette.ink}33` }} />
            {past.map((t, i) => {
              const idx = past.length - 1 - i;  // 元データ（古い順）での位置
              const id = 'event:' + idx;
              return (
                <div key={id} style={{ position: 'relative', marginBottom: 16 }}>
                  <span style={{
                    position: 'absolute', left: -20, top: 16, width: 9, height: 9, borderRadius: 5,
                    background: raPalette.paper, border: `2px solid ${raPalette.koke}`,
                  }} />
                  <RaCard>
                    <div style={{ display: 'flex' }}>
                      <div style={{ width: 92, flexShrink: 0 }}>
                        <RaImage src={t[3]} alt={t[1]} ratio="1 / 1" style={{ height: '100%' }} />
                      </div>
                      <div style={{ flex: 1, minWidth: 0, padding: '13px 12px 13px 14px' }}>
                        <div style={{ fontFamily: raFont.mono, fontSize: 10, letterSpacing: 1.8, color: raPalette.koke }}>{t[0]}</div>
                        <div style={{ marginTop: 6, fontFamily: raFont.jpSerif, fontSize: 14.5, lineHeight: 1.55, letterSpacing: 0.6, color: raPalette.ink }}>{t[1]}</div>
                        <div style={{ marginTop: 6, display: 'flex', alignItems: 'center', gap: 6 }}>
                          <RaIcon name="pin" size={13} color={raPalette.muted} />
                          <span style={{ fontFamily: raFont.jpAlt, fontSize: 11.5, color: raPalette.muted }}>{t[2]}</span>
                          <span style={{ marginLeft: 'auto' }}><RaSaveButton id={id} size={17} /></span>
                        </div>
                      </div>
                    </div>
                  </RaCard>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <RaFooterMark />
    </RaScreen>
  );
}

// ----------------------------------------------------------
// お知らせ（一覧・詳細）
// ----------------------------------------------------------
function RaNewsList() {
  const d = window.siteData;
  const readIds = raRead.use();
  const [cat, setCat] = React.useState('ALL');
  const cats = ['ALL'].concat(d.news.articles.map((a) => a.cat).filter((c, i, arr) => arr.indexOf(c) === i));
  const list = cat === 'ALL' ? d.news.articles : d.news.articles.filter((a) => a.cat === cat);

  return (
    <RaScreen>
      <div style={raStyles.page}>
        <RaSectionHead label="NEWS" jp={raT('お知らせ')} color={raPalette.ai} />
        <p style={raStyles.lead}>{d.news.lead}</p>

        <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
          {cats.map((c) => (
            <button key={c} onClick={() => setCat(c)} style={{
              padding: '5px 12px', cursor: 'pointer',
              border: `1px solid ${cat === c ? raPalette.ink : raPalette.ink + '44'}`,
              background: cat === c ? raPalette.ink : 'transparent',
              color: cat === c ? raPalette.paper : raPalette.muted,
              fontFamily: raFont.mono, fontSize: 10, letterSpacing: 1.6,
            }}>{c}</button>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {list.map((a) => {
            const unread = readIds.indexOf('news:' + a.no) < 0;
            return (
              <RaCard key={a.no} accent={a.catColor} onClick={() => raNavigate('news/' + a.no)}>
                <div style={{ display: 'flex' }}>
                  <div style={{ width: 104, flexShrink: 0 }}>
                    <RaImage src={a.img} alt={a.title} ratio="1 / 1" style={{ height: '100%' }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0, padding: '13px 12px 13px 14px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                      <span style={{ fontFamily: raFont.mono, fontSize: 9.5, letterSpacing: 1.6, color: raPalette.muted }}>{a.date}</span>
                      <RaChip color={a.catColor}>{a.cat}</RaChip>
                      {unread && <span style={{ width: 6, height: 6, borderRadius: 3, background: raPalette.akane }} />}
                    </div>
                    <div style={{ marginTop: 8, fontFamily: raFont.jpSerif, fontSize: 14.5, lineHeight: 1.6, letterSpacing: 0.5, color: raPalette.ink }}>
                      {a.title}
                    </div>
                  </div>
                </div>
              </RaCard>
            );
          })}
        </div>
      </div>
      <RaFooterMark />
    </RaScreen>
  );
}

function RaNewsDetail({ no }) {
  const d = window.siteData;
  const article = d.news.articles.filter((a) => a.no === no)[0];

  // 開いた時点で既読にする
  React.useEffect(() => {
    if (article) raRead.add('news:' + article.no);
  }, [no]);

  if (!article) return <RaEmpty text={raT('お知らせが見つかりませんでした。')} />;

  return (
    <RaScreen>
      <RaImage src={article.img} alt={article.title} ratio="16 / 9" />
      <div style={{ padding: '20px 18px 8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <RaChip color={article.catColor} filled>{article.cat}</RaChip>
          <span style={{ fontFamily: raFont.mono, fontSize: 10, letterSpacing: 1.8, color: raPalette.muted }}>{article.date}</span>
          <span style={{ marginLeft: 'auto', display: 'flex' }}>
            <RaSaveButton id={'news:' + article.no} />
            <RaShareButton title={article.title} text={article.lead} path={'news/' + article.no} />
          </span>
        </div>
        <h1 style={{
          margin: '14px 0 0', fontFamily: raFont.jpSerif, fontSize: 22, fontWeight: 500,
          lineHeight: 1.65, letterSpacing: '0.04em', color: raPalette.ink,
        }}>{article.title}</h1>
        <p style={{
          margin: '16px 0 0', padding: '14px 16px', background: raPalette.card,
          borderLeft: `3px solid ${article.catColor}`,
          fontFamily: raFont.jpAlt, fontSize: 13.5, lineHeight: 1.95, letterSpacing: 0.4, color: raPalette.ink,
        }}>{article.lead}</p>
        <p style={{ ...raStyles.body, marginTop: 18 }}>{article.body}</p>

        <div style={{ marginTop: 26, borderTop: `1px solid ${raPalette.ink}22`, paddingTop: 18 }}>
          <div style={{ fontFamily: raFont.mono, fontSize: 9.5, letterSpacing: 2.4, color: raPalette.muted, marginBottom: 10 }}>—— OTHER NEWS</div>
          {d.news.articles.filter((a) => a.no !== article.no).slice(0, 3).map((a) => (
            <RaRow key={a.no} title={a.title} meta={`${a.date}　${a.cat}`} accent={a.catColor}
              onClick={() => raNavigate('news/' + a.no)} />
          ))}
        </div>
      </div>
      <RaFooterMark />
    </RaScreen>
  );
}

// 空状態
function RaEmpty({ text, action }) {
  return (
    <div style={{ padding: '54px 24px', textAlign: 'center' }}>
      <div style={{ fontFamily: raFont.jpAlt, fontSize: 13.5, lineHeight: 2, color: raPalette.muted }}>{text}</div>
      {action}
    </div>
  );
}

Object.assign(window, {
  raSlug, raUpcoming, raWideBtn,
  RaHome, RaBusinessList, RaBusinessDetail, RaEvents, RaNewsList, RaNewsDetail,
  RaEmpty, RaFooterMark, RaQuickAction,
});
