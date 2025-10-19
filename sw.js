// Service Worker mínimo pero funcional
self.addEventListener('install', function(event) {
  console.log('Service Worker instalado');
});

self.addEventListener('fetch', function(event) {
  // Deja pasar todas las peticiones
  return;
});