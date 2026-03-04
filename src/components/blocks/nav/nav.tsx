"use client";

import { Command, SquareTerminal } from "lucide-react";
import type * as React from "react";

import { Sidebar } from "@/components/ui/sidebar";

import { NavContent } from "./nav-content";
import { NavHeader } from "./nav-header";
import type { TNavGroup } from "./types";

const data = {
  header: {
    logo: <Command className="size-4" />,
    name: "Owlky",
  },

  content: [
    {
      order: 0,
      "": [
        {
          title: "Dashboard",
          url: "dashboard",
          icon: SquareTerminal,
        },
      ],
    },
    {
      order: 1,
      platform: [
        {
          title: "Job",
          titleKey: "job",
          url: "#",
          icon: SquareTerminal,
          isActive: true,
          items: [{ title: "List", titleKey: "list", url: "#" }],
        },
        {
          title: "Resume",
          titleKey: "resume",
          url: "#",
          icon: SquareTerminal,
          isActive: true,
          items: [{ title: "Analyze CV", titleKey: "analyzeCV", url: "#" }],
        },
      ],
    },
    {
      order: 2,
      organization: [
        {
          title: "Samsung",
          url: "#",
          isActive: true,
        },
        {
          title: "Facebook",
          url: "#",
          isActive: true,
        },
      ],
    },
  ] as TNavGroup[],
};

export function Nav({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <nav {...props}>
      <Sidebar className="top-(--header-height) h-[calc(100svh-var(--header-height))]!">
        <NavHeader logo={data.header.logo} name={data.header.name} href="/" />
        <NavContent content={data.content} />
      </Sidebar>
    </nav>
  );
}
