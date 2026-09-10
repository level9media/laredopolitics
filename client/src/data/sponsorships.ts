export type SponsorPackage = {
  id: "small-square" | "banner" | "non-rotating" | "lock-in" | "newsletter";
  name: { en: string; es: string };
  shortName: { en: string; es: string };
  price: number;
  cadence: { en: string; es: string };
  billing: "subscription" | "one_time";
  availability: { en: string; es: string };
  tag: { en: string; es: string };
  summary: { en: string; es: string };
  features: { en: string[]; es: string[] };
  stripeUrl: string;
  fullRun?: number;
  featured?: boolean;
};

export const sponsorPackages: SponsorPackage[] = [
  {
    id: "small-square",
    name: { en: "Small Square", es: "Cuadro Pequeño" },
    shortName: { en: "Small Square — $150/week", es: "Cuadro Pequeño — $150/semana" },
    price: 150,
    cadence: { en: "/ week", es: "/ semana" },
    billing: "subscription",
    availability: { en: "Rotates with up to 5 others", es: "Rota con hasta 5 anuncios más" },
    tag: { en: "Rotating · Small square", es: "Rotación · Cuadro pequeño" },
    summary: { en: "A compact sitewide logo-and-link placement.", es: "Una ubicación compacta con logo y enlace en todo el sitio." },
    features: {
      en: ["Logo + link, small format", "Cycles with up to 5 other sponsors", "Appears sitewide, every page", "Billed weekly, cancel anytime"],
      es: ["Logo + enlace, formato pequeño", "Rota con hasta 5 patrocinadores", "Aparece en todo el sitio", "Cobro semanal, cancela cuando quieras"],
    },
    stripeUrl: "https://buy.stripe.com/14AaEX9Mm6wK3ee6O33sI0w",
    fullRun: 1200,
  },
  {
    id: "banner",
    name: { en: "Banner", es: "Banner" },
    shortName: { en: "Banner — $250/week", es: "Banner — $250/semana" },
    price: 250,
    cadence: { en: "/ week", es: "/ semana" },
    billing: "subscription",
    availability: { en: "Rotates with up to 5 others", es: "Rota con hasta 5 anuncios más" },
    tag: { en: "Rotating · Banner", es: "Rotación · Banner" },
    summary: { en: "A wider, higher-visibility sitewide banner placement.", es: "Un banner más ancho y visible en todo el sitio." },
    features: {
      en: ["Wider banner format, higher visibility", "Cycles with up to 5 other sponsors", "Appears sitewide, every page", "Billed weekly, cancel anytime"],
      es: ["Formato más ancho y visible", "Rota con hasta 5 patrocinadores", "Aparece en todo el sitio", "Cobro semanal, cancela cuando quieras"],
    },
    stripeUrl: "https://buy.stripe.com/00w9ATaQq8ES8yy8Wb3sI0x",
    fullRun: 2000,
  },
  {
    id: "non-rotating",
    name: { en: "Non-Rotating", es: "Sin Rotación" },
    shortName: { en: "Non-Rotating — $500/week", es: "Sin Rotación — $500/semana" },
    price: 500,
    cadence: { en: "/ week", es: "/ semana" },
    billing: "subscription",
    availability: { en: "Exclusive · no rotation", es: "Exclusivo · sin rotación" },
    tag: { en: "Exclusive · No rotation", es: "Exclusivo · Sin rotación" },
    summary: { en: "One advertiser only in the highest-visibility sitewide position.", es: "Un solo anunciante en la posición de mayor visibilidad." },
    features: {
      en: ["One advertiser only—never cycles out", "Highest-visibility placement on the page", "Appears sitewide, every page", "Billed weekly, cancel anytime"],
      es: ["Un solo anunciante—nunca sale de rotación", "La ubicación de mayor visibilidad", "Aparece en todo el sitio", "Cobro semanal, cancela cuando quieras"],
    },
    stripeUrl: "https://buy.stripe.com/28EcN59Mm2gu6qqdcr3sI0y",
    fullRun: 4000,
    featured: true,
  },
  {
    id: "lock-in",
    name: { en: "Election Day Lock-In", es: "Paquete Hasta el Día de Elección" },
    shortName: { en: "Election Day Lock-In — $1,500", es: "Paquete Electoral — $1,500" },
    price: 1500,
    cadence: { en: "through Nov 3", es: "hasta el 3 de noviembre" },
    billing: "one_time",
    availability: { en: "Exclusive full-run package", es: "Paquete exclusivo del ciclo completo" },
    tag: { en: "Election Day lock-in", es: "Paquete hasta el Día de Elección" },
    summary: { en: "The non-rotating placement, paid once and scheduled through Election Day.", es: "La ubicación sin rotación, pagada una vez y programada hasta el Día de Elección." },
    features: {
      en: ["Same exclusive non-rotating placement", "Runs through November 3, 2026", "$4,000 value at weekly pricing", "One payment; save $2,500"],
      es: ["La misma ubicación exclusiva sin rotación", "Hasta el 3 de noviembre de 2026", "Valor de $4,000 con precio semanal", "Un solo pago; ahorra $2,500"],
    },
    stripeUrl: "https://buy.stripe.com/00w3cv1fQ5sG7uu0pF3sI0z",
    featured: true,
  },
  {
    id: "newsletter",
    name: { en: "Laredo Brief Sponsor", es: "Patrocinador del Brief de Laredo" },
    shortName: { en: "Laredo Brief — $225/send", es: "Brief de Laredo — $225/envío" },
    price: 225,
    cadence: { en: "/ send", es: "/ envío" },
    billing: "one_time",
    availability: { en: "1 sponsor per send", es: "1 patrocinador por envío" },
    tag: { en: "The Laredo Brief · Weekly email", es: "El Brief de Laredo · Email semanal" },
    summary: { en: "One sponsor featured directly in a scheduled weekly election email.", es: "Un patrocinador destacado directamente en un email electoral programado." },
    features: {
      en: ["One sponsor per issue", "Featured in the weekly email", "Sponsor link with click tracking", "Billed per scheduled send"],
      es: ["Un patrocinador por edición", "Destacado en el email semanal", "Enlace con seguimiento de clics", "Cobro por envío programado"],
    },
    stripeUrl: "https://buy.stripe.com/6oUeVd4s208mg106O33sI0A",
  },
];

export const sponsorOnboardingChecklist = {
  en: ["Logo file", "Destination URL", "One-line message", "Language preference", "Primary contact"],
  es: ["Archivo de logo", "URL de destino", "Mensaje de una línea", "Preferencia de idioma", "Contacto principal"],
};
