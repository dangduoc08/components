import { AppHeader } from "@/components/app-header";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AppHeader />
        <div className="flex flex-1 flex-col gap-6 p-4">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
          </div>

          {[
            "row-1",
            "row-2",
            "row-3",
            "row-4",
            "row-5",
            "row-6",
            "row-7",
            "row-8",
            "row-9",
            "row-10",
            "row-11",
            "row-12",
          ].map((rowId) => (
            <div key={rowId} className="grid gap-4 md:grid-cols-2">
              <div className="bg-muted/50 h-32 rounded-xl" />
              <div className="bg-muted/50 h-32 rounded-xl" />
            </div>
          ))}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
