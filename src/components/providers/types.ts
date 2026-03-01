type TTheme = {
  value: string;
  label: string;
  color: string;
};

type TAppearance = "light" | "dark" | "system";

type TSettings = {
  appearance: TAppearance;
  theme: string;
  locale: string;
};

export type { TTheme, TAppearance, TSettings };
