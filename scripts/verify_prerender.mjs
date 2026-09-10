import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sitemap = await readFile(path.join(root, "client/public/sitemap.xml"), "utf8");
const routes = Array.from(
  sitemap.matchAll(/<loc>https:\/\/laredopolitics\.com([^<]*)<\/loc>/g),
  (match) => match[1] || "/",
);
const failures = [];
const titles = new Map();

if (!routes.length) {
  throw new Error("No laredopolitics.com URLs were found in the sitemap.");
}

for (const route of routes) {
  const file =
    route === "/"
      ? path.join(root, "dist/public/index.html")
      : path.join(root, "dist/public", route.replace(/^\//, ""), "index.html");

  try {
    const fileStat = await stat(file);
    const html = await readFile(file, "utf8");
    const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
    const canonical = html.match(/<link rel="canonical" href="([^"]+)">/)?.[1];
    const expectedCanonical = `https://laredopolitics.com${route === "/" ? "" : route}`;
    const language = route === "/es" || route.startsWith("/es/") ? "es" : "en";

    if (fileStat.size < 10_000) failures.push(`${route}: HTML too small (${fileStat.size})`);
    if (!html.includes(`<html lang="${language}">`)) failures.push(`${route}: incorrect html language`);
    if (!title) failures.push(`${route}: missing title`);
    if (canonical !== expectedCanonical) failures.push(`${route}: canonical ${canonical} != ${expectedCanonical}`);
    if (!html.includes('<meta name="description" content="')) failures.push(`${route}: missing description`);
    if (!html.includes("<h1")) failures.push(`${route}: missing rendered H1`);
    if (!html.includes('data-prerender-seo="true"')) failures.push(`${route}: missing hydration SEO marker`);

    if (title) {
      const existing = titles.get(title) || [];
      existing.push(route);
      titles.set(title, existing);
    }
  } catch (error) {
    failures.push(`${route}: ${error.message}`);
  }
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(
  `Verified ${routes.length} pre-rendered HTML pages with route-specific language, title, canonical, description, and H1.`,
);
