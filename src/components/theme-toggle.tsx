"use client";

import { Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const t = useTranslations("common");

  function toggleTheme() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      <Sun className="size-4 scale-100 dark:scale-0 transition-transform" />
      <Moon className="absolute size-4 scale-0 dark:scale-100 transition-transform" />
      <span className="sr-only">{t("toggleTheme")}</span>
    </Button>
  );
}
