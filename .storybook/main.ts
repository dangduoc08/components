import type { StorybookConfig } from "@storybook/nextjs-vite";
import { getThemes } from "../src/lib/themes";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
  ],
  framework: "@storybook/nextjs-vite",
  staticDirs: ["../public"],
  viteFinal: async (config) => {
    return {
      ...config,
      define: {
        ...(config.define ?? {}),
        __STORYBOOK_THEMES__: JSON.stringify(getThemes()),
      },
      plugins: [...(config.plugins ?? [])],
    };
  },
};
export default config;
