"use client";

import { useContext } from "react";
import { AppearanceContext } from "@/components/providers/appearance-provider";

function useAppearance() {
  return useContext(AppearanceContext);
}

export { useAppearance };
