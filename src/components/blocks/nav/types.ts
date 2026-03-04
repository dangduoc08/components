import type { LucideIcon } from "lucide-react";

export type TNavSubItem = {
  title: string;
  url: string;
};

export type TNavItem = {
  title: string;
  url?: string;
  icon?: LucideIcon;
  defaultOpen?: boolean;
  items?: TNavSubItem[];
};

export type TNavGroup = {
  order: number;
  title: string;
  items: TNavItem[];
};
