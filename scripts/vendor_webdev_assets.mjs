import { mkdir, readFile, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const root = "/home/ubuntu/laredo-politics-hub";
const previewOrigin = "https://3000-i39skeactm2yd7g7lis51-5236d852.us1.manus.computer";
const mediaDir = path.join(root, "client/public/media");
const sourceRoots = [path.join(root, "client/src"), path.join(root, "client/index.html")];
const assetPattern = /\/manus-storage\/[A-Za-z0-9_.-]+/g;

async function collectFiles(target) {
  const details = await stat(target);
  if (details.isFile()) return [target];
  const entries = await readdir(target, { withFileTypes: true });
  const nested = await Promise.all(entries.map((entry) => collectFiles(path.join(target, entry.name))));
  return nested.flat();
}

const files = (await Promise.all(sourceRoots.map(collectFiles))).flat().filter((file) => /\.(tsx?|html|css)$/.test(file));
const sources = await Promise.all(files.map(async (file) => ({ file, content: await readFile(file, "utf8") })));
const assets = [...new Set(sources.flatMap(({ content }) => content.match(assetPattern) || []))].sort();

await mkdir(mediaDir, { recursive: true });
for (const asset of assets) {
  const response = await fetch(`${previewOrigin}${asset}`, { redirect: "follow" });
  if (!response.ok) throw new Error(`Failed to download ${asset}: ${response.status}`);
  const output = path.join(mediaDir, path.basename(asset));
  await writeFile(output, Buffer.from(await response.arrayBuffer()));
  console.log(`Vendored ${asset} -> /media/${path.basename(asset)}`);
}

for (const { file, content } of sources) {
  const updated = content.replace(assetPattern, (asset) => `/media/${path.basename(asset)}`);
  if (updated !== content) await writeFile(file, updated);
}

console.log(`Vendored and rewrote ${assets.length} assets.`);
