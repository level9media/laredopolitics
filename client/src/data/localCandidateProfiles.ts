import { localRaces, officialCandidateSourceUrl } from "./localRaces";
import { candidateResearchByFullName } from "./candidateResearch";
import { candidateResearchEsByFullName } from "./candidateResearchEs";

export type Language = "en" | "es";

export type CandidateQuestion = {
  id: string;
  question: { en: string; es: string };
  guidance: { en: string; es: string };
};

export type LocalCandidateProfile = {
  slug: string;
  raceSlug: string;
  office: { en: string; es: string };
  fullName: string;
  ballotName: string;
  campaignTreasurer: string;
  treasurerUrl: string;
  applicationUrl: string;
  summary: { en: string; es: string };
  verifiedFacts: Array<{ text: { en: string; es: string }; sourceTitle: string; sourceUrl: string }>;
  profileConfidence: "official-record-only" | "verified-multi-source" | "limited" | "developing";
  portraitUrl?: string;
  portraitCredit?: string;
  candidateWebsite?: string;
  questions: CandidateQuestion[];
  responseStatus: "not-received" | "received-reviewing" | "verified-published";
};

const slugs: Record<string, string> = {
  "Guadalupe De Leon Jr": "lupe-de-leon-jr",
  "Gilberto Gonzalez": "gilbert-gonzalez",
  "Ricardo Rangel Jr.": "ricardo-rangel-jr",
  "Daisy Alejandra Campos": "daisy-campos-rodriguez",
  "Melissa R Cigarroa": "melissa-cigarroa",
  "Michelle Marie Winterroth": "michelle-winterroth",
  "Clarissa Yvette Cardenas": "clarissa-cardenas",
  "David Tyler King": "d-tyler-king",
  "Ubaldo Granados, Jr.": "ubaldo-granados-jr",
  "Nathan Henry Chu": "nathan-henry-chu",
  "Rodolfo Morales III": "rudy-morales-iii",
};

const sharedQuestions: CandidateQuestion[] = [
  {
    id: "priorities",
    question: { en: "What are your three highest priorities for this office?", es: "¿Cuáles son sus tres prioridades principales para este cargo?" },
    guidance: { en: "Name the outcome, timeline, estimated cost, and responsible department for each priority.", es: "Indique el resultado, plazo, costo estimado y departamento responsable de cada prioridad." },
  },
  {
    id: "first-100-days",
    question: { en: "What will you do during your first 100 days?", es: "¿Qué hará durante sus primeros 100 días?" },
    guidance: { en: "List specific votes, policies, audits, meetings, or administrative actions.", es: "Enumere votos, políticas, auditorías, reuniones o acciones administrativas específicas." },
  },
  {
    id: "budget-taxes",
    question: { en: "What would you change in the City budget, tax rate, or spending priorities?", es: "¿Qué cambiaría en el presupuesto, la tasa de impuestos o las prioridades de gasto?" },
    guidance: { en: "Identify what would increase, decrease, or remain protected and how the change would be funded.", es: "Identifique qué aumentaría, disminuiría o se protegería y cómo se financiaría el cambio." },
  },
  {
    id: "water-infrastructure",
    question: { en: "What measurable plan do you support for water reliability and infrastructure?", es: "¿Qué plan medible apoya para la confiabilidad del agua y la infraestructura?" },
    guidance: { en: "Include project order, funding source, deadlines, and public performance reporting.", es: "Incluya el orden de proyectos, fuente de fondos, plazos e informes públicos de desempeño." },
  },
  {
    id: "transparency",
    question: { en: "Which transparency and ethics rules should be strengthened?", es: "¿Qué reglas de transparencia y ética deben fortalecerse?" },
    guidance: { en: "Address contracts, conflicts, campaign donors, public records, meetings, and performance dashboards.", es: "Aborde contratos, conflictos, donantes, registros públicos, reuniones y tableros de desempeño." },
  },
];

const localPortraits: Record<string, { url: string; credit: string }> = {
  "David Tyler King": { url: "/media/tyler_c05afb18.webp", credit: "Dr. Tyler King campaign website" },
  "Ubaldo Granados, Jr.": { url: "/media/baldo_2faa7d37.webp", credit: "Baldo Granados campaign website" },
  "Nathan Henry Chu": { url: "/media/nathan_40767aa7.webp", credit: "Nathan Chu 4 Judge Linktree" },
};

function roleQuestion(raceSlug: string): CandidateQuestion {
  if (raceSlug === "municipal-court-judge") {
    return {
      id: "court-performance",
      question: { en: "How will you improve court access, case management, fairness, and public reporting?", es: "¿Cómo mejorará el acceso, el manejo de casos, la imparcialidad y los informes públicos del tribunal?" },
      guidance: { en: "Describe measurable service standards while respecting judicial independence and due process.", es: "Describa estándares medibles respetando la independencia judicial y el debido proceso." },
    };
  }
  return {
    id: "district-services",
    question: { en: "Which three district-level service problems require immediate attention?", es: "¿Qué tres problemas de servicios del distrito requieren atención inmediata?" },
    guidance: { en: "Name the location, responsible department, proposed action, budget source, and completion target.", es: "Indique ubicación, departamento responsable, acción, fuente presupuestaria y meta de terminación." },
  };
}

export const localCandidateProfiles: LocalCandidateProfile[] = localRaces.flatMap((race) =>
  race.candidates.map((candidate) => {
    const research = candidateResearchByFullName[candidate.fullName];
    const spanishResearch = candidateResearchEsByFullName[candidate.fullName];
    const portrait = localPortraits[candidate.fullName];
    return {
    slug: slugs[candidate.fullName],
    raceSlug: race.slug,
    office: race.title,
    fullName: candidate.fullName,
    ballotName: candidate.ballotName,
    campaignTreasurer: candidate.campaignTreasurer,
    treasurerUrl: candidate.treasurerUrl,
    applicationUrl: candidate.applicationUrl,
    summary: {
      en: research?.profileSummary || `${candidate.ballotName} is listed by the City of Laredo as a 2026 candidate for ${race.title.en}. This page separates verified filing facts from candidate-supplied questionnaire responses.`,
      es: spanishResearch?.profileSummary || `${candidate.ballotName} aparece en la lista de la Ciudad de Laredo como candidato de 2026 para ${race.title.es}. Esta página separa los datos oficiales de las respuestas proporcionadas por la candidatura.`,
    },
    verifiedFacts: research && spanishResearch ? research.verifiedFacts.map((fact, index) => ({ text: { en: fact.fact, es: spanishResearch.verifiedFacts[index] }, sourceTitle: fact.sourceTitle, sourceUrl: fact.sourceUrl })) : [
      { text: { en: `The official City candidate table lists the full legal name ${candidate.fullName} and ballot name ${candidate.ballotName}.`, es: `La tabla municipal registra el nombre legal ${candidate.fullName} y el nombre en boleta ${candidate.ballotName}.` }, sourceTitle: "2026 Candidates Information", sourceUrl: officialCandidateSourceUrl },
      { text: { en: `The City table identifies ${candidate.campaignTreasurer} as campaign treasurer.`, es: `La tabla municipal identifica a ${candidate.campaignTreasurer} como tesorero de campaña.` }, sourceTitle: "2026 Candidates Information", sourceUrl: officialCandidateSourceUrl },
    ],
    profileConfidence: research ? "verified-multi-source" as const : "official-record-only" as const,
    portraitUrl: portrait?.url,
    portraitCredit: portrait?.credit,
    candidateWebsite: research?.candidateWebsite || undefined,
    questions: [...sharedQuestions, roleQuestion(race.slug), ...(research && spanishResearch ? research.questionnaireFollowups.map((question, index) => ({ id: `record-followup-${index + 1}`, question: { en: question, es: spanishResearch.questionnaireFollowups[index] }, guidance: { en: "Cite the specific public record, date, amount, policy, or measurable commitment supporting the answer.", es: "Cite el registro público, la fecha, la cantidad, la política o el compromiso medible que respalde la respuesta." } })) : [])],
    responseStatus: "not-received" as const,
    };
  }),
);

export function getLocalCandidateProfile(slug: string) {
  return localCandidateProfiles.find((candidate) => candidate.slug === slug);
}

export function candidateProfileHrefForName(fullName: string, language: Language) {
  const candidate = localCandidateProfiles.find((profile) => profile.fullName === fullName);
  return candidate ? candidateProfileHref(candidate.slug, language) : language === "es" ? "/es/elecciones-2026" : "/election-2026";
}

export function candidateProfileHref(slug: string, language: Language) {
  return `${language === "es" ? "/es/elecciones-2026/candidatos" : "/election-2026/candidates"}/${slug}`;
}
