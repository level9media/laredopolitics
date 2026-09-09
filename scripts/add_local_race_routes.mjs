import { readFile, writeFile } from "node:fs/promises";

const file = "/home/ubuntu/laredo-politics-hub/client/public/sitemap.xml";
const site = "https://laredopolitics.com";
const slugs = ["district-1", "district-2", "district-3", "district-6", "municipal-court-judge"];
let xml = await readFile(file, "utf8");
xml = xml
  .replaceAll(`${site}/es/eleccion-alcalde-laredo-2026`, `${site}/es/elecciones-2026`)
  .replaceAll(`${site}/eleccion-alcalde-laredo-2026`, `${site}/election-2026`);
const entries = [];
for (const slug of slugs) {
  for (const base of ["/election-2026", "/es/elecciones-2026"]) {
    const url = `${site}${base}/${slug}`;
    if (!xml.includes(`<loc>${url}</loc>`)) entries.push(`  <url><loc>${url}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`);
  }
}
xml = xml.replace("</urlset>", `${entries.join("\n")}\n</urlset>`);
await writeFile(file, xml);
console.log(`Added ${entries.length} local-race URLs.`);
