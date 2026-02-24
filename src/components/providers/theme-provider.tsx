"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

interface IThemeProviderProps {
  children: React.ReactNode;
}

function ThemeProvider({ children }: IThemeProviderProps) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </NextThemesProvider>
  );
}

export { ThemeProvider };
