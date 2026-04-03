"use client";

import { Link as LinkIcon } from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";
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

interface LinkDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  initialUrl?: string;
  onSubmit: (data: { url: string }) => void;
}

export function LinkDialog({
  isOpen,
  onOpenChange,
  initialUrl = "",
  onSubmit,
}: LinkDialogProps) {
  const [url, setUrl] = useState(initialUrl);

  useEffect(() => {
    if (isOpen) setUrl(initialUrl);
  }, [isOpen, initialUrl]);

  const handleSubmit = () => {
    if (url.trim()) {
      onSubmit({ url: url.trim() });
      onOpenChange(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <ShadcnDialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <LinkIcon className="h-5 w-5" />
            <DialogTitle>Insert Link</DialogTitle>
          </div>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="link-url">URL</Label>
            <Input
              id="link-url"
              type="url"
              placeholder="https://example.com"
              value={url}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUrl(e.target.value)
              }
              onKeyDown={handleKeyDown}
              autoFocus
            />
          </div>
        </div>
        <DialogFooter>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button onClick={handleSubmit} disabled={!url.trim()}>
              Insert Link
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </ShadcnDialog>
  );
}
