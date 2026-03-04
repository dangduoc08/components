"use client";

import { Search } from "lucide-react";
import { useTranslations } from "next-intl";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { Label } from "@/components/ui/label";
import { SidebarInput } from "@/components/ui/sidebar";
import { useModifierKey } from "@/hooks/use-modifier-key";

export function HeaderSearch() {
  const t = useTranslations("header");
  const modifierKey = useModifierKey();

  return (
    <form className="w-full sm:ml-auto sm:w-auto">
      <div className="relative">
        <Label htmlFor="search" className="sr-only">
          {t("search")}
        </Label>
        <SidebarInput
          id="search"
          placeholder={t("searchPlaceholder")}
          className="h-8 pl-7 pr-16"
        />
        <Search className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none" />
        <KbdGroup className="pointer-events-none absolute top-1/2 right-2 -translate-y-1/2">
          <Kbd>{modifierKey}</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      </div>
    </form>
  );
}
