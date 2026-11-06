# Chessbound: The Crown's Gambit

A 16-bit pixel-art chess RPG built as a static browser game for GitHub Pages.

## Play

Once GitHub Pages is enabled, visit:

https://goldensirone.github.io/johan-game-chessrp/

## Features

- Character creation: name, skin tone, hair, outfit and colour.
- Top-down overworld with keyboard controls (WASD / arrow keys) and mobile directional buttons.
- Story-driven regions: Village of Opening, Greenwood, Royal City, Northern Keep and Grand Arena.
- NPC dialogue, chess rivals, shops, a village cup and a checkmate puzzle.
- Chess matches with legal moves, castling, en passant, promotion, check, checkmate and draws handled by chess.js.
- Opponents with Elo labels, distinct styles and different move-selection strength profiles.
- XP, levels, gold, player Elo, reputation, quests, trophies and cosmetic unlocks.
- Collectible chess sets and outfits; cosmetics do not affect chess rules.
- Local autosave, manual save, export/import save code and reset.
- Responsive layout for desktop and mobile.

## Controls

- Move: WASD or arrow keys. On touch screens use the on-screen D-pad.
- Interact: E when near a character.
- Chess: tap/click a piece, then its destination.
- Escape: close the current dialogue.

## Technical notes

- Static HTML/CSS/JavaScript; no build step or backend required.
- chess.js is loaded as an ES module from esm.sh for complete chess move legality.
- The opponent AI uses legal move generation plus material, positional and style-aware scoring with Elo-tiered candidate selection. Elo values are approximate game difficulty targets, not official FIDE or Chess.com ratings.
- Progress is stored in the current browser's localStorage. Use Export Save Code to move progress between browsers/devices.
- The game uses generated pixel-style canvas art and emoji portraits; no external image assets are required.

## Publish with GitHub Pages

1. Open repository Settings → Pages.
2. Under Build and deployment, choose **Deploy from a branch**.
3. Select branch **main** and folder **/(root)**, then Save.
4. Wait for the Pages deployment to finish.
