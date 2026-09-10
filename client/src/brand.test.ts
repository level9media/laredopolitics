import { describe, expect, it } from "vitest";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

describe("Laredo Politics identity", () => {
  it("uses the approved WebDev title and public domain", () => {
    const projectConfigPath = resolve(process.cwd(), ".project-config.json");
    const html = readFileSync(resolve(process.cwd(), "client/index.html"), "utf8");

    if (existsSync(projectConfigPath)) {
      const project = JSON.parse(readFileSync(projectConfigPath, "utf8"));
      expect(project.secrets.VITE_APP_TITLE).toBe("Laredo Politics");
    }

    expect(html).toContain("<title>Laredo Politics");
    expect(html).toContain("https://laredopolitics.com/");
    expect(html).not.toContain("laredomayor.com");
  });
});
