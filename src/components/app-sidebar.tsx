"use client";

import {
  AudioWaveform,
  Briefcase,
  Command,
  GalleryVerticalEnd,
  ScanSearch,
} from "lucide-react";
import { useTranslations } from "next-intl";
import type * as React from "react";

import { NavMain } from "@/components/nav/nav-main";
import { NavUser } from "@/components/nav/nav-user";
import { TeamSwitcher } from "@/components/nav/team-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const t = useTranslations("sidebar");

  const data = {
    user: {
      name: "shadcn",
      email: "m@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
    teams: [
      { name: "Acme Inc", logo: GalleryVerticalEnd, plan: "Enterprise" },
      { name: "Acme Corp.", logo: AudioWaveform, plan: "Startup" },
      { name: "Evil Corp.", logo: Command, plan: "Free" },
    ],
    navMain: [
      {
        title: t("job"),
        url: "#",
        icon: Briefcase,
        isActive: true,
        items: [
          { title: t("jobList"), url: "/dashboard/job/list" },
          { title: t("jobCreate"), url: "/dashboard/job/create" },
          { title: t("jobEdit"), url: "/dashboard/job/edit" },
          { title: t("jobDelete"), url: "/dashboard/job/delete" },
        ],
      },
      {
        title: t("cvAnalysis"),
        url: "/dashboard/cv-analysis",
        icon: ScanSearch,
      },
    ],
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <ThemeToggle />
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
