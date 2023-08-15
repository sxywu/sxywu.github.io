"use strict";
function setOfCachedUrls(e) {
  return e
    .keys()
    .then(function (e) {
      return e.map(function (e) {
        return e.url;
      });
    })
    .then(function (e) {
      return new Set(e);
    });
}
var precacheConfig = [
    ["index.html", "02344096264718f1264b996777f8864d"],
    ["static/css/main.6e88995a.css", "34e43c0dc261f6c2bfc8655bb7f6aaa2"],
    ["static/js/main.0654d5fb.js", "3072978a7233cde05570de8ca6479fb6"],
    [
      "static/media/King-Basil.41221e7e.ttf",
      "41221e7eca828bb21bdab714934cdfe7",
    ],
    [
      "static/media/LibreBaskerville-Regular.27b9efe7.ttf",
      "27b9efe7ae34478c82311efb90011607",
    ],
    ["static/media/community.04507a88.png", "04507a8886ed15772ae574f649b4b35f"],
    ["static/media/culture.4fc3b25f.png", "4fc3b25f421e87e1af72a6c1b8742c01"],
    ["static/media/debate.bdfa8612.png", "bdfa8612aa89df37d43248c14d5dd904"],
    ["static/media/fem.7d4b0c27.png", "7d4b0c2747500b3235d6cba69f781ef4"],
    [
      "static/media/filmflowers.a3301294.png",
      "a3301294f7c8dc8b78d9513c778f009f",
    ],
    ["static/media/grace.a4cdde99.png", "a4cdde9987327472909263d97fa65c7a"],
    ["static/media/guardian.90f6cc98.png", "90f6cc985d04203e83eff6c95e84deb3"],
    ["static/media/hamilton.3a7bd089.png", "3a7bd0892b5e8b06517ad38b9c7c0362"],
    ["static/media/legends.ac53b369.png", "ac53b369bd0d7009178c211e043e1539"],
    ["static/media/logo.79bad544.png", "79bad544184f3035931545b500d42872"],
    ["static/media/moma.7c1a111f.png", "7c1a111f901c0f98c44faca15eea3253"],
    ["static/media/mplus.a94a973d.png", "a94a973dd2dcc54ab6b090ce66385941"],
    ["static/media/openvis.80f071a6.png", "80f071a602a173cc3d971c9f7e2a6912"],
    ["static/media/pandemic.635456d6.png", "635456d6abb25aa6a319069aeb4782a7"],
    ["static/media/product.c1859210.png", "c185921013df591ea80ab43d25e642e2"],
    ["static/media/profile.53656c4c.png", "53656c4ce98401cbc55c55f60c171ad9"],
    ["static/media/reactd3.e8db4bf1.png", "e8db4bf114dbbaace9bb19db7fd72d96"],
    ["static/media/travel.f545a6c8.png", "f545a6c8871e63caae062991ed29356d"],
  ],
  cacheName =
    "sw-precache-v3-sw-precache-webpack-plugin-" +
    (self.registration ? self.registration.scope : ""),
  ignoreUrlParametersMatching = [/^utm_/],
  addDirectoryIndex = function (e, a) {
    var t = new URL(e);
    return "/" === t.pathname.slice(-1) && (t.pathname += a), t.toString();
  },
  cleanResponse = function (e) {
    return e.redirected
      ? ("body" in e ? Promise.resolve(e.body) : e.blob()).then(function (a) {
          return new Response(a, {
            headers: e.headers,
            status: e.status,
            statusText: e.statusText,
          });
        })
      : Promise.resolve(e);
  },
  createCacheKey = function (e, a, t, n) {
    var c = new URL(e);
    return (
      (n && c.pathname.match(n)) ||
        (c.search +=
          (c.search ? "&" : "") +
          encodeURIComponent(a) +
          "=" +
          encodeURIComponent(t)),
      c.toString()
    );
  },
  isPathWhitelisted = function (e, a) {
    if (0 === e.length) return !0;
    var t = new URL(a).pathname;
    return e.some(function (e) {
      return t.match(e);
    });
  },
  stripIgnoredUrlParameters = function (e, a) {
    var t = new URL(e);
    return (
      (t.hash = ""),
      (t.search = t.search
        .slice(1)
        .split("&")
        .map(function (e) {
          return e.split("=");
        })
        .filter(function (e) {
          return a.every(function (a) {
            return !a.test(e[0]);
          });
        })
        .map(function (e) {
          return e.join("=");
        })
        .join("&")),
      t.toString()
    );
  },
  hashParamName = "_sw-precache",
  urlsToCacheKeys = new Map(
    precacheConfig.map(function (e) {
      var a = e[0],
        t = e[1],
        n = new URL(a, self.location),
        c = createCacheKey(n, hashParamName, t, /\.\w{8}\./);
      return [n.toString(), c];
    })
  );
self.addEventListener("install", function (e) {
  e.waitUntil(
    caches
      .open(cacheName)
      .then(function (e) {
        return setOfCachedUrls(e).then(function (a) {
          return Promise.all(
            Array.from(urlsToCacheKeys.values()).map(function (t) {
              if (!a.has(t)) {
                var n = new Request(t, { credentials: "same-origin" });
                return fetch(n).then(function (a) {
                  if (!a.ok)
                    throw new Error(
                      "Request for " +
                        t +
                        " returned a response with status " +
                        a.status
                    );
                  return cleanResponse(a).then(function (a) {
                    return e.put(t, a);
                  });
                });
              }
            })
          );
        });
      })
      .then(function () {
        return self.skipWaiting();
      })
  );
}),
  self.addEventListener("activate", function (e) {
    var a = new Set(urlsToCacheKeys.values());
    e.waitUntil(
      caches
        .open(cacheName)
        .then(function (e) {
          return e.keys().then(function (t) {
            return Promise.all(
              t.map(function (t) {
                if (!a.has(t.url)) return e.delete(t);
              })
            );
          });
        })
        .then(function () {
          return self.clients.claim();
        })
    );
  }),
  self.addEventListener("fetch", function (e) {
    if ("GET" === e.request.method) {
      var a,
        t = stripIgnoredUrlParameters(
          e.request.url,
          ignoreUrlParametersMatching
        );
      a = urlsToCacheKeys.has(t);
      a ||
        ((t = addDirectoryIndex(t, "index.html")),
        (a = urlsToCacheKeys.has(t)));
      !a &&
        "navigate" === e.request.mode &&
        isPathWhitelisted(["^(?!\\/__).*"], e.request.url) &&
        ((t = new URL("/index.html", self.location).toString()),
        (a = urlsToCacheKeys.has(t))),
        a &&
          e.respondWith(
            caches
              .open(cacheName)
              .then(function (e) {
                return e.match(urlsToCacheKeys.get(t)).then(function (e) {
                  if (e) return e;
                  throw Error(
                    "The cached response that was expected is missing."
                  );
                });
              })
              .catch(function (a) {
                return (
                  console.warn(
                    'Couldn\'t serve response for "%s" from cache: %O',
                    e.request.url,
                    a
                  ),
                  fetch(e.request)
                );
              })
          );
    }
  });
