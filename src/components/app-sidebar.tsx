"use client";

import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map as MapIcon,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";
import { useTranslations } from "next-intl";
import type * as React from "react";

import { NavMain } from "@/components/nav/nav-main";
import { NavProjects } from "@/components/nav/nav-projects";
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
        title: t("playground"),
        url: "#",
        icon: SquareTerminal,
        isActive: true,
        items: [
          { title: t("history"), url: "#" },
          { title: t("starred"), url: "#" },
          { title: t("settings"), url: "#" },
        ],
      },
      {
        title: t("models"),
        url: "#",
        icon: Bot,
        items: [
          { title: t("genesis"), url: "#" },
          { title: t("explorer"), url: "#" },
          { title: t("quantum"), url: "#" },
        ],
      },
      {
        title: t("documentation"),
        url: "#",
        icon: BookOpen,
        items: [
          { title: t("introduction"), url: "#" },
          { title: t("getStarted"), url: "#" },
          { title: t("tutorials"), url: "#" },
          { title: t("changelog"), url: "#" },
        ],
      },
      {
        title: t("settings"),
        url: "#",
        icon: Settings2,
        items: [
          { title: t("general"), url: "#" },
          { title: t("team"), url: "#" },
          { title: t("billing"), url: "#" },
          { title: t("limits"), url: "#" },
        ],
      },
    ],
    projects: [
      { name: t("designEngineering"), url: "#", icon: Frame },
      { name: t("salesMarketing"), url: "#", icon: PieChart },
      { name: t("travel"), url: "#", icon: MapIcon },
    ],
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <ThemeToggle />
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
