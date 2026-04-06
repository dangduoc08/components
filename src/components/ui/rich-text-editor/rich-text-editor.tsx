"use client";

import { imageExtension } from "@lexkit/editor";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { extensions, Provider } from "./extensions";
import type { RichTextEditorRef, ShadcnTemplateRef } from "./interfaces";
import { EditorContent } from "./rich-text-editor-content";
import { shadcnTheme } from "./rich-text-editor-theme";

interface RichTextEditorProps {
  className?: string;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (html: string) => void;
  onImageUpload?: (file: File) => Promise<string>;
}

export const RichTextEditor = forwardRef<
  RichTextEditorRef,
  RichTextEditorProps
>(
  (
    { className, defaultValue, placeholder, disabled, onChange, onImageUpload },
    ref,
  ) => {
    const [editorMethods, setEditorMethods] =
      useState<ShadcnTemplateRef | null>(null);

    useEffect(() => {
      imageExtension.configure({
        uploadHandler:
          onImageUpload ?? (async (file: File) => URL.createObjectURL(file)),
        defaultAlignment: "center",
        resizable: true,
        pasteListener: { insert: true, replace: true },
        debug: false,
      });
    }, [onImageUpload]);

    useImperativeHandle(
      ref,
      () => ({
        getHTML: () => editorMethods?.getHTML() ?? "",
        getMarkdown: () => editorMethods?.getMarkdown() ?? "",
        setHTML: (html: string) => editorMethods?.injectHTML(html),
        setMarkdown: (md: string) => editorMethods?.injectMarkdown(md),
      }),
      [editorMethods],
    );

    return (
      <div className={className}>
        <Provider extensions={extensions} config={{ theme: shadcnTheme }}>
          <EditorContent
            className={className}
            defaultValue={defaultValue}
            placeholder={placeholder}
            disabled={disabled}
            onChange={onChange}
            onReady={setEditorMethods}
          />
        </Provider>
      </div>
    );
  },
);
