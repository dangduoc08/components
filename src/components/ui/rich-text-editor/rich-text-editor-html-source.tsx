"use client";

import { useTranslations } from "next-intl";
import type React from "react";
import { Textarea } from "@/components/ui/textarea";
import { shadcnTheme } from "./rich-text-editor-theme";

interface HTMLSourceViewProps {
  htmlContent: string;
  onHtmlChange: (html: string) => void;
}

export function HTMLSourceView({
  htmlContent,
  onHtmlChange,
}: HTMLSourceViewProps) {
  const t = useTranslations("richTextEditor");
  return (
    <Textarea
      className={shadcnTheme.sourceView?.textarea}
      value={htmlContent}
      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
        onHtmlChange(e.target.value)
      }
      placeholder={t("htmlPlaceholder")}
      spellCheck={false}
    />
  );
}
