"use strict";var cache_storage_name="fbdow2PWAES",start_page="index.html",offline_page="offline.html",first_cache_urls=[start_page,offline_page],never_cache_urls=[/\/private.html/,/\/panel/,/\/custom-url/];function check_never_cache_urls(e){return!this.match(e)}function checkFetchRules(e){if(new URL(e.request.url).origin===location.origin&&e.request.url.match(/^(http|https):\/\//i))return"GET"===e.request.method||caches.match(offline_page)}if(self.addEventListener("install",function(e){console.log("PWA sw installation"),e.waitUntil(caches.open(cache_storage_name).then(function(e){console.log("PWA sw caching first urls"),first_cache_urls.map(function(t){return e.add(t).catch(function(e){return console.log("PWA: "+String(e)+" "+t)})})}))}),self.addEventListener("activate",function(e){return console.log("PWA sw activation"),e.waitUntil(caches.keys().then(function(e){return Promise.all(e.map(function(e){if(e!==cache_storage_name)return console.log("PWA old cache removed",e),caches.delete(e)}))})),self.clients.claim()}),self.addEventListener("fetch",function(e){if(checkFetchRules(e)){if("navigate"===e.request.mode&&navigator.onLine){e.respondWith(fetch(e.request).then(function(t){return caches.open(cache_storage_name).then(function(n){return never_cache_urls.every(check_never_cache_urls,e.request.url)&&n.put(e.request,t.clone()),t})}));return}e.respondWith(caches.match(e.request).then(function(t){return t||fetch(e.request).then(function(t){return caches.open(cache_storage_name).then(function(n){return never_cache_urls.every(check_never_cache_urls,e.request.url)&&n.put(e.request,t.clone()),t})})}).catch(function(){return caches.match(offline_page)}))}}),importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js"),workbox.googleAnalytics)try{workbox.googleAnalytics.initialize()}catch(e){console.log(e.message)}
