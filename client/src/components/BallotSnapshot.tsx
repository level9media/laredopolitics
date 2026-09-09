import { ArrowRight, MapPinned, Scale, Vote } from "lucide-react";
import { Link } from "wouter";
import { localRaces, mayorBallot, nonElectionDistricts } from "@/data/localRaces";

type Language = "en" | "es";

const copy = {
  en: {
    eyebrow: "District directory + 2026 ballot",
    title: "Every district. Every 2026 race.",
    intro: "The mayoral race is citywide. City Council contests appear only for voters who live in that district. Municipal Court Judge, Position 1 is citywide.",
    mayor: "Mayor",
    citywide: "Citywide",
    districtOnly: "District voters only",
    notOnBallot: "Not on the 2026 general-election ballot",
    currentMember: "Current council member",
    districtInfo: "District information",
    open: "Open guide",
    disclaimer: "The City of Laredo lists Districts 1, 2, 3 and 6 for the November 3, 2026 general election. Districts 4, 5, 7 and 8 are shown for a complete citywide district directory but are not on this general-election ballot. Names follow the supplied drawing boards; Districts 1 and 6 include visible verification notices where current public records require another check.",
  },
  es: {
    eyebrow: "Directorio de distritos + boleta 2026",
    title: "Cada distrito. Cada contienda de 2026.",
    intro: "La alcaldía es para toda la ciudad. Las contiendas del Concejo aparecen sólo para quienes viven en ese distrito. Juez Municipal, Puesto 1, es de toda la ciudad.",
    mayor: "Alcalde",
    citywide: "Toda la ciudad",
    districtOnly: "Sólo votantes del distrito",
    notOnBallot: "No aparece en la elección general de 2026",
    currentMember: "Concejal actual",
    districtInfo: "Información del distrito",
    open: "Abrir guía",
    disclaimer: "La Ciudad de Laredo incluye los Distritos 1, 2, 3 y 6 en la elección general del 3 de noviembre de 2026. Los Distritos 4, 5, 7 y 8 aparecen para completar el directorio municipal, pero no están en esta boleta de elección general. Los nombres siguen los tableros proporcionados; los Distritos 1 y 6 incluyen avisos de verificación.",
  },
} as const;

function raceHref(slug: string, language: Language) {
  return `${language === "es" ? "/es/elecciones-2026" : "/election-2026"}/${slug}`;
}

function CandidateList({ names }: { names: string[] }) {
  return (
    <ol className="mt-5 space-y-2.5">
      {names.map((name, index) => (
        <li key={name} className="grid grid-cols-[28px_1fr] gap-2 border-t border-current/10 pt-2.5">
          <span className="font-mono text-[9px] font-bold text-[#e75037]">{String(index + 1).padStart(2, "0")}</span>
          <span className="font-display text-[17px] font-black leading-tight tracking-[-0.025em]">{name}</span>
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
            <CandidateList names={mayorBallot.candidates} />
            <span className="mt-auto flex items-center justify-between pt-6 text-[9px] font-black uppercase tracking-[0.13em]">{t.open}<ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
          </Link>

          {localRaces.map((race) => (
            <Link key={race.slug} href={raceHref(race.slug, language)} className="group flex flex-col border border-white/12 bg-white/[0.055] p-6 backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:border-[#e75037]/70 hover:bg-white/[0.08]">
              <div className="flex items-center justify-between">{race.type === "district" ? <MapPinned className="h-5 w-5 text-[#e75037]" /> : <Scale className="h-5 w-5 text-[#e75037]" />}<span className="text-[8px] font-black uppercase tracking-[0.13em] text-[#a9bcba]">{race.type === "district" ? t.districtOnly : t.citywide}</span></div>
              <h3 className="mt-5 font-display text-3xl font-black tracking-[-0.04em]">{race.shortTitle[language]}</h3>
              <CandidateList names={race.candidates.map((candidate) => candidate.ballotName)} />
              <div className="mt-auto pt-6">
                {race.verificationStatus === "needs_confirmation" && <span className="mb-4 block w-fit bg-[#f7dfd8] px-2 py-1 text-[7px] font-black uppercase tracking-[0.11em] text-[#9e301e]">{language === "en" ? "Official recheck noted" : "Revisión oficial indicada"}</span>}
                <span className="flex items-center justify-between text-[9px] font-black uppercase tracking-[0.13em] text-[#f0dfbd]">{t.open}<ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
              </div>
            </Link>
          ))}

          {nonElectionDistricts.map((district) => (
            <a key={district.district} href="https://www.cityoflaredo.com/government/mayor-city-council/city-council-districts" target="_blank" rel="noopener noreferrer" className="group flex flex-col border border-white/10 bg-[#071b23]/70 p-6 text-white/80 transition duration-200 hover:-translate-y-1 hover:border-[#f0dfbd]/40">
              <div className="flex items-start justify-between gap-4"><MapPinned className="h-5 w-5 text-[#79908d]" /><span className="max-w-[190px] text-right text-[7px] font-black uppercase leading-4 tracking-[0.12em] text-[#91a8a5]">{t.notOnBallot}</span></div>
              <h3 className="mt-5 font-display text-3xl font-black tracking-[-0.04em] text-white">{language === "es" ? "Distrito" : "District"} {district.district}</h3>
              <p className="mt-5 text-[8px] font-black uppercase tracking-[0.13em] text-[#91a8a5]">{t.currentMember}</p>
              <p className="mt-2 font-display text-xl font-black text-[#d8e2df]">{district.currentMember}</p>
              <span className="mt-auto flex items-center justify-between pt-7 text-[9px] font-black uppercase tracking-[0.13em] text-[#f0dfbd]">{t.districtInfo}<ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
            </a>
          ))}
        </div>
        <p className="mt-8 max-w-4xl text-[10px] leading-5 text-[#91a8a5]">{t.disclaimer}</p>
      </div>
    </section>
  );
}
