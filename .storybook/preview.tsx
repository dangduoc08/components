/// <reference types="vite/client" />
import type { Decorator, Preview } from "@storybook/nextjs-vite";
import { Providers } from "../src/components/providers";

const themeFiles = import.meta.glob("../src/themes/*.css");

const themeItems = Object.keys(themeFiles)
  .map((filePath) => {
    const slug = (filePath.split("/").pop() ?? "").replace(".css", "");
    const title = slug
      .split("-")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
    return { value: slug, title };
  })
  .sort((a, b) => a.value.localeCompare(b.value));

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
      defaultValue: themeItems[0]?.value ?? "",
      toolbar: {
        items: themeItems,
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
