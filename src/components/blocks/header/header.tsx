"use client";

import { Settings, SidebarIcon } from "lucide-react";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { useSidebar } from "@/components/ui/sidebar";
import { Small } from "@/components/ui/typography";
import { useBreadcrumbs } from "@/hooks/use-breadcrumbs";
import { cn } from "@/lib/utils";
import { HeaderSearch } from "./header-search";

const BREADCRUMB_COLLAPSE_THRESHOLD = 3;

interface IHeaderProps {
  avatarSrc?: string;
  userName: string;
}

export function Header({ avatarSrc, userName }: IHeaderProps) {
  const { toggleSidebar } = useSidebar();
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const breadcrumbs = useBreadcrumbs();

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

  const shouldCollapse = breadcrumbs.length > BREADCRUMB_COLLAPSE_THRESHOLD;
  const firstItem = breadcrumbs[0];
  const lastItem = breadcrumbs[breadcrumbs.length - 1];
  const secondToLastItem = breadcrumbs[breadcrumbs.length - 2];
  const collapsedItems = breadcrumbs.slice(1, -2);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 flex flex-col w-full border-b bg-background transition-all duration-300 ease-in-out",
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
            {shouldCollapse ? (
              <>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href={firstItem.href}>
                      <Small>{firstItem.label}</Small>
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1">
                      <BreadcrumbEllipsis />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      {collapsedItems.map(({ label, href }) => (
                        <DropdownMenuItem key={href} asChild>
                          <Link href={href}>
                            <Small>{label}</Small>
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href={secondToLastItem.href}>
                      <Small>{secondToLastItem.label}</Small>
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>
                    <Small>{lastItem.label}</Small>
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </>
            ) : (
              breadcrumbs.map(({ label, href, isLast }, index) => (
                <Fragment key={href}>
                  {index > 0 && <BreadcrumbSeparator />}
                  <BreadcrumbItem>
                    {isLast ? (
                      <BreadcrumbPage>
                        <Small>{label}</Small>
                      </BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink asChild>
                        <Link href={href}>
                          <Small>{label}</Small>
                        </Link>
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                </Fragment>
              ))
            )}
          </BreadcrumbList>
        </Breadcrumb>
        <div className="ml-auto flex items-center gap-2">
          <HeaderSearch />
          <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
            <Link href="/settings">
              <Settings className="size-4" />
            </Link>
          </Button>
          <Avatar size="default">
            <AvatarImage src={avatarSrc} alt={userName} />
            <AvatarFallback name={userName} />
          </Avatar>
        </div>
      </div>
      <Separator
        className={cn(
          "transition-opacity duration-300",
          isScrolled ? "opacity-0" : "opacity-100",
        )}
      />
    </header>
  );
}
