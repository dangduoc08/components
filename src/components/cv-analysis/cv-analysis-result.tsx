"use client";

import {
  AlertTriangle,
  Download,
  Share2,
  ShieldCheck,
  ThumbsUp,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { MOCK_ANALYSIS_RESULT } from "./constants";
import { CvAnalysisRadarChart } from "./cv-analysis-radar-chart";

export function CvAnalysisResult() {
  const t = useTranslations("cvAnalysis");
  const result = MOCK_ANALYSIS_RESULT;

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">
          {t("analysisResult")}
        </h2>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Download className="size-4" />
            {t("exportPdf")}
          </Button>
          <Button variant="outline" size="sm">
            <Share2 className="size-4" />
            {t("share")}
          </Button>
        </div>
      </div>

      {/* Match Score + Strong Fit */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Match Score */}
        <div className="flex items-center gap-5 rounded-xl border border-border/50 bg-card p-5">
          {/* Circular Progress */}
          <div className="relative shrink-0">
            <svg
              role="img"
              aria-label={`Match score: ${result.matchScore}%`}
              width="80"
              height="80"
              viewBox="0 0 80 80"
            >
              <circle
                cx="40"
                cy="40"
                r="34"
                fill="none"
                stroke="currentColor"
                strokeWidth="6"
                className="text-muted/30"
              />
              <circle
                cx="40"
                cy="40"
                r="34"
                fill="none"
                stroke="hsl(217, 91%, 60%)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray={`${(result.matchScore / 100) * 2 * Math.PI * 34} ${2 * Math.PI * 34}`}
                transform="rotate(-90 40 40)"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-lg font-bold">
              {result.matchScore}%
            </span>
          </div>
          <div>
            <h3 className="text-sm font-semibold">{t("matchScore")}</h3>
            <p className="mt-1 text-xs text-muted-foreground">
              {t("matchScoreDescription")}
            </p>
          </div>
        </div>

        {/* Strong Fit */}
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-800 dark:bg-emerald-950/50">
          <div className="flex items-center gap-2">
            <ShieldCheck className="size-5 text-emerald-600 dark:text-emerald-400" />
            <h3 className="text-sm font-bold text-emerald-700 dark:text-emerald-300">
              {t("strongFit")}
            </h3>
          </div>
          <p className="mt-2 text-sm font-medium text-emerald-800 dark:text-emerald-200">
            {t(result.fitSummary)}
          </p>
          <p className="mt-1 text-xs text-emerald-600 dark:text-emerald-400">
            {t(result.fitDescription)}
          </p>
        </div>
      </div>

      {/* Skill Compatibility + Key Strengths + Potential Gaps */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Skill Compatibility */}
        <div className="rounded-xl border border-border/50 bg-card p-5">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-semibold">{t("skillCompatibility")}</h3>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-blue-500" />
                {t("candidate")}
              </div>
              <div className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-muted-foreground/40" />
                {t("jobAvg")}
              </div>
            </div>
          </div>
          <CvAnalysisRadarChart skillScores={result.skillScores} />
        </div>

        {/* Right column: Strengths + Gaps */}
        <div className="flex flex-col gap-4">
          {/* Key Strengths */}
          <div className="rounded-xl border border-border/50 bg-card p-5">
            <div className="mb-3 flex items-center gap-2">
              <ThumbsUp className="size-4 text-blue-500" />
              <h3 className="text-sm font-semibold">{t("keyStrengths")}</h3>
            </div>
            <ul className="flex flex-col gap-2">
              {result.strengths.map((key) => (
                <li
                  key={key}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-blue-500" />
                  <span>
                    {t.rich(key, {
                      bold: (chunks) => (
                        <strong className="text-foreground">{chunks}</strong>
                      ),
                    })}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Potential Gaps */}
          <div className="rounded-xl border border-border/50 bg-card p-5">
            <div className="mb-3 flex items-center gap-2">
              <AlertTriangle className="size-4 text-amber-500" />
              <h3 className="text-sm font-semibold">{t("potentialGaps")}</h3>
            </div>
            <ul className="flex flex-col gap-2">
              {result.gaps.map((key) => (
                <li
                  key={key}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-amber-500" />
                  {t(key)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <p className="text-center text-xs text-muted-foreground">
        {t("disclaimer")}
      </p>
    </div>
  );
}
