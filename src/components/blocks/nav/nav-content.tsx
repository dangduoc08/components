import { SidebarContent } from "@/components/ui/sidebar";

import { NavCollapsible } from "./nav-collapsible";
import { NavList } from "./nav-list";
import type { TNavGroup, TNavItem } from "./types";

export interface INavContentProps {
  content: TNavGroup[];
}

export function NavContent({ content }: INavContentProps) {
  const groups = [...content]
    .sort((a, b) => a.order - b.order)
    .map((group) => {
      const [label, items] = (Object.entries(group).find(
        ([key]) => key !== "order",
      ) ?? ["", []]) as [string, TNavItem[]];
      return { label, items };
    });

  return (
    <SidebarContent>
      {groups.map(({ label, items }) =>
        label ? (
          <NavCollapsible key={label} label={label} items={items} />
        ) : (
          <NavList key="root" items={items} />
        ),
      )}
    </SidebarContent>
  );
}
