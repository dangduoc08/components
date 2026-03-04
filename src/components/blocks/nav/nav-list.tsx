"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
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
  const t = useTranslations("nav");
  const resolveTitle = (title: string, titleKey?: string) =>
    titleKey ? t(titleKey as never) : title;

  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild size="sm">
                <Link href={item.url}>
                  {item.icon && <item.icon />}
                  <span>{resolveTitle(item.title, item.titleKey)}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
