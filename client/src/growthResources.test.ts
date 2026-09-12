import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { candidateFinanceRecords } from "./data/campaignFinance";
import { localCandidateProfiles } from "./data/localCandidateProfiles";

const root = resolve(import.meta.dirname, "../..");

describe("growth resource architecture", () => {
  it("publishes one profile for every district and judicial candidate", () => {
    expect(localCandidateProfiles).toHaveLength(11);
    expect(
      new Set(localCandidateProfiles.map(candidate => candidate.slug)).size
    ).toBe(11);
    expect(
      localCandidateProfiles.every(candidate => candidate.questions.length >= 9)
    ).toBe(true);
    expect(
      localCandidateProfiles.every(
        candidate => candidate.verifiedFacts.length >= 4
      )
    ).toBe(true);
    expect(
      localCandidateProfiles.filter(candidate => candidate.portraitUrl)
    ).toHaveLength(5);
  });

  it("publishes Michelle Winterroth's attributed candidate statement in both languages", () => {
    const michelle = localCandidateProfiles.find(
      candidate => candidate.slug === "michelle-winterroth"
    );
    expect(michelle?.candidateSubmission?.title).toEqual({
      en: "Who I Am",
      es: "Quién soy",
    });
    expect(michelle?.candidateSubmission?.paragraphs.en).toHaveLength(14);
    expect(michelle?.candidateSubmission?.paragraphs.es).toHaveLength(14);
    expect(michelle?.candidateSubmission?.paragraphs.en.join(" ")).toContain(
      "I am one of you, working for you."
    );
    expect(michelle?.candidateSubmission?.paragraphs.es.join(" ")).toContain(
      "Soy una de ustedes, trabajando para ustedes."
    );
    expect(michelle?.portraitUrl).toBe(
      "/media/michelle-mimi-winterroth-official-headshot_2026.webp"
    );
    expect(michelle?.portraitCredit).toContain("Official headshot provided");
    expect(michelle?.questionnaireResponse?.authorizationCertified).toBe(true);
    expect(
      Object.keys(michelle?.questionnaireResponse?.answers || {})
    ).toHaveLength(10);
    expect(michelle?.questionnaireResponse?.answers.priorities.en).toContain(
      "Fix the basics"
    );
    expect(michelle?.questionnaireResponse?.answers.priorities.es).toContain(
      "Arreglar lo básico"
    );
    expect(michelle?.responseStatus).toBe("verified-published");
    expect(
      localCandidateProfiles.filter(candidate => candidate.candidateSubmission)
    ).toHaveLength(1);
    expect(
      localCandidateProfiles.filter(
        candidate => candidate.questionnaireResponse
      )
    ).toHaveLength(2);
  });

  it("publishes Clarissa Cardenas's official headshot and three attributed bilingual responses", () => {
    const clarissa = localCandidateProfiles.find(
      candidate => candidate.slug === "clarissa-cardenas"
    );
    expect(clarissa?.portraitUrl).toBe(
      "/media/clarissa-claire-cardenas-official-headshot_2026.webp"
    );
    expect(clarissa?.portraitCredit).toContain(
      "Clarissa “Claire” Cardenas campaign"
    );
    expect(clarissa?.questionnaireResponse?.respondentName).toBe(
      "Clarissa “Claire” Cardenas"
    );
    expect(clarissa?.questionnaireResponse?.authorizationCertified).toBe(false);
    expect(Object.keys(clarissa?.questionnaireResponse?.answers || {})).toEqual(
      ["priorities", "record-followup-3", "record-followup-4"]
    );
    expect(clarissa?.questionnaireResponse?.answers.priorities.en).toContain(
      "responsible economic development"
    );
    expect(clarissa?.questionnaireResponse?.answers.priorities.es).toContain(
      "desarrollo económico responsable"
    );
    expect(
      clarissa?.questionnaireResponse?.answers["record-followup-3"].en
    ).toContain("within two business days");
    expect(
      clarissa?.questionnaireResponse?.answers["record-followup-3"].es
    ).toContain("dentro de dos días hábiles");
    expect(
      clarissa?.questionnaireResponse?.answers["record-followup-4"].en
    ).toContain("budgeting, management, planning");
    expect(
      clarissa?.questionnaireResponse?.answers["record-followup-4"].es
    ).toContain("presupuestos, administración, planificación");
    expect(clarissa?.responseStatus).toBe("verified-published");
  });

  it("publishes Dr. Tyler King's campaign-provided official assets with bilingual attribution", () => {
    const tyler = localCandidateProfiles.find(
      candidate => candidate.slug === "d-tyler-king"
    );
    expect(tyler?.portraitUrl).toBe(
      "/media/dr-tyler-king-official-headshot_2026.webp"
    );
    expect(tyler?.portraitCredit).toContain("Official headshot provided");
    expect(tyler?.candidateWebsite).toBe("https://www.tylerkinglaredo.com");
    expect(tyler?.campaignMaterials).toHaveLength(1);
    expect(tyler?.campaignMaterials?.[0]).toMatchObject({
      imageUrl: "/media/dr-tyler-king-campaign-signage_2026.webp",
      title: {
        en: "Official re-election campaign graphic",
        es: "Gráfico oficial de la campaña de reelección",
      },
      sourceUrl: "https://www.tylerkinglaredo.com",
    });
    expect(tyler?.campaignMaterials?.[0].credit.en).toContain(
      "Provided directly by the Dr. Tyler King campaign"
    );
    expect(tyler?.campaignMaterials?.[0].credit.es).toContain(
      "Proporcionado directamente por la campaña del Dr. Tyler King"
    );
  });

  it("tracks all 16 officially listed candidates without turning missing amounts into zero", () => {
    expect(candidateFinanceRecords).toHaveLength(16);
    expect(
      new Set(candidateFinanceRecords.map(candidate => candidate.slug)).size
    ).toBe(16);
    expect(
      candidateFinanceRecords.filter(
        candidate => candidate.status === "amounts-extracted"
      )
    ).toHaveLength(6);
    expect(
      candidateFinanceRecords.flatMap(candidate => candidate.filings)
    ).toHaveLength(11);
    expect(
      candidateFinanceRecords.some(
        candidate => candidate.status === "pending-verification"
      )
    ).toBe(false);
    for (const candidate of candidateFinanceRecords) {
      if (!candidate.filings.length)
        expect(candidate.status).not.toBe("amounts-extracted");
      for (const filing of candidate.filings) {
        if (filing.extractionStatus !== "extracted") {
          expect(filing.totalContributions).toBeNull();
          expect(filing.totalExpenditures).toBeNull();
        }
      }
    }
  });

  it("lists 100 bilingual indexable routes including all new resources", () => {
    const sitemap = readFileSync(
      resolve(root, "client/public/sitemap.xml"),
      "utf8"
    );
    expect(sitemap.match(/<url>/g) || []).toHaveLength(100);
    expect(sitemap).toContain("https://laredopolitics.com/campaign-finance");
    expect(sitemap).toContain("https://laredopolitics.com/where-to-vote");
    expect(sitemap).toContain("https://laredopolitics.com/advertise");
    expect(sitemap).toContain(
      "https://laredopolitics.com/es/finanzas-de-campana"
    );
    expect(sitemap).toContain("https://laredopolitics.com/es/donde-votar");
    expect(sitemap).toContain("https://laredopolitics.com/es/anunciate");
  });
});
