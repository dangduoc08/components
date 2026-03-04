import { SidebarFooter } from "@/components/ui/sidebar";

import { NavList } from "./nav-list";
import type { TNavItem } from "./types";

export interface INavFooterProps {
  items: TNavItem[];
}

export function NavFooter({ items }: INavFooterProps) {
  return (
    <SidebarFooter>
      <NavList items={items} />
    </SidebarFooter>
  );
}
