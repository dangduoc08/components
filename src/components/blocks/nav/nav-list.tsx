"use client";

import type * as React from "react";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { NavCheckboxItem } from "./nav-checkbox-item";
import { NavLinkItem } from "./nav-link-item";
import type { TNavItem } from "./types";

export interface INavListProps
  extends React.ComponentPropsWithoutRef<typeof SidebarGroup> {
  items: TNavItem[];
}

export function NavList({ items, ...props }: INavListProps) {
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => {
            switch (item.type) {
              case "checkbox":
                return (
                  <SidebarMenuItem key={item.title}>
                    <NavCheckboxItem item={item} />
                  </SidebarMenuItem>
                );
              default:
                return (
                  <SidebarMenuItem key={item.title}>
                    <NavLinkItem item={item} />
                  </SidebarMenuItem>
                );
            }
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
