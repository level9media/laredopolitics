import { ArrowRight, MapPinned, Scale, Vote } from "lucide-react";
import { Link } from "wouter";
import { localRaces, mayorBallot, officialCandidateSourceUrl } from "@/data/localRaces";

type Language = "en" | "es";

const copy = {
  en: {
    eyebrow: "Official City candidate list",
    title: "The complete 2026 ballot list.",
    intro: "The mayoral race is citywide. City Council contests appear only for voters who live in that district. Municipal Court Judge, Position 1 is citywide.",
    mayor: "Mayor",
    citywide: "Citywide",
    districtOnly: "District voters only",
    open: "Open guide",
    treasurer: "Treasurer",
    official: "View the City source",
    disclaimer: "Names and ballot order match the City of Laredo's 2026 Candidates Information page. That official table lists Mayor, City Council Districts 1, 2, 3 and 6, and Municipal Court Judge Position 1.",
  },
  es: {
    eyebrow: "Lista oficial de candidatos de la Ciudad",
    title: "La lista completa de la boleta 2026.",
    intro: "La alcaldía es para toda la ciudad. Las contiendas del Concejo aparecen sólo para quienes viven en ese distrito. Juez Municipal, Puesto 1, es de toda la ciudad.",
    mayor: "Alcalde",
    citywide: "Toda la ciudad",
    districtOnly: "Sólo votantes del distrito",
    open: "Abrir guía",
    treasurer: "Tesorero",
    official: "Ver la fuente municipal",
    disclaimer: "Los nombres y el orden coinciden con la página 2026 Candidates Information de la Ciudad de Laredo. Esa tabla oficial incluye Alcalde, Distritos 1, 2, 3 y 6 del Concejo y Juez Municipal, Puesto 1.",
  },
} as const;

function raceHref(slug: string, language: Language) {
  return `${language === "es" ? "/es/elecciones-2026" : "/election-2026"}/${slug}`;
}

function CandidateList({ candidates, treasurerLabel }: { candidates: Array<{ ballotName: string; fullName: string; campaignTreasurer: string }>; treasurerLabel: string }) {
  return (
    <ol className="mt-5 space-y-2.5">
      {candidates.map((candidate, index) => (
        <li key={candidate.ballotName} className="grid grid-cols-[28px_1fr] gap-2 border-t border-current/10 pt-2.5">
          <span className="font-mono text-[9px] font-bold text-[#e75037]">{String(index + 1).padStart(2, "0")}</span>
          <span><span className="block font-display text-[17px] font-black leading-tight tracking-[-0.025em]">{candidate.ballotName}</span><span className="mt-1 block text-[8px] leading-4 text-current/65">{candidate.fullName} · {treasurerLabel}: {candidate.campaignTreasurer}</span></span>
        </li>
      ))}
    </ol>
  );
}

export default function BallotSnapshot({ language = "en", compact = false }: { language?: Language; compact?: boolean }) {
  const t = copy[language];
  return (
    <section className={`relative overflow-hidden bg-[#0c2631] text-white ${compact ? "py-14" : "py-20 sm:py-24"}`} aria-labelledby="ballot-snapshot-title">
      <div className="grain absolute inset-0 opacity-20" />
      <div className="absolute -right-28 -top-36 h-96 w-96 rounded-full border-[70px] border-[#f0dfbd]/[0.04]" />
      <div className="container relative">
        <div className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="section-kicker section-kicker-light">{t.eyebrow}</p>
            <h2 id="ballot-snapshot-title" className="mt-5 max-w-3xl font-display text-5xl font-black leading-[0.9] tracking-[-0.055em] sm:text-7xl">{t.title}</h2>
          </div>
          <p className="max-w-2xl border-l-2 border-[#e75037] pl-5 text-sm leading-6 text-[#c3d1cf] sm:text-base">{t.intro}</p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <Link href={language === "es" ? "/es/candidatos" : "/candidatos"} className="group flex flex-col bg-[#f0dfbd] p-6 text-[#102b36] shadow-[7px_7px_0_#e75037] transition duration-200 hover:-translate-y-1">
            <div className="flex items-center justify-between"><Vote className="h-5 w-5 text-[#e75037]" /><span className="text-[8px] font-black uppercase tracking-[0.13em]">{t.citywide}</span></div>
            <h3 className="mt-5 font-display text-3xl font-black tracking-[-0.04em]">{t.mayor}</h3>
            <CandidateList candidates={mayorBallot.candidates} treasurerLabel={t.treasurer} />
            <span className="mt-auto flex items-center justify-between pt-6 text-[9px] font-black uppercase tracking-[0.13em]">{t.open}<ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
          </Link>

          {localRaces.map((race) => (
            <Link key={race.slug} href={raceHref(race.slug, language)} className="group flex flex-col border border-white/12 bg-white/[0.055] p-6 backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:border-[#e75037]/70 hover:bg-white/[0.08]">
              <div className="flex items-center justify-between">{race.type === "district" ? <MapPinned className="h-5 w-5 text-[#e75037]" /> : <Scale className="h-5 w-5 text-[#e75037]" />}<span className="text-[8px] font-black uppercase tracking-[0.13em] text-[#a9bcba]">{race.type === "district" ? t.districtOnly : t.citywide}</span></div>
              <h3 className="mt-5 font-display text-3xl font-black tracking-[-0.04em]">{race.shortTitle[language]}</h3>
              <CandidateList candidates={race.candidates} treasurerLabel={t.treasurer} />
              <div className="mt-auto pt-6">
                <span className="flex items-center justify-between text-[9px] font-black uppercase tracking-[0.13em] text-[#f0dfbd]">{t.open}<ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4"><p className="max-w-4xl text-[10px] leading-5 text-[#91a8a5]">{t.disclaimer}</p><a href={officialCandidateSourceUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.13em] text-[#f0dfbd]">{t.official}<ArrowRight className="h-4 w-4" /></a></div>
      </div>
    </section>
  );
}
