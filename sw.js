/* Service worker — mise en cache pour usage hors ligne */
var CACHE = 'fiches-ifsi-v1';

self.addEventListener('install', function (e) {
  self.skipWaiting();
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (noms) {
      return Promise.all(noms.map(function (n) {
        if (n !== CACHE) return caches.delete(n);
        return null;
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

/* Stratégie : réseau d'abord, cache en secours (contenu toujours à jour,
   mais l'appli reste utilisable sans connexion). */
self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  var url = new URL(e.request.url);
  if (url.origin !== self.location.origin) return;

  e.respondWith(
    fetch(e.request).then(function (rep) {
      var copie = rep.clone();
      caches.open(CACHE).then(function (c) { c.put(e.request, copie); }).catch(function () {});
      return rep;
    }).catch(function () {
      return caches.match(e.request).then(function (r) {
        return r || caches.match('index.html');
      });
    })
  );
});
