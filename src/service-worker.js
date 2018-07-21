importScripts('workbox-sw.prod.js');

const workboxSW = new self.WorkboxSW({
  skipWaiting: true,
  clientsClaim: true,
  navigateFallback: '/index.html'
});

workboxSW.precache([]);

workboxSW.router.registerRoute(
  /\.(?:png|gif|jpg)$/,
  workboxSW.strategies.cacheFirst({
    cacheName: 'images-cache',
    cacheExpiration: {
      maxEntries: 50
    }
  })
);

workboxSW.router.registerRoute(/index.html/, workboxSW.strategies.staleWhileRevalidate());
workboxSW.router.registerRoute('/actions', workboxSW.strategies.staleWhileRevalidate());
