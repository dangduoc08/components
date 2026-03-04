import { Dialog as DialogPrimitive } from "radix-ui";
import type * as React from "react";

import { cn } from "@/lib/utils";

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("text-base leading-none font-medium", className)}
      {...props}
    />
  );
}

export { DialogTitle };
