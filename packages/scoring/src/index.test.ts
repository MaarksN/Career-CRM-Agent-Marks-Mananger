import assert from "node:assert/strict";
import test from "node:test";

import {
  calculateCompatibilityBand,
  calculateTemperatureBand,
  normalizeScore
} from "./index.js";

test("normalizeScore clamps values to a zero-to-one-hundred scale", () => {
  assert.equal(normalizeScore(-10), 0);
  assert.equal(normalizeScore(42.4), 42);
  assert.equal(normalizeScore(120), 100);
});

test("normalizeScore supports custom deterministic ranges", () => {
  assert.equal(normalizeScore(5, { min: 0, max: 10 }), 50);
});

test("calculateCompatibilityBand returns stable bands", () => {
  assert.equal(calculateCompatibilityBand(20), "low");
  assert.equal(calculateCompatibilityBand(55), "medium");
  assert.equal(calculateCompatibilityBand(70), "high");
  assert.equal(calculateCompatibilityBand(90), "excellent");
});

test("calculateTemperatureBand returns stable bands", () => {
  assert.equal(calculateTemperatureBand(10), "cold");
  assert.equal(calculateTemperatureBand(40), "warm");
  assert.equal(calculateTemperatureBand(75), "hot");
});
