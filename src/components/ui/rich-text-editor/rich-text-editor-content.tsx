"use client";

import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { useEffect, useRef, useState } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command";
import { useEditor } from "./extensions";
import type { ShadcnTemplateRef } from "./interfaces";
import {
  commandsToCommandPaletteItems,
  registerKeyboardShortcuts,
} from "./rich-text-editor-commands";
import { ErrorBoundary } from "./rich-text-editor-error-boundary";
import { FloatingToolbarRenderer } from "./rich-text-editor-floating-toolbar";
import { HTMLSourceView } from "./rich-text-editor-html-source";
import { ImageDialog } from "./rich-text-editor-image-dialog";
import { LinkDialog } from "./rich-text-editor-link-dialog";
import { MarkdownSourceView } from "./rich-text-editor-markdown-source";
import { ModeTabs } from "./rich-text-editor-mode-tabs";
import { shadcnTheme } from "./rich-text-editor-theme";
import { Toolbar } from "./rich-text-editor-toolbar";
import type { EditorMode } from "./types";
import { useImageHandlers } from "./use-image-handlers";

interface EditorContentProps {
  className?: string;
  onReady?: (methods: ShadcnTemplateRef) => void;
}

export function EditorContent({ onReady }: EditorContentProps) {
  const { commands, hasExtension, activeStates, lexical: editor } = useEditor();
  const [mode, setMode] = useState<EditorMode>("visual");
  const [content, setContent] = useState({ html: "", markdown: "" });
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [linkDialogOpen, setLinkDialogOpen] = useState(false);
  const [imageDialogOpen, setImageDialogOpen] = useState(false);
  const [linkInitial, setLinkInitial] = useState({ url: "" });
  const commandsRef = useRef<typeof commands>(commands);
  const onReadyRef = useRef(onReady);
  const readyCalledRef = useRef(false);
  const methodsRef = useRef<ShadcnTemplateRef | null>(null);

  useEffect(() => {
    onReadyRef.current = onReady;
  }, [onReady]);

  useEffect(() => {
    commandsRef.current = commands;
  }, [commands]);

  methodsRef.current = {
    injectMarkdown: (markdownContent: string) => {
      if (editor)
        editor.update(() => {
          commandsRef.current.importFromMarkdown(markdownContent, {
            immediate: true,
          });
        });
    },
    injectHTML: (htmlContent: string) => {
      if (editor)
        editor.update(() => {
          commandsRef.current.importFromHTML(htmlContent);
        });
    },
    getMarkdown: () => commandsRef.current.exportToMarkdown(),
    getHTML: () => commandsRef.current.exportToHTML(),
  };

  const { handlers: imageHandlers } = useImageHandlers(commands, editor);

  const openLinkDialog = (options: { initialUrl?: string } = {}) => {
    setLinkInitial({ url: options.initialUrl || "" });
    setLinkDialogOpen(true);
  };

  const handleLinkSubmit = ({ url }: { url: string }) => {
    commands.insertLink(url);
  };

  const handleImageSubmit = ({
    activeTab,
    url,
    alt,
    caption,
    file,
  }: {
    activeTab: "upload" | "url";
    url: string;
    alt: string;
    caption: string;
    file: File | null;
  }) => {
    if (activeTab === "upload" && file)
      imageHandlers.insertImageFromFile(file, alt, caption);
    else if (activeTab === "url" && url.trim())
      imageHandlers.insertImageFromUrl(url.trim(), alt, caption);
  };

  useEffect(() => {
    if (!editor || !commands || readyCalledRef.current) return;
    const paletteCommands = commandsToCommandPaletteItems(commands);
    for (const cmd of paletteCommands) commands.registerCommand(cmd);
    const originalShowCommand = commands.showCommandPalette;
    (
      commands as typeof commands & { showCommandPalette: () => void }
    ).showCommandPalette = () => setCommandPaletteOpen(true);
    const unregisterShortcuts = registerKeyboardShortcuts(
      commands,
      document.body,
    );
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setCommandPaletteOpen(true);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    readyCalledRef.current = true;
    if (methodsRef.current) onReadyRef.current?.(methodsRef.current);
    return () => {
      unregisterShortcuts();
      document.removeEventListener("keydown", handleKeyDown);
      (
        commands as typeof commands & { showCommandPalette: () => void }
      ).showCommandPalette = originalShowCommand;
    };
  }, [editor, commands]);

  const handleModeChange = (newMode: EditorMode) => {
    if (
      mode === "markdown" &&
      newMode !== "markdown" &&
      hasExtension("markdown")
    )
      commands.importFromMarkdown(content.markdown, { immediate: true });
    if (mode === "html" && newMode !== "html" && hasExtension("html"))
      commands.importFromHTML(content.html);
    if (
      newMode === "markdown" &&
      mode !== "markdown" &&
      hasExtension("markdown")
    )
      setContent((prev) => ({
        ...prev,
        markdown: commands.exportToMarkdown(),
      }));
    if (newMode === "html" && mode !== "html" && hasExtension("html"))
      setContent((prev) => ({ ...prev, html: commands.exportToHTML() }));
    setMode(newMode);
    if (newMode === "visual") setTimeout(() => editor?.focus(), 100);
  };

  const handleHtmlChange = (html: string) =>
    setContent((prev) => ({ ...prev, html }));

  const handleMarkdownChange = (markdown: string) =>
    setContent((prev) => ({ ...prev, markdown }));

  return (
    <div className="flex flex-col min-h-[500px]">
      <div className="px-4 py-3 border-b border-border">
        <ModeTabs mode={mode} onModeChange={handleModeChange} />
      </div>
      {mode === "visual" && (
        <div className="z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
          <div className="px-4 py-3">
            <Toolbar
              commands={commands}
              hasExtension={hasExtension}
              activeStates={activeStates}
              onCommandPaletteOpen={() => setCommandPaletteOpen(true)}
              openLinkDialog={openLinkDialog}
              openImageDialog={() => setImageDialogOpen(true)}
            />
          </div>
        </div>
      )}
      <div className="relative">
        <div
          className="min-h-[600px] prose prose-lg max-w-none p-4"
          style={{ display: mode === "visual" ? "block" : "none" }}
        >
          <RichTextPlugin
            contentEditable={
              <ContentEditable className={shadcnTheme.contentEditable} />
            }
            placeholder={
              <div className={shadcnTheme.placeholder}>Start typing...</div>
            }
            ErrorBoundary={ErrorBoundary}
          />
          <FloatingToolbarRenderer openLinkDialog={openLinkDialog} />
        </div>
        {mode === "html" && (
          <HTMLSourceView
            htmlContent={content.html}
            onHtmlChange={handleHtmlChange}
          />
        )}
        {mode === "markdown" && (
          <MarkdownSourceView
            markdownContent={content.markdown}
            onMarkdownChange={handleMarkdownChange}
          />
        )}
      </div>
      <LinkDialog
        isOpen={linkDialogOpen}
        onOpenChange={setLinkDialogOpen}
        initialUrl={linkInitial.url}
        onSubmit={handleLinkSubmit}
      />
      <ImageDialog
        isOpen={imageDialogOpen}
        onOpenChange={setImageDialogOpen}
        onSubmit={handleImageSubmit}
      />
      <CommandDialog
        open={commandPaletteOpen}
        onOpenChange={setCommandPaletteOpen}
      >
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {Object.entries(
            commandsToCommandPaletteItems(commands).reduce(
              (groups, cmd) => {
                const category = cmd.category || "Other";
                if (!groups[category]) groups[category] = [];
                groups[category].push(cmd);
                return groups;
              },
              {} as Record<
                string,
                ReturnType<typeof commandsToCommandPaletteItems>
              >,
            ),
          ).map(([category, categoryCommands]) => (
            <CommandGroup key={category} heading={category}>
              {categoryCommands.map((cmd) => (
                <CommandItem
                  key={cmd.id}
                  onSelect={() => {
                    cmd.action();
                    setCommandPaletteOpen(false);
                  }}
                >
                  {cmd.label}
                  {cmd.shortcut && (
                    <CommandShortcut>{cmd.shortcut}</CommandShortcut>
                  )}
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </div>
  );
}
