import { ArrowRight, ArrowUpRight, CalendarDays, CheckCircle2, Clock3, ExternalLink, IdCard, MapPinned, ShieldCheck, Vote } from "lucide-react";
import DistrictBoundaryMap from "@/components/DistrictBoundaryMap";
import Seo from "@/components/Seo";
import { Breadcrumbs, PageShell } from "@/components/SiteChrome";

type Language = "en" | "es";

const links = {
  webb: "https://www.webbcountytx.gov/291/Elections-Department",
  voterPortal: "https://goelect.txelections.civixapps.com/ivis-mvp-ui/#/login",
  registration: "https://www.votetexas.gov/register-to-vote/update-voter-registration.html",
  stateWhere: "https://www.votetexas.gov/voting/where.html",
  districtMap: "https://www.google.com/maps/d/viewer?mid=1kotS9pzH-CoHjVFztrBKdqlJZqM4XhIs",
};

const copy = {
  en: {
    eyebrow: "Laredo voter map",
    title: "Find your district. Then find your vote center.",
    intro: "Use the interactive Plan E map to identify your City Council district. Then use Webb County or the Texas My Voter Portal for the current official polling location.",
    warning: "This map shows council boundaries—not live polling places.",
    warningText: "Voting locations can change. Always confirm the current site and hours with Webb County Elections before leaving to vote.",
    step: "Three steps to the right ballot",
    step1: "Confirm your registration",
    step1Text: "Use the Texas My Voter Portal with your name, county, date of birth, and ZIP code.",
    step2: "Identify your council district",
    step2Text: "Select the Plan E boundary below. District candidates appear only on ballots for residents of that district.",
    step3: "Confirm your voting location",
    step3Text: "Open Webb County Elections for the latest Early Voting and Election Day location list.",
    portal: "Open My Voter Portal",
    county: "Open Webb County Elections",
    mapTitle: "Explore all eight Laredo council districts",
    mapIntro: "The supplied KMZ references the adopted Plan E Google map. Boundaries are rendered here for easier mobile use.",
    keyDates: "2026 voting dates",
    register: "Registration deadline",
    earlyStarts: "Early voting begins",
    mail: "Mail-ballot application received by",
    earlyEnds: "Early voting ends",
    election: "Election Day",
    hours: "Election Day polls are open 7:00 a.m.–7:00 p.m. statewide.",
    checklist: "Before you go",
    checks: ["Confirm the location the same day", "Check operating hours", "Bring acceptable voter identification", "Review your sample ballot", "Allow extra time for parking or lines"],
    officialTools: "Official voter tools",
    stateGuide: "Texas polling-place guide",
    districtSource: "Open original Plan E map",
    sourceNote: "Official dates and voter guidance reviewed September 9, 2026.",
  },
  es: {
    eyebrow: "Mapa electoral de Laredo",
    title: "Encuentra tu distrito. Luego encuentra tu centro de votación.",
    intro: "Usa el mapa interactivo Plan E para identificar tu distrito del Concejo. Luego usa Webb County o My Voter Portal de Texas para confirmar el lugar oficial actual.",
    warning: "Este mapa muestra distritos, no centros de votación en vivo.",
    warningText: "Los lugares pueden cambiar. Confirma siempre el sitio y horario actual con Webb County Elections antes de salir a votar.",
    step: "Tres pasos para encontrar tu boleta",
    step1: "Confirma tu registro",
    step1Text: "Usa My Voter Portal de Texas con nombre, condado, fecha de nacimiento y código postal.",
    step2: "Identifica tu distrito",
    step2Text: "Selecciona el límite Plan E. Los candidatos distritales aparecen sólo para residentes de ese distrito.",
    step3: "Confirma tu centro de votación",
    step3Text: "Abre Webb County Elections para la lista más reciente de Votación Anticipada y Día de Elección.",
    portal: "Abrir My Voter Portal",
    county: "Abrir Webb County Elections",
    mapTitle: "Explora los ocho distritos del Concejo de Laredo",
    mapIntro: "El KMZ proporcionado enlaza al mapa adoptado Plan E. Los límites se muestran aquí para facilitar el uso móvil.",
    keyDates: "Fechas de votación 2026",
    register: "Fecha límite de registro",
    earlyStarts: "Comienza la votación anticipada",
    mail: "Solicitud de boleta por correo recibida antes de",
    earlyEnds: "Termina la votación anticipada",
    election: "Día de Elección",
    hours: "Las casillas abren de 7:00 a.m. a 7:00 p.m. en todo Texas.",
    checklist: "Antes de ir",
    checks: ["Confirma el lugar el mismo día", "Revisa el horario", "Lleva identificación aceptable", "Revisa tu boleta de muestra", "Reserva tiempo para estacionamiento o filas"],
    officialTools: "Herramientas oficiales",
    stateGuide: "Guía de lugares de votación de Texas",
    districtSource: "Abrir mapa Plan E original",
    sourceNote: "Fechas y orientación oficial revisadas el 9 de septiembre de 2026.",
  },
} as const;

export default function WhereToVote({ language = "en" }: { language?: Language }) {
  const t = copy[language];
  const path = language === "en" ? "/where-to-vote" : "/es/donde-votar";
  const alternatePath = language === "en" ? "/es/donde-votar" : "/where-to-vote";
  const dates = [
    [t.register, "October 5, 2026"],
    [t.earlyStarts, "October 19, 2026"],
    [t.mail, "October 23, 2026"],
    [t.earlyEnds, "October 30, 2026"],
    [t.election, "November 3, 2026"],
  ];
  const steps = [
    { title: t.step1, text: t.step1Text, href: links.voterPortal, icon: ShieldCheck },
    { title: t.step2, text: t.step2Text, href: "#district-map", icon: MapPinned },
    { title: t.step3, text: t.step3Text, href: links.webb, icon: Vote },
  ];

  return (
    <PageShell language={language}>
      <Seo language={language} alternatePath={alternatePath} title={language === "en" ? "Where to vote in Laredo for the November 3, 2026 election" : "Dónde votar en Laredo para la elección del 3 de noviembre de 2026"} description={t.intro} path={path} type="article" keywords={["where to vote Laredo 2026", "Laredo voting locations", "Webb County polling places", "Laredo council district map"]} schema={{ "@context": "https://schema.org", "@type": "WebPage", name: language === "en" ? "Where to Vote in Laredo in 2026" : "Dónde votar en Laredo en 2026", description: t.intro, url: `https://laredopolitics.com${path}`, about: { "@type": "Event", name: "Laredo November 3, 2026 Joint General Election", startDate: "2026-11-03", location: { "@type": "Place", name: "Laredo, Texas" } }, spatialCoverage: { "@type": "City", name: "Laredo", containedInPlace: { "@type": "State", name: "Texas" } } }} />

      <section className="relative overflow-hidden bg-[#102b36] py-16 text-white sm:py-24">
        <div className="grain absolute inset-0 opacity-20" />
        <div className="container relative">
          <p className="section-kicker section-kicker-light">{t.eyebrow}</p>
          <h1 className="mt-6 max-w-5xl font-display text-[clamp(3.4rem,8vw,7.2rem)] font-black leading-[0.86] tracking-[-0.07em]">{t.title}</h1>
          <p className="mt-7 max-w-3xl border-l-2 border-[#e75037] pl-5 text-base leading-7 text-[#cad7d4] sm:text-lg">{t.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3"><a href={links.voterPortal} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-3 bg-[#e75037] px-5 text-[9px] font-black uppercase tracking-[0.12em]">{t.portal}<ArrowUpRight className="h-4 w-4" /></a><a href={links.webb} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-3 border border-white/20 px-5 text-[9px] font-black uppercase tracking-[0.12em]">{t.county}<ArrowUpRight className="h-4 w-4" /></a></div>
        </div>
      </section>

      <section className="paper-texture py-16 sm:py-24">
        <div className="container">
          <Breadcrumbs language={language} items={[{ label: language === "en" ? "Election 2026" : "Elecciones 2026", href: language === "en" ? "/election-2026" : "/es/elecciones-2026" }, { label: language === "en" ? "Where to vote" : "Dónde votar" }]} />

          <section className="grid gap-4 lg:grid-cols-3">
            {steps.map((step, index) => <a key={step.title} href={step.href} target={step.href.startsWith("http") ? "_blank" : undefined} rel={step.href.startsWith("http") ? "noopener noreferrer" : undefined} className="group flex min-h-[245px] flex-col border border-[#102b36]/14 bg-[#fbf8f1] p-7 transition hover:-translate-y-1 hover:border-[#e75037]"><div className="flex items-start justify-between"><step.icon className="h-6 w-6 text-[#e75037]" /><span className="font-mono text-[9px] font-bold text-[#718083]">0{index + 1}</span></div><h2 className="mt-8 font-display text-3xl font-black tracking-[-0.04em]">{step.title}</h2><p className="mt-3 text-sm leading-6 text-[#5d7073]">{step.text}</p><ArrowRight className="mt-auto h-4 w-4 transition group-hover:translate-x-1" /></a>)}
          </section>

          <section className="mt-10 grid gap-6 bg-[#f0dfbd] p-7 lg:grid-cols-[auto_1fr] lg:items-center"><ShieldCheck className="h-8 w-8 text-[#e75037]" /><div><h2 className="font-display text-3xl font-black tracking-[-0.04em]">{t.warning}</h2><p className="mt-2 text-sm leading-6 text-[#4f6265]">{t.warningText}</p></div></section>

          <section id="district-map" className="mt-16">
            <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"><div><p className="section-kicker">{language === "en" ? "Interactive district map" : "Mapa distrital interactivo"}</p><h2 className="mt-5 font-display text-5xl font-black leading-[0.92] tracking-[-0.05em] sm:text-6xl">{t.mapTitle}</h2></div><p className="max-w-2xl border-l-2 border-[#e75037] pl-5 text-base leading-7 text-[#586a6d]">{t.mapIntro}</p></div>
            <div className="mt-10"><DistrictBoundaryMap language={language} /></div>
            <a href={links.districtMap} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.12em] text-[#e75037]">{t.districtSource}<ExternalLink className="h-4 w-4" /></a>
          </section>

          <section className="mt-16 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div><p className="section-kicker">{t.keyDates}</p><div className="mt-7 border-t border-[#102b36]/18">{dates.map(([label, date], index) => <div key={label} className="grid grid-cols-[38px_1fr_auto] items-center gap-4 border-b border-[#102b36]/18 py-5"><span className="font-mono text-[9px] font-bold text-[#e75037]">0{index + 1}</span><span className="font-display text-xl font-black">{label}</span><span className="text-right text-xs font-bold text-[#53676a]">{date}</span></div>)}</div><p className="mt-5 flex items-center gap-2 text-sm font-bold text-[#102b36]"><Clock3 className="h-4 w-4 text-[#e75037]" />{t.hours}</p></div>
            <div className="bg-[#102b36] p-7 text-white"><IdCard className="h-6 w-6 text-[#e75037]" /><h2 className="mt-5 font-display text-4xl font-black tracking-[-0.045em]">{t.checklist}</h2><div className="mt-6 space-y-4">{t.checks.map((check) => <p key={check} className="flex gap-3 text-sm leading-6 text-[#c3d2cf]"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#f0dfbd]" />{check}</p>)}</div></div>
          </section>

          <section className="mt-16"><p className="section-kicker">{t.officialTools}</p><div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[
            [t.portal, links.voterPortal, ShieldCheck], [t.county, links.webb, Vote], [t.stateGuide, links.stateWhere, MapPinned], [t.districtSource, links.districtMap, CalendarDays],
          ].map(([label, href, Icon]) => { const IconComponent = Icon as typeof Vote; return <a key={String(label)} href={String(href)} target="_blank" rel="noopener noreferrer" className="group flex min-h-40 flex-col border border-[#102b36]/14 bg-[#fbf8f1] p-5"><IconComponent className="h-5 w-5 text-[#e75037]" /><h3 className="mt-6 font-display text-2xl font-black tracking-[-0.03em]">{String(label)}</h3><ArrowUpRight className="mt-auto h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>; })}</div><p className="mt-5 text-[9px] text-[#718083]">{t.sourceNote}</p></section>
        </div>
      </section>
    </PageShell>
  );
}
