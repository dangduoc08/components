"use client";

import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  ChevronDown,
  ImageIcon,
  IndentDecrease,
  IndentIncrease,
  Italic,
  Link,
  List,
  ListOrdered,
  Maximize2,
  Strikethrough,
  Underline,
  Unlink,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function JobCreateDetails() {
  const t = useTranslations("job");
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="rounded-xl border border-border/50 bg-card">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-6"
      >
        <div className="text-left">
          <h2 className="text-base font-semibold">{t("details")}</h2>
          <p className="text-sm text-muted-foreground">
            {t("detailsDescription")}
          </p>
        </div>
        <ChevronDown
          className={`size-5 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="flex flex-col gap-6 px-6 pb-6">
          <div className="flex flex-col gap-2">
            <Label>{t("title")}</Label>
            <Input placeholder={t("titlePlaceholder")} />
          </div>

          <div className="flex flex-col gap-2">
            <Label>{t("content")}</Label>
            <div className="rounded-lg border border-input">
              <div className="flex flex-wrap items-center gap-0.5 border-b border-input p-1.5">
                <Button variant="ghost" size="xs" className="gap-1 px-2">
                  {t("paragraph")}
                  <ChevronDown className="size-3" />
                </Button>

                <div className="mx-1 h-5 w-px bg-border" />

                <Button variant="ghost" size="icon-xs">
                  <Bold className="size-3.5" />
                </Button>
                <Button variant="ghost" size="icon-xs">
                  <Italic className="size-3.5" />
                </Button>
                <Button variant="ghost" size="icon-xs">
                  <Underline className="size-3.5" />
                </Button>
                <Button variant="ghost" size="icon-xs">
                  <Strikethrough className="size-3.5" />
                </Button>

                <div className="mx-1 h-5 w-px bg-border" />

                <Button variant="ghost" size="icon-xs">
                  <ListOrdered className="size-3.5" />
                </Button>
                <Button variant="ghost" size="icon-xs">
                  <List className="size-3.5" />
                </Button>

                <div className="mx-1 h-5 w-px bg-border" />

                <Button variant="ghost" size="icon-xs">
                  <AlignLeft className="size-3.5" />
                </Button>
                <Button variant="ghost" size="icon-xs">
                  <AlignCenter className="size-3.5" />
                </Button>
                <Button variant="ghost" size="icon-xs">
                  <AlignRight className="size-3.5" />
                </Button>
                <Button variant="ghost" size="icon-xs">
                  <AlignJustify className="size-3.5" />
                </Button>

                <div className="mx-1 h-5 w-px bg-border" />

                <Button variant="ghost" size="icon-xs">
                  <Link className="size-3.5" />
                </Button>
                <Button variant="ghost" size="icon-xs">
                  <Unlink className="size-3.5" />
                </Button>
                <Button variant="ghost" size="icon-xs">
                  <ImageIcon className="size-3.5" />
                </Button>
              </div>

              <div className="flex items-center gap-0.5 border-b border-input p-1.5">
                <Button variant="ghost" size="icon-xs">
                  <IndentDecrease className="size-3.5" />
                </Button>
                <Button variant="ghost" size="icon-xs">
                  <IndentIncrease className="size-3.5" />
                </Button>
                <Button variant="ghost" size="icon-xs">
                  <Maximize2 className="size-3.5" />
                </Button>
              </div>

              <div
                contentEditable
                className="min-h-[120px] px-4 py-3 text-sm outline-none placeholder:text-muted-foreground"
                data-placeholder={t("contentPlaceholder")}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
