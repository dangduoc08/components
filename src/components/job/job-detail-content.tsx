"use client";

import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import type { TJobDetail } from "./types";

interface IJobDetailContentProps {
  job: TJobDetail;
}

export function JobDetailContent({ job }: IJobDetailContentProps) {
  const t = useTranslations("job");

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold tracking-tight">{job.title}</h1>

      {/* Job Description */}
      <div className="flex flex-col gap-2">
        <h2 className="text-sm font-semibold">{t("jobDescription")}</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {job.description}
        </p>
      </div>

      {/* Key Responsibilities */}
      <div className="flex flex-col gap-2">
        <h2 className="text-sm font-semibold">{t("keyResponsibilities")}</h2>
        <ul className="flex flex-col gap-1.5 pl-5">
          {job.responsibilities.map((item) => (
            <li
              key={item}
              className="list-disc text-sm leading-relaxed text-muted-foreground"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Why You'll Love Working Here */}
      <div className="flex flex-col gap-2">
        <h2 className="text-sm font-semibold">{t("whyYouLove")}</h2>
        <ul className="flex flex-col gap-1.5 pl-5">
          {job.whyYouLove.map((item) => (
            <li
              key={item}
              className="list-disc text-sm leading-relaxed text-muted-foreground"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Skills */}
      <div className="flex flex-col gap-2">
        <h2 className="text-sm font-semibold">{t("skills")}</h2>
        <div className="flex flex-wrap gap-2">
          {job.skills.map((skill) => (
            <Badge key={skill} variant="secondary">
              {skill}
            </Badge>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="flex flex-col gap-2">
        <h2 className="text-sm font-semibold">{t("benefits")}</h2>
        <div className="flex flex-wrap gap-2">
          {job.benefits.map((benefit) => (
            <Badge key={benefit} variant="secondary">
              {benefit}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
