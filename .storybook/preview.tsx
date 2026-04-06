/// <reference types="vite/client" />
import type { Decorator, Preview } from "@storybook/nextjs-vite";
import { Roboto, Roboto_Mono, Roboto_Serif } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { AppearanceProvider } from "../src/components/providers/appearance-provider";
import { FontProvider } from "../src/components/providers/font-provider";
import type { TTheme } from "../src/components/providers/types";
import { TooltipProvider } from "../src/components/ui/tooltip";
import enMessages from "../src/i18n/messages/en.json";
import { applyThemeStylesheet } from "../src/lib/utils";
import "../src/app/globals.css";

const fontSans = Roboto({ subsets: ["latin"], variable: "--font-sans" });
const fontSerif = Roboto_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
});
const fontMono = Roboto_Mono({ subsets: ["latin"], variable: "--font-mono" });

declare const __STORYBOOK_THEMES__: TTheme[];
const themes = __STORYBOOK_THEMES__;

const preview: Preview = {
  globalTypes: {
    appearance: {
      name: "Appearance",
      defaultValue: "light",
      toolbar: {
        icon: "circlehollow",
        items: [
          { value: "light", icon: "sun", title: "Light" },
          { value: "dark", icon: "moon", title: "Dark" },
        ],
        dynamicTitle: true,
      },
    },
    theme: {
      name: "Theme",
      defaultValue: themes[0]?.value ?? "",
      toolbar: {
        items: themes.map((t) => ({ value: t.value, title: t.label })),
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    ((Story, context) => (
      <NextIntlClientProvider locale="en" messages={enMessages}>
        <FontProvider
          variables={[
            fontSans.variable,
            fontSerif.variable,
            fontMono.variable,
            "antialiased",
          ]}
        >
          <AppearanceProvider
            forcedAppearance={context.globals.appearance ?? "light"}
          >
            <TooltipProvider>
              <Story />
            </TooltipProvider>
          </AppearanceProvider>
        </FontProvider>
      </NextIntlClientProvider>
    )) satisfies Decorator,
    ((Story, context) => {
      if (typeof document !== "undefined") {
        applyThemeStylesheet(`/${context.globals.theme}.css`);
      }

      return <Story />;
    }) satisfies Decorator,
  ],
  parameters: {
    backgrounds: { disable: true },
    options: {
      storySort: {
        method: "alphabetical",
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
