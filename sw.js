self.addEventListener('install', (e) => {
    // Forces the waiting service worker to become the active service worker.
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    // Tells the active service worker to take control of the page immediately.
    e.waitUntil(clients.claim());
});

self.addEventListener('fetch', (e) => {
    // FIX: Tell the Service Worker to IGNORE the AI's external CDN downloads
    if (!e.request.url.startsWith(self.location.origin)) {
        return;
    }
    
    // Pass-through network fetching for local files only
    e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
