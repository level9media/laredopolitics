import { useEffect } from "react";

const SITE_URL = "https://laredohub-yakrq2cm.manus.space";
const DEFAULT_IMAGE = "/manus-storage/laredo-civic-hero_d774494e.jpg";

type SeoProps = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  keywords?: string[];
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

export default function Seo({ title, description, path, type = "website", keywords = [], schema }: SeoProps) {
  useEffect(() => {
    const fullTitle = title.includes("Laredo Mayor") ? title : `${title} | Laredo Mayor 2026`;
    const canonical = `${SITE_URL}${path === "/" ? "" : path}`;
    document.title = fullTitle;

    upsertMeta('meta[name="description"]', "name", "description", description);
    upsertMeta('meta[name="keywords"]', "name", "keywords", keywords.join(", "));
    upsertMeta('meta[property="og:title"]', "property", "og:title", fullTitle);
    upsertMeta('meta[property="og:description"]', "property", "og:description", description);
    upsertMeta('meta[property="og:type"]', "property", "og:type", type);
    upsertMeta('meta[property="og:url"]', "property", "og:url", canonical);
    upsertMeta('meta[property="og:image"]', "property", "og:image", `${SITE_URL}${DEFAULT_IMAGE}`);
    upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", fullTitle);
    upsertMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    upsertMeta('meta[name="twitter:image"]', "name", "twitter:image", `${SITE_URL}${DEFAULT_IMAGE}`);

    let canonicalLink = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;

    const existing = document.getElementById("page-json-ld");
    existing?.remove();
    if (schema) {
      const script = document.createElement("script");
      script.id = "page-json-ld";
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => document.getElementById("page-json-ld")?.remove();
  }, [description, keywords, path, schema, title, type]);

  return null;
}

export { SITE_URL };
