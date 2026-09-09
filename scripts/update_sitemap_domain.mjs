import { readFile, writeFile } from "node:fs/promises";

const file = "/home/ubuntu/laredo-politics-hub/client/public/sitemap.xml";
const current = await readFile(file, "utf8");
const updated = current.replaceAll("https://laredomayor.com", "https://laredohub-yakrq2cm.manus.space");
await writeFile(file, updated);
console.log(`Updated ${file}`);
