import { FormEvent, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  CalendarDays,
  CheckCircle2,
  CircleAlert,
  Landmark,
  Mail,
  MapPin,
  Menu,
  Newspaper,
  ShieldCheck,
  Store,
  Vote,
  X,
} from "lucide-react";
import { toast } from "sonner";

const candidates = [
  {
    initial: "C",
    name: 'Alfonso “Poncho” Casso',
    ballot: "Poncho Casso",
    detail: {
      es: "Laredoano de séptima generación, exconcejal y fundador de CIVIC. Su mensaje se concentra en el agua, el alivio de impuestos y la transparencia municipal.",
      en: "A seventh-generation Laredoan, former council member and CIVIC founder. His message centers on water, property-tax relief and city transparency.",
    },
    url: "https://cassoformayor.com/",
  },
  {
    initial: "C",
    name: "Alyssa Cigarroa",
    ballot: "Alyssa Cigarroa",
    detail: {
      es: "Representa al Distrito VIII desde 2020 y cofundó Cultivarte. Su campaña destaca preparación ante crisis, vivienda y participación pública.",
      en: "District VIII council member since 2020 and Cultivarte co-founder. Her campaign highlights crisis readiness, housing and public participation.",
    },
    url: "https://www.cityoflaredo.com/government/mayor-city-council/district-8-cm-alyssa-cigarroa",
  },
  {
    initial: "G",
    name: "JD Gonzalez",
    ballot: "JD Gonzalez",
    detail: {
      es: "Veterano de diez años de la Marina con experiencia en comercio internacional. Su campaña se enfoca en calles, agua, seguridad y oportunidades.",
      en: "A ten-year Navy veteran with an international trade background. His campaign focuses on roads, water, safety and economic opportunity.",
    },
    url: "https://jdformayor.com/",
  },
  {
    initial: "T",
    name: "Dr. Victor D. Treviño",
    ballot: "Victor D. Trevino",
    incumbent: true,
    detail: {
      es: "Médico, exautoridad de salud y alcalde desde 2022. Busca un segundo mandato destacando inversión en agua, seguridad y acceso a salud.",
      en: "A physician, former health authority and mayor since 2022. He seeks a second term highlighting water, safety and healthcare investments.",
    },
    url: "https://www.cityoflaredo.com/government/mayor-city-council/mayor-dr-victor-d-trevi-o",
  },
];

const issues = [
  {
    number: "01",
    title: { es: "Agua e infraestructura", en: "Water & infrastructure" },
    good: {
      es: "La conversación ya cambió de parches rápidos a inversión de largo plazo y reemplazo de sistemas.",
      en: "The conversation has shifted from quick patches toward long-term investment and system replacement.",
    },
    bad: {
      es: "Los votantes todavía necesitan plazos claros, costos completos y reportes públicos que midan resultados por colonia.",
      en: "Voters still need clear timelines, full costs and public reporting that measures results neighborhood by neighborhood.",
    },
  },
  {
    number: "02",
    title: { es: "Transparencia municipal", en: "City transparency" },
    good: {
      es: "Hay más atención pública sobre contratos, agendas y decisiones que antes pasaban con poca explicación.",
      en: "There is more public attention on contracts, agendas and decisions that once received little explanation.",
    },
    bad: {
      es: "La información sigue fragmentada y técnica. Acceso no siempre significa claridad ni rendición de cuentas.",
      en: "Information remains fragmented and technical. Access does not always equal clarity or accountability.",
    },
  },
  {
    number: "03",
    title: { es: "Economía y crecimiento", en: "Economy & growth" },
    good: {
      es: "Laredo tiene una posición comercial única y una comunidad empresarial que sabe competir en ambos lados de la frontera.",
      en: "Laredo holds a unique trade position and a business community built to compete on both sides of the border.",
    },
    bad: {
      es: "Crecimiento sin calles, agua, vivienda y talento suficiente puede elevar costos sin mejorar la calidad de vida.",
      en: "Growth without enough roads, water, housing and talent can raise costs without improving quality of life.",
    },
  },
];

const dates = [
  {
    day: "05",
    month: "OCT",
    title: { es: "Último día para registrarse", en: "Registration deadline" },
    detail: { es: "Confirma tu registro y dirección.", en: "Confirm your registration and address." },
  },
  {
    day: "19",
    month: "OCT",
    title: { es: "Inicia la votación temprana", en: "Early voting begins" },
    detail: { es: "Del 19 al 30 de octubre.", en: "October 19 through October 30." },
  },
  {
    day: "23",
    month: "OCT",
    title: { es: "Solicitud de voto por correo", en: "Mail ballot deadline" },
    detail: { es: "Último día para solicitarla.", en: "Last day to submit an application." },
  },
  {
    day: "03",
    month: "NOV",
    title: { es: "Día de Elección", en: "Election Day" },
    detail: { es: "Elección municipal de Laredo.", en: "Laredo municipal election." },
  },
];

const copy = {
  es: {
    nav: ["Lo Bueno / Lo Malo", "Candidatos", "Agenda", "Cómo votar"],
    independent: "Periodismo cívico independiente",
    heroEyebrow: "Elección municipal · 3 de noviembre de 2026",
    heroTitleA: "La política",
    heroTitleB: "de nuestra ciudad.",
    heroText:
      "Sin gritos. Sin propaganda disfrazada. Lo que Laredo necesita saber para votar, participar y exigir resultados.",
    seeCandidates: "Conoce a los candidatos",
    seeAnalysis: "Ver el análisis",
    election: "Elección municipal",
    daysLabel: "La decisión es tuya",
    ticker: "CUATRO CANDIDATOS",
    ticker2: "UNA CIUDAD",
    ticker3: "TU VOTO",
    focusEyebrow: "La conversación que importa",
    focusTitle: "Lo Bueno. Lo Malo.",
    focusSubtitle: "Y lo que todavía falta por explicar.",
    focusText:
      "Cada semana ponemos un tema local bajo la lupa. Reconocemos avances, señalamos fallas y separamos promesas de resultados—con la misma vara para todos.",
    methodology: "Nuestra metodología",
    good: "LO BUENO",
    bad: "LO MALO",
    candidatesEyebrow: "Elección 2026",
    candidatesTitle: "¿Quién quiere dirigir Laredo?",
    candidatesText:
      "Los cuatro candidatos reciben el mismo espacio. El orden es alfabético, no una recomendación.",
    ballot: "EN LA BOLETA",
    incumbent: "ALCALDE ACTUAL",
    profile: "Ver perfil y fuentes",
    agendaEyebrow: "Agenda cívica",
    agendaTitle: "Las fechas que no puedes perder",
    agendaText:
      "Guarda esta página. Actualizaremos lugares de votación, foros y eventos públicos conforme sean confirmados.",
    officialCalendar: "Ver calendario oficial",
    voteEyebrow: "Haz un plan",
    voteTitle: "Tu voto empieza antes de llegar a la casilla.",
    voteText:
      "Confirma tu registro, conoce tu boleta y decide cuándo vas a votar. Tres pasos. Menos de diez minutos.",
    check: "Revisar mi registro",
    find: "Encontrar dónde votar",
    sample: "Ver boleta de muestra",
    riverKicker: "Una frontera. Una comunidad.",
    riverTitle: "Laredo merece información a su altura.",
    riverText:
      "Este espacio no pertenece a ningún partido, candidato ni grupo político. Pertenece a la gente que vive las decisiones de City Hall todos los días.",
    adsEyebrow: "Comercio local",
    adsTitle: "Los negocios que mueven Laredo",
    adsText:
      "Patrocinios claramente identificados. La publicidad apoya este proyecto, pero nunca compra cobertura editorial.",
    adLabel: "ESPACIO DISPONIBLE",
    adBig: "Patrocinador principal",
    adLocal: "Tu negocio aquí",
    adDetail: "Presencia mensual · Audiencia local · Reporte de clics",
    rates: "Solicitar tarifas",
    mediaKit: "Ver oportunidades",
    footerLine: "Información clara para una ciudad que decide su futuro.",
    disclaimer:
      "Recurso independiente y no partidista. No respaldamos candidatos. Verifica fechas y lugares con las autoridades electorales oficiales.",
    updated: "Actualizado en septiembre de 2026",
  },
  en: {
    nav: ["The Good / The Bad", "Candidates", "Agenda", "How to vote"],
    independent: "Independent civic journalism",
    heroEyebrow: "Municipal election · November 3, 2026",
    heroTitleA: "The politics",
    heroTitleB: "of our city.",
    heroText:
      "No shouting. No propaganda in disguise. What Laredo needs to know to vote, participate and demand results.",
    seeCandidates: "Meet the candidates",
    seeAnalysis: "Read the analysis",
    election: "Municipal election",
    daysLabel: "The decision is yours",
    ticker: "FOUR CANDIDATES",
    ticker2: "ONE CITY",
    ticker3: "YOUR VOTE",
    focusEyebrow: "The conversation that matters",
    focusTitle: "The Good. The Bad.",
    focusSubtitle: "And what still needs an answer.",
    focusText:
      "Each week we put one local issue under the lens. We recognize progress, flag failures and separate promises from results—with the same standard for everyone.",
    methodology: "Our methodology",
    good: "THE GOOD",
    bad: "THE BAD",
    candidatesEyebrow: "Election 2026",
    candidatesTitle: "Who wants to lead Laredo?",
    candidatesText:
      "All four candidates receive equal space. The order is alphabetical, not an endorsement.",
    ballot: "ON THE BALLOT",
    incumbent: "INCUMBENT MAYOR",
    profile: "View profile & sources",
    agendaEyebrow: "Civic agenda",
    agendaTitle: "The dates you cannot miss",
    agendaText:
      "Save this page. We will update voting locations, forums and public events as they are confirmed.",
    officialCalendar: "View official calendar",
    voteEyebrow: "Make a plan",
    voteTitle: "Your vote starts before you reach the polls.",
    voteText:
      "Confirm your registration, know your ballot and decide when you will vote. Three steps. Less than ten minutes.",
    check: "Check my registration",
    find: "Find where to vote",
    sample: "View a sample ballot",
    riverKicker: "One border. One community.",
    riverTitle: "Laredo deserves information equal to its future.",
    riverText:
      "This space belongs to no party, candidate or political group. It belongs to the people who live with City Hall decisions every day.",
    adsEyebrow: "Local commerce",
    adsTitle: "The businesses that move Laredo",
    adsText:
      "Clearly labeled sponsorships. Advertising supports this project, but never buys editorial coverage.",
    adLabel: "SPACE AVAILABLE",
    adBig: "Presenting sponsor",
    adLocal: "Your business here",
    adDetail: "Monthly presence · Local audience · Click reporting",
    rates: "Request rates",
    mediaKit: "View opportunities",
    footerLine: "Clear information for a city deciding its future.",
    disclaimer:
      "Independent, nonpartisan resource. We do not endorse candidates. Verify dates and locations with official election authorities.",
    updated: "Updated September 2026",
  },
};

type Language = keyof typeof copy;

function EditorialMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <img src="/manus-storage/laredo-texas-logo_e7a4842a.png" alt="" />
    </span>
  );
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("es");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[language];

  const navTargets = ["#bueno-malo", "#candidatos", "#agenda", "#votar"];

  const handleAdInquiry = () => {
    toast("Inventario publicitario listo", {
      description:
        language === "es"
          ? "Agrega tu correo de ventas para activar solicitudes y tu media kit."
          : "Add your sales email to activate inquiries and the media kit.",
    });
  };

  const handleBriefSignup = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.success(language === "es" ? "El resumen está listo para conectar" : "The briefing is ready to connect", {
      description:
        language === "es"
          ? "Conecta este formulario a tu CRM o plataforma de email en la siguiente fase."
          : "Connect this form to your CRM or email platform in the next phase.",
    });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f4f0e8] text-[#132a33]">
      <div className="bg-[#0d2732] text-[#dbe6e3]">
        <div className="container flex min-h-9 items-center justify-between py-2 text-[10px] font-bold uppercase tracking-[0.2em] sm:text-xs">
          <span className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-[#e75037]" /> Laredo, Texas · Septiembre 2026
          </span>
          <span className="hidden items-center gap-2 sm:flex">
            <ShieldCheck className="h-3.5 w-3.5" /> {t.independent}
          </span>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-[#132a33]/10 bg-[#f8f4ec]/95 shadow-[0_12px_30px_rgba(15,39,49,0.06)] backdrop-blur-xl">
        <div className="container flex h-[78px] items-center justify-between gap-4">
          <a href="#top" className="group flex items-center gap-3" aria-label="Laredo Mayor home">
            <EditorialMark />
            <div>
              <p className="font-display text-[22px] font-black leading-none tracking-[-0.04em] text-[#102b36] sm:text-[25px]">
                LAREDO<span className="text-[#e75037]">MAYOR</span>
              </p>
              <p className="mt-1 text-[8px] font-extrabold uppercase tracking-[0.28em] text-[#66777a] sm:text-[9px]">
                La política de nuestra ciudad
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            {t.nav.map((label, index) => (
              <a
                key={label}
                href={navTargets[index]}
                data-umami-event={`nav-${navTargets[index].slice(1)}`}
                className="nav-link text-xs font-extrabold uppercase tracking-[0.08em] text-[#243b43]"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden rounded-full border border-[#132a33]/15 bg-white/60 p-1 sm:flex" aria-label="Language selection">
              <button
                type="button"
                onClick={() => setLanguage("es")}
                className={`rounded-full px-3 py-1.5 text-[10px] font-black tracking-wider transition ${
                  language === "es" ? "bg-[#102b36] text-white" : "text-[#53676b] hover:text-[#102b36]"
                }`}
                aria-pressed={language === "es"}
              >
                ESP
              </button>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`rounded-full px-3 py-1.5 text-[10px] font-black tracking-wider transition ${
                  language === "en" ? "bg-[#102b36] text-white" : "text-[#53676b] hover:text-[#102b36]"
                }`}
                aria-pressed={language === "en"}
              >
                ENG
              </button>
            </div>
            <a
              href="#votar"
              className="hidden items-center gap-2 bg-[#e75037] px-4 py-3 text-[10px] font-black uppercase tracking-[0.14em] text-white shadow-[4px_4px_0_#102b36] transition duration-200 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#102b36] active:scale-[0.97] sm:flex"
            >
              <Vote className="h-4 w-4" /> Vota Nov. 3
            </a>
            <button
              type="button"
              className="grid h-11 w-11 place-items-center border border-[#132a33]/15 bg-white lg:hidden"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="border-t border-[#132a33]/10 bg-[#f8f4ec] px-4 py-4 lg:hidden" aria-label="Mobile navigation">
            <div className="container flex flex-col gap-1">
              <div className="mb-3 flex rounded-full border border-[#132a33]/15 bg-white p-1 sm:hidden">
                <button
                  type="button"
                  onClick={() => setLanguage("es")}
                  className={`flex-1 rounded-full px-3 py-2 text-[10px] font-black ${language === "es" ? "bg-[#102b36] text-white" : "text-[#53676b]"}`}
                >
                  ESPAÑOL
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage("en")}
                  className={`flex-1 rounded-full px-3 py-2 text-[10px] font-black ${language === "en" ? "bg-[#102b36] text-white" : "text-[#53676b]"}`}
                >
                  ENGLISH
                </button>
              </div>
              {t.nav.map((label, index) => (
                <a
                  key={label}
                  href={navTargets[index]}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-[#132a33]/10 py-3 font-display text-xl font-bold"
                >
                  {label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main id="top">
        <section className="hero-section relative isolate min-h-[690px] overflow-hidden bg-[#0a2029] text-white lg:min-h-[790px]">
          <img
            src="/manus-storage/laredo-civic-hero_d774494e.jpg"
            alt="Editorial view of Laredo civic life at golden hour"
            className="absolute inset-0 h-full w-full object-cover object-[64%_center]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,25,32,0.99)_0%,rgba(6,25,32,0.92)_36%,rgba(6,25,32,0.42)_68%,rgba(6,25,32,0.12)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(6,25,32,0.9)_0%,transparent_35%)]" />
          <div className="grain absolute inset-0 opacity-25" />

          <div className="container relative flex min-h-[690px] items-center py-20 lg:min-h-[790px]">
            <div className="max-w-[780px] pt-4">
              <p className="reveal mb-7 flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.22em] text-[#f7b9aa] sm:text-xs">
                <span className="h-px w-10 bg-[#e75037]" /> {t.heroEyebrow}
              </p>
              <h1 className="reveal reveal-delay-1 font-display text-[clamp(4.15rem,10vw,8.8rem)] font-black leading-[0.78] tracking-[-0.075em]">
                <span className="block">{t.heroTitleA}</span>
                <span className="mt-5 block font-medium italic text-[#f0dfbd]">{t.heroTitleB}</span>
              </h1>
              <p className="reveal reveal-delay-2 mt-9 max-w-2xl border-l-2 border-[#e75037] pl-5 text-base font-medium leading-relaxed text-[#e0e7e5] sm:text-xl">
                {t.heroText}
              </p>
              <div className="reveal reveal-delay-3 mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#candidatos"
                  data-umami-event="hero-candidates"
                  className="group flex items-center gap-3 bg-[#e75037] px-6 py-4 text-xs font-black uppercase tracking-[0.12em] text-white shadow-[5px_5px_0_#f0dfbd] transition duration-200 hover:-translate-y-1 hover:shadow-[7px_7px_0_#f0dfbd] active:scale-[0.97]"
                >
                  {t.seeCandidates} <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
                </a>
                <a
                  href="#bueno-malo"
                  data-umami-event="hero-analysis"
                  className="group flex items-center gap-2 border-b border-white/40 py-2 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:border-[#f0dfbd] hover:text-[#f0dfbd]"
                >
                  {t.seeAnalysis} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            <div className="absolute bottom-7 right-4 hidden w-[190px] border border-white/20 bg-[#0d2732]/88 p-5 shadow-2xl backdrop-blur-md md:block lg:right-8">
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#a9bfbd]">{t.election}</p>
              <div className="mt-3 flex items-end gap-3">
                <span className="font-display text-6xl font-black leading-none text-[#f0dfbd]">03</span>
                <div className="pb-1 text-xs font-extrabold uppercase leading-tight tracking-[0.12em]">
                  NOV<br />2026
                </div>
              </div>
              <div className="mt-4 h-px bg-white/15" />
              <p className="mt-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-white/70">
                <BadgeCheck className="h-4 w-4 text-[#e75037]" /> {t.daysLabel}
              </p>
            </div>
          </div>
        </section>

        <div className="ticker overflow-hidden border-y border-[#102b36] bg-[#f0dfbd] py-3 text-[#102b36]">
          <div className="ticker-track flex min-w-max items-center gap-8 text-[11px] font-black uppercase tracking-[0.24em]">
            {[...Array(4)].flatMap((_, index) => [
              <span key={`a${index}`}>{t.ticker}</span>,
              <span key={`d1${index}`} className="text-[#e75037]">◆</span>,
              <span key={`b${index}`}>{t.ticker2}</span>,
              <span key={`d2${index}`} className="text-[#e75037]">◆</span>,
              <span key={`c${index}`}>{t.ticker3}</span>,
              <span key={`d3${index}`} className="text-[#e75037]">◆</span>,
            ])}
          </div>
        </div>

        <section id="bueno-malo" className="paper-texture scroll-mt-24 bg-[#f4f0e8] py-24 sm:py-32">
          <div className="container">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <div className="lg:sticky lg:top-32 lg:self-start">
                <p className="section-kicker">{t.focusEyebrow}</p>
                <h2 className="mt-5 font-display text-5xl font-black leading-[0.9] tracking-[-0.055em] text-[#102b36] sm:text-7xl">
                  {t.focusTitle}
                </h2>
                <p className="mt-4 font-display text-2xl font-medium italic text-[#e75037] sm:text-3xl">{t.focusSubtitle}</p>
                <p className="mt-7 max-w-md text-base leading-7 text-[#4f6265]">{t.focusText}</p>
                <button
                  type="button"
                  onClick={() => toast.info(language === "es" ? "Misma vara. Fuentes públicas. Correcciones visibles." : "One standard. Public sources. Visible corrections.")}
                  className="group mt-7 flex items-center gap-2 text-xs font-black uppercase tracking-[0.13em] text-[#102b36]"
                >
                  {t.methodology} <ArrowUpRight className="h-4 w-4 text-[#e75037] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </button>
              </div>

              <div className="space-y-5">
                {issues.map((issue) => (
                  <article
                    key={issue.number}
                    className="issue-card group border border-[#102b36]/12 bg-[#fbf8f1] p-5 shadow-[0_18px_60px_rgba(16,43,54,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(16,43,54,0.12)] sm:p-7"
                  >
                    <div className="mb-6 flex items-center justify-between border-b border-[#102b36]/12 pb-5">
                      <h3 className="font-display text-2xl font-black tracking-[-0.035em] sm:text-3xl">{issue.title[language]}</h3>
                      <span className="font-mono text-xs font-bold text-[#e75037]">{issue.number} / 03</span>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="relative overflow-hidden bg-[#dce8df] p-5 sm:p-6">
                        <CheckCircle2 className="absolute -bottom-6 -right-5 h-28 w-28 text-[#245a48]/[0.07]" />
                        <p className="mb-3 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#245a48]">
                          <span className="grid h-5 w-5 place-items-center rounded-full bg-[#245a48] text-white">+</span> {t.good}
                        </p>
                        <p className="relative text-[15px] font-medium leading-6 text-[#183a31]">{issue.good[language]}</p>
                      </div>
                      <div className="relative overflow-hidden bg-[#f4ded7] p-5 sm:p-6">
                        <CircleAlert className="absolute -bottom-6 -right-5 h-28 w-28 text-[#a23f2e]/[0.07]" />
                        <p className="mb-3 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#a23f2e]">
                          <span className="grid h-5 w-5 place-items-center rounded-full bg-[#a23f2e] text-white">−</span> {t.bad}
                        </p>
                        <p className="relative text-[15px] font-medium leading-6 text-[#5b2c25]">{issue.bad[language]}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="candidatos" className="scroll-mt-24 bg-[#102b36] py-24 text-white sm:py-32">
          <div className="container">
            <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end">
              <div>
                <p className="section-kicker section-kicker-light">{t.candidatesEyebrow}</p>
                <h2 className="mt-5 max-w-3xl font-display text-5xl font-black leading-[0.92] tracking-[-0.055em] sm:text-7xl">
                  {t.candidatesTitle}
                </h2>
              </div>
              <p className="max-w-xl border-l border-[#e75037] pl-5 text-base leading-7 text-[#b9c9c7] lg:justify-self-end">{t.candidatesText}</p>
            </div>

            <div className="grid border-l border-t border-white/15 md:grid-cols-2 xl:grid-cols-4">
              {candidates.map((candidate, index) => (
                <article
                  key={candidate.name}
                  className="candidate-card group flex min-h-[420px] flex-col border-b border-r border-white/15 p-6 transition duration-300 hover:bg-white/[0.055] sm:p-8"
                >
                  <div className="flex items-start justify-between">
                    <div className="grid h-14 w-14 place-items-center rounded-full border border-[#f0dfbd]/35 bg-[#173844] font-display text-2xl font-black text-[#f0dfbd] transition duration-300 group-hover:border-[#e75037] group-hover:bg-[#e75037] group-hover:text-white">
                      {candidate.initial}
                    </div>
                    <span className="font-mono text-[10px] font-bold tracking-widest text-white/35">0{index + 1}</span>
                  </div>
                  <div className="mt-8">
                    <p className="text-[9px] font-black uppercase tracking-[0.19em] text-[#80a09b]">{t.ballot}: {candidate.ballot}</p>
                    <h3 className="mt-3 font-display text-[28px] font-black leading-[0.98] tracking-[-0.04em] text-white">{candidate.name}</h3>
                    {candidate.incumbent && (
                      <span className="mt-4 inline-flex bg-[#f0dfbd] px-2.5 py-1 text-[8px] font-black uppercase tracking-[0.16em] text-[#102b36]">
                        {t.incumbent}
                      </span>
                    )}
                    <p className="mt-5 text-sm leading-6 text-[#b9c9c7]">{candidate.detail[language]}</p>
                  </div>
                  <a
                    href={candidate.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-umami-event={`candidate-${candidate.ballot.toLowerCase().replaceAll(" ", "-")}`}
                    className="mt-auto flex items-center justify-between border-t border-white/15 pt-5 text-[10px] font-black uppercase tracking-[0.14em] text-[#f0dfbd] transition hover:text-white"
                  >
                    {t.profile} <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="agenda" className="paper-texture scroll-mt-24 bg-[#f4f0e8] py-24 sm:py-32">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
              <div>
                <p className="section-kicker">{t.agendaEyebrow}</p>
                <h2 className="mt-5 font-display text-5xl font-black leading-[0.94] tracking-[-0.05em] sm:text-6xl">{t.agendaTitle}</h2>
                <p className="mt-6 max-w-md text-base leading-7 text-[#586a6d]">{t.agendaText}</p>
                <a
                  href="https://www.cityoflaredo.com/government/city-secretary/elections"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-umami-event="official-election-calendar"
                  className="group mt-8 inline-flex items-center gap-3 bg-[#102b36] px-5 py-4 text-[10px] font-black uppercase tracking-[0.14em] text-white shadow-[4px_4px_0_#e75037] transition duration-200 hover:-translate-y-1 hover:shadow-[6px_6px_0_#e75037] active:scale-[0.97]"
                >
                  <CalendarDays className="h-4 w-4" /> {t.officialCalendar} <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              <div className="border-t border-[#102b36]/20">
                {dates.map((date) => (
                  <article key={`${date.month}-${date.day}`} className="group grid grid-cols-[72px_1fr] gap-5 border-b border-[#102b36]/20 py-6 sm:grid-cols-[100px_1fr_auto] sm:items-center sm:gap-8">
                    <div className="flex items-end gap-2">
                      <span className="font-display text-5xl font-black leading-none tracking-[-0.06em] text-[#e75037]">{date.day}</span>
                      <span className="pb-1 font-mono text-[10px] font-black tracking-widest text-[#5e6e70]">{date.month}</span>
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-black tracking-[-0.02em] sm:text-2xl">{date.title[language]}</h3>
                      <p className="mt-1 text-sm text-[#657577]">{date.detail[language]}</p>
                    </div>
                    <CalendarDays className="hidden h-5 w-5 text-[#102b36]/25 transition group-hover:text-[#e75037] sm:block" />
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="votar" className="scroll-mt-24 bg-[#e75037] py-20 text-white sm:py-24">
          <div className="container">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
              <div>
                <p className="section-kicker !text-[#102b36] before:!bg-[#102b36]">{t.voteEyebrow}</p>
                <h2 className="mt-5 max-w-2xl font-display text-5xl font-black leading-[0.92] tracking-[-0.055em] sm:text-7xl">{t.voteTitle}</h2>
                <p className="mt-6 max-w-xl text-base font-medium leading-7 text-white/85">{t.voteText}</p>
              </div>
              <div className="grid gap-3">
                {[
                  [t.check, "https://teamrv-mvp.sos.texas.gov/MVP/mvp.do", BadgeCheck, "registration-check"],
                  [t.find, "https://www.webbcountytx.gov/ElectionsAdministration/", MapPin, "voting-location"],
                  [t.sample, "https://www.webbcountytx.gov/ElectionsAdministration/SampleBallots/default.aspx", Newspaper, "sample-ballot"],
                ].map(([label, url, Icon, eventName], index) => {
                  const VoteIcon = Icon as typeof BadgeCheck;
                  return (
                    <a
                      key={label as string}
                      href={url as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-umami-event={eventName as string}
                      className="vote-step group flex items-center gap-5 bg-[#f8f4ec] p-5 text-[#102b36] shadow-[5px_5px_0_rgba(16,43,54,0.85)] transition duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0_rgba(16,43,54,0.85)] active:scale-[0.99] sm:p-6"
                    >
                      <span className="font-mono text-[10px] font-black text-[#e75037]">0{index + 1}</span>
                      <span className="grid h-11 w-11 place-items-center rounded-full bg-[#102b36] text-white"><VoteIcon className="h-5 w-5" /></span>
                      <span className="flex-1 font-display text-lg font-black tracking-[-0.02em] sm:text-2xl">{label as string}</span>
                      <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden bg-[#0c2630] py-28 text-white sm:py-36">
          <img
            src="/manus-storage/rio-grande-editorial_2e0661fc.jpg"
            alt="Editorial landscape of the Rio Grande near Laredo"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0b2630]/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071a21]/95 via-[#071a21]/70 to-transparent" />
          <div className="grain absolute inset-0 opacity-30" />
          <div className="container relative">
            <div className="max-w-3xl">
              <p className="section-kicker section-kicker-light">{t.riverKicker}</p>
              <h2 className="mt-6 font-display text-5xl font-black leading-[0.92] tracking-[-0.055em] sm:text-7xl">{t.riverTitle}</h2>
              <p className="mt-7 max-w-2xl border-l-2 border-[#e75037] pl-6 text-base leading-7 text-[#d9e5e2] sm:text-lg">{t.riverText}</p>
            </div>
          </div>
        </section>

        <section id="anunciate" className="paper-texture bg-[#f4f0e8] py-24 sm:py-32">
          <div className="container">
            <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_0.82fr] lg:items-end">
              <div>
                <p className="section-kicker">{t.adsEyebrow}</p>
                <h2 className="mt-5 max-w-3xl font-display text-5xl font-black leading-[0.92] tracking-[-0.055em] text-[#102b36] sm:text-7xl">{t.adsTitle}</h2>
              </div>
              <p className="max-w-xl border-l border-[#e75037] pl-5 text-base leading-7 text-[#5a6c6e] lg:justify-self-end">{t.adsText}</p>
            </div>

            <div className="grid gap-5 lg:grid-cols-12">
              <button
                type="button"
                onClick={handleAdInquiry}
                className="ad-slot group relative min-h-[285px] overflow-hidden bg-[#102b36] p-7 text-left text-white shadow-[0_20px_60px_rgba(16,43,54,0.15)] lg:col-span-7 sm:p-10"
              >
                <div className="absolute -right-8 -top-12 h-56 w-56 rounded-full border-[34px] border-[#f0dfbd]/10 transition duration-500 group-hover:scale-110" />
                <div className="absolute bottom-0 right-0 h-36 w-52 bg-[#e75037] [clip-path:polygon(35%_0,100%_0,100%_100%,0_100%)]" />
                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="bg-[#e75037] px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.18em]">{t.adLabel}</span>
                    <Landmark className="h-6 w-6 text-[#f0dfbd]" />
                  </div>
                  <div className="mt-20 max-w-md">
                    <p className="font-display text-4xl font-black tracking-[-0.045em] sm:text-5xl">{t.adBig}</p>
                    <p className="mt-3 text-xs font-bold uppercase tracking-[0.15em] text-[#a9c1bc]">970 × 250 · Home + Newsletter</p>
                  </div>
                </div>
              </button>

              <div className="grid gap-5 sm:grid-cols-2 lg:col-span-5">
                {[Building2, Store].map((Icon, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={handleAdInquiry}
                    className="ad-slot group flex min-h-[285px] flex-col justify-between border border-[#102b36]/15 bg-[#fbf8f1] p-7 text-left shadow-[0_14px_45px_rgba(16,43,54,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#e75037] hover:shadow-[0_20px_55px_rgba(16,43,54,0.13)]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[8px] font-black uppercase tracking-[0.17em] text-[#e75037]">{t.adLabel}</span>
                      <Icon className="h-5 w-5 text-[#102b36]/35 transition group-hover:text-[#e75037]" />
                    </div>
                    <div>
                      <p className="font-display text-3xl font-black leading-none tracking-[-0.035em] text-[#102b36]">{t.adLocal}</p>
                      <p className="mt-3 text-xs leading-5 text-[#667679]">300 × 250 · {t.adDetail}</p>
                      <span className="mt-5 inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.13em] text-[#102b36]">
                        {t.rates} <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 grid gap-5 border border-[#102b36]/15 bg-[#e9e2d5] p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center bg-[#102b36] text-white"><Mail className="h-5 w-5" /></div>
                <div>
                  <p className="font-display text-xl font-black text-[#102b36]">Media Kit · Laredo 2026</p>
                  <p className="mt-1 text-sm leading-6 text-[#617174]">Audience, placement options, editorial firewall and monthly reporting.</p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleAdInquiry}
                data-umami-event="media-kit-request"
                className="flex items-center justify-center gap-3 bg-[#e75037] px-6 py-4 text-[10px] font-black uppercase tracking-[0.14em] text-white shadow-[4px_4px_0_#102b36] transition hover:-translate-y-1 hover:shadow-[6px_6px_0_#102b36] active:scale-[0.97]"
              >
                {t.mediaKit} <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        <section className="bg-[#0d2732] py-16 text-white">
          <div className="container grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#e75037]">El Brief de Laredo</p>
              <h2 className="mt-3 font-display text-3xl font-black tracking-[-0.035em] sm:text-4xl">
                {language === "es" ? "Una vez por semana. Sólo lo que importa." : "Once a week. Only what matters."}
              </h2>
            </div>
            <form onSubmit={handleBriefSignup} className="flex flex-col gap-3 sm:flex-row">
              <label htmlFor="brief-email" className="sr-only">Email</label>
              <input
                id="brief-email"
                type="email"
                required
                placeholder="tu@email.com"
                className="min-h-14 flex-1 border border-white/20 bg-white/10 px-5 text-sm text-white outline-none placeholder:text-white/45 focus:border-[#f0dfbd]"
              />
              <button type="submit" className="min-h-14 bg-[#f0dfbd] px-6 text-[10px] font-black uppercase tracking-[0.14em] text-[#102b36] transition hover:bg-white active:scale-[0.97]">
                {language === "es" ? "Quiero el resumen" : "Send me the brief"}
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#071b23] py-12 text-[#9eb3b0]">
        <div className="container">
          <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <a href="#top" className="inline-flex items-center gap-3 text-white">
                <EditorialMark />
                <span className="font-display text-2xl font-black tracking-[-0.04em]">LAREDO<span className="text-[#e75037]">MAYOR</span></span>
              </a>
              <p className="mt-4 max-w-lg font-display text-xl italic text-[#d4dfdc]">{t.footerLine}</p>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-[9px] font-black uppercase tracking-[0.15em]">
              <a href="#bueno-malo" className="hover:text-white">{t.nav[0]}</a>
              <a href="#candidatos" className="hover:text-white">{t.nav[1]}</a>
              <a href="#agenda" className="hover:text-white">{t.nav[2]}</a>
              <a href="#anunciate" className="hover:text-white">Anúnciate</a>
            </div>
          </div>
          <div className="mt-7 flex flex-col gap-4 text-[11px] leading-5 md:flex-row md:items-start md:justify-between">
            <p className="max-w-3xl">{t.disclaimer}</p>
            <p className="shrink-0 font-mono text-[9px] uppercase tracking-widest">{t.updated}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
