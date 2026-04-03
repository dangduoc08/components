"use client";

import { imageExtension } from "@lexkit/editor";
import type { LexicalEditor } from "lexical";
import { useRef } from "react";
import type { EditorCommands } from "./extensions";

export function useImageHandlers(
  commands: EditorCommands,
  _editor: LexicalEditor | null,
) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlers = {
    insertImageFromUrl: (url: string, alt = "", caption?: string) => {
      commands.insertImage({ src: url, alt, caption });
    },
    insertImageFromFile: async (file: File, alt = "", caption?: string) => {
      if (imageExtension.config.uploadHandler) {
        try {
          const src = await imageExtension.config.uploadHandler(file);
          commands.insertImage({ src, alt: alt || file.name, caption, file });
        } catch (error) {
          console.error("Failed to upload image:", error);
          const src = URL.createObjectURL(file);
          commands.insertImage({ src, alt: alt || file.name, caption, file });
        }
      } else {
        const src = URL.createObjectURL(file);
        commands.insertImage({ src, alt: alt || file.name, caption, file });
      }
    },
    setImageAlignment: (alignment: "left" | "center" | "right" | "none") => {
      commands.setImageAlignment(alignment);
    },
    setImageCaption: (caption: string) => {
      commands.setImageCaption(caption);
    },
  };

  return { handlers, fileInputRef };
}
