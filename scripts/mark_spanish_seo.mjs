import { readFile, writeFile } from "node:fs/promises";

const file = "/home/ubuntu/laredo-politics-hub/client/src/pages/ResourcePages.tsx";
let content = await readFile(file, "utf8");
content = content.replaceAll("<Seo ", '<Seo language="es" ');
content = content.replaceAll("<Seo\n", '<Seo\n        language="es"\n');
await writeFile(file, content);
console.log(`Marked Spanish SEO language in ${file}`);
