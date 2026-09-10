import { describe, expect, it } from "vitest";
import { sponsorPackages } from "./data/sponsorships";

const expected = {
  "small-square": { price: 150, billing: "subscription" },
  banner: { price: 250, billing: "subscription" },
  "non-rotating": { price: 500, billing: "subscription" },
  "lock-in": { price: 1500, billing: "one_time" },
  newsletter: { price: 225, billing: "one_time" },
} as const;

describe("supplied advertising rate sheet", () => {
  it("contains exactly the five approved products and prices", () => {
    expect(sponsorPackages).toHaveLength(5);
    for (const item of sponsorPackages) {
      expect(expected[item.id]).toEqual({ price: item.price, billing: item.billing });
    }
  });

  it("uses five unique live Stripe checkout links with no placeholders", () => {
    const links = sponsorPackages.map((item) => item.stripeUrl);
    expect(new Set(links).size).toBe(5);
    links.forEach((link) => {
      expect(link).toMatch(/^https:\/\/buy\.stripe\.com\/[A-Za-z0-9]+$/);
      expect(link).not.toContain("REPLACE");
    });
  });
});
