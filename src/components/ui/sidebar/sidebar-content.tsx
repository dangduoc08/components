import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface ISidebarContentProps extends React.ComponentProps<"div"> {}

function SidebarContent({
  className,
  children,
  ...props
}: ISidebarContentProps) {
  return (
    <div
      data-slot="sidebar-content"
      data-sidebar="content"
      className={cn(
        "flex min-h-0 flex-1 flex-col overflow-hidden group-data-[collapsible=icon]:overflow-hidden",
        className,
      )}
      {...props}
    >
      <ScrollArea className="flex-1">{children}</ScrollArea>
    </div>
  );
}

export { SidebarContent };
export type { ISidebarContentProps };
