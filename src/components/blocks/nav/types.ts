import type { LucideIcon } from "lucide-react";

export type TNavSubItem = {
  title: string;
  url: string;
};

export type TNavLinkItem = {
  type?: "link";
  title: string;
  url?: string;
  icon?: LucideIcon;
  isDefaultOpen?: boolean;
  items?: TNavSubItem[];
};

export type TNavCheckboxItem = {
  type: "checkbox";
  title: string;
  icon?: LucideIcon;
  isChecked?: boolean;
  onCheckedChange?: (isChecked: boolean) => void;
};

export type TNavItem = TNavLinkItem | TNavCheckboxItem;

export type TNavGroup = {
  order: number;
  title: string;
  items: TNavItem[];
};
