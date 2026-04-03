"use client";

import { Eye, FileCode, FileText } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { EditorMode } from "./types";

interface ModeTabsProps {
  mode: EditorMode;
  onModeChange: (mode: EditorMode) => void;
}

export function ModeTabs({ mode, onModeChange }: ModeTabsProps) {
  return (
    <Tabs
      value={mode}
      onValueChange={(value: string) => onModeChange(value as EditorMode)}
    >
      <TabsList className="grid w-full max-w-md grid-cols-3 bg-muted/50">
        <TabsTrigger value="visual" className="flex items-center gap-2 text-sm">
          <Eye className="h-4 w-4" />
          Visual
        </TabsTrigger>
        <TabsTrigger value="html" className="flex items-center gap-2 text-sm">
          <FileCode className="h-4 w-4" />
          HTML
        </TabsTrigger>
        <TabsTrigger
          value="markdown"
          className="flex items-center gap-2 text-sm"
        >
          <FileText className="h-4 w-4" />
          Markdown
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
