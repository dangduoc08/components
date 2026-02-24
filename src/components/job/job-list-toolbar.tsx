"use client";

import { ChevronDown, Filter, Search } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function JobListToolbar() {
  const t = useTranslations("job");

  return (
    <div className="flex items-center justify-between gap-4">
      <div className="relative max-w-sm flex-1">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder={t("search")} className="pl-9" />
      </div>

      <div className="flex items-center gap-2">
        <Button variant="outline" size="default">
          <Filter className="size-4" />
          {t("filters")}
        </Button>
        <Button variant="outline" size="default">
          {t("sortByLatest")}
          <ChevronDown className="size-4" />
        </Button>
      </div>
    </div>
  );
}
