import { readFile, writeFile } from "node:fs/promises";

const pages = [
  {
    file: "/home/ubuntu/laredo-politics-hub/client/src/pages/ResourcePagesEnglish.tsx",
    importAfter: 'import { LocalRacesGrid } from "@/pages/LocalRaces";',
    marker: '<PageHero eyebrow="Central guide" title="Laredo elections 2026" description="Mayor, City Council Districts 1, 2, 3 and 6, Municipal Court Judge, major issues and everything you need to cast an informed vote on November 3." />',
    component: '<BallotSnapshot language="en" compact />',
  },
  {
    file: "/home/ubuntu/laredo-politics-hub/client/src/pages/ResourcePages.tsx",
    importAfter: 'import { LocalRacesGrid } from "@/pages/LocalRaces";',
    marker: '<PageHero eyebrow="Guía central" title="Elecciones de Laredo 2026" description="Alcalde, Distritos 1, 2, 3 y 6 del Concejo, Juez Municipal, los temas principales y todo lo necesario para votar informado el 3 de noviembre." />',
    component: '<BallotSnapshot language="es" compact />',
  },
];

for (const page of pages) {
  let content = await readFile(page.file, "utf8");
  if (!content.includes('from "@/components/BallotSnapshot"')) {
    if (!content.includes(page.importAfter)) throw new Error(`Import marker missing in ${page.file}`);
    content = content.replace(page.importAfter, `${page.importAfter}\nimport BallotSnapshot from "@/components/BallotSnapshot";`);
  }
  if (!content.includes(page.component)) {
    if (!content.includes(page.marker)) throw new Error(`Hero marker missing in ${page.file}`);
    content = content.replace(page.marker, `${page.marker}\n      ${page.component}`);
  }
  await writeFile(page.file, content);
}
console.log("Top-of-page ballot snapshots added to both election hubs.");
