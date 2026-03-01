import type { TAppearance, TTheme } from "./types";

interface IThemeContext {
  theme: string;
  setTheme: (theme: string) => void;
  themes: TTheme[];
}

interface IAppearanceContext {
  appearance: TAppearance;
  setAppearance: (appearance: TAppearance) => void;
}

export type { IThemeContext, IAppearanceContext };
