import type * as React from "react";

import { cn } from "@/lib/utils";

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn("self-start", className)}
      {...props}
    />
  );
}

export { CardAction };
