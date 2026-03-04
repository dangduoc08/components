import { Search } from "lucide-react";
import { useTranslations } from "next-intl";

import { Label } from "@/components/ui/label";
import { SidebarInput } from "@/components/ui/sidebar";

export function HeaderSearch() {
  const t = useTranslations("header");

  return (
    <form className="w-full sm:ml-auto sm:w-auto">
      <div className="relative">
        <Label htmlFor="search" className="sr-only">
          {t("search")}
        </Label>
        <SidebarInput
          id="search"
          placeholder={t("searchPlaceholder")}
          className="h-8 pl-7"
        />
        <Search className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none" />
      </div>
    </form>
  );
}
