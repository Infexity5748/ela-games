import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import vm from "node:vm";

test("Retro Bowl optional SDK absence never throws or fabricates an ad reward", async () => {
  const source = await readFile(new URL("games/retro-bowl/html5game/uph_poki.js", import.meta.url), "utf8");
  const context = { window: { location: { search: "?team=Test" } }, console: { log() {} }, URLSearchParams, setTimeout };
  vm.createContext(context);
  vm.runInContext(source, context);
  context.poki_gameplay_start();
  context.poki_gameplay_stop();
  context.poki_happy_time(1);
  assert.equal(context.poki_get_team_raw(), "Test");
  assert.equal(await new Promise((resolve) => context.poki_commercial_break_raw(resolve)), false);
  assert.equal(await new Promise((resolve) => context.poki_rewarded_break_raw(resolve)), false);
});

test("Basketball Stars keeps a functioning UTF8 decoder and local runtime library imports", async () => {
  const source = await readFile(new URL("games/basketball-stars/assets/main.min.js", import.meta.url), "utf8");
  const start = source.indexOf("new RegExp([");
  assert.ok(start >= 0);
  const expression = source.slice(start, source.indexOf('),cb_btou', start) + 1);
  const regex = vm.runInNewContext(expression);
  assert.equal(regex.test(String.fromCharCode(0xc3, 0xa9)), true);
  const game = await readFile(new URL("games/basketball-stars/assets/basketball_legends_2019.min.js", import.meta.url), "utf8");
  assert.equal(game.includes("cdn.rawgit.com"), false);
  for (const file of ["BlurX.js", "BlurY.js", "phaser-cachebuster.min.js", "phaser-super-storage.min.js"]) {
    assert.ok(game.includes(`vendor/${file}`));
    assert.ok((await readFile(new URL(`games/basketball-stars/vendor/${file}`, import.meta.url))).length);
  }
});
