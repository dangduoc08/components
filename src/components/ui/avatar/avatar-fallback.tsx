import { Avatar as AvatarPrimitive } from "radix-ui";
import type * as React from "react";

import { cn } from "@/lib/utils";
import { generateAvatarFallback } from "./utils";

interface IAvatarFallbackProps
  extends React.ComponentProps<typeof AvatarPrimitive.Fallback> {
  name?: string;
}

function AvatarFallback({
  className,
  name,
  children,
  ...props
}: IAvatarFallbackProps) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted text-muted-foreground rounded-full flex size-full items-center justify-center text-sm group-data-[size=sm]/avatar:text-xs",
        className,
      )}
      {...props}
    >
      {name ? generateAvatarFallback(name) : children}
    </AvatarPrimitive.Fallback>
  );
}

export { AvatarFallback };
