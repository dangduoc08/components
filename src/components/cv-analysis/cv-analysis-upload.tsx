"use client";

import { CloudUpload, FileText, Pause, Search, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MOCK_UPLOADED_FILE, TARGET_JOBS } from "./constants";

export function CvAnalysisUpload() {
  const t = useTranslations("cvAnalysis");

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          {t("newAnalysis")}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {t("newAnalysisDescription")}
        </p>
      </div>

      {/* Target Job Position */}
      <div className="rounded-xl border border-border/50 bg-card p-5">
        <h2 className="mb-3 text-sm font-semibold">{t("targetJobPosition")}</h2>
        <Select defaultValue={TARGET_JOBS[0].id}>
          <SelectTrigger className="mb-3">
            <div className="flex items-center gap-2">
              <Search className="size-4 text-muted-foreground" />
              <SelectValue />
            </div>
          </SelectTrigger>
          <SelectContent>
            {TARGET_JOBS.map((job) => (
              <SelectItem key={job.id} value={job.id}>
                {job.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="flex items-center gap-2">
          {TARGET_JOBS[0].tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="text-xs text-emerald-600 border-emerald-200 bg-emerald-50 dark:bg-emerald-950 dark:border-emerald-800 dark:text-emerald-400"
            >
              {tag}
            </Badge>
          ))}
          <span className="text-xs text-muted-foreground">
            ID: {TARGET_JOBS[0].id}
          </span>
        </div>
      </div>

      {/* Candidate CV */}
      <div className="rounded-xl border border-border/50 bg-card p-5">
        <h2 className="mb-3 text-sm font-semibold">{t("candidateCV")}</h2>

        {/* Upload Area */}
        <div className="flex flex-col items-center gap-3 rounded-lg border-2 border-dashed border-border/50 px-6 py-10 text-center transition-colors hover:border-primary/30">
          <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
            <CloudUpload className="size-6 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium">{t("clickToUpload")}</p>
            <p className="mt-1 text-xs text-muted-foreground">
              {t("uploadSupport")}
            </p>
          </div>
          <Button variant="outline" size="sm">
            {t("browseFiles")}
          </Button>
        </div>

        {/* Uploaded File */}
        <div className="mt-4 flex items-center gap-3 rounded-lg border border-border/50 p-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-red-100 dark:bg-red-950">
            <FileText className="size-5 text-red-500" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="truncate text-sm font-medium">
              {MOCK_UPLOADED_FILE.name}
            </p>
            <p className="text-xs text-muted-foreground">
              {MOCK_UPLOADED_FILE.size} • {MOCK_UPLOADED_FILE.uploadedAt}
            </p>
          </div>
          <Button variant="ghost" size="icon-xs">
            <Pause className="size-4" />
          </Button>
        </div>
      </div>

      {/* Analyze Button */}
      <Button size="lg" className="w-full gap-2">
        <Sparkles className="size-4" />
        {t("analyzeWithAI")}
      </Button>
    </div>
  );
}
