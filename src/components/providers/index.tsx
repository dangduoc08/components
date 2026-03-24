import type { NextIntlClientProvider } from "next-intl";
import type { ComponentProps } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppearanceProvider } from "./appearance-provider";
import { LocaleProvider } from "./locale-provider";
import { ThemeProvider } from "./theme-provider";
import { TimezoneProvider } from "./timezone-provider";
import type { TAppearance, TTheme } from "./types";

type TNextIntlProps = ComponentProps<typeof NextIntlClientProvider>;

interface IProvidersProps {
  children: React.ReactNode;
  locale: string;
  messages: TNextIntlProps["messages"];
  timeZone: string;
  themes: TTheme[];
  forcedAppearance?: TAppearance;
}

function Providers({
  children,
  locale,
  messages,
  timeZone,
  themes,
  forcedAppearance,
}: IProvidersProps) {
  return (
    <TimezoneProvider>
      <LocaleProvider locale={locale} messages={messages} timeZone={timeZone}>
        <ThemeProvider themes={themes}>
          <AppearanceProvider forcedAppearance={forcedAppearance}>
            <TooltipProvider>{children}</TooltipProvider>
          </AppearanceProvider>
        </ThemeProvider>
      </LocaleProvider>
    </TimezoneProvider>
  );
}

export { Providers };
