import { readFile, writeFile } from "node:fs/promises";

const files = [
  {
    path: "/home/ubuntu/laredo-politics-hub/client/src/pages/ResourcePagesEnglish.tsx",
    importAfter: 'import { candidatesEn, issuesEn, votingResourcesEn, type Candidate, type Issue } from "@/data/resources-en";',
    marker: '<div className="mt-16"><Eyebrow>Who is running</Eyebrow>',
    replacement: '<LocalRacesGrid language="en" /><div className="mt-16"><Eyebrow>Who is running for mayor</Eyebrow>',
  },
  {
    path: "/home/ubuntu/laredo-politics-hub/client/src/pages/ResourcePages.tsx",
    importAfter: 'import { candidates, issues, votingResources, type Candidate, type Issue } from "@/data/resources";',
    marker: '<div className="mt-16"><Eyebrow>Quién compite</Eyebrow>',
    replacement: '<LocalRacesGrid language="es" /><div className="mt-16"><Eyebrow>Quién compite para alcalde</Eyebrow>',
  },
];

for (const item of files) {
  let content = await readFile(item.path, "utf8");
  if (!content.includes('from "@/pages/LocalRaces"')) {
    content = content.replace(item.importAfter, `${item.importAfter}\nimport { LocalRacesGrid } from "@/pages/LocalRaces";`);
  }
  if (!content.includes(item.marker)) throw new Error(`Missing insertion marker in ${item.path}`);
  content = content.replace(item.marker, item.replacement);
  await writeFile(item.path, content);
  console.log(`Added local races to ${item.path}`);
}
