import type * as React from "react";

import { cn } from "@/lib/utils";

export function Lead({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"p">) {
  return (
    <p className={cn("text-xl text-muted-foreground", className)} {...props} />
  );
}
