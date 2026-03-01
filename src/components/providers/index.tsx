import type { NextIntlClientProvider } from "next-intl";
import type { ComponentProps } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppearanceProvider } from "./appearance-provider";
import { LocaleProvider } from "./locale-provider";
import { ThemeProvider } from "./theme-provider";
import type { TAppearance, TTheme } from "./types";

type TNextIntlProps = ComponentProps<typeof NextIntlClientProvider>;

interface IProvidersProps {
  children: React.ReactNode;
  locale: string;
  messages: TNextIntlProps["messages"];
  themes: TTheme[];
  forcedAppearance?: TAppearance;
}

function Providers({
  children,
  locale,
  messages,
  themes,
  forcedAppearance,
}: IProvidersProps) {
  return (
    <LocaleProvider locale={locale} messages={messages}>
      <ThemeProvider themes={themes}>
        <AppearanceProvider forcedAppearance={forcedAppearance}>
          <TooltipProvider>{children}</TooltipProvider>
        </AppearanceProvider>
      </ThemeProvider>
    </LocaleProvider>
  );
}

export { Providers };
