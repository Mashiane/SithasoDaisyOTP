const PRECACHE = 'sithasodaisyotp-Data-v1698193528532';const RUNTIME = 'sithasodaisyotp-runtime-v1698193528532';const PRECACHE_URLS = ['./index.html','./manifest.json','./scripts/bananocore.js','./scripts/tailwind.min.js','./scripts/fileSaver.min.js','./scripts/sweetalert2.all.min.js','./scripts/dayjs.min.js','./scripts/numeral.min.js','./scripts/insert-rule.min.js','./scripts/moment.min.js','./scripts/reinvented-color-wheel.min.js','./scripts/mdtoast.min.js','./scripts/jquery-3.6.3.min.js','./scripts/signature_pad.umd.min.js','./scripts/form-data-json.min.js','./scripts/fuse.min.js','./scripts/pagination.min.js','./scripts/app1698193528536.js','./styles/loader-1.css','./styles/daisyui.min.css','./styles/fontawesome.min.css','./styles/sithasostyle.min.css','./styles/sweetalert2.min.css','./styles/reinvented-color-wheel.min.css','./styles/mdtoast.min.css','./styles/pagination.css','./assets/600by600.jpg','./assets/BANANO LICENSE.txt','./assets/placeholderimg.jpg','./assets/SithasoDaisyLogo.jpg','./assets/DAISYUI LICENSE.txt','./assets/fa-brands-400.woff2','./assets/fa-regular-400.woff2','./assets/fa-solid-900.woff2','./assets/fa-v4compatibility.woff2','./assets/12.jpg','./assets/config.properties','./assets/daisywoman1.jpg','./assets/daisywoman3.png','./assets/mashy.jpg','./assets/msaccessconfig.php','./assets/mssqlconfig.php','./assets/mysqlconfig.php','./assets/13.jpg','./assets/postgresconfig.php','./assets/SithasoDaisyLogo1.jpg','./assets/upload.php','./assets/uploadoptions.php','./assets/8.jpg'];importScripts('./scripts/bananocore.js');var _B=this;_B.addEventListener('install', function (event) {event.waitUntil(caches.open(PRECACHE).then(function (cache) {return cache.addAll(PRECACHE_URLS);}).then(_B.skipWaiting()));});_B.addEventListener('activate', function (event) {var currentCaches = [PRECACHE, RUNTIME];event.waitUntil(caches.keys().then(function (cacheNames) {return cacheNames.filter(function (cacheName) {return !currentCaches.includes(cacheName);});}).then(function (cachesToDelete) {return Promise.all(cachesToDelete.map(function (cacheToDelete) {return caches.delete(cacheToDelete);}));}).then(function () {return _B.clients.claim();}));});_B.addEventListener('fetch', function (event) {if (event.request.url.indexOf('donotdelete.gif') == -1 && event.request.method == 'GET') {event.respondWith(caches.match(event.request).then(function (cachedResponse) {if (cachedResponse) {return cachedResponse;}return caches.open(RUNTIME).then(function (cache) {return fetch(event.request).then(function (response) {return cache.put(event.request, response.clone()).then(function () {return response;});});});}));}});_B.addEventListener('message', event => {if (event.data === 'skipWaiting') return skipWaiting();});