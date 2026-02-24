import type * as React from "react";

import { cn } from "@/lib/utils";

function BreadcrumbList({ className, ...props }: React.ComponentProps<"ol">) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(
        "text-muted-foreground gap-1.5 text-sm flex flex-wrap items-center wrap-break-word",
        className,
      )}
      {...props}
    />
  );
}

export { BreadcrumbList };
