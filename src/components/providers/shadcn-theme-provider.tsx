"use client";

import { createContext, useEffect, useState } from "react";
import {
  DEFAULT_SHADCN_THEME,
  SHADCN_THEME_STORAGE_KEY,
  THEME_STYLESHEET_ID,
} from "./constants";
import type { IShadcnThemeContext } from "./interfaces";

const ShadcnThemeContext = createContext<IShadcnThemeContext>({
  theme: DEFAULT_SHADCN_THEME,
  setTheme: () => {},
});

interface IShadcnThemeProviderProps {
  children: React.ReactNode;
}

function ShadcnThemeProvider({ children }: IShadcnThemeProviderProps) {
  const [theme, setThemeState] = useState(DEFAULT_SHADCN_THEME);

  useEffect(() => {
    const stored = localStorage.getItem(SHADCN_THEME_STORAGE_KEY);
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

    localStorage.setItem(SHADCN_THEME_STORAGE_KEY, theme);
  }, [theme]);

  function setTheme(newTheme: string) {
    setThemeState(newTheme);
  }

  return (
    <ShadcnThemeContext value={{ theme, setTheme }}>
      {children}
    </ShadcnThemeContext>
  );
}

export { ShadcnThemeContext, ShadcnThemeProvider };
