"use client";

import { use } from "react";
import { ThemeContext } from "@/components/providers/theme-provider";

function useTheme() {
  return use(ThemeContext);
}

export { useTheme };
