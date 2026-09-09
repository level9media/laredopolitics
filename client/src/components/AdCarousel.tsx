import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Store } from "lucide-react";
import { advertisers, type AdPlacement } from "@/data/advertisers";

type AdCarouselProps = {
  placement?: Exclude<AdPlacement, "sitewide">;
  compact?: boolean;
  language?: "en" | "es";
};

export default function AdCarousel({ placement = "resource", compact = false, language = "en" }: AdCarouselProps) {
  const slides = useMemo(
    () => advertisers.filter((advertiser) => advertiser.active && (advertiser.placement === "sitewide" || advertiser.placement === placement)),
    [placement],
  );
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (slides.length < 2 || paused) return;
    const timer = window.setInterval(() => setCurrent((index) => (index + 1) % slides.length), 7000);
    return () => window.clearInterval(timer);
  }, [paused, slides.length]);

  useEffect(() => {
    if (current >= slides.length) setCurrent(0);
  }, [current, slides.length]);

  const ad = slides[current];

  useEffect(() => {
    if (!ad || document.visibilityState !== "visible") return;
    const analytics = (window as Window & { umami?: { track: (event: string, data?: Record<string, string>) => void } }).umami;
    analytics?.track("ad-impression", { advertiser: ad.id, placement });
  }, [ad, placement]);

  if (!ad) return null;
  const spanishPlaceholders: Record<string, { name: string; tagline: string; cta: string }> = {
    "presenting-available": { name: "Patrocinador principal", tagline: "Domina el espacio de mayor visibilidad en todo Laredo Politics.", cta: "Reservar este espacio" },
    "local-business-available": { name: "Negocio local destacado", tagline: "Llega a votantes comprometidos de Laredo con un mensaje local claramente identificado.", cta: "Ver opciones publicitarias" },
    "professional-services-available": { name: "Servicios profesionales", tagline: "Un espacio rotativo premium para firmas locales de confianza.", cta: "Solicitar disponibilidad" },
    "community-brand-available": { name: "Marca comunitaria", tagline: "Mantén tu negocio visible junto a los temas que más sigue Laredo.", cta: "Solicitar el media kit" },
    "homepage-feature-available": { name: "Espacio destacado en portada", tagline: "Visibilidad de alto impacto dentro de la experiencia cívica principal.", cta: "Reservar el destacado" },
    "election-brief-available": { name: "Patrocinador del brief electoral", tagline: "Combina visibilidad en portada con presencia en el correo semanal de Laredo.", cta: "Preguntar por el paquete" },
  };
  const localizedAd = language === "es" && ad.available ? spanishPlaceholders[ad.id] : undefined;
  const adName = localizedAd?.name || ad.businessName;
  const adTagline = localizedAd?.tagline || ad.tagline;
  const adCta = localizedAd?.cta || ad.cta;
  const adHref = language === "es" && ad.href === "/#advertise-form" ? "/es#advertise-form" : ad.href;
  const labels = language === "es"
    ? { paid: "Publicidad", available: "Espacio disponible", previous: "Anuncio anterior", next: "Siguiente anuncio", count: "anunciantes en rotación" }
    : { paid: "Advertisement", available: "Space available", previous: "Previous ad", next: "Next ad", count: "advertisers in rotation" };

  return (
    <section
      className={`group relative overflow-hidden border border-[#102b36]/15 bg-[#102b36] text-white shadow-[0_18px_50px_rgba(16,43,54,0.14)] ${compact ? "min-h-44" : "min-h-64"}`}
      aria-label={`${labels.paid}: ${adName}`}
      aria-roledescription="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      <div className="absolute inset-0 transition-opacity duration-500" style={{ background: `radial-gradient(circle at 82% 20%, ${ad.accent}55, transparent 34%), linear-gradient(135deg, #102b36 0%, #071b23 100%)` }} />
      {ad.image && <img src={ad.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-45" />}
      <div className="grain absolute inset-0 opacity-25" />
      <div className={`relative flex min-h-[inherit] flex-col justify-between ${compact ? "p-5" : "p-7 sm:p-9"}`}>
        <div className="flex items-start justify-between gap-5">
          <span className="px-2.5 py-1 text-[8px] font-black uppercase tracking-[0.16em] text-white" style={{ backgroundColor: ad.accent }}>
            {ad.available ? labels.available : labels.paid}
          </span>
          <Store className="h-4 w-4 text-[#f0dfbd]" />
        </div>

        <div className={compact ? "mt-8" : "mt-14 max-w-2xl"} key={ad.id}>
          {ad.logo && <img src={ad.logo} alt={`${adName} logo`} className="mb-5 max-h-10 max-w-40 object-contain object-left" />}
          <p className={`font-display font-black tracking-[-0.04em] ${compact ? "text-2xl" : "text-4xl sm:text-5xl"}`}>{adName}</p>
          <p className={`mt-3 max-w-xl leading-6 text-[#c0d0cd] ${compact ? "text-xs" : "text-sm"}`}>{adTagline}</p>
          <a
            href={adHref}
            data-umami-event={`ad-click-${ad.id}`}
            className="mt-6 inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.13em] text-[#f0dfbd] transition hover:text-white"
          >
            {adCta} <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-7 flex items-center justify-between border-t border-white/12 pt-4">
          <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#91aaa6]">{slides.length} {labels.count}</span>
          <div className="flex items-center gap-2">
            <button type="button" aria-label={labels.previous} onClick={() => setCurrent((index) => (index - 1 + slides.length) % slides.length)} className="grid h-9 w-9 place-items-center border border-white/20 text-white transition hover:border-[#f0dfbd] hover:text-[#f0dfbd] active:scale-[0.96]"><ArrowLeft className="h-4 w-4" /></button>
            <span className="min-w-11 text-center font-mono text-[9px] text-[#d3dedb]">{String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>
            <button type="button" aria-label={labels.next} onClick={() => setCurrent((index) => (index + 1) % slides.length)} className="grid h-9 w-9 place-items-center border border-white/20 text-white transition hover:border-[#f0dfbd] hover:text-[#f0dfbd] active:scale-[0.96]"><ArrowRight className="h-4 w-4" /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
