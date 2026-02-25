import { ShadcnThemeProvider } from "./shadcn-theme-provider";
import { ThemeProvider } from "./theme-provider";
import { TooltipProvider } from "./tooltip-provider";

interface IProvidersProps {
  children: React.ReactNode;
  forcedTheme?: string;
}

function Providers({ children, forcedTheme }: IProvidersProps) {
  return (
    <ShadcnThemeProvider>
      <ThemeProvider forcedTheme={forcedTheme}>
        <TooltipProvider>{children}</TooltipProvider>
      </ThemeProvider>
    </ShadcnThemeProvider>
  );
}

export { Providers };
