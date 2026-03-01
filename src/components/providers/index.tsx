import { getThemes } from "@/lib/themes";
import { AppearanceProvider } from "./appearance-provider";
import { ThemeProvider } from "./theme-provider";
import { TooltipProvider } from "./tooltip-provider";

interface IProvidersProps {
  children: React.ReactNode;
  forcedTheme?: string;
}

function Providers({ children, forcedTheme }: IProvidersProps) {
  const themes = getThemes();

  return (
    <ThemeProvider themes={themes}>
      <AppearanceProvider forcedTheme={forcedTheme}>
        <TooltipProvider>{children}</TooltipProvider>
      </AppearanceProvider>
    </ThemeProvider>
  );
}

export { Providers };
