import { readFile, writeFile } from "node:fs/promises";

const file = "/home/ubuntu/laredo-politics-hub/client/public/sitemap.xml";
let xml = await readFile(file, "utf8");
xml = xml.replaceAll("https://laredopolitics.com/finanzas-de-campana", "https://laredopolitics.com/campaign-finance");

const profiles = [
  "lupe-de-leon-jr",
  "gilbert-gonzalez",
  "ricardo-rangel-jr",
  "daisy-campos-rodriguez",
  "melissa-cigarroa",
  "michelle-winterroth",
  "clarissa-cardenas",
  "d-tyler-king",
  "ubaldo-granados-jr",
  "nathan-henry-chu",
  "rudy-morales-iii",
];

const routes = [
  { path: "/where-to-vote", frequency: "daily", priority: "0.9" },
  { path: "/advertise", frequency: "monthly", priority: "0.7" },
  { path: "/es/donde-votar", frequency: "daily", priority: "0.9" },
  { path: "/es/anunciate", frequency: "monthly", priority: "0.7" },
  ...profiles.flatMap((slug) => [
    { path: `/election-2026/candidates/${slug}`, frequency: "weekly", priority: "0.8" },
    { path: `/es/elecciones-2026/candidatos/${slug}`, frequency: "weekly", priority: "0.8" },
  ]),
];

const additions = routes
  .filter(({ path }) => !xml.includes(`<loc>https://laredopolitics.com${path}</loc>`))
  .map(({ path, frequency, priority }) => `  <url><loc>https://laredopolitics.com${path}</loc><lastmod>2026-09-09</lastmod><changefreq>${frequency}</changefreq><priority>${priority}</priority></url>`)
  .join("\n");

if (additions) xml = xml.replace("\n</urlset>", `\n${additions}\n</urlset>`);
await writeFile(file, xml);
console.log(`Sitemap now contains ${(xml.match(/<url>/g) || []).length} URLs.`);
