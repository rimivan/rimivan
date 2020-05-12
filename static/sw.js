importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
  workbox.routing.registerRoute('https://fonts.googleapis.com/(.*)',
    workbox.strategies.cacheFirst({
      cacheName: 'google-font-cache',
      cacheExpiration: {
        maxEntries: 30
      },
      cacheableResponse: {statuses: [0, 200]}
    })
  );
  
  workbox.routing.registerRoute(/\.(?:png|gif|jpg|svg)$/,
    workbox.strategies.cacheFirst({
      cacheName: 'images-cache'
    })
  );
  
  workbox.routing.registerRoute(/\.(?:js|css)$/,
    workbox.strategies.staleWhileRevalidate({
      cacheName: 'static-resources-cache'
    })
  );
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
