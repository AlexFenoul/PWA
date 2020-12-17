var cacheName = 'pwa-v1-fenoul';
var appShellFiles = [
  '/',
  '/css/reset.css',
  '/css/styles.css',
  '/icon/android-icon-192x192.png',
  '/icon/apple-icon-57x57.png',
  '/icon/apple-icon-60x60.png',
  '/icon/apple-icon-72x72.png',
  '/icon/apple-icon-76x76.png',
  '/icon/apple-icon-114x114.png',
  '/icon/apple-icon-120x120.png',
  '/icon/apple-icon-144x144.png',
  '/icon/apple-icon-152x152.png',
  '/icon/apple-icon-180x180.png',
  '/icon/favicon-16x16.png',
  '/icon/favicon-32x32.png',
  '/icon/favicon-96x96.png',
  '/icon/maskable-196x196.png',
  '/icon/splash-512x512.png',
  '/js/app.js',
  '/index.html'
];

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Installation');
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            console.log('[Service Worker] Mise en cache globale: app shell et contenu');
            return cache.addAll(appShellFiles);
        })
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((r) => {
            console.log('[Service Worker] Récupération de la ressource: '+e.request.url);
            return r || fetch(e.request).then((response) => {
                return caches.open(cacheName).then((cache) => {
                    console.log('[Service Worker] Mise en cache de la nouvelle ressource: '+e.request.url);
                    cache.put(e.request, response.clone());
                    return response;
                });
            });
        })
    );
});