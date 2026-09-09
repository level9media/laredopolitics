import { ArrowUpRight, BarChart3, CalendarDays, FileCheck2, MapPinned, Vote } from "lucide-react";
import { officialCandidateSourceUrl, officialElectionResources, politicalForums } from "@/data/localRaces";

type Language = "en" | "es";

const copy = {
  en: {
    eyebrow: "Official City resources",
    title: "Forums, filings, ballots and maps.",
    intro: "These dates and links come from the City of Laredo's 2026 Candidates Information page. Open the City source for the latest official version.",
    forums: "2026 political forums",
    officialList: "Candidate list",
    officialListText: "Names, ballot order, treasurers and applications.",
    sample: "Sample ballots",
    sampleText: "Review the official ballot for your precinct.",
    finance: "Finance reports",
    financeText: "Open campaign-finance filings from the City.",
    map: "Where do I vote?",
    mapText: "Open the official GIS voting and district map.",
    precincts: "Precinct maps",
    precinctsText: "View the official precinct-map document.",
    source: "Open designated City source",
    october: "October",
  },
  es: {
    eyebrow: "Recursos oficiales de la Ciudad",
    title: "Foros, documentos, boletas y mapas.",
    intro: "Estas fechas y enlaces provienen de la página 2026 Candidates Information de la Ciudad de Laredo. Abre la fuente municipal para la versión oficial más reciente.",
    forums: "Foros políticos de 2026",
    officialList: "Lista de candidatos",
    officialListText: "Nombres, orden, tesoreros y solicitudes.",
    sample: "Boletas de muestra",
    sampleText: "Revisa la boleta oficial para tu precinto.",
    finance: "Reportes financieros",
    financeText: "Abre los registros de finanzas de campaña.",
    map: "¿Dónde voto?",
    mapText: "Abre el mapa GIS oficial de votación y distritos.",
    precincts: "Mapas de precintos",
    precinctsText: "Consulta el documento oficial de precintos.",
    source: "Abrir la fuente municipal designada",
    october: "Octubre",
  },
} as const;

const resources = (language: Language) => {
  const t = copy[language];
  return [
    { label: t.officialList, text: t.officialListText, href: officialElectionResources.candidates, icon: FileCheck2 },
    { label: t.sample, text: t.sampleText, href: officialElectionResources.sampleBallots, icon: Vote },
    { label: t.finance, text: t.financeText, href: officialElectionResources.financeReports, icon: BarChart3 },
    { label: t.map, text: t.mapText, href: officialElectionResources.votingMap, icon: MapPinned },
    { label: t.precincts, text: t.precinctsText, href: officialElectionResources.precinctMaps, icon: FileCheck2 },
  ];
};

export default function OfficialElectionResources({ language = "en" }: { language?: Language }) {
  const t = copy[language];

  return (
    <section className="paper-texture border-b border-[#102b36]/10 py-16 sm:py-24">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="section-kicker">{t.eyebrow}</p>
            <h2 className="mt-5 max-w-3xl font-display text-5xl font-black leading-[0.92] tracking-[-0.05em] sm:text-6xl">{t.title}</h2>
          </div>
          <div>
            <p className="max-w-2xl border-l-2 border-[#e75037] pl-5 text-base leading-7 text-[#586a6d]">{t.intro}</p>
            <a href={officialCandidateSourceUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.13em] text-[#e75037]">{t.source}<ArrowUpRight className="h-4 w-4" /></a>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <section className="bg-[#102b36] p-7 text-white sm:p-9">
            <div className="flex items-center gap-3"><CalendarDays className="h-6 w-6 text-[#e75037]" /><h3 className="font-display text-3xl font-black tracking-[-0.04em]">{t.forums}</h3></div>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {politicalForums.map((forum) => {
                const day = Number(forum.date.slice(-2));
                return (
                  <div key={`${forum.date}-${forum.time}`} className="grid grid-cols-[54px_1fr] gap-4 border border-white/12 bg-white/[0.045] p-4">
                    <div className="text-center"><span className="block font-display text-3xl font-black leading-none text-[#f0dfbd]">{day}</span><span className="mt-1 block text-[7px] font-black uppercase tracking-[0.12em] text-[#94aaa7]">{t.october}</span></div>
                    <div><p className="font-display text-xl font-black">{forum.race[language]}</p><p className="mt-2 font-mono text-[9px] uppercase tracking-[0.12em] text-[#e75037]">{forum.time}</p></div>
                  </div>
                );
              })}
            </div>
          </section>

          <div className="grid gap-3 sm:grid-cols-2">
            {resources(language).map((resource) => {
              const Icon = resource.icon;
              return (
                <a key={resource.label} href={resource.href} target="_blank" rel="noopener noreferrer" className="group flex min-h-[170px] flex-col border border-[#102b36]/14 bg-[#fbf8f1] p-5 transition hover:-translate-y-1 hover:border-[#e75037]">
                  <div className="flex items-start justify-between"><Icon className="h-5 w-5 text-[#e75037]" /><ArrowUpRight className="h-4 w-4 text-[#102b36] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></div>
                  <h3 className="mt-6 font-display text-2xl font-black tracking-[-0.03em]">{resource.label}</h3>
                  <p className="mt-2 text-xs leading-5 text-[#5b6d70]">{resource.text}</p>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
