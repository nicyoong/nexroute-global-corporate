import { describe, it, expect } from "vitest";
import { SERVICES_DATA } from "./services";

describe("services", () => {
  it("exports an object with service data", () => {
    expect(typeof SERVICES_DATA).toBe("object");
  });

  it("has 6 services", () => {
    expect(Object.keys(SERVICES_DATA)).toHaveLength(6);
  });

  it("each service has required fields", () => {
    Object.values(SERVICES_DATA).forEach((svc) => {
      expect(svc.title).toBeDefined();
      expect(svc.description).toBeDefined();
      expect(svc.fullDescription).toBeDefined();
      expect(svc.metaDescription).toBeDefined();
      expect(Array.isArray(svc.capabilities)).toBe(true);
      expect(Array.isArray(svc.benefits)).toBe(true);
    });
  });

  it("service slugs are unique", () => {
    const slugs = Object.keys(SERVICES_DATA);
    const unique = new Set(slugs);
    expect(unique.size).toBe(slugs.length);
  });

  it("each service slug matches kebab-case pattern", () => {
    Object.keys(SERVICES_DATA).forEach((slug) => {
      expect(slug).toMatch(/^[a-z0-9-]+$/);
    });
  });
});
