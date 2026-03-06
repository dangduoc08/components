import {
  BarChart2,
  Clock,
  MoreVertical,
  Pencil,
  Search,
  Trash2,
  User,
  Users,
  Wallet,
} from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
  detailsLabel: string;
  editLabel: string;
  removeLabel: string;
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
  detailsLabel,
  editLabel,
  removeLabel,
}: IJobCardProps) {
  return (
    <Card className="w-full gap-0 border-none shadow-xs lg:w-80 lg:min-h-64">
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="-mr-2 -mt-1 size-8 text-muted-foreground"
              >
                <MoreVertical className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48" align="end" sideOffset={10}>
              <DropdownMenuItem>
                <Search className="size-4" />
                <Small>{detailsLabel}</Small>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Pencil className="size-4" />
                <Small>{editLabel}</Small>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive focus:text-destructive">
                <Trash2 className="size-4" />
                <Small>{removeLabel}</Small>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
