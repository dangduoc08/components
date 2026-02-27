import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { extractThemeVariables } from "@/lib/extract-theme-variables";

export async function GET(
  _: NextRequest,
  { params }: { params: Promise<{ theme: string }> },
) {
  const { theme } = await params;
  const themeName = theme.replace(/\.css$/, "");
  const filePath = join(process.cwd(), "src/themes", `${themeName}.css`);

  if (!existsSync(filePath)) {
    return new NextResponse("Not found", { status: 404 });
  }

  const css = extractThemeVariables(readFileSync(filePath, "utf-8"));

  return new NextResponse(css, {
    headers: {
      "Content-Type": "text/css",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
