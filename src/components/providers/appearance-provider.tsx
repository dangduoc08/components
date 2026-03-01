"use client";

import { ThemeProvider } from "next-themes";

interface IAppearanceProviderProps {
  children: React.ReactNode;
  forcedTheme?: string;
}

function AppearanceProvider({
  children,
  forcedTheme,
}: IAppearanceProviderProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      forcedTheme={forcedTheme}
      storageKey="appearance"
    >
      {children}
    </ThemeProvider>
  );
}

export { AppearanceProvider };
