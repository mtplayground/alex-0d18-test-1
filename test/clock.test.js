const assert = require("node:assert/strict");
const test = require("node:test");

const { formatHHMMSS } = require("../clock.js");

test("formats midnight", () => {
  assert.equal(formatHHMMSS(new Date(2026, 0, 1, 0, 0, 0)), "00:00:00");
});

test("formats noon", () => {
  assert.equal(formatHHMMSS(new Date(2026, 0, 1, 12, 0, 0)), "12:00:00");
});

test("zero-pads single-digit components", () => {
  assert.equal(formatHHMMSS(new Date(2026, 0, 1, 3, 4, 5)), "03:04:05");
});

test("formats end-of-day", () => {
  assert.equal(formatHHMMSS(new Date(2026, 0, 1, 23, 59, 59)), "23:59:59");
});
