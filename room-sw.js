const CACHE='slido-room-v1';
const URLS=['/room.html','/logo192.png','/logo512.png','https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(URLS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.url.includes('firebase')||e.request.url.includes('gstatic'))return;e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)))});
