import { Checkbox } from "@/components/ui/checkbox";
import { SidebarMenuButton } from "@/components/ui/sidebar";
import { Small } from "@/components/ui/typography";

import type { TNavCheckboxItem } from "./types";

export interface INavCheckboxItemProps {
  item: TNavCheckboxItem;
  withTooltip?: boolean;
}

export function NavCheckboxItem({ item, withTooltip }: INavCheckboxItemProps) {
  return (
    <SidebarMenuButton
      asChild
      size="sm"
      tooltip={withTooltip ? item.title : undefined}
    >
      <label htmlFor={`nav-${item.title}`}>
        <Checkbox
          id={`nav-${item.title}`}
          checked={item.isChecked}
          onCheckedChange={item.onCheckedChange}
        />
        <Small>{item.title}</Small>
      </label>
    </SidebarMenuButton>
  );
}
