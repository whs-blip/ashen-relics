// Installability shell. The game is network-first; this worker intentionally
// caches nothing so a GitHub Pages deploy never serves a stale build.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
