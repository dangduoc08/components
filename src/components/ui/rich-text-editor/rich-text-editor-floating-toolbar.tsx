"use client";

import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Code,
  Italic,
  Link as LinkIcon,
  List,
  ListOrdered,
  Strikethrough,
  Type,
  Underline,
  Unlink,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Toggle } from "@/components/ui/toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useEditor } from "./extensions";
import type { FloatingToolbarExtension, SelectionRect } from "./types";

interface FloatingToolbarRendererProps {
  openLinkDialog: (options?: { initialUrl?: string }) => void;
}

export function FloatingToolbarRenderer({
  openLinkDialog,
}: FloatingToolbarRendererProps) {
  const t = useTranslations("richTextEditor");
  const { commands, activeStates, extensions, hasExtension } = useEditor();
  const [isVisible, setIsVisible] = useState(false);
  const [selectionRect, setSelectionRect] = useState<SelectionRect | null>(
    null,
  );

  const floatingExtension = extensions.find(
    (ext) => ext.name === "floatingToolbar",
  ) as FloatingToolbarExtension | undefined;

  useEffect(() => {
    if (!floatingExtension) return;
    const checkState = () => {
      setIsVisible(floatingExtension.getIsVisible());
      setSelectionRect(floatingExtension.getSelectionRect());
    };
    const interval = setInterval(checkState, 200);
    return () => clearInterval(interval);
  }, [floatingExtension]);

  if (!isVisible || !selectionRect) return null;

  const isImageSelected = activeStates.imageSelected;

  return createPortal(
    <TooltipProvider>
      <div
        className="flex items-center gap-1 p-2 bg-background border border-border rounded-lg shadow-lg"
        style={{
          position: "absolute",
          top: selectionRect.y,
          ...(selectionRect.positionFromRight
            ? { right: 10, left: "auto" }
            : { left: selectionRect.x, right: "auto" }),
          zIndex: 50,
          pointerEvents: "auto",
        }}
      >
        {isImageSelected ? (
          <>
            <Tooltip>
              <TooltipTrigger asChild>
                <Toggle
                  size="sm"
                  variant="default"
                  pressed={activeStates.isImageAlignedLeft}
                  onPressedChange={() => commands.setImageAlignment("left")}
                >
                  <AlignLeft className="h-4 w-4" />
                </Toggle>
              </TooltipTrigger>
              <TooltipContent>{t("alignLeft")}</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Toggle
                  size="sm"
                  variant="default"
                  pressed={activeStates.isImageAlignedCenter}
                  onPressedChange={() => commands.setImageAlignment("center")}
                >
                  <AlignCenter className="h-4 w-4" />
                </Toggle>
              </TooltipTrigger>
              <TooltipContent>{t("alignCenter")}</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Toggle
                  size="sm"
                  variant="default"
                  pressed={activeStates.isImageAlignedRight}
                  onPressedChange={() => commands.setImageAlignment("right")}
                >
                  <AlignRight className="h-4 w-4" />
                </Toggle>
              </TooltipTrigger>
              <TooltipContent>{t("alignRight")}</TooltipContent>
            </Tooltip>
            <Separator orientation="vertical" className="h-6" />
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => {
                    const caption = prompt("Enter caption:") || "";
                    commands.setImageCaption(caption);
                  }}
                >
                  <Type className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>{t("editCaption")}</TooltipContent>
            </Tooltip>
          </>
        ) : (
          <>
            <Tooltip>
              <TooltipTrigger asChild>
                <Toggle
                  size="sm"
                  variant="default"
                  pressed={activeStates.bold}
                  onPressedChange={() => commands.toggleBold()}
                >
                  <Bold className="h-4 w-4" />
                </Toggle>
              </TooltipTrigger>
              <TooltipContent>{t("bold")}</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Toggle
                  size="sm"
                  variant="default"
                  pressed={activeStates.italic}
                  onPressedChange={() => commands.toggleItalic()}
                >
                  <Italic className="h-4 w-4" />
                </Toggle>
              </TooltipTrigger>
              <TooltipContent>{t("italic")}</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Toggle
                  size="sm"
                  variant="default"
                  pressed={activeStates.underline}
                  onPressedChange={() => commands.toggleUnderline()}
                >
                  <Underline className="h-4 w-4" />
                </Toggle>
              </TooltipTrigger>
              <TooltipContent>{t("underline")}</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Toggle
                  size="sm"
                  variant="default"
                  pressed={activeStates.strikethrough}
                  onPressedChange={() => commands.toggleStrikethrough()}
                >
                  <Strikethrough className="h-4 w-4" />
                </Toggle>
              </TooltipTrigger>
              <TooltipContent>{t("strikethrough")}</TooltipContent>
            </Tooltip>
            <Separator orientation="vertical" className="h-6" />
            <Tooltip>
              <TooltipTrigger asChild>
                <Toggle
                  size="sm"
                  variant="default"
                  pressed={activeStates.code}
                  onPressedChange={() => commands.formatText("code")}
                >
                  <Code className="h-4 w-4" />
                </Toggle>
              </TooltipTrigger>
              <TooltipContent>{t("inlineCode")}</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Toggle
                  size="sm"
                  variant="default"
                  pressed={activeStates.isLink}
                  disabled={
                    !activeStates.isTextSelected && !activeStates.isLink
                  }
                  onPressedChange={() => {
                    if (activeStates.isLink) commands.removeLink();
                    else if (activeStates.isTextSelected) openLinkDialog({});
                  }}
                >
                  {activeStates.isLink ? (
                    <Unlink className="h-4 w-4" />
                  ) : (
                    <LinkIcon className="h-4 w-4" />
                  )}
                </Toggle>
              </TooltipTrigger>
              <TooltipContent>
                {activeStates.isLink ? t("removeLink") : t("addLink")}
              </TooltipContent>
            </Tooltip>
            <Separator orientation="vertical" className="h-6" />
            {hasExtension("list") && (
              <>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Toggle
                      size="sm"
                      pressed={activeStates.unorderedList}
                      onPressedChange={() => commands.toggleUnorderedList()}
                    >
                      <List className="h-4 w-4" />
                    </Toggle>
                  </TooltipTrigger>
                  <TooltipContent>{t("bulletList")}</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Toggle
                      size="sm"
                      pressed={activeStates.orderedList}
                      onPressedChange={() => commands.toggleOrderedList()}
                    >
                      <ListOrdered className="h-4 w-4" />
                    </Toggle>
                  </TooltipTrigger>
                  <TooltipContent>{t("numberedList")}</TooltipContent>
                </Tooltip>
              </>
            )}
          </>
        )}
      </div>
    </TooltipProvider>,
    document.body,
  );
}
