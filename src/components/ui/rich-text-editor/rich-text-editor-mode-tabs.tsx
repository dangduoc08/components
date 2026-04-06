"use client";

import { Eye, FileCode, FileText } from "lucide-react";
import { useTranslations } from "next-intl";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { EditorMode } from "./types";

interface ModeTabsProps {
  mode: EditorMode;
  onModeChange: (mode: EditorMode) => void;
}

export function ModeTabs({ mode, onModeChange }: ModeTabsProps) {
  const t = useTranslations("richTextEditor");
  return (
    <Tabs
      value={mode}
      onValueChange={(value: string) => onModeChange(value as EditorMode)}
    >
      <TabsList className="grid w-full sm:max-w-md grid-cols-3 bg-muted/50">
        <TabsTrigger
          value="visual"
          className="flex items-center gap-1.5 text-xs sm:text-sm"
        >
          <Eye className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
          <span className="hidden sm:inline">{t("visualTab")}</span>
        </TabsTrigger>
        <TabsTrigger
          value="html"
          className="flex items-center gap-1.5 text-xs sm:text-sm"
        >
          <FileCode className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
          <span className="hidden sm:inline">{t("htmlTab")}</span>
        </TabsTrigger>
        <TabsTrigger
          value="markdown"
          className="flex items-center gap-1.5 text-xs sm:text-sm"
        >
          <FileText className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
          <span className="hidden sm:inline">{t("markdownTab")}</span>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
