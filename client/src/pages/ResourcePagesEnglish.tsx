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
import { candidatesEn, issuesEn, votingResourcesEn, type Candidate, type Issue } from "@/data/resources-en";
import { LocalRacesGrid } from "@/pages/LocalRaces";
import BallotSnapshot from "@/components/BallotSnapshot";

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
    <Link href={`/candidatos/${candidate.slug}`} className="group flex min-h-[410px] flex-col overflow-hidden border border-[#102b36]/14 bg-[#fbf8f1] shadow-[0_16px_50px_rgba(16,43,54,0.07)] transition duration-300 hover:-translate-y-1 hover:border-[#e75037] hover:shadow-[0_22px_60px_rgba(16,43,54,0.12)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#102b36]">
        {candidate.photoUrl ? <img src={candidate.photoUrl} alt={candidate.photoAlt || `Portrait of ${candidate.name}`} className="h-full w-full object-cover object-top grayscale-[10%] transition duration-500 group-hover:scale-[1.025] group-hover:grayscale-0" /> : <span className="grid h-full w-full place-items-center font-display text-5xl font-black text-[#f0dfbd]">{candidate.initials}</span>}
        <ArrowUpRight className="absolute right-4 top-4 h-5 w-5 text-white drop-shadow-md transition group-hover:-translate-y-1 group-hover:translate-x-1" />
      </div>
      <div className="flex flex-1 flex-col p-6"><p className="text-[8px] font-black uppercase tracking-[0.17em] text-[#748285]">On the ballot: {candidate.ballotName}</p><h2 className="mt-3 font-display text-3xl font-black leading-[0.98] tracking-[-0.04em]">{candidate.name}</h2><p className="mt-3 text-[10px] font-bold uppercase tracking-[0.1em] text-[#e75037]">{candidate.role}</p><p className="mt-5 text-sm leading-6 text-[#596b6e]">{candidate.summary}</p><span className="mt-auto border-t border-[#102b36]/12 pt-5 text-[9px] font-black uppercase tracking-[0.13em]">View full profile</span></div>
    </Link>
  );
}

export function EnglishCandidateHub() {
  return (
    <PageShell language="en">
      <Seo
        title="Laredo mayor candidates 2026"
        description="Meet every 2026 candidate for mayor of Laredo: biographies, experience, priorities, sources, and unanswered questions."
        path="/candidatos"
        keywords={["Laredo mayor candidates 2026", "candidates for Laredo mayor", "Laredo elections"]}
        schema={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Laredo mayor candidates 2026", url: `${SITE_URL}/candidatos` }}
      />
      <PageHero eyebrow="2026 municipal election" title="Meet the candidates." description="Five people are seeking to lead Laredo. Every profile uses the same structure, separates facts from promises, and links to original sources.">
        <Link href="/comparar-candidatos" className="mt-8 inline-flex items-center gap-3 bg-[#e75037] px-6 py-4 text-[10px] font-black uppercase tracking-[0.13em] text-white shadow-[5px_5px_0_#f0dfbd]">Compare side by side <ArrowRight className="h-4 w-4" /></Link>
      </PageHero>
      <section className="paper-texture py-16 sm:py-24">
        <div className="container">
          <Breadcrumbs language="en" items={[{ label: "Candidates" }]} />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">{candidatesEn.map((candidate) => <CandidateCard key={candidate.slug} candidate={candidate} />)}</div>
          <div className="mt-10"><AdUnit language="en" /></div>
        </div>
      </section>
    </PageShell>
  );
}

export function EnglishCandidatePage({ slug }: { slug: string }) {
  const candidate = candidatesEn.find((item) => item.slug === slug);
  if (!candidate) return <EnglishMissingResource />;

  const candidateSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: candidate.name,
    description: candidate.summary,
    ...(candidate.photoUrl ? { image: `${SITE_URL}${candidate.photoUrl}` } : {}),
    url: `${SITE_URL}/candidatos/${candidate.slug}`,
  };

  return (
    <PageShell language="en">
      <Seo
        title={`${candidate.name}: profile and positions for Laredo mayor 2026`}
        description={`${candidate.summary} Review experience, priorities, strengths, concerns, questions, and sources.`}
        path={`/candidatos/${candidate.slug}`}
        image={candidate.photoUrl}
        type="article"
        keywords={[candidate.name, `${candidate.name} Laredo mayor`, `${candidate.name} Laredo mayor 2026`, "Laredo mayor candidates"]}
        schema={candidateSchema}
      />
      <PageHero eyebrow="Candidate profile" title={candidate.name} description={candidate.summary}>
        {candidate.photoUrl && <figure className="mt-8 w-44 overflow-hidden border border-white/20 bg-[#071b23]"><img src={candidate.photoUrl} alt={candidate.photoAlt || `Portrait of ${candidate.name}`} className="aspect-[4/3] w-full object-cover object-top" />{candidate.photoCredit && <figcaption className="px-3 py-2 text-[7px] uppercase tracking-[0.1em] text-[#9eb3b0]">Photo: {candidate.photoCredit}</figcaption>}</figure>}
        <div className="mt-8 flex flex-wrap gap-3 text-[9px] font-black uppercase tracking-[0.13em]">
          <span className="bg-[#f0dfbd] px-3 py-2 text-[#102b36]">Ballot: {candidate.ballotName}</span>
          <span className="border border-white/20 px-3 py-2 text-white">{candidate.role}</span>
        </div>
        {candidate.verifiedAsOf && <p className="mt-5 font-mono text-[9px] uppercase tracking-[0.13em] text-[#9eb3b0]">Profile verified as of {candidate.verifiedAsOf}</p>}
      </PageHero>

      <section className="paper-texture py-16 sm:py-24">
        <div className="container">
          <Breadcrumbs language="en" items={[{ label: "Candidates", href: "/candidatos" }, { label: candidate.name }]} />
          <div className="grid gap-10 lg:grid-cols-[1fr_330px] lg:gap-16">
            <article className="space-y-16">
              <section>
                <Eyebrow>Who they are</Eyebrow>
                <h2 className="mt-5 font-display text-4xl font-black tracking-[-0.045em]">Biography and experience</h2>
                <div className="mt-6 space-y-4 text-base leading-7 text-[#4f6265]">{candidate.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
              </section>

              <section className="grid gap-5 md:grid-cols-2">
                <div className="bg-[#102b36] p-7 text-white">
                  <p className="text-[9px] font-black uppercase tracking-[0.16em] text-[#f0dfbd]">Published priorities</p>
                  <ul className="mt-6 space-y-4">{candidate.priorities.map((priority) => <li key={priority} className="flex items-center gap-3 font-display text-xl font-bold"><CheckCircle2 className="h-4 w-4 shrink-0 text-[#e75037]" /> {priority}</li>)}</ul>
                </div>
                <div className="border border-[#102b36]/15 bg-[#fbf8f1] p-7">
                  <p className="text-[9px] font-black uppercase tracking-[0.16em] text-[#e75037]">What to review</p>
                  <ul className="mt-6 space-y-4 text-sm leading-6 text-[#506266]">{candidate.record.map((item) => <li key={item} className="border-b border-[#102b36]/10 pb-4 last:border-0 last:pb-0">{item}</li>)}</ul>
                </div>
              </section>

              <section>
                <Eyebrow>Balanced analysis</Eyebrow>
                <h2 className="mt-5 font-display text-4xl font-black tracking-[-0.045em]">The strengths. The concerns.</h2>
                <div className="mt-7 grid gap-5 md:grid-cols-2">
                  <div className="bg-[#dce8df] p-7 text-[#183a31]">
                    <p className="mb-5 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.16em]"><CheckCircle2 className="h-4 w-4" /> The strengths</p>
                    <ul className="space-y-4 text-sm leading-6">{candidate.good.map((item) => <li key={item}>{item}</li>)}</ul>
                  </div>
                  <div className="bg-[#f4ded7] p-7 text-[#5b2c25]">
                    <p className="mb-5 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.16em]"><CircleAlert className="h-4 w-4" /> The concerns</p>
                    <ul className="space-y-4 text-sm leading-6">{candidate.bad.map((item) => <li key={item}>{item}</li>)}</ul>
                  </div>
                </div>
              </section>

              <section>
                <Eyebrow>Before you vote</Eyebrow>
                <h2 className="mt-5 font-display text-4xl font-black tracking-[-0.045em]">Questions that deserve answers</h2>
                <ol className="mt-7 border-t border-[#102b36]/18">{candidate.questions.map((question, index) => <li key={question} className="grid grid-cols-[42px_1fr] gap-4 border-b border-[#102b36]/18 py-5"><span className="font-mono text-xs font-bold text-[#e75037]">0{index + 1}</span><span className="font-display text-xl font-bold leading-6">{question}</span></li>)}</ol>
              </section>

              <SourceList language="en" sources={candidate.sources} />
            </article>
            <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
              <AdUnit language="en" />
              <Link href="/comparar-candidatos" className="group flex items-center justify-between bg-[#e75037] p-5 text-[10px] font-black uppercase tracking-[0.12em] text-white">Compare candidates <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></Link>
              <ContactMini language="en" />
            </aside>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export function EnglishCandidateComparison() {
  const rows = [
    ["Public experience", "Mayor since 2022", "Council member since 2020", "Former council member", "Municipal advisory boards", "Insufficient information located"],
    ["Water", "Investment and continuity", "Readiness and oversight", "Reliability and accountability", "Long-term planning", "No documented position"],
    ["Taxes", "No specific target located", "No specific target located", "Tax relief and the no-new-revenue rate", "General fiscal responsibility", "No documented position"],
    ["Transparency", "Reporting management results", "More public participation", "Oversight and openness", "Metrics and operational leadership", "No documented position"],
    ["Economy", "Continuity and access", "Housing and community", "Fiscal discipline", "Trade and opportunity", "No documented position"],
  ];

  return (
    <PageShell language="en">
      <Seo title="Compare Laredo mayor candidates 2026" description="Compare the experience and positions of Victor Treviño, Alyssa Cigarroa, Poncho Casso, JD Gonzalez, and Jorge A. Garza on Laredo's major issues." path="/comparar-candidatos" keywords={["compare Laredo mayor candidates", "Laredo candidates 2026", "Laredo mayor election 2026"]} schema={{ "@context": "https://schema.org", "@type": "WebPage", name: "Comparison of Laredo mayor candidates 2026" }} />
      <PageHero eyebrow="Election comparison" title="Five candidates. The same standard." description="A quick comparison based on public experience and stated priorities. Open each profile for context, questions, and sources." />
      <section className="paper-texture py-16 sm:py-24">
        <div className="container">
          <Breadcrumbs language="en" items={[{ label: "Candidates", href: "/candidatos" }, { label: "Compare" }]} />
          <div className="overflow-x-auto border border-[#102b36]/15 bg-[#fbf8f1] shadow-[0_20px_60px_rgba(16,43,54,0.08)]">
            <table className="w-full min-w-[1080px] border-collapse text-left">
              <thead className="bg-[#102b36] text-white"><tr><th className="p-5 text-[9px] font-black uppercase tracking-[0.15em]">Issue</th>{candidatesEn.map((candidate) => <th key={candidate.slug} className="p-5"><Link href={`/candidatos/${candidate.slug}`} className="font-display text-xl font-black hover:text-[#f0dfbd]">{candidate.name}</Link></th>)}</tr></thead>
              <tbody>{rows.map((row, rowIndex) => <tr key={row[0]} className="border-b border-[#102b36]/12 last:border-0"><th className="bg-[#eee7da] p-5 text-[10px] font-black uppercase tracking-[0.12em] text-[#e75037]">{row[0]}</th>{row.slice(1).map((cell, index) => <td key={`${rowIndex}-${index}`} className="border-l border-[#102b36]/10 p-5 text-sm leading-6 text-[#536669]">{cell}</td>)}</tr>)}</tbody>
            </table>
          </div>
          <p className="mt-5 text-xs leading-5 text-[#6b797b]">These phrases summarize published themes; they are not ratings or endorsements. “No documented position” is used when no verifiable public proposal exists.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">{candidatesEn.map((candidate) => <Link key={candidate.slug} href={`/candidatos/${candidate.slug}`} className="group border border-[#102b36]/15 bg-white p-5"><span className="text-[8px] font-black uppercase tracking-[0.14em] text-[#e75037]">Profile</span><p className="mt-2 font-display text-xl font-black">{candidate.name}</p><span className="mt-5 flex items-center justify-between text-[9px] font-black uppercase tracking-[0.12em]">Open <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span></Link>)}</div>
        </div>
      </section>
    </PageShell>
  );
}

function IssueCard({ issue }: { issue: Issue }) {
  return (
    <Link href={`/temas/${issue.slug}`} className="group flex min-h-[260px] flex-col border border-[#102b36]/14 bg-[#fbf8f1] p-6 shadow-[0_14px_45px_rgba(16,43,54,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#e75037]">
      <div className="flex items-center justify-between"><span className="text-[8px] font-black uppercase tracking-[0.15em] text-[#e75037]">{issue.category}</span><ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-1 group-hover:translate-x-1" /></div>
      <h2 className="mt-6 font-display text-3xl font-black leading-none tracking-[-0.04em]">{issue.spanishTitle}</h2>
      <p className="mt-4 text-sm leading-6 text-[#5b6c6f]">{issue.summary}</p>
      <span className="mt-auto border-t border-[#102b36]/10 pt-5 text-[9px] font-black uppercase tracking-[0.12em]">View full guide</span>
    </Link>
  );
}

export function EnglishIssueHub() {
  return (
    <PageShell language="en">
      <Seo title="Laredo election issues 2026" description="Nonpartisan guides to water, taxes, the budget, streets, public safety, transparency, trade, housing, health, and the economy in Laredo." path="/temas" keywords={["Laredo election issues", "Laredo elections", "Laredo politics 2026"]} schema={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Laredo election issues 2026" }} />
      <PageHero eyebrow="Issue guides" title="What's at stake." description="Each guide explains the problem, what is working, what is missing, questions for the candidates, and sources you can review yourself." />
      <section className="paper-texture py-16 sm:py-24"><div className="container"><Breadcrumbs language="en" items={[{ label: "Issues" }]} /><div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{issuesEn.map((issue) => <IssueCard key={issue.slug} issue={issue} />)}</div><div className="mt-10"><AdUnit language="en" /></div></div></section>
    </PageShell>
  );
}

export function EnglishIssuePage({ slug }: { slug: string }) {
  const issue = issuesEn.find((item) => item.slug === slug);
  const [vote, setVote] = useState<"up" | "down" | null>(() => {
    if (typeof window === "undefined" || !issue) return null;
    return window.localStorage.getItem(`laredo-resource-vote-${issue.slug}`) as "up" | "down" | null;
  });
  if (!issue) return <EnglishMissingResource />;

  const registerVote = (nextVote: "up" | "down") => {
    const value = vote === nextVote ? null : nextVote;
    setVote(value);
    if (value) window.localStorage.setItem(`laredo-resource-vote-${issue.slug}`, value);
    else window.localStorage.removeItem(`laredo-resource-vote-${issue.slug}`);
    toast.success(value ? "Thank you for participating" : "Vote removed", { description: value ? "Your response was saved on this device." : undefined });
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${issue.spanishTitle}: guide for Laredo voters in 2026`,
    description: issue.summary,
    author: { "@type": "Organization", name: "Laredo Politics" },
    publisher: { "@type": "Organization", name: "Laredo Politics" },
    mainEntityOfPage: `${SITE_URL}/temas/${issue.slug}`,
    dateModified: "2026-09-09",
  };

  return (
    <PageShell language="en">
      <Seo title={`${issue.spanishTitle}: Laredo candidates and facts 2026`} description={issue.summary} path={`/temas/${issue.slug}`} type="article" keywords={issue.keywords} schema={articleSchema} />
      <PageHero eyebrow={`${issue.category} · Election guide`} title={issue.spanishTitle} description={issue.summary}>
        <div className="mt-8 flex flex-wrap gap-2">{issue.keywords.slice(0, 3).map((keyword) => <span key={keyword} className="border border-white/20 px-3 py-2 text-[8px] font-black uppercase tracking-[0.12em] text-[#d7e2df]">{keyword}</span>)}</div>
        {issue.verifiedAsOf && <p className="mt-5 font-mono text-[9px] uppercase tracking-[0.13em] text-[#9eb3b0]">Facts verified as of {issue.verifiedAsOf}</p>}
      </PageHero>
      <section className="paper-texture py-16 sm:py-24">
        <div className="container">
          <Breadcrumbs language="en" items={[{ label: "Issues", href: "/temas" }, { label: issue.spanishTitle }]} />
          <div className="grid gap-10 lg:grid-cols-[1fr_330px] lg:gap-16">
            <article className="space-y-16">
              <section>
                <Eyebrow>Why it matters</Eyebrow>
                <h2 className="mt-5 font-display text-4xl font-black tracking-[-0.045em]">The impact on your daily life</h2>
                <div className="mt-7 grid gap-4 md:grid-cols-2">{issue.whyItMatters.map((item, index) => <div key={item} className="border border-[#102b36]/14 bg-[#fbf8f1] p-6"><span className="font-mono text-[9px] font-bold text-[#e75037]">0{index + 1}</span><p className="mt-4 text-base font-medium leading-7">{item}</p></div>)}</div>
              </section>
              <section>
                <Eyebrow>Current situation</Eyebrow>
                <h2 className="mt-5 font-display text-4xl font-black tracking-[-0.045em]">What we know</h2>
                <div className="mt-6 space-y-4 text-base leading-7 text-[#4f6265]">{issue.currentSituation.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
              </section>
              {issue.keyNumbers && (
                <section>
                  <Eyebrow>Key facts</Eyebrow>
                  <h2 className="mt-5 font-display text-4xl font-black tracking-[-0.045em]">The numbers behind the debate</h2>
                  <div className="mt-7 grid gap-4 md:grid-cols-2">{issue.keyNumbers.map((number) => <div key={number.label} className="border border-[#102b36]/14 bg-[#102b36] p-6 text-white"><p className="text-[8px] font-black uppercase tracking-[0.14em] text-[#f0dfbd]">{number.label}</p><p className="mt-4 font-display text-3xl font-black tracking-[-0.04em] text-white">{number.value}</p><p className="mt-4 text-xs leading-5 text-[#b9c9c7]">{number.context}</p></div>)}</div>
                </section>
              )}
              <section>
                <Eyebrow>Civic analysis</Eyebrow>
                <h2 className="mt-5 font-display text-4xl font-black tracking-[-0.045em]">The strengths. The concerns.</h2>
                <div className="mt-7 grid gap-5 md:grid-cols-2">
                  <div className="bg-[#dce8df] p-7 text-[#183a31]"><p className="mb-5 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.16em]"><CheckCircle2 className="h-4 w-4" /> The strengths</p><ul className="space-y-4 text-sm leading-6">{issue.good.map((item) => <li key={item}>{item}</li>)}</ul></div>
                  <div className="bg-[#f4ded7] p-7 text-[#5b2c25]"><p className="mb-5 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.16em]"><CircleAlert className="h-4 w-4" /> The concerns</p><ul className="space-y-4 text-sm leading-6">{issue.bad.map((item) => <li key={item}>{item}</li>)}</ul></div>
                </div>
                <div className="mt-4 flex flex-col gap-4 border border-[#102b36]/14 bg-white/70 p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div><p className="text-[9px] font-black uppercase tracking-[0.14em] text-[#657578]">Did this guide help?</p><p className="mt-1 text-xs text-[#758386]">One vote per device. You can change it.</p></div>
                  <div className="flex gap-2">
                    <button type="button" onClick={() => registerVote("up")} aria-pressed={vote === "up"} data-umami-event={`issue-${issue.slug}-upvote`} className={`flex flex-1 items-center justify-center gap-2 border px-4 py-3 text-[9px] font-black uppercase tracking-[0.1em] active:scale-[0.97] ${vote === "up" ? "border-[#245a48] bg-[#245a48] text-white" : "border-[#245a48]/25 text-[#245a48] hover:bg-[#dce8df]"}`}><ThumbsUp className="h-4 w-4" /> Helpful</button>
                    <button type="button" onClick={() => registerVote("down")} aria-pressed={vote === "down"} data-umami-event={`issue-${issue.slug}-downvote`} className={`flex flex-1 items-center justify-center gap-2 border px-4 py-3 text-[9px] font-black uppercase tracking-[0.1em] active:scale-[0.97] ${vote === "down" ? "border-[#a23f2e] bg-[#a23f2e] text-white" : "border-[#a23f2e]/25 text-[#a23f2e] hover:bg-[#f4ded7]"}`}><ThumbsDown className="h-4 w-4" /> Needs context</button>
                  </div>
                </div>
              </section>
              <section>
                <Eyebrow>Demand answers</Eyebrow>
                <h2 className="mt-5 font-display text-4xl font-black tracking-[-0.045em]">Questions for every candidate</h2>
                <ol className="mt-7 border-t border-[#102b36]/18">{issue.questions.map((question, index) => <li key={question} className="grid grid-cols-[42px_1fr] gap-4 border-b border-[#102b36]/18 py-5"><span className="font-mono text-xs font-bold text-[#e75037]">0{index + 1}</span><span className="font-display text-xl font-bold leading-6">{question}</span></li>)}</ol>
              </section>
              <section>
                <Eyebrow>The candidates</Eyebrow>
                <h2 className="mt-5 font-display text-4xl font-black tracking-[-0.045em]">Documented positions</h2>
                {issue.candidateContext ? (
                  <div className="mt-7 border-t border-[#102b36]/18">{issue.candidateContext.map((item, index) => <article key={item.candidate} className="grid gap-3 border-b border-[#102b36]/18 py-6 sm:grid-cols-[48px_210px_1fr]"><span className="font-mono text-[9px] font-bold text-[#e75037]">0{index + 1}</span><h3 className="font-display text-xl font-black">{item.candidate}</h3><p className="text-sm leading-6 text-[#586a6d]">{item.position}</p></article>)}</div>
                ) : (
                  <div className="mt-7 grid gap-4 md:grid-cols-2">{candidatesEn.map((candidate) => <Link key={candidate.slug} href={`/candidatos/${candidate.slug}`} className="group border border-[#102b36]/14 bg-[#fbf8f1] p-5"><p className="text-[8px] font-black uppercase tracking-[0.13em] text-[#e75037]">Profile</p><h3 className="mt-2 font-display text-xl font-black">{candidate.name}</h3><p className="mt-3 text-xs leading-5 text-[#637477]">{candidate.priorities.join(" · ")}</p><span className="mt-4 flex items-center gap-2 text-[8px] font-black uppercase tracking-[0.12em]">View sources <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" /></span></Link>)}</div>
                )}
              </section>
              <SourceList language="en" sources={issue.sources} />
            </article>
            <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start"><AdUnit language="en" /><Link href="/comparar-candidatos" className="group flex items-center justify-between bg-[#e75037] p-5 text-[9px] font-black uppercase tracking-[0.12em] text-white">Compare candidates <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></Link><ContactMini language="en" /></aside>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export function EnglishVotingHub() {
  return (
    <PageShell language="en">
      <Seo title="How to vote in Laredo: 2026 election guide" description="Voter registration, early voting, voting locations, sample ballots, voting by mail, and voter identification in Laredo." path="/votar" keywords={["how to vote Laredo 2026", "Laredo voting locations", "Webb County elections"]} schema={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "How to vote in Laredo 2026" }} />
      <PageHero eyebrow="Voter guide" title="Your vote starts here." description="Use these guides to confirm your registration, learn what's on your ballot, decide when to vote, and always open the official resource before you leave." />
      <section className="paper-texture py-16 sm:py-24"><div className="container"><Breadcrumbs language="en" items={[{ label: "How to vote" }]} /><div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{votingResourcesEn.map((resource, index) => <Link key={resource.slug} href={`/votar/${resource.slug}`} className="group flex min-h-[280px] flex-col border border-[#102b36]/14 bg-[#fbf8f1] p-6 shadow-[0_14px_45px_rgba(16,43,54,0.06)] transition hover:-translate-y-1 hover:border-[#e75037]"><div className="flex justify-between"><span className="grid h-10 w-10 place-items-center rounded-full bg-[#102b36] font-mono text-[10px] font-bold text-white">0{index + 1}</span><ArrowUpRight className="h-5 w-5 text-[#e75037] transition group-hover:-translate-y-1 group-hover:translate-x-1" /></div><h2 className="mt-7 font-display text-3xl font-black tracking-[-0.04em]">{resource.spanishTitle}</h2><p className="mt-4 text-sm leading-6 text-[#5b6d70]">{resource.summary}</p><span className="mt-auto border-t border-[#102b36]/10 pt-5 text-[9px] font-black uppercase tracking-[0.12em]">Open guide</span></Link>)}</div><div className="mt-10"><AdUnit language="en" /></div></div></section>
    </PageShell>
  );
}

export function EnglishVotingResourcePage({ slug }: { slug: string }) {
  const resource = votingResourcesEn.find((item) => item.slug === slug);
  if (!resource) return <EnglishMissingResource />;
  return (
    <PageShell language="en">
      <Seo title={`${resource.spanishTitle} in Laredo 2026`} description={resource.summary} path={`/votar/${resource.slug}`} keywords={resource.keywords} schema={{ "@context": "https://schema.org", "@type": "HowTo", name: resource.spanishTitle, description: resource.summary, step: resource.steps.map((step) => ({ "@type": "HowToStep", name: step.title, text: step.body })) }} />
      <PageHero eyebrow="Official voter guide" title={resource.spanishTitle} description={resource.summary} />
      <section className="paper-texture py-16 sm:py-24"><div className="container"><Breadcrumbs language="en" items={[{ label: "How to vote", href: "/votar" }, { label: resource.spanishTitle }]} /><div className="grid gap-10 lg:grid-cols-[1fr_330px] lg:gap-16"><article><Eyebrow>Step by step</Eyebrow><h2 className="mt-5 font-display text-4xl font-black tracking-[-0.045em]">Make your plan before you vote</h2><ol className="mt-8 grid gap-4">{resource.steps.map((step, index) => <li key={step.title} className="grid gap-5 border border-[#102b36]/14 bg-[#fbf8f1] p-6 sm:grid-cols-[60px_1fr]"><span className="font-display text-5xl font-black leading-none text-[#e75037]">0{index + 1}</span><div><h3 className="font-display text-2xl font-black">{step.title}</h3><p className="mt-2 text-sm leading-6 text-[#596b6e]">{step.body}</p></div></li>)}</ol><div className="mt-8 bg-[#e75037] p-6 text-white"><p className="text-[9px] font-black uppercase tracking-[0.15em] text-[#102b36]">Always verify before you leave</p><a href={resource.officialLink} target="_blank" rel="noopener noreferrer" className="mt-3 flex items-center justify-between font-display text-2xl font-black">{resource.officialLabel}<ArrowUpRight className="h-5 w-5" /></a></div><div className="mt-12 border-t border-[#102b36]/15 pt-8"><h2 className="font-display text-3xl font-black">More voting resources</h2><div className="mt-5 grid gap-3 md:grid-cols-2">{votingResourcesEn.filter((item) => item.slug !== resource.slug).slice(0, 4).map((item) => <Link key={item.slug} href={`/votar/${item.slug}`} className="group flex items-center justify-between border border-[#102b36]/12 bg-white p-4 text-sm font-bold">{item.spanishTitle}<ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></Link>)}</div></div></article><aside className="space-y-5 lg:sticky lg:top-28 lg:self-start"><AdUnit language="en" /><ContactMini language="en" /></aside></div></div></section>
    </PageShell>
  );
}

export function EnglishElectionOverview() {
  return (
    <PageShell language="en">
      <Seo alternatePath="/es/elecciones-2026" title="Laredo elections 2026: mayor, districts and judge" description="A complete guide to Laredo's November 3, 2026 election: mayor, City Council Districts 1, 2, 3 and 6, Municipal Court Judge, issues, dates and voting resources." path="/election-2026" keywords={["Laredo elections 2026", "Laredo City Council candidates", "Laredo district elections", "Laredo mayor candidates"]} schema={{ "@context": "https://schema.org", "@type": "Event", name: "2026 Laredo Municipal Election", startDate: "2026-11-03", eventStatus: "https://schema.org/EventScheduled", location: { "@type": "Place", name: "Laredo, Texas" }, url: `${SITE_URL}/election-2026` }} />
      <PageHero eyebrow="Central guide" title="Laredo elections 2026" description="Mayor, City Council Districts 1, 2, 3 and 6, Municipal Court Judge, major issues and everything you need to cast an informed vote on November 3." />
      <BallotSnapshot language="en" compact />
      <section className="paper-texture py-16 sm:py-24"><div className="container"><Breadcrumbs language="en" items={[{ label: "2026 election" }]} /><div className="grid gap-6 lg:grid-cols-3"><Link href="/candidatos" className="group bg-[#102b36] p-7 text-white"><BadgeCheck className="h-6 w-6 text-[#e75037]" /><h2 className="mt-8 font-display text-4xl font-black">Candidates</h2><p className="mt-4 text-sm leading-6 text-[#bacbc7]">Profiles with the same structure and access to sources.</p><span className="mt-8 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.12em] text-[#f0dfbd]">View candidates <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span></Link><Link href="/temas" className="group border border-[#102b36]/14 bg-[#fbf8f1] p-7"><BarChart3 className="h-6 w-6 text-[#e75037]" /><h2 className="mt-8 font-display text-4xl font-black">Issues</h2><p className="mt-4 text-sm leading-6 text-[#5b6d70]">Water, taxes, the budget, public safety, trade, and more.</p><span className="mt-8 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.12em]">Explore issues <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span></Link><Link href="/votar" className="group bg-[#e75037] p-7 text-white"><Vote className="h-6 w-6 text-[#102b36]" /><h2 className="mt-8 font-display text-4xl font-black">How to vote</h2><p className="mt-4 text-sm leading-6 text-white/85">Registration, dates, locations, ballots, and identification.</p><span className="mt-8 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.12em]">Make a plan <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span></Link></div><LocalRacesGrid language="en" /><div className="mt-16"><Eyebrow>Who is running for mayor</Eyebrow><div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-5">{candidatesEn.map((candidate) => <CandidateCard key={candidate.slug} candidate={candidate} />)}</div></div><div className="mt-16"><Eyebrow>Priority issues</Eyebrow><div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{issuesEn.slice(0, 6).map((issue) => <IssueCard key={issue.slug} issue={issue} />)}</div></div></div></section>
    </PageShell>
  );
}

type StaticKind = "calendar" | "finance" | "facts" | "methodology";

const staticContent: Record<StaticKind, { path: string; eyebrow: string; title: string; description: string; icon: typeof CalendarDays; sections: Array<{ title: string; body: string }> }> = {
  calendar: { path: "/calendario-electoral", eyebrow: "Dates and events", title: "Laredo 2026 election calendar", description: "Official deadlines, early voting, Election Day, and civic events that help you follow the campaign.", icon: CalendarDays, sections: [{ title: "October 5", body: "The listed voter-registration deadline. Always confirm with VoteTexas and Webb County Elections." }, { title: "October 19–30", body: "The listed period for in-person early voting. Locations and hours may vary." }, { title: "October 23", body: "The listed deadline for receipt of mail-ballot applications. Verify eligibility and official delivery requirements." }, { title: "November 3", body: "Municipal Election Day. Confirm your location, hours, and identification before you leave." }] },
  finance: { path: "/finanzas-de-campana", eyebrow: "Money and politics", title: "Campaign finance", description: "A framework for tracking contributions, spending, loans, and reports from candidates for mayor of Laredo.", icon: BarChart3, sections: [{ title: "What we will publish", body: "Totals by reporting period, leading reported donors, spending by category, and links to the original document." }, { title: "What it does not mean", body: "A legal contribution does not prove improper influence. Transparency allows the public to evaluate relationships and patterns." }, { title: "How to compare", body: "Compare equivalent periods, monetary and in-kind contributions, campaign debt, and available spending." }, { title: "Next update", body: "Records will be added when they become available in the relevant official system." }] },
  facts: { path: "/verificacion-de-datos", eyebrow: "Promise → evidence", title: "Fact-check center", description: "We evaluate verifiable claims against budgets, minutes, contracts, official data, and original sources.", icon: FileCheck2, sections: [{ title: "Claim", body: "We record the exact statement, who said it, when, and in what context." }, { title: "Evidence", body: "We look first for government documents, public data, and contemporaneous records." }, { title: "Context", body: "We explain what the evidence demonstrates, what it does not demonstrate, and which information is missing." }, { title: "Corrections", body: "Material updates are clearly identified and retain the review date." }] },
  methodology: { path: "/metodologia", eyebrow: "How we work", title: "Editorial methodology", description: "One standard for every candidate, visible sources, a distinction between facts and promises, and public corrections.", icon: ShieldCheck, sections: [{ title: "Same structure", body: "Every candidate receives the same information categories and equivalent opportunities for documentation." }, { title: "Sources first", body: "We prioritize official documents, public records, direct statements, and reputable local journalism." }, { title: "Neutrality is not false equivalence", body: "We present relevant evidence whether it supports or undermines a claim. We do not balance a verified fact with an unsupported statement." }, { title: "Advertising is separate", body: "Sponsors do not buy coverage, ratings, editorial access, or preferential treatment." }] },
};

export function EnglishStaticResourcePage({ kind }: { kind: StaticKind }) {
  const page = staticContent[kind];
  const Icon = page.icon;
  return (
    <PageShell language="en">
      <Seo title={`${page.title} | Laredo Politics`} description={page.description} path={page.path} keywords={[page.title, "Laredo politics", "Laredo mayor 2026"]} schema={{ "@context": "https://schema.org", "@type": "WebPage", name: page.title, description: page.description }} />
      <PageHero eyebrow={page.eyebrow} title={page.title} description={page.description} />
      <section className="paper-texture py-16 sm:py-24"><div className="container"><Breadcrumbs language="en" items={[{ label: page.title }]} /><div className="grid gap-10 lg:grid-cols-[1fr_330px] lg:gap-16"><article><div className="grid gap-4 md:grid-cols-2">{page.sections.map((section, index) => <section key={section.title} className="border border-[#102b36]/14 bg-[#fbf8f1] p-6"><div className="flex items-center justify-between"><Icon className="h-5 w-5 text-[#e75037]" /><span className="font-mono text-[9px] font-bold text-[#e75037]">0{index + 1}</span></div><h2 className="mt-7 font-display text-3xl font-black tracking-[-0.035em]">{section.title}</h2><p className="mt-4 text-sm leading-6 text-[#586a6d]">{section.body}</p></section>)}</div>{kind === "facts" && <div className="mt-10 bg-[#102b36] p-7 text-white"><Search className="h-5 w-5 text-[#e75037]" /><h2 className="mt-5 font-display text-3xl font-black">Archive in development</h2><p className="mt-3 text-sm leading-6 text-[#b9c9c7]">Future entries will connect each claim to a candidate, issue, date, source, and related documents.</p></div>}</article><aside className="space-y-5"><AdUnit language="en" /><ContactMini language="en" /></aside></div></div></section>
    </PageShell>
  );
}

export function EnglishMissingResource() {
  return (
    <PageShell language="en">
      <Seo title="Page not found" description="The requested page does not exist on Laredo Politics." path="/404" />
      <section className="grid min-h-[60vh] place-items-center px-4 py-20 text-center"><div><p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#e75037]">Error 404</p><h1 className="mt-4 font-display text-5xl font-black">This page does not exist.</h1><Link href="/" className="mt-8 inline-flex items-center gap-2 bg-[#102b36] px-6 py-4 text-[10px] font-black uppercase tracking-[0.12em] text-white">Return home <ArrowRight className="h-4 w-4" /></Link></div></section>
    </PageShell>
  );
}
