var cacheName = 'telebanca.github.io';
const filesToCache = [
  '/',
  '/index.html',
  '/img/net-banking.png',
  '/css/main.css',
  '/css/bootstrap.min.css',
  '/js/main.js',
  '/js/info.js',
  '/js/jquery-3.3.1.slim.min.js',
  '/js/bootstrap.min.js',
  '/sw.js',
  '/js/donatecu.js'
];

self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
          console.log('[Servicio Worker] Almacena todo en caché: contenido e intérprete de la aplicación');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((r) => {
          console.log('[Servicio Worker] Obteniendo recurso: '+e.request.url);
      return r || fetch(e.request).then((response) => {
                return caches.open(cacheName).then((cache) => {
          console.log('[Servicio Worker] Almacena el nuevo recurso: '+e.request.url);
          cache.put(e.request, response.clone());
          return response;
        });
      });
    })
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
          return Promise.all(keyList.map((key) => {
        if(key !== cacheName) {
          return caches.delete(key);
        }
      }));
    })
  );
});