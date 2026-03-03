"use client";

import { useTranslations } from "next-intl";
import { AppSidebar } from "@/components/blocks/sidebar/app-sidebar";
import { SiteHeader } from "@/components/blocks/sidebar/site-header";
import { MOCK_JOB_DETAIL } from "@/components/job/constants";
import { JobDetailContent } from "@/components/job/job-detail-content";
import { JobDetailHeader } from "@/components/job/job-detail-header";
import { JobDetailSidebar } from "@/components/job/job-detail-sidebar";
import { Badge } from "@/components/ui/badge";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function JobDetailPage() {
  const t = useTranslations("job");
  const job = MOCK_JOB_DETAIL;

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col gap-6 p-6">
          <JobDetailHeader isPublished={job.isPublished} />

          <Tabs defaultValue="content">
            <TabsList>
              <TabsTrigger value="content">{t("jobContent")}</TabsTrigger>
              <TabsTrigger value="candidates" className="gap-2">
                {t("candidatesTab")}
                <Badge variant="secondary" className="h-5 px-1.5 text-[10px]">
                  {job.candidateCount}
                </Badge>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="content">
              <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <JobDetailContent job={job} />
                </div>
                <div>
                  <JobDetailSidebar job={job} />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="candidates">
              <div className="mt-4 flex items-center justify-center rounded-xl border border-dashed border-border/50 p-12 text-sm text-muted-foreground">
                {t("candidatesComingSoon")}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
