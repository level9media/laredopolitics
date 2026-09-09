import { readFile, writeFile } from "node:fs/promises";

const file = "/home/ubuntu/laredo-politics-hub/client/src/pages/ResourcePages.tsx";
let content = await readFile(file, "utf8");
const paths = [
  "/eleccion-alcalde-laredo-2026",
  "/comparar-candidatos",
  "/candidatos",
  "/temas",
  "/votar",
  "/calendario-electoral",
  "/finanzas-de-campana",
  "/verificacion-de-datos",
  "/metodologia",
];
for (const path of paths) content = content.replaceAll(path, `/es${path}`);
await writeFile(file, content);
console.log(`Prefixed Spanish routes in ${file}`);
