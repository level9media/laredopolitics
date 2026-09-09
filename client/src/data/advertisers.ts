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
    businessName: "Presenting sponsor",
    tagline: "Own the highest-visibility placement across Laredo Politics.",
    cta: "Reserve this placement",
    href: "/#advertise-form",
    placement: "sitewide",
    accent: "#e75037",
    active: true,
    available: true,
  },
  {
    id: "local-business-available",
    businessName: "Local business spotlight",
    tagline: "Reach engaged Laredo voters with a clearly labeled local message.",
    cta: "See advertising options",
    href: "/#advertise-form",
    placement: "sitewide",
    accent: "#d4a052",
    active: true,
    available: true,
  },
  {
    id: "professional-services-available",
    businessName: "Professional services",
    tagline: "A premium rotating placement for trusted local firms.",
    cta: "Request availability",
    href: "/#advertise-form",
    placement: "resource",
    accent: "#6b8582",
    active: true,
    available: true,
  },
  {
    id: "community-brand-available",
    businessName: "Community brand",
    tagline: "Stay visible beside the issues Laredo residents follow most.",
    cta: "Get the media kit",
    href: "/#advertise-form",
    placement: "resource",
    accent: "#245a48",
    active: true,
    available: true,
  },
  {
    id: "homepage-feature-available",
    businessName: "Homepage feature",
    tagline: "High-impact exposure within the main civic briefing experience.",
    cta: "Claim the feature",
    href: "/#advertise-form",
    placement: "homepage",
    accent: "#e75037",
    active: true,
    available: true,
  },
  {
    id: "election-brief-available",
    businessName: "Election brief sponsor",
    tagline: "Pair homepage visibility with the weekly Laredo email briefing.",
    cta: "Ask about the package",
    href: "/#advertise-form",
    placement: "homepage",
    accent: "#d4a052",
    active: true,
    available: true,
  },
];

export const recommendedRotationCap = 6;
