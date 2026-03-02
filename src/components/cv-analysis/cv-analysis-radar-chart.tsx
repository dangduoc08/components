"use client";

import { useTranslations } from "next-intl";
import type { TSkillScore } from "./types";

interface ICvAnalysisRadarChartProps {
  skillScores: TSkillScore[];
}

const CHART_SIZE = 240;
const CENTER = CHART_SIZE / 2;
const RADIUS = 90;
const LEVELS = 4;

const GRID_LEVEL_KEYS = Array.from({ length: LEVELS }, (_, i) => i);

function polarToCartesian(
  angle: number,
  radius: number,
): { x: number; y: number } {
  const rad = ((angle - 90) * Math.PI) / 180;
  return {
    x: CENTER + radius * Math.cos(rad),
    y: CENTER + radius * Math.sin(rad),
  };
}

function buildPolygonPoints(
  scores: number[],
  maxScore: number,
  angleStep: number,
): string {
  return scores
    .map((score, i) => {
      const point = polarToCartesian(
        i * angleStep,
        (score / maxScore) * RADIUS,
      );
      return `${point.x},${point.y}`;
    })
    .join(" ");
}

export function CvAnalysisRadarChart({
  skillScores,
}: ICvAnalysisRadarChartProps) {
  const t = useTranslations("cvAnalysis");
  const angleStep = 360 / skillScores.length;

  const candidatePoints = buildPolygonPoints(
    skillScores.map((s) => s.candidateScore),
    100,
    angleStep,
  );
  const jobAvgPoints = buildPolygonPoints(
    skillScores.map((s) => s.jobAvgScore),
    100,
    angleStep,
  );

  return (
    <div className="flex flex-col items-center">
      <svg
        role="img"
        aria-label="Skill compatibility radar chart"
        width={CHART_SIZE}
        height={CHART_SIZE}
        viewBox={`0 0 ${CHART_SIZE} ${CHART_SIZE}`}
        className="overflow-visible"
      >
        {GRID_LEVEL_KEYS.map((level) => {
          const r = ((level + 1) / LEVELS) * RADIUS;
          const points = skillScores
            .map((_, i) => {
              const point = polarToCartesian(i * angleStep, r);
              return `${point.x},${point.y}`;
            })
            .join(" ");
          return (
            <polygon
              key={`grid-${level}`}
              points={points}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-border"
            />
          );
        })}
        {skillScores.map((s) => {
          const idx = skillScores.indexOf(s);
          const point = polarToCartesian(idx * angleStep, RADIUS);
          return (
            <line
              key={`axis-${s.label}`}
              x1={CENTER}
              y1={CENTER}
              x2={point.x}
              y2={point.y}
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-border"
            />
          );
        })}
        <polygon
          points={jobAvgPoints}
          fill="currentColor"
          fillOpacity="0.05"
          stroke="currentColor"
          strokeWidth="1"
          className="text-muted-foreground"
        />
        <polygon
          points={candidatePoints}
          fill="hsl(217, 91%, 60%)"
          fillOpacity="0.15"
          stroke="hsl(217, 91%, 60%)"
          strokeWidth="2"
        />
        {skillScores.map((s) => {
          const idx = skillScores.indexOf(s);
          const point = polarToCartesian(
            idx * angleStep,
            (s.candidateScore / 100) * RADIUS,
          );
          return (
            <circle
              key={`dot-${s.label}`}
              cx={point.x}
              cy={point.y}
              r="3"
              fill="hsl(217, 91%, 60%)"
            />
          );
        })}
        {skillScores.map((s) => {
          const idx = skillScores.indexOf(s);
          const labelRadius = RADIUS + 20;
          const point = polarToCartesian(idx * angleStep, labelRadius);
          return (
            <text
              key={`label-${s.label}`}
              x={point.x}
              y={point.y}
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-muted-foreground text-[10px] uppercase tracking-wider"
            >
              {t(s.label)}
            </text>
          );
        })}
      </svg>
    </div>
  );
}
