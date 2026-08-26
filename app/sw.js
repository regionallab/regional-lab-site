// ==========================================================
// SERVICE WORKER — オフライン表示とキャッシュ
// アプリ本体（シェル）は先読み、画像とフォントは表示した分だけ蓄える。
// アプリを更新したら CACHE_VERSION を上げてください。
// ==========================================================

const CACHE_VERSION = 'v1';
const SHELL_CACHE = 'rl-app-shell-' + CACHE_VERSION;
const RUNTIME_CACHE = 'rl-app-runtime-' + CACHE_VERSION;

// アプリの起動に必要なファイル（同一オリジン）
const SHELL_ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './app-core.jsx',
  './app-screens.jsx',
  './app-more.jsx',
  './app-root.jsx',
  './icon-192.png',
  './icon-512.png',
  '../i18n.jsx',
  '../site-data.jsx',
  '../site-data-en.jsx',
  '../assets/logo-regionallab.png',
  // 事業・お知らせのサムネイル（軽いものだけ先読み。大きな写真は表示時にキャッシュ）
  '../assets/re-event.jpg',
  '../assets/re-lab.jpg',
  '../assets/regional.jpg',
  '../assets/re-com.png',
  '../assets/news-event-lab.jpg',
  '../assets/news-relab-v2.jpg',
];

// React / Babel（CDN）。取得できなくてもインストールは失敗させない
const VENDOR_ASSETS = [
  'https://unpkg.com/react@18.3.1/umd/react.development.js',
  'https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js',
  'https://unpkg.com/@babel/standalone@7.29.0/babel.min.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(SHELL_CACHE);
    await cache.addAll(SHELL_ASSETS);
    await Promise.all(VENDOR_ASSETS.map((url) =>
      cache.add(new Request(url, { mode: 'cors', credentials: 'omit' })).catch(() => null)
    ));
    self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys
      .filter((k) => k.indexOf('rl-app-') === 0 && k !== SHELL_CACHE && k !== RUNTIME_CACHE)
      .map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

// キャッシュを返しつつ裏で更新（stale-while-revalidate）
async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  const network = fetch(request).then((res) => {
    if (res && (res.ok || res.type === 'opaque')) cache.put(request, res.clone());
    return res;
  }).catch(() => null);
  return cached || network || Response.error();
}

// キャッシュ優先（画像・フォントなど、めったに変わらないもの）
async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) return cached;
  try {
    const res = await fetch(request);
    if (res && (res.ok || res.type === 'opaque')) cache.put(request, res.clone());
    return res;
  } catch (e) {
    return cached || Response.error();
  }
}

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  const sameOrigin = url.origin === self.location.origin;

  // ページ遷移：オフラインならアプリ本体を返す（ルーティングはハッシュなので index.html で足りる）
  if (request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        return await fetch(request);
      } catch (e) {
        const cache = await caches.open(SHELL_CACHE);
        return (await cache.match('./index.html')) || Response.error();
      }
    })());
    return;
  }

  // 画像・フォント本体はキャッシュ優先
  if (request.destination === 'image' || request.destination === 'font' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(cacheFirst(request, RUNTIME_CACHE));
    return;
  }

  // アプリのコード・コンテンツ（.jsx など）と CDN・フォント CSS
  if (sameOrigin || url.hostname === 'unpkg.com' || url.hostname === 'fonts.googleapis.com') {
    event.respondWith(staleWhileRevalidate(request, sameOrigin ? SHELL_CACHE : RUNTIME_CACHE));
  }
});
