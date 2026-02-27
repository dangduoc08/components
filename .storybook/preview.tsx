/// <reference types="vite/client" />
import type { Decorator, Preview } from "@storybook/nextjs-vite";
import { Providers } from "../src/components/providers";
import type { TTheme } from "../src/components/providers/types";

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
      <Providers
        forcedTheme={context.globals.appearance ?? "light"}
        themes={themes}
      >
        <Story />
      </Providers>
    )) satisfies Decorator,
    ((Story, context) => {
      const theme = context.globals.theme;

      if (typeof document !== "undefined") {
        if (!document.getElementById("theme-fonts")) {
          const fontsLink = document.createElement("link");
          fontsLink.id = "theme-fonts";
          fontsLink.rel = "stylesheet";
          fontsLink.href =
            "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;700&family=Geist+Mono:wght@400;500&display=swap";
          document.head.appendChild(fontsLink);
        }

        const existing = document.getElementById("theme-stylesheet");
        const href = `/themes/${theme}.css`;

        if (existing?.getAttribute("href") !== href) {
          existing?.remove();
          const themeLink = document.createElement("link");
          themeLink.id = "theme-stylesheet";
          themeLink.rel = "stylesheet";
          themeLink.href = href;
          document.head.appendChild(themeLink);
        }
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
