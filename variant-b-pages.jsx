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

// 読点で改行し、語の途中で折り返されないようにする（英語は読点が無いので1行のまま）
function saiBreakAtComma(text) {
  const parts = String(text).split('、');
  return parts.map((part, i) => (
    <React.Fragment key={i}>
      {part}{i < parts.length - 1 ? '、' : ''}{i < parts.length - 1 ? <br/> : null}
    </React.Fragment>
  ));
}

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
      {lead && <p style={{ fontFamily: saiBFont.jpSerif, fontSize: 15, lineHeight: 2.0, color: saiB.muted, marginTop: 20, maxWidth: 900 }}>{lead}</p>}
    </div>
  );
}

// =========================================================
// ABOUT — 私たちについて
// =========================================================
function SaiAbout() {
  const members = window.siteData.about.members;

  return (
    <div style={{ background: saiB.paper, fontFamily: saiBFont.jpSerif, color: saiB.ink }}>
      <SaiPageHeader
        no="01"
        jp={window.t('私たちについて')}
        en="About Us"
        lead={window.siteData.about.lead}
      />

      {/* 目的と設立背景 */}
      <div style={{ padding: '96px 56px', display: 'grid', gridTemplateColumns: '280px 1fr', gap: 56 }}>
        <div>
          <div style={{ fontFamily: saiBFont.mono, fontSize: 10, letterSpacing: 3, color: saiB.akane }}>SECTION 01</div>
          <h2 style={{ fontFamily: saiBFont.jpSerif, fontSize: 36, fontWeight: 400, margin: '12px 0 0', letterSpacing: '0.04em', lineHeight: 1.4 }}>
            {window.saiLang === 'en' ? <React.Fragment>Purpose &amp;<br/>Founding</React.Fragment> : <React.Fragment>目的と<br/>設立背景</React.Fragment>}
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
              {window.siteData.about.purpose.heading}
            </h3>
            <p style={{ fontSize: 15, lineHeight: 2.1, color: saiB.muted, margin: 0 }}>
              {window.siteData.about.purpose.body}
            </p>
          </div>

          <div style={{ fontFamily: saiBFont.mono, fontSize: 11, letterSpacing: 3, color: saiB.ai }}>BACKGROUND</div>
          <h3 style={{ fontFamily: saiBFont.jpSerif, fontSize: 22, fontWeight: 400, margin: '8px 0 20px', letterSpacing: '0.04em' }}>
            {window.siteData.about.background.heading}
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {window.siteData.about.background.paragraphs.map((p, i) => (
              <p key={i} style={{ fontSize: 15, lineHeight: 2.2, color: saiB.ink, margin: 0 }}>{p}</p>
            ))}
          </div>
        </div>
      </div>

      {/* 三本柱 sash */}
      <div style={{ background: saiB.ai, color: saiB.paper, padding: '64px 56px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
          {[
            ...window.siteData.about.pillars,
          ].map(([label, body]) => (
            <div key={label} style={{ borderLeft: `2px solid ${saiB.akane}`, paddingLeft: 20 }}>
              <div style={{ fontFamily: saiBFont.mono, fontSize: 10, letterSpacing: 3, opacity: 0.7 }}>{label}</div>
              <div style={{ fontFamily: saiBFont.jpSerif, fontSize: 18, lineHeight: 1.9, marginTop: 10, letterSpacing: '0.04em' }}>{saiBreakAtComma(body)}</div>
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
              {window.t('メンバー紹介')}<span style={{ fontFamily: saiBFont.enSerif, fontStyle: 'italic', color: saiB.ai, fontSize: 28 }}>— our four.</span>
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
  const services = window.siteData.company.services;
  const companyInfo = window.siteData.company.info;

  return (
    <div style={{ background: saiB.paper, fontFamily: saiBFont.jpSerif, color: saiB.ink }}>
      <SaiPageHeader
        no="02"
        jp={window.t('会社概要')}
        en="Company"
        lead={window.siteData.company.lead}
      />

      {/* 会社情報 */}
      <div style={{ padding: '80px 56px 0' }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ fontFamily: saiBFont.mono, fontSize: 10, letterSpacing: 3, color: saiB.akane }}>SECTION 01 — CORPORATE PROFILE</div>
          <h2 style={{ fontFamily: saiBFont.jpSerif, fontSize: 44, fontWeight: 400, margin: '8px 0 0', letterSpacing: '0.04em' }}>
            {window.t('会社情報')}
          </h2>
        </div>
        <div style={{ borderTop: `1px solid ${saiB.ink}` }}>
          {[
            [window.t('設立'), companyInfo.founded],
            [window.t('資本金'), companyInfo.capital],
            [window.t('役員'), companyInfo.officers],
            [window.t('拠点'), companyInfo.offices],
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
                  {label === window.t('設立') ? 'FOUNDED' : label === window.t('役員') ? 'OFFICERS' : label === window.t('資本金') ? 'CAPITAL' : 'LOCATIONS'}
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
            {window.t('事業紹介')}
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 18 }}>
          {services.map((s, i) => (
            <div key={s.tag} style={{ background: saiB.paperDeep, padding: 28 }}>
              <div style={{ fontFamily: saiBFont.mono, fontSize: 10, letterSpacing: 3, color: s.color, marginBottom: 8 }}>0{i+1} / 0{services.length}</div>
              <div style={{ fontFamily: saiBFont.jpAlt, fontSize: 32, color: s.color, lineHeight: 1.1, fontWeight: 500 }}>{s.tag}</div>
              <div style={{ fontFamily: saiBFont.jpSerif, fontSize: 14, color: saiB.muted, letterSpacing: 3, marginTop: 4, marginBottom: 16 }}>{s.jp}</div>
              <p style={{ fontSize: 13, lineHeight: 2, margin: 0 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// =========================================================
// NEWS — お知らせ
// =========================================================
function SaiNews() {
  const articles = window.siteData.news.articles;
  const cats = ['ALL', ...Array.from(new Set(articles.map(a => a.cat)))];
  const [active, setActive] = React.useState('ALL');
  const [open, setOpen] = React.useState(null);
  const shown = active === 'ALL' ? articles : articles.filter(a => a.cat === active);

  return (
    <div style={{ background: saiB.paper, fontFamily: saiBFont.jpSerif, color: saiB.ink }}>
      <SaiPageHeader
        no="03"
        jp={window.t('お知らせ')}
        en="News"
        lead="プロダクト、イベント、メディア掲載 ─ Regional Lab からの最新のお知らせです。"
      />

      <div style={{ padding: '64px 56px' }}>
        <div style={{ display: 'flex', gap: 12, marginBottom: 32 }}>
          {cats.map((c) => (
            <div key={c} onClick={() => setActive(c)} style={{
              padding: '8px 18px',
              border: `1px solid ${saiB.ink}`,
              background: active === c ? saiB.ink : 'transparent',
              color: active === c ? saiB.paper : saiB.ink,
              fontFamily: saiBFont.mono, fontSize: 11, letterSpacing: 2,
              cursor: 'pointer', transition: 'all 0.15s',
            }}>{c}</div>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {shown.map(a => (
            <div key={a.no} onClick={() => setOpen(a)} style={{
              background: saiB.paperDeep,
              padding: 32,
              display: 'grid',
              gridTemplateColumns: '120px 1.4fr 2fr 40px',
              gap: 24,
              alignItems: 'start',
              borderLeft: `4px solid ${a.catColor}`,
              cursor: 'pointer',
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

      {open && <SaiNewsModal article={open} onClose={() => setOpen(null)} />}
    </div>
  );
}

function SaiNewsModal({ article: a, onClose }) {
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, []);
  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, zIndex: 1000,
      background: 'rgba(20,16,10,0.6)',
      display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
      padding: '64px 24px', overflowY: 'auto',
    }}>
      <div onClick={(e) => e.stopPropagation()} style={{
        background: saiB.paper, maxWidth: 820, width: '100%',
        position: 'relative', borderTop: `5px solid ${a.catColor}`,
      }}>
        <button onClick={onClose} aria-label="閉じる" style={{
          position: 'absolute', top: 20, right: 20, zIndex: 2,
          width: 44, height: 44, borderRadius: 22, border: 'none',
          background: saiB.ink, color: saiB.paper, fontSize: 20, cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>×</button>
        {a.img && (
          <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden' }}>
            <img src={a.img} alt={a.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        )}
        <div style={{ padding: '40px 48px 56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
            <span style={{ fontFamily: saiBFont.mono, fontSize: 11, letterSpacing: 2, color: a.catColor, border: `1px solid ${a.catColor}`, padding: '4px 10px' }}>{a.cat}</span>
            <span style={{ fontFamily: saiBFont.mono, fontSize: 12, letterSpacing: 2, color: saiB.muted }}>{a.date}</span>
            <span style={{ fontFamily: saiBFont.enSerif, fontStyle: 'italic', fontSize: 16, color: saiB.muted, marginLeft: 'auto' }}>No. {a.no}</span>
          </div>
          <h2 style={{ fontFamily: saiBFont.jpSerif, fontSize: 34, fontWeight: 500, margin: 0, letterSpacing: '0.04em', lineHeight: 1.5 }}>{a.title}</h2>
          <p style={{ fontFamily: saiBFont.jpSerif, fontSize: 17, lineHeight: 2, color: a.catColor, margin: '20px 0 24px' }}>{a.lead}</p>
          <p style={{ fontSize: 15, lineHeight: 2.4, color: saiB.ink, margin: 0 }}>{a.body}</p>
        </div>
      </div>
    </div>
  );
}

// =========================================================
// PARTNERS — パートナー
// =========================================================
function SaiPartners() {
  const partners = window.siteData.partners.list;

  return (
    <div style={{ background: saiB.paper, fontFamily: saiBFont.jpSerif, color: saiB.ink }}>
      <SaiPageHeader
        no="04"
        jp={window.t('パートナー')}
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
                {p.url && (
                  <a href={p.url} target="_blank" rel="noopener noreferrer" style={{ marginTop: 20, fontFamily: saiBFont.enSerif, fontStyle: 'italic', fontSize: 14, color: saiB.ai, borderBottom: `1px solid ${saiB.ai}`, display: 'inline-block', paddingBottom: 2, textDecoration: 'none' }}>
                    View partner →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 48, padding: 40, border: `1px dashed ${saiB.ink}55`, textAlign: 'center' }}>
          <div style={{ fontFamily: saiBFont.mono, fontSize: 10, letterSpacing: 3, color: saiB.akane }}>BECOME A PARTNER</div>
          <div style={{ fontFamily: saiBFont.jpSerif, fontSize: 22, marginTop: 8, letterSpacing: '0.04em' }}>{window.t('地方の未来を、共に彩りませんか。')}</div>
          <div style={{ marginTop: 16, padding: '12px 28px', background: saiB.ink, color: saiB.paper, fontFamily: saiBFont.jpSerif, fontSize: 14, letterSpacing: 3, display: 'inline-block' }}>{window.t('協業のご相談 →')}</div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { SaiAbout, SaiCompany, SaiNews, SaiPartners, SaiPageHeader });
