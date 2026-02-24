"use client";

import { TooltipProvider as ShadcnTooltipProvider } from "@/components/ui/tooltip";

interface ITooltipProviderProps {
  children: React.ReactNode;
}

function TooltipProvider({ children }: ITooltipProviderProps) {
  return <ShadcnTooltipProvider>{children}</ShadcnTooltipProvider>;
}

export { TooltipProvider };
