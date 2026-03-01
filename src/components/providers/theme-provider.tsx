"use client";

import { createContext, useEffect, useRef, useState } from "react";
import { SETTINGS_STORAGE_KEY, THEME_STYLESHEET_ID } from "./constants";
import type { IThemeContext } from "./interfaces";
import type { TSettings, TTheme } from "./types";

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
  const isInitialized = useRef(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(SETTINGS_STORAGE_KEY);
      const settings = raw ? (JSON.parse(raw) as Partial<TSettings>) : {};
      if (settings.theme) setThemeState(settings.theme);
    } catch {}
    isInitialized.current = true;
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

    if (!isInitialized.current) return;

    try {
      const raw = localStorage.getItem(SETTINGS_STORAGE_KEY);
      const settings = raw ? (JSON.parse(raw) as Partial<TSettings>) : {};
      localStorage.setItem(
        SETTINGS_STORAGE_KEY,
        JSON.stringify({ ...settings, theme }),
      );
    } catch {}
  }, [theme]);

  function setTheme(newTheme: string) {
    setThemeState(newTheme);
  }

  return (
    <ThemeContext value={{ theme, setTheme, themes }}>{children}</ThemeContext>
  );
}

export { ThemeContext, ThemeProvider };
