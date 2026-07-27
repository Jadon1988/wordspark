// WordSpark service worker — makes the app installable and lets it open offline.
// Strategy: network-first for the app's own files (so your updates always arrive),
// falling back to the saved copy when offline. Requests to other sites (the AI tutor,
// the word list, the dictionary) always go straight to the internet and are never cached.
//
// Bump CACHE (v1 → v2 → …) any time you want to force every device to drop its saved copy.
const CACHE = "wordspark-20260727-c6fd9c8e";
const SHELL = ["./", "./index.html", "./app.js", "./manifest.webmanifest", "./vendor/react.production.min.js", "./vendor/react-dom.production.min.js"];

self.addEventListener("install", (e) => {
  // Fetch each shell file fresh (bypassing the browser's HTTP cache) and store it
  // independently, so one file failing can't abort the whole precache.
  e.waitUntil(
    caches.open(CACHE).then((c) =>
      Promise.allSettled(SHELL.map((u) => c.add(new Request(u, { cache: "reload" }))))
    )
  );
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  // Remove old caches, then take control of open pages immediately.
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return; // external API calls pass straight through

  e.respondWith(
    fetch(req)
      .then((res) => {
        // Save a fresh copy of same-origin files for offline use.
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
        return res;
      })
      .catch(() =>
        // Offline: serve the saved copy. For a page navigation with no cached match,
        // fall back to the app shell; for other requests, report a normal network error.
        caches.match(req).then((r) => r || (req.mode === "navigate" ? caches.match("./index.html") : Response.error()))
      )
  );
});
