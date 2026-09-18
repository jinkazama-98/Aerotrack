self.addEventListener('install', (e) => {
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    e.waitUntil(clients.claim());
});

self.addEventListener('fetch', (e) => {
    // Pass-through network fetching for PWA compliance
    e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
