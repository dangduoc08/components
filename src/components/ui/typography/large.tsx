import type * as React from "react";

import { cn } from "@/lib/utils";

export function Large({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return <div className={cn("text-lg font-semibold", className)} {...props} />;
}
