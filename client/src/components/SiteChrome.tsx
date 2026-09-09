import { FormEvent, useState } from "react";
import { ArrowRight, Mail, Menu, ShieldCheck, Store, Vote, X } from "lucide-react";
import { Link } from "wouter";
import { toast } from "sonner";

type Crumb = { label: string; href?: string };

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <span className="brand-mark" aria-hidden="true">
        <img src="/manus-storage/laredo-texas-logo_e7a4842a.png" alt="" />
      </span>
      <span>
        <span className={`block font-display text-[20px] font-black leading-none tracking-[-0.04em] sm:text-[24px] ${inverted ? "text-white" : "text-[#102b36]"}`}>
          LAREDO<span className="text-[#e75037]">MAYOR</span>
        </span>
        <span className={`mt-1 block text-[7px] font-extrabold uppercase tracking-[0.25em] sm:text-[8px] ${inverted ? "text-[#9eb3b0]" : "text-[#66777a]"}`}>
          La política de nuestra ciudad
        </span>
      </span>
    </span>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Elección 2026", "/eleccion-alcalde-laredo-2026"],
    ["Candidatos", "/candidatos"],
    ["Comparar", "/comparar-candidatos"],
    ["Temas", "/temas"],
    ["Cómo votar", "/votar"],
  ];

  return (
    <>
      <div className="bg-[#0d2732] text-[#dbe6e3]">
        <div className="container flex min-h-9 items-center justify-between py-2 text-[9px] font-bold uppercase tracking-[0.18em] sm:text-[10px]">
          <span>Laredo, Texas · Elección 2026</span>
          <span className="hidden items-center gap-2 sm:flex"><ShieldCheck className="h-3.5 w-3.5" /> Independiente · No partidista</span>
        </div>
      </div>
      <header className="sticky top-0 z-50 border-b border-[#132a33]/10 bg-[#f8f4ec]/95 shadow-[0_12px_30px_rgba(15,39,49,0.06)] backdrop-blur-xl">
        <div className="container flex h-[78px] items-center justify-between gap-4">
          <Link href="/" aria-label="Laredo Mayor home"><Logo /></Link>
          <nav className="hidden items-center gap-6 xl:flex" aria-label="Resource navigation">
            {links.map(([label, href]) => (
              <Link key={href} href={href} data-umami-event={`resource-nav-${href.replaceAll("/", "") || "home"}`} className="nav-link text-[10px] font-extrabold uppercase tracking-[0.08em] text-[#243b43]">{label}</Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/votar" className="hidden items-center gap-2 bg-[#e75037] px-4 py-3 text-[9px] font-black uppercase tracking-[0.13em] text-white shadow-[4px_4px_0_#102b36] active:scale-[0.97] sm:flex">
              <Vote className="h-4 w-4" /> Plan para votar
            </Link>
            <button type="button" onClick={() => setOpen((value) => !value)} className="grid h-11 w-11 place-items-center border border-[#102b36]/15 bg-white xl:hidden" aria-expanded={open} aria-label="Open menu">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {open && (
          <nav className="border-t border-[#102b36]/10 bg-[#f8f4ec] xl:hidden" aria-label="Mobile resource navigation">
            <div className="container grid py-3 sm:grid-cols-2">
              {links.map(([label, href]) => (
                <Link key={href} href={href} data-umami-event={`mobile-nav-${href.replaceAll("/", "") || "home"}`} onClick={() => setOpen(false)} className="border-b border-[#102b36]/10 py-3 font-display text-lg font-bold">{label}</Link>
              ))}
            </div>
          </nav>
        )}
      </header>
    </>
  );
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-7 flex flex-wrap items-center gap-2 text-[9px] font-black uppercase tracking-[0.14em] text-[#708083]">
      <Link href="/" className="hover:text-[#e75037]">Inicio</Link>
      {items.map((item) => (
        <span key={item.label} className="flex items-center gap-2">
          <span className="text-[#e75037]">/</span>
          {item.href ? <Link href={item.href} className="hover:text-[#e75037]">{item.label}</Link> : <span>{item.label}</span>}
        </span>
      ))}
    </nav>
  );
}

export function AdUnit({ compact = false }: { compact?: boolean }) {
  return (
    <a
      href="/#advertise-form"
      data-umami-event="resource-ad-space"
      className={`group relative flex overflow-hidden border border-[#102b36]/15 bg-[#102b36] text-white shadow-[0_18px_50px_rgba(16,43,54,0.12)] ${compact ? "min-h-32 p-5" : "min-h-48 p-7"}`}
    >
      <div className="absolute -bottom-16 -right-12 h-44 w-44 rounded-full border-[28px] border-[#f0dfbd]/10 transition duration-500 group-hover:scale-110" />
      <div className="relative flex w-full flex-col justify-between gap-8">
        <div className="flex items-center justify-between">
          <span className="bg-[#e75037] px-2.5 py-1 text-[8px] font-black uppercase tracking-[0.16em]">Espacio disponible</span>
          <Store className="h-4 w-4 text-[#f0dfbd]" />
        </div>
        <div>
          <p className="font-display text-2xl font-black tracking-[-0.035em]">Tu negocio aquí</p>
          <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.12em] text-[#afc3bf]">Audiencia local · Reporte de clics</p>
        </div>
      </div>
    </a>
  );
}

export function NewsletterBar() {
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.success("Lista para conectar", { description: "Conecta este formulario a tu CRM para activar El Brief de Laredo." });
  };

  return (
    <section className="bg-[#e75037] py-9 text-white">
      <div className="container grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <div>
          <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#102b36]">El Brief de Laredo</p>
          <p className="mt-2 font-display text-2xl font-black tracking-[-0.03em]">Una vez por semana. Sólo lo que importa.</p>
        </div>
        <form onSubmit={submit} className="flex flex-col gap-2 sm:flex-row">
          <label htmlFor="resource-email" className="sr-only">Email</label>
          <input id="resource-email" type="email" required placeholder="tu@email.com" className="min-h-13 flex-1 border border-white/30 bg-white px-4 text-sm text-[#102b36] outline-none placeholder:text-[#718083] focus:border-[#102b36]" />
          <button data-umami-event="resource-newsletter-submit" className="flex min-h-13 items-center justify-center gap-2 bg-[#102b36] px-5 text-[9px] font-black uppercase tracking-[0.12em] text-white active:scale-[0.97]" type="submit">Suscríbeme <ArrowRight className="h-4 w-4" /></button>
        </form>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[#071b23] py-12 text-[#9eb3b0]">
      <div className="container">
        <div className="grid gap-9 border-b border-white/10 pb-9 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <Link href="/" className="inline-flex"><Logo inverted /></Link>
            <p className="mt-4 max-w-xl font-display text-lg italic text-[#d4dfdc]">Información clara para una ciudad que decide su futuro.</p>
          </div>
          <div className="grid grid-cols-2 gap-x-7 gap-y-3 text-[9px] font-black uppercase tracking-[0.13em] sm:grid-cols-3">
            <Link href="/candidatos" className="hover:text-white">Candidatos</Link>
            <Link href="/comparar-candidatos" className="hover:text-white">Comparar</Link>
            <Link href="/temas" className="hover:text-white">Temas</Link>
            <Link href="/votar" className="hover:text-white">Cómo votar</Link>
            <Link href="/metodologia" className="hover:text-white">Metodología</Link>
            <a href="/#advertise-form" className="hover:text-white">Anúnciate</a>
          </div>
        </div>
        <div className="mt-7 flex flex-col gap-4 text-[10px] leading-5 md:flex-row md:justify-between">
          <p className="max-w-3xl">Recurso independiente y no partidista. No respaldamos candidatos. Verifica instrucciones electorales con las autoridades oficiales.</p>
          <p className="shrink-0">
            Sitio creado y administrado por <a href="https://levelninemedia.com/" target="_blank" rel="noopener noreferrer" className="font-bold text-white underline decoration-[#e75037] underline-offset-4">Level Nine Media</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f4f0e8] text-[#132a33]">
      <SiteHeader />
      <main>{children}</main>
      <NewsletterBar />
      <SiteFooter />
    </div>
  );
}

export function SourceList({ sources }: { sources: Array<{ title: string; publisher: string; url: string }> }) {
  return (
    <section className="border-t border-[#102b36]/15 pt-8">
      <div className="flex items-center gap-3">
        <span className="grid h-9 w-9 place-items-center bg-[#102b36] text-white"><ShieldCheck className="h-4 w-4" /></span>
        <div>
          <p className="text-[9px] font-black uppercase tracking-[0.16em] text-[#e75037]">Fuentes y verificación</p>
          <h2 className="font-display text-2xl font-black">Lee los documentos originales</h2>
        </div>
      </div>
      <ol className="mt-6 grid gap-3">
        {sources.map((source, index) => (
          <li key={source.url}>
            <a href={source.url} target="_blank" rel="noopener noreferrer" data-umami-event="official-source-click" className="group flex items-start gap-4 bg-white/65 p-4 text-sm shadow-sm transition hover:-translate-y-0.5 hover:bg-white">
              <span className="font-mono text-[10px] font-bold text-[#e75037]">{String(index + 1).padStart(2, "0")}</span>
              <span className="flex-1"><strong>{source.title}</strong><span className="mt-1 block text-xs text-[#68787a]">{source.publisher}</span></span>
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function ContactMini() {
  return (
    <section className="bg-[#102b36] p-7 text-white">
      <Mail className="h-5 w-5 text-[#e75037]" />
      <h2 className="mt-5 font-display text-3xl font-black tracking-[-0.035em]">¿Tienes una corrección o documento?</h2>
      <p className="mt-3 text-sm leading-6 text-[#b9c9c7]">Envíanos la fuente primaria. Las correcciones verificadas se identifican y actualizan públicamente.</p>
      <a href="mailto:editor@laredomayor.com" className="mt-6 inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.13em] text-[#f0dfbd]">editor@laredomayor.com <ArrowRight className="h-4 w-4" /></a>
    </section>
  );
}
