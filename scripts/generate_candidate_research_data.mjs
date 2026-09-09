import { readFile, writeFile } from "node:fs/promises";

const input = "/home/ubuntu/.manus-jobs/job_XA1tgS8E/output.txt";
const output = "/home/ubuntu/laredo-politics-hub/client/src/data/candidateResearch.ts";
const parsed = JSON.parse(await readFile(input, "utf8"));
if (!Array.isArray(parsed.items) || parsed.items.length !== 16) throw new Error(`Expected 16 candidate records, found ${parsed.items?.length ?? 0}`);

const records = Object.fromEntries(parsed.items.map((item) => [item.fullName, {
  fullName: item.fullName,
  ballotName: item.ballotName,
  office: item.office,
  candidateWebsite: item.candidateWebsite,
  portraitUrl: item.portraitUrl,
  profileConfidence: item.profileConfidence,
  profileSummary: item.profileSummary,
  verifiedFacts: item.verifiedFacts,
  questionnaireFollowups: item.questionnaireFollowups,
  financeStatus: item.financeStatus,
  financeNotes: item.financeNotes,
  financeFilings: item.financeFilings,
  sourceUrls: item.sourceUrls,
}]));

const source = `export type CandidateResearchRecord = {
  fullName: string;
  ballotName: string;
  office: string;
  candidateWebsite: string | null;
  portraitUrl: string | null;
  profileConfidence: "high" | "medium" | "limited";
  profileSummary: string;
  verifiedFacts: Array<{ fact: string; sourceTitle: string; sourceUrl: string }>;
  questionnaireFollowups: string[];
  financeStatus: "amounts_extracted" | "documents_found" | "no_2026_filing_located";
  financeNotes: string;
  financeFilings: Array<{
    reportDate: string;
    filingType: string;
    documentUrl: string;
    coveragePeriod: string | null;
    totalContributions: number | null;
    totalExpenditures: number | null;
    cashOnHand: number | null;
    loansOutstanding: number | null;
    extractionStatus: "extracted" | "document-only" | "scan-unreadable";
    notes: string;
  }>;
  sourceUrls: string[];
};

export const candidateResearchByFullName: Record<string, CandidateResearchRecord> = ${JSON.stringify(records, null, 2).replaceAll("<", "\\u003c")};
`;

await writeFile(output, source);
console.log(`Generated ${Object.keys(records).length} typed candidate research records.`);
