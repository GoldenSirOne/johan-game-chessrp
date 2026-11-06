// Stockfish 19 Lite, single-threaded browser worker loader.
// The engine and its WASM binary are served by jsDelivr; no cross-origin
// isolation headers are required for this single-threaded build.
const STOCKFISH_BASE = "https://cdn.jsdelivr.net/npm/stockfish@19.0.1/bin/";
self.Module = self.Module || {};
self.Module.locateFile = function (path) {
  return new URL(path, STOCKFISH_BASE).href;
};
importScripts(STOCKFISH_BASE + "stockfish-19-lite-single.js");
