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

import { Header } from "@/components/blocks/header";
import type { TNavGroup, TNavItem } from "@/components/blocks/nav";
import { Nav } from "@/components/blocks/nav";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
        { title: t("dashboard"), url: "dashboard", icon: LayoutDashboard },
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
    <div className="[--header-height:calc(--spacing(14))]">
      <SidebarProvider className="flex flex-col">
        <Header userName="John Doe" />
        <div className="flex flex-1">
          <Nav
            header={{
              logo: (
                <Image src="/owlky.png" alt="logo" height={40} width={40} />
              ),
              name: "Owlky",
              href: "/",
            }}
            content={content}
            footer={footer}
          />
          <SidebarInset>{children}</SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}
