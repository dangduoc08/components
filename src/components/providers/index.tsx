import { AppearanceProvider } from "./appearance-provider";
import { ThemeProvider } from "./theme-provider";
import { TooltipProvider } from "./tooltip-provider";
import type { TTheme } from "./types";

interface IProvidersProps {
  children: React.ReactNode;
  forcedTheme?: string;
  themes?: TTheme[];
}

function Providers({ children, forcedTheme, themes = [] }: IProvidersProps) {
  return (
    <ThemeProvider themes={themes}>
      <AppearanceProvider forcedTheme={forcedTheme}>
        <TooltipProvider>{children}</TooltipProvider>
      </AppearanceProvider>
    </ThemeProvider>
  );
}

export { Providers };
