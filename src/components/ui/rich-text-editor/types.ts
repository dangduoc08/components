export type EditorMode = "visual" | "html" | "markdown";

export type TableConfig = {
  rows: number;
  columns: number;
  includeHeaders: boolean;
};

export type SelectionRect = {
  x: number;
  y: number;
  positionFromRight?: boolean;
};

export type FloatingToolbarExtension = {
  name: string;
  getIsVisible: () => boolean;
  getSelectionRect: () => SelectionRect | null;
};
