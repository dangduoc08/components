import Link from "next/link";
import type * as React from "react";

import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export interface INavHeaderProps {
  logo: React.ReactNode;
  name: string;
  href: string;
}

export function NavHeader({ logo, name, href }: INavHeaderProps) {
  return (
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton size="lg" asChild>
            <Link href={href}>
              <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-auto size-13 items-center justify-center rounded-lg">
                {logo}
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-extrabold">{name}</span>
              </div>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  );
}
