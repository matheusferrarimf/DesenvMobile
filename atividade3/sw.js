const CACHE = 'netifrixi-v1';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.webmanifest',
  './assets/poster-01.png',
  './assets/poster-02.png',
  './assets/poster-03.png',
  './assets/poster-04.png',
  './assets/poster-05.png',
  './assets/poster-06.png',
  './assets/poster-07.png',
  './assets/poster-08.png',
  './assets/poster-09.png',
  './assets/poster-10.png',
  './assets/poster-11.png',
  './assets/poster-12.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});