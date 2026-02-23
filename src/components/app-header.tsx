"use client";

import { Search, Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function AppHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-14 shrink-0 items-center gap-3 border-b border-border/40 bg-background/95 px-4 backdrop-blur transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
      <SidebarTrigger className="-ml-1 text-muted-foreground hover:text-foreground" />

      <div className="flex flex-1 items-center gap-1.5 rounded-full bg-muted/50 px-3 py-1.5 max-w-xs text-sm text-muted-foreground transition-colors hover:bg-muted/70 focus-within:bg-muted/70 cursor-text">
        <Search className="size-3.5 shrink-0" />
        <input
          placeholder="Search..."
          className="flex-1 bg-transparent outline-none placeholder:text-muted-foreground/70 min-w-0"
        />
      </div>

      <div className="ml-auto flex items-center gap-0.5">
        <Button
          variant="ghost"
          size="icon"
          className="size-8 text-muted-foreground hover:text-foreground"
        >
          <Settings className="size-4" />
          <span className="sr-only">Settings</span>
        </Button>
        <Avatar className="size-7 cursor-pointer rounded-full ml-1">
          <AvatarImage src="/avatars/shadcn.jpg" alt="User" />
          <AvatarFallback className="rounded-full text-xs">CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
