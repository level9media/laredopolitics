import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sitemap = await readFile(path.join(root, "client/public/sitemap.xml"), "utf8");
const routes = Array.from(
  sitemap.matchAll(/<loc>https:\/\/laredopolitics\.com([^<]*)<\/loc>/g),
  (match) => match[1] || "/",
);
const baseUrl = process.env.ROUTE_CHECK_BASE_URL?.replace(/\/$/, "");
const failures = [];

if (!routes.length) {
  throw new Error("No laredopolitics.com URLs were found in the sitemap.");
}

for (const route of routes) {
  try {
    if (baseUrl) {
      const response = await fetch(`${baseUrl}${route}`, { redirect: "follow" });
      const html = await response.text();
      if (!response.ok || !html.includes('<div id="root"')) {
        failures.push({ route, status: response.status, hasRoot: html.includes('<div id="root"') });
      }
      continue;
    }

    const file =
      route === "/"
        ? path.join(root, "dist/public/index.html")
        : path.join(root, "dist/public", route.replace(/^\//, ""), "index.html");
    await access(file);
    const html = await readFile(file, "utf8");
    if (!html.includes('<div id="root"') || !html.includes('<link rel="canonical"')) {
      failures.push({ route, file, hasRoot: html.includes('<div id="root"'), hasCanonical: html.includes('<link rel="canonical"') });
    }
  } catch (error) {
    failures.push({ route, error: error.message });
  }
}

console.log(`Checked ${routes.length} sitemap routes${baseUrl ? ` at ${baseUrl}` : " in dist/public"}.`);
if (failures.length) {
  console.error(JSON.stringify(failures, null, 2));
  process.exit(1);
}
console.log("All sitemap routes passed.");
