importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);
    workbox.routing.registerRoute(
        new RegExp(self.location.origin),
        new workbox.strategies.NetworkFirst({
          cacheName: 'pages-cache',
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
    workbox.routing.registerRoute(
        'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
        new workbox.strategies.StaleWhileRevalidate({
          cacheName: 'bootstrap-cache',
        }),
    );
    workbox.routing.registerRoute(
        'https://use.fontawesome.com/releases/v5.8.2/css/all.css',
        new workbox.strategies.StaleWhileRevalidate({
          cacheName: 'fontawesome-cache',
        }),
    );

} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
