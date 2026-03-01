"use client";

import { useContext } from "react";
import { ThemeContext } from "@/components/providers/theme-provider";

function useTheme() {
  return useContext(ThemeContext);
}

export { useTheme };
