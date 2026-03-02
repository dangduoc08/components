import type { TTheme } from "@/lib/types";

type TAppearance = "light" | "dark" | "system";

type TSettings = {
  appearance: TAppearance;
  theme: string;
  locale: string;
};

export type { TTheme, TAppearance, TSettings };
