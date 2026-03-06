"use client";

import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { Small } from "@/components/ui/typography";
import { Link } from "@/i18n/navigation";

import { NavCheckboxItem } from "./nav-checkbox-item";
import { NavLinkItem } from "./nav-link-item";
import type { TNavItem } from "./types";

export interface INavCollapsibleProps {
  title: string;
  items: TNavItem[];
}

export function NavCollapsible({ title, items }: INavCollapsibleProps) {
  const pathname = usePathname();
  const isActive = (url?: string) =>
    !!url && url !== "#" && (pathname?.endsWith(url) ?? false);

  return (
    <SidebarGroup>
      <SidebarGroupLabel>{title}</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          switch (item.type) {
            case "checkbox":
              return (
                <SidebarMenuItem key={item.title}>
                  <NavCheckboxItem item={item} withTooltip />
                </SidebarMenuItem>
              );
            default:
              return (
                <Collapsible
                  key={item.title}
                  asChild
                  defaultOpen={
                    item.isDefaultOpen ||
                    item.items?.some((sub) => isActive(sub.url))
                  }
                  className="group/collapsible"
                >
                  <SidebarMenuItem>
                    {item.items?.length ? (
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton
                          tooltip={item.title}
                          isActive={isActive(item.url)}
                        >
                          {item.icon && <item.icon />}
                          <Small>{item.title}</Small>
                          <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                    ) : (
                      <NavLinkItem item={item} withTooltip />
                    )}
                    {item.items?.length ? (
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.items?.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton
                                asChild
                                isActive={isActive(subItem.url)}
                              >
                                <Link href={subItem.url}>
                                  <Small>{subItem.title}</Small>
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    ) : null}
                  </SidebarMenuItem>
                </Collapsible>
              );
          }
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
