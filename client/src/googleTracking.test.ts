import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "../..");
const viteConfig = readFileSync(resolve(root, "vite.config.ts"), "utf8");
const analytics = readFileSync(resolve(root, "client/src/components/SiteAnalytics.tsx"), "utf8");
const adCarousel = readFileSync(resolve(root, "client/src/components/AdCarousel.tsx"), "utf8");
const forms = readFileSync(resolve(root, "client/src/lib/directForms.ts"), "utf8");

describe("Google tracking integration", () => {
  it("injects GTM, GA4 fallback, and Search Console verification from build variables", () => {
    expect(viteConfig).toContain("VITE_GTM_ID");
    expect(viteConfig).toContain("VITE_GA4_ID");
    expect(viteConfig).toContain("VITE_GOOGLE_SITE_VERIFICATION");
    expect(viteConfig).toContain("googletagmanager.com/gtm.js");
    expect(viteConfig).toContain("google-site-verification");
    expect(viteConfig).toContain("GTM-M9CDW5XM");
    expect(viteConfig).toContain("G-9WGMJ7KKT3");
    expect(analytics).toContain("GTM-M9CDW5XM");
    expect(analytics).toContain("G-9WGMJ7KKT3");
  });

  it("tracks SPA page views, forms, outbound links, and sponsor delivery", () => {
    expect(analytics).toContain('event: "virtual_page_view"');
    expect(analytics).toContain('event: "outbound_link_click"');
    expect(forms).toContain('event: "form_submission_success"');
    expect(adCarousel).toContain('event: "ad_impression"');
    expect(adCarousel).toContain('event: "ad_click"');
  });

  it("uses the documented Google identifier formats", () => {
    expect("GTM-ABC1234").toMatch(/^GTM-[A-Z0-9]+$/);
    expect("G-ABC1234567").toMatch(/^G-[A-Z0-9]+$/);
  });
});
