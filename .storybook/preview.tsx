import type { Decorator, Preview } from "@storybook/nextjs-vite";
import { Providers } from "../src/components/providers";

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
      defaultValue: "amber-minimal",
      toolbar: {
        items: [
          { value: "amber-minimal", title: "Amber Minimal" },
          { value: "amethyst-haze", title: "Amethyst Haze" },
          { value: "art-deco", title: "Art Deco" },
          { value: "blue", title: "Blue" },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    ((Story, context) => (
      <Providers forcedTheme={context.globals.appearance ?? "light"}>
        <Story />
      </Providers>
    )) satisfies Decorator,
    ((Story, context) => {
      const theme = context.globals.theme;

      if (typeof document !== "undefined") {
        document.getElementById("shadcn-theme")?.remove();

        if (!document.getElementById("shadcn-theme-fonts")) {
          const fontsLink = document.createElement("link");
          fontsLink.id = "shadcn-theme-fonts";
          fontsLink.rel = "stylesheet";
          fontsLink.href =
            "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;700&family=Geist+Mono:wght@400;500&display=swap";
          document.head.appendChild(fontsLink);
        }

        const themeLink = document.createElement("link");
        themeLink.id = "shadcn-theme";
        themeLink.rel = "stylesheet";
        themeLink.href = `/src/themes/${theme}.css`;
        document.head.appendChild(themeLink);
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
