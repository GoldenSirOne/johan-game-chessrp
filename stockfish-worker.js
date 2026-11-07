// Load Stockfish from the same GitHub Pages origin as Chessbound.
// Safari can reject cross-origin importScripts() from a CDN inside a worker.
const STOCKFISH_BASE = new URL("./vendor/stockfish/", self.location.href);
self.Module = {
  locateFile: function (path) { return new URL(path, STOCKFISH_BASE).href; },
  printErr: function (message) { self.postMessage("ENGINE STDERR: " + message); },
  onAbort: function (reason) { self.postMessage("ENGINE ABORT: " + reason); }
};
try {
  importScripts(new URL("stockfish-19-lite-single.js", STOCKFISH_BASE).href);
} catch (error) {
  self.postMessage("ENGINE BOOT ERROR: " + (error && error.message ? error.message : String(error)));
}
