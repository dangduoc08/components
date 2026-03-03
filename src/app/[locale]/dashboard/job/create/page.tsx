"use client";

import { useTranslations } from "next-intl";
import { AppSidebar } from "@/components/blocks/sidebar/app-sidebar";
import { SiteHeader } from "@/components/blocks/sidebar/site-header";
import { JobCreateDetails } from "@/components/job/job-create-details";
import { JobCreateProperties } from "@/components/job/job-create-properties";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Switch } from "@/components/ui/switch";

export default function JobCreatePage() {
  const t = useTranslations("job");

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col gap-6 p-6">
          {/* Header */}
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold tracking-tight">{t("create")}</h1>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/dashboard">
                    {t("dashboard")}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/dashboard/job/list">
                    {t("job")}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{t("create")}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          {/* Form Sections */}
          <div className="mx-auto flex w-full max-w-2xl flex-col gap-6">
            <JobCreateDetails />
            <JobCreateProperties />
          </div>

          {/* Footer */}
          <div className="mx-auto flex w-full max-w-2xl items-center justify-between border-t border-border/50 pt-6">
            <div className="flex items-center gap-2">
              <Switch id="publish" defaultChecked />
              <Label htmlFor="publish" className="text-sm font-medium">
                {t("publish")}
              </Label>
            </div>
            <Button>{t("createJob")}</Button>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
