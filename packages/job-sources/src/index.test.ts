import assert from "node:assert/strict";
import test from "node:test";

import { assertSafeJobSourceCatalog, listJobSources } from "./index.js";

test("initial job source catalog never enables auto apply or scraping", () => {
  const catalog = listJobSources();

  assert.ok(catalog.length >= 1);
  assert.equal(assertSafeJobSourceCatalog(catalog), true);
  assert.equal(
    catalog.some((source) => source.autoApplyEnabled),
    false
  );
  assert.equal(
    catalog.some((source) => source.scrapingAllowed),
    false
  );
});
