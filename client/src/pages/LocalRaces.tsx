import {
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  FileText,
  Landmark,
  MapPinned,
  Scale,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";
import { Link } from "wouter";
import Seo, { SITE_URL } from "@/components/Seo";
import { AdUnit, Breadcrumbs, ContactMini, PageShell, SourceList } from "@/components/SiteChrome";
import {
  districtMapUrl,
  localRaces,
  officialCandidateSourceUrl,
  type LocalRace,
} from "@/data/localRaces";
import { candidateProfileHrefForName } from "@/data/localCandidateProfiles";

type Language = "en" | "es";

const copy = {
  en: {
    eyebrow: "City Council and municipal court",
    title: "Your official local races, district by district.",
    intro:
      "This section follows the City of Laredo 2026 Candidates Information table. Council races appear only for residents of that district; Municipal Court Judge is citywide.",
    districtNote: "Appears only on ballots for residents of this district",
    citywideNote: "Citywide contest",
    candidates: "Official candidates",
    open: "Open race guide",
    map: "Open the official voting and district map",
    guide: "2026 official candidate guide",
    listed: "Candidates listed by the City of Laredo",
    ballotLabel: "Name on ballot",
    legalName: "Full legal name",
    treasurer: "Campaign treasurer",
    treasurerFiling: "Open treasurer filing",
    application: "Open ballot application",
    profile: "Profile and questionnaire",
    fairness: "The City table controls the candidate list",
    fairnessText:
      "Names, ballot order, legal names, campaign treasurers, and application links on this page come from the City of Laredo's designated 2026 candidate page. Editorial profiles and analysis are kept separate from those official filing facts.",
    questions: "What this guide will track",
    questionItems: [
      "Relevant public, professional, and civic experience",
      "Published priorities and measurable commitments",
      "Campaign-finance reports and primary-source documents",
      "Answers on district services, infrastructure, public safety, and transparency",
    ],
    verify: "Verify your district before voting",
    verifyText:
      "Council candidates do not appear on every Laredo ballot. Confirm your district and review the official sample ballot before Election Day.",
    official: "Open official voting map",
    updated: "Official candidate list reviewed September 9, 2026",
    verified: "City list verified",
    photoCaption:
      "Ballot-order drawing photo supplied by the publisher. The candidate list and order shown on this page follow the current City of Laredo candidate table.",
    sourceBanner: "Primary source for this page",
    sourceCta: "Open 2026 Candidates Information",
  },
  es: {
    eyebrow: "Concejo Municipal y tribunal municipal",
    title: "Tus contiendas locales oficiales, distrito por distrito.",
    intro:
      "Esta sección sigue la tabla 2026 Candidates Information de la Ciudad de Laredo. Las contiendas del Concejo aparecen sólo para residentes del distrito; Juez Municipal es de toda la ciudad.",
    districtNote: "Aparece sólo en boletas de residentes de este distrito",
    citywideNote: "Contienda de toda la ciudad",
    candidates: "Candidatos oficiales",
    open: "Abrir guía de la contienda",
    map: "Abrir el mapa oficial de votación y distritos",
    guide: "Guía oficial de candidatos 2026",
    listed: "Candidatos listados por la Ciudad de Laredo",
    ballotLabel: "Nombre en la boleta",
    legalName: "Nombre legal completo",
    treasurer: "Tesorero de campaña",
    treasurerFiling: "Abrir registro del tesorero",
    application: "Abrir solicitud para la boleta",
    profile: "Perfil y cuestionario",
    fairness: "La tabla municipal controla la lista",
    fairnessText:
      "Los nombres, el orden, los nombres legales, los tesoreros y los enlaces de solicitudes provienen de la página municipal designada. Los perfiles y el análisis editorial se mantienen separados de esos datos oficiales.",
    questions: "Lo que seguirá esta guía",
    questionItems: [
      "Experiencia pública, profesional y cívica relevante",
      "Prioridades publicadas y compromisos medibles",
      "Reportes financieros de campaña y documentos primarios",
      "Respuestas sobre servicios distritales, infraestructura, seguridad y transparencia",
    ],
    verify: "Confirma tu distrito antes de votar",
    verifyText:
      "Los candidatos al Concejo no aparecen en todas las boletas. Confirma tu distrito y revisa la boleta oficial antes del Día de Elección.",
    official: "Abrir mapa oficial de votación",
    updated: "Lista oficial revisada el 9 de septiembre de 2026",
    verified: "Lista municipal verificada",
    photoCaption:
      "Foto del sorteo proporcionada por el editor. La lista y el orden publicados en esta página siguen la tabla actual de la Ciudad de Laredo.",
    sourceBanner: "Fuente primaria de esta página",
    sourceCta: "Abrir 2026 Candidates Information",
  },
} as const;

function raceHref(race: LocalRace, language: Language) {
  return `${language === "es" ? "/es/elecciones-2026" : "/election-2026"}/${race.slug}`;
}

export function LocalRacesGrid({ language = "en", limit }: { language?: Language; limit?: number }) {
  const t = copy[language];
  const races = typeof limit === "number" ? localRaces.slice(0, limit) : localRaces;

  return (
    <section className="mt-16">
      <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
        <div>
          <p className="section-kicker">{t.eyebrow}</p>
          <h2 className="mt-5 font-display text-5xl font-black leading-[0.92] tracking-[-0.05em] sm:text-6xl">{t.title}</h2>
        </div>
        <div>
          <p className="max-w-2xl border-l-2 border-[#e75037] pl-5 text-base leading-7 text-[#586a6d]">{t.intro}</p>
          <div className="mt-6 flex flex-wrap gap-5">
            <a href={officialCandidateSourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.13em] text-[#102b36] hover:text-[#e75037]">
              {t.sourceCta} <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href={districtMapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.13em] text-[#102b36] hover:text-[#e75037]">
              {t.map} <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {races.map((race, index) => (
          <Link key={race.slug} href={raceHref(race, language)} className="group flex min-h-[330px] flex-col border border-[#102b36]/14 bg-[#fbf8f1] p-6 shadow-[0_15px_45px_rgba(16,43,54,0.07)] transition duration-300 hover:-translate-y-1 hover:border-[#e75037] hover:shadow-[0_22px_55px_rgba(16,43,54,0.12)]">
            <div className="flex items-start justify-between">
              <span className="grid h-12 w-12 place-items-center bg-[#102b36] text-white">{race.type === "district" ? <MapPinned className="h-5 w-5" /> : <Scale className="h-5 w-5" />}</span>
              <span className="font-mono text-[9px] font-bold text-[#e75037]">0{index + 1}</span>
            </div>
            <p className="mt-7 text-[8px] font-black uppercase tracking-[0.15em] text-[#e75037]">{race.type === "district" ? t.districtNote : t.citywideNote}</p>
            <h3 className="mt-3 font-display text-3xl font-black leading-none tracking-[-0.04em]">{race.shortTitle[language]}</h3>
            <p className="mt-4 text-sm leading-6 text-[#5c6d70]">{race.description[language]}</p>
            <span className="mt-4 inline-flex w-fit bg-[#dce9df] px-2.5 py-1 text-[7px] font-black uppercase tracking-[0.12em] text-[#24613c]">{t.verified}</span>
            <div className="mt-5 flex -space-x-2">
              {race.candidates.map((candidate) => (
                <span key={candidate.ballotName} title={candidate.fullName} className="grid h-9 w-9 place-items-center rounded-full border-2 border-[#fbf8f1] bg-[#e9e2d5] font-mono text-[8px] font-black text-[#102b36]">
                  {candidate.fullName.split(" ").slice(0, 2).map((part) => part[0]).join("")}
                </span>
              ))}
            </div>
            <span className="mt-auto flex items-center justify-between border-t border-[#102b36]/12 pt-5 text-[9px] font-black uppercase tracking-[0.12em]">{t.open} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function LocalRacePage({ slug, language = "en" }: { slug: string; language?: Language }) {
  const race = localRaces.find((item) => item.slug === slug);
  const t = copy[language];
  if (!race) return null;

  const path = raceHref(race, language);
  const alternatePath = raceHref(race, language === "en" ? "es" : "en");
  const candidatesText = race.candidates.map((candidate) => candidate.fullName).join(", ");
  const schema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: `${race.title[language]} 2026 election`,
    startDate: "2026-11-03",
    eventStatus: "https://schema.org/EventScheduled",
    location: { "@type": "Place", name: "Laredo, Texas" },
    url: `${SITE_URL}${path}`,
    performer: race.candidates.map((candidate) => ({ "@type": "Person", name: candidate.fullName })),
  };

  return (
    <PageShell language={language}>
      <Seo language={language} alternatePath={alternatePath} image={race.evidenceImage} title={`${race.title[language]} 2026: candidates and voter guide`} description={`${race.description[language]} ${t.candidates}: ${candidatesText}.`} path={path} type="article" keywords={[`${race.title.en} candidates 2026`, "Laredo local elections", "Laredo politics", ...race.candidates.map((candidate) => candidate.fullName)]} schema={schema} />

      <section className="relative overflow-hidden bg-[#102b36] py-16 text-white sm:py-24">
        <div className="grain absolute inset-0 opacity-20" />
        <div className="absolute -right-24 -top-32 h-96 w-96 rounded-full border-[64px] border-[#f0dfbd]/[0.06]" />
        <div className="container relative">
          <p className="section-kicker section-kicker-light">{t.guide}</p>
          <h1 className="mt-6 max-w-5xl font-display text-[clamp(3rem,7vw,6.5rem)] font-black leading-[0.9] tracking-[-0.06em]">{race.title[language]}</h1>
          <p className="mt-7 max-w-3xl border-l-2 border-[#e75037] pl-5 text-base leading-7 text-[#cad7d4] sm:text-lg">{race.description[language]}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="bg-[#f0dfbd] px-3 py-2 text-[8px] font-black uppercase tracking-[0.13em] text-[#102b36]">{language === "en" ? "November 3, 2026" : "3 de noviembre de 2026"}</span>
            <span className="border border-white/20 px-3 py-2 text-[8px] font-black uppercase tracking-[0.13em]">{race.type === "district" ? t.districtNote : t.citywideNote}</span>
          </div>
          <p className="mt-5 font-mono text-[8px] uppercase tracking-[0.12em] text-[#9eb3b0]">{t.updated}</p>
        </div>
      </section>

      <section className="paper-texture py-16 sm:py-24">
        <div className="container">
          <Breadcrumbs language={language} items={[{ label: language === "en" ? "Election 2026" : "Elecciones 2026", href: language === "en" ? "/election-2026" : "/es/elecciones-2026" }, { label: race.shortTitle[language] }]} />

          <a href={officialCandidateSourceUrl} target="_blank" rel="noopener noreferrer" className="mb-10 flex items-center justify-between gap-4 bg-[#f0dfbd] p-5 text-[#102b36] transition hover:bg-[#ead3a6]">
            <div className="flex items-center gap-4"><ShieldCheck className="h-6 w-6 text-[#e75037]" /><div><p className="text-[8px] font-black uppercase tracking-[0.14em]">{t.sourceBanner}</p><p className="mt-1 font-display text-xl font-black">City of Laredo · 2026 Candidates Information</p></div></div>
            <ArrowUpRight className="h-5 w-5 shrink-0" />
          </a>

          <div className="grid gap-10 lg:grid-cols-[1fr_330px] lg:gap-16">
            <article className="space-y-14">
              <section>
                <p className="section-kicker">{t.listed}</p>
                <div className="mt-7 grid gap-4 md:grid-cols-2">
                  {race.candidates.map((candidate, index) => (
                    <div key={candidate.ballotName} className="flex flex-col border border-[#102b36]/14 bg-[#fbf8f1] p-6">
                      <div className="flex items-start justify-between">
                        <span className="grid h-12 w-12 place-items-center rounded-full bg-[#102b36] font-display text-lg font-black text-[#f0dfbd]">{candidate.fullName.split(" ").slice(0, 2).map((part) => part[0]).join("")}</span>
                        <span className="font-mono text-[9px] font-bold text-[#e75037]">0{index + 1}</span>
                      </div>
                      <p className="mt-6 text-[8px] font-black uppercase tracking-[0.14em] text-[#718083]">{t.ballotLabel}: {candidate.ballotName}</p>
                      <h2 className="mt-3 font-display text-3xl font-black leading-none tracking-[-0.035em]">{candidate.fullName}</h2>
                      <p className="mt-4 text-sm leading-6 text-[#5c6d70]">{candidate.context[language]}</p>
                      <dl className="mt-6 border-t border-[#102b36]/12 pt-5">
                        <dt className="text-[8px] font-black uppercase tracking-[0.13em] text-[#718083]">{t.treasurer}</dt>
                        <dd className="mt-2 font-display text-lg font-black">{candidate.campaignTreasurer}</dd>
                      </dl>
                      <div className="mt-6 grid gap-2">
                        <Link href={candidateProfileHrefForName(candidate.fullName, language)} className="flex min-h-11 items-center justify-between bg-[#e75037] px-4 text-[8px] font-black uppercase tracking-[0.12em] text-white">{t.profile}<ArrowRight className="h-4 w-4" /></Link>
                        <a href={candidate.treasurerUrl} target="_blank" rel="noopener noreferrer" className="flex min-h-11 items-center justify-between bg-[#102b36] px-4 text-[8px] font-black uppercase tracking-[0.12em] text-white">{t.treasurerFiling}<UserRoundCheck className="h-4 w-4 text-[#f0dfbd]" /></a>
                        <a href={candidate.applicationUrl} target="_blank" rel="noopener noreferrer" className="flex min-h-11 items-center justify-between border border-[#102b36]/20 px-4 text-[8px] font-black uppercase tracking-[0.12em] text-[#102b36]">{t.application}<FileText className="h-4 w-4 text-[#e75037]" /></a>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-[#102b36] p-7 text-white">
                <ShieldCheck className="h-6 w-6 text-[#e75037]" />
                <h2 className="mt-6 font-display text-4xl font-black tracking-[-0.045em]">{t.fairness}</h2>
                <p className="mt-4 max-w-3xl text-sm leading-6 text-[#bccdca]">{t.fairnessText}</p>
              </section>

              <section>
                <p className="section-kicker">{t.questions}</p>
                <div className="mt-7 border-t border-[#102b36]/18">
                  {t.questionItems.map((item, index) => (
                    <div key={item} className="grid grid-cols-[42px_1fr] gap-4 border-b border-[#102b36]/18 py-5">
                      <span className="font-mono text-xs font-bold text-[#e75037]">0{index + 1}</span>
                      <p className="font-display text-xl font-bold">{item}</p>
                    </div>
                  ))}
                </div>
              </section>

              <SourceList language={language} sources={race.sources} />
            </article>

            <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
              {race.evidenceImage && (
                <figure className="border border-[#102b36]/14 bg-[#fbf8f1] p-3 shadow-[0_18px_50px_rgba(16,43,54,0.12)]">
                  <img src={race.evidenceImage} alt={`${race.title[language]} candidate drawing board`} className="aspect-[4/5] w-full object-cover" loading="eager" />
                  <figcaption className="px-2 pb-1 pt-3 text-[9px] leading-4 text-[#68797c]">{t.photoCaption}</figcaption>
                </figure>
              )}
              <section className="bg-[#e75037] p-7 text-white">
                <Landmark className="h-6 w-6 text-[#102b36]" />
                <h2 className="mt-5 font-display text-3xl font-black tracking-[-0.04em]">{t.verify}</h2>
                <p className="mt-3 text-sm leading-6 text-white/85">{t.verifyText}</p>
                <a href={districtMapUrl} target="_blank" rel="noopener noreferrer" className="mt-6 flex items-center justify-between text-[9px] font-black uppercase tracking-[0.12em]">{t.official}<ExternalLink className="h-4 w-4" /></a>
              </section>
              <AdUnit language={language} />
              <ContactMini language={language} />
            </aside>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
