import { AppSidebar } from "@/components/blocks/sidebar/app-sidebar";
import { SiteHeader } from "@/components/blocks/sidebar/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

const _COLORS = [
  "bg-red-200 dark:bg-red-900/40",
  "bg-blue-200 dark:bg-blue-900/40",
  "bg-green-200 dark:bg-green-900/40",
  "bg-amber-200 dark:bg-amber-900/40",
  "bg-purple-200 dark:bg-purple-900/40",
  "bg-pink-200 dark:bg-pink-900/40",
  "bg-teal-200 dark:bg-teal-900/40",
  "bg-orange-200 dark:bg-orange-900/40",
  "bg-indigo-200 dark:bg-indigo-900/40",
  "bg-cyan-200 dark:bg-cyan-900/40",
  "bg-lime-200 dark:bg-lime-900/40",
  "bg-rose-200 dark:bg-rose-900/40",
];

const _ROWS = [
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
];

export default function Page() {
  return (
    <div className="[--header-height:calc(--spacing(14))]">
      <SidebarProvider className="flex flex-col">
        <SiteHeader />
        <div className="flex flex-1">
          <AppSidebar />
          <SidebarInset>
            {_ROWS.map((rowId, index) => (
              <div key={rowId} className="grid gap-4 md:grid-cols-2">
                <div
                  className={`${_COLORS[index % _COLORS.length]} h-32 rounded-xl`}
                />
                <div
                  className={`${_COLORS[(index + 6) % _COLORS.length]} h-32 rounded-xl`}
                />
              </div>
            ))}
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}
