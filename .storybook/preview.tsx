import type { Decorator, Preview } from "@storybook/nextjs-vite";
import { useEffect } from "react";
import { Providers } from "../src/components/providers";

const withTheme: Decorator = (Story, context) => {
  const theme = context.globals.theme ?? "light";

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return <Story />;
};

const preview: Preview = {
  globalTypes: {
    theme: {
      name: "Theme",
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
  },
  decorators: [
    withTheme,
    (Story) => (
      <Providers>
        <Story />
      </Providers>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
