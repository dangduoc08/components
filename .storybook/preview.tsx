import type { Decorator, Preview } from "@storybook/nextjs-vite";
import { useEffect } from "react";
import { Providers } from "../src/components/providers";
import "../src/app/globals.css";

const withTheme: Decorator = (Story, context) => {
  const theme = context.globals.theme ?? "light";

  // Set synchronously during render to avoid a flash on initial story load.
  document.documentElement.classList.remove("light", "dark");
  document.documentElement.classList.add(theme);

  // Also set via useEffect so that the toolbar value wins over next-themes.
  // As the outermost decorator, this effect runs after all child effects
  // (including ThemeProvider's effect that reads localStorage/system preference).
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
    // Disable the built-in backgrounds panel so the CSS body background
    // (driven by CSS custom properties + .dark/.light class) controls the canvas.
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
