import type * as React from "react";

import { cn } from "@/lib/utils";

export function Blockquote({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"blockquote">) {
  return (
    <blockquote
      className={cn("mt-6 border-l-2 pl-6 italic", className)}
      {...props}
    />
  );
}
