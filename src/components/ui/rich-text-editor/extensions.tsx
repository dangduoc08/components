"use client";

import {
  ALL_MARKDOWN_TRANSFORMERS,
  type BaseCommands,
  blockFormatExtension,
  boldExtension,
  codeExtension,
  codeFormatExtension,
  commandPaletteExtension,
  createEditorSystem,
  DraggableBlockExtension,
  type ExtractCommands,
  type ExtractStateQueries,
  floatingToolbarExtension,
  HTMLEmbedExtension,
  historyExtension,
  horizontalRuleExtension,
  htmlExtension,
  imageExtension,
  italicExtension,
  linkExtension,
  listExtension,
  MarkdownExtension,
  strikethroughExtension,
  TableExtension,
  underlineExtension,
} from "@lexkit/editor";
import { Eye, FileCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { shadcnContextMenuExtension } from "./rich-text-editor-context-menu";

const markdownExt = new MarkdownExtension().configure({
  customTransformers: ALL_MARKDOWN_TRANSFORMERS,
});

const tableExt = new TableExtension().configure({
  enableContextMenu: true,
  contextMenuExtension: shadcnContextMenuExtension,
  markdownExtension: markdownExt,
});

export const extensions = [
  boldExtension,
  italicExtension,
  underlineExtension,
  strikethroughExtension,
  linkExtension.configure({
    linkSelectedTextOnPaste: true,
    autoLinkText: true,
    autoLinkUrls: true,
  }),
  horizontalRuleExtension,
  tableExt,
  listExtension,
  historyExtension,
  imageExtension,
  blockFormatExtension,
  htmlExtension,
  markdownExt,
  codeExtension,
  codeFormatExtension,
  new HTMLEmbedExtension().configure({
    toggleRenderer: ({ isPreview, onClick, style }) => (
      <Button variant="outline" size="sm" onClick={onClick} style={style}>
        {isPreview ? (
          <>
            <FileCode className="w-4 h-4 mr-2" />
            Edit HTML
          </>
        ) : (
          <>
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </>
        )}
      </Button>
    ),
    markdownExtension: markdownExt,
  }),
  floatingToolbarExtension,
  commandPaletteExtension,
  shadcnContextMenuExtension,
  new DraggableBlockExtension().configure({
    buttonStackPosition: "right",
  }),
] as const;

export const { Provider, useEditor } = createEditorSystem<typeof extensions>();

export type EditorCommands = BaseCommands & ExtractCommands<typeof extensions>;
export type EditorStateQueries = ExtractStateQueries<typeof extensions>;
export type ExtensionNames = (typeof extensions)[number]["name"];
