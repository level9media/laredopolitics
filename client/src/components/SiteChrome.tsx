import { FormEvent, useState } from "react";
import { ArrowRight, Mail, Menu, ShieldCheck, Vote, X } from "lucide-react";
import { Link } from "wouter";
import { toast } from "sonner";
import AdCarousel from "@/components/AdCarousel";

type Language = "en" | "es";
type Crumb = { label: string; href?: string };

const chromeCopy = {
  en: {
    tagline: "The politics of our city",
    top: "Laredo, Texas · 2026 Election",
    standard: "Independent · Nonpartisan",
    links: [["Election 2026", "/eleccion-alcalde-laredo-2026"], ["Candidates", "/candidatos"], ["Compare", "/comparar-candidatos"], ["Issues", "/temas"], ["How to vote", "/votar"]],
    plan: "Voting plan",
    home: "Home",
    brief: "The Laredo Brief",
    briefLine: "Once a week. Only what matters.",
    subscribe: "Subscribe",
    footerLine: "Clear information for a city deciding its future.",
    footerLinks: [["Candidates", "/candidatos"], ["Compare", "/comparar-candidatos"], ["Issues", "/temas"], ["How to vote", "/votar"], ["Methodology", "/metodologia"]],
    advertise: "Advertise",
    disclaimer: "Independent, nonpartisan resource. We do not endorse candidates. Verify voting instructions with official election authorities.",
    credit: "Site created and managed by",
    sources: "Sources and verification",
    sourceTitle: "Read the original documents",
    correction: "Have a correction or source document?",
    correctionText: "Send us the primary source. Verified corrections are identified and updated publicly.",
    toast: "Ready to connect",
    toastDescription: "Connect this form to your preferred email platform to activate The Laredo Brief.",
  },
  es: {
    tagline: "La política de nuestra ciudad",
    top: "Laredo, Texas · Elección 2026",
    standard: "Independiente · No partidista",
    links: [["Elección 2026", "/es/eleccion-alcalde-laredo-2026"], ["Candidatos", "/es/candidatos"], ["Comparar", "/es/comparar-candidatos"], ["Temas", "/es/temas"], ["Cómo votar", "/es/votar"]],
    plan: "Plan para votar",
    home: "Inicio",
    brief: "El Brief de Laredo",
    briefLine: "Una vez por semana. Sólo lo que importa.",
    subscribe: "Suscríbeme",
    footerLine: "Información clara para una ciudad que decide su futuro.",
    footerLinks: [["Candidatos", "/es/candidatos"], ["Comparar", "/es/comparar-candidatos"], ["Temas", "/es/temas"], ["Cómo votar", "/es/votar"], ["Metodología", "/es/metodologia"]],
    advertise: "Anúnciate",
    disclaimer: "Recurso independiente y no partidista. No respaldamos candidatos. Verifica instrucciones electorales con las autoridades oficiales.",
    credit: "Sitio creado y administrado por",
    sources: "Fuentes y verificación",
    sourceTitle: "Lee los documentos originales",
    correction: "¿Tienes una corrección o documento?",
    correctionText: "Envíanos la fuente primaria. Las correcciones verificadas se identifican y actualizan públicamente.",
    toast: "Lista para conectar",
    toastDescription: "Conecta este formulario a tu plataforma de email preferida para activar El Brief de Laredo.",
  },
} as const;

export function Logo({ inverted = false, language = "en" }: { inverted?: boolean; language?: Language }) {
  const t = chromeCopy[language];
  return (
    <span className="flex items-center gap-3">
      <span className="brand-mark" aria-hidden="true"><img src="/manus-storage/laredo-texas-logo_e7a4842a.png" alt="" /></span>
      <span>
        <span className={`block font-display text-[20px] font-black leading-none tracking-[-0.04em] sm:text-[24px] ${inverted ? "text-white" : "text-[#102b36]"}`}>LAREDO<span className="text-[#e75037]">MAYOR</span></span>
        <span className={`mt-1 block text-[7px] font-extrabold uppercase tracking-[0.25em] sm:text-[8px] ${inverted ? "text-[#9eb3b0]" : "text-[#66777a]"}`}>{t.tagline}</span>
      </span>
    </span>
  );
}

export function SiteHeader({ language = "en" }: { language?: Language }) {
  const [open, setOpen] = useState(false);
  const t = chromeCopy[language];
  const currentPath = typeof window === "undefined" ? (language === "en" ? "/" : "/es") : window.location.pathname;
  const languageHref = language === "en" ? `/es${currentPath === "/" ? "" : currentPath}` : (currentPath.replace(/^\/es/, "") || "/");
  const languageLabel = language === "en" ? "ES" : "EN";
  const homeHref = language === "en" ? "/" : "/es";

  return (
    <>
      <div className="bg-[#0d2732] text-[#dbe6e3]"><div className="container flex min-h-9 items-center justify-between py-2 text-[9px] font-bold uppercase tracking-[0.18em] sm:text-[10px]"><span>{t.top}</span><span className="hidden items-center gap-2 sm:flex"><ShieldCheck className="h-3.5 w-3.5" /> {t.standard}</span></div></div>
      <header className="sticky top-0 z-50 border-b border-[#132a33]/10 bg-[#f8f4ec]/95 shadow-[0_12px_30px_rgba(15,39,49,0.06)] backdrop-blur-xl">
        <div className="container flex h-[78px] items-center justify-between gap-4">
          <Link href={homeHref} aria-label="Laredo Mayor home"><Logo language={language} /></Link>
          <nav className="hidden items-center gap-6 xl:flex" aria-label="Resource navigation">{t.links.map(([label, href]) => <Link key={href} href={href} data-umami-event={`resource-nav-${href.replaceAll("/", "") || "home"}`} className="nav-link text-[10px] font-extrabold uppercase tracking-[0.08em] text-[#243b43]">{label}</Link>)}</nav>
          <div className="flex items-center gap-2">
            <Link href={languageHref} className="grid h-10 min-w-10 place-items-center rounded-full border border-[#102b36]/15 bg-white px-3 text-[9px] font-black tracking-[0.12em] text-[#102b36]" aria-label={language === "en" ? "Ver sitio en español" : "View site in English"}>{languageLabel}</Link>
            <Link href={language === "en" ? "/votar" : "/es/votar"} className="hidden items-center gap-2 bg-[#e75037] px-4 py-3 text-[9px] font-black uppercase tracking-[0.13em] text-white shadow-[4px_4px_0_#102b36] active:scale-[0.97] sm:flex"><Vote className="h-4 w-4" /> {t.plan}</Link>
            <button type="button" onClick={() => setOpen((value) => !value)} className="grid h-11 w-11 place-items-center border border-[#102b36]/15 bg-white xl:hidden" aria-expanded={open} aria-label="Open menu">{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
          </div>
        </div>
        {open && <nav className="border-t border-[#102b36]/10 bg-[#f8f4ec] xl:hidden" aria-label="Mobile resource navigation"><div className="container grid py-3 sm:grid-cols-2">{t.links.map(([label, href]) => <Link key={href} href={href} data-umami-event={`mobile-nav-${href.replaceAll("/", "") || "home"}`} onClick={() => setOpen(false)} className="border-b border-[#102b36]/10 py-3 font-display text-lg font-bold">{label}</Link>)}</div></nav>}
      </header>
    </>
  );
}

export function Breadcrumbs({ items, language = "en" }: { items: Crumb[]; language?: Language }) {
  const t = chromeCopy[language];
  return <nav aria-label="Breadcrumb" className="mb-7 flex flex-wrap items-center gap-2 text-[9px] font-black uppercase tracking-[0.14em] text-[#708083]"><Link href={language === "en" ? "/" : "/es"} className="hover:text-[#e75037]">{t.home}</Link>{items.map((item) => <span key={item.label} className="flex items-center gap-2"><span className="text-[#e75037]">/</span>{item.href ? <Link href={item.href} className="hover:text-[#e75037]">{item.label}</Link> : <span>{item.label}</span>}</span>)}</nav>;
}

export function AdUnit({ compact = false, language = "en", placement = "resource" }: { compact?: boolean; language?: Language; placement?: "homepage" | "resource" }) {
  return <AdCarousel compact={compact} language={language} placement={placement} />;
}

export function NewsletterBar({ language = "en" }: { language?: Language }) {
  const t = chromeCopy[language];
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); toast.success(t.toast, { description: t.toastDescription }); };
  return <section className="bg-[#e75037] py-9 text-white"><div className="container grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-center"><div><p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#102b36]">{t.brief}</p><p className="mt-2 font-display text-2xl font-black tracking-[-0.03em]">{t.briefLine}</p></div><form onSubmit={submit} className="flex flex-col gap-2 sm:flex-row"><label htmlFor={`resource-email-${language}`} className="sr-only">Email</label><input id={`resource-email-${language}`} type="email" required placeholder="you@email.com" className="min-h-13 flex-1 border border-white/30 bg-white px-4 text-sm text-[#102b36] outline-none placeholder:text-[#718083] focus:border-[#102b36]" /><button data-umami-event="resource-newsletter-submit" className="flex min-h-13 items-center justify-center gap-2 bg-[#102b36] px-5 text-[9px] font-black uppercase tracking-[0.12em] text-white active:scale-[0.97]" type="submit">{t.subscribe} <ArrowRight className="h-4 w-4" /></button></form></div></section>;
}

export function SiteFooter({ language = "en" }: { language?: Language }) {
  const t = chromeCopy[language];
  return <footer className="bg-[#071b23] py-12 text-[#9eb3b0]"><div className="container"><div className="grid gap-9 border-b border-white/10 pb-9 md:grid-cols-[1fr_auto] md:items-end"><div><Link href={language === "en" ? "/" : "/es"} className="inline-flex"><Logo inverted language={language} /></Link><p className="mt-4 max-w-xl font-display text-lg italic text-[#d4dfdc]">{t.footerLine}</p></div><div className="grid grid-cols-2 gap-x-7 gap-y-3 text-[9px] font-black uppercase tracking-[0.13em] sm:grid-cols-3">{t.footerLinks.map(([label, href]) => <Link key={href} href={href} className="hover:text-white">{label}</Link>)}<a href={`${language === "en" ? "/" : "/es"}#advertise-form`} className="hover:text-white">{t.advertise}</a></div></div><div className="mt-7 flex flex-col gap-4 text-[10px] leading-5 md:flex-row md:justify-between"><p className="max-w-3xl">{t.disclaimer}</p><p className="shrink-0">{t.credit} <a href="https://levelninemedia.com/" target="_blank" rel="noopener noreferrer" className="font-bold text-white underline decoration-[#e75037] underline-offset-4">Level Nine Media</a></p></div></div></footer>;
}

export function PageShell({ children, language = "en" }: { children: React.ReactNode; language?: Language }) {
  return <div className="min-h-screen bg-[#f4f0e8] text-[#132a33]"><SiteHeader language={language} /><main>{children}</main><NewsletterBar language={language} /><SiteFooter language={language} /></div>;
}

export function SourceList({ sources, language = "en" }: { sources: Array<{ title: string; publisher: string; url: string }>; language?: Language }) {
  const t = chromeCopy[language];
  return <section className="border-t border-[#102b36]/15 pt-8"><div className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center bg-[#102b36] text-white"><ShieldCheck className="h-4 w-4" /></span><div><p className="text-[9px] font-black uppercase tracking-[0.16em] text-[#e75037]">{t.sources}</p><h2 className="font-display text-2xl font-black">{t.sourceTitle}</h2></div></div><ol className="mt-6 grid gap-3">{sources.map((source, index) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer" data-umami-event="official-source-click" className="group flex items-start gap-4 bg-white/65 p-4 text-sm shadow-sm transition hover:-translate-y-0.5 hover:bg-white"><span className="font-mono text-[10px] font-bold text-[#e75037]">{String(index + 1).padStart(2, "0")}</span><span className="flex-1"><strong>{source.title}</strong><span className="mt-1 block text-xs text-[#68787a]">{source.publisher}</span></span><ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></a></li>)}</ol></section>;
}

export function ContactMini({ language = "en" }: { language?: Language }) {
  const t = chromeCopy[language];
  return <section className="bg-[#102b36] p-7 text-white"><Mail className="h-5 w-5 text-[#e75037]" /><h2 className="mt-5 font-display text-3xl font-black tracking-[-0.035em]">{t.correction}</h2><p className="mt-3 text-sm leading-6 text-[#b9c9c7]">{t.correctionText}</p><a href="mailto:editor@laredomayor.com" className="mt-6 inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.13em] text-[#f0dfbd]">editor@laredomayor.com <ArrowRight className="h-4 w-4" /></a></section>;
}
