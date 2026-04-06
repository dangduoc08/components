import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface ISidebarInsetProps extends React.ComponentProps<"main"> {}

function SidebarInset({ className, children, ...props }: ISidebarInsetProps) {
  return (
    <main
      data-slot="sidebar-inset"
      className={cn(
        "bg-background md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 relative flex w-full flex-1 flex-col overflow-hidden",
        className,
      )}
      {...props}
    >
      <ScrollArea className="flex-1">{children}</ScrollArea>
    </main>
  );
}

export { SidebarInset };
export type { ISidebarInsetProps };
