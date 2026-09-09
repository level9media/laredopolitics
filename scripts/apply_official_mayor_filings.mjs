import { readFile, writeFile } from "node:fs/promises";

const files = [
  "/home/ubuntu/laredo-politics-hub/client/src/data/resources-en.ts",
  "/home/ubuntu/laredo-politics-hub/client/src/data/resources.ts",
];

const filings = {
  "victor-trevino": {
    officialFullName: "Victor Daniel Trevino",
    campaignTreasurer: "Victor D. Trevino",
    treasurerUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/24434/639244512374809563",
    applicationUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/24097/639216280176900000",
  },
  "jd-gonzalez": {
    officialFullName: "Jose David Gonzalez",
    campaignTreasurer: "Sonia Villarreal",
    treasurerUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/23926/639203242118170000",
    applicationUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/23928/639203245618530000",
  },
  "jorge-garza": {
    officialFullName: "Jorge Alberto Garza",
    campaignTreasurer: "B Javier Cuate Mendoza",
    treasurerUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/24189/639226674656270000",
    applicationUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/24195/639226675983470000",
  },
  "poncho-casso": {
    officialFullName: "Alfonso I. Casso",
    campaignTreasurer: 'Alfonso I. "Poncho" Casso',
    treasurerUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/24063/639214597681930000",
    applicationUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/24065/639214600658800000",
  },
  "alyssa-cigarroa": {
    officialFullName: "Alyssa Cristine Cigarroa",
    campaignTreasurer: "Ricardo A. Sandoval",
    treasurerUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/24327/639235126108770000",
    applicationUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/24115/639217167875230000",
  },
};

for (const file of files) {
  let content = await readFile(file, "utf8");
  for (const [slug, data] of Object.entries(filings)) {
    const slugMarker = `    slug: "${slug}",`;
    const start = content.indexOf(slugMarker);
    if (start < 0) throw new Error(`Missing ${slug} in ${file}`);
    const nextSlug = content.indexOf("    slug: ", start + slugMarker.length);
    const end = nextSlug < 0 ? content.indexOf("];", start) : nextSlug;
    const block = content.slice(start, end);
    if (block.includes("officialFullName:")) continue;
    const ballotLineMatch = block.match(/    ballotName: .*\n/);
    if (!ballotLineMatch) throw new Error(`Missing ballotName for ${slug} in ${file}`);
    const insertionPoint = start + ballotLineMatch.index + ballotLineMatch[0].length;
    const inserted =
      `    officialFullName: ${JSON.stringify(data.officialFullName)},\n` +
      `    campaignTreasurer: ${JSON.stringify(data.campaignTreasurer)},\n` +
      `    treasurerUrl: ${JSON.stringify(data.treasurerUrl)},\n` +
      `    applicationUrl: ${JSON.stringify(data.applicationUrl)},\n`;
    content = content.slice(0, insertionPoint) + inserted + content.slice(insertionPoint);
  }
  await writeFile(file, content);
}

console.log("Applied official mayor filing data to English and Spanish records.");
