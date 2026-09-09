import { readFile } from "node:fs/promises";

const sitemap = await readFile("/home/ubuntu/laredo-politics-hub/client/public/sitemap.xml", "utf8");
const paths = [...sitemap.matchAll(/<loc>https:\/\/laredohub-yakrq2cm\.manus\.space([^<]*)<\/loc>/g)].map((match) => match[1] || "/");
const failures = [];

for (const path of paths) {
  const response = await fetch(`http://127.0.0.1:3000${path}`);
  const html = await response.text();
  if (!response.ok || !html.includes('<div id="root"></div>')) {
    failures.push({ path, status: response.status, hasRoot: html.includes('<div id="root"></div>') });
  }
}

console.log(`Checked ${paths.length} sitemap routes.`);
if (failures.length) {
  console.error(JSON.stringify(failures, null, 2));
  process.exit(1);
}
console.log("All sitemap routes returned the application shell successfully.");
