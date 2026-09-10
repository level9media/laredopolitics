import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { advertisers, recommendedRotationCap } from "./data/advertisers";

const projectRoot = resolve(import.meta.dirname, "../..");

describe("IBC Bank rotating advertisement", () => {
  const ibc = advertisers.find((advertiser) => advertiser.id === "ibc-bank-business-banking");

  it("is the first active sitewide paid campaign", () => {
    expect(advertisers[0]?.id).toBe("ibc-bank-business-banking");
    expect(ibc).toMatchObject({
      businessName: "IBC Bank",
      href: "https://www.ibc.com/business",
      placement: "sitewide",
      active: true,
    });
    expect(ibc?.available).toBeUndefined();
  });

  it("uses the optimized supplied creative and stays within the rotation cap", () => {
    expect(ibc?.image).toBe("/media/ibc-bank-laredo-business-ad_2026.webp");
    expect(existsSync(resolve(projectRoot, `client/public${ibc?.image}`))).toBe(true);

    for (const placement of ["homepage", "resource"] as const) {
      const activeSlides = advertisers.filter(
        (advertiser) => advertiser.active && (advertiser.placement === "sitewide" || advertiser.placement === placement),
      );
      expect(activeSlides.length).toBeLessThanOrEqual(recommendedRotationCap);
    }
  });
});
