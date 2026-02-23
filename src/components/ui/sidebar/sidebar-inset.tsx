import { cn } from "@/lib/utils";

interface ISidebarInsetProps extends React.ComponentProps<"main"> {}

function SidebarInset({ className, ...props }: ISidebarInsetProps) {
  return (
    <main
      data-slot="sidebar-inset"
      className={cn(
        "bg-background md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 relative flex w-full flex-1 flex-col",
        className,
      )}
      {...props}
    />
  );
}

export { SidebarInset };
export type { ISidebarInsetProps };
