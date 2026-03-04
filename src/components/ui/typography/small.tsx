import type * as React from "react";

import { cn } from "@/lib/utils";

export function Small({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"small">) {
  return (
    <small
      className={cn("text-sm font-medium leading-none", className)}
      {...props}
    />
  );
}
