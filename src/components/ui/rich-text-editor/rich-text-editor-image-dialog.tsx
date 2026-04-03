"use client";

import {
  ChevronDown,
  CloudUpload,
  Globe,
  Image as ImageIcon,
  Upload,
  X,
} from "lucide-react";
import NextImage from "next/image";
import { useTranslations } from "next-intl";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Dialog as ShadcnDialog,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ImageDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: {
    activeTab: "upload" | "url";
    url: string;
    alt: string;
    caption: string;
    file: File | null;
  }) => void;
}

export function ImageDialog({
  isOpen,
  onOpenChange,
  onSubmit,
}: ImageDialogProps) {
  const t = useTranslations("richTextEditor");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [activeTab, setActiveTab] = useState<"upload" | "url">("upload");
  const [url, setUrl] = useState("");
  const [alt, setAlt] = useState("");
  const [caption, setCaption] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setActiveTab("upload");
      setUrl("");
      setAlt("");
      setCaption("");
      setFile(null);
      setDragOver(false);
      setShowAdvanced(false);
    }
  }, [isOpen]);

  const handleSubmit = () => {
    onSubmit({ activeTab, url, alt, caption, file });
    onOpenChange(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && (activeTab === "url" ? url.trim() : file)) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0 && files[0]) setFile(files[0]);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0 && files[0]) setFile(files[0]);
  };

  const handleRemoveFile = () => {
    setFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const hasValidContent = activeTab === "upload" ? !!file : !!url.trim();

  return (
    <ShadcnDialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <ImageIcon className="h-5 w-5" />
            <DialogTitle>{t("imageDialogTitle")}</DialogTitle>
          </div>
        </DialogHeader>
        <div className="space-y-4">
          <Tabs
            value={activeTab}
            onValueChange={(value: string) =>
              setActiveTab(value as "upload" | "url")
            }
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="upload" className="flex items-center gap-2">
                <Upload className="h-4 w-4" />
                {t("uploadTab")}
              </TabsTrigger>
              <TabsTrigger value="url" className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                {t("urlTab")}
              </TabsTrigger>
            </TabsList>
            <TabsContent value="upload" className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label>{t("uploadLabel")}</Label>
                {!file ? (
                  <button
                    type="button"
                    className={`w-full border-2 border-dashed rounded-lg p-6 text-center transition-colors cursor-pointer ${dragOver ? "border-primary bg-primary/5" : "border-muted-foreground/25 hover:border-muted-foreground/50"}`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <CloudUpload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mb-2">
                      {t("dropZoneText")}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {t("dropZoneSubtext")}
                    </p>
                  </button>
                ) : (
                  <div className="border rounded-lg p-4 bg-muted/20">
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-16 rounded border overflow-hidden bg-muted flex-shrink-0">
                        <NextImage
                          src={URL.createObjectURL(file)}
                          alt="Preview"
                          fill
                          unoptimized
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">
                          {file.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={handleRemoveFile}
                        className="text-muted-foreground hover:text-destructive"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                />
              </div>
            </TabsContent>
            <TabsContent value="url" className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="image-url">{t("imageUrlLabel")}</Label>
                <Input
                  id="image-url"
                  type="url"
                  placeholder={t("imageUrlPlaceholder")}
                  value={url}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setUrl(e.target.value)
                  }
                  onKeyDown={handleKeyDown}
                />
              </div>
            </TabsContent>
            {hasValidContent && (
              <Collapsible
                open={showAdvanced}
                onOpenChange={setShowAdvanced}
                className="mt-4"
              >
                <CollapsibleTrigger asChild>
                  <Button
                    type="button"
                    variant="ghost"
                    className="w-full justify-between p-2 h-auto"
                  >
                    <span className="text-sm font-medium">
                      {t("advancedOptions")}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${showAdvanced ? "rotate-180" : ""}`}
                    />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="image-alt">{t("altLabel")}</Label>
                    <Input
                      id="image-alt"
                      placeholder={t("altPlaceholder")}
                      value={alt}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setAlt(e.target.value)
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="image-caption">{t("captionLabel")}</Label>
                    <Input
                      id="image-caption"
                      placeholder={t("captionPlaceholder")}
                      value={caption}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setCaption(e.target.value)
                      }
                    />
                  </div>
                </CollapsibleContent>
              </Collapsible>
            )}
          </Tabs>
        </div>
        <DialogFooter>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              {t("cancel")}
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={activeTab === "upload" ? !file : !url.trim()}
            >
              {t("insertImageButton")}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </ShadcnDialog>
  );
}
