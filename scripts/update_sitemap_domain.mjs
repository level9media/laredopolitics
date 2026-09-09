import { readFile, writeFile } from "node:fs/promises";

const file = "/home/ubuntu/laredo-politics-hub/client/public/sitemap.xml";
const current = await readFile(file, "utf8");
const updated = current.replaceAll("https://laredopolitics.com", "https://laredopolitics.com");
await writeFile(file, updated);
console.log(`Updated ${file}`);
