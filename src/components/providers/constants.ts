import type { TShadcnTheme } from "./types";

const DEFAULT_SHADCN_THEME = "amber-minimal";
const SHADCN_THEME_STORAGE_KEY = "shadcn-theme";
const THEME_STYLESHEET_ID = "shadcn-theme-stylesheet";

const SHADCN_THEMES: TShadcnTheme[] = [
  {
    value: "amber-minimal",
    label: "Amber Minimal",
    color: "oklch(0.7686 0.1647 70.0804)",
  },
  {
    value: "amethyst-haze",
    label: "Amethyst Haze",
    color: "oklch(0.6104 0.0767 299.7335)",
  },
  { value: "art-deco", label: "Art Deco", color: "oklch(0.77 0.14 91.05)" },
  { value: "blue", label: "Blue", color: "oklch(0.623 0.214 259.815)" },
];

export {
  DEFAULT_SHADCN_THEME,
  SHADCN_THEME_STORAGE_KEY,
  SHADCN_THEMES,
  THEME_STYLESHEET_ID,
};
