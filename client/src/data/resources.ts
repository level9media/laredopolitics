export type Source = {
  title: string;
  publisher: string;
  url: string;
};

export type Candidate = {
  slug: string;
  name: string;
  ballotName: string;
  officialFullName: string;
  campaignTreasurer: string;
  treasurerUrl: string;
  applicationUrl: string;
  role: string;
  initials: string;
  summary: string;
  bio: string[];
  priorities: string[];
  record: string[];
  good: string[];
  bad: string[];
  questions: string[];
  sources: Source[];
  verifiedAsOf?: string;
  photoUrl?: string;
  photoAlt?: string;
  photoCredit?: string;
};

export type Issue = {
  slug: string;
  title: string;
  spanishTitle: string;
  category: string;
  summary: string;
  whyItMatters: string[];
  currentSituation: string[];
  keyNumbers?: Array<{ label: string; value: string; context: string }>;
  candidateContext?: Array<{ candidate: string; position: string }>;
  good: string[];
  bad: string[];
  questions: string[];
  keywords: string[];
  sources: Source[];
  verifiedAsOf?: string;
};

export type VotingResource = {
  slug: string;
  title: string;
  spanishTitle: string;
  summary: string;
  steps: Array<{ title: string; body: string }>;
  officialLink: string;
  officialLabel: string;
  keywords: string[];
};

const candidatesUnordered: Candidate[] = [
  {
    slug: "victor-trevino",
    name: "Dr. Victor D. Treviño",
    ballotName: "Victor D. Trevino",
    officialFullName: "Victor Daniel Trevino",
    campaignTreasurer: "Victor D. Trevino",
    treasurerUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/24434/639244512374809563",
    applicationUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/24097/639216280176900000",
    role: "Alcalde actual",
    initials: "VT",
    photoUrl: "/manus-storage/victor-trevino_7c486ac0.webp",
    photoAlt: "Retrato de Dr. Victor D. Treviño",
    photoCredit: "Courtesy / Laredo Morning Times",
    summary: "Médico, exautoridad de salud y alcalde de Laredo desde 2022. Busca un segundo mandato en la elección municipal de 2026.",
    bio: [
      "La biografía de la Ciudad indica que Treviño nació y creció en Laredo, estudió en Nixon High School, Laredo Junior College y Texas A&M University–Kingsville, y completó su residencia en LSU Charity Hospital en 1984.",
      "Regresó a Laredo en 1985, trabajó con el Departamento de Salud y ejerció medicina familiar y obstetricia. También se desempeñó como Autoridad Sanitaria durante la respuesta a COVID-19.",
      "Ganó la segunda vuelta para alcalde de 2022. La Ciudad registra su mandato desde diciembre de 2022 hasta noviembre de 2026.",
    ],
    priorities: ["Seguridad pública", "Hospital y servicios pediátricos", "Reemplazo de líneas de agua y pavimentación", "Comercio internacional"],
    record: [
      "La lista oficial de la Ciudad confirma su candidatura, el nombre Victor D. Trevino en la boleta y su propio nombre como tesorero de campaña.",
      "Antes de la alcaldía, su experiencia pública más visible fue la Autoridad Sanitaria durante aproximadamente dos años de la respuesta a COVID-19.",
      "Las comunicaciones de State of the City describen prioridades y avances reclamados en agua, salud, relaciones binacionales, comercio y seguridad. Son comunicaciones gubernamentales, no auditorías independientes de desempeño.",
    ],
    good: [
      "Inicia la contienda con experiencia ejecutiva directa y un mandato completo como alcalde disponible para revisión pública.",
      "Su trayectoria en el sector salud aporta experiencia temática en asuntos de salud pública.",
    ],
    bad: [
      "Como titular del cargo, responde tanto por los problemas municipales no resueltos como por los proyectos terminados.",
      "Varias propuestas destacadas, incluidas fuentes secundarias de agua y servicios pediátricos, todavía necesitan costos, socios, plazos y resultados publicados.",
      "Parte de la evidencia de resultados proviene de comunicaciones municipales o declaraciones de campaña y requiere comparación con presupuestos, hitos y auditorías independientes.",
    ],
    questions: [
      "¿Qué proyectos del primer mandato se terminarán para una fecha específica?",
      "¿Cómo publicará la ciudad informes de desempeño más claros sobre las principales inversiones de capital?",
      "¿Qué sería sustancialmente diferente en un segundo mandato?",
    ],
    sources: [
      { title: "2026 Candidates Information", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/departments/elections/2026-candidates-information" },
      { title: "Mayor Dr. Victor D. Treviño", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/government/mayor-city-council/mayor-dr-victor-d-trevi-o" },
      { title: "Campaign Finance Reports", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/departments/city-secretary-s-office/campaign-finance-reports" },
      { title: "Election Results Archive", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/departments/city-secretary-s-office/election-results-archive" },
      { title: "Trevino announces campaign for second term", publisher: "Laredo Morning Times", url: "https://www.lmtonline.com/local/article/mayor-campaign-reelection-trevino-victor-laredo-22331697.php" },
      { title: "Laredo mayor announces re-election bid", publisher: "KGNS-TV", url: "https://www.kgns.tv/2026/07/03/laredo-mayor-announces-re-election-bid/" },
    ],
    verifiedAsOf: "9 de septiembre de 2026",
  },
  {
    slug: "alyssa-cigarroa",
    name: "Alyssa Cigarroa",
    ballotName: "Alyssa Cigarroa",
    officialFullName: "Alyssa Cristine Cigarroa",
    campaignTreasurer: "Ricardo A. Sandoval",
    treasurerUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/24327/639235126108770000",
    applicationUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/24115/639217167875230000",
    role: "Concejal del Distrito VIII",
    initials: "AC",
    photoUrl: "/manus-storage/alyssa-cigarroa_e25ad183.webp",
    photoAlt: "Retrato de Alyssa Cigarroa",
    photoCredit: "Courtesy Alyssa Cigarroa for Mayor campaign",
    summary: "Concejal del Distrito VIII desde 2020 y cofundadora de Cultivarte. Su campaña destaca preparación municipal, vivienda y participación pública.",
    bio: [
      "Cigarroa es una laredense de quinta generación y representa al Distrito VIII en el Concejo Municipal desde que ganó como candidata write-in en la segunda vuelta de 2020.",
      "La biografía municipal describe estudios y trabajo en las artes antes de regresar a Laredo. Daphne Art Foundation la identifica como fundadora y presidenta de su consejo.",
      "Ganó la reelección del Distrito VIII en noviembre de 2024 con 74.78% de los votos reportados en una contienda de cuatro candidaturas.",
    ],
    priorities: ["Confiabilidad del agua y fuentes de largo plazo", "Plan de mejoras de capital", "Tablero público de desempeño", "Pequeñas empresas, puentes y movilidad"],
    record: [
      "Su historial actual en el Concejo ofrece reuniones, agendas, videos y votaciones para evaluación pública.",
      "La plataforma de campaña propone reparar líneas de agua, reducir fugas, planificar capital, simplificar permisos y mejorar la transparencia con un tablero público.",
      "Las atribuciones de proyectos del Distrito VIII provienen principalmente de la campaña; este expediente las separa de resultados auditados o votaciones verificadas individualmente.",
    ],
    good: [
      "Cuenta con experiencia actual de gobierno municipal y un historial accesible en el Concejo Municipal.",
      "Su experiencia en una organización sin fines de lucro aporta experiencia de desarrollo comunitario fuera del Ayuntamiento.",
    ],
    bad: [
      "La defensa de políticas desde el Concejo aún debe traducirse en un plan de implementación para toda la ciudad.",
      "La plataforma todavía necesita costos, fuentes de financiamiento, secuencia legislativa y plazos medibles para sus propuestas principales.",
      "Su historial es principalmente legislativo y distrital; los votantes deben evaluar cómo administraría departamentos y presupuesto a escala municipal.",
    ],
    questions: [
      "¿Qué resultados del Distrito VIII pueden ampliarse a toda la ciudad?",
      "¿Cómo se financiarían y medirían las políticas de vivienda propuestas?",
      "¿Qué cambios administrativos ocurrirían durante los primeros 100 días?",
    ],
    sources: [
      { title: "2026 Candidates Information", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/departments/elections/2026-candidates-information" },
      { title: "District 8 Council Member Alyssa Cigarroa", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/government/mayor-city-council/district-8-cm-alyssa-cigarroa" },
      { title: "Alyssa Cigarroa for Mayor", publisher: "Official campaign website", url: "https://alyssacigarroa.com/" },
      { title: "About Daphne Art Foundation", publisher: "Daphne Art Foundation", url: "https://www.daphneart.org/about" },
      { title: "District VIII Councilmember launches mayoral bid", publisher: "Laredo Morning Times", url: "https://www.lmtonline.com/local/article/city-council-election-politics-mayor-trevino-2026-22380196.php" },
      { title: "Alyssa Cigarroa launches Laredo mayoral bid", publisher: "KGNS-TV", url: "https://www.kgns.tv/2026/08/23/alyssa-cigarroa-launches-laredo-mayoral-bid/" },
    ],
    verifiedAsOf: "9 de septiembre de 2026",
  },
  {
    slug: "poncho-casso",
    name: "Alfonso “Poncho” Casso",
    ballotName: "Poncho Casso",
    officialFullName: "Alfonso I. Casso",
    campaignTreasurer: "Alfonso I. \"Poncho\" Casso",
    treasurerUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/24063/639214597681930000",
    applicationUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/24065/639214600658800000",
    role: "Exconcejal y empresario local",
    initials: "PC",
    photoUrl: "/manus-storage/poncho-casso_12b48698.webp",
    photoAlt: "Retrato de Alfonso Poncho Casso",
    photoCredit: "KGNS",
    summary: "Exconcejal y empresario local. Su campaña de 2026 se concentra en rendición de cuentas, transparencia, seguridad del agua y comercio internacional.",
    bio: [
      "Casso formó parte del Concejo Municipal de Laredo de 1994 a 1998, según la cobertura local revisada.",
      "Fue candidato republicano a juez del Condado de Webb en 2018 y participó en la contienda no partidista para alcalde de Laredo en 2022.",
      "La Ciudad lo registra oficialmente como Alfonso I. Casso, con el nombre Poncho Casso en la boleta de 2026 y como su propio tesorero de campaña.",
    ],
    priorities: ["Rendición de cuentas", "Transparencia gubernamental", "Seguridad del agua", "Comercio internacional"],
    record: [
      "Su servicio electo municipal de 1994 a 1998 aporta experiencia, aunque antecede por décadas a las condiciones presupuestarias y operativas actuales.",
      "En la elección general para alcalde de 2022 recibió 5,027 votos, equivalentes a 12.0%, y no avanzó a la segunda vuelta.",
      "Su campaña ha anunciado un plan de tres puntos, pero el documento completo no se había publicado en las fuentes revisadas.",
    ],
    good: [
      "Tiene un conocimiento de larga data del gobierno local y de los debates sobre la rendición de cuentas pública.",
      "Una campaña anterior para alcalde ofrece al público un historial de promesas y prioridades previas para comparar.",
    ],
    bad: [
      "La experiencia más antigua en el Concejo puede no reflejar directamente las condiciones operativas y presupuestarias actuales.",
      "El plan actual necesita componentes específicos, costos, autoridad de implementación y resultados medibles.",
      "Sus dos campañas recientes documentadas para juez del condado y alcalde no avanzaron al cargo buscado.",
    ],
    questions: [
      "¿Cuáles son los componentes, costos y plazos del plan de tres puntos?",
      "¿Cuál es la secuencia de financiamiento para las prioridades del sistema de agua?",
      "¿Qué medidas de transparencia se convertirían en políticas vinculantes?",
      "¿Qué posiciones actuales adopta sobre deuda, compensación, pensiones y presupuesto municipal?",
    ],
    sources: [
      { title: "2026 Candidates Information", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/departments/elections/2026-candidates-information" },
      { title: "Casso enters Laredo mayoral race citing accountability focus", publisher: "Laredo Morning Times", url: "https://www.lmtonline.com/local/article/alfonso-casso-laredo-mayor-2026-campaign-election-22382647.php" },
      { title: "Poncho Casso announces bid for Laredo Mayor", publisher: "KGNS-TV", url: "https://www.kgns.tv/2022/09/12/alfonso-poncho-casso-announces-bid-laredo-mayor/" },
      { title: "Mayoral election in Laredo, Texas (2022)", publisher: "Ballotpedia", url: "https://ballotpedia.org/Mayoral_election_in_Laredo,_Texas_(2022)" },
      { title: "Final 2018 Webb County election results", publisher: "Laredo Morning Times", url: "https://www.lmtonline.com/local/politics/article/Final-voting-results-from-the-November-2018-13371054.php" },
    ],
    verifiedAsOf: "9 de septiembre de 2026",
  },
  {
    slug: "jd-gonzalez",
    name: "JD Gonzalez",
    ballotName: "JD Gonzalez",
    officialFullName: "Jose David Gonzalez",
    campaignTreasurer: "Sonia Villarreal",
    treasurerUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/23926/639203242118170000",
    applicationUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/23928/639203245618530000",
    role: "Veterano y profesional del comercio",
    initials: "JG",
    photoUrl: "/manus-storage/jd-gonzalez_2ce6ae85.webp",
    photoAlt: "Retrato de JD Gonzalez",
    photoCredit: "Courtesy JD Gonzalez for Mayor campaign",
    summary: "Veterano de diez años de la Marina con experiencia en comercio internacional. Su campaña se enfoca en calles, agua, seguridad y oportunidades.",
    bio: [
      "La Ciudad lo identifica oficialmente como Jose David Gonzalez, con el nombre JD Gonzalez en la boleta.",
      "La National Customs Brokers & Forwarders Association of America indica que sirvió en la Marina de Estados Unidos de 1982 a 1992 y obtuvo una licenciatura en contabilidad de National University.",
      "Es agente aduanal estadounidense con licencia y opera una agencia aduanal desde 1994. La asociación nacional lo identifica actualmente como presidente de su consejo.",
    ],
    priorities: ["Calles, agua y capacidad de servicios", "Comercio y puentes internacionales", "Empleos y pequeñas empresas", "Acceso a atención médica", "Rendición de cuentas municipal"],
    record: [
      "La Ciudad registra su servicio en el Airport Advisory Board desde 2021 y en el Port of Entry Advisory Committee con un nombramiento que vence en noviembre de 2026.",
      "Su experiencia más documentada está en la industria de aduanas, logística y comercio internacional, además de juntas asesoras municipales.",
      "La plataforma publica áreas temáticas amplias, pero todavía necesita costos, fuentes de financiamiento, metas y calendarios de ejecución.",
    ],
    good: [
      "Su trayectoria aporta liderazgo militar y experiencia en comercio internacional a la contienda.",
      "Su enfoque en los servicios esenciales aborda preocupaciones locales ampliamente reconocidas.",
    ],
    bad: [
      "No cuenta con un historial de cargo electo o administración ejecutiva municipal que permita comparar votos, presupuestos y resultados directos.",
      "Su experiencia profesional se concentra en comercio y logística; otras áreas municipales tienen menos material independiente disponible para evaluación.",
      "La plataforma necesita estimaciones de costo, fuentes de fondos y metas medibles para agua, movilidad, salud y desarrollo económico.",
    ],
    questions: [
      "¿Qué prácticas de gestión de su experiencia previa se trasladarían al Ayuntamiento?",
      "¿Cómo se priorizarían las calles y el agua en el plan de capital?",
      "¿Qué resultados medibles definen la oportunidad económica?",
    ],
    sources: [
      { title: "2026 Candidates Information", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/departments/elections/2026-candidates-information" },
      { title: "Boards, Commissions & Committees", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/services/boards-commissions-committees" },
      { title: "NCBFAA Board of Directors", publisher: "NCBFAA", url: "https://ncbfaa.org/about-ncbfaa/board-of-directors" },
      { title: "Board and Committee Bios", publisher: "NCBFAA", url: "https://ncbfaa.org/about-ncbfaa/board-of-directors/board-and-committee-bios" },
      { title: "JD Gonzalez launches Laredo mayoral bid", publisher: "KGNS-TV", url: "https://www.kgns.tv/2026/08/16/jd-gonzalez-launches-laredo-mayoral-bid-citing-trade-expertise-military-service/" },
      { title: "JD Gonzalez for Mayor — Platform", publisher: "Official campaign website", url: "https://jdformayor.com/platform" },
    ],
    verifiedAsOf: "9 de septiembre de 2026",
  },
  {
    slug: "jorge-garza",
    name: "Jorge A. Garza",
    ballotName: "Jorge A. Garza",
    officialFullName: "Jorge Alberto Garza",
    campaignTreasurer: "B Javier Cuate Mendoza",
    treasurerUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/24189/639226674656270000",
    applicationUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/24195/639226675983470000",
    role: "Candidato a alcalde de Laredo",
    initials: "JA",
    summary: "La Ciudad de Laredo incluye oficialmente a Jorge A. Garza en la boleta para alcalde de 2026. La información pública verificable sobre su experiencia y plataforma sigue siendo limitada.",
    bio: [
      "Jorge A. Garza aparece en la lista oficial de candidatos de la Ciudad de Laredo para la elección general del 3 de noviembre de 2026.",
      "Hasta la fecha de revisión no se localizó una biografía completa en materiales oficiales, un sitio de campaña verificable o cobertura local suficiente.",
      "Este expediente se actualizará cuando existan documentos o declaraciones públicas verificables.",
    ],
    priorities: ["Sin plataforma pública detallada localizada"],
    record: [
      "La candidatura y el nombre en la boleta se verifican mediante la página oficial de la Ciudad de Laredo.",
      "No se atribuyen posiciones, experiencia o logros sin una fuente pública verificable.",
      "La ausencia de información localizada no debe interpretarse como una evaluación de la candidatura.",
    ],
    good: [
      "Su acceso a la boleta está documentado por la autoridad electoral municipal.",
      "El expediente identifica claramente lo que todavía no ha podido verificarse en lugar de completar los vacíos con inferencias.",
    ],
    bad: [
      "La información pública limitada dificulta comparar su preparación, prioridades y plan de gobierno con los demás candidatos.",
      "Sin propuestas publicadas, los votantes no pueden evaluar costos, plazos ni resultados esperados.",
    ],
    questions: [
      "¿Cuál es su experiencia profesional, cívica y administrativa relevante para dirigir la ciudad?",
      "¿Cuáles son sus posiciones sobre agua, impuestos, presupuesto, seguridad pública y comercio?",
      "¿Qué medidas implementaría durante sus primeros 100 días?",
      "¿Dónde publicará su plataforma, equipo y reportes de campaña?",
    ],
    sources: [
      { title: "2026 Candidates Information", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/departments/elections/2026-candidates-information" },
      { title: "2026 General Elections", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/departments/2026-general-elections" },
    ],
    verifiedAsOf: "9 de septiembre de 2026",
  },
];

const mayorBallotOrder = ["victor-trevino", "jd-gonzalez", "jorge-garza", "poncho-casso", "alyssa-cigarroa"];
export const candidates = [...candidatesUnordered].sort((a, b) => mayorBallotOrder.indexOf(a.slug) - mayorBallotOrder.indexOf(b.slug));

export const issues: Issue[] = [
  {
    slug: "agua-infraestructura",
    title: "Infraestructura de agua de Laredo",
    spanishTitle: "Agua e infraestructura",
    category: "Infraestructura",
    summary: "Guía verificada sobre la confiabilidad del sistema de agua de Laredo, el reemplazo de tuberías, el financiamiento, las fuentes alternas y las posiciones documentadas de los candidatos.",
    whyItMatters: [
      "El agua segura y confiable afecta la salud pública, las escuelas, los hospitales, los restaurantes, la vivienda y la capacidad de atraer empresas.",
      "El informe municipal de calidad del agua de 2024 indica que las dos plantas de tratamiento de Laredo bombean agua superficial del Río Grande, lo que concentra el suministro en una fuente principal.",
      "Las obras de reemplazo, tratamiento, transmisión, almacenamiento y nuevas fuentes pueden afectar las tarifas, la deuda y el calendario de crecimiento de la ciudad.",
      "Los votantes deben distinguir entre obras terminadas, proyectos autorizados, presupuestos propuestos y anuncios que todavía no tienen costo o calendario público completo.",
    ],
    currentSituation: [
      "El Consumer Confidence Report de 2024 documentó una infracción al nivel máximo de contaminantes por E. coli durante octubre de 2024. La ciudad emitió un aviso general de hervir el agua el 10 de octubre de ese año.",
      "Un aviso requerido por la Texas Commission on Environmental Quality también documentó monitoreo incompleto de turbidez en filtros de la planta El Pico durante una falla del sistema de control entre agosto y septiembre de 2024. La ciudad reportó reparaciones y capacitación como medidas correctivas.",
      "En mayo de 2026, la ciudad emitió un aviso preventivo limitado al área atendida por la planta Jefferson. El aviso se levantó después de que más de 50 muestras bacteriológicas de seguimiento resultaron negativas.",
      "El plan de capital incluye reemplazo de tuberías, líneas de transmisión, conexión entre El Pico y Jefferson, rehabilitación de tanques, medidores, laboratorio de calidad y obras de aguas residuales.",
      "En agosto de 2026, la ciudad anunció acuerdos para acceder hasta a 90 millones de galones diarios de fuentes secundarias si fueran necesarios. El precio final, el tratamiento, la infraestructura de entrega y el calendario siguen siendo preguntas públicas importantes.",
    ],
    keyNumbers: [
      { label: "Pérdida de agua reportada", value: "13.59%", context: "Estimación de la auditoría de pérdida del sistema incluida en el informe municipal de calidad del agua de 2024." },
      { label: "Programa de capital FY 2024–28", value: "$100.9 millones", context: "$59.558 millones para agua y $41.351 millones para aguas residuales en el plan adoptado; un plan de capital no equivale a obra terminada." },
      { label: "Propuesta FY 2026–27", value: "$119.2 millones", context: "Gasto propuesto en proyectos de agua y aguas residuales; no debe presentarse como inversión ya completada." },
      { label: "Cartera activa reportada", value: "$245.1 millones", context: "29 proyectos activos según una presentación del departamento de Utilities reportada en agosto de 2026; no es una auditoría externa." },
      { label: "Brecha modelada de financiamiento", value: "$46.6 millones", context: "Necesidad estimada después de fondos disponibles para el programa FY 2026–27; solicitudes externas no son adjudicaciones." },
      { label: "Fuentes secundarias anunciadas", value: "Hasta 90 MGD", context: "40 millones de galones diarios de Jasper Ranch y 50 millones de Legacy Water; es acceso anunciado, no producción entregada actualmente." },
    ],
    candidateContext: [
      { candidate: "Victor D. Treviño", position: "En su anuncio de reelección citó aproximadamente $119 millones en inversión de agua y avances hacia una fuente secundaria. Es una afirmación de campaña y el trabajo sigue en curso." },
      { candidate: "JD Gonzalez", position: "Su plataforma pide sistemas de agua confiables, capacidad para el crecimiento y planificación de capital a largo plazo. No publica una lista detallada de proyectos, costos o propuesta tarifaria." },
      { candidate: "Jorge A. Garza", position: "No se encontró una posición documentada sobre infraestructura de agua en las fuentes oficiales, materiales de campaña localizados o cobertura local revisada." },
      { candidate: "Poncho Casso", position: "Ha identificado la seguridad del agua como asunto central, pero el plan detallado de tres puntos no estaba publicado en las fuentes revisadas." },
      { candidate: "Alyssa Cigarroa", position: "Su campaña propone reducir avisos de hervir agua, reparar líneas envejecidas, disminuir fugas y asegurar varias fuentes asequibles de largo plazo. Son compromisos de campaña, no resultados ejecutados." },
    ],
    good: [
      "La ciudad ha identificado y autorizado una cartera amplia de renovación de líneas, estaciones de bombeo, tanques, tratamiento y aguas residuales.",
      "El aviso preventivo de mayo de 2026 se levantó con aprobación estatal después de más de 50 muestras negativas de seguimiento.",
      "La conexión planeada entre El Pico y Jefferson busca añadir redundancia cuando una parte del sistema esté en mantenimiento o presente problemas.",
      "Los acuerdos de fuentes secundarias representan un paso hacia la diversificación del suministro, aunque todavía requieren detalles públicos de ejecución.",
      "La clasificación interna de proyectos en riesgo mejoró entre marzo y julio de 2026, según el reporte del departamento de Utilities.",
    ],
    bad: [
      "La infracción por E. coli de 2024, el aviso general de hervir agua y el evento preventivo de 2026 muestran que la confiabilidad y la confianza pública siguen sin resolverse por completo.",
      "La pérdida estimada de 13.59% y el reemplazo continuo de tuberías revelan una obligación costosa y de largo plazo.",
      "El aviso estatal sobre monitoreo incompleto documentó una falla de cumplimiento distinta a la calidad final del agua.",
      "El plan FY 2026–27 mostraba una brecha modelada de $46.6 millones y dependía de solicitudes externas que no deben contarse como fondos asegurados.",
      "Los acuerdos de nuevas fuentes no publican todavía todos los costos, requisitos de tratamiento, obligaciones de construcción ni efectos tarifarios.",
    ],
    questions: [
      "¿Qué metas publicará la ciudad para roturas, baja presión, avisos de hervir agua, pérdida del sistema y tiempo de restauración?",
      "¿Cuáles proyectos están formalmente financiados y cuáles siguen propuestos?",
      "¿Cómo se cubrirá la brecha de $46.6 millones y qué efecto tendría cada opción en las tarifas residenciales y comerciales?",
      "¿Cuáles son los precios, volúmenes firmes, requisitos de tratamiento y calendarios de Jasper Ranch y Legacy Water?",
      "¿Qué revisión técnica independiente respalda el rendimiento sostenible de las fuentes secundarias?",
      "¿Qué hitos y fechas rigen la conexión El Pico–Jefferson, el reemplazo de tuberías, los tanques y la infraestructura de aguas residuales?",
      "¿Cómo se priorizará el agua existente para residentes frente a nuevos desarrollos de alto consumo?",
    ],
    keywords: ["Laredo water infrastructure", "agua Laredo 2026", "Laredo boil water notices", "City of Laredo water projects", "Laredo mayor water plan"],
    sources: [
      { title: "2024 Consumer Confidence Report", publisher: "City of Laredo Utilities", url: "https://laredoutilities.com/wp-content/uploads/2024_CCR_English.pdf" },
      { title: "Mandatory Notice: Surface Water Monitoring", publisher: "City of Laredo Utilities / TCEQ", url: "https://laredoutilities.com/wp-content/uploads/Surface-Water-Monitoring-Minor-July-22-2025-1.pdf" },
      { title: "Citywide Water Boil Notice Local Disaster", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/Home/Components/News/News/213/15" },
      { title: "Jefferson Boil Water Notice Lifted", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/Home/Components/News/News/522/15" },
      { title: "Adopted FY 2024–2028 Capital Improvement Plan", publisher: "City of Laredo", url: "https://www.openlaredo.com/city-council/budget/CIP/24-28_Adopted_CIP.pdf" },
      { title: "Capital Improvement Program", publisher: "City of Laredo Engineering", url: "https://www.cityoflaredo.com/departments/engineering-department/capital-improvement-program-cip" },
      { title: "Laredo plans $119M in water, wastewater projects", publisher: "Laredo Morning Times", url: "https://www.lmtonline.com/local/article/laredo-water-infrastructure-budget-2026-27-tareq-22408395.php" },
      { title: "Region M Planning Group", publisher: "Texas Water Development Board", url: "https://www.twdb.texas.gov/waterplanning/rwp/regions/m/index.asp" },
      { title: "Water & Sewer Rates", publisher: "City of Laredo Utilities", url: "https://laredoutilities.com/water-sewer-rates/" },
      { title: "Lead Water Service Line Inventory", publisher: "City of Laredo Utilities", url: "https://laredoutilities.com/lead-water-service-line-information/" },
    ],
    verifiedAsOf: "9 de septiembre de 2026",
  },
  {
    slug: "impuestos-propiedad",
    title: "Impuestos de propiedad de Laredo",
    spanishTitle: "Impuestos de propiedad",
    category: "Economía",
    summary: "Guía verificada sobre la tasa municipal propuesta para 2026, el crecimiento de valores, la deuda, los ingresos y lo que el alcalde realmente puede cambiar.",
    whyItMatters: [
      "La factura depende tanto del valor gravable como de la tasa. Una tasa casi igual puede producir una factura mayor si aumenta el valor de la propiedad.",
      "Los impuestos de la ciudad financian operaciones diarias y deuda respaldada por impuestos, pero son solamente una parte de una factura que puede incluir condado, escuelas y otras entidades.",
      "Las decisiones de capital y endeudamiento pueden elevar la presión fiscal futura. La deuda financiada con impuestos debe compararse con los proyectos y calendarios que paga.",
      "El alcalde participa en las prioridades presupuestarias y fiscales junto con el Concejo; una promesa general de responsabilidad fiscal no equivale a un compromiso específico de tasa.",
    ],
    currentSituation: [
      "El presupuesto municipal propuesto para FY 2026–27 suma $1.019 mil millones. La tasa propuesta es $0.506080 por cada $100 de valor gravable: $0.380253 para mantenimiento y operaciones y $0.125827 para deuda.",
      "La tasa adoptada para FY 2025–26 fue $0.506090. La propuesta es apenas $0.000010 menor por cada $100, mientras cambia la combinación entre operaciones y servicio de deuda.",
      "La tasa propuesta está por encima de la tasa no-new-revenue de $0.492235 y por debajo de la tasa voter-approval de $0.522329 calculadas por la ciudad bajo la ley estatal.",
      "La ciudad proyecta crecimiento de 7.74% en el valor gravable y aproximadamente $140.58 millones en ingresos de impuestos a la propiedad para FY 2027, unos $9.01 millones más que lo presupuestado para FY 2026.",
      "Los materiales públicos revisados todavía identificaban el presupuesto y la tasa FY 2026–27 como propuestos. Antes de publicar cifras definitivas debe confirmarse la ordenanza final y la votación del Concejo.",
      "Webb CAD determina las valuaciones; las entidades tributarias aprueban sus tasas. Impugnar una valuación ante el appraisal review board es distinto a cuestionar la tasa municipal.",
    ],
    keyNumbers: [
      { label: "Tasa municipal propuesta 2026", value: "$0.506080", context: "Por cada $100 de valor gravable. En $100,000 gravables serían $506.08 para la parte municipal antes de exenciones." },
      { label: "Tasa adoptada anterior", value: "$0.506090", context: "La propuesta es prácticamente igual; no garantiza que la factura individual disminuya si cambia el valor gravable." },
      { label: "Tasa no-new-revenue", value: "$0.492235", context: "Cálculo oficial diseñado para producir aproximadamente los mismos ingresos sobre propiedades gravadas en ambos años." },
      { label: "Crecimiento de valor proyectado", value: "7.74%", context: "Supuesto del presupuesto FY 2026–27 de la Ciudad de Laredo." },
      { label: "Ingresos presupuestados", value: "$140.58 millones", context: "Propuesta para FY 2027 combinando mantenimiento, operaciones y servicio de deuda." },
      { label: "Deuda respaldada por impuestos", value: "$328.905 millones", context: "Saldo reportado para FY 2025 por el Texas Bond Review Board." },
      { label: "Impuestos auditados FY 2025", value: "$121.620 millones", context: "Ingreso reconocido en el resumen financiero auditado; no equivale directamente a una tasa propuesta." },
    ],
    candidateContext: [
      { candidate: "Victor D. Treviño", position: "No se localizó un compromiso específico de campaña sobre tasa, recaudación, exenciones o deuda. La propuesta municipal durante su incumbencia no debe atribuirse automáticamente como promesa personal." },
      { candidate: "JD Gonzalez", position: "Su campaña habla de responsabilidad fiscal y administración de recursos, pero no publica una meta específica de tasa, recaudación, exenciones o deuda." },
      { candidate: "Jorge A. Garza", position: "No se encontró una posición municipal específica sobre impuestos de propiedad en las fuentes revisadas." },
      { candidate: "Poncho Casso", position: "En 2025 defendió para el Condado de Webb la tasa no-new-revenue y argumentó que una tasa nominal menor todavía puede aumentar ingresos cuando suben los valores. No es todavía un compromiso documentado sobre una tasa municipal específica para 2026." },
      { candidate: "Alyssa Cigarroa", position: "No se encontró una propuesta específica de tasa o exención. Su historial incluye el voto final unánime por el presupuesto FY 2025–26, que mantuvo la tasa total en $0.506090." },
    ],
    good: [
      "La tasa total propuesta es prácticamente igual a la anterior y está por debajo de la tasa voter-approval calculada por la ciudad.",
      "Los ingresos sostienen servicios municipales y capacidad de capital; el componente propuesto de deuda disminuye de $0.128491 a $0.125827.",
      "La ciudad publica hojas de cálculo de tasas, avisos de audiencias, presupuesto y enlaces de transparencia fiscal.",
      "Las decisiones de tasa son locales y permiten revisión pública, participación en audiencias y rendición de cuentas electoral.",
    ],
    bad: [
      "Las facturas individuales todavía pueden aumentar porque la ciudad proyecta 7.74% de crecimiento en el valor gravable y la propuesta supera la tasa no-new-revenue.",
      "La deuda respaldada por impuestos y el uso de certificates of obligation hacen especialmente importante publicar proyectos, pagos y resultados.",
      "Un programa de capital amplio puede crear presión futura si el crecimiento de valores o ingresos no cumple las proyecciones.",
      "Los documentos revisados todavía no mostraban claramente una tasa final adoptada y la mayoría de los candidatos no tenía una plataforma fiscal municipal específica localizada.",
    ],
    questions: [
      "¿Cuál fue la tasa final adoptada, el número de ordenanza y el voto del Concejo?",
      "¿Por qué la propuesta supera la tasa no-new-revenue y cuánto ingreso adicional proviene de propiedades existentes frente a construcción nueva?",
      "¿Qué servicios, puestos o proyectos cambiarían bajo una tasa menor?",
      "¿Qué proyectos y pagos específicos cubre el componente de deuda de $0.125827?",
      "¿Qué obras futuras usarán bonos aprobados por votantes, certificates of obligation, notas fiscales, tarifas o subvenciones?",
      "¿Qué exenciones aplican a cada propiedad y cuándo corresponde impugnar una valuación ante Webb CAD?",
      "¿Qué meta exacta de tasa, recaudación, deuda y exenciones propone cada candidato?",
    ],
    keywords: ["Laredo property taxes", "impuestos de propiedad Laredo", "Laredo tax rate 2026", "Webb County property tax", "Laredo city budget 2026"],
    sources: [
      { title: "Webb County Appraisal District", publisher: "Webb CAD", url: "https://www.webbcad.org/" },
      { title: "FY 2026–2027 Proposed Budget and Rate Overview", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/departments/budget" },
      { title: "Notice About 2026 Tax Rates", publisher: "City of Laredo Tax Assessor-Collector", url: "https://www.cityoflaredo.com/home/showpublisheddocument/24101/639216300317470000" },
      { title: "2026 Tax Rate and Budget Information", publisher: "City of Laredo Tax Assessor-Collector", url: "https://www.cityoflaredo.com/home/showpublisheddocument/24103/639216300319970000" },
      { title: "FY 2025 Financial Summary", publisher: "City of Laredo Finance", url: "https://www.cityoflaredo.com/departments/finance-department/financial-transparency/finance-summary" },
      { title: "Laredo Local Debt Profile FY 2025", publisher: "Texas Bond Review Board", url: "https://data.brb.texas.gov/local/city/2125.html" },
      { title: "Property Tax Transparency in Texas", publisher: "State of Texas", url: "https://www.texas.gov/living-in-texas/property-tax-transparency/" },
      { title: "Appraisal Protests and Appeals", publisher: "Texas Comptroller", url: "https://comptroller.texas.gov/taxes/property-tax/protests/" },
      { title: "Capital Improvement Program", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/departments/engineering-department/capital-improvement-program-cip" },
      { title: "City Council reviews proposed $1.02B budget", publisher: "KGNS-TV", url: "https://www.kgns.tv/2026/08/30/show-me-money-laredo-city-council-reviews-proposed-102-billion-budget-ahead-september-adoption/" },
    ],
    verifiedAsOf: "9 de septiembre de 2026; cifras FY 2026–27 aún propuestas",
  },
  {
    slug: "presupuesto-municipal",
    title: "Presupuesto municipal de Laredo",
    spanishTitle: "Presupuesto municipal",
    category: "Gobierno",
    summary: "Conozca cómo Laredo recauda, asigna e informa sobre el dinero público, y cómo cada candidato cambiaría esas prioridades.",
    whyItMatters: ["El presupuesto convierte las promesas de campaña en decisiones con o sin financiamiento.", "El personal, la infraestructura y los niveles de servicio dependen de ingresos recurrentes."],
    currentSituation: ["El Concejo Municipal aprueba un presupuesto anual después de talleres y audiencias públicas.", "Una comparación significativa requiere tanto el gasto propuesto como el desempeño real."],
    good: ["Los documentos presupuestarios proporcionan una base pública para evaluar las afirmaciones.", "Las audiencias públicas crean oportunidades formales para la participación de los residentes."],
    bad: ["Los documentos presupuestarios extensos son difíciles de consultar para la mayoría de los residentes.", "El financiamiento único puede hacer que los compromisos recurrentes parezcan más asequibles de lo que realmente son."],
    questions: ["¿Qué tres departamentos deberían recibir o perder financiamiento?", "¿Qué resultados deberían informarse trimestralmente?", "¿Cuánta deuda es adecuada para las necesidades de capital?"],
    keywords: ["Laredo city budget", "City of Laredo spending", "Laredo budget 2026"],
    sources: [{ title: "Budget Department", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/departments/budget" }],
  },
  {
    slug: "calles-movilidad",
    title: "Calles y movilidad",
    spanishTitle: "Calles y movilidad",
    category: "Infraestructura",
    summary: "Dé seguimiento a las condiciones de las calles, la congestión, los proyectos de capital y las decisiones de transporte que enfrenta Laredo.",
    whyItMatters: ["Las condiciones de las calles afectan la seguridad, los traslados diarios y el movimiento de carga.", "Las inversiones en transporte determinan el crecimiento durante décadas."],
    currentSituation: ["El mantenimiento de las calles compite con los proyectos de ampliación y otras prioridades de infraestructura.", "Los residentes necesitan calendarios de proyectos e informes sobre las condiciones más claros."],
    good: ["El desempeño del transporte puede medirse mediante la entrega de proyectos, el estado del pavimento y el tiempo de viaje.", "El crecimiento del comercio fortalece el argumento a favor de financiamiento externo para infraestructura."],
    bad: ["El mantenimiento diferido se vuelve más costoso con el tiempo.", "Los proyectos pueden trasladar la congestión en vez de resolverla sin una planificación a nivel de red."],
    questions: ["¿Qué corredores tienen la mayor prioridad?", "¿Cómo se protegerá el mantenimiento de los ciclos políticos?", "¿Qué financiamiento proviene de fuentes locales frente a fuentes externas?"],
    keywords: ["Laredo roads", "Laredo traffic", "Laredo street projects"],
    sources: [{ title: "Public Works", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/departments/public-works" }],
  },
  {
    slug: "seguridad-publica",
    title: "Seguridad pública",
    spanishTitle: "Seguridad pública",
    category: "Servicios",
    summary: "Compare las prioridades de seguridad pública, las propuestas de personal, las inversiones en tecnología y los resultados medibles.",
    whyItMatters: ["La policía, los bomberos y la respuesta a emergencias son responsabilidades fundamentales de la ciudad.", "Las decisiones de personal tienen importantes efectos presupuestarios a largo plazo."],
    currentSituation: ["Los debates sobre seguridad pública suelen combinar personal, equipo, prevención y tiempos de respuesta.", "Los resultados transparentes importan más que los anuncios de equipo por sí solos."],
    good: ["Los tiempos de respuesta y los niveles de personal pueden medirse públicamente.", "La tecnología puede mejorar la coordinación cuando se acompaña de capacitación y políticas."],
    bad: ["El gasto en seguridad pública puede desplazar otros servicios si los costos no se planifican a largo plazo.", "Las compras de equipo no mejoran automáticamente los resultados en los vecindarios."],
    questions: ["¿Qué meta de tiempo de respuesta debería publicar la ciudad?", "¿Cómo mejorarán el reclutamiento y la retención?", "¿Qué programas de prevención cuentan con evidencia medible?"],
    keywords: ["Laredo public safety", "Laredo police election", "Laredo fire department policy"],
    sources: [{ title: "Public Safety Departments", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/departments" }],
  },
  {
    slug: "transparencia-etica",
    title: "Transparencia y ética",
    spanishTitle: "Transparencia y ética",
    category: "Gobierno",
    summary: "Una guía sobre registros públicos, contratos, reuniones públicas, divulgaciones y las promesas de rendición de cuentas en la contienda para alcalde.",
    whyItMatters: ["El acceso público afecta la confianza en todas las demás áreas de política pública.", "Los contratos y las divulgaciones muestran cómo se toman las decisiones y quién se beneficia."],
    currentSituation: ["Las agendas y los registros están disponibles, pero su accesibilidad y contexto varían.", "Los residentes a menudo necesitan varios sistemas para reconstruir una decisión."],
    good: ["Los registros digitales hacen que las acciones de la ciudad sean más fáciles de buscar que en décadas anteriores.", "La atención de las campañas puede generar compromisos de divulgación más sólidos."],
    bad: ["El cumplimiento técnico no garantiza información comprensible.", "Los registros retrasados debilitan la participación pública antes de que las decisiones sean definitivas."],
    questions: ["¿Qué conjuntos de datos deberían publicarse proactivamente?", "¿Apoyarán los candidatos divulgaciones consultables sobre contratos y cabildeo?", "¿Con qué rapidez deberían divulgarse los registros?"],
    keywords: ["Laredo government transparency", "Laredo ethics", "Laredo City Council records"],
    sources: [{ title: "City Secretary", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/government/city-secretary" }],
  },
  {
    slug: "puentes-comercio",
    title: "Puentes internacionales y comercio",
    spanishTitle: "Puentes y comercio",
    category: "Economía",
    summary: "Entienda cómo la capacidad de los puentes, la carga, la coordinación fronteriza y la política comercial afectan la economía y la calidad de vida de Laredo.",
    whyItMatters: ["El comercio internacional respalda los empleos locales y los ingresos públicos.", "El crecimiento de la carga también genera costos de infraestructura, tráfico y medio ambiente."],
    currentSituation: ["La posición económica de Laredo depende de un movimiento transfronterizo confiable.", "Las decisiones locales interactúan con autoridades estatales, federales y mexicanas."],
    good: ["El comercio crea una sólida base económica y relevancia nacional.", "La actividad de los puentes puede respaldar la inversión en infraestructura."],
    bad: ["La ciudad no puede controlar todas las variables de la política fronteriza.", "El crecimiento puede sobrecargar las calles y los vecindarios sin una planificación coordinada."],
    questions: ["¿Cómo llegarán los beneficios a más trabajadores locales?", "¿Qué costos de infraestructura deberían financiar los ingresos del comercio?", "¿Cómo se protegerá a los vecindarios de los impactos de la carga?"],
    keywords: ["Laredo international bridges", "Port of Laredo trade", "Laredo border economy"],
    sources: [{ title: "Bridge System", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/departments/bridge-system" }],
  },
  {
    slug: "vivienda-desarrollo",
    title: "Vivienda y desarrollo",
    spanishTitle: "Vivienda y desarrollo",
    category: "Comunidad",
    summary: "Compare la oferta de vivienda, la asequibilidad, el uso de suelo y las propuestas de desarrollo en la elección para alcalde de 2026.",
    whyItMatters: ["Los costos de vivienda afectan la estabilidad de las familias y la atracción de trabajadores.", "Los patrones de desarrollo determinan los costos futuros de infraestructura."],
    currentSituation: ["La política de vivienda abarca permisos, infraestructura, uso de suelo y programas federales.", "Las unidades asequibles y la oferta a precio de mercado resuelven distintas partes del problema."],
    good: ["Las políticas de permisos e infraestructura pueden mejorar la previsibilidad.", "Los datos públicos pueden identificar dónde es mayor la presión sobre la vivienda."],
    bad: ["El crecimiento sin infraestructura aumenta los costos de servicios a largo plazo.", "Las promesas generales de asequibilidad pueden carecer de metas de unidades y fuentes de financiamiento."],
    questions: ["¿Cuántas unidades deberían crearse o preservarse?", "¿En dónde puede la infraestructura respaldar el crecimiento?", "¿Cuál es el plan para los inquilinos?"],
    keywords: ["Laredo housing", "Laredo affordable housing", "Laredo development policy"],
    sources: [{ title: "Community Development", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/departments/community-development" }],
  },
  {
    slug: "salud-publica",
    title: "Salud pública y atención médica",
    spanishTitle: "Salud pública",
    category: "Servicios",
    summary: "Examine la capacidad local de salud pública, el acceso a la atención médica y el papel de la ciudad en la prevención y la respuesta a emergencias.",
    whyItMatters: ["La salud afecta la participación laboral, los costos de los hogares y la preparación para emergencias.", "Las comunidades fronterizas enfrentan necesidades regionales de salud particulares."],
    currentSituation: ["El departamento de salud de la ciudad trabaja en prevención, respuesta y servicios comunitarios.", "La prestación de atención médica también depende de los proveedores y de otros niveles de gobierno."],
    good: ["Los programas locales de prevención pueden atender las necesidades de los vecindarios.", "La experiencia reciente con emergencias ha generado mayor atención a la preparación."],
    bad: ["El alcalde no puede resolver de manera independiente la escasez de proveedores ni el acceso a seguros.", "Los programas requieren financiamiento estable y resultados medibles."],
    questions: ["¿Qué resultados deberían mejorar en cuatro años?", "¿Cómo se separarán las responsabilidades de la ciudad y de los proveedores?", "¿Qué estándares de preparación se publicarán?"],
    keywords: ["Laredo public health", "Laredo healthcare access", "Laredo health department"],
    sources: [{ title: "Health Department", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/departments/health-department" }],
  },
  {
    slug: "centro-historico",
    title: "Revitalización del centro histórico",
    spanishTitle: "Centro histórico",
    category: "Comunidad",
    summary: "Dé seguimiento a los planes para las propiedades del centro histórico, las pequeñas empresas, los espacios públicos, la vivienda y la actividad transfronteriza.",
    whyItMatters: ["El centro histórico es un núcleo cultural, comercial y cívico.", "La desocupación y la falta de inversión afectan los ingresos municipales y la confianza pública."],
    currentSituation: ["La revitalización requiere inversión pública y privada coordinada.", "Los proyectos individuales deben evaluarse dentro de una estrategia distrital a largo plazo."],
    good: ["Los edificios existentes y los activos culturales crean una base sólida.", "Las mejoras a los espacios públicos y a la vivienda pueden reforzarse mutuamente."],
    bad: ["El embellecimiento único no puede sustituir la ocupación y la inversión sostenidas.", "Los proyectos pueden desplazar a empresas existentes si los beneficios no se comparten."],
    questions: ["¿Cuáles son las metas de ocupación y afluencia peatonal?", "¿Qué proyectos cuentan con financiamiento comprometido?", "¿Cómo participarán los comerciantes locales?"],
    keywords: ["downtown Laredo revitalization", "Laredo downtown development", "historic Laredo"],
    sources: [{ title: "Economic Development", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/departments/economic-development" }],
  },
  {
    slug: "empleos-economia",
    title: "Empleos y desarrollo económico",
    spanishTitle: "Empleos y economía",
    category: "Economía",
    summary: "Compare cómo los candidatos planean diversificar las oportunidades mientras aprovechan la economía comercial de Laredo.",
    whyItMatters: ["La calidad del empleo afecta los salarios, la retención y la estabilidad de los hogares.", "La concentración económica puede aumentar la vulnerabilidad ante cambios de política pública o del mercado."],
    currentSituation: ["El comercio y la logística siguen siendo fundamentales para la economía de Laredo.", "La fuerza laboral, la infraestructura y la calidad de vida influyen en la inversión futura."],
    good: ["Laredo tiene una posición comercial de importancia nacional.", "Las instituciones locales pueden alinear la capacitación con la demanda de los empleadores."],
    bad: ["El número de empleos por sí solo no mide los salarios, la estabilidad ni las oportunidades de progreso.", "Los incentivos pueden carecer de informes transparentes de desempeño."],
    questions: ["¿Qué metas de salarios y calidad del empleo se utilizarán?", "¿Cómo se informará sobre los incentivos?", "¿Qué industrias son objetivos realistas de diversificación?"],
    keywords: ["Laredo jobs", "Laredo economic development", "Laredo trade jobs"],
    sources: [{ title: "Economic Development", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/departments/economic-development" }],
  },
];

export const votingResources: VotingResource[] = [
  {
    slug: "registro-de-votantes",
    title: "Regístrese para votar en Laredo",
    spanishTitle: "Registro para votar",
    summary: "Verifique su registro de votante de Texas, actualice su dirección y conozca la fecha límite de registro para la elección de Laredo de 2026.",
    steps: [
      { title: "Verifique su estatus", body: "Use el portal de votantes de la Secretaría de Estado de Texas para confirmar su registro y dirección actual." },
      { title: "Cumpla la fecha límite", body: "El último día para registrarse para esta elección es el lunes 5 de octubre de 2026." },
      { title: "Guarde la confirmación", body: "Conserve los datos de su registro y revise su boleta personalizada antes de votar." },
    ],
    officialLink: "https://teamrv-mvp.sos.texas.gov/MVP/mvp.do",
    officialLabel: "Portal de votantes de Texas",
    keywords: ["register to vote Laredo", "Laredo voter registration", "am I registered to vote Texas"],
  },
  {
    slug: "votacion-anticipada",
    title: "Votación anticipada en Laredo",
    spanishTitle: "Votación anticipada",
    summary: "Encuentre las fechas, ubicaciones y horarios oficiales de votación anticipada para los votantes del Condado de Webb en la elección municipal de 2026.",
    steps: [
      { title: "Elija un día", body: "La votación anticipada en persona es del 19 al 30 de octubre de 2026. No se necesita una razón especial." },
      { title: "Confirme el horario", body: "El aviso oficial indica 8 a.m.–6 p.m. del 19 al 23; 8 a.m.–8 p.m. el día 24; mediodía–6 p.m. el día 25; y 8 a.m.–8 p.m. del 26 al 30." },
      { title: "Lleve una identificación aceptable", body: "Revise los requisitos de identificación de votantes de Texas y las alternativas disponibles." },
    ],
    officialLink: "https://www.cityoflaredo.com/home/showdocument?id=24402&t=639239505286997868",
    officialLabel: "Sitios y horarios oficiales",
    keywords: ["Laredo early voting 2026", "Webb County early voting locations", "where to vote Laredo"],
  },
  {
    slug: "dia-de-eleccion",
    title: "Día de Elección en Laredo",
    spanishTitle: "Día de Elección",
    summary: "Planifique dónde y cuándo votar en Laredo el 3 de noviembre de 2026 utilizando recursos oficiales del Condado de Webb.",
    steps: [
      { title: "Verifique sus opciones de votación", body: "El aviso oficial indica que los votantes pueden usar cualquier centro del Día de Elección. Confirme la lista vigente antes de salir." },
      { title: "Revise su boleta", body: "Conozca las contiendas y proposiciones de su boleta antes de llegar." },
      { title: "Reserve suficiente tiempo", body: "Los centros oficiales abren el martes 3 de noviembre de 2026 de 7:00 a.m. a 7:00 p.m." },
    ],
    officialLink: "https://www.cityoflaredo.com/home/showdocument?id=24400&t=639239505276305177",
    officialLabel: "Centros oficiales del Día de Elección",
    keywords: ["Laredo Election Day 2026", "Laredo polling locations", "where do I vote Laredo"],
  },
  {
    slug: "boleta-de-muestra",
    title: "Boleta de muestra de Laredo",
    spanishTitle: "Boleta de muestra",
    summary: "Consulte su boleta de muestra del Condado de Webb e investigue a los candidatos a la alcaldía antes de votar.",
    steps: [
      { title: "Abra la página oficial de boletas", body: "El Condado de Webb publica boletas de muestra por elección y precinto cuando están disponibles." },
      { title: "Identifique su boleta", body: "Use la información de su registro y precinto para seleccionar la muestra correcta." },
      { title: "Investigue cada punto", body: "Revise los expedientes de los candidatos, las guías de temas y el texto oficial de las proposiciones." },
    ],
    officialLink: "https://www.cityoflaredo.com/departments/2026-general-elections",
    officialLabel: "Elección general 2026 y boletas",
    keywords: ["Laredo sample ballot 2026", "Webb County sample ballot", "Laredo mayor ballot"],
  },
  {
    slug: "voto-por-correo",
    title: "Vote por correo en Laredo",
    spanishTitle: "Voto por correo",
    summary: "Revise los requisitos de elegibilidad, solicitud y devolución de Texas para votar por correo en el Condado de Webb.",
    steps: [
      { title: "Confirme su elegibilidad", body: "Texas limita el voto por correo a categorías legales, entre ellas 65 años o más, enfermedad o discapacidad, ausencia del condado y ciertos otros casos." },
      { title: "Solicite a través del condado", body: "La solicitud debe ser recibida —no solamente enviada— por el secretario de votación anticipada a más tardar el viernes 23 de octubre de 2026." },
      { title: "Siga la entrega de la boleta", body: "Una boleta sin matasellos debe recibirse antes de las 7:00 p.m. del 3 de noviembre. Pueden aplicar reglas distintas cuando existe un matasellos oportuno o para votantes militares y en el extranjero." },
    ],
    officialLink: "https://www.votetexas.gov/voting-by-mail/",
    officialLabel: "Votación por correo en Texas",
    keywords: ["vote by mail Laredo", "Webb County mail ballot", "Texas ballot by mail eligibility"],
  },
  {
    slug: "identificacion-para-votar",
    title: "Guía de identificación para votar en Texas",
    spanishTitle: "Identificación para votar",
    summary: "Conozca las identificaciones con fotografía aceptadas y las alternativas antes de votar en el Condado de Webb.",
    steps: [
      { title: "Revise los siete documentos aceptados", body: "Incluyen licencia de conducir de Texas, Election Identification Certificate, identificación personal de Texas, licencia de armas de Texas, identificación militar con foto, certificado de ciudadanía con foto y pasaporte estadounidense." },
      { title: "Verifique las reglas de vencimiento", body: "Para votantes de 18 a 69 años, la identificación normalmente puede tener hasta cuatro años vencida; a partir de 70 años se permiten reglas más amplias si el documento sería aceptable de otro modo." },
      { title: "Conozca las alternativas", body: "Quien no posee y no puede obtener razonablemente una identificación aceptable puede presentar un documento de respaldo y completar una Reasonable Impediment Declaration." },
    ],
    officialLink: "https://www.votetexas.gov/voting/need-id.html",
    officialLabel: "Requisitos de identificación de VoteTexas",
    keywords: ["Texas voter ID", "what ID to vote Laredo", "Webb County voter identification"],
  },
];

export const corePages = [
  "/",
  "/elecciones-2026",
  "/candidatos",
  "/comparar-candidatos",
  ...candidates.map((candidate) => `/candidatos/${candidate.slug}`),
  "/temas",
  ...issues.map((issue) => `/temas/${issue.slug}`),
  "/votar",
  ...votingResources.map((resource) => `/votar/${resource.slug}`),
  "/calendario-electoral",
  "/finanzas-de-campana",
  "/verificacion-de-datos",
  "/metodologia",
];
