"use client";

import {
  BarChart3,
  Briefcase,
  Calendar,
  CircleDollarSign,
  Clock,
  MapPin,
  Phone,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import type { TJobDetail } from "./types";

interface IJobDetailSidebarProps {
  job: TJobDetail;
}

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function JobDetailSidebar({ job }: IJobDetailSidebarProps) {
  const t = useTranslations("job");

  const metadataItems = [
    {
      icon: Calendar,
      label: t("datePosted"),
      value: formatDate(job.postedDate),
    },
    {
      icon: Clock,
      label: t("expirationDate"),
      value: formatDate(job.expirationDate),
    },
    {
      icon: Briefcase,
      label: t("employmentType"),
      value: job.employmentType,
    },
    {
      icon: CircleDollarSign,
      label: t("offeredSalary"),
      value: job.salary,
    },
    {
      icon: BarChart3,
      label: t("experience"),
      value: job.experienceLevel,
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-xl border border-border/50 bg-card p-5">
        <div className="flex flex-col gap-4">
          {metadataItems.map((item) => (
            <div key={item.label} className="flex items-start gap-3">
              <item.icon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
              <div className="flex flex-col gap-0.5">
                <span className="text-xs text-muted-foreground">
                  {item.label}
                </span>
                <span className="text-sm font-medium">{item.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-xl border border-border/50 bg-card p-5">
        <div className="flex flex-col items-center gap-3 text-center">
          <Avatar className="size-14 rounded-lg">
            <AvatarImage src={job.company.logo} alt={job.company.name} />
            <AvatarFallback className="rounded-lg bg-muted text-sm">
              {job.company.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <h3 className="text-sm font-semibold">{job.company.name}</h3>
          <Separator />
          <div className="flex w-full flex-col gap-3">
            <div className="flex items-start gap-3 text-left">
              <MapPin className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                {job.company.address}
              </span>
            </div>
            <div className="flex items-start gap-3 text-left">
              <Phone className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                {job.company.phone}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
