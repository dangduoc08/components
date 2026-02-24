import { MoreHorizontalIcon } from "lucide-react";
import type * as React from "react";

import { cn } from "@/lib/utils";

function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn(
        "size-5 [&>svg]:size-4 flex items-center justify-center",
        className,
      )}
      {...props}
    >
      <MoreHorizontalIcon />
      <span className="sr-only">More</span>
    </span>
  );
}

export { BreadcrumbEllipsis };
