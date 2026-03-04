import { SidebarContent } from "@/components/ui/sidebar";

import { NavCollapsible } from "./nav-collapsible";
import { NavList } from "./nav-list";
import type { TNavGroup } from "./types";

export interface INavContentProps {
  content: TNavGroup[];
}

export function NavContent({ content }: INavContentProps) {
  const groups = [...content].sort((a, b) => a.order - b.order);

  return (
    <SidebarContent>
      {groups.map(({ title, items }) =>
        title ? (
          <NavCollapsible key={title} title={title} items={items} />
        ) : (
          <NavList key="root" items={items} />
        ),
      )}
    </SidebarContent>
  );
}
