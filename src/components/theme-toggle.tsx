"use client";

import { Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { useAppearance } from "@/hooks/use-appearance";

export function ThemeToggle() {
  const { appearance, setAppearance } = useAppearance();
  const t = useTranslations("common");

  function toggleTheme() {
    setAppearance(appearance === "dark" ? "light" : "dark");
  }

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      <Sun className="size-4 scale-100 dark:scale-0 transition-transform" />
      <Moon className="absolute size-4 scale-0 dark:scale-100 transition-transform" />
      <span className="sr-only">{t("toggleTheme")}</span>
    </Button>
  );
}
