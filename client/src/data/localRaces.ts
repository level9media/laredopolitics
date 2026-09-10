export type LocalRaceCandidate = {
  ballotName: string;
  fullName: string;
  campaignTreasurer: string;
  treasurerUrl: string;
  applicationUrl: string;
  context: { en: string; es: string };
};

export type LocalRace = {
  slug: string;
  type: "district" | "citywide";
  district?: number;
  evidenceImage?: string;
  verificationStatus: "verified";
  title: { en: string; es: string };
  shortTitle: { en: string; es: string };
  description: { en: string; es: string };
  candidates: LocalRaceCandidate[];
  sources: Array<{ title: string; publisher: string; url: string }>;
  verifiedAsOf: string;
};

export const officialCandidateSourceUrl = "https://www.cityoflaredo.com/departments/elections/2026-candidates-information";

export const mayorBallot = {
  evidenceImage: "/media/mayor_22040f78.webp",
  candidates: [
    { fullName: "Victor Daniel Trevino", ballotName: "Victor D. Trevino", campaignTreasurer: "Victor D. Trevino", treasurerUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/24434/639244512374809563", applicationUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/24097/639216280176900000" },
    { fullName: "Jose David Gonzalez", ballotName: "JD Gonzalez", campaignTreasurer: "Sonia Villarreal", treasurerUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/23926/639203242118170000", applicationUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/23928/639203245618530000" },
    { fullName: "Jorge Alberto Garza", ballotName: "Jorge A. Garza", campaignTreasurer: "B Javier Cuate Mendoza", treasurerUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/24189/639226674656270000", applicationUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/24195/639226675983470000" },
    { fullName: "Alfonso I. Casso", ballotName: "Poncho Casso", campaignTreasurer: "Alfonso I. \"Poncho\" Casso", treasurerUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/24063/639214597681930000", applicationUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/24065/639214600658800000" },
    { fullName: "Alyssa Cristine Cigarroa", ballotName: "Alyssa Cigarroa", campaignTreasurer: "Ricardo A. Sandoval", treasurerUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/24327/639235126108770000", applicationUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/24115/639217167875230000" },
  ],
};

const officialSources = [
  { title: "2026 Candidates Information", publisher: "City of Laredo", url: officialCandidateSourceUrl },
  { title: "2026 General Elections", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/departments/2026-general-elections" },
  { title: "Campaign Finance Reports", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/departments/city-secretary-s-office/campaign-finance-reports" },
];

export const localRaces: LocalRace[] = [
  {
    slug: "district-1",
    type: "district",
    district: 1,
    evidenceImage: "/media/district-1_48024060.webp",
    verificationStatus: "verified",
    title: { en: "Laredo City Council District 1", es: "Distrito 1 del Concejo Municipal de Laredo" },
    shortTitle: { en: "District 1", es: "Distrito 1" },
    description: { en: "The official City table lists two candidates for voters who live in District 1.", es: "La tabla oficial de la Ciudad incluye dos candidatos para quienes viven en el Distrito 1." },
    candidates: [
      { ballotName: "Lupe De Leon Jr", fullName: "Guadalupe De Leon Jr", campaignTreasurer: "Dr. Rene Rolando Compean II", treasurerUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/24151/639222205462400000", applicationUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/24153/639222205764600000", context: { en: "Official candidate identity, ballot name, campaign treasurer, and application are taken from the City of Laredo candidate table.", es: "La identidad, el nombre en boleta, el tesorero y la solicitud provienen de la tabla oficial de candidatos de la Ciudad de Laredo." } },
      { ballotName: "Gilbert Gonzalez", fullName: "Gilberto Gonzalez", campaignTreasurer: "Enrique D. Kike Longoria", treasurerUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/24069/639214606268630000", applicationUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/24067/639214606441070000", context: { en: "Official candidate identity, ballot name, campaign treasurer, and application are taken from the City of Laredo candidate table.", es: "La identidad, el nombre en boleta, el tesorero y la solicitud provienen de la tabla oficial de candidatos de la Ciudad de Laredo." } },
    ],
    sources: officialSources,
    verifiedAsOf: "September 9, 2026",
  },
  {
    slug: "district-2",
    type: "district",
    district: 2,
    evidenceImage: "/media/district-2_f511286b.webp",
    verificationStatus: "verified",
    title: { en: "Laredo City Council District 2", es: "Distrito 2 del Concejo Municipal de Laredo" },
    shortTitle: { en: "District 2", es: "Distrito 2" },
    description: { en: "The official City table lists two candidates for voters who live in District 2.", es: "La tabla oficial de la Ciudad incluye dos candidatos para quienes viven en el Distrito 2." },
    candidates: [
      { ballotName: "Ricardo \"Richie\" Rangel Jr", fullName: "Ricardo Rangel Jr.", campaignTreasurer: "Alejandra Y. Cadena", treasurerUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/24077/639214614318830000", applicationUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/24079/639214615684670000", context: { en: "Official candidate identity, ballot name, campaign treasurer, and application are taken from the City of Laredo candidate table.", es: "La identidad, el nombre en boleta, el tesorero y la solicitud provienen de la tabla oficial de candidatos de la Ciudad de Laredo." } },
      { ballotName: "Daisy Campos Rodriguez", fullName: "Daisy Alejandra Campos", campaignTreasurer: "Valerie B. Campos", treasurerUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/23930/639203267335300000", applicationUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/23932/639203268403870000", context: { en: "Official candidate identity, ballot name, campaign treasurer, and application are taken from the City of Laredo candidate table.", es: "La identidad, el nombre en boleta, el tesorero y la solicitud provienen de la tabla oficial de candidatos de la Ciudad de Laredo." } },
    ],
    sources: officialSources,
    verifiedAsOf: "September 9, 2026",
  },
  {
    slug: "district-3",
    type: "district",
    district: 3,
    evidenceImage: "/media/district-3_8133d279.webp",
    verificationStatus: "verified",
    title: { en: "Laredo City Council District 3", es: "Distrito 3 del Concejo Municipal de Laredo" },
    shortTitle: { en: "District 3", es: "Distrito 3" },
    description: { en: "The official City table lists three candidates for voters who live in District 3.", es: "La tabla oficial de la Ciudad incluye tres candidatos para quienes viven en el Distrito 3." },
    candidates: [
      { ballotName: "Melissa R Cigarroa", fullName: "Melissa R Cigarroa", campaignTreasurer: "Manuel A. Rangel, CPA", treasurerUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/23959/639208528312870000", applicationUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/23957/639208517395570000", context: { en: "Official candidate identity, ballot name, campaign treasurer, and application are taken from the City of Laredo candidate table.", es: "La identidad, el nombre en boleta, el tesorero y la solicitud provienen de la tabla oficial de candidatos de la Ciudad de Laredo." } },
      { ballotName: "Michelle \"Mimi\" Winterroth", fullName: "Michelle Marie Winterroth", campaignTreasurer: "Priscilla Ramos", treasurerUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/24185/639226609259430000", applicationUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/24183/639226608081370000", context: { en: "Official candidate identity, ballot name, campaign treasurer, and application are taken from the City of Laredo candidate table.", es: "La identidad, el nombre en boleta, el tesorero y la solicitud provienen de la tabla oficial de candidatos de la Ciudad de Laredo." } },
      { ballotName: "Clarissa \"Claire\" Cardenas", fullName: "Clarissa Yvette Cardenas", campaignTreasurer: "Mirtha P. Caudillo", treasurerUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/24177/639225751667870000", applicationUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/24181/639226608077570000", context: { en: "Official candidate identity, ballot name, campaign treasurer, and application are taken from the City of Laredo candidate table.", es: "La identidad, el nombre en boleta, el tesorero y la solicitud provienen de la tabla oficial de candidatos de la Ciudad de Laredo." } },
    ],
    sources: officialSources,
    verifiedAsOf: "September 9, 2026",
  },
  {
    slug: "district-6",
    type: "district",
    district: 6,
    verificationStatus: "verified",
    title: { en: "Laredo City Council District 6", es: "Distrito 6 del Concejo Municipal de Laredo" },
    shortTitle: { en: "District 6", es: "Distrito 6" },
    description: { en: "The official City table currently lists two candidates for voters who live in District 6.", es: "La tabla oficial de la Ciudad actualmente incluye dos candidatos para quienes viven en el Distrito 6." },
    candidates: [
      { ballotName: "D. Tyler King", fullName: "David Tyler King", campaignTreasurer: "Alejandra King", treasurerUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/23900/639202464552800000", applicationUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/23896/639202458937570000", context: { en: "Official candidate identity, ballot name, campaign treasurer, and application are taken from the City of Laredo candidate table.", es: "La identidad, el nombre en boleta, el tesorero y la solicitud provienen de la tabla oficial de candidatos de la Ciudad de Laredo." } },
      { ballotName: "Ubaldo \"Baldo\" Granados Jr", fullName: "Ubaldo Granados, Jr.", campaignTreasurer: "Diana Rossell Granados", treasurerUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/23882/639202465127730000", applicationUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/23898/639202458940270000", context: { en: "Official candidate identity, ballot name, campaign treasurer, and application are taken from the City of Laredo candidate table.", es: "La identidad, el nombre en boleta, el tesorero y la solicitud provienen de la tabla oficial de candidatos de la Ciudad de Laredo." } },
    ],
    sources: officialSources,
    verifiedAsOf: "September 9, 2026",
  },
  {
    slug: "municipal-court-judge",
    type: "citywide",
    evidenceImage: "/media/municipal-court-judge_e93eea5a.webp",
    verificationStatus: "verified",
    title: { en: "Laredo Municipal Court Judge, Position 1", es: "Juez del Tribunal Municipal de Laredo, Puesto 1" },
    shortTitle: { en: "Municipal Court Judge", es: "Juez Municipal" },
    description: { en: "The official City table lists two candidates in this citywide judicial contest.", es: "La tabla oficial de la Ciudad incluye dos candidatos en esta contienda judicial municipal." },
    candidates: [
      { ballotName: "Nathan Henry Chu", fullName: "Nathan Henry Chu", campaignTreasurer: "Luisa Pacheco", treasurerUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/24071/639244520804222836", applicationUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/24075/639214611204570000", context: { en: "Official candidate identity, ballot name, campaign treasurer, and application are taken from the City of Laredo candidate table.", es: "La identidad, el nombre en boleta, el tesorero y la solicitud provienen de la tabla oficial de candidatos de la Ciudad de Laredo." } },
      { ballotName: "Rudy Morales III", fullName: "Rodolfo Morales III", campaignTreasurer: "Carmen Perez", treasurerUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/24436/639244519007768563", applicationUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/24171/639225638130230000", context: { en: "Official candidate identity, ballot name, campaign treasurer, and application are taken from the City of Laredo candidate table.", es: "La identidad, el nombre en boleta, el tesorero y la solicitud provienen de la tabla oficial de candidatos de la Ciudad de Laredo." } },
    ],
    sources: officialSources,
    verifiedAsOf: "September 9, 2026",
  },
];

export const politicalForums = [
  { race: { en: "District 1", es: "Distrito 1" }, date: "2026-10-06", time: "6:00 PM" },
  { race: { en: "Mayor", es: "Alcalde" }, date: "2026-10-06", time: "7:30 PM" },
  { race: { en: "District 3", es: "Distrito 3" }, date: "2026-10-07", time: "6:00 PM" },
  { race: { en: "District 2", es: "Distrito 2" }, date: "2026-10-07", time: "7:30 PM" },
  { race: { en: "Municipal Court Judge", es: "Juez Municipal" }, date: "2026-10-08", time: "6:00 PM" },
  { race: { en: "District 6", es: "Distrito 6" }, date: "2026-10-08", time: "7:30 PM" },
] as const;

export const officialElectionResources = {
  candidates: officialCandidateSourceUrl,
  sampleBallots: "https://www.cityoflaredo.com/?splash=https%3a%2f%2fwww.webbcountytx.gov%2fElectionsAdministration%2fSampleBallots%2fdefault.aspx&____isexternal=true",
  financeReports: "https://www.cityoflaredo.com/departments/city-secretary-s-office/campaign-finance-reports",
  votingMap: "https://www.cityoflaredo.com/?splash=https%3a%2f%2fopen-laredo.opendata.arcgis.com%2fmaps%2fcouncil-districts-2022%2fexplore%3flocation%3d27.514612%252C-99.489221%252C13.00&____isexternal=true",
  precinctMaps: "https://www.cityoflaredo.com/home/showpublisheddocument/13770/638398939261928330",
};

export const districtMapUrl = officialElectionResources.votingMap;
