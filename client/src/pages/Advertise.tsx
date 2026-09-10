import { ArrowRight } from "lucide-react";
import Seo from "@/components/Seo";
import { PageShell } from "@/components/SiteChrome";
import { sponsorPackages } from "@/data/sponsorships";

type Language = "en" | "es";

function trackCheckout(packageId: string, price: number) {
  const trackedWindow = window as Window & { dataLayer?: Array<Record<string, unknown>> };
  trackedWindow.dataLayer = trackedWindow.dataLayer || [];
  trackedWindow.dataLayer.push({ event: "sponsor_checkout_started", package_id: packageId, value: price, currency: "USD" });
}

const copy = {
  en: {
    eyebrow: "Advertise with us · 2026 election cycle",
    title: "Rates for the final stretch to Election Day.",
    intro: "Four placements, one election window. Every rate below runs through November 3—pick a weekly spot or lock in the full run at a lower total.",
    electionDay: "Election day",
    inventory: "Remaining inventory",
    spots: "Max per rotation",
    rateTitle: "The rate sheet.",
    rateIntro: "Weekly pricing for standalone placements, plus one discounted package for advertisers who want to run through Election Day without renewing weekly.",
    placement: "Placement",
    rotation: "Rotation",
    weekly: "Weekly rate",
    fullRun: "Full run (8 wks)",
    save: "or $1,500 locked in",
    reserve: "Reserve this spot",
    lockTag: "Election day lock-in",
    lockTitle: "Non-rotating placement, paid once, runs through Nov 3.",
    lockText: "Same exclusive spot as above—skip the weekly renewal and lock in the whole election cycle in one payment.",
    was: "$4,000 at the weekly rate",
    saveAmount: "Save $2,500 · runs through Nov 3",
    lockCta: "Lock in this package",
    newsletterTag: "The Laredo Brief · weekly email",
    newsletterTitle: "Sponsor a newsletter send.",
    newsletterText: "One sponsor per issue. Your business is featured directly in the weekly email sent to readers following the election.",
    newsletterCta: "Sponsor an issue",
    how: "How it works.",
    steps: [
      "Pick a placement above and pay through the linked checkout—no forms, no waiting on a callback.",
      "Send your logo, link and newsletter blurb when applicable. We confirm your go-live date, usually within 1–2 business days.",
      "Your placement runs through Election Day or your billed period, whichever you chose. Cancel weekly plans through Stripe.",
    ],
  },
  es: {
    eyebrow: "Anúnciate con nosotros · ciclo electoral 2026",
    title: "Tarifas para la recta final hacia el Día de Elección.",
    intro: "Cuatro ubicaciones, una ventana electoral. Cada tarifa corre hasta el 3 de noviembre—elige una opción semanal o asegura todo el periodo por menos.",
    electionDay: "Día de Elección",
    inventory: "Inventario restante",
    spots: "Máximo por rotación",
    rateTitle: "La tarjeta de precios.",
    rateIntro: "Precios semanales para ubicaciones individuales, más un paquete con descuento para anunciantes que quieren correr hasta el Día de Elección sin renovar cada semana.",
    placement: "Ubicación",
    rotation: "Rotación",
    weekly: "Tarifa semanal",
    fullRun: "Periodo completo (8 sem.)",
    save: "o $1,500 asegurado",
    reserve: "Reservar este espacio",
    lockTag: "Paquete hasta el Día de Elección",
    lockTitle: "Ubicación sin rotación, un solo pago, hasta el 3 de noviembre.",
    lockText: "La misma ubicación exclusiva—evita la renovación semanal y asegura todo el ciclo electoral con un solo pago.",
    was: "$4,000 con tarifa semanal",
    saveAmount: "Ahorra $2,500 · hasta el 3 de noviembre",
    lockCta: "Asegurar este paquete",
    newsletterTag: "El Brief de Laredo · email semanal",
    newsletterTitle: "Patrocina un envío del newsletter.",
    newsletterText: "Un patrocinador por edición. Tu negocio aparece directamente en el email semanal para lectores que siguen la elección.",
    newsletterCta: "Patrocinar una edición",
    how: "Cómo funciona.",
    steps: [
      "Elige una ubicación y paga por medio del checkout—sin formularios ni espera.",
      "Envía tu logo, enlace y texto para el newsletter cuando corresponda. Confirmamos la fecha de publicación, generalmente en 1–2 días hábiles.",
      "Tu ubicación corre hasta el Día de Elección o durante el periodo pagado. Los planes semanales se cancelan por Stripe.",
    ],
  },
} as const;

export default function Advertise({ language = "en" }: { language?: Language }) {
  const t = copy[language];
  const path = language === "en" ? "/advertise" : "/es/anunciate";
  const alternatePath = language === "en" ? "/es/anunciate" : "/advertise";
  const small = sponsorPackages.find((item) => item.id === "small-square")!;
  const banner = sponsorPackages.find((item) => item.id === "banner")!;
  const nonRotating = sponsorPackages.find((item) => item.id === "non-rotating")!;
  const lockIn = sponsorPackages.find((item) => item.id === "lock-in")!;
  const newsletter = sponsorPackages.find((item) => item.id === "newsletter")!;
  const cardPackages = [small, banner, nonRotating];

  return (
    <PageShell language={language}>
      <Seo
        language={language}
        alternatePath={alternatePath}
        title={language === "en" ? "Advertising Rates | Laredo Politics" : "Tarifas de Publicidad | Laredo Politics"}
        description={t.intro}
        path={path}
        keywords={["Laredo advertising rates", "advertise in Laredo", "Laredo Politics sponsor", "Laredo election advertising"]}
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: language === "en" ? "Laredo Politics Advertising" : "Publicidad en Laredo Politics",
          description: t.intro,
          provider: { "@type": "Organization", name: "Laredo Politics", url: "https://laredopolitics.com" },
          areaServed: { "@type": "City", name: "Laredo", containedInPlace: { "@type": "State", name: "Texas" } },
          offers: sponsorPackages.map((item) => ({ "@type": "Offer", name: item.name[language], price: item.price, priceCurrency: "USD", url: item.stripeUrl })),
          url: `https://laredopolitics.com${path}`,
        }}
      />

      <section className="bg-[#102b36] py-16 text-[#f5f0e6] sm:py-20">
        <div className="container max-w-[1180px]">
          <div className="max-w-3xl">
            <p className="section-kicker section-kicker-light">{t.eyebrow}</p>
            <h1 className="mt-5 max-w-[14ch] font-display text-[clamp(2.8rem,6vw,5rem)] font-black leading-[1.02] tracking-[-0.045em] text-white">{t.title}</h1>
            <p className="mt-6 max-w-[52ch] text-base leading-7 text-[#cfd9d6] sm:text-lg">{t.intro}</p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-5">
              {[
                ["Nov 3", t.electionDay],
                ["8 weeks", t.inventory],
                ["6 spots", t.spots],
              ].map(([value, label]) => (
                <div key={label} className="border-l-2 border-[#e05a3a] pl-3">
                  <strong className="block font-display text-2xl font-black text-white">{value}</strong>
                  <span className="mt-1 block text-[9px] font-black uppercase tracking-[0.12em] text-[#a9b8b4]">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <main className="paper-texture py-16 sm:py-20">
        <div className="container max-w-[1180px]">
          <section id="rate-card" className="scroll-mt-28">
            <div className="max-w-2xl">
              <h2 className="font-display text-4xl font-black tracking-[-0.04em] text-[#102b36]">{t.rateTitle}</h2>
              <p className="mt-3 text-base leading-7 text-[#5c6a6f]">{t.rateIntro}</p>
            </div>

            <div className="mt-9 overflow-x-auto border border-[#dcd5c6] bg-[#faf7f0]">
              <table className="w-full min-w-[680px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-[#dcd5c6] text-left text-[9px] font-black uppercase tracking-[0.13em] text-[#5c6a6f]">
                    <th className="px-5 py-4">{t.placement}</th><th className="px-5 py-4">{t.rotation}</th><th className="px-5 py-4">{t.weekly}</th><th className="px-5 py-4">{t.fullRun}</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [small.name[language], small.availability[language], "$150/wk", "$1,200"],
                    [banner.name[language], banner.availability[language], "$250/wk", "$2,000"],
                    [nonRotating.name[language], nonRotating.availability[language], "$500/wk", "$4,000"],
                    [newsletter.name[language], newsletter.availability[language], "$225/send", language === "en" ? "Billed per send" : "Cobro por envío"],
                  ].map((row, index) => (
                    <tr key={row[0]} className="border-b border-[#dcd5c6] last:border-0">
                      <td className="px-5 py-5 font-bold text-[#1b2226]">{row[0]}</td><td className="px-5 py-5 text-[#5c6a6f]">{row[1]}</td><td className="px-5 py-5 font-display text-base font-black text-[#102b36]">{row[2]}</td><td className="px-5 py-5 text-[#5c6a6f]">{row[3]} {index === 2 && <span className="font-bold text-[#e05a3a]">— {t.save}</span>}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {cardPackages.map((item) => (
                <article key={item.id} className="flex min-h-[420px] flex-col border border-[#dcd5c6] bg-[#faf7f0] p-7">
                  <p className="text-[9px] font-black uppercase tracking-[0.13em] text-[#e05a3a]">{item.tag[language]}</p>
                  <h3 className="mt-4 font-display text-3xl font-black tracking-[-0.04em] text-[#102b36]">{item.name[language]}</h3>
                  <div className="mt-5 flex items-end gap-2"><strong className="font-display text-5xl font-black tracking-[-0.05em] text-[#102b36]">${item.price}</strong><span className="pb-1 text-sm text-[#5c6a6f]">{item.cadence[language]}</span></div>
                  <ul className="mt-6 flex-1 border-t border-[#dcd5c6] pt-4">
                    {item.features[language].map((feature) => <li key={feature} className="flex gap-3 py-1.5 text-sm leading-6 text-[#1b2226]"><span className="text-[#e05a3a]">—</span>{feature}</li>)}
                  </ul>
                  <a href={item.stripeUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackCheckout(item.id, item.price)} className={`mt-6 flex min-h-12 items-center justify-center gap-3 px-5 text-[9px] font-black uppercase tracking-[0.12em] text-white ${item.featured ? "bg-[#e05a3a]" : "bg-[#102b36]"}`}>{t.reserve}<ArrowRight className="h-4 w-4" /></a>
                </article>
              ))}
            </div>

            <section className="mt-12 grid gap-8 bg-[#102b36] p-8 text-white lg:grid-cols-[1.4fr_1fr] lg:items-center sm:p-10">
              <div><span className="inline-block bg-[#e05a3a] px-3 py-2 text-[9px] font-black uppercase tracking-[0.12em]">{t.lockTag}</span><h2 className="mt-5 max-w-[18ch] font-display text-4xl font-black leading-[1.02] tracking-[-0.045em]">{t.lockTitle}</h2><p className="mt-4 max-w-xl text-sm leading-6 text-[#cfd9d6]">{t.lockText}</p></div>
              <div><p className="text-sm text-[#9fb0ac] line-through">{t.was}</p><strong className="mt-1 block font-display text-6xl font-black tracking-[-0.05em]">$1,500</strong><p className="mt-2 text-sm font-bold text-[#e05a3a]">{t.saveAmount}</p><a href={lockIn.stripeUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackCheckout(lockIn.id, lockIn.price)} className="mt-6 flex min-h-12 items-center justify-center gap-3 bg-[#e05a3a] px-5 text-[9px] font-black uppercase tracking-[0.12em] text-white">{t.lockCta}<ArrowRight className="h-4 w-4" /></a></div>
            </section>

            <section className="mt-12 grid border border-[#dcd5c6] bg-[#faf7f0] lg:grid-cols-2">
              <div className="p-8 sm:p-10"><p className="text-[9px] font-black uppercase tracking-[0.13em] text-[#e05a3a]">{t.newsletterTag}</p><h2 className="mt-4 font-display text-4xl font-black tracking-[-0.04em] text-[#102b36]">{t.newsletterTitle}</h2><p className="mt-4 text-sm leading-6 text-[#5c6a6f]">{t.newsletterText}</p></div>
              <div className="flex flex-col justify-center border-t border-[#dcd5c6] p-8 lg:border-l lg:border-t-0 sm:p-10"><strong className="font-display text-6xl font-black tracking-[-0.05em] text-[#102b36]">$225</strong><span className="text-sm text-[#5c6a6f]">{newsletter.cadence[language]}</span><a href={newsletter.stripeUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackCheckout(newsletter.id, newsletter.price)} className="mt-6 flex min-h-12 items-center justify-center gap-3 bg-[#102b36] px-5 text-[9px] font-black uppercase tracking-[0.12em] text-white">{t.newsletterCta}<ArrowRight className="h-4 w-4" /></a></div>
            </section>
          </section>

          <section className="pt-16">
            <h2 className="font-display text-4xl font-black tracking-[-0.04em] text-[#102b36]">{t.how}</h2>
            <div className="mt-7 grid gap-6 md:grid-cols-3">
              {t.steps.map((step, index) => <div key={step} className="border-t-2 border-[#102b36] pt-4"><span className="font-display text-xl font-black text-[#e05a3a]">{index + 1}</span><p className="mt-2 text-sm leading-6 text-[#5c6a6f]">{step}</p></div>)}
            </div>
          </section>
        </div>
      </main>
    </PageShell>
  );
}
