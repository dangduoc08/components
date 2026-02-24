"use client";

import { ArrowLeft, ChevronDown, ExternalLink, Pencil } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

interface IJobDetailHeaderProps {
  isPublished: boolean;
}

export function JobDetailHeader({ isPublished }: IJobDetailHeaderProps) {
  const t = useTranslations("job");

  return (
    <div className="flex items-center justify-between">
      <Button variant="ghost" size="sm" asChild>
        <Link href="/dashboard/job/list">
          <ArrowLeft className="size-4" />
          {t("back")}
        </Link>
      </Button>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon-xs">
          <ExternalLink className="size-4" />
        </Button>
        <Button variant="ghost" size="icon-xs">
          <Pencil className="size-4" />
        </Button>
        <Button variant="outline" size="sm">
          {isPublished ? t("published") : t("draft")}
          <ChevronDown className="size-3.5" />
        </Button>
      </div>
    </div>
  );
}
