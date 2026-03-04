import type * as React from "react";

import { cn } from "@/lib/utils";

export function H1({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"h1">) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance",
        className,
      )}
      {...props}
    />
  );
}
