import type { LucideIcon } from "lucide-react";

import { Small } from "@/components/ui/typography";

interface IJobMetaItemProps {
  icon: LucideIcon;
  label: string;
}

export function JobMetaItem({ icon: Icon, label }: IJobMetaItemProps) {
  return (
    <div className="flex items-center gap-1.5">
      <Icon className="size-4 text-muted-foreground" />
      <Small className="text-muted-foreground">{label}</Small>
    </div>
  );
}
