"use client";

import { SidebarIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useSidebar } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { SearchForm } from "./search-form";

export function SiteHeader() {
  const { toggleSidebar } = useSidebar();
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
      className={cn(
        "sticky top-0 z-50 flex w-full items-center border-b bg-background transition-all duration-300 ease-in-out",
        isScrolled
          ? "border-border/40 bg-background/70 shadow-md backdrop-blur-xl saturate-150"
          : "border-transparent shadow-none backdrop-blur-none",
      )}
    >
      <div className="flex h-(--header-height) w-full items-center gap-2 px-4">
        <Button
          className="h-8 w-8"
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
        >
          <SidebarIcon />
        </Button>
        <Separator orientation="vertical" />
        <Breadcrumb className="hidden sm:block">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Build Your Application</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Data Fetching</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <SearchForm className="w-full sm:ml-auto sm:w-auto" />
      </div>
    </header>
  );
}
