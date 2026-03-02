import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const THEME_STYLESHEET_ID = "theme-stylesheet";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function applyThemeStylesheet(href: string) {
  const themeEl = document.getElementById(THEME_STYLESHEET_ID);

  if (themeEl?.getAttribute("href") !== href) {
    themeEl?.remove();
    const link = document.createElement("link");
    link.id = THEME_STYLESHEET_ID;
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
  }
}
