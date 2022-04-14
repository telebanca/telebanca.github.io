var cacheName = 'telebanca.github.io';
var filesToCache = [
  '/',
  '/index.html',
  '/css/main.css',
  '/css/bootstrap.min.css',
  '/js/main.js',
  '/js/info.js',
  '/js/jquery-3.3.1.slim.min.js',
  '/js/bootstrap.min.js',
  '/js/donatecu.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});