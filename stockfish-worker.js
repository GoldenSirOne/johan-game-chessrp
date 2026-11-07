// Same-origin worker wrapper for Stockfish.js Lite single-threaded WASM.
const STOCKFISH_BASE = "https://cdn.jsdelivr.net/npm/stockfish@19.0.1/bin/";
self.Module = {
  locateFile: function (path) { return new URL(path, STOCKFISH_BASE).href; },
  printErr: function (message) { self.postMessage("ENGINE STDERR: " + message); },
  onAbort: function (reason) { self.postMessage("ENGINE ABORT: " + reason); }
};
try {
  importScripts(STOCKFISH_BASE + "stockfish-19-lite-single.js");
} catch (error) {
  self.postMessage("ENGINE BOOT ERROR: " + (error && error.message ? error.message : String(error)));
}
