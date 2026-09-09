import { candidateResearchByFullName } from "./candidateResearch";
import { candidateProfileHref, localCandidateProfiles } from "./localCandidateProfiles";
import { mayorBallot, officialElectionResources } from "./localRaces";

export type FinanceStatus = "amounts-extracted" | "documents-found" | "no-2026-filing-located" | "pending-verification";

export type FinanceFiling = {
  reportDate: string;
  filingType: string;
  documentUrl: string;
  coveragePeriod?: string;
  totalContributions: number | null;
  totalExpenditures: number | null;
  cashOnHand: number | null;
  loansOutstanding: number | null;
  extractionStatus: "extracted" | "document-only" | "scan-unreadable";
  notes: string;
};

export type CandidateFinanceRecord = {
  slug: string;
  fullName: string;
  ballotName: string;
  office: string;
  officeEs: string;
  campaignTreasurer: string;
  profileHref: string;
  profileHrefEs: string;
  status: FinanceStatus;
  statusNote: string;
  statusNoteEs: string;
  filings: FinanceFiling[];
  verifiedAsOf: string;
};

const mayorSlugs: Record<string, string> = {
  "Victor D. Trevino": "victor-trevino",
  "JD Gonzalez": "jd-gonzalez",
  "Jorge A. Garza": "jorge-garza",
  "Poncho Casso": "poncho-casso",
  "Alyssa Cigarroa": "alyssa-cigarroa",
};

export const campaignFinanceSourceUrl = officialElectionResources.financeReports;
export const campaignFinanceVerifiedAsOf = "2026-09-09";

function mapStatus(status?: string): FinanceStatus {
  if (status === "amounts_extracted") return "amounts-extracted";
  if (status === "documents_found") return "documents-found";
  if (status === "no_2026_filing_located") return "no-2026-filing-located";
  return "pending-verification";
}

function statusCopy(status: FinanceStatus, filingCount: number) {
  if (status === "amounts-extracted") return {
    en: `${filingCount} City-hosted 2026 report${filingCount === 1 ? "" : "s"} located; available cover-sheet amounts were transcribed without combining reporting periods.`,
    es: `Se localizaron ${filingCount} informe${filingCount === 1 ? "" : "s"} de 2026 alojado${filingCount === 1 ? "" : "s"} por la Ciudad; las cantidades disponibles se transcribieron sin combinar periodos.`,
  };
  if (status === "documents-found") return {
    en: `${filingCount} City-hosted 2026 report${filingCount === 1 ? "" : "s"} located; amounts have not been reliably extracted.`,
    es: `Se localizaron ${filingCount} informe${filingCount === 1 ? "" : "s"} de 2026 alojado${filingCount === 1 ? "" : "s"} por la Ciudad; las cantidades aún no se han extraído de forma confiable.`,
  };
  if (status === "no-2026-filing-located") return {
    en: "No candidate-attributable 2026 campaign-finance report was located on the City directory as reviewed. This is not a zero-dollar finding.",
    es: "No se localizó en el directorio municipal revisado un informe financiero de campaña de 2026 atribuible a esta candidatura. Esto no significa actividad de cero dólares.",
  };
  return {
    en: "Candidate-specific 2026 reports remain pending verification.",
    es: "Los informes de 2026 específicos de esta candidatura siguen pendientes de verificación.",
  };
}

function researchFilings(fullName: string): FinanceFiling[] {
  const research = candidateResearchByFullName[fullName];
  return (research?.financeFilings || []).map((filing) => ({
    reportDate: filing.reportDate,
    filingType: filing.filingType,
    documentUrl: filing.documentUrl,
    coveragePeriod: filing.coveragePeriod || undefined,
    totalContributions: filing.totalContributions,
    totalExpenditures: filing.totalExpenditures,
    cashOnHand: filing.cashOnHand,
    loansOutstanding: filing.loansOutstanding,
    extractionStatus: filing.extractionStatus,
    notes: filing.notes,
  }));
}

export const candidateFinanceRecords: CandidateFinanceRecord[] = [
  ...mayorBallot.candidates.map((candidate) => {
    const slug = mayorSlugs[candidate.ballotName];
    const filings = researchFilings(candidate.fullName);
    const status = mapStatus(candidateResearchByFullName[candidate.fullName]?.financeStatus);
    const note = statusCopy(status, filings.length);
    return {
      slug,
      fullName: candidate.fullName,
      ballotName: candidate.ballotName,
      office: "Mayor",
      officeEs: "Alcalde",
      campaignTreasurer: candidate.campaignTreasurer,
      profileHref: `/candidatos/${slug}`,
      profileHrefEs: `/es/candidatos/${slug}`,
      status,
      statusNote: note.en,
      statusNoteEs: note.es,
      filings,
      verifiedAsOf: campaignFinanceVerifiedAsOf,
    };
  }),
  ...localCandidateProfiles.map((candidate) => {
    const filings = researchFilings(candidate.fullName);
    const status = mapStatus(candidateResearchByFullName[candidate.fullName]?.financeStatus);
    const note = statusCopy(status, filings.length);
    return {
      slug: candidate.slug,
      fullName: candidate.fullName,
      ballotName: candidate.ballotName,
      office: candidate.office.en,
      officeEs: candidate.office.es,
      campaignTreasurer: candidate.campaignTreasurer,
      profileHref: candidateProfileHref(candidate.slug, "en"),
      profileHrefEs: candidateProfileHref(candidate.slug, "es"),
      status,
      statusNote: note.en,
      statusNoteEs: note.es,
      filings,
      verifiedAsOf: campaignFinanceVerifiedAsOf,
    };
  }),
];
