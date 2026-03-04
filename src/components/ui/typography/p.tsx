import type * as React from "react";

import { cn } from "@/lib/utils";

export function P({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"p">) {
  return <p className={cn("leading-7 not-first:mt-6", className)} {...props} />;
}
