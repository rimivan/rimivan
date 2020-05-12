importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');
const workbox = new WorkboxSW();

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);
    workbox.router.registerRoute('https://fonts.googleapis.com/(.*)',
        workbox.strategies.cacheFirst({
            cacheName: 'googleapis',
            cacheExpiration: {
                maxEntries: 30
            },
            cacheableResponse: {statuses: [0, 200]}
        })
    );
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
