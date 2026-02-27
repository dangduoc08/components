"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

interface IAppearanceProviderProps {
  children: React.ReactNode;
  forcedTheme?: string;
}

function AppearanceProvider({
  children,
  forcedTheme,
}: IAppearanceProviderProps) {
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

export { AppearanceProvider };
