import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import type { StorybookConfig } from "@storybook/nextjs-vite";
import { extractThemeVariables } from "../src/lib/extract-theme-variables";
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
      plugins: [
        ...(config.plugins ?? []),
        {
          name: "theme-vars-server",
          configureServer(server) {
            server.middlewares.use("/themes", (req, res, next) => {
              const themeName = (req.url ?? "")
                .replace(/^\//, "")
                .replace(/\.css$/, "");
              const filePath = join(
                process.cwd(),
                "src/themes",
                `${themeName}.css`,
              );

              if (!existsSync(filePath)) {
                next();
                return;
              }

              const css = extractThemeVariables(
                readFileSync(filePath, "utf-8"),
              );
              res.setHeader("Content-Type", "text/css");
              res.end(css);
            });
          },
        },
      ],
    };
  },
};
export default config;
