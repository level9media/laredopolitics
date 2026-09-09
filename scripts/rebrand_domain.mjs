import { readFile, writeFile } from "node:fs/promises";
import { execFileSync } from "node:child_process";

const root = "/home/ubuntu/laredo-politics-hub";
const output = execFileSync("rg", ["-l", "laredohub-yakrq2cm\\.manus\\.space|laredomayor\\.com|Laredo Politics — The Politics of Our City", `${root}/client`, `${root}/scripts`, `${root}/.project-config.json`, `${root}/template.json`], { encoding: "utf8" }).trim();
const files = output ? output.split("\n") : [];
for (const file of files) {
  let content = await readFile(file, "utf8");
  content = content
    .replaceAll("https://laredopolitics.com", "https://laredopolitics.com")
    .replaceAll("laredopolitics.com", "laredopolitics.com")
    .replaceAll("Laredo Politics — The Politics of Our City", "Laredo Politics — The Politics of Our City");
  await writeFile(file, content);
}
console.log(`Updated domain and email references in ${files.length} files.`);
