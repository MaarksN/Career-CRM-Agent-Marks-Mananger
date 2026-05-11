import assert from "node:assert/strict";

export function assertHasKeys<T extends object>(
  value: T,
  keys: readonly (keyof T)[]
): asserts value is T {
  for (const key of keys) {
    assert.ok(key in value, `Expected key ${String(key)} to exist.`);
  }
}

export function createFixedClock(isoTimestamp: string): () => Date {
  return () => new Date(isoTimestamp);
}
