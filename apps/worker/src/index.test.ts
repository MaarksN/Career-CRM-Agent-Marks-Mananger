import assert from "node:assert/strict";
import test from "node:test";

import { runOnce } from "./index.js";

test("runOnce reports honest foundation mode without pretending 24h processing", async () => {
  const result = await runOnce();

  assert.equal(result.mode, "foundation");
  assert.equal(result.status, "queue_not_configured");
  assert.equal(result.queueConfigured, false);
  assert.equal(result.continuousOperationImplemented, false);
  assert.match(result.message, /future backend\/worker phase/u);
});
