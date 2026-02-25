"use client";

import { use } from "react";
import { ShadcnThemeContext } from "@/components/providers/shadcn-theme-provider";

function useShadcnTheme() {
  return use(ShadcnThemeContext);
}

export { useShadcnTheme };
