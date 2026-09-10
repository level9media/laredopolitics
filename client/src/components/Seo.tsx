import { useEffect } from "react";

const SITE_URL = "https://laredopolitics.com";
const DEFAULT_IMAGE = "/media/laredo-downtown-hero_2026.webp";

type SeoProps = {
  title: string;
  description: string;
  path: string;
  language?: "en" | "es";
  alternatePath?: string;
  image?: string;
  type?: "website" | "article";
  keywords?: string[];
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
};

type PrerenderSeo = {
  fullTitle: string;
  description: string;
  canonical: string;
  socialImage: string;
  language: "en" | "es";
  alternateUrl: string;
  type: "website" | "article";
  keywords: string[];
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
};

function upsertMeta(selector: string, attribute: "name" | "property", value: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }
  element.content = content;
}

export default function Seo({ title, description, path, language = "en", alternatePath, image, type = "website", keywords = [], schema }: SeoProps) {
  const fullTitle = title.includes("Laredo Politics") ? title : `${title} | Laredo Politics`;
  const canonical = `${SITE_URL}${path === "/" ? "" : path}`;
  const socialImage = image ? (image.startsWith("http") ? image : `${SITE_URL}${image}`) : `${SITE_URL}${DEFAULT_IMAGE}`;
  const resolvedAlternatePath = alternatePath ?? (language === "es" ? (path.replace(/^\/es/, "") || "/") : `/es${path === "/" ? "" : path}`);
  const alternateUrl = `${SITE_URL}${resolvedAlternatePath}`;
  const prerenderSeo: PrerenderSeo = { fullTitle, description, canonical, socialImage, language, alternateUrl, type, keywords, schema };

  useEffect(() => {
    document.title = fullTitle;
    document.documentElement.lang = language;

    upsertMeta('meta[name="description"]', "name", "description", description);
    upsertMeta('meta[name="keywords"]', "name", "keywords", keywords.join(", "));
    upsertMeta('meta[property="og:title"]', "property", "og:title", fullTitle);
    upsertMeta('meta[property="og:description"]', "property", "og:description", description);
    upsertMeta('meta[property="og:type"]', "property", "og:type", type);
    upsertMeta('meta[property="og:locale"]', "property", "og:locale", language === "en" ? "en_US" : "es_US");
    upsertMeta('meta[property="og:url"]', "property", "og:url", canonical);
    upsertMeta('meta[property="og:image"]', "property", "og:image", socialImage);
    upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", fullTitle);
    upsertMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    upsertMeta('meta[name="twitter:image"]', "name", "twitter:image", socialImage);

    let canonicalLink = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;

    document.querySelectorAll('link[data-laredo-hreflang="true"]').forEach((element) => element.remove());
    [
      { hreflang: language, href: canonical },
      { hreflang: language === "en" ? "es" : "en", href: alternateUrl },
      { hreflang: "x-default", href: SITE_URL },
    ].forEach((alternate) => {
      const link = document.createElement("link");
      link.rel = "alternate";
      link.hreflang = alternate.hreflang;
      link.href = alternate.href;
      link.dataset.laredoHreflang = "true";
      document.head.appendChild(link);
    });

    const existing = document.getElementById("page-json-ld");
    existing?.remove();
    if (schema) {
      const script = document.createElement("script");
      script.id = "page-json-ld";
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => {
      document.getElementById("page-json-ld")?.remove();
      document.querySelectorAll('link[data-laredo-hreflang="true"]').forEach((element) => element.remove());
    };
  }, [alternateUrl, canonical, description, fullTitle, keywords, language, schema, socialImage, type]);

  return <script type="application/json" data-prerender-seo="true" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(prerenderSeo).replaceAll("<", "\\u003c") }} />;
}

export { SITE_URL };
