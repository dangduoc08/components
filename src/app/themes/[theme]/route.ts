import fs from "node:fs";
import path from "node:path";
import { NextResponse } from "next/server";

const MAX_FILE_SIZE_BYTES = 50 * 1024;

const THEMES_DIR = path.join(process.cwd(), "src/themes");
const RESOLVED_THEMES_DIR = fs.realpathSync(THEMES_DIR);

const THEME_CACHE: ReadonlyMap<string, string> = new Map(
  fs
    .readdirSync(RESOLVED_THEMES_DIR)
    .filter((file) => /^[a-z0-9-]+\.css$/.test(file))
    .flatMap((file) => {
      const resolvedPath = fs.realpathSync(
        path.join(RESOLVED_THEMES_DIR, file),
      );

      if (!resolvedPath.startsWith(RESOLVED_THEMES_DIR + path.sep)) return [];

      const stat = fs.statSync(resolvedPath);

      if (!stat.isFile() || stat.size > MAX_FILE_SIZE_BYTES) return [];

      return [
        [file.slice(0, -4), fs.readFileSync(resolvedPath, "utf-8")] as const,
      ];
    }),
);

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ theme: string }> },
) {
  const { theme } = await params;
  const themeName =
    typeof theme === "string" ? theme.replace(/\.css$/i, "") : "";
  const content = THEME_CACHE.get(themeName);

  if (!content) {
    return new NextResponse(null, { status: 404 });
  }

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/css; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
