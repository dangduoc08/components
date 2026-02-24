"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

interface IThemeProviderProps {
  children: React.ReactNode;
  forcedTheme?: string;
}

function ThemeProvider({ children, forcedTheme }: IThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      forcedTheme={forcedTheme}
    >
      {children}
    </NextThemesProvider>
  );
}

export { ThemeProvider };
