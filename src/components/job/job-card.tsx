"use client";

import {
  BarChart3,
  Briefcase,
  Clock,
  DollarSign,
  MoreVertical,
  Users,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { TJob } from "./types";

interface IJobCardProps {
  job: TJob;
}

function formatPostedDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function JobCard({ job }: IJobCardProps) {
  const t = useTranslations("job");

  return (
    <div className="group relative flex flex-col rounded-xl border border-border/50 bg-card p-5 transition-colors hover:border-border">
      <div className="flex items-start justify-between">
        <Avatar className="size-12 rounded-lg">
          <AvatarImage src={job.companyLogo} alt={job.title} />
          <AvatarFallback className="rounded-lg bg-muted text-xs">
            {job.title.charAt(0)}
          </AvatarFallback>
        </Avatar>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon-xs"
              className="text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 data-[state=open]:opacity-100"
            >
              <MoreVertical className="size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-36">
            <DropdownMenuItem>{t("edit")}</DropdownMenuItem>
            <DropdownMenuItem>{t("duplicate")}</DropdownMenuItem>
            <DropdownMenuItem className="text-destructive">
              {t("delete")}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="mt-4 flex flex-col gap-1.5">
        <h3 className="text-sm font-semibold leading-tight">{job.title}</h3>
        <p className="text-xs text-muted-foreground">
          {t("postedDate", { date: formatPostedDate(job.postedDate) })}
        </p>
        <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-500">
          <Users className="size-3.5" />
          <span>{t("candidates", { count: job.candidateCount })}</span>
        </div>
      </div>
      <div className="mt-auto grid grid-cols-2 gap-x-4 gap-y-2.5 border-t border-border/50 pt-4 mt-5">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <BarChart3 className="size-3.5 shrink-0" />
          <span className="truncate">{job.experienceLevel}</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Clock className="size-3.5 shrink-0" />
          <span className="truncate">{job.employmentType}</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <DollarSign className="size-3.5 shrink-0" />
          <span className="truncate">{job.salary}</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Briefcase className="size-3.5 shrink-0" />
          <span className="truncate">{job.role}</span>
        </div>
      </div>
    </div>
  );
}
