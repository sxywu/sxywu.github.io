"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","837f9738042392386329f32a28a0a22a"],["static/css/main.6e88995a.css","34e43c0dc261f6c2bfc8655bb7f6aaa2"],["static/js/main.153c9c59.js","a6d42d01f762abe3d7a136a7daa2f49a"],["static/media/80k.5bfd27c7.png","5bfd27c7280aea9c0d9be2c55fe7f6c0"],["static/media/King-Basil.41221e7e.ttf","41221e7eca828bb21bdab714934cdfe7"],["static/media/LibreBaskerville-Regular.27b9efe7.ttf","27b9efe7ae34478c82311efb90011607"],["static/media/culture.4fc3b25f.png","4fc3b25f421e87e1af72a6c1b8742c01"],["static/media/debate.bdfa8612.png","bdfa8612aa89df37d43248c14d5dd904"],["static/media/expenses.db26c439.png","db26c43983b20ecebc896145868b85c6"],["static/media/fem.7d4b0c27.png","7d4b0c2747500b3235d6cba69f781ef4"],["static/media/filmflowers.a3301294.png","a3301294f7c8dc8b78d9513c778f009f"],["static/media/hamilton.3a7bd089.png","3a7bd0892b5e8b06517ad38b9c7c0362"],["static/media/logo.eb607a17.png","eb607a17d7216f286b524d70fe44aeea"],["static/media/obamas.8b8e26c0.png","8b8e26c07b4f8af3aab665b2008c6102"],["static/media/openvis.80f071a6.png","80f071a602a173cc3d971c9f7e2a6912"],["static/media/product.c1859210.png","c185921013df591ea80ab43d25e642e2"],["static/media/profile.53656c4c.png","53656c4ce98401cbc55c55f60c171ad9"],["static/media/reactd3.e8db4bf1.png","e8db4bf114dbbaace9bb19db7fd72d96"],["static/media/travel.f545a6c8.png","f545a6c8871e63caae062991ed29356d"],["static/media/tweety.271e6c0a.png","271e6c0ad950831be9aae35b5091d926"],["static/media/visfest.463bd8b7.png","463bd8b785744003d7d7ade52ff7a438"],["static/media/visfest2.41cde86b.png","41cde86b5b39426b8d1ee5bd904422d6"],["static/media/wongfu.f041fbea.png","f041fbea52b62a0cf62d177ab27585f0"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);t=urlsToCacheKeys.has(a);t||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});