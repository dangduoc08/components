"use client";

import { Palette } from "lucide-react";
import { SHADCN_THEMES } from "@/components/providers/constants";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useShadcnTheme } from "@/hooks/use-shadcn-theme";

export function ThemeSwitcher() {
  const { theme, setTheme } = useShadcnTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="size-8 text-muted-foreground hover:text-foreground"
        >
          <Palette className="size-4" />
          <span className="sr-only">Switch color theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44">
        <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
          {SHADCN_THEMES.map((t) => (
            <DropdownMenuRadioItem key={t.value} value={t.value}>
              <span
                className="size-3 rounded-full border border-black/10"
                style={{ backgroundColor: t.color }}
              />
              {t.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
