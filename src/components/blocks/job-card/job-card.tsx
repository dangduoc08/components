import {
  BarChart2,
  Clock,
  MoreHorizontal,
  User,
  Users,
  Wallet,
} from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { H4, Muted, Small } from "@/components/ui/typography";

import { JobMetaItem } from "./job-meta-item";

interface IJobCardProps {
  logoUrl: string;
  logoAlt: string;
  title: string;
  postedAtLabel: string;
  candidateCount: number;
  candidatesLabel: string;
  experience: string;
  workType: string;
  salary: string;
  level: string;
}

export function JobCard({
  logoUrl,
  logoAlt,
  title,
  postedAtLabel,
  candidateCount,
  candidatesLabel,
  experience,
  workType,
  salary,
  level,
}: IJobCardProps) {
  return (
    <Card className="w-full gap-0 lg:w-72">
      <CardHeader className="gap-3 pb-4">
        <div className="flex items-start justify-between">
          <div className="size-12 overflow-hidden rounded-xl">
            <Image
              src={logoUrl}
              alt={logoAlt}
              width={48}
              height={48}
              className="size-full object-cover"
            />
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="-mr-2 -mt-1 size-8 text-muted-foreground"
          >
            <MoreHorizontal className="size-4" />
          </Button>
        </div>
        <div className="flex flex-col gap-0.5">
          <H4>{title}</H4>
          <Muted>{postedAtLabel}</Muted>
        </div>
        <div className="flex items-center gap-1.5">
          <Users className="size-4 text-primary" />
          <Small className="text-primary">
            {candidateCount} {candidatesLabel}
          </Small>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="pt-4">
        <div className="grid grid-cols-2 gap-y-3">
          <JobMetaItem icon={BarChart2} label={experience} />
          <JobMetaItem icon={Clock} label={workType} />
          <JobMetaItem icon={Wallet} label={salary} />
          <JobMetaItem icon={User} label={level} />
        </div>
      </CardContent>
    </Card>
  );
}
