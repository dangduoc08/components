import { cn } from "@/lib/utils";

interface ISidebarHeaderProps extends React.ComponentProps<"div"> {}

function SidebarHeader({ className, ...props }: ISidebarHeaderProps) {
  return (
    <div
      data-slot="sidebar-header"
      data-sidebar="header"
      className={cn("gap-2 p-2 flex flex-col", className)}
      {...props}
    />
  );
}

export { SidebarHeader };
export type { ISidebarHeaderProps };
