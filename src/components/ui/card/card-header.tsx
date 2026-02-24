import type * as React from "react";

import { cn } from "@/lib/utils";

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "flex flex-col gap-1.5 px-6 has-data-[slot=card-action]:flex-row has-data-[slot=card-action]:items-center has-data-[slot=card-action]:justify-between",
        className,
      )}
      {...props}
    />
  );
}

export { CardHeader };
