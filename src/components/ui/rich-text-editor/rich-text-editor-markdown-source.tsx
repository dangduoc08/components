"use client";

import { useTranslations } from "next-intl";
import type React from "react";
import { Textarea } from "@/components/ui/textarea";
import { shadcnTheme } from "./rich-text-editor-theme";

interface MarkdownSourceViewProps {
  markdownContent: string;
  onMarkdownChange: (markdown: string) => void;
}

export function MarkdownSourceView({
  markdownContent,
  onMarkdownChange,
}: MarkdownSourceViewProps) {
  const t = useTranslations("richTextEditor");
  return (
    <Textarea
      className={
        shadcnTheme.sourceView?.textarea ||
        "w-full h-full min-h-[600px] p-4 bg-background border-none rounded-none font-mono text-sm resize-none focus:outline-none focus:ring-0"
      }
      value={markdownContent}
      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
        onMarkdownChange(e.target.value)
      }
      placeholder={t("markdownPlaceholder")}
      spellCheck={false}
    />
  );
}
