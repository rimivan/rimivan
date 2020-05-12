importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);
    workbox.routing.registerRoute(
        new RegExp(self.location.origin),
        new workbox.strategies.NetworkFirst({
          cacheName: 'pages-cache',
          plugins: [
            new workbox.cacheableResponse.Plugin({
              statuses: [200],
            }),
            new workbox.expiration.Plugin({
              maxAgeSeconds: 5 * 24 * 60 * 60, // 5 days
              maxEntries: 35,
            }),
          ],
        })
    );
    // Cache js/css files.
    workbox.routing.registerRoute(
        /\.(?:js|css)$/,
        new workbox.strategies.StaleWhileRevalidate({
            cacheName: 'static-rsrc-cache'
        }),
    ); 
    workbox.routing.registerRoute(
        /\.(?:png|jpeg|jpg)$/,
        new workbox.strategies.StaleWhileRevalidate({
            cacheName: 'imgs-cache'
        }),
    ); 
    workbox.routing.registerRoute(
        /^https:\/\/fonts\.googleapis\.com/,
        new workbox.strategies.StaleWhileRevalidate({
          cacheName: 'google-fonts-cache',
        }),
    );

} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
