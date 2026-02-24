import { ThemeProvider } from "./theme-provider";
import { TooltipProvider } from "./tooltip-provider";

interface IProvidersProps {
  children: React.ReactNode;
}

function Providers({ children }: IProvidersProps) {
  return (
    <ThemeProvider>
      <TooltipProvider>{children}</TooltipProvider>
    </ThemeProvider>
  );
}

export { Providers };
