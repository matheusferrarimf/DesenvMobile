const CACHE_NAME = 'menu-delicia-v1';
const URLS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.webmanifest',
  './assets/icon-96.png',
  './assets/icon-192.png',
  './assets/icon-512.png',
  // images
  './assets/dish-01.png',
  './assets/dish-02.png',
  './assets/dish-03.png',
  './assets/dish-04.png',
  './assets/dish-05.png',
  './assets/dish-06.png',
  './assets/dish-07.png',
  './assets/dish-08.png',
  './assets/dish-09.png',
  './assets/dish-10.png',
  './assets/dish-11.png',
  './assets/dish-12.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(URLS)));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then(keys => Promise.all(
    keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
  )));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});