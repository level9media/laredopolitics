import { FormEvent, useState } from "react";
import { ArrowRight, Mail, Menu, ShieldCheck, Vote, X } from "lucide-react";
import { Link } from "wouter";
import { toast } from "sonner";
import AdCarousel from "@/components/AdCarousel";
import { submitDirectForm } from "@/lib/directForms";

type Language = "en" | "es";
type Crumb = { label: string; href?: string };

const chromeCopy = {
  en: {
    tagline: "The politics of our city",
    top: "Laredo, Texas · 2026 Election",
    standard: "Independent · Nonpartisan",
    links: [["Election 2026", "/election-2026"], ["Mayor", "/candidatos"], ["Issues", "/temas"], ["Finance", "/campaign-finance"], ["Where to vote", "/where-to-vote"]],
    plan: "Find where to vote",
    home: "Home",
    brief: "The Laredo Brief",
    briefLine: "Once a week. Only what matters.",
    subscribe: "Subscribe",
    footerLine: "Clear information for a city deciding its future.",
    footerLinks: [["Election 2026", "/election-2026"], ["Mayor", "/candidatos"], ["Mayor compare", "/comparar-candidatos"], ["Issues", "/temas"], ["Campaign finance", "/campaign-finance"], ["Where to vote", "/where-to-vote"], ["How to vote", "/votar"], ["Methodology", "/metodologia"]],
    advertise: "Advertise with us",
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
    links: [["Elección 2026", "/es/elecciones-2026"], ["Alcaldía", "/es/candidatos"], ["Temas", "/es/temas"], ["Finanzas", "/es/finanzas-de-campana"], ["Dónde votar", "/es/donde-votar"]],
    plan: "Encuentra dónde votar",
    home: "Inicio",
    brief: "El Brief de Laredo",
    briefLine: "Una vez por semana. Sólo lo que importa.",
    subscribe: "Suscríbeme",
    footerLine: "Información clara para una ciudad que decide su futuro.",
    footerLinks: [["Elección 2026", "/es/elecciones-2026"], ["Alcaldía", "/es/candidatos"], ["Comparar alcalde", "/es/comparar-candidatos"], ["Temas", "/es/temas"], ["Finanzas de campaña", "/es/finanzas-de-campana"], ["Dónde votar", "/es/donde-votar"], ["Cómo votar", "/es/votar"], ["Metodología", "/es/metodologia"]],
    advertise: "Anúnciate con nosotros",
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
        <span className={`block font-display text-[18px] font-black leading-none tracking-[-0.045em] sm:text-[22px] ${inverted ? "text-white" : "text-[#102b36]"}`}>LAREDO<span className="text-[#e75037]">POLITICS</span></span>
        <span className={`mt-1 block text-[7px] font-extrabold uppercase tracking-[0.25em] sm:text-[8px] ${inverted ? "text-[#9eb3b0]" : "text-[#66777a]"}`}>{t.tagline}</span>
      </span>
    </span>
  );
}

export function SiteHeader({ language = "en" }: { language?: Language }) {
  const [open, setOpen] = useState(false);
  const t = chromeCopy[language];
  const currentPath = typeof window === "undefined" ? (language === "en" ? "/" : "/es") : window.location.pathname;
  const languageHref = language === "en"
    ? currentPath.startsWith("/election-2026/candidates/")
      ? currentPath.replace("/election-2026/candidates/", "/es/elecciones-2026/candidatos/")
      : currentPath === "/campaign-finance" || currentPath === "/finanzas-de-campana"
        ? "/es/finanzas-de-campana"
        : currentPath === "/where-to-vote"
          ? "/es/donde-votar"
          : currentPath === "/advertise"
            ? "/es/anunciate"
            : currentPath.startsWith("/election-2026")
              ? `/es/elecciones-2026${currentPath.slice("/election-2026".length)}`
              : `/es${currentPath === "/" ? "" : currentPath}`
    : currentPath.startsWith("/es/elecciones-2026/candidatos/")
      ? currentPath.replace("/es/elecciones-2026/candidatos/", "/election-2026/candidates/")
      : currentPath === "/es/finanzas-de-campana"
        ? "/campaign-finance"
        : currentPath === "/es/donde-votar"
          ? "/where-to-vote"
          : currentPath === "/es/anunciate"
            ? "/advertise"
            : currentPath.startsWith("/es/elecciones-2026")
              ? `/election-2026${currentPath.slice("/es/elecciones-2026".length)}`
              : (currentPath.replace(/^\/es/, "") || "/");
  const languageLabel = language === "en" ? "ES" : "EN";
  const homeHref = language === "en" ? "/" : "/es";

  return (
    <>
      <div className="bg-[#0d2732] text-[#dbe6e3]"><div className="container flex min-h-9 items-center justify-between py-2 text-[9px] font-bold uppercase tracking-[0.18em] sm:text-[10px]"><span>{t.top}</span><span className="hidden items-center gap-2 sm:flex"><ShieldCheck className="h-3.5 w-3.5" /> {t.standard}</span></div></div>
      <header className="sticky top-0 z-50 border-b border-[#132a33]/10 bg-[#f8f4ec]/95 shadow-[0_12px_30px_rgba(15,39,49,0.06)] backdrop-blur-xl">
        <div className="container flex h-[78px] items-center justify-between gap-4">
          <Link href={homeHref} aria-label="Laredo Politics home"><Logo language={language} /></Link>
          <nav className="hidden items-center gap-6 xl:flex" aria-label="Resource navigation">{t.links.map(([label, href]) => <Link key={href} href={href} data-umami-event={`resource-nav-${href.replaceAll("/", "") || "home"}`} className="nav-link text-[10px] font-extrabold uppercase tracking-[0.08em] text-[#243b43]">{label}</Link>)}</nav>
          <div className="flex items-center gap-2">
            <Link href={languageHref} className="grid h-10 min-w-10 place-items-center rounded-full border border-[#102b36]/15 bg-white px-3 text-[9px] font-black tracking-[0.12em] text-[#102b36]" aria-label={language === "en" ? "Ver sitio en español" : "View site in English"}>{languageLabel}</Link>
            <Link href={language === "en" ? "/where-to-vote" : "/es/donde-votar"} className="hidden items-center gap-2 bg-[#e75037] px-4 py-3 text-[9px] font-black uppercase tracking-[0.13em] text-white shadow-[4px_4px_0_#102b36] active:scale-[0.97] sm:flex"><Vote className="h-4 w-4" /> {t.plan}</Link>
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
  const [sending, setSending] = useState(false);
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setSending(true);
    try {
      await submitDirectForm("site_update_signup", {
        subject: "New site update signup",
        email: String(data.get("email") || ""),
        language,
      });
      form.reset();
      toast.success(language === "es" ? "Registro enviado" : "Signup sent", {
        description: language === "es" ? "Ya estás en la lista de actualizaciones." : "You’re on the site-update list.",
      });
    } catch {
      toast.error(language === "es" ? "No se pudo enviar" : "Submission failed", {
        description: language === "es" ? "Inténtalo de nuevo en un momento." : "Please try again in a moment.",
      });
    } finally {
      setSending(false);
    }
  };
  return <section className="bg-[#e75037] py-9 text-white"><div className="container grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-center"><div><p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#102b36]">{t.brief}</p><p className="mt-2 font-display text-2xl font-black tracking-[-0.03em]">{t.briefLine}</p></div><form onSubmit={submit} className="flex flex-col gap-2 sm:flex-row"><label htmlFor={`resource-email-${language}`} className="sr-only">Email</label><input id={`resource-email-${language}`} name="email" type="email" required placeholder={language === "es" ? "tu@email.com" : "you@email.com"} className="min-h-13 flex-1 border border-white/30 bg-white px-4 text-sm text-[#102b36] outline-none placeholder:text-[#718083] focus:border-[#102b36]" /><button disabled={sending} data-umami-event="resource-newsletter-submit" className="flex min-h-13 items-center justify-center gap-2 bg-[#102b36] px-5 text-[9px] font-black uppercase tracking-[0.12em] text-white active:scale-[0.97] disabled:cursor-wait disabled:opacity-65" type="submit">{sending ? (language === "es" ? "Enviando…" : "Sending…") : t.subscribe} <ArrowRight className="h-4 w-4" /></button></form></div></section>;
}

export function SiteFooter({ language = "en" }: { language?: Language }) {
  const t = chromeCopy[language];
  return <footer className="bg-[#071b23] py-12 text-[#9eb3b0]"><div className="container"><div className="grid gap-9 border-b border-white/10 pb-9 md:grid-cols-[1fr_auto] md:items-end"><div><Link href={language === "en" ? "/" : "/es"} className="inline-flex"><Logo inverted language={language} /></Link><p className="mt-4 max-w-xl font-display text-lg italic text-[#d4dfdc]">{t.footerLine}</p></div><div className="grid grid-cols-2 gap-x-7 gap-y-3 text-[9px] font-black uppercase tracking-[0.13em] sm:grid-cols-3">{t.footerLinks.map(([label, href]) => <Link key={href} href={href} className="hover:text-white">{label}</Link>)}<Link href={language === "en" ? "/advertise" : "/es/anunciate"} className="text-[#f0dfbd] hover:text-white">{t.advertise}</Link></div></div><div className="mt-7 flex flex-col gap-4 text-[10px] leading-5 md:flex-row md:justify-between"><p className="max-w-3xl">{t.disclaimer}</p><p className="shrink-0">{t.credit} <a href="https://levelninemedia.com/" target="_blank" rel="noopener noreferrer" className="font-bold text-white underline decoration-[#e75037] underline-offset-4">Level Nine Media</a></p></div></div></footer>;
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
  const [sending, setSending] = useState(false);
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setSending(true);
    try {
      await submitDirectForm("correction_submission", {
        subject: "Correction or source submission",
        name: String(data.get("name") || ""),
        email: String(data.get("email") || ""),
        correction_or_source: String(data.get("message") || ""),
        language,
      });
      form.reset();
      toast.success(language === "es" ? "Documento enviado" : "Submission sent");
    } catch {
      toast.error(language === "es" ? "No se pudo enviar" : "Submission failed");
    } finally {
      setSending(false);
    }
  };
  return <section className="bg-[#102b36] p-7 text-white"><Mail className="h-5 w-5 text-[#e75037]" /><h2 className="mt-5 font-display text-3xl font-black tracking-[-0.035em]">{t.correction}</h2><p className="mt-3 text-sm leading-6 text-[#b9c9c7]">{t.correctionText}</p><form onSubmit={submit} className="mt-6 grid gap-3"><input name="name" required placeholder={language === "es" ? "Tu nombre" : "Your name"} className="min-h-11 border border-white/15 bg-white/10 px-3 text-xs text-white outline-none placeholder:text-white/45 focus:border-[#f0dfbd]" /><input name="email" type="email" required placeholder={language === "es" ? "Tu email" : "Your email"} className="min-h-11 border border-white/15 bg-white/10 px-3 text-xs text-white outline-none placeholder:text-white/45 focus:border-[#f0dfbd]" /><textarea name="message" required rows={4} placeholder={language === "es" ? "Corrección o enlace a la fuente" : "Correction or source link"} className="resize-y border border-white/15 bg-white/10 p-3 text-xs leading-5 text-white outline-none placeholder:text-white/45 focus:border-[#f0dfbd]" /><button type="submit" disabled={sending} className="flex min-h-11 items-center justify-center gap-2 bg-[#f0dfbd] px-4 text-[8px] font-black uppercase tracking-[0.13em] text-[#102b36] active:scale-[0.97] disabled:cursor-wait disabled:opacity-65">{sending ? (language === "es" ? "Enviando…" : "Sending…") : (language === "es" ? "Enviar directamente" : "Send directly")} <ArrowRight className="h-4 w-4" /></button></form><p className="mt-4 text-[8px] uppercase tracking-[0.1em] text-[#8fa8a5]">{language === "es" ? "Envío directo · sin abrir tu correo" : "Direct delivery · no email app opens"}</p></section>;
}
