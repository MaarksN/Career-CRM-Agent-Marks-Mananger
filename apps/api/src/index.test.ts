import assert from "node:assert/strict";
import type { Server } from "node:http";
import test from "node:test";

import { createApiServer } from "./index.js";

test("GET /health returns a real JSON health payload", async () => {
  const server = await listen(createApiServer());

  try {
    const response = await fetch(`${server.url}/health`);
    const payload = (await response.json()) as { status?: unknown; service?: unknown };

    assert.equal(response.status, 200);
    assert.equal(payload.status, "ok");
    assert.equal(payload.service, "job-match-os-api");
  } finally {
    await server.close();
  }
});

async function listen(server: Server): Promise<{ url: string; close: () => Promise<void> }> {
  await new Promise<void>((resolve) => {
    server.listen(0, "127.0.0.1", resolve);
  });

  const address = server.address();
  assert.ok(address !== null && typeof address === "object");

  return {
    url: `http://127.0.0.1:${address.port}`,
    close: () =>
      new Promise<void>((resolve, reject) => {
        server.close((error) => {
          if (error !== undefined) {
            reject(error);
            return;
          }

          resolve();
        });
      })
  };
}
