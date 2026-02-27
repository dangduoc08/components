import type { TTheme } from "./types";

interface IThemeContext {
  theme: string;
  setTheme: (theme: string) => void;
  themes: TTheme[];
}

export type { IThemeContext };
