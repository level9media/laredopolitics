import { readFile, writeFile } from "node:fs/promises";

const file = "/home/ubuntu/laredo-politics-hub/client/src/pages/LocalRaces.tsx";
let content = await readFile(file, "utf8");
content = content.replace(
  '>November 3, 2026</span><span className="border border-white/20',
  '>{language === "en" ? "November 3, 2026" : "3 de noviembre de 2026"}</span><span className="border border-white/20',
);
const oldBreadcrumb = '<Breadcrumbs language={language} items={[{ label: language === "en" ? "Election 2026" : "Elecciones 2026", href: language === "en" ? "/eleccion-alcalde-laredo-2026" : "/es/eleccion-alcalde-laredo-2026" }, { label: race.shortTitle[language] }]} /><div className="grid gap-10 lg:grid-cols-[1fr_330px] lg:gap-16">';
const newBreadcrumb = '<Breadcrumbs language={language} items={[{ label: language === "en" ? "Election 2026" : "Elecciones 2026", href: language === "en" ? "/election-2026" : "/es/elecciones-2026" }, { label: race.shortTitle[language] }]} />{race.notice && <div className="mb-10 flex gap-4 border-l-4 border-[#e75037] bg-[#f7e7df] p-5 text-[#102b36]"><AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-[#e75037]" /><div><p className="text-[9px] font-black uppercase tracking-[0.14em]">{t.notice}</p><p className="mt-2 text-sm leading-6">{race.notice[language]}</p></div></div>}<div className="grid gap-10 lg:grid-cols-[1fr_330px] lg:gap-16">';
if (content.includes(oldBreadcrumb)) content = content.replace(oldBreadcrumb, newBreadcrumb);
else if (!content.includes('/es/elecciones-2026')) throw new Error("Breadcrumb marker not found");
const asideMarker = '<aside className="space-y-5 lg:sticky lg:top-28 lg:self-start"><section className="bg-[#e75037] p-7 text-white">';
const asideReplacement = '<aside className="space-y-5 lg:sticky lg:top-28 lg:self-start"><figure className="border border-[#102b36]/14 bg-[#fbf8f1] p-3 shadow-[0_18px_50px_rgba(16,43,54,0.12)]"><img src={race.evidenceImage} alt={`${race.title[language]} candidate drawing board`} className="aspect-[4/5] w-full object-cover" loading="lazy" /><figcaption className="px-2 pb-1 pt-3 text-[9px] leading-4 text-[#68797c]">{t.photoCaption}</figcaption></figure><section className="bg-[#e75037] p-7 text-white">';
if (!content.includes("candidate drawing board")) {
  if (!content.includes(asideMarker)) throw new Error("Sidebar marker not found");
  content = content.replace(asideMarker, asideReplacement);
}
content = content.replace('className="aspect-[4/5] w-full object-cover" loading="lazy"', 'className="aspect-[4/5] w-full object-cover" loading="eager"');
await writeFile(file, content);
console.log("Updated local race pages.");
