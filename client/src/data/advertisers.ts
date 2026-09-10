export type AdPlacement = "sitewide" | "homepage" | "resource";

export type Advertiser = {
  id: string;
  businessName: string;
  tagline: string;
  cta: string;
  href: string;
  image?: string;
  logo?: string;
  placement: AdPlacement;
  accent: string;
  active: boolean;
  available?: boolean;
};

/**
 * Add paid campaigns here. The carousel accepts any number of active records.
 * For predictable delivery and stronger advertiser value, cap each placement
 * at six active advertisers and open a second rotation when it sells out.
 */
export const advertisers: Advertiser[] = [
  {
    id: "presenting-available",
    businessName: "Non-rotating placement",
    tagline: "One advertiser only in the highest-visibility sitewide position.",
    cta: "See price and reserve",
    href: "/advertise#rate-card",
    placement: "sitewide",
    accent: "#e75037",
    active: true,
    available: true,
  },
  {
    id: "local-business-available",
    businessName: "Small Square",
    tagline: "Reach engaged Laredo residents in one of only six active rotation positions.",
    cta: "See price and reserve",
    href: "/advertise#rate-card",
    placement: "sitewide",
    accent: "#d4a052",
    active: true,
    available: true,
  },
  {
    id: "professional-services-available",
    businessName: "Banner",
    tagline: "A wider, higher-visibility banner that rotates with up to five sponsors.",
    cta: "See price and reserve",
    href: "/advertise#rate-card",
    placement: "resource",
    accent: "#6b8582",
    active: true,
    available: true,
  },
  {
    id: "community-brand-available",
    businessName: "Community brand partner",
    tagline: "Stay visible beside the local issues Laredo residents follow most.",
    cta: "View the rate card",
    href: "/advertise#rate-card",
    placement: "resource",
    accent: "#245a48",
    active: true,
    available: true,
  },
  {
    id: "homepage-feature-available",
    businessName: "Election Day Lock-In",
    tagline: "Secure the non-rotating placement through November 3 with one payment.",
    cta: "Lock in the package",
    href: "/advertise#rate-card",
    placement: "homepage",
    accent: "#e75037",
    active: true,
    available: true,
  },
  {
    id: "election-brief-available",
    businessName: "Laredo Brief lead sponsor",
    tagline: "Own the exclusive lead sponsor position in one scheduled Laredo Brief send.",
    cta: "Reserve a send",
    href: "/advertise#rate-card",
    placement: "homepage",
    accent: "#d4a052",
    active: true,
    available: true,
  },
];

export const recommendedRotationCap = 6;
