import { describe, expect, it } from "vitest";
import { candidatesEn } from "./data/resources-en";
import {
  localRaces,
  mayorBallot,
  officialCandidateSourceUrl,
  officialElectionResources,
  politicalForums,
} from "./data/localRaces";

const officialRaceBallots = {
  "district-1": ["Lupe De Leon Jr", "Gilbert Gonzalez"],
  "district-2": ['Ricardo "Richie" Rangel Jr', "Daisy Campos Rodriguez"],
  "district-3": ["Melissa R Cigarroa", 'Michelle "Mimi" Winterroth', 'Clarissa "Claire" Cardenas'],
  "district-6": ["D. Tyler King", 'Ubaldo "Baldo" Granados Jr'],
  "municipal-court-judge": ["Nathan Henry Chu", "Rudy Morales III"],
};

const officialMayorBallots = [
  "Victor D. Trevino",
  "JD Gonzalez",
  "Jorge A. Garza",
  "Poncho Casso",
  "Alyssa Cigarroa",
];

describe("City of Laredo 2026 source of truth", () => {
  it("publishes the exact mayoral ballot order", () => {
    expect(mayorBallot.candidates.map((candidate) => candidate.ballotName)).toEqual(officialMayorBallots);
  });

  it("publishes the exact City-listed district and judge fields", () => {
    expect(Object.fromEntries(localRaces.map((race) => [race.slug, race.candidates.map((candidate) => candidate.ballotName)]))).toEqual(officialRaceBallots);
    expect(localRaces.map((race) => race.district).filter(Boolean)).toEqual([1, 2, 3, 6]);
  });

  it("does not publish a non-City-listed District 6 candidate", () => {
    const district6 = localRaces.find((race) => race.slug === "district-6");
    expect(district6?.candidates.map((candidate) => candidate.fullName)).not.toContain("Rosalinda Montemayor");
    expect(district6?.candidates).toHaveLength(2);
  });

  it("links every official candidate to treasurer and application documents", () => {
    const candidates = [...mayorBallot.candidates, ...localRaces.flatMap((race) => race.candidates)];
    expect(candidates).toHaveLength(16);
    for (const candidate of candidates) {
      expect(candidate.campaignTreasurer.length).toBeGreaterThan(0);
      expect(candidate.treasurerUrl).toMatch(/^https:\/\/www\.cityoflaredo\.com\/home\/showpublisheddocument\//);
      expect(candidate.applicationUrl).toMatch(/^https:\/\/www\.cityoflaredo\.com\/home\/showpublisheddocument\//);
    }
  });

  it("keeps mayor dossiers synchronized with the City filing record", () => {
    for (const dossier of candidatesEn) {
      const official = mayorBallot.candidates.find((candidate) => candidate.ballotName === dossier.ballotName);
      expect(official).toBeDefined();
      expect(dossier.officialFullName).toBe(official?.fullName);
      expect(dossier.campaignTreasurer).toBe(official?.campaignTreasurer);
      expect(dossier.treasurerUrl).toBe(official?.treasurerUrl);
      expect(dossier.applicationUrl).toBe(official?.applicationUrl);
    }
  });

  it("uses the designated City page and all six official forum times", () => {
    expect(officialCandidateSourceUrl).toBe("https://www.cityoflaredo.com/departments/elections/2026-candidates-information");
    expect(officialElectionResources.candidates).toBe(officialCandidateSourceUrl);
    expect(politicalForums).toHaveLength(6);
  });
});
