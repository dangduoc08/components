import fs from "node:fs";
import path from "node:path";

import type { TTheme } from "@/components/providers/types";

function getThemes(): TTheme[] {
  const themesDir = path.join(process.cwd(), "src/themes");
  const files = fs.readdirSync(themesDir).filter((f) => f.endsWith(".css"));

  return files
    .map((file) => {
      const value = file.replace(".css", "");
      const label = value
        .split("-")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ");
      const content = fs.readFileSync(path.join(themesDir, file), "utf-8");
      const colorMatch = content.match(/--primary:\s*(oklch\([^)]+\))/);
      const color = colorMatch ? colorMatch[1] : "";
      return { value, label, color };
    })
    .sort((a, b) => a.label.localeCompare(b.label));
}

export { getThemes };
