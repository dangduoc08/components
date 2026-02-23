import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface ISidebarSeparatorProps
  extends React.ComponentProps<typeof Separator> {}

function SidebarSeparator({ className, ...props }: ISidebarSeparatorProps) {
  return (
    <Separator
      data-slot="sidebar-separator"
      data-sidebar="separator"
      className={cn("bg-sidebar-border mx-2 w-auto", className)}
      {...props}
    />
  );
}

export { SidebarSeparator };
export type { ISidebarSeparatorProps };
