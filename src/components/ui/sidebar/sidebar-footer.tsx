import { cn } from "@/lib/utils";

interface ISidebarFooterProps extends React.ComponentProps<"div"> {}

function SidebarFooter({ className, ...props }: ISidebarFooterProps) {
  return (
    <div
      data-slot="sidebar-footer"
      data-sidebar="footer"
      className={cn("gap-2 p-2 flex flex-col", className)}
      {...props}
    />
  );
}

export { SidebarFooter };
export type { ISidebarFooterProps };
