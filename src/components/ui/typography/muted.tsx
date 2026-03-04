import type * as React from "react";

import { cn } from "@/lib/utils";

export function Muted({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"p">) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)} {...props} />
  );
}
