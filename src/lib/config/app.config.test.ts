import { describe, expect, test } from "bun:test";

import app from "./app.config";

describe("app config", () => {
  test("exposes the product identity", () => {
    expect(app.name).toBe("Lattice");
    expect(app.tagline.length).toBeGreaterThan(0);
    expect(app.description.length).toBeGreaterThan(0);
  });

  test("keywords cover the core domain", () => {
    expect(app.keywords).toContain("graphql");
    expect(app.keywords).toContain("federation");
  });

  test("links point at the canonical destinations", () => {
    expect(app.links.docs).toBe("https://docs.omni.dev/products/lattice");
    expect(app.links.github).toBe("https://github.com/omnidotdev/lattice");
  });
});
