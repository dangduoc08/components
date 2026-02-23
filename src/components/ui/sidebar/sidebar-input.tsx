import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface ISidebarInputProps extends React.ComponentProps<typeof Input> {}

function SidebarInput({ className, ...props }: ISidebarInputProps) {
  return (
    <Input
      data-slot="sidebar-input"
      data-sidebar="input"
      className={cn("bg-background h-8 w-full shadow-none", className)}
      {...props}
    />
  );
}

export { SidebarInput };
export type { ISidebarInputProps };
