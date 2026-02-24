import type * as React from "react";

import { cn } from "@/lib/utils";

function BreadcrumbItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn("gap-1 inline-flex items-center", className)}
      {...props}
    />
  );
}

export { BreadcrumbItem };
