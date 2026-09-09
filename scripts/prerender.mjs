import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { render } from "../.prerender/server.mjs";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputRoot = path.join(projectRoot, "dist", "public");
const sitemap = await readFile(path.join(projectRoot, "client", "public", "sitemap.xml"), "utf8");
const template = await readFile(path.join(outputRoot, "index.html"), "utf8");
const routes = Array.from(sitemap.matchAll(/<loc>https:\/\/laredopolitics\.com([^<]*)<\/loc>/g), (match) => match[1] || "/");

if (!routes.length) throw new Error("No laredopolitics.com routes found in sitemap.");

function escapeHtml(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function cleanHead(html) {
  return html
    .replace(/<title>[\s\S]*?<\/title>/gi, "")
    .replace(/\s*<meta\s+(?:name|property)=["'](?:description|keywords|og:title|og:description|og:type|og:locale|og:url|og:image|twitter:title|twitter:description|twitter:image)["'][^>]*>/gi, "")
    .replace(/\s*<link\s+rel=["'](?:canonical|alternate)["'][^>]*>/gi, "")
    .replace(/\s*<script\s+id=["']page-json-ld["'][\s\S]*?<\/script>/gi, "");
}

function metadataBlock(seo) {
  const keywords = seo.keywords.join(", ");
  const locale = seo.language === "en" ? "en_US" : "es_US";
  const alternateLanguage = seo.language === "en" ? "es" : "en";
  const schema = seo.schema ? `<script id="page-json-ld" type="application/ld+json">${JSON.stringify(seo.schema).replaceAll("<", "\\u003c")}</script>` : "";
  return [
    `<title>${escapeHtml(seo.fullTitle)}</title>`,
    `<meta name="description" content="${escapeHtml(seo.description)}">`,
    `<meta name="keywords" content="${escapeHtml(keywords)}">`,
    `<link rel="canonical" href="${escapeHtml(seo.canonical)}">`,
    `<link rel="alternate" hreflang="${seo.language}" href="${escapeHtml(seo.canonical)}">`,
    `<link rel="alternate" hreflang="${alternateLanguage}" href="${escapeHtml(seo.alternateUrl)}">`,
    `<link rel="alternate" hreflang="x-default" href="https://laredopolitics.com">`,
    `<meta property="og:title" content="${escapeHtml(seo.fullTitle)}">`,
    `<meta property="og:description" content="${escapeHtml(seo.description)}">`,
    `<meta property="og:type" content="${escapeHtml(seo.type)}">`,
    `<meta property="og:locale" content="${locale}">`,
    `<meta property="og:url" content="${escapeHtml(seo.canonical)}">`,
    `<meta property="og:image" content="${escapeHtml(seo.socialImage)}">`,
    `<meta name="twitter:title" content="${escapeHtml(seo.fullTitle)}">`,
    `<meta name="twitter:description" content="${escapeHtml(seo.description)}">`,
    `<meta name="twitter:image" content="${escapeHtml(seo.socialImage)}">`,
    schema,
  ].filter(Boolean).join("\n    ");
}

let rendered = 0;
for (const route of routes) {
  const appHtml = await render(route);
  const marker = appHtml.match(/<script type="application\/json" data-prerender-seo="true">([\s\S]*?)<\/script>/);
  if (!marker) throw new Error(`Missing prerender SEO marker for ${route}`);
  const seo = JSON.parse(marker[1]);
  let html = cleanHead(template);
  html = html.replace("<html lang=\"en\">", `<html lang="${seo.language}">`);
  html = html.replace("</head>", `    ${metadataBlock(seo)}\n  </head>`);
  html = html.replace(/<div id="root"><\/div>/, `<div id="root">${appHtml}</div>`);
  if (!html.includes(appHtml)) throw new Error(`Could not inject rendered HTML for ${route}`);

  const destination = route === "/" ? path.join(outputRoot, "index.html") : path.join(outputRoot, route.replace(/^\//, ""), "index.html");
  await mkdir(path.dirname(destination), { recursive: true });
  await writeFile(destination, html);
  rendered += 1;
  if (rendered % 20 === 0) console.log(`Prerendered ${rendered}/${routes.length} routes.`);
}

console.log(`Prerendered ${rendered} route-specific HTML files.`);
