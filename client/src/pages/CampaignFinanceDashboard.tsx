import { useMemo, useState } from "react";
import { ArrowUpRight, BarChart3, CircleDollarSign, FileSearch, Search, ShieldAlert, ShieldCheck, SlidersHorizontal } from "lucide-react";
import { Link } from "wouter";
import Seo from "@/components/Seo";
import { AdUnit, Breadcrumbs, ContactMini, PageShell } from "@/components/SiteChrome";
import {
  campaignFinanceSourceUrl,
  campaignFinanceVerifiedAsOf,
  candidateFinanceRecords,
  type CandidateFinanceRecord,
  type FinanceStatus,
} from "@/data/campaignFinance";

type Language = "en" | "es";
type SortKey = "name" | "contributions" | "expenditures" | "cash" | "report-date";

const copy = {
  en: {
    eyebrow: "Public-money transparency",
    title: "Campaign finance, compared.",
    intro: "A source-linked tracker for all 16 City-listed candidates. Compare the latest 2026 filing located for each candidate without turning missing reports into fake zeroes.",
    asOf: "Verified as of September 9, 2026",
    official: "Open City campaign-finance reports",
    candidates: "Official candidates tracked",
    reports: "Candidate reports located",
    extracted: "Reports with amounts extracted",
    missing: "No 2026 report located",
    search: "Search candidate or treasurer",
    allOffices: "All offices",
    allStatuses: "All filing statuses",
    sortName: "Sort: candidate name",
    sortContributions: "Sort: contributions",
    sortExpenditures: "Sort: expenditures",
    sortCash: "Sort: cash on hand",
    sortDate: "Sort: report date",
    comparison: "Latest located report comparison",
    comparisonText: "Bars use the newest located 2026 report for each candidate with extracted amounts. Report periods may differ; read the date and filing type before comparing.",
    contributions: "Contributions",
    expenditures: "Expenditures",
    cash: "Cash on hand",
    loans: "Loans outstanding",
    candidate: "Candidate",
    office: "Office",
    treasurer: "Treasurer",
    latest: "Latest located report",
    status: "Filing status",
    actions: "Documents",
    profile: "Profile",
    report: "Open report",
    none: "No amount-extracted 2026 reports are available in the current snapshot.",
    noResults: "No candidates match these filters.",
    methodology: "How to read this dashboard",
    method1: "Missing filing is not zero. A blank amount means the value was not located or could not be reliably extracted.",
    method2: "The table and chart use the newest report located; the filing history shows every located 2026 document. We do not add overlapping periods.",
    method3: "Treasurer appointments and ballot applications prove filing identity; they are not campaign-finance reports and are never counted as one.",
    method4: "Every published amount must trace to a City-hosted report. Corrections are logged and dated.",
    pending: "Verification pending",
    documentsFound: "Documents found",
    amountsExtracted: "Amounts extracted",
    notLocated: "No 2026 filing located",
    source: "Primary source",
    sourceText: "The City Secretary posts reports as a public service under Title 15 of the Texas Election Code. The City states that it does not supervise or advise candidates about report content.",
    update: "This is a dated public-record snapshot, not live accounting.",
    history: "Located filing history",
    historyText: "Every candidate-attributable 2026 report located in the City directory, shown separately by filing and coverage period.",
    coverage: "Coverage",
  },
  es: {
    eyebrow: "Transparencia del dinero público",
    title: "Finanzas de campaña, comparadas.",
    intro: "Un rastreador con fuentes para los 16 candidatos listados por la Ciudad. Compara el reporte de 2026 más reciente localizado sin convertir documentos faltantes en ceros falsos.",
    asOf: "Verificado al 9 de septiembre de 2026",
    official: "Abrir reportes financieros de la Ciudad",
    candidates: "Candidatos oficiales rastreados",
    reports: "Reportes de candidatos localizados",
    extracted: "Reportes con cantidades extraídas",
    missing: "Sin reporte 2026 localizado",
    search: "Buscar candidato o tesorero",
    allOffices: "Todos los cargos",
    allStatuses: "Todos los estados",
    sortName: "Ordenar: nombre",
    sortContributions: "Ordenar: contribuciones",
    sortExpenditures: "Ordenar: gastos",
    sortCash: "Ordenar: efectivo disponible",
    sortDate: "Ordenar: fecha del reporte",
    comparison: "Comparación del reporte más reciente",
    comparisonText: "Las barras usan el reporte de 2026 más reciente con cantidades extraídas. Los periodos pueden ser distintos; revisa fecha y tipo antes de comparar.",
    contributions: "Contribuciones",
    expenditures: "Gastos",
    cash: "Efectivo disponible",
    loans: "Préstamos pendientes",
    candidate: "Candidato",
    office: "Cargo",
    treasurer: "Tesorero",
    latest: "Reporte más reciente",
    status: "Estado",
    actions: "Documentos",
    profile: "Perfil",
    report: "Abrir reporte",
    none: "No hay reportes de 2026 con cantidades extraídas en la versión actual.",
    noResults: "Ningún candidato coincide con estos filtros.",
    methodology: "Cómo leer este tablero",
    method1: "Un reporte faltante no equivale a cero. Una cantidad vacía significa que no se localizó o no pudo extraerse con seguridad.",
    method2: "La tabla y la gráfica usan el reporte más reciente; el historial muestra cada documento localizado de 2026. No sumamos periodos superpuestos.",
    method3: "El nombramiento del tesorero y la solicitud prueban identidad; no son reportes financieros y nunca se cuentan como tales.",
    method4: "Cada cantidad publicada debe vincularse a un reporte de la Ciudad. Las correcciones se registran con fecha.",
    pending: "Verificación pendiente",
    documentsFound: "Documentos localizados",
    amountsExtracted: "Cantidades extraídas",
    notLocated: "Sin reporte 2026 localizado",
    source: "Fuente primaria",
    sourceText: "La Secretaría Municipal publica los reportes como servicio público bajo el Título 15 del Código Electoral de Texas. La Ciudad indica que no supervisa ni asesora el contenido.",
    update: "Esta es una versión fechada del registro público, no contabilidad en vivo.",
    history: "Historial de reportes localizados",
    historyText: "Cada reporte de 2026 atribuible a una candidatura y localizado en el directorio municipal, mostrado por separado con su periodo.",
    coverage: "Periodo",
  },
} as const;

function latestFiling(record: CandidateFinanceRecord) {
  return [...record.filings].sort((a, b) => b.reportDate.localeCompare(a.reportDate))[0];
}

function statusLabel(status: FinanceStatus, language: Language) {
  const t = copy[language];
  return status === "amounts-extracted" ? t.amountsExtracted : status === "documents-found" ? t.documentsFound : status === "no-2026-filing-located" ? t.notLocated : t.pending;
}

function statusClass(status: FinanceStatus) {
  if (status === "amounts-extracted") return "bg-[#dce9df] text-[#24613c]";
  if (status === "documents-found") return "bg-[#f0dfbd] text-[#714f13]";
  if (status === "no-2026-filing-located") return "bg-[#f7dfd8] text-[#9e301e]";
  return "bg-[#e6eaeb] text-[#53676b]";
}

function money(value: number | null | undefined, language: Language) {
  if (value == null) return "—";
  return new Intl.NumberFormat(language === "es" ? "es-US" : "en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);
}

export default function CampaignFinanceDashboard({ language = "en" }: { language?: Language }) {
  const t = copy[language];
  const [query, setQuery] = useState("");
  const [office, setOffice] = useState("all");
  const [status, setStatus] = useState("all");
  const [sort, setSort] = useState<SortKey>("contributions");

  const offices = useMemo(() => Array.from(new Set(candidateFinanceRecords.map((record) => language === "en" ? record.office : record.officeEs))), [language]);
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const rows = candidateFinanceRecords.filter((record) => {
      const candidateOffice = language === "en" ? record.office : record.officeEs;
      return (!q || `${record.fullName} ${record.ballotName} ${record.campaignTreasurer}`.toLowerCase().includes(q)) && (office === "all" || candidateOffice === office) && (status === "all" || record.status === status);
    });
    return rows.sort((a, b) => {
      const af = latestFiling(a);
      const bf = latestFiling(b);
      if (sort === "name") return a.ballotName.localeCompare(b.ballotName);
      if (sort === "report-date") return (bf?.reportDate || "").localeCompare(af?.reportDate || "");
      const key = sort === "contributions" ? "totalContributions" : sort === "expenditures" ? "totalExpenditures" : "cashOnHand";
      return (bf?.[key] ?? -1) - (af?.[key] ?? -1);
    });
  }, [language, office, query, sort, status]);

  const allFilings = candidateFinanceRecords.flatMap((record) => record.filings);
  const reportCount = allFilings.length;
  const extractedCount = allFilings.filter((filing) => filing.extractionStatus === "extracted").length;
  const missingCount = candidateFinanceRecords.filter((record) => record.status === "no-2026-filing-located").length;
  const comparable = candidateFinanceRecords.map((record) => ({ record, filing: latestFiling(record) })).filter((item) => item.filing?.totalContributions != null).sort((a, b) => (b.filing?.totalContributions ?? 0) - (a.filing?.totalContributions ?? 0));
  const maxContributions = Math.max(1, ...comparable.map((item) => item.filing?.totalContributions ?? 0));
  const path = language === "en" ? "/campaign-finance" : "/es/finanzas-de-campana";
  const alternatePath = language === "en" ? "/es/finanzas-de-campana" : "/campaign-finance";

  return (
    <PageShell language={language}>
      <Seo language={language} alternatePath={alternatePath} title={language === "en" ? "Laredo 2026 campaign finance comparison dashboard" : "Tablero de finanzas de campaña de Laredo 2026"} description={t.intro} path={path} type="article" keywords={["Laredo campaign finance 2026", "Laredo candidate contributions", "Laredo election filings", "Laredo campaign spending"]} schema={{ "@context": "https://schema.org", "@type": "Dataset", name: language === "en" ? "Laredo 2026 Candidate Campaign Finance Tracker" : "Rastreador de Finanzas de Campaña de Candidatos de Laredo 2026", description: t.intro, url: `https://laredopolitics.com${path}`, dateModified: campaignFinanceVerifiedAsOf, creator: { "@type": "Organization", name: "Laredo Politics", url: "https://laredopolitics.com" }, isBasedOn: campaignFinanceSourceUrl, temporalCoverage: "2026" }} />

      <section className="relative overflow-hidden bg-[#102b36] py-16 text-white sm:py-24">
        <div className="grain absolute inset-0 opacity-20" />
        <div className="absolute -right-28 -top-36 h-96 w-96 rounded-full border-[70px] border-[#f0dfbd]/[0.05]" />
        <div className="container relative">
          <p className="section-kicker section-kicker-light">{t.eyebrow}</p>
          <h1 className="mt-6 max-w-5xl font-display text-[clamp(3.4rem,8vw,7rem)] font-black leading-[0.86] tracking-[-0.07em]">{t.title}</h1>
          <p className="mt-7 max-w-3xl border-l-2 border-[#e75037] pl-5 text-base leading-7 text-[#cad7d4] sm:text-lg">{t.intro}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3"><span className="bg-[#f0dfbd] px-3 py-2 text-[8px] font-black uppercase tracking-[0.13em] text-[#102b36]">{t.asOf}</span><a href={campaignFinanceSourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-white/20 px-3 py-2 text-[8px] font-black uppercase tracking-[0.13em]">{t.official}<ArrowUpRight className="h-4 w-4" /></a></div>
        </div>
      </section>

      <section className="paper-texture py-16 sm:py-24">
        <div className="container">
          <Breadcrumbs language={language} items={[{ label: language === "en" ? "Election 2026" : "Elecciones 2026", href: language === "en" ? "/election-2026" : "/es/elecciones-2026" }, { label: language === "en" ? "Campaign finance" : "Finanzas de campaña" }]} />

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[{ label: t.candidates, value: candidateFinanceRecords.length, icon: CircleDollarSign }, { label: t.reports, value: reportCount, icon: FileSearch }, { label: t.extracted, value: extractedCount, icon: BarChart3 }, { label: t.missing, value: missingCount, icon: ShieldAlert }].map((item) => <div key={item.label} className="border border-[#102b36]/14 bg-[#fbf8f1] p-6"><item.icon className="h-5 w-5 text-[#e75037]" /><strong className="mt-6 block font-display text-5xl font-black tracking-[-0.05em]">{item.value}</strong><span className="mt-2 block text-[8px] font-black uppercase tracking-[0.13em] text-[#68797c]">{item.label}</span></div>)}
          </div>

          <section className="mt-14 grid gap-8 lg:grid-cols-[1fr_310px]">
            <div className="bg-[#102b36] p-6 text-white sm:p-9">
              <p className="section-kicker section-kicker-light">{t.comparison}</p>
              <p className="mt-4 max-w-3xl text-sm leading-6 text-[#b9cbc7]">{t.comparisonText}</p>
              {comparable.length ? <div className="mt-8 space-y-5">{comparable.map(({ record, filing }) => <div key={record.slug}><div className="mb-2 flex items-end justify-between gap-4"><div><Link href={language === "en" ? record.profileHref : record.profileHrefEs} className="font-display text-xl font-black">{record.ballotName}</Link><p className="mt-1 text-[8px] uppercase tracking-[0.11em] text-[#91aaa6]">{filing?.filingType} · {filing?.reportDate}</p></div><strong className="font-mono text-sm text-[#f0dfbd]">{money(filing?.totalContributions, language)}</strong></div><div className="h-2 bg-white/10"><div className="h-full bg-[#e75037]" style={{ width: `${Math.max(2, ((filing?.totalContributions ?? 0) / maxContributions) * 100)}%` }} /></div></div>)}</div> : <div className="mt-8 border border-white/12 bg-white/[0.04] p-6 text-sm leading-6 text-[#b9cbc7]">{t.none}</div>}
            </div>
            <div className="space-y-5"><section className="bg-[#f0dfbd] p-7"><ShieldCheck className="h-6 w-6 text-[#e75037]" /><h2 className="mt-5 font-display text-3xl font-black tracking-[-0.04em]">{t.source}</h2><p className="mt-3 text-sm leading-6 text-[#4f5f61]">{t.sourceText}</p><a href={campaignFinanceSourceUrl} target="_blank" rel="noopener noreferrer" className="mt-6 flex items-center justify-between text-[8px] font-black uppercase tracking-[0.12em]">{t.official}<ArrowUpRight className="h-4 w-4" /></a></section><AdUnit language={language} /></div>
          </section>

          <section className="mt-14">
            <div className="flex items-center gap-3"><SlidersHorizontal className="h-5 w-5 text-[#e75037]" /><p className="section-kicker">{language === "en" ? "Filter the record" : "Filtrar el registro"}</p></div>
            <div className="mt-6 grid gap-3 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
              <label className="relative"><Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#718083]" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={t.search} className="min-h-12 w-full border border-[#102b36]/18 bg-white pl-11 pr-4 text-sm outline-none focus:border-[#e75037]" /></label>
              <select value={office} onChange={(event) => setOffice(event.target.value)} className="min-h-12 border border-[#102b36]/18 bg-white px-4 text-sm outline-none focus:border-[#e75037]"><option value="all">{t.allOffices}</option>{offices.map((item) => <option key={item} value={item}>{item}</option>)}</select>
              <select value={status} onChange={(event) => setStatus(event.target.value)} className="min-h-12 border border-[#102b36]/18 bg-white px-4 text-sm outline-none focus:border-[#e75037]"><option value="all">{t.allStatuses}</option><option value="amounts-extracted">{t.amountsExtracted}</option><option value="documents-found">{t.documentsFound}</option><option value="no-2026-filing-located">{t.notLocated}</option></select>
              <select value={sort} onChange={(event) => setSort(event.target.value as SortKey)} className="min-h-12 border border-[#102b36]/18 bg-white px-4 text-sm outline-none focus:border-[#e75037]"><option value="contributions">{t.sortContributions}</option><option value="expenditures">{t.sortExpenditures}</option><option value="cash">{t.sortCash}</option><option value="report-date">{t.sortDate}</option><option value="name">{t.sortName}</option></select>
            </div>

            <div className="mt-6 overflow-x-auto border border-[#102b36]/14 bg-[#fbf8f1]">
              <table className="w-full min-w-[1180px] border-collapse text-left">
                <thead className="bg-[#102b36] text-white"><tr>{[t.candidate, t.office, t.treasurer, t.latest, t.contributions, t.expenditures, t.cash, t.loans, t.status, t.actions].map((heading) => <th key={heading} className="px-4 py-4 text-[8px] font-black uppercase tracking-[0.12em]">{heading}</th>)}</tr></thead>
                <tbody>{filtered.map((record) => { const filing = latestFiling(record); return <tr key={record.slug} className="border-b border-[#102b36]/10 align-top last:border-b-0 hover:bg-white"><td className="px-4 py-5"><Link href={language === "en" ? record.profileHref : record.profileHrefEs} className="font-display text-lg font-black leading-tight hover:text-[#e75037]">{record.ballotName}</Link><p className="mt-1 text-[8px] text-[#718083]">{record.fullName}</p></td><td className="px-4 py-5 text-xs leading-5">{language === "en" ? record.office : record.officeEs}</td><td className="px-4 py-5 text-xs leading-5">{record.campaignTreasurer}</td><td className="px-4 py-5 text-xs leading-5">{filing ? <><strong className="block">{filing.reportDate}</strong><span className="text-[#718083]">{filing.filingType}</span></> : "—"}</td><td className="px-4 py-5 font-mono text-xs font-bold">{money(filing?.totalContributions, language)}</td><td className="px-4 py-5 font-mono text-xs font-bold">{money(filing?.totalExpenditures, language)}</td><td className="px-4 py-5 font-mono text-xs font-bold">{money(filing?.cashOnHand, language)}</td><td className="px-4 py-5 font-mono text-xs font-bold">{money(filing?.loansOutstanding, language)}</td><td className="px-4 py-5"><span className={`inline-flex px-2.5 py-1.5 text-[7px] font-black uppercase tracking-[0.1em] ${statusClass(record.status)}`}>{statusLabel(record.status, language)}</span><p className="mt-2 max-w-[190px] text-[8px] leading-4 text-[#718083]">{language === "en" ? record.statusNote : record.statusNoteEs}</p></td><td className="px-4 py-5"><div className="grid gap-2"><Link href={language === "en" ? record.profileHref : record.profileHrefEs} className="text-[8px] font-black uppercase tracking-[0.11em] text-[#102b36]">{t.profile}</Link>{filing && <a href={filing.documentUrl} target="_blank" rel="noopener noreferrer" className="text-[8px] font-black uppercase tracking-[0.11em] text-[#e75037]">{t.report}</a>}</div></td></tr>; })}</tbody>
              </table>
              {!filtered.length && <p className="p-8 text-sm text-[#65777a]">{t.noResults}</p>}
            </div>
          </section>

          <section className="mt-14">
            <div className="max-w-3xl"><p className="section-kicker">{t.history}</p><p className="mt-4 text-sm leading-6 text-[#5f7174]">{t.historyText}</p></div>
            <div className="mt-7 grid gap-5 xl:grid-cols-2">
              {filtered.filter((record) => record.filings.length).map((record) => <article key={record.slug} className="border border-[#102b36]/14 bg-[#fbf8f1] p-6 sm:p-7"><div className="flex flex-wrap items-start justify-between gap-4"><div><Link href={language === "en" ? record.profileHref : record.profileHrefEs} className="font-display text-3xl font-black tracking-[-0.04em] hover:text-[#e75037]">{record.ballotName}</Link><p className="mt-1 text-[8px] font-black uppercase tracking-[0.11em] text-[#718083]">{language === "en" ? record.office : record.officeEs}</p></div><span className="bg-[#102b36] px-3 py-2 text-[8px] font-black uppercase tracking-[0.11em] text-white">{record.filings.length} {t.reports.toLowerCase()}</span></div><div className="mt-6 grid gap-3">{[...record.filings].sort((a, b) => b.reportDate.localeCompare(a.reportDate)).map((filing) => <a key={filing.documentUrl} href={filing.documentUrl} target="_blank" rel="noopener noreferrer" className="group border border-[#102b36]/12 bg-white p-4 transition hover:border-[#e75037]"><div className="flex items-start justify-between gap-4"><div><p className="text-[9px] font-black uppercase tracking-[0.12em] text-[#e75037]">{filing.reportDate} · {filing.filingType}</p><p className="mt-2 text-xs text-[#607174]">{t.coverage}: {filing.coveragePeriod || "—"}</p></div><ArrowUpRight className="h-4 w-4 shrink-0 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></div><div className="mt-4 grid grid-cols-2 gap-3 text-xs sm:grid-cols-4"><span><small className="block text-[7px] font-black uppercase tracking-[0.1em] text-[#809093]">{t.contributions}</small><strong className="mt-1 block font-mono">{money(filing.totalContributions, language)}</strong></span><span><small className="block text-[7px] font-black uppercase tracking-[0.1em] text-[#809093]">{t.expenditures}</small><strong className="mt-1 block font-mono">{money(filing.totalExpenditures, language)}</strong></span><span><small className="block text-[7px] font-black uppercase tracking-[0.1em] text-[#809093]">{t.cash}</small><strong className="mt-1 block font-mono">{money(filing.cashOnHand, language)}</strong></span><span><small className="block text-[7px] font-black uppercase tracking-[0.1em] text-[#809093]">{t.loans}</small><strong className="mt-1 block font-mono">{money(filing.loansOutstanding, language)}</strong></span></div></a>)}</div></article>)}
            </div>
          </section>

          <section className="mt-14 grid gap-8 bg-[#102b36] p-7 text-white lg:grid-cols-[0.65fr_1.35fr] sm:p-10">
            <div><ShieldCheck className="h-7 w-7 text-[#e75037]" /><h2 className="mt-6 font-display text-4xl font-black tracking-[-0.045em]">{t.methodology}</h2><p className="mt-4 text-sm leading-6 text-[#adc1bd]">{t.update}</p></div>
            <div className="grid gap-3 sm:grid-cols-2">{[t.method1, t.method2, t.method3, t.method4].map((item, index) => <div key={item} className="border border-white/12 bg-white/[0.04] p-5"><span className="font-mono text-[9px] font-bold text-[#e75037]">0{index + 1}</span><p className="mt-3 text-sm leading-6 text-[#cad7d4]">{item}</p></div>)}</div>
          </section>

          <div className="mt-8 max-w-md"><ContactMini language={language} /></div>
        </div>
      </section>
    </PageShell>
  );
}
