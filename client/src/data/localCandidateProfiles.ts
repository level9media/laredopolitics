import { localRaces, officialCandidateSourceUrl } from "./localRaces";
import { candidateResearchByFullName } from "./candidateResearch";
import { candidateResearchEsByFullName } from "./candidateResearchEs";

export type Language = "en" | "es";

export type CandidateQuestion = {
  id: string;
  question: { en: string; es: string };
  guidance: { en: string; es: string };
};

export type CandidateSubmission = {
  title: { en: string; es: string };
  receivedAt: { en: string; es: string };
  paragraphs: { en: string[]; es: string[] };
};

export type CandidateQuestionnaireResponse = {
  receivedAt: { en: string; es: string };
  respondentName: string;
  campaignRole: { en: string; es: string };
  authorizationCertified: boolean;
  answers: Record<string, { en: string; es: string }>;
};

export type CandidateCampaignMaterial = {
  imageUrl: string;
  title: { en: string; es: string };
  alt: { en: string; es: string };
  credit: { en: string; es: string };
  receivedAt: { en: string; es: string };
  sourceUrl?: string;
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
  verifiedFacts: Array<{
    text: { en: string; es: string };
    sourceTitle: string;
    sourceUrl: string;
  }>;
  profileConfidence:
    | "official-record-only"
    | "verified-multi-source"
    | "limited"
    | "developing";
  portraitUrl?: string;
  portraitCredit?: string;
  candidateWebsite?: string;
  campaignMaterials?: CandidateCampaignMaterial[];
  candidateSubmission?: CandidateSubmission;
  questionnaireResponse?: CandidateQuestionnaireResponse;
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
    question: {
      en: "What are your three highest priorities for this office?",
      es: "¿Cuáles son sus tres prioridades principales para este cargo?",
    },
    guidance: {
      en: "Name the outcome, timeline, estimated cost, and responsible department for each priority.",
      es: "Indique el resultado, plazo, costo estimado y departamento responsable de cada prioridad.",
    },
  },
  {
    id: "first-100-days",
    question: {
      en: "What will you do during your first 100 days?",
      es: "¿Qué hará durante sus primeros 100 días?",
    },
    guidance: {
      en: "List specific votes, policies, audits, meetings, or administrative actions.",
      es: "Enumere votos, políticas, auditorías, reuniones o acciones administrativas específicas.",
    },
  },
  {
    id: "budget-taxes",
    question: {
      en: "What would you change in the City budget, tax rate, or spending priorities?",
      es: "¿Qué cambiaría en el presupuesto, la tasa de impuestos o las prioridades de gasto?",
    },
    guidance: {
      en: "Identify what would increase, decrease, or remain protected and how the change would be funded.",
      es: "Identifique qué aumentaría, disminuiría o se protegería y cómo se financiaría el cambio.",
    },
  },
  {
    id: "water-infrastructure",
    question: {
      en: "What measurable plan do you support for water reliability and infrastructure?",
      es: "¿Qué plan medible apoya para la confiabilidad del agua y la infraestructura?",
    },
    guidance: {
      en: "Include project order, funding source, deadlines, and public performance reporting.",
      es: "Incluya el orden de proyectos, fuente de fondos, plazos e informes públicos de desempeño.",
    },
  },
  {
    id: "transparency",
    question: {
      en: "Which transparency and ethics rules should be strengthened?",
      es: "¿Qué reglas de transparencia y ética deben fortalecerse?",
    },
    guidance: {
      en: "Address contracts, conflicts, campaign donors, public records, meetings, and performance dashboards.",
      es: "Aborde contratos, conflictos, donantes, registros públicos, reuniones y tableros de desempeño.",
    },
  },
];

const localPortraits: Record<string, { url: string; credit: string }> = {
  "Michelle Marie Winterroth": {
    url: "/media/michelle-mimi-winterroth-official-headshot_2026.webp",
    credit: "Official headshot provided by Michelle “Mimi” Winterroth",
  },
  "Clarissa Yvette Cardenas": {
    url: "/media/clarissa-claire-cardenas-official-headshot_2026.webp",
    credit:
      "Official headshot provided by the Clarissa “Claire” Cardenas campaign",
  },
  "David Tyler King": {
    url: "/media/dr-tyler-king-official-headshot_2026.webp",
    credit: "Official headshot provided by the Dr. Tyler King campaign",
  },
  "Ubaldo Granados, Jr.": {
    url: "/media/baldo_2faa7d37.webp",
    credit: "Baldo Granados campaign website",
  },
  "Nathan Henry Chu": {
    url: "/media/nathan_40767aa7.webp",
    credit: "Nathan Chu 4 Judge Linktree",
  },
};

const candidateWebsiteOverrides: Record<string, string> = {
  "David Tyler King": "https://www.tylerkinglaredo.com",
};

const candidateCampaignMaterials: Record<string, CandidateCampaignMaterial[]> =
  {
    "David Tyler King": [
      {
        imageUrl: "/media/dr-tyler-king-campaign-signage_2026.webp",
        title: {
          en: "Official re-election campaign graphic",
          es: "Gráfico oficial de la campaña de reelección",
        },
        alt: {
          en: "Re-elect Dr. Tyler King for Laredo City Council District 6 — Fighting for Results campaign graphic",
          es: "Gráfico de campaña para reelegir al Dr. Tyler King al Concejo Municipal de Laredo por el Distrito 6 — Fighting for Results",
        },
        credit: {
          en: "Provided directly by the Dr. Tyler King campaign. Paid political advertising disclosure appears in the original artwork.",
          es: "Proporcionado directamente por la campaña del Dr. Tyler King. El aviso de publicidad política pagada aparece en el arte original.",
        },
        receivedAt: {
          en: "September 10, 2026",
          es: "10 de septiembre de 2026",
        },
        sourceUrl: "https://www.tylerkinglaredo.com",
      },
    ],
  };

const candidateSubmissions: Record<string, CandidateSubmission> = {
  "Michelle Marie Winterroth": {
    title: { en: "Who I Am", es: "Quién soy" },
    receivedAt: { en: "September 9, 2026", es: "9 de septiembre de 2026" },
    paragraphs: {
      en: [
        "My name is Michelle Marie Winterroth, and I am running for Laredo City Council District 3 as Michelle “Mimi” Winterroth.",
        "District 3 has been part of my life since I was a child. I am the oldest of four sisters, the daughter of a United States Air Force veteran and retired police officer, and a mother who dedicated herself to raising our family as a homemaker. I am also a mother, licensed Texas Peace Officer, longtime community advocate, and small business owner, including MAW’s Heirloom Cookies.",
        "Hard work, service, and personal responsibility were values instilled in me early in life. I was also raised to stand up for the “little guy,” the everyday person who deserves to be heard, treated fairly, and have someone willing to stand beside them. That lesson has stayed with me throughout my life.",
        "In 2009, I graduated from the Laredo Community College Regional Police Academy, where I made history as the first female Top Gun in the academy’s history.",
        "My professional experience spans several fields. I am a licensed Texas Peace Officer, licensed Private Investigator, and licensed Personal Protection Officer through the Texas Department of Public Safety Private Security Bureau. I also hold a Texas Cosmetology license and have more than 30 years of experience in the beauty industry. As an entrepreneur, my experience includes businesses in both the beauty industry and MAW’s Heirloom Cookies, giving me firsthand experience with the challenges small business owners face.",
        "My public safety experience also includes working with crime victims and continuing professional training. I attended the Conference on Crimes Against Women seminar, as well as “Navigating Trauma Through Care & Compassion,” presented by the Webb & Zapata District Attorney’s Office in 2025.",
        "My path through education was not a traditional one. I left school at 16, but I never stopped believing that education was something I could return to. Years later, I went back to school and proved to myself that where you start does not determine where you finish.",
        "I earned an Associate of Arts and a Bachelor of Applied Science in Organizational Leadership from Laredo College. I was a three time Dean’s List recipient and was selected as the Commencement Student Correspondent for Laredo College’s graduating class of 2025.",
        "I was also a member of Phi Theta Kappa, The National Society of Leadership and Success, The Society for Collegiate Leadership & Achievement, and Laredo College’s IMPACT Student Organization. These experiences strengthened my belief that leadership is not simply about holding a title. It is about taking action, serving others, and following through.",
        "My commitment to this community has never depended on holding elected office. I have participated in neighborhood cleanups, worked with youth programs, supported local businesses, and advocated for community improvements. My community service has also included working with the Laredo Chamber of Commerce’s Youth Leadership Laredo program and volunteering as Community Relations Coordinator for the Laredo Regional Food Bank, where I supported the Zero Hunger campaign and World Food Day initiatives.",
        "I also advocated for Los Martinez Park, even though it was outside District 3, because I believe public service is about stepping forward when people need someone willing to listen, speak up, and follow through.",
        "I am running for City Council because I believe District 3 deserves a representative who is present, accessible, and focused on the people they were elected to represent. Residents should not have to repeatedly ask for attention to the basic issues affecting their neighborhoods.",
        "I believe in accountability, transparency, responsible use of taxpayer money, and measurable results. Most importantly, I believe that when you tell people you are going to work for them, you have a responsibility to show up and do the work.",
        "I am one of you, working for you.",
      ],
      es: [
        "Mi nombre es Michelle Marie Winterroth y soy candidata al Concejo Municipal de Laredo por el Distrito 3 con el nombre Michelle “Mimi” Winterroth.",
        "El Distrito 3 ha sido parte de mi vida desde que era niña. Soy la mayor de cuatro hermanas, hija de un veterano de la Fuerza Aérea de Estados Unidos y policía retirado, y de una madre que se dedicó a criar a nuestra familia como ama de casa. También soy madre, agente de paz con licencia de Texas, defensora comunitaria de muchos años y propietaria de pequeños negocios, incluido MAW’s Heirloom Cookies.",
        "El trabajo arduo, el servicio y la responsabilidad personal fueron valores que me inculcaron desde temprana edad. También me enseñaron a defender al “más vulnerable”, a la persona común que merece ser escuchada, tratada con justicia y contar con alguien dispuesto a estar a su lado. Esa lección me ha acompañado durante toda mi vida.",
        "En 2009, me gradué de la Academia Regional de Policía de Laredo Community College, donde hice historia como la primera mujer Top Gun en la historia de la academia.",
        "Mi experiencia profesional abarca varios campos. Soy agente de paz con licencia de Texas, investigadora privada con licencia y oficial de protección personal con licencia de la Oficina de Seguridad Privada del Departamento de Seguridad Pública de Texas. También tengo una licencia de cosmetología de Texas y más de 30 años de experiencia en la industria de la belleza. Como empresaria, mi experiencia incluye negocios tanto en la industria de la belleza como MAW’s Heirloom Cookies, lo que me ha dado experiencia directa con los desafíos que enfrentan los propietarios de pequeños negocios.",
        "Mi experiencia en seguridad pública también incluye trabajar con víctimas de delitos y continuar mi capacitación profesional. Asistí al seminario Conference on Crimes Against Women, así como a “Navigating Trauma Through Care & Compassion”, presentado por la Oficina del Fiscal de Distrito de Webb y Zapata en 2025.",
        "Mi trayectoria educativa no fue tradicional. Dejé la escuela a los 16 años, pero nunca dejé de creer que la educación era algo a lo que podía regresar. Años después, volví a estudiar y me demostré que el lugar donde uno comienza no determina dónde termina.",
        "Obtuve un grado de Associate of Arts y una licenciatura Bachelor of Applied Science en Liderazgo Organizacional de Laredo College. Fui incluida tres veces en la Lista del Decano y seleccionada como corresponsal estudiantil de graduación para la clase de 2025 de Laredo College.",
        "También fui miembro de Phi Theta Kappa, The National Society of Leadership and Success, The Society for Collegiate Leadership & Achievement y la organización estudiantil IMPACT de Laredo College. Estas experiencias fortalecieron mi convicción de que el liderazgo no consiste simplemente en ocupar un cargo. Consiste en actuar, servir a los demás y cumplir lo prometido.",
        "Mi compromiso con esta comunidad nunca ha dependido de ocupar un cargo electo. He participado en limpiezas de vecindarios, trabajado con programas juveniles, apoyado a negocios locales y defendido mejoras comunitarias. Mi servicio comunitario también ha incluido colaborar con el programa Youth Leadership Laredo de la Cámara de Comercio de Laredo y servir como voluntaria coordinadora de relaciones comunitarias para el Laredo Regional Food Bank, donde apoyé la campaña Zero Hunger y las iniciativas del Día Mundial de la Alimentación.",
        "También defendí Los Martinez Park, aunque estaba fuera del Distrito 3, porque creo que el servicio público consiste en dar un paso al frente cuando las personas necesitan a alguien dispuesto a escuchar, alzar la voz y cumplir.",
        "Soy candidata al Concejo Municipal porque creo que el Distrito 3 merece una representante presente, accesible y enfocada en las personas a quienes fue elegida para representar. Los residentes no deberían tener que pedir repetidamente atención a los problemas básicos que afectan a sus vecindarios.",
        "Creo en la rendición de cuentas, la transparencia, el uso responsable del dinero de los contribuyentes y los resultados medibles. Sobre todo, creo que cuando uno le dice a la gente que va a trabajar para ella, tiene la responsabilidad de presentarse y hacer el trabajo.",
        "Soy una de ustedes, trabajando para ustedes.",
      ],
    },
  },
};

const questionnaireResponses: Record<string, CandidateQuestionnaireResponse> = {
  "Michelle Marie Winterroth": {
    receivedAt: { en: "September 9, 2026", es: "9 de septiembre de 2026" },
    respondentName: "Michelle Marie Winterroth",
    campaignRole: {
      en: "Candidate for Laredo City Council District 3",
      es: "Candidata al Concejo Municipal de Laredo por el Distrito 3",
    },
    authorizationCertified: true,
    answers: {
      priorities: {
        en: "1. Fix the basics: streets, infrastructure, drainage, lighting, and cleaner neighborhoods.\n\n2. Public safety: safer streets and school zones, stronger traffic enforcement, and support for first responders.\n\n3. Accountability: responsible spending, transparency, and consistent follow through for District 3 residents.",
        es: "1. Arreglar lo básico: calles, infraestructura, drenaje, alumbrado y vecindarios más limpios.\n\n2. Seguridad pública: calles y zonas escolares más seguras, mayor vigilancia del tránsito y apoyo a los socorristas.\n\n3. Rendición de cuentas: gasto responsable, transparencia y seguimiento constante para los residentes del Distrito 3.",
      },
      "first-100-days": {
        en: "Listen, assess, and act. In my first 100 days, I will document District 3’s most urgent needs, review ongoing projects and spending, and push for clear timelines. Old Mercy will be an immediate priority. I will seek a current accounting of its status, outstanding issues, and the City’s available options for moving forward.",
        es: "Escuchar, evaluar y actuar. Durante mis primeros 100 días, documentaré las necesidades más urgentes del Distrito 3, revisaré los proyectos y gastos en curso e impulsaré plazos claros. Old Mercy será una prioridad inmediata. Solicitaré un informe actualizado de su situación, los asuntos pendientes y las opciones disponibles para que la Ciudad avance.",
      },
      "budget-taxes": {
        en: "I would prioritize needs over wants. Before supporting new spending, I want a clear accounting of where taxpayer money is going and what results residents are receiving. My priorities are essential infrastructure, water reliability, public safety, and basic city services, while identifying waste and unnecessary spending.",
        es: "Daría prioridad a las necesidades sobre los deseos. Antes de apoyar nuevos gastos, quiero una rendición de cuentas clara sobre adónde va el dinero de los contribuyentes y qué resultados reciben los residentes. Mis prioridades son la infraestructura esencial, la confiabilidad del agua, la seguridad pública y los servicios municipales básicos, mientras se identifican el desperdicio y los gastos innecesarios.",
      },
      "water-infrastructure": {
        en: "Water infrastructure will not be fixed overnight. My focus will be making sure existing plans are prioritized by need, funded responsibly, and moving forward, with residents able to track progress, timelines, costs, and service interruptions.",
        es: "La infraestructura hidráulica no se arreglará de la noche a la mañana. Me enfocaré en asegurar que los planes existentes se prioricen según la necesidad, se financien responsablemente y avancen, permitiendo que los residentes puedan seguir el progreso, los plazos, los costos y las interrupciones del servicio.",
      },
      transparency: {
        en: "I support greater transparency in how taxpayer money is spent, how contracts are awarded, and how major decisions are made. I also support strong conflict of interest disclosure and making public information easier for residents to find and understand.",
        es: "Apoyo una mayor transparencia sobre cómo se gasta el dinero de los contribuyentes, cómo se adjudican los contratos y cómo se toman las decisiones importantes. También apoyo una divulgación sólida de los conflictos de interés y que la información pública sea más fácil de encontrar y entender para los residentes.",
      },
      "district-services": {
        en: "The three immediate issues are deteriorating parks and recreational spaces, neglected streets and basic infrastructure, and traffic safety. This includes speeding, school zones, crosswalks, and other safety concerns residents have repeatedly raised.",
        es: "Los tres problemas inmediatos son el deterioro de parques y espacios recreativos, las calles y la infraestructura básica desatendidas, y la seguridad vial. Esto incluye el exceso de velocidad, las zonas escolares, los cruces peatonales y otras preocupaciones de seguridad que los residentes han planteado repetidamente.",
      },
      "record-followup-1": {
        en: "My experience on the Riverfront Ad Hoc Committee taught me that citywide issues deserve attention, but a council member’s first responsibility is to the district they were elected to represent. I will stay focused on District 3 and the everyday issues affecting its residents.",
        es: "Mi experiencia en el Riverfront Ad Hoc Committee me enseñó que los asuntos de toda la ciudad merecen atención, pero la primera responsabilidad de un miembro del Concejo es con el distrito que fue elegido para representar. Me mantendré enfocada en el Distrito 3 y en los problemas cotidianos que afectan a sus residentes.",
      },
      "record-followup-2": {
        en: "My public safety priorities are safer neighborhoods, safer streets and school zones, and supporting our first responders. Public safety should never come at the expense of residents’ privacy, accountability, or responsible use of taxpayer money. I would measure results through crime trends, response times, traffic crashes, speeding complaints, and school zone safety concerns.",
        es: "Mis prioridades de seguridad pública son vecindarios más seguros, calles y zonas escolares más seguras, y apoyar a nuestros socorristas. La seguridad pública nunca debe lograrse a costa de la privacidad de los residentes, la rendición de cuentas o el uso responsable del dinero de los contribuyentes. Mediría los resultados mediante las tendencias delictivas, los tiempos de respuesta, los accidentes de tránsito, las quejas por exceso de velocidad y las preocupaciones de seguridad en las zonas escolares.",
      },
      "record-followup-3": {
        en: "My immediate priorities are deteriorating parks, streets and aging infrastructure, and traffic and pedestrian safety. In my first 100 days, I would conduct district walkthroughs, meet with residents, review existing work orders and project plans with City staff, and examine available funding. From there, I would establish realistic timelines for each priority and publicly report the progress.",
        es: "Mis prioridades inmediatas son los parques deteriorados, las calles y la infraestructura envejecida, y la seguridad vial y peatonal. Durante mis primeros 100 días, recorrería el distrito, me reuniría con los residentes, revisaría las órdenes de trabajo y los planes de proyectos existentes con el personal de la Ciudad, y examinaría los fondos disponibles. A partir de ahí, establecería plazos realistas para cada prioridad e informaría públicamente sobre el progreso.",
      },
      "record-followup-4": {
        en: "I will comply with all campaign finance laws, reporting requirements, and deadlines. My required campaign finance reports will be publicly available as provided by law, giving residents access to information about campaign contributions and expenditures. I believe transparency should be based on accurate, officially reported information.",
        es: "Cumpliré con todas las leyes de financiamiento de campañas, los requisitos de informes y los plazos. Mis informes de financiamiento de campaña requeridos estarán disponibles públicamente conforme a la ley, dando a los residentes acceso a información sobre contribuciones y gastos de campaña. Creo que la transparencia debe basarse en información precisa y reportada oficialmente.",
      },
    },
  },
  "Clarissa Yvette Cardenas": {
    receivedAt: {
      en: "September 12, 2026",
      es: "12 de septiembre de 2026",
    },
    respondentName: "Clarissa “Claire” Cardenas",
    campaignRole: {
      en: "Candidate for Laredo City Council District 3",
      es: "Candidata al Concejo Municipal de Laredo por el Distrito 3",
    },
    authorizationCertified: false,
    answers: {
      priorities: {
        en: "My three highest priorities are infrastructure and basic services, responsible economic development, and communication and accessibility.\n\nFor infrastructure, I want to start with the everyday issues residents actually see: streets, drainage, sidewalks, parks, maintenance and water reliability. I would work with the appropriate City departments to identify District 3’s highest-priority projects, determine what is already funded and establish realistic timelines instead of making promises before knowing the actual cost.\n\nFor economic development, I want growth that benefits Laredo residents. When projects come before Council, I want to know how many permanent jobs they create, whether those jobs can be filled locally, what incentives are being requested, and what impact the project will have on our infrastructure and resources.\n\nAnd accessibility is something I can begin immediately. Residents shouldn’t have to chase their councilmember to get an answer.",
        es: "Mis tres prioridades principales son la infraestructura y los servicios básicos, el desarrollo económico responsable, y la comunicación y accesibilidad.\n\nEn cuanto a la infraestructura, quiero comenzar con los problemas cotidianos que los residentes realmente ven: calles, drenaje, banquetas, parques, mantenimiento y confiabilidad del agua. Trabajaría con los departamentos correspondientes de la Ciudad para identificar los proyectos de mayor prioridad del Distrito 3, determinar qué ya está financiado y establecer plazos realistas en lugar de hacer promesas antes de conocer el costo real.\n\nEn cuanto al desarrollo económico, quiero un crecimiento que beneficie a los residentes de Laredo. Cuando se presenten proyectos ante el Concejo, quiero saber cuántos empleos permanentes crearán, si esos empleos pueden cubrirse localmente, qué incentivos se solicitan y qué impacto tendrá el proyecto en nuestra infraestructura y recursos.\n\nY la accesibilidad es algo que puedo comenzar de inmediato. Los residentes no deberían tener que perseguir a su representante del Concejo para obtener una respuesta.",
      },
      "record-followup-3": {
        en: "Accessibility isn’t just something I put on a campaign flyer. It’s one of the main reasons I’m running.\n\nResidents should be able to contact me by phone, email, social media and in person, and I want regular opportunities for residents to speak with me directly through district meetings.\n\nI also want concerns tracked. If someone reports a pothole, drainage problem or another City issue, they shouldn’t have to start from zero every time they call.\n\nI would establish a standard that constituent contacts are acknowledged within two business days, even when the problem itself cannot be resolved that quickly. An acknowledgment isn’t necessarily a solution, but residents deserve to know their concern was received, where it was referred and what happens next.\n\nAnd if something takes time, communicate that. Silence is what frustrates people.",
        es: "La accesibilidad no es solo algo que pongo en un volante de campaña. Es una de las principales razones por las que soy candidata.\n\nLos residentes deberían poder comunicarse conmigo por teléfono, correo electrónico, redes sociales y en persona, y quiero oportunidades regulares para que hablen directamente conmigo mediante reuniones del distrito.\n\nTambién quiero que se dé seguimiento a las inquietudes. Si alguien reporta un bache, un problema de drenaje u otro asunto de la Ciudad, no debería tener que empezar desde cero cada vez que llama.\n\nEstablecería como norma que los contactos de los constituyentes reciban un acuse de recibo dentro de dos días hábiles, incluso cuando el problema no pueda resolverse con esa rapidez. Un acuse de recibo no es necesariamente una solución, pero los residentes merecen saber que su inquietud fue recibida, a dónde se remitió y qué sucede después.\n\nY si algo toma tiempo, hay que comunicarlo. El silencio es lo que frustra a la gente.",
      },
      "record-followup-4": {
        en: "My business education taught me about budgeting, management, planning, accountability and making decisions with limited resources. My professional experience has strengthened those skills.\n\nI would apply that first by treating District 3’s needs like priorities that have to be identified, organized, funded, tracked and measured.\n\nIt’s not enough for me to say, “I’m going to fix the streets.” Which streets? What’s wrong with them? Which department is responsible? What’s the estimated cost? Is funding available? What’s the timeline? And did we actually complete it?",
        es: "Mi formación empresarial me enseñó sobre presupuestos, administración, planificación, rendición de cuentas y toma de decisiones con recursos limitados. Mi experiencia profesional ha fortalecido esas habilidades.\n\nAplicaría eso primero tratando las necesidades del Distrito 3 como prioridades que deben identificarse, organizarse, financiarse, darles seguimiento y medirse.\n\nNo basta con que yo diga: “Voy a arreglar las calles”. ¿Cuáles calles? ¿Qué problemas tienen? ¿Qué departamento es responsable? ¿Cuál es el costo estimado? ¿Hay fondos disponibles? ¿Cuál es el plazo? ¿Y realmente lo completamos?",
      },
    },
  },
};

function roleQuestion(raceSlug: string): CandidateQuestion {
  if (raceSlug === "municipal-court-judge") {
    return {
      id: "court-performance",
      question: {
        en: "How will you improve court access, case management, fairness, and public reporting?",
        es: "¿Cómo mejorará el acceso, el manejo de casos, la imparcialidad y los informes públicos del tribunal?",
      },
      guidance: {
        en: "Describe measurable service standards while respecting judicial independence and due process.",
        es: "Describa estándares medibles respetando la independencia judicial y el debido proceso.",
      },
    };
  }
  return {
    id: "district-services",
    question: {
      en: "Which three district-level service problems require immediate attention?",
      es: "¿Qué tres problemas de servicios del distrito requieren atención inmediata?",
    },
    guidance: {
      en: "Name the location, responsible department, proposed action, budget source, and completion target.",
      es: "Indique ubicación, departamento responsable, acción, fuente presupuestaria y meta de terminación.",
    },
  };
}

export const localCandidateProfiles: LocalCandidateProfile[] =
  localRaces.flatMap(race =>
    race.candidates.map(candidate => {
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
          en:
            research?.profileSummary ||
            `${candidate.ballotName} is listed by the City of Laredo as a 2026 candidate for ${race.title.en}. This page separates verified filing facts from candidate-supplied questionnaire responses.`,
          es:
            spanishResearch?.profileSummary ||
            `${candidate.ballotName} aparece en la lista de la Ciudad de Laredo como candidato de 2026 para ${race.title.es}. Esta página separa los datos oficiales de las respuestas proporcionadas por la candidatura.`,
        },
        verifiedFacts:
          research && spanishResearch
            ? research.verifiedFacts.map((fact, index) => ({
                text: {
                  en: fact.fact,
                  es: spanishResearch.verifiedFacts[index],
                },
                sourceTitle: fact.sourceTitle,
                sourceUrl: fact.sourceUrl,
              }))
            : [
                {
                  text: {
                    en: `The official City candidate table lists the full legal name ${candidate.fullName} and ballot name ${candidate.ballotName}.`,
                    es: `La tabla municipal registra el nombre legal ${candidate.fullName} y el nombre en boleta ${candidate.ballotName}.`,
                  },
                  sourceTitle: "2026 Candidates Information",
                  sourceUrl: officialCandidateSourceUrl,
                },
                {
                  text: {
                    en: `The City table identifies ${candidate.campaignTreasurer} as campaign treasurer.`,
                    es: `La tabla municipal identifica a ${candidate.campaignTreasurer} como tesorero de campaña.`,
                  },
                  sourceTitle: "2026 Candidates Information",
                  sourceUrl: officialCandidateSourceUrl,
                },
              ],
        profileConfidence: research
          ? ("verified-multi-source" as const)
          : ("official-record-only" as const),
        portraitUrl: portrait?.url,
        portraitCredit: portrait?.credit,
        candidateWebsite:
          candidateWebsiteOverrides[candidate.fullName] ||
          research?.candidateWebsite ||
          undefined,
        campaignMaterials: candidateCampaignMaterials[candidate.fullName],
        candidateSubmission: candidateSubmissions[candidate.fullName],
        questionnaireResponse: questionnaireResponses[candidate.fullName],
        questions: [
          ...sharedQuestions,
          roleQuestion(race.slug),
          ...(research && spanishResearch
            ? research.questionnaireFollowups.map((question, index) => ({
                id: `record-followup-${index + 1}`,
                question: {
                  en: question,
                  es: spanishResearch.questionnaireFollowups[index],
                },
                guidance: {
                  en: "Cite the specific public record, date, amount, policy, or measurable commitment supporting the answer.",
                  es: "Cite el registro público, la fecha, la cantidad, la política o el compromiso medible que respalde la respuesta.",
                },
              }))
            : []),
        ],
        responseStatus: questionnaireResponses[candidate.fullName]
          ? ("verified-published" as const)
          : ("not-received" as const),
      };
    })
  );

export function getLocalCandidateProfile(slug: string) {
  return localCandidateProfiles.find(candidate => candidate.slug === slug);
}

export function candidateProfileHrefForName(
  fullName: string,
  language: Language
) {
  const candidate = localCandidateProfiles.find(
    profile => profile.fullName === fullName
  );
  return candidate
    ? candidateProfileHref(candidate.slug, language)
    : language === "es"
      ? "/es/elecciones-2026"
      : "/election-2026";
}

export function candidateProfileHref(slug: string, language: Language) {
  return `${language === "es" ? "/es/elecciones-2026/candidatos" : "/election-2026/candidates"}/${slug}`;
}
