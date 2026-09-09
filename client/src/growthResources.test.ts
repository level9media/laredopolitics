import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { candidateFinanceRecords } from "./data/campaignFinance";
import { localCandidateProfiles } from "./data/localCandidateProfiles";

const root = resolve(import.meta.dirname, "../..");

describe("growth resource architecture", () => {
  it("publishes one profile for every district and judicial candidate", () => {
    expect(localCandidateProfiles).toHaveLength(11);
    expect(new Set(localCandidateProfiles.map((candidate) => candidate.slug)).size).toBe(11);
    expect(localCandidateProfiles.every((candidate) => candidate.questions.length >= 9)).toBe(true);
    expect(localCandidateProfiles.every((candidate) => candidate.verifiedFacts.length >= 4)).toBe(true);
    expect(localCandidateProfiles.filter((candidate) => candidate.portraitUrl)).toHaveLength(3);
  });

  it("tracks all 16 officially listed candidates without turning missing amounts into zero", () => {
    expect(candidateFinanceRecords).toHaveLength(16);
    expect(new Set(candidateFinanceRecords.map((candidate) => candidate.slug)).size).toBe(16);
    expect(candidateFinanceRecords.filter((candidate) => candidate.status === "amounts-extracted")).toHaveLength(6);
    expect(candidateFinanceRecords.flatMap((candidate) => candidate.filings)).toHaveLength(11);
    expect(candidateFinanceRecords.some((candidate) => candidate.status === "pending-verification")).toBe(false);
    for (const candidate of candidateFinanceRecords) {
      if (!candidate.filings.length) expect(candidate.status).not.toBe("amounts-extracted");
      for (const filing of candidate.filings) {
        if (filing.extractionStatus !== "extracted") {
          expect(filing.totalContributions).toBeNull();
          expect(filing.totalExpenditures).toBeNull();
        }
      }
    }
  });

  it("lists 100 bilingual indexable routes including all new resources", () => {
    const sitemap = readFileSync(resolve(root, "client/public/sitemap.xml"), "utf8");
    expect((sitemap.match(/<url>/g) || [])).toHaveLength(100);
    expect(sitemap).toContain("https://laredopolitics.com/campaign-finance");
    expect(sitemap).toContain("https://laredopolitics.com/where-to-vote");
    expect(sitemap).toContain("https://laredopolitics.com/advertise");
    expect(sitemap).toContain("https://laredopolitics.com/es/finanzas-de-campana");
    expect(sitemap).toContain("https://laredopolitics.com/es/donde-votar");
    expect(sitemap).toContain("https://laredopolitics.com/es/anunciate");
  });
});
