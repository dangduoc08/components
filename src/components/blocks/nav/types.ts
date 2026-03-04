import type { LucideIcon } from "lucide-react";

export type TNavSubItem = {
  title: string;
  titleKey?: string;
  url: string;
};

export type TNavItem = {
  title: string;
  titleKey?: string;
  url: string;
  icon?: LucideIcon;
  isActive?: boolean;
  items?: TNavSubItem[];
};

export type TNavGroup = {
  order: number;
  [label: string]: TNavItem[] | number;
};
