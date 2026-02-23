import { cn } from "@/lib/utils";

interface ISidebarContentProps extends React.ComponentProps<"div"> {}

function SidebarContent({ className, ...props }: ISidebarContentProps) {
  return (
    <div
      data-slot="sidebar-content"
      data-sidebar="content"
      className={cn(
        "no-scrollbar gap-0 flex min-h-0 flex-1 flex-col overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className,
      )}
      {...props}
    />
  );
}

export { SidebarContent };
export type { ISidebarContentProps };
