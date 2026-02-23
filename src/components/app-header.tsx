"use client";

import { Bell, Search, Settings, Star, Users } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function AppHeader() {
  const t = useTranslations("header");
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function findScrollParent(
      element: HTMLElement | null,
    ): HTMLElement | Window {
      let current = element?.parentElement;
      while (current) {
        const { overflow, overflowY } = getComputedStyle(current);
        if (/(auto|scroll)/.test(overflow + overflowY)) {
          return current;
        }
        current = current.parentElement;
      }
      return window;
    }

    const scrollTarget = findScrollParent(headerRef.current);

    function handleScroll() {
      const scrollTop =
        scrollTarget instanceof Window
          ? scrollTarget.scrollY
          : scrollTarget.scrollTop;
      setIsScrolled(scrollTop > 8);
    }

    scrollTarget.addEventListener("scroll", handleScroll, { passive: true });
    return () => scrollTarget.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-10 flex h-14 shrink-0 items-center justify-between gap-3 border-b px-4 transition-all duration-300 ease-in-out group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 ${
        isScrolled
          ? "border-border/40 bg-background/70 shadow-md backdrop-blur-xl saturate-150"
          : "border-transparent bg-background shadow-none backdrop-blur-none"
      }`}
    >
      <div className="flex items-center gap-2">
        <SidebarTrigger className="-ml-1 text-muted-foreground hover:text-foreground" />

        {/* Command palette trigger */}
        <button
          type="button"
          className="flex h-8 items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-3 text-sm text-muted-foreground transition-colors hover:bg-muted/70 hover:text-foreground"
        >
          <Search className="size-3.5 shrink-0" />
          <kbd className="pointer-events-none hidden text-xs text-muted-foreground/60 sm:inline-flex">
            <span className="mr-0.5">⌘</span>K
          </kbd>
        </button>
      </div>

      <div className="flex items-center gap-0.5">
        {/* Starred */}
        <Button
          variant="ghost"
          size="icon"
          className="size-8 text-muted-foreground hover:text-foreground"
        >
          <Star className="size-4 fill-amber-400 text-amber-400" />
          <span className="sr-only">{t("starred")}</span>
        </Button>

        {/* Notifications */}
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="size-8 text-muted-foreground hover:text-foreground"
          >
            <Bell className="size-4" />
            <span className="sr-only">{t("notifications")}</span>
          </Button>
          <span className="absolute right-1 top-1 flex size-4 items-center justify-center rounded-full bg-orange-500 text-[10px] font-medium leading-none text-white">
            4
          </span>
        </div>

        {/* Team */}
        <Button
          variant="ghost"
          size="icon"
          className="size-8 text-muted-foreground hover:text-foreground"
        >
          <Users className="size-4" />
          <span className="sr-only">{t("team")}</span>
        </Button>

        {/* Settings */}
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="size-8 text-muted-foreground hover:text-foreground"
          >
            <Settings className="size-4" />
            <span className="sr-only">{t("settings")}</span>
          </Button>
          <span className="absolute right-1.5 top-1.5 size-1.5 rounded-full bg-red-500" />
        </div>

        {/* User avatar */}
        <Avatar className="ml-1 size-7 cursor-pointer rounded-full">
          <AvatarImage src="/avatars/shadcn.jpg" alt="User" />
          <AvatarFallback className="rounded-full text-xs">CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
