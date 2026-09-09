import { readFile, writeFile } from "node:fs/promises";

const replacements = [
  {
    file: "/home/ubuntu/laredo-politics-hub/client/src/pages/ResourcePagesEnglish.tsx",
    from: '<Seo title="Laredo elections 2026: mayor, districts and judge"',
    to: '<Seo alternatePath="/es/elecciones-2026" title="Laredo elections 2026: mayor, districts and judge"',
  },
  {
    file: "/home/ubuntu/laredo-politics-hub/client/src/pages/ResourcePages.tsx",
    from: '<Seo language="es" title="Elecciones de Laredo 2026: alcalde, distritos y juez"',
    to: '<Seo language="es" alternatePath="/election-2026" title="Elecciones de Laredo 2026: alcalde, distritos y juez"',
  },
];

for (const item of replacements) {
  let content = await readFile(item.file, "utf8");
  if (!content.includes(item.to)) {
    if (!content.includes(item.from)) throw new Error(`SEO marker missing in ${item.file}`);
    content = content.replace(item.from, item.to);
    await writeFile(item.file, content);
  }
}
console.log("Election hub hreflang paths updated.");
