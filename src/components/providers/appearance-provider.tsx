"use client";

import { createContext, useEffect, useRef, useState } from "react";
import { SETTINGS_STORAGE_KEY } from "./constants";
import type { IAppearanceContext } from "./interfaces";
import type { TAppearance, TSettings } from "./types";

const AppearanceContext = createContext<IAppearanceContext>({
  appearance: "system",
  setAppearance: () => {},
});

interface IAppearanceProviderProps {
  children: React.ReactNode;
  forcedAppearance?: TAppearance;
}

function AppearanceProvider({
  children,
  forcedAppearance,
}: IAppearanceProviderProps) {
  const [appearance, setAppearanceState] = useState<TAppearance>("system");
  const isInitialized = useRef(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(SETTINGS_STORAGE_KEY);
      const settings = raw ? (JSON.parse(raw) as Partial<TSettings>) : {};
      if (settings.appearance) setAppearanceState(settings.appearance);
    } catch {}
    isInitialized.current = true;
  }, []);

  useEffect(() => {
    const resolved = forcedAppearance ?? appearance;

    function applyDark(isDark: boolean) {
      document.documentElement.classList.toggle("dark", isDark);
    }

    if (resolved === "dark") {
      applyDark(true);
      return;
    }

    if (resolved === "light") {
      applyDark(false);
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    applyDark(mediaQuery.matches);

    function handleSystemChange(event: MediaQueryListEvent) {
      applyDark(event.matches);
    }

    mediaQuery.addEventListener("change", handleSystemChange);
    return () => mediaQuery.removeEventListener("change", handleSystemChange);
  }, [appearance, forcedAppearance]);

  useEffect(() => {
    if (!isInitialized.current) return;

    try {
      const raw = localStorage.getItem(SETTINGS_STORAGE_KEY);
      const settings = raw ? (JSON.parse(raw) as Partial<TSettings>) : {};
      localStorage.setItem(
        SETTINGS_STORAGE_KEY,
        JSON.stringify({ ...settings, appearance }),
      );
    } catch {}
  }, [appearance]);

  function setAppearance(newAppearance: TAppearance) {
    setAppearanceState(newAppearance);
  }

  return (
    <AppearanceContext value={{ appearance, setAppearance }}>
      {children}
    </AppearanceContext>
  );
}

export { AppearanceContext, AppearanceProvider };
