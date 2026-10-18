const CACHE_NAME = 'mi-pwa-v1';
const ASSETS = [
  'index.html',
  'manifest.json',
  'icon.png'
];

// Instalar y guardar en caché
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Servir desde la caché cuando no hay red
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request);
    })
  );
});