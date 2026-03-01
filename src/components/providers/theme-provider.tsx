"use client";

import { createContext, useEffect, useState } from "react";
import { THEME_STORAGE_KEY, THEME_STYLESHEET_ID } from "./constants";
import type { IThemeContext } from "./interfaces";
import type { TTheme } from "./types";

const ThemeContext = createContext<IThemeContext>({
  theme: "",
  setTheme: () => {},
  themes: [],
});

interface IThemeProviderProps {
  children: React.ReactNode;
  themes: TTheme[];
}

function ThemeProvider({ children, themes }: IThemeProviderProps) {
  const [theme, setThemeState] = useState(themes[0].value);

  useEffect(() => {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored) setThemeState(stored);
  }, []);

  useEffect(() => {
    const existing = document.getElementById(THEME_STYLESHEET_ID);
    const href = `/themes/${theme}.css`;

    if (existing?.getAttribute("href") !== href) {
      existing?.remove();
      const link = document.createElement("link");
      link.id = THEME_STYLESHEET_ID;
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
    }

    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  function setTheme(newTheme: string) {
    setThemeState(newTheme);
  }

  return (
    <ThemeContext value={{ theme, setTheme, themes }}>{children}</ThemeContext>
  );
}

export { ThemeContext, ThemeProvider };
