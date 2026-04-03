"use client";

import {
  Bold,
  Code,
  Command as CommandIcon,
  FileCode,
  FileText,
  Hash,
  Image as ImageIcon,
  Indent,
  Italic,
  Link as LinkIcon,
  List,
  ListOrdered,
  Minus,
  Outdent,
  Quote,
  Redo,
  Strikethrough,
  Table as TableIcon,
  Underline,
  Undo,
  Unlink,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Dialog as ShadcnDialog,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Toggle } from "@/components/ui/toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type {
  EditorCommands,
  EditorStateQueries,
  ExtensionNames,
} from "./extensions";
import type { TableConfig } from "./types";

interface ToolbarProps {
  commands: EditorCommands;
  hasExtension: (name: ExtensionNames) => boolean;
  activeStates: EditorStateQueries;
  onCommandPaletteOpen: () => void;
  openLinkDialog: (options?: { initialUrl?: string }) => void;
  openImageDialog: () => void;
}

export function Toolbar({
  commands,
  hasExtension,
  activeStates,
  onCommandPaletteOpen,
  openLinkDialog,
  openImageDialog,
}: ToolbarProps) {
  const t = useTranslations("richTextEditor");
  const [showTableDialog, setShowTableDialog] = useState(false);
  const [tableConfig, setTableConfig] = useState<TableConfig>({
    rows: 3,
    columns: 3,
    includeHeaders: false,
  });

  const blockFormatOptions = [
    {
      value: "p",
      label: t("paragraph"),
      icon: <FileText className="h-4 w-4" />,
    },
    { value: "h1", label: t("heading1"), icon: <Hash className="h-4 w-4" /> },
    { value: "h2", label: t("heading2"), icon: <Hash className="h-4 w-4" /> },
    { value: "h3", label: t("heading3"), icon: <Hash className="h-4 w-4" /> },
    { value: "quote", label: t("quote"), icon: <Quote className="h-4 w-4" /> },
  ];

  const currentBlockFormat = activeStates.isH1
    ? "h1"
    : activeStates.isH2
      ? "h2"
      : activeStates.isH3
        ? "h3"
        : activeStates.isQuote
          ? "quote"
          : "p";

  const handleBlockFormatChange = (value: string) => {
    if (value === "p") commands.toggleParagraph();
    else if (value.startsWith("h"))
      commands.toggleHeading(value as "h1" | "h2" | "h3");
    else if (value === "quote") commands.toggleQuote();
  };

  return (
    <TooltipProvider>
      <div className="flex flex-wrap items-center gap-2 p-2 bg-transparent">
        <div className="flex items-center gap-1">
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
            <TooltipContent>{t("boldWithShortcut")}</TooltipContent>
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
            <TooltipContent>{t("italicWithShortcut")}</TooltipContent>
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
            <TooltipContent>{t("underlineWithShortcut")}</TooltipContent>
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
                disabled={!activeStates.isTextSelected && !activeStates.isLink}
                onPressedChange={() => {
                  if (activeStates.isLink) commands.removeLink();
                  else openLinkDialog({});
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
              {activeStates.isLink ? t("removeLink") : t("link")}
            </TooltipContent>
          </Tooltip>
        </div>

        <Separator orientation="vertical" className="h-6" />

        {hasExtension("blockFormat") && (
          <div className="flex items-center gap-1">
            <Select
              value={currentBlockFormat}
              onValueChange={handleBlockFormatChange}
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <SelectTrigger className="w-32 h-8">
                    <SelectValue />
                  </SelectTrigger>
                </TooltipTrigger>
                <TooltipContent>{t("textFormat")}</TooltipContent>
              </Tooltip>
              <SelectContent>
                {blockFormatOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    <div className="flex items-center gap-2">
                      {option.icon}
                      {option.label}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        <Separator orientation="vertical" className="h-6" />

        {hasExtension("list") && (
          <div className="flex items-center gap-1">
            <Tooltip>
              <TooltipTrigger asChild>
                <Toggle
                  size="sm"
                  variant="default"
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
                  variant="default"
                  pressed={activeStates.orderedList}
                  onPressedChange={() => commands.toggleOrderedList()}
                >
                  <ListOrdered className="h-4 w-4" />
                </Toggle>
              </TooltipTrigger>
              <TooltipContent>{t("numberedList")}</TooltipContent>
            </Tooltip>
            {(activeStates.unorderedList || activeStates.orderedList) && (
              <>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => commands.indentList()}
                    >
                      <Indent className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>{t("indentList")}</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => commands.outdentList()}
                    >
                      <Outdent className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>{t("outdentList")}</TooltipContent>
                </Tooltip>
              </>
            )}
          </div>
        )}

        <Separator orientation="vertical" className="h-6" />

        <div className="flex items-center gap-1">
          {hasExtension("image") && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button size="sm" variant="ghost" onClick={openImageDialog}>
                  <ImageIcon className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>{t("insertImage")}</TooltipContent>
            </Tooltip>
          )}
          {hasExtension("table") && (
            <>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setShowTableDialog(true)}
                  >
                    <TableIcon className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>{t("insertTable")}</TooltipContent>
              </Tooltip>
              <ShadcnDialog
                open={showTableDialog}
                onOpenChange={setShowTableDialog}
              >
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>{t("insertTableTitle")}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="rows">{t("rows")}</Label>
                        <Input
                          id="rows"
                          type="number"
                          min="1"
                          max="20"
                          value={tableConfig.rows}
                          onChange={(e) =>
                            setTableConfig((prev) => ({
                              ...prev,
                              rows: parseInt(e.target.value, 10) || 1,
                            }))
                          }
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              e.preventDefault();
                              commands.insertTable(tableConfig);
                              setShowTableDialog(false);
                            }
                          }}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="columns">{t("columns")}</Label>
                        <Input
                          id="columns"
                          type="number"
                          min="1"
                          max="20"
                          value={tableConfig.columns}
                          onChange={(e) =>
                            setTableConfig((prev) => ({
                              ...prev,
                              columns: parseInt(e.target.value, 10) || 1,
                            }))
                          }
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              e.preventDefault();
                              commands.insertTable(tableConfig);
                              setShowTableDialog(false);
                            }
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="headers"
                        checked={tableConfig.includeHeaders || false}
                        onCheckedChange={(checked) =>
                          setTableConfig((prev) => ({
                            ...prev,
                            includeHeaders: checked,
                          }))
                        }
                      />
                      <Label htmlFor="headers">{t("includeHeaders")}</Label>
                    </div>
                  </div>
                  <DialogFooter>
                    <div className="flex justify-end space-x-2">
                      <Button
                        variant="outline"
                        onClick={() => setShowTableDialog(false)}
                      >
                        {t("cancel")}
                      </Button>
                      <Button
                        onClick={() => {
                          commands.insertTable(tableConfig);
                          setShowTableDialog(false);
                        }}
                      >
                        {t("insertTableButton")}
                      </Button>
                    </div>
                  </DialogFooter>
                </DialogContent>
              </ShadcnDialog>
            </>
          )}
          {hasExtension("horizontalRule") && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => commands.insertHorizontalRule()}
                >
                  <Minus className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>{t("insertHorizontalRule")}</TooltipContent>
            </Tooltip>
          )}
          {hasExtension("htmlEmbed") && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Toggle
                  size="sm"
                  variant="default"
                  pressed={activeStates.isHTMLEmbedSelected}
                  onPressedChange={() => commands.insertHTMLEmbed()}
                >
                  <FileCode className="h-4 w-4" />
                </Toggle>
              </TooltipTrigger>
              <TooltipContent>{t("htmlEmbed")}</TooltipContent>
            </Tooltip>
          )}
        </div>

        <Separator orientation="vertical" className="h-6" />

        {hasExtension("history") && (
          <div className="flex items-center gap-1">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="sm"
                  variant="ghost"
                  disabled={!activeStates.canUndo}
                  onClick={() => commands.undo()}
                >
                  <Undo className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>{t("undo")}</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="sm"
                  variant="ghost"
                  disabled={!activeStates.canRedo}
                  onClick={() => commands.redo()}
                >
                  <Redo className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>{t("redo")}</TooltipContent>
            </Tooltip>
          </div>
        )}

        <Separator orientation="vertical" className="h-6" />

        <div className="flex items-center gap-1">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="sm" variant="ghost" onClick={onCommandPaletteOpen}>
                <CommandIcon className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>{t("commandPalette")}</TooltipContent>
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  );
}
