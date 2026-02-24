import type { Decorator, Preview } from "@storybook/nextjs-vite";
import { Providers } from "../src/components/providers";
import "../src/app/globals.css";

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
    ((Story, context) => (
      <Providers forcedTheme={context.globals.theme ?? "light"}>
        <Story />
      </Providers>
    )) satisfies Decorator,
  ],
  parameters: {
    backgrounds: { disable: true },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
