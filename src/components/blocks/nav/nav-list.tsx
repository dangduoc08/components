"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type * as React from "react";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import type { TNavItem } from "./types";

export interface INavListProps
  extends React.ComponentPropsWithoutRef<typeof SidebarGroup> {
  items: TNavItem[];
}

export function NavList({ items, ...props }: INavListProps) {
  const pathname = usePathname();
  const isActive = (url?: string) =>
    !!url && url !== "#" && pathname.endsWith(`/${url}`);

  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                size="sm"
                isActive={isActive(item.url)}
              >
                <Link href={item.url ?? "#"}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
