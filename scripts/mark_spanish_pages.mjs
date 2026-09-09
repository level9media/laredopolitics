import { readFile, writeFile } from "node:fs/promises";

const file = "/home/ubuntu/laredo-politics-hub/client/src/pages/ResourcePages.tsx";
let content = await readFile(file, "utf8");
content = content
  .replaceAll("<PageShell>", '<PageShell language="es">')
  .replaceAll("<Breadcrumbs items=", '<Breadcrumbs language="es" items=')
  .replaceAll("<AdUnit />", '<AdUnit language="es" />')
  .replaceAll("<ContactMini />", '<ContactMini language="es" />')
  .replaceAll("<SourceList sources=", '<SourceList language="es" sources=');
await writeFile(file, content);
console.log(`Marked Spanish page chrome in ${file}`);
