self.addEventListener('install', (e) => {
    // Instantly activate this new worker
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    // Take over the page immediately
    e.waitUntil(clients.claim());
});

self.addEventListener('fetch', (e) => {
    // GHOST MODE: We let the browser handle 100% of the network requests normally.
    // This stops the Service Worker from accidentally blocking the AI's files.
    return;
});
