"use client";

import { AppHeader } from "@/components/app-header";
import { AppSidebar } from "@/components/app-sidebar";
import { CvAnalysisResult } from "@/components/cv-analysis/cv-analysis-result";
import { CvAnalysisUpload } from "@/components/cv-analysis/cv-analysis-upload";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function CvAnalysisPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AppHeader />
        <div className="flex flex-1 gap-8 p-6">
          <div className="w-full max-w-md shrink-0">
            <CvAnalysisUpload />
          </div>
          <div className="flex-1">
            <CvAnalysisResult />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
