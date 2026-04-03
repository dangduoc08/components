"use client";

import { imageExtension } from "@lexkit/editor";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { extensions, Provider } from "./extensions";
import type { ShadcnTemplateRef } from "./interfaces";
import { EditorContent } from "./rich-text-editor-content";
import { shadcnTheme } from "./rich-text-editor-theme";

interface ShadcnTemplateProps {
  className?: string;
  onReady?: (methods: ShadcnTemplateRef) => void;
}

export const ShadcnTemplate = forwardRef<
  ShadcnTemplateRef,
  ShadcnTemplateProps
>(({ className, onReady }, ref) => {
  const [editorMethods, setEditorMethods] = useState<ShadcnTemplateRef | null>(
    null,
  );

  useEffect(() => {
    imageExtension.configure({
      uploadHandler: async (file: File) => {
        const objectUrl = URL.createObjectURL(file);
        return objectUrl;
      },
      defaultAlignment: "center",
      resizable: true,
      pasteListener: { insert: true, replace: true },
      debug: false,
    });
  }, []);

  const handleEditorReady = (methods: ShadcnTemplateRef) => {
    setEditorMethods(methods);
    onReady?.(methods);
  };

  useImperativeHandle(
    ref,
    () => ({
      injectMarkdown: (content: string) =>
        editorMethods?.injectMarkdown(content),
      injectHTML: (content: string) => editorMethods?.injectHTML(content),
      getMarkdown: () => editorMethods?.getMarkdown() || "",
      getHTML: () => editorMethods?.getHTML() || "",
    }),
    [editorMethods],
  );

  return (
    <div className={`shadcn-editor-wrapper ${className || ""}`}>
      <Provider extensions={extensions} config={{ theme: shadcnTheme }}>
        <EditorContent className={className} onReady={handleEditorReady} />
      </Provider>
    </div>
  );
});
