importScripts('/workbox-sw.prod.js');

workbox.skipWaiting();
workbox.clientsClaim();

workbox.precaching.precache(self.__precacheManifest);

workbox.routing.registerRoute(
  /(.*picsum\.photos.*)|\.(?:png|gif|jpg)$/,
  workbox.strategies.cacheFirst({
    cacheName: 'images-cache',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
      }),
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200]
      })
    ]
  })
);

workbox.routing.registerRoute(/\//, workbox.strategies.cacheFirst());
workbox.routing.registerRoute(
  /.*\/simple-api-mock\/(?:products)$/,
  workbox.strategies.networkFirst()
);

workbox.routing.registerRoute(
  /.*\/simple-api-mock\/(?:products\/[0-9]+)$/,
  workbox.strategies.networkFirst()
);
