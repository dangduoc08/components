"use client";

import type * as React from "react";

import { Sidebar } from "@/components/ui/sidebar";

import { NavContent } from "./nav-content";
import { NavFooter } from "./nav-footer";
import type { INavHeaderProps } from "./nav-header";
import { NavHeader } from "./nav-header";
import type { TNavGroup, TNavItem } from "./types";

interface INavProps extends Omit<React.ComponentProps<"nav">, "content"> {
  header: INavHeaderProps;
  content: TNavGroup[];
  footer: TNavItem[];
}

export function Nav({ header, content, footer, ...props }: INavProps) {
  return (
    <nav {...props}>
      <Sidebar className="top-(--header-height) h-[calc(100svh-var(--header-height))]!">
        <NavHeader {...header} />
        <NavContent content={content} />
        <NavFooter items={footer} />
      </Sidebar>
    </nav>
  );
}
