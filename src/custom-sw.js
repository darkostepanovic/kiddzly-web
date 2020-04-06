self.addEventListener('install', function(event) {
  console.log('CUSTOM SW INSTALLED');
});

self.addEventListener('activate', function(event) {
  console.log('CUSTOM SW ACTIVATE');
});

self.addEventListener('fetch', function(event) {
  console.log('CUSTOM FETCH');
});
