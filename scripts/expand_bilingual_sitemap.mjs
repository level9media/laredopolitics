import { readFile, writeFile } from "node:fs/promises";

const file = "/home/ubuntu/laredo-politics-hub/client/public/sitemap.xml";
const site = "https://laredohub-yakrq2cm.manus.space";
const source = await readFile(file, "utf8");
const entries = [...source.matchAll(/  <url>.*?<\/url>/g)].map((match) => match[0]).filter((entry) => !entry.includes(`${site}/es`));
const spanishEntries = entries.map((entry) => entry.replace(`<loc>${site}/`, `<loc>${site}/es${entry.includes(`<loc>${site}/</loc>`) ? "" : "/"}`));
const output = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[...entries, ...spanishEntries].join("\n")}\n</urlset>\n`;
await writeFile(file, output);
console.log(`Wrote ${entries.length} English and ${spanishEntries.length} Spanish URLs.`);
