"use client";

import {
  BriefcaseBusiness,
  FileText,
  LayoutDashboard,
  LifeBuoy,
  MessageSquare,
} from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import type * as React from "react";

import { Sidebar } from "@/components/ui/sidebar";

import { NavContent } from "./nav-content";
import { NavFooter } from "./nav-footer";
import { NavHeader } from "./nav-header";
import type { TNavGroup, TNavItem } from "./types";

export function Nav({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const t = useTranslations("nav");

  const footer: TNavItem[] = [
    { title: t("support"), url: "#", icon: LifeBuoy },
    { title: t("feedback"), url: "#", icon: MessageSquare },
  ];

  const content: TNavGroup[] = [
    {
      order: 0,
      title: "",
      items: [
        {
          title: t("dashboard"),
          url: "dashboard",
          icon: LayoutDashboard,
        },
      ],
    },
    {
      order: 1,
      title: t("platform"),
      items: [
        {
          title: t("job"),
          icon: BriefcaseBusiness,
          isDefaultOpen: true,
          items: [{ title: t("list"), url: "jobs" }],
        },
        {
          title: t("resume"),
          icon: FileText,
          isDefaultOpen: true,
          items: [{ title: t("analyzeCV"), url: "cv" }],
        },
      ],
    },
    {
      order: 2,
      title: t("organization"),
      items: [
        { title: "Samsung", type: "checkbox" },
        { title: "Facebook", type: "checkbox" },
      ],
    },
  ];

  return (
    <nav {...props}>
      <Sidebar className="top-(--header-height) h-[calc(100svh-var(--header-height))]!">
        <NavHeader
          logo={<Image src="/owlky.png" alt="logo" height={40} width={40} />}
          name="Owlky"
          href="/"
        />
        <NavContent content={content} />
        <NavFooter items={footer} />
      </Sidebar>
    </nav>
  );
}
