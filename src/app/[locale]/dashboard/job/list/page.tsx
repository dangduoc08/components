import { AppSidebar } from "@/components/blocks/sidebar/app-sidebar";
import { SiteHeader } from "@/components/blocks/sidebar/site-header";
import { MOCK_JOBS } from "@/components/job/constants";
import { JobCard } from "@/components/job/job-card";
import { JobListHeader } from "@/components/job/job-list-header";
import { JobListToolbar } from "@/components/job/job-list-toolbar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function JobListPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col gap-6 p-6">
          <JobListHeader />
          <JobListToolbar />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {MOCK_JOBS.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
