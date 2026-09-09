export type LocalRaceCandidate = {
  ballotName: string;
  fullName: string;
  context: { en: string; es: string };
};

export type LocalRace = {
  slug: string;
  type: "district" | "citywide";
  district?: number;
  evidenceImage: string;
  verificationStatus: "verified" | "needs_confirmation";
  notice?: { en: string; es: string };
  title: { en: string; es: string };
  shortTitle: { en: string; es: string };
  description: { en: string; es: string };
  candidates: LocalRaceCandidate[];
  sources: Array<{ title: string; publisher: string; url: string }>;
  verifiedAsOf: string;
};

export const localRaces: LocalRace[] = [
  {
    slug: "district-1",
    type: "district",
    district: 1,
    evidenceImage: "/manus-storage/district-1_48024060.webp",
    verificationStatus: "needs_confirmation",
    notice: {
      en: "The user-supplied ballot-drawing board and KGNS report the same two names and order. The City candidate table did not render names during independent retrieval, so voters should recheck the official sample ballot when published.",
      es: "El tablero del sorteo proporcionado y KGNS reportan los mismos dos nombres y el mismo orden. La tabla municipal no mostró nombres durante la consulta independiente; los votantes deben revisar la boleta oficial cuando se publique.",
    },
    title: { en: "Laredo City Council District 1", es: "Distrito 1 del Concejo Municipal de Laredo" },
    shortTitle: { en: "District 1", es: "Distrito 1" },
    description: { en: "A two-candidate City Council contest for voters who live in District 1.", es: "Una contienda de dos candidaturas para votantes que viven en el Distrito 1." },
    candidates: [
      { ballotName: "LUPE DE LEON JR", fullName: "Lupe De Leon Jr.", context: { en: "Candidate for City Council District 1. No biography or policy position is published here until it can be verified through a primary or candidate-controlled source.", es: "Candidato para el Distrito 1 del Concejo. No se publica biografía ni postura hasta verificarla con una fuente primaria o controlada por la campaña." } },
      { ballotName: "GILBERT GONZALEZ", fullName: "Gilbert Gonzalez", context: { en: "Incumbent District 1 council member. The City Council selected him as Mayor Pro Tempore for 2026.", es: "Actual concejal del Distrito 1. El Concejo Municipal lo eligió Mayor Pro Tempore para 2026." } },
    ],
    sources: [
      { title: "2026 Candidates Information", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/departments/elections/2026-candidates-information" },
      { title: "Ordinance 2026-O-144", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/home/showdocument?id=24389&t=639238739380295930" },
      { title: "District 1 Council Member Gilbert Gonzalez", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/government/mayor-city-council/district-1-cm-gilbert-gonzalez" },
      { title: "Random drawing sets ballot order", publisher: "KGNS-TV", url: "https://www.kgns.tv/2026/08/20/random-drawing-sets-ballot-order-laredos-november-election/" },
    ],
    verifiedAsOf: "September 9, 2026",
  },
  {
    slug: "district-2",
    type: "district",
    district: 2,
    evidenceImage: "/manus-storage/district-2_f511286b.webp",
    verificationStatus: "verified",
    title: { en: "Laredo City Council District 2", es: "Distrito 2 del Concejo Municipal de Laredo" },
    shortTitle: { en: "District 2", es: "Distrito 2" },
    description: { en: "A two-candidate City Council contest for voters who live in District 2.", es: "Una contienda de dos candidaturas para votantes que viven en el Distrito 2." },
    candidates: [
      { ballotName: "Ricardo “Richie” Rangel Jr", fullName: "Ricardo Rangel Jr.", context: { en: "Incumbent District 2 council member. City records identify Alejandra Y. Cadena as campaign treasurer and link the candidate's 2026 filings.", es: "Actual concejal del Distrito 2. Los registros municipales identifican a Alejandra Y. Cadena como tesorera y enlazan los documentos de candidatura de 2026." } },
      { ballotName: "Daisy Campos Rodriguez", fullName: "Daisy Alejandra Campos", context: { en: "Former District 2 officeholder and 2026 candidate. City records identify Valerie B. Campos as campaign treasurer and link the candidate's filings.", es: "Exfuncionaria del Distrito 2 y candidata en 2026. Los registros municipales identifican a Valerie B. Campos como tesorera y enlazan sus documentos." } },
    ],
    sources: [
      { title: "2026 Candidates Information", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/departments/elections/2026-candidates-information" },
      { title: "2026 General Elections", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/departments/2026-general-elections" },
      { title: "District 2 Council Member Ricardo Rangel", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/government/mayor-city-council/district-2-cm-ricardo-richie-rangel" },
      { title: "Campaign Finance Reports", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/departments/city-secretary-s-office/campaign-finance-reports" },
    ],
    verifiedAsOf: "September 9, 2026",
  },
  {
    slug: "district-3",
    type: "district",
    district: 3,
    evidenceImage: "/manus-storage/district-3_8133d279.webp",
    verificationStatus: "verified",
    title: { en: "Laredo City Council District 3", es: "Distrito 3 del Concejo Municipal de Laredo" },
    shortTitle: { en: "District 3", es: "Distrito 3" },
    description: { en: "A three-candidate City Council contest for voters who live in District 3.", es: "Una contienda de tres candidaturas para votantes que viven en el Distrito 3." },
    candidates: [
      { ballotName: "Melissa R Cigarroa", fullName: "Melissa R Cigarroa", context: { en: "Incumbent District 3 council member. The City candidate record lists her first in the 2026 contest.", es: "Actual concejal del Distrito 3. El registro municipal la coloca primero en la contienda de 2026." } },
      { ballotName: "Michelle “Mimi” Winterroth", fullName: "Michelle Marie Winterroth", context: { en: "The City lists Winterroth as a District 3 candidate. Council also approved her appointment to a mayoral riverfront advisory committee in January 2026.", es: "La Ciudad la incluye como candidata del Distrito 3. El Concejo también aprobó su nombramiento a un comité asesor del malecón en enero de 2026." } },
      { ballotName: "Clarissa “Claire” Cardenas", fullName: "Clarissa Yvette Cardenas", context: { en: "The City lists Cardenas as a District 3 candidate. A candidate-controlled campaign page is publicly available; no unsourced policy claims are included here.", es: "La Ciudad la incluye como candidata del Distrito 3. Existe una página de campaña; aquí no se incluyen posturas sin fuentes." } },
    ],
    sources: [
      { title: "2026 Candidates Information", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/departments/elections/2026-candidates-information" },
      { title: "Melissa R. Cigarroa Staff Directory", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/Home/Components/StaffDirectory/StaffDirectory/110/21" },
      { title: "Campaign Finance Reports", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/departments/city-secretary-s-office/campaign-finance-reports" },
      { title: "Random drawing sets ballot order", publisher: "KGNS-TV", url: "https://www.kgns.tv/2026/08/20/random-drawing-sets-ballot-order-laredos-november-election/" },
    ],
    verifiedAsOf: "September 9, 2026",
  },
  {
    slug: "district-6",
    type: "district",
    district: 6,
    evidenceImage: "/manus-storage/district-6_9c1ea86f.webp",
    verificationStatus: "needs_confirmation",
    notice: {
      en: "Important discrepancy: the supplied drawing board and KGNS list three names, but the City's current candidate table lists only D. Tyler King and Ubaldo “Baldo” Granados Jr. Do not infer that Rosalinda Montemayor withdrew or was disqualified; recheck the official sample ballot before publication or voting.",
      es: "Discrepancia importante: el tablero proporcionado y KGNS muestran tres nombres, pero la tabla municipal actual sólo incluye a D. Tyler King y Ubaldo “Baldo” Granados Jr. No se debe inferir que Rosalinda Montemayor se retiró o fue descalificada; confirma la boleta oficial antes de publicar o votar.",
    },
    title: { en: "Laredo City Council District 6", es: "Distrito 6 del Concejo Municipal de Laredo" },
    shortTitle: { en: "District 6", es: "Distrito 6" },
    description: { en: "A City Council contest for voters who live in District 6, with one unresolved candidate-list discrepancy.", es: "Una contienda del Concejo para votantes del Distrito 6, con una discrepancia pendiente en la lista de candidatos." },
    candidates: [
      { ballotName: "D. Tyler King", fullName: "David Tyler King", context: { en: "Incumbent District 6 council member. The City filing lists his occupation as physician and ballot name as D. Tyler King.", es: "Actual concejal del Distrito 6. Su solicitud municipal indica que es médico y usa D. Tyler King en la boleta." } },
      { ballotName: "Ubaldo “Baldo” Granados Jr", fullName: "Ubaldo Granados, Jr.", context: { en: "The City lists him as a District 6 candidate and his application lists his occupation as business owner.", es: "La Ciudad lo incluye como candidato del Distrito 6 y su solicitud indica que es propietario de negocio." } },
      { ballotName: "Rosalinda Montemayor", fullName: "Rosalinda Montemayor", context: { en: "Listed third on the supplied drawing board and by KGNS, but not present on the City's candidate table at the time of review. Status requires official confirmation.", es: "Aparece tercera en el tablero proporcionado y en KGNS, pero no en la tabla municipal al momento de revisión. Su estatus requiere confirmación oficial." } },
    ],
    sources: [
      { title: "2026 Candidates Information", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/departments/elections/2026-candidates-information" },
      { title: "Ordinance 2026-O-144", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/home/showdocument?id=24389&t=639238739380295930" },
      { title: "Notice of Drawing for Place on the Ballot", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/Home/Components/News/News/542/15?widgetId=41" },
      { title: "Random drawing sets ballot order", publisher: "KGNS-TV", url: "https://www.kgns.tv/2026/08/20/random-drawing-sets-ballot-order-laredos-november-election/" },
    ],
    verifiedAsOf: "September 9, 2026",
  },
  {
    slug: "municipal-court-judge",
    type: "citywide",
    evidenceImage: "/manus-storage/municipal-court-judge_e93eea5a.webp",
    verificationStatus: "verified",
    title: { en: "Laredo Municipal Court Judge, Position 1", es: "Juez del Tribunal Municipal de Laredo, Puesto 1" },
    shortTitle: { en: "Municipal Court Judge", es: "Juez Municipal" },
    description: { en: "A citywide judicial contest that appears on ballots across Laredo.", es: "Una contienda judicial de toda la ciudad que aparece en las boletas de Laredo." },
    candidates: [
      { ballotName: "Nathan Henry Chu", fullName: "Nathan Henry Chu", context: { en: "Attorney licensed in Texas since 2003. KGNS reported his 2019 appointment as an associate municipal judge; City filings verify his 2026 candidacy.", es: "Abogado con licencia en Texas desde 2003. KGNS reportó su nombramiento como juez municipal asociado en 2019; documentos municipales verifican su candidatura de 2026." } },
      { ballotName: "Rudy Morales III", fullName: "Rodolfo Morales III", context: { en: "Assistant City Attorney and Laredo ISD District 2 trustee. City filings verify the ballot name Rudy Morales III and his 2026 candidacy.", es: "Abogado asistente de la Ciudad y representante del Distrito 2 de Laredo ISD. Los documentos municipales verifican el nombre en boleta Rudy Morales III y su candidatura de 2026." } },
    ],
    sources: [
      { title: "2026 Candidates Information", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/departments/elections/2026-candidates-information" },
      { title: "Ordinance 2026-O-144", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/home/showdocument?id=24389&t=639238739380295930" },
      { title: "Nathan Henry Chu — State Bar Profile", publisher: "State Bar of Texas", url: "https://www.texasbar.com/AM/Template.cfm?Section=Find_A_Lawyer&template=/Customsource/MemberDirectory/MemberDirectoryDetail.cfm&ContactID=212071" },
      { title: "Rodolfo Morales III — Staff Directory", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/Home/Components/StaffDirectory/StaffDirectory/498/21?backlist=%2Fdepartments%2Fcity-attorney-s-office%2F-sortn-SName-344&widgetId=344" },
    ],
    verifiedAsOf: "September 9, 2026",
  },
];

export const districtMapUrl = "https://www.cityoflaredo.com/government/mayor-city-council/city-council-districts";
