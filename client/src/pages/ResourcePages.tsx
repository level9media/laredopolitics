import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  CircleAlert,
  FileCheck2,
  Landmark,
  Search,
  ShieldCheck,
  ThumbsDown,
  ThumbsUp,
  Vote,
} from "lucide-react";
import { Link } from "wouter";
import { toast } from "sonner";
import Seo, { SITE_URL } from "@/components/Seo";
import { AdUnit, Breadcrumbs, ContactMini, PageShell, SourceList } from "@/components/SiteChrome";
import { candidates, issues, votingResources, type Candidate, type Issue } from "@/data/resources";
import { LocalRacesGrid } from "@/pages/LocalRaces";
import BallotSnapshot from "@/components/BallotSnapshot";
import OfficialElectionResources from "@/components/OfficialElectionResources";

function PageHero({ eyebrow, title, description, children }: { eyebrow: string; title: string; description: string; children?: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-[#102b36] py-16 text-white sm:py-24">
      <div className="grain absolute inset-0 opacity-20" />
      <div className="absolute -right-28 -top-40 h-[30rem] w-[30rem] rounded-full border-[70px] border-[#f0dfbd]/[0.06]" />
      <div className="container relative">
        <p className="section-kicker section-kicker-light">{eyebrow}</p>
        <h1 className="mt-6 max-w-5xl font-display text-[clamp(3rem,7vw,6.8rem)] font-black leading-[0.88] tracking-[-0.06em]">{title}</h1>
        <p className="mt-7 max-w-3xl border-l-2 border-[#e75037] pl-5 text-base leading-7 text-[#cad7d4] sm:text-lg">{description}</p>
        {children}
      </div>
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="section-kicker">{children}</p>;
}

function CandidateCard({ candidate }: { candidate: Candidate }) {
  return (
    <Link href={`/es/candidatos/${candidate.slug}`} className="group flex min-h-[410px] flex-col overflow-hidden border border-[#102b36]/14 bg-[#fbf8f1] shadow-[0_16px_50px_rgba(16,43,54,0.07)] transition duration-300 hover:-translate-y-1 hover:border-[#e75037] hover:shadow-[0_22px_60px_rgba(16,43,54,0.12)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#102b36]">
        {candidate.photoUrl ? <img src={candidate.photoUrl} alt={candidate.photoAlt || `Retrato de ${candidate.name}`} className="h-full w-full object-cover object-top grayscale-[10%] transition duration-500 group-hover:scale-[1.025] group-hover:grayscale-0" /> : <span className="grid h-full w-full place-items-center font-display text-5xl font-black text-[#f0dfbd]">{candidate.initials}</span>}
        <ArrowUpRight className="absolute right-4 top-4 h-5 w-5 text-white drop-shadow-md transition group-hover:-translate-y-1 group-hover:translate-x-1" />
      </div>
      <div className="flex flex-1 flex-col p-6"><p className="text-[8px] font-black uppercase tracking-[0.17em] text-[#748285]">En la boleta: {candidate.ballotName}</p><h2 className="mt-3 font-display text-3xl font-black leading-[0.98] tracking-[-0.04em]">{candidate.name}</h2><p className="mt-3 text-[10px] font-bold uppercase tracking-[0.1em] text-[#e75037]">{candidate.role}</p><p className="mt-5 text-sm leading-6 text-[#596b6e]">{candidate.summary}</p><span className="mt-auto border-t border-[#102b36]/12 pt-5 text-[9px] font-black uppercase tracking-[0.13em]">Ver expediente completo</span></div>
    </Link>
  );
}

export function CandidateHub() {
  return (
    <PageShell language="es">
      <Seo
        language="es"
        title="Candidatos a alcalde de Laredo 2026"
        description="Conoce a todos los candidatos a alcalde de Laredo en 2026: biografías, experiencia, prioridades, fuentes y preguntas pendientes."
        path="/es/candidatos"
        keywords={["candidatos alcalde Laredo 2026", "Laredo mayor candidates", "elecciones Laredo"]}
        schema={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Candidatos a alcalde de Laredo 2026", url: `${SITE_URL}/es/candidatos` }}
      />
      <PageHero eyebrow="Elección municipal 2026" title="Conoce a los candidatos." description="Cinco personas buscan dirigir Laredo. Cada expediente usa la misma estructura, separa hechos de promesas y enlaza a las fuentes originales.">
        <Link href="/es/comparar-candidatos" className="mt-8 inline-flex items-center gap-3 bg-[#e75037] px-6 py-4 text-[10px] font-black uppercase tracking-[0.13em] text-white shadow-[5px_5px_0_#f0dfbd]">Comparar lado a lado <ArrowRight className="h-4 w-4" /></Link>
      </PageHero>
      <section className="paper-texture py-16 sm:py-24">
        <div className="container">
          <Breadcrumbs language="es" items={[{ label: "Candidatos" }]} />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">{candidates.map((candidate) => <CandidateCard key={candidate.slug} candidate={candidate} />)}</div>
          <div className="mt-10"><AdUnit language="es" /></div>
        </div>
      </section>
    </PageShell>
  );
}

export function CandidatePage({ slug }: { slug: string }) {
  const candidate = candidates.find((item) => item.slug === slug);
  if (!candidate) return <MissingResource />;

  const candidateSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: candidate.name,
    description: candidate.summary,
    ...(candidate.photoUrl ? { image: `${SITE_URL}${candidate.photoUrl}` } : {}),
    url: `${SITE_URL}/es/candidatos/${candidate.slug}`,
  };

  return (
    <PageShell language="es">
      <Seo
        language="es"
        title={`${candidate.name}: perfil y posiciones para alcalde de Laredo 2026`}
        description={`${candidate.summary} Revisa experiencia, prioridades, Lo Bueno, Lo Malo, preguntas y fuentes.`}
        path={`/es/candidatos/${candidate.slug}`}
        image={candidate.photoUrl}
        type="article"
        keywords={[candidate.name, `${candidate.name} Laredo mayor`, `${candidate.name} alcalde Laredo 2026`, "Laredo mayor candidates"]}
        schema={candidateSchema}
      />
      <PageHero eyebrow="Expediente del candidato" title={candidate.name} description={candidate.summary}>
        {candidate.photoUrl && <figure className="mt-8 w-44 overflow-hidden border border-white/20 bg-[#071b23]"><img src={candidate.photoUrl} alt={candidate.photoAlt || `Retrato de ${candidate.name}`} className="aspect-[4/3] w-full object-cover object-top" />{candidate.photoCredit && <figcaption className="px-3 py-2 text-[7px] uppercase tracking-[0.1em] text-[#9eb3b0]">Foto: {candidate.photoCredit}</figcaption>}</figure>}
        <div className="mt-8 flex flex-wrap gap-3 text-[9px] font-black uppercase tracking-[0.13em]">
          <span className="bg-[#f0dfbd] px-3 py-2 text-[#102b36]">Boleta: {candidate.ballotName}</span>
          <span className="border border-white/20 px-3 py-2 text-white">{candidate.role}</span>
        </div>
        {candidate.verifiedAsOf && <p className="mt-5 font-mono text-[9px] uppercase tracking-[0.13em] text-[#9eb3b0]">Expediente verificado al {candidate.verifiedAsOf}</p>}
      </PageHero>

      <section className="paper-texture py-16 sm:py-24">
        <div className="container">
          <Breadcrumbs language="es" items={[{ label: "Candidatos", href: "/es/candidatos" }, { label: candidate.name }]} />
          <div className="grid gap-10 lg:grid-cols-[1fr_330px] lg:gap-16">
            <article className="space-y-16">
              <section>
                <Eyebrow>Registro oficial de la Ciudad</Eyebrow>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="border border-[#102b36]/14 bg-[#fbf8f1] p-6"><p className="text-[8px] font-black uppercase tracking-[0.14em] text-[#718083]">Nombre legal completo</p><p className="mt-3 font-display text-2xl font-black">{candidate.officialFullName}</p></div>
                  <div className="border border-[#102b36]/14 bg-[#fbf8f1] p-6"><p className="text-[8px] font-black uppercase tracking-[0.14em] text-[#718083]">Tesorero de campaña</p><p className="mt-3 font-display text-2xl font-black">{candidate.campaignTreasurer}</p></div>
                </div>
                <div className="mt-3 grid gap-3 sm:grid-cols-2"><a href={candidate.treasurerUrl} target="_blank" rel="noopener noreferrer" className="flex min-h-12 items-center justify-between bg-[#102b36] px-5 text-[9px] font-black uppercase tracking-[0.12em] text-white">Abrir registro del tesorero <ArrowUpRight className="h-4 w-4 text-[#f0dfbd]" /></a><a href={candidate.applicationUrl} target="_blank" rel="noopener noreferrer" className="flex min-h-12 items-center justify-between border border-[#102b36]/20 bg-white px-5 text-[9px] font-black uppercase tracking-[0.12em]">Abrir solicitud para la boleta <ArrowUpRight className="h-4 w-4 text-[#e75037]" /></a></div>
                <a href="https://www.cityoflaredo.com/departments/elections/2026-candidates-information" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.12em] text-[#e75037]">Fuente: City of Laredo 2026 Candidates Information <ArrowUpRight className="h-4 w-4" /></a>
              </section>

              <section>
                <Eyebrow>Quién es</Eyebrow>
                <h2 className="mt-5 font-display text-4xl font-black tracking-[-0.045em]">Biografía y experiencia</h2>
                <div className="mt-6 space-y-4 text-base leading-7 text-[#4f6265]">{candidate.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
              </section>

              <section className="grid gap-5 md:grid-cols-2">
                <div className="bg-[#102b36] p-7 text-white">
                  <p className="text-[9px] font-black uppercase tracking-[0.16em] text-[#f0dfbd]">Prioridades publicadas</p>
                  <ul className="mt-6 space-y-4">{candidate.priorities.map((priority) => <li key={priority} className="flex items-center gap-3 font-display text-xl font-bold"><CheckCircle2 className="h-4 w-4 shrink-0 text-[#e75037]" /> {priority}</li>)}</ul>
                </div>
                <div className="border border-[#102b36]/15 bg-[#fbf8f1] p-7">
                  <p className="text-[9px] font-black uppercase tracking-[0.16em] text-[#e75037]">Qué revisar</p>
                  <ul className="mt-6 space-y-4 text-sm leading-6 text-[#506266]">{candidate.record.map((item) => <li key={item} className="border-b border-[#102b36]/10 pb-4 last:border-0 last:pb-0">{item}</li>)}</ul>
                </div>
              </section>

              <section>
                <Eyebrow>Análisis equilibrado</Eyebrow>
                <h2 className="mt-5 font-display text-4xl font-black tracking-[-0.045em]">Lo Bueno. Lo Malo.</h2>
                <div className="mt-7 grid gap-5 md:grid-cols-2">
                  <div className="bg-[#dce8df] p-7 text-[#183a31]">
                    <p className="mb-5 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.16em]"><CheckCircle2 className="h-4 w-4" /> Lo Bueno</p>
                    <ul className="space-y-4 text-sm leading-6">{candidate.good.map((item) => <li key={item}>{item}</li>)}</ul>
                  </div>
                  <div className="bg-[#f4ded7] p-7 text-[#5b2c25]">
                    <p className="mb-5 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.16em]"><CircleAlert className="h-4 w-4" /> Lo Malo</p>
                    <ul className="space-y-4 text-sm leading-6">{candidate.bad.map((item) => <li key={item}>{item}</li>)}</ul>
                  </div>
                </div>
              </section>

              <section>
                <Eyebrow>Antes de votar</Eyebrow>
                <h2 className="mt-5 font-display text-4xl font-black tracking-[-0.045em]">Preguntas que merecen respuesta</h2>
                <ol className="mt-7 border-t border-[#102b36]/18">{candidate.questions.map((question, index) => <li key={question} className="grid grid-cols-[42px_1fr] gap-4 border-b border-[#102b36]/18 py-5"><span className="font-mono text-xs font-bold text-[#e75037]">0{index + 1}</span><span className="font-display text-xl font-bold leading-6">{question}</span></li>)}</ol>
              </section>

              <SourceList language="es" sources={candidate.sources} />
            </article>
            <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
              <AdUnit language="es" />
              <Link href="/es/comparar-candidatos" className="group flex items-center justify-between bg-[#e75037] p-5 text-[10px] font-black uppercase tracking-[0.12em] text-white">Comparar candidatos <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></Link>
              <ContactMini language="es" />
            </aside>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export function CandidateComparison() {
  const rows = [
    ["Experiencia pública", "Alcalde desde 2022", "Concejal desde 2020", "Exconcejal", "Juntas asesoras municipales", "Sin información suficiente localizada"],
    ["Agua", "Inversión y continuidad", "Preparación y supervisión", "Confiabilidad y rendición de cuentas", "Planificación de largo plazo", "Sin posición documentada"],
    ["Impuestos", "Sin meta específica localizada", "Sin meta específica localizada", "Alivio fiscal y tasa no-new-revenue", "Responsabilidad fiscal general", "Sin posición documentada"],
    ["Transparencia", "Reportar resultados de gestión", "Más participación pública", "Fiscalización y apertura", "Métricas y liderazgo operativo", "Sin posición documentada"],
    ["Economía", "Continuidad y acceso", "Vivienda y comunidad", "Disciplina fiscal", "Comercio y oportunidad", "Sin posición documentada"],
  ];

  return (
    <PageShell language="es">
      <Seo language="es" title="Comparación de candidatos a alcalde de Laredo 2026" description="Compara experiencia y posiciones de Victor Treviño, Alyssa Cigarroa, Poncho Casso, JD Gonzalez y Jorge A. Garza en los principales temas de Laredo." path="/es/comparar-candidatos" keywords={["compare Laredo mayor candidates", "comparar candidatos Laredo 2026", "Laredo mayor election 2026"]} schema={{ "@context": "https://schema.org", "@type": "WebPage", name: "Comparación de candidatos a alcalde de Laredo 2026" }} />
      <PageHero eyebrow="Comparador electoral" title="Cinco candidatos. La misma vara." description="Una comparación rápida basada en experiencia pública y prioridades declaradas. Abre cada expediente para ver contexto, preguntas y fuentes." />
      <section className="paper-texture py-16 sm:py-24">
        <div className="container">
          <Breadcrumbs language="es" items={[{ label: "Candidatos", href: "/es/candidatos" }, { label: "Comparar" }]} />
          <div className="overflow-x-auto border border-[#102b36]/15 bg-[#fbf8f1] shadow-[0_20px_60px_rgba(16,43,54,0.08)]">
            <table className="w-full min-w-[1080px] border-collapse text-left">
              <thead className="bg-[#102b36] text-white"><tr><th className="p-5 text-[9px] font-black uppercase tracking-[0.15em]">Tema</th>{candidates.map((candidate) => <th key={candidate.slug} className="p-5"><Link href={`/es/candidatos/${candidate.slug}`} className="font-display text-xl font-black hover:text-[#f0dfbd]">{candidate.name}</Link></th>)}</tr></thead>
              <tbody>{rows.map((row, rowIndex) => <tr key={row[0]} className="border-b border-[#102b36]/12 last:border-0"><th className="bg-[#eee7da] p-5 text-[10px] font-black uppercase tracking-[0.12em] text-[#e75037]">{row[0]}</th>{row.slice(1).map((cell, index) => <td key={`${rowIndex}-${index}`} className="border-l border-[#102b36]/10 p-5 text-sm leading-6 text-[#536669]">{cell}</td>)}</tr>)}</tbody>
            </table>
          </div>
          <p className="mt-5 text-xs leading-5 text-[#6b797b]">Las frases resumen temas publicados; no son calificaciones ni respaldos. “Sin posición documentada” debe usarse cuando no exista una propuesta pública verificable.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">{candidates.map((candidate) => <Link key={candidate.slug} href={`/es/candidatos/${candidate.slug}`} className="group border border-[#102b36]/15 bg-white p-5"><span className="text-[8px] font-black uppercase tracking-[0.14em] text-[#e75037]">Expediente</span><p className="mt-2 font-display text-xl font-black">{candidate.name}</p><span className="mt-5 flex items-center justify-between text-[9px] font-black uppercase tracking-[0.12em]">Abrir <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span></Link>)}</div>
        </div>
      </section>
    </PageShell>
  );
}

function IssueCard({ issue }: { issue: Issue }) {
  return (
    <Link href={`/es/temas/${issue.slug}`} className="group flex min-h-[260px] flex-col border border-[#102b36]/14 bg-[#fbf8f1] p-6 shadow-[0_14px_45px_rgba(16,43,54,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#e75037]">
      <div className="flex items-center justify-between"><span className="text-[8px] font-black uppercase tracking-[0.15em] text-[#e75037]">{issue.category}</span><ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-1 group-hover:translate-x-1" /></div>
      <h2 className="mt-6 font-display text-3xl font-black leading-none tracking-[-0.04em]">{issue.spanishTitle}</h2>
      <p className="mt-4 text-sm leading-6 text-[#5b6c6f]">{issue.summary}</p>
      <span className="mt-auto border-t border-[#102b36]/10 pt-5 text-[9px] font-black uppercase tracking-[0.12em]">Ver guía completa</span>
    </Link>
  );
}

export function IssueHub() {
  return (
    <PageShell language="es">
      <Seo language="es" title="Temas de la elección de Laredo 2026" description="Guías no partidistas sobre agua, impuestos, presupuesto, calles, seguridad, transparencia, comercio, vivienda, salud y economía en Laredo." path="/es/temas" keywords={["Laredo election issues", "temas elecciones Laredo", "Laredo politics 2026"]} schema={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Temas de la elección de Laredo 2026" }} />
      <PageHero eyebrow="Guías por tema" title="Lo que está en juego." description="Cada guía explica el problema, lo que funciona, lo que falta, las preguntas para los candidatos y las fuentes que puedes revisar por tu cuenta." />
      <section className="paper-texture py-16 sm:py-24"><div className="container"><Breadcrumbs language="es" items={[{ label: "Temas" }]} /><div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{issues.map((issue) => <IssueCard key={issue.slug} issue={issue} />)}</div><div className="mt-10"><AdUnit language="es" /></div></div></section>
    </PageShell>
  );
}

export function IssuePage({ slug }: { slug: string }) {
  const issue = issues.find((item) => item.slug === slug);
  const [vote, setVote] = useState<"up" | "down" | null>(() => {
    if (typeof window === "undefined" || !issue) return null;
    return window.localStorage.getItem(`laredo-resource-vote-${issue.slug}`) as "up" | "down" | null;
  });
  if (!issue) return <MissingResource />;

  const registerVote = (nextVote: "up" | "down") => {
    const value = vote === nextVote ? null : nextVote;
    setVote(value);
    if (value) window.localStorage.setItem(`laredo-resource-vote-${issue.slug}`, value);
    else window.localStorage.removeItem(`laredo-resource-vote-${issue.slug}`);
    toast.success(value ? "Gracias por participar" : "Voto eliminado", { description: value ? "Tu opinión quedó guardada en este dispositivo." : undefined });
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${issue.spanishTitle}: guía para votantes de Laredo 2026`,
    description: issue.summary,
    author: { "@type": "Organization", name: "Laredo Politics" },
    publisher: { "@type": "Organization", name: "Laredo Politics" },
    mainEntityOfPage: `${SITE_URL}/es/temas/${issue.slug}`,
    dateModified: "2026-09-09",
  };

  return (
    <PageShell language="es">
      <Seo language="es" title={`${issue.spanishTitle}: candidatos y datos de Laredo 2026`} description={issue.summary} path={`/es/temas/${issue.slug}`} type="article" keywords={issue.keywords} schema={articleSchema} />
      <PageHero eyebrow={`${issue.category} · Guía electoral`} title={issue.spanishTitle} description={issue.summary}>
        <div className="mt-8 flex flex-wrap gap-2">{issue.keywords.slice(0, 3).map((keyword) => <span key={keyword} className="border border-white/20 px-3 py-2 text-[8px] font-black uppercase tracking-[0.12em] text-[#d7e2df]">{keyword}</span>)}</div>
        {issue.verifiedAsOf && <p className="mt-5 font-mono text-[9px] uppercase tracking-[0.13em] text-[#9eb3b0]">Datos verificados al {issue.verifiedAsOf}</p>}
      </PageHero>
      <section className="paper-texture py-16 sm:py-24">
        <div className="container">
          <Breadcrumbs language="es" items={[{ label: "Temas", href: "/es/temas" }, { label: issue.spanishTitle }]} />
          <div className="grid gap-10 lg:grid-cols-[1fr_330px] lg:gap-16">
            <article className="space-y-16">
              <section>
                <Eyebrow>Por qué importa</Eyebrow>
                <h2 className="mt-5 font-display text-4xl font-black tracking-[-0.045em]">El impacto en tu vida diaria</h2>
                <div className="mt-7 grid gap-4 md:grid-cols-2">{issue.whyItMatters.map((item, index) => <div key={item} className="border border-[#102b36]/14 bg-[#fbf8f1] p-6"><span className="font-mono text-[9px] font-bold text-[#e75037]">0{index + 1}</span><p className="mt-4 text-base font-medium leading-7">{item}</p></div>)}</div>
              </section>
              <section>
                <Eyebrow>Situación actual</Eyebrow>
                <h2 className="mt-5 font-display text-4xl font-black tracking-[-0.045em]">Lo que sabemos</h2>
                <div className="mt-6 space-y-4 text-base leading-7 text-[#4f6265]">{issue.currentSituation.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
              </section>
              {issue.keyNumbers && (
                <section>
                  <Eyebrow>Datos clave</Eyebrow>
                  <h2 className="mt-5 font-display text-4xl font-black tracking-[-0.045em]">Los números detrás del debate</h2>
                  <div className="mt-7 grid gap-4 md:grid-cols-2">{issue.keyNumbers.map((number) => <div key={number.label} className="border border-[#102b36]/14 bg-[#102b36] p-6 text-white"><p className="text-[8px] font-black uppercase tracking-[0.14em] text-[#f0dfbd]">{number.label}</p><p className="mt-4 font-display text-3xl font-black tracking-[-0.04em] text-white">{number.value}</p><p className="mt-4 text-xs leading-5 text-[#b9c9c7]">{number.context}</p></div>)}</div>
                </section>
              )}
              <section>
                <Eyebrow>Análisis ciudadano</Eyebrow>
                <h2 className="mt-5 font-display text-4xl font-black tracking-[-0.045em]">Lo Bueno. Lo Malo.</h2>
                <div className="mt-7 grid gap-5 md:grid-cols-2">
                  <div className="bg-[#dce8df] p-7 text-[#183a31]"><p className="mb-5 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.16em]"><CheckCircle2 className="h-4 w-4" /> Lo Bueno</p><ul className="space-y-4 text-sm leading-6">{issue.good.map((item) => <li key={item}>{item}</li>)}</ul></div>
                  <div className="bg-[#f4ded7] p-7 text-[#5b2c25]"><p className="mb-5 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.16em]"><CircleAlert className="h-4 w-4" /> Lo Malo</p><ul className="space-y-4 text-sm leading-6">{issue.bad.map((item) => <li key={item}>{item}</li>)}</ul></div>
                </div>
                <div className="mt-4 flex flex-col gap-4 border border-[#102b36]/14 bg-white/70 p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div><p className="text-[9px] font-black uppercase tracking-[0.14em] text-[#657578]">¿Te ayudó esta guía?</p><p className="mt-1 text-xs text-[#758386]">Un voto por dispositivo. Puedes cambiarlo.</p></div>
                  <div className="flex gap-2">
                    <button type="button" onClick={() => registerVote("up")} aria-pressed={vote === "up"} data-umami-event={`issue-${issue.slug}-upvote`} className={`flex flex-1 items-center justify-center gap-2 border px-4 py-3 text-[9px] font-black uppercase tracking-[0.1em] active:scale-[0.97] ${vote === "up" ? "border-[#245a48] bg-[#245a48] text-white" : "border-[#245a48]/25 text-[#245a48] hover:bg-[#dce8df]"}`}><ThumbsUp className="h-4 w-4" /> Útil</button>
                    <button type="button" onClick={() => registerVote("down")} aria-pressed={vote === "down"} data-umami-event={`issue-${issue.slug}-downvote`} className={`flex flex-1 items-center justify-center gap-2 border px-4 py-3 text-[9px] font-black uppercase tracking-[0.1em] active:scale-[0.97] ${vote === "down" ? "border-[#a23f2e] bg-[#a23f2e] text-white" : "border-[#a23f2e]/25 text-[#a23f2e] hover:bg-[#f4ded7]"}`}><ThumbsDown className="h-4 w-4" /> Falta contexto</button>
                  </div>
                </div>
              </section>
              <section>
                <Eyebrow>Exige respuestas</Eyebrow>
                <h2 className="mt-5 font-display text-4xl font-black tracking-[-0.045em]">Preguntas para todos los candidatos</h2>
                <ol className="mt-7 border-t border-[#102b36]/18">{issue.questions.map((question, index) => <li key={question} className="grid grid-cols-[42px_1fr] gap-4 border-b border-[#102b36]/18 py-5"><span className="font-mono text-xs font-bold text-[#e75037]">0{index + 1}</span><span className="font-display text-xl font-bold leading-6">{question}</span></li>)}</ol>
              </section>
              <section>
                <Eyebrow>Los candidatos</Eyebrow>
                <h2 className="mt-5 font-display text-4xl font-black tracking-[-0.045em]">Posiciones documentadas</h2>
                {issue.candidateContext ? (
                  <div className="mt-7 border-t border-[#102b36]/18">{issue.candidateContext.map((item, index) => <article key={item.candidate} className="grid gap-3 border-b border-[#102b36]/18 py-6 sm:grid-cols-[48px_210px_1fr]"><span className="font-mono text-[9px] font-bold text-[#e75037]">0{index + 1}</span><h3 className="font-display text-xl font-black">{item.candidate}</h3><p className="text-sm leading-6 text-[#586a6d]">{item.position}</p></article>)}</div>
                ) : (
                  <div className="mt-7 grid gap-4 md:grid-cols-2">{candidates.map((candidate) => <Link key={candidate.slug} href={`/es/candidatos/${candidate.slug}`} className="group border border-[#102b36]/14 bg-[#fbf8f1] p-5"><p className="text-[8px] font-black uppercase tracking-[0.13em] text-[#e75037]">Expediente</p><h3 className="mt-2 font-display text-xl font-black">{candidate.name}</h3><p className="mt-3 text-xs leading-5 text-[#637477]">{candidate.priorities.join(" · ")}</p><span className="mt-4 flex items-center gap-2 text-[8px] font-black uppercase tracking-[0.12em]">Ver fuentes <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" /></span></Link>)}</div>
                )}
              </section>
              <SourceList language="es" sources={issue.sources} />
            </article>
            <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start"><AdUnit language="es" /><Link href="/es/comparar-candidatos" className="group flex items-center justify-between bg-[#e75037] p-5 text-[9px] font-black uppercase tracking-[0.12em] text-white">Comparar candidatos <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></Link><ContactMini language="es" /></aside>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export function VotingHub() {
  return (
    <PageShell language="es">
      <Seo language="es" title="Cómo votar en Laredo: guía electoral 2026" description="Registro, votación anticipada, lugares de votación, boleta de muestra, voto por correo e identificación para votar en Laredo." path="/es/votar" keywords={["cómo votar Laredo 2026", "Laredo voting locations", "Webb County elections"]} schema={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Cómo votar en Laredo 2026" }} />
      <PageHero eyebrow="Guía del votante" title="Tu voto empieza aquí." description="Usa estas guías para confirmar tu registro, conocer tu boleta, elegir cuándo votar y abrir siempre el recurso oficial antes de salir." />
      <section className="paper-texture py-16 sm:py-24"><div className="container"><Breadcrumbs language="es" items={[{ label: "Cómo votar" }]} /><div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{votingResources.map((resource, index) => <Link key={resource.slug} href={`/es/votar/${resource.slug}`} className="group flex min-h-[280px] flex-col border border-[#102b36]/14 bg-[#fbf8f1] p-6 shadow-[0_14px_45px_rgba(16,43,54,0.06)] transition hover:-translate-y-1 hover:border-[#e75037]"><div className="flex justify-between"><span className="grid h-10 w-10 place-items-center rounded-full bg-[#102b36] font-mono text-[10px] font-bold text-white">0{index + 1}</span><ArrowUpRight className="h-5 w-5 text-[#e75037] transition group-hover:-translate-y-1 group-hover:translate-x-1" /></div><h2 className="mt-7 font-display text-3xl font-black tracking-[-0.04em]">{resource.spanishTitle}</h2><p className="mt-4 text-sm leading-6 text-[#5b6d70]">{resource.summary}</p><span className="mt-auto border-t border-[#102b36]/10 pt-5 text-[9px] font-black uppercase tracking-[0.12em]">Abrir guía</span></Link>)}</div><div className="mt-10"><AdUnit language="es" /></div></div></section>
    </PageShell>
  );
}

export function VotingResourcePage({ slug }: { slug: string }) {
  const resource = votingResources.find((item) => item.slug === slug);
  if (!resource) return <MissingResource />;
  return (
    <PageShell language="es">
      <Seo language="es" title={`${resource.spanishTitle} en Laredo 2026`} description={resource.summary} path={`/es/votar/${resource.slug}`} keywords={resource.keywords} schema={{ "@context": "https://schema.org", "@type": "HowTo", name: resource.spanishTitle, description: resource.summary, step: resource.steps.map((step) => ({ "@type": "HowToStep", name: step.title, text: step.body })) }} />
      <PageHero eyebrow="Guía oficial del votante" title={resource.spanishTitle} description={resource.summary} />
      <section className="paper-texture py-16 sm:py-24"><div className="container"><Breadcrumbs language="es" items={[{ label: "Cómo votar", href: "/es/votar" }, { label: resource.spanishTitle }]} /><div className="grid gap-10 lg:grid-cols-[1fr_330px] lg:gap-16"><article><Eyebrow>Paso a paso</Eyebrow><h2 className="mt-5 font-display text-4xl font-black tracking-[-0.045em]">Haz tu plan antes de votar</h2><ol className="mt-8 grid gap-4">{resource.steps.map((step, index) => <li key={step.title} className="grid gap-5 border border-[#102b36]/14 bg-[#fbf8f1] p-6 sm:grid-cols-[60px_1fr]"><span className="font-display text-5xl font-black leading-none text-[#e75037]">0{index + 1}</span><div><h3 className="font-display text-2xl font-black">{step.title}</h3><p className="mt-2 text-sm leading-6 text-[#596b6e]">{step.body}</p></div></li>)}</ol><div className="mt-8 bg-[#e75037] p-6 text-white"><p className="text-[9px] font-black uppercase tracking-[0.15em] text-[#102b36]">Siempre verifica antes de salir</p><a href={resource.officialLink} target="_blank" rel="noopener noreferrer" className="mt-3 flex items-center justify-between font-display text-2xl font-black">{resource.officialLabel}<ArrowUpRight className="h-5 w-5" /></a></div><div className="mt-12 border-t border-[#102b36]/15 pt-8"><h2 className="font-display text-3xl font-black">Más recursos para votar</h2><div className="mt-5 grid gap-3 md:grid-cols-2">{votingResources.filter((item) => item.slug !== resource.slug).slice(0,4).map((item) => <Link key={item.slug} href={`/es/votar/${item.slug}`} className="group flex items-center justify-between border border-[#102b36]/12 bg-white p-4 text-sm font-bold">{item.spanishTitle}<ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></Link>)}</div></div></article><aside className="space-y-5 lg:sticky lg:top-28 lg:self-start"><AdUnit language="es" /><ContactMini language="es" /></aside></div></div></section>
    </PageShell>
  );
}

export function ElectionOverview() {
  return (
    <PageShell language="es">
      <Seo language="es" alternatePath="/election-2026" title="Elecciones de Laredo 2026: alcalde, distritos y juez" description="Guía completa de las elecciones de Laredo del 3 de noviembre de 2026: alcalde, Distritos 1, 2, 3 y 6, Juez Municipal, temas, fechas y cómo votar." path="/es/elecciones-2026" keywords={["elecciones Laredo 2026", "candidatos Concejo Laredo", "elecciones por distrito Laredo", "candidatos alcalde Laredo"]} schema={{ "@context": "https://schema.org", "@type": "Event", name: "Elecciones Municipales de Laredo 2026", startDate: "2026-11-03", eventStatus: "https://schema.org/EventScheduled", location: { "@type": "Place", name: "Laredo, Texas" }, url: `${SITE_URL}/es/elecciones-2026` }} />
      <PageHero eyebrow="Guía central" title="Elecciones de Laredo 2026" description="Alcalde, Distritos 1, 2, 3 y 6 del Concejo, Juez Municipal, los temas principales y todo lo necesario para votar informado el 3 de noviembre." />
      <BallotSnapshot language="es" compact />
      <OfficialElectionResources language="es" />
      <section className="paper-texture py-16 sm:py-24"><div className="container"><Breadcrumbs language="es" items={[{ label: "Elección 2026" }]} /><div className="grid gap-6 lg:grid-cols-3"><Link href="/es/candidatos" className="group bg-[#102b36] p-7 text-white"><BadgeCheck className="h-6 w-6 text-[#e75037]" /><h2 className="mt-8 font-display text-4xl font-black">Candidatos</h2><p className="mt-4 text-sm leading-6 text-[#bacbc7]">Expedientes con la misma estructura y acceso a fuentes.</p><span className="mt-8 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.12em] text-[#f0dfbd]">Ver candidatos <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span></Link><Link href="/es/temas" className="group border border-[#102b36]/14 bg-[#fbf8f1] p-7"><BarChart3 className="h-6 w-6 text-[#e75037]" /><h2 className="mt-8 font-display text-4xl font-black">Temas</h2><p className="mt-4 text-sm leading-6 text-[#5b6d70]">Agua, impuestos, presupuesto, seguridad, comercio y más.</p><span className="mt-8 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.12em]">Analizar temas <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span></Link><Link href="/es/votar" className="group bg-[#e75037] p-7 text-white"><Vote className="h-6 w-6 text-[#102b36]" /><h2 className="mt-8 font-display text-4xl font-black">Cómo votar</h2><p className="mt-4 text-sm leading-6 text-white/85">Registro, fechas, lugares, boleta e identificación.</p><span className="mt-8 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.12em]">Hacer un plan <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span></Link></div><LocalRacesGrid language="es" /><div className="mt-16"><Eyebrow>Quién compite para alcalde</Eyebrow><div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-5">{candidates.map((candidate) => <CandidateCard key={candidate.slug} candidate={candidate} />)}</div></div><div className="mt-16"><Eyebrow>Temas prioritarios</Eyebrow><div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{issues.slice(0,6).map((issue) => <IssueCard key={issue.slug} issue={issue} />)}</div></div></div></section>
    </PageShell>
  );
}

type StaticKind = "calendar" | "finance" | "facts" | "methodology";

const staticContent: Record<StaticKind, { path: string; eyebrow: string; title: string; description: string; icon: typeof CalendarDays; sections: Array<{ title: string; body: string }> }> = {
  calendar: { path: "/es/calendario-electoral", eyebrow: "Fechas y eventos", title: "Calendario electoral de Laredo 2026", description: "Plazos oficiales, votación anticipada, Día de Elección y eventos cívicos que ayudan a seguir la campaña.", icon: CalendarDays, sections: [{ title: "5 de octubre", body: "Fecha indicada para el cierre de registro de votantes. Confirma siempre con VoteTexas y Webb County Elections." }, { title: "19–30 de octubre", body: "Periodo indicado para votación anticipada en persona. Los sitios y horarios pueden variar." }, { title: "23 de octubre", body: "Fecha indicada para la recepción de solicitudes de boleta por correo. Verifica elegibilidad y entrega oficial." }, { title: "3 de noviembre", body: "Día de Elección municipal. Confirma ubicación, horario e identificación antes de salir." }] },
  finance: { path: "/es/finanzas-de-campana", eyebrow: "Dinero y política", title: "Finanzas de campaña", description: "Una estructura para rastrear aportaciones, gastos, préstamos y reportes de los candidatos a alcalde de Laredo.", icon: BarChart3, sections: [{ title: "Qué vamos a publicar", body: "Totales por periodo, principales donantes reportados, gastos por categoría y enlaces al documento original." }, { title: "Qué no significa", body: "Una aportación legal no prueba influencia indebida. La transparencia permite que el público evalúe relaciones y patrones." }, { title: "Cómo comparar", body: "Compara periodos equivalentes, aportaciones monetarias y en especie, deuda de campaña y gasto disponible." }, { title: "Próxima actualización", body: "Los registros se agregarán cuando estén disponibles en el sistema oficial correspondiente." }] },
  facts: { path: "/es/verificacion-de-datos", eyebrow: "Promesa → evidencia", title: "Centro de verificación", description: "Evaluamos afirmaciones verificables contra presupuestos, actas, contratos, datos oficiales y fuentes originales.", icon: FileCheck2, sections: [{ title: "Afirmación", body: "Registramos la frase exacta, quién la dijo, cuándo y en qué contexto." }, { title: "Evidencia", body: "Buscamos primero documentos gubernamentales, datos públicos y registros contemporáneos." }, { title: "Contexto", body: "Explicamos lo que la evidencia demuestra, lo que no demuestra y qué información falta." }, { title: "Correcciones", body: "Las actualizaciones materiales se identifican claramente y conservan la fecha de revisión." }] },
  methodology: { path: "/es/metodologia", eyebrow: "Cómo trabajamos", title: "Metodología editorial", description: "Una sola vara para todos los candidatos, fuentes visibles, distinción entre hechos y promesas, y correcciones públicas.", icon: ShieldCheck, sections: [{ title: "Misma estructura", body: "Cada candidato recibe las mismas categorías de información y oportunidades equivalentes de documentación." }, { title: "Fuentes primero", body: "Priorizamos documentos oficiales, registros públicos, declaraciones directas y periodismo local acreditado." }, { title: "Neutralidad no es equivalencia falsa", body: "Presentamos evidencia relevante aunque favorezca o perjudique una afirmación. No equilibramos un hecho verificado con una declaración sin respaldo." }, { title: "Publicidad separada", body: "Los patrocinadores no compran cobertura, calificaciones, acceso editorial ni trato preferencial." }] },
};

export function StaticResourcePage({ kind }: { kind: StaticKind }) {
  const page = staticContent[kind];
  const Icon = page.icon;
  return (
    <PageShell language="es">
      <Seo language="es" title={`${page.title} | Laredo Politics`} description={page.description} path={page.path} keywords={[page.title, "Laredo politics", "Laredo mayor 2026"]} schema={{ "@context": "https://schema.org", "@type": "WebPage", name: page.title, description: page.description }} />
      <PageHero eyebrow={page.eyebrow} title={page.title} description={page.description} />
      <section className="paper-texture py-16 sm:py-24"><div className="container"><Breadcrumbs language="es" items={[{ label: page.title }]} /><div className="grid gap-10 lg:grid-cols-[1fr_330px] lg:gap-16"><article><div className="grid gap-4 md:grid-cols-2">{page.sections.map((section, index) => <section key={section.title} className="border border-[#102b36]/14 bg-[#fbf8f1] p-6"><div className="flex items-center justify-between"><Icon className="h-5 w-5 text-[#e75037]" /><span className="font-mono text-[9px] font-bold text-[#e75037]">0{index + 1}</span></div><h2 className="mt-7 font-display text-3xl font-black tracking-[-0.035em]">{section.title}</h2><p className="mt-4 text-sm leading-6 text-[#586a6d]">{section.body}</p></section>)}</div>{kind === "facts" && <div className="mt-10 bg-[#102b36] p-7 text-white"><Search className="h-5 w-5 text-[#e75037]" /><h2 className="mt-5 font-display text-3xl font-black">Archivo en desarrollo</h2><p className="mt-3 text-sm leading-6 text-[#b9c9c7]">Los próximos registros vincularán cada afirmación con candidato, tema, fecha, fuente y documentos relacionados.</p></div>}</article><aside className="space-y-5"><AdUnit language="es" /><ContactMini language="es" /></aside></div></div></section>
    </PageShell>
  );
}

export function MissingResource() {
  return (
    <PageShell language="es">
      <Seo language="es" title="Página no encontrada" description="La página solicitada no existe en Laredo Politics." path="/404" />
      <section className="grid min-h-[60vh] place-items-center px-4 py-20 text-center"><div><p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#e75037]">Error 404</p><h1 className="mt-4 font-display text-5xl font-black">Esta página no existe.</h1><Link href="/" className="mt-8 inline-flex items-center gap-2 bg-[#102b36] px-6 py-4 text-[10px] font-black uppercase tracking-[0.12em] text-white">Volver al inicio <ArrowRight className="h-4 w-4" /></Link></div></section>
    </PageShell>
  );
}
