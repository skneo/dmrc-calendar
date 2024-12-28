// service-worker.js
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('v1').then((cache) => { //update version each year and get parameter in images
            return cache.addAll([
                '/',
                '/index.html',
                '/output.css?v=2.51',
                '/manifest.json',
                '/resources/favicon.ico',
                '/resources/logo192.png',
                '/resources/logo512.png',
                '/resources/apple-touch-icon.png',
                '/resources/step1.jpg?v=1.0',
                '/resources/step2.jpg?v=1.0',
                '/resources/step3.jpg?v=1.0',
                '/resources/whatsapp.svg',
                '/resources/telegram.svg',
                '/resources/loader.gif',
                '/images/1.jpg?year=2024',
                '/images/2.jpg?year=2024',
                '/images/3.jpg?year=2024',
                '/images/4.jpg?year=2024',
                '/images/5.jpg?year=2024',
                '/images/6.jpg?year=2024',
                '/images/7.jpg?year=2024',
                '/images/8.jpg?year=2024',
                '/images/9.jpg?year=2024',
                '/images/10.jpg?year=2024',
                '/images/11.jpg?year=2024',
                '/images/12.jpg?year=2024',
            ]);
        })
    );
});


self.addEventListener('activate', (event) => {
    const currentCacheVersion = 'v1';  // Update version number
    const cacheWhitelist = [currentCacheVersion]; // List active caches
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);  // Delete old caches
                    }
                })
            );
        })
    );
});


self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;  // Serve from cache if available
            }
            return fetch(event.request);  // Otherwise, fetch from network
        })
    );
});
