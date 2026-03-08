"use client";

import { usePathname } from "next/navigation";
import { SidebarMenuButton, useSidebar } from "@/components/ui/sidebar";
import { Small } from "@/components/ui/typography";
import { Link } from "@/i18n/navigation";

import type { TNavLinkItem } from "./types";

export interface INavLinkItemProps {
  item: TNavLinkItem;
  withTooltip?: boolean;
}

export function NavLinkItem({ item, withTooltip }: INavLinkItemProps) {
  const pathname = usePathname();
  const { isMobile, setOpenMobile } = useSidebar();
  const isActive =
    !!item.url && item.url !== "#" && pathname.endsWith(item.url);

  return (
    <SidebarMenuButton
      asChild
      size="sm"
      isActive={isActive}
      tooltip={withTooltip ? item.title : undefined}
    >
      <Link
        href={item.url ?? "#"}
        onClick={() => isMobile && setOpenMobile(false)}
      >
        {item.icon && <item.icon />}
        <Small>{item.title}</Small>
      </Link>
    </SidebarMenuButton>
  );
}
