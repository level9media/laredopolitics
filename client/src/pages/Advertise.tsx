import { FormEvent, useState } from "react";
import { ArrowRight, BarChart3, CheckCircle2, Eye, Languages, LineChart, MapPinned, MousePointerClick, ShieldCheck, TrendingUp, Users } from "lucide-react";
import { toast } from "sonner";
import Seo from "@/components/Seo";
import { Breadcrumbs, PageShell } from "@/components/SiteChrome";
import { submitDirectForm } from "@/lib/directForms";

type Language = "en" | "es";

const growthTargets = [
  { month: "Mar", reach: 10000 }, { month: "Apr", reach: 14000 }, { month: "May", reach: 19000 }, { month: "Jun", reach: 25000 }, { month: "Jul", reach: 33000 }, { month: "Aug", reach: 42000 }, { month: "Sep", reach: 50000 },
];

const copy = {
  en: {
    eyebrow: "Advertise with Laredo Politics",
    title: "Put your business in front of 10,000–50,000 local people per week—and growing.",
    intro: "Own attention around the decisions Laredo residents actively search, read, compare, and share. Reach an English- and Spanish-speaking local audience across election guides, district profiles, voting resources, issues, and candidate research.",
    cta: "Request the media kit",
    honesty: "Launch reach target—not historical traffic",
    honestyText: "The 10,000–50,000 weekly audience is the commercial growth target for this launch. It is not presented as measured historical traffic. Once Google Tag Manager and analytics are connected, this page will display verified users, impressions, clicks, click-through rate, and dates.",
    chartEyebrow: "March–September 2026 growth plan",
    chartTitle: "The path to 50,000 weekly local readers",
    chartText: "A transparent launch target built around search visibility, bilingual distribution, district pages, candidate profiles, voting-intent traffic, and recurring local coverage.",
    target: "Weekly reach target",
    why: "Why local businesses win here",
    benefits: ["High-intent local readers researching candidates, taxes, water, districts, and voting", "Bilingual visibility across English-first and Spanish companion pages", "Placement beside trusted civic information—not random entertainment inventory", "Direct click-through to your offer, booking page, store, phone number, or lead form", "Weekly sponsor reporting once GTM is connected"],
    inventory: "Limited sponsor inventory",
    inventoryTitle: "Sell exclusivity—not a cluttered banner farm.",
    placements: [
      ["Presenting sponsor", "1 available", "The dominant sitewide position with category exclusivity."],
      ["Election + voting partners", "2 available", "Own the highest-intent voting guides and deadline pages."],
      ["District exclusives", "8 available", "One exclusive local partner for each council district."],
      ["Issue sponsors", "10 available", "Water, taxes, public safety, streets, trade, housing, and more."],
      ["Local business rotation", "24 available", "Six advertisers maximum per rotation to protect share of voice."],
    ],
    reporting: "What sponsors receive",
    reportItems: ["Ad impressions by placement", "Verified sponsor clicks", "Click-through rate", "Top pages and language", "Date range and rotation count", "Creative and offer recommendations"],
    formEyebrow: "Get in before your category closes",
    formTitle: "Request pricing and availability.",
    formIntro: "Your inquiry sends directly to the publisher. No email app opens.",
    name: "Your name",
    business: "Business name",
    email: "Business email",
    phone: "Phone",
    website: "Website or offer URL",
    placement: "Placement interest",
    budget: "Estimated monthly budget",
    objective: "What result do you want from this campaign?",
    sending: "Sending inquiry…",
    submit: "Send advertiser inquiry",
    success: "Advertiser inquiry received",
    successText: "Your request was delivered directly. We will follow up with availability and next steps.",
    error: "Inquiry not sent",
    errorText: "Please try again in a moment.",
    standards: "Sponsor standards",
    standardsText: "Advertising never controls editorial coverage, candidate ratings, source selection, or voting guidance. Political and issue advertising must be clearly labeled and reviewed before publication.",
  },
  es: {
    eyebrow: "Anúnciate con Laredo Politics",
    title: "Pon tu negocio frente a 10,000–50,000 personas locales por semana—y creciendo.",
    intro: "Gana atención alrededor de las decisiones que los residentes buscan, leen, comparan y comparten. Llega a una audiencia local en inglés y español mediante guías electorales, perfiles, recursos y temas importantes.",
    cta: "Solicitar el media kit",
    honesty: "Meta de alcance del lanzamiento—no tráfico histórico",
    honestyText: "La audiencia semanal de 10,000–50,000 es la meta comercial del lanzamiento. No se presenta como tráfico histórico medido. Al conectar Google Tag Manager y analítica, esta página mostrará usuarios, impresiones, clics, tasa de clics y fechas verificadas.",
    chartEyebrow: "Plan de crecimiento marzo–septiembre 2026",
    chartTitle: "El camino a 50,000 lectores locales por semana",
    chartText: "Una meta transparente basada en visibilidad de búsqueda, distribución bilingüe, páginas distritales, perfiles, intención de voto y cobertura local recurrente.",
    target: "Meta de alcance semanal",
    why: "Por qué ganan los negocios locales",
    benefits: ["Lectores locales investigando candidatos, impuestos, agua, distritos y votación", "Visibilidad bilingüe en páginas principales y acompañantes", "Ubicación junto a información cívica confiable", "Clic directo a oferta, citas, tienda, teléfono o formulario", "Reporte semanal cuando GTM esté conectado"],
    inventory: "Inventario limitado",
    inventoryTitle: "Vende exclusividad, no una granja de banners.",
    placements: [
      ["Patrocinador principal", "1 disponible", "La posición dominante en todo el sitio con exclusividad de categoría."],
      ["Socios de elección y voto", "2 disponibles", "Domina las guías y fechas de mayor intención."],
      ["Exclusivos por distrito", "8 disponibles", "Un socio local exclusivo por cada distrito."],
      ["Patrocinadores de temas", "10 disponibles", "Agua, impuestos, seguridad, calles, comercio, vivienda y más."],
      ["Rotación de negocios", "24 disponibles", "Máximo seis anunciantes por rotación para proteger visibilidad."],
    ],
    reporting: "Lo que reciben los patrocinadores",
    reportItems: ["Impresiones por ubicación", "Clics verificados", "Tasa de clics", "Páginas e idioma principales", "Fechas y tamaño de rotación", "Recomendaciones creativas"],
    formEyebrow: "Entra antes de que cierre tu categoría",
    formTitle: "Solicita precios y disponibilidad.",
    formIntro: "Tu solicitud llega directamente al editor. No abre una aplicación de email.",
    name: "Tu nombre",
    business: "Nombre del negocio",
    email: "Email comercial",
    phone: "Teléfono",
    website: "Sitio web u oferta",
    placement: "Ubicación de interés",
    budget: "Presupuesto mensual estimado",
    objective: "¿Qué resultado quieres de esta campaña?",
    sending: "Enviando solicitud…",
    submit: "Enviar solicitud",
    success: "Solicitud recibida",
    successText: "Tu solicitud fue entregada directamente. Te enviaremos disponibilidad y próximos pasos.",
    error: "No se envió la solicitud",
    errorText: "Intenta nuevamente en un momento.",
    standards: "Estándares para patrocinadores",
    standardsText: "La publicidad nunca controla cobertura editorial, evaluaciones, fuentes ni orientación electoral. Los anuncios políticos se identifican y revisan antes de publicarse.",
  },
} as const;

export default function Advertise({ language = "en" }: { language?: Language }) {
  const t = copy[language];
  const [sending, setSending] = useState(false);
  const path = language === "en" ? "/advertise" : "/es/anunciate";
  const alternatePath = language === "en" ? "/es/anunciate" : "/advertise";
  const maxReach = Math.max(...growthTargets.map((point) => point.reach));

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setSending(true);
    try {
      await submitDirectForm("advertiser_inquiry", {
        subject: "Laredo Politics media kit and advertising request",
        name: String(data.get("name") || ""), business: String(data.get("business") || ""), email: String(data.get("email") || ""), phone: String(data.get("phone") || ""), website: String(data.get("website") || ""), placement: String(data.get("placement") || ""), budget: String(data.get("budget") || ""), objective: String(data.get("objective") || ""),
      });
      form.reset();
      toast.success(t.success, { description: t.successText });
    } catch {
      toast.error(t.error, { description: t.errorText });
    } finally {
      setSending(false);
    }
  }

  return (
    <PageShell language={language}>
      <Seo language={language} alternatePath={alternatePath} title={language === "en" ? "Advertise with Laredo Politics | Reach local voters and residents" : "Anúnciate con Laredo Politics | Llega a votantes y residentes"} description={t.intro} path={path} keywords={["advertise in Laredo", "Laredo local advertising", "Laredo Politics sponsorship", "Laredo business ads"]} schema={{ "@context": "https://schema.org", "@type": "Service", name: language === "en" ? "Laredo Politics Local Advertising" : "Publicidad Local de Laredo Politics", description: t.intro, provider: { "@type": "Organization", name: "Laredo Politics", url: "https://laredopolitics.com" }, areaServed: { "@type": "City", name: "Laredo", containedInPlace: { "@type": "State", name: "Texas" } }, url: `https://laredopolitics.com${path}` }} />

      <section className="relative overflow-hidden bg-[#102b36] py-16 text-white sm:py-24">
        <div className="grain absolute inset-0 opacity-20" />
        <div className="absolute -right-24 -top-32 h-[450px] w-[450px] rounded-full border-[80px] border-[#f0dfbd]/[0.05]" />
        <div className="container relative">
          <p className="section-kicker section-kicker-light">{t.eyebrow}</p>
          <h1 className="mt-6 max-w-6xl font-display text-[clamp(3.2rem,7.4vw,7rem)] font-black leading-[0.87] tracking-[-0.07em]">{t.title}</h1>
          <p className="mt-7 max-w-3xl border-l-2 border-[#e75037] pl-5 text-base leading-7 text-[#cad7d4] sm:text-lg">{t.intro}</p>
          <a href="#advertiser-inquiry" className="mt-8 inline-flex min-h-13 items-center gap-4 bg-[#e75037] px-6 text-[9px] font-black uppercase tracking-[0.13em]">{t.cta}<ArrowRight className="h-4 w-4" /></a>
        </div>
      </section>

      <section className="paper-texture py-16 sm:py-24">
        <div className="container">
          <Breadcrumbs language={language} items={[{ label: language === "en" ? "Advertise with us" : "Anúnciate" }]} />
          <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[
            [Users, "10K–50K", language === "en" ? "weekly reach target" : "meta de alcance semanal"], [Languages, "EN + ES", language === "en" ? "bilingual inventory" : "inventario bilingüe"], [MapPinned, "8", language === "en" ? "district opportunities" : "oportunidades distritales"], [MousePointerClick, "100", language === "en" ? "indexable resource pages" : "páginas indexables"],
          ].map(([Icon, value, label]) => { const IconComponent = Icon as typeof Users; return <div key={String(label)} className="border border-[#102b36]/14 bg-[#fbf8f1] p-6"><IconComponent className="h-5 w-5 text-[#e75037]" /><strong className="mt-6 block font-display text-5xl font-black tracking-[-0.05em]">{String(value)}</strong><span className="mt-2 block text-[8px] font-black uppercase tracking-[0.13em] text-[#68797c]">{String(label)}</span></div>; })}</section>

          <section className="mt-10 grid gap-5 bg-[#f0dfbd] p-7 lg:grid-cols-[auto_1fr] lg:items-center"><ShieldCheck className="h-8 w-8 text-[#e75037]" /><div><h2 className="font-display text-3xl font-black tracking-[-0.04em]">{t.honesty}</h2><p className="mt-2 text-sm leading-6 text-[#4d6063]">{t.honestyText}</p></div></section>

          <section className="mt-16 grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end"><div><p className="section-kicker">{t.chartEyebrow}</p><h2 className="mt-5 font-display text-5xl font-black leading-[0.92] tracking-[-0.05em] sm:text-6xl">{t.chartTitle}</h2><p className="mt-5 text-base leading-7 text-[#586a6d]">{t.chartText}</p></div><div className="bg-[#102b36] p-6 text-white sm:p-9"><div className="flex h-[330px] items-end gap-3 sm:gap-5">{growthTargets.map((point) => <div key={point.month} className="flex h-full min-w-0 flex-1 flex-col justify-end"><strong className="mb-2 text-center font-mono text-[8px] text-[#f0dfbd] sm:text-[10px]">{Math.round(point.reach / 1000)}K</strong><div className="w-full bg-[#e75037] transition hover:bg-[#f0dfbd]" style={{ height: `${(point.reach / maxReach) * 82}%` }} /><span className="mt-3 text-center text-[8px] font-black uppercase tracking-[0.1em] text-[#9fb5b1]">{point.month}</span></div>)}</div><div className="mt-5 flex items-center gap-2 border-t border-white/10 pt-5 text-[8px] font-black uppercase tracking-[0.12em] text-[#f0dfbd]"><TrendingUp className="h-4 w-4 text-[#e75037]" />{t.target}</div></div></section>

          <section className="mt-16 grid gap-10 lg:grid-cols-2"><div><p className="section-kicker">{t.why}</p><div className="mt-7 space-y-4">{t.benefits.map((benefit) => <p key={benefit} className="flex gap-3 border-b border-[#102b36]/13 pb-4 text-sm leading-6 text-[#4f6265]"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#e75037]" />{benefit}</p>)}</div></div><div className="bg-[#102b36] p-7 text-white"><LineChart className="h-6 w-6 text-[#e75037]" /><h2 className="mt-6 font-display text-4xl font-black tracking-[-0.045em]">{t.reporting}</h2><div className="mt-7 grid gap-3 sm:grid-cols-2">{t.reportItems.map((item) => <div key={item} className="border border-white/12 bg-white/[0.04] p-4"><Eye className="h-4 w-4 text-[#f0dfbd]" /><p className="mt-3 text-sm leading-5 text-[#cad7d4]">{item}</p></div>)}</div></div></section>

          <section className="mt-16"><p className="section-kicker">{t.inventory}</p><h2 className="mt-5 max-w-4xl font-display text-5xl font-black leading-[0.92] tracking-[-0.05em] sm:text-6xl">{t.inventoryTitle}</h2><div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-5">{t.placements.map(([name, availability, description], index) => <div key={name} className={`flex min-h-[290px] flex-col p-6 ${index === 0 ? "bg-[#e75037] text-white" : "border border-[#102b36]/14 bg-[#fbf8f1]"}`}><span className="font-mono text-[9px] font-bold opacity-65">0{index + 1}</span><h3 className="mt-8 font-display text-3xl font-black leading-none tracking-[-0.04em]">{name}</h3><p className="mt-4 text-sm leading-6 opacity-75">{description}</p><span className="mt-auto border-t border-current/15 pt-5 text-[8px] font-black uppercase tracking-[0.12em]">{availability}</span></div>)}</div></section>

          <section id="advertiser-inquiry" className="mt-16 grid gap-10 bg-[#102b36] p-7 text-white lg:grid-cols-[0.75fr_1.25fr] sm:p-10"><div><p className="section-kicker section-kicker-light">{t.formEyebrow}</p><h2 className="mt-5 font-display text-5xl font-black leading-[0.92] tracking-[-0.05em]">{t.formTitle}</h2><p className="mt-5 text-sm leading-6 text-[#b9cbc7]">{t.formIntro}</p><div className="mt-8 border border-white/12 bg-white/[0.04] p-5"><ShieldCheck className="h-5 w-5 text-[#e75037]" /><h3 className="mt-4 font-display text-2xl font-black">{t.standards}</h3><p className="mt-3 text-xs leading-5 text-[#b9cbc7]">{t.standardsText}</p></div></div><form onSubmit={submit} className="grid gap-4"><div className="grid gap-4 sm:grid-cols-2"><input name="name" required placeholder={t.name} className="min-h-12 border border-white/15 bg-white/10 px-4 text-sm text-white outline-none placeholder:text-white/45 focus:border-[#f0dfbd]" /><input name="business" required placeholder={t.business} className="min-h-12 border border-white/15 bg-white/10 px-4 text-sm text-white outline-none placeholder:text-white/45 focus:border-[#f0dfbd]" /><input name="email" type="email" required placeholder={t.email} className="min-h-12 border border-white/15 bg-white/10 px-4 text-sm text-white outline-none placeholder:text-white/45 focus:border-[#f0dfbd]" /><input name="phone" type="tel" required placeholder={t.phone} className="min-h-12 border border-white/15 bg-white/10 px-4 text-sm text-white outline-none placeholder:text-white/45 focus:border-[#f0dfbd]" /><input name="website" type="url" placeholder={t.website} className="min-h-12 border border-white/15 bg-white/10 px-4 text-sm text-white outline-none placeholder:text-white/45 focus:border-[#f0dfbd]" /><select name="placement" required defaultValue="" className="min-h-12 border border-white/15 bg-[#183944] px-4 text-sm text-white outline-none focus:border-[#f0dfbd]"><option value="" disabled>{t.placement}</option>{t.placements.map(([name]) => <option key={name} value={name}>{name}</option>)}</select><select name="budget" required defaultValue="" className="min-h-12 border border-white/15 bg-[#183944] px-4 text-sm text-white outline-none focus:border-[#f0dfbd]"><option value="" disabled>{t.budget}</option><option>$500–$1,000</option><option>$1,000–$2,500</option><option>$2,500–$5,000</option><option>$5,000+</option></select></div><textarea name="objective" required rows={5} placeholder={t.objective} className="resize-y border border-white/15 bg-white/10 p-4 text-sm leading-6 text-white outline-none placeholder:text-white/45 focus:border-[#f0dfbd]" /><button type="submit" disabled={sending} className="flex min-h-13 items-center justify-between bg-[#f0dfbd] px-5 text-[9px] font-black uppercase tracking-[0.12em] text-[#102b36] disabled:cursor-wait disabled:opacity-60">{sending ? t.sending : t.submit}<ArrowRight className="h-4 w-4" /></button></form></section>
        </div>
      </section>
    </PageShell>
  );
}
