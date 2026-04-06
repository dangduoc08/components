export interface RichTextEditorRef {
  getHTML: () => string;
  getMarkdown: () => string;
  setHTML: (html: string) => void;
  setMarkdown: (markdown: string) => void;
}

export interface ShadcnTemplateRef {
  injectMarkdown: (content: string) => void;
  injectHTML: (content: string) => void;
  getMarkdown: () => string;
  getHTML: () => string;
}
