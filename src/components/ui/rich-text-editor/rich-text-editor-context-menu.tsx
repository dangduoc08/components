"use client";

import { contextMenuExtension } from "@lexkit/editor";
import type React from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

function ShadcnContextMenuRenderer(props: {
  items: any[];
  position: { x: number; y: number };
  onClose: () => void;
  className: string;
  style?: React.CSSProperties;
  itemClassName: string;
  itemStyle?: React.CSSProperties;
  disabledItemClassName: string;
  disabledItemStyle?: React.CSSProperties;
}) {
  const { items, position, onClose } = props;

  return createPortal(
    <div
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        props.className,
      )}
      style={{
        position: "fixed",
        left: position.x,
        top: position.y,
        zIndex: 9999,
        ...props.style,
      }}
      role="menu"
      onClick={(e) => e.stopPropagation()}
      onKeyDown={(e) => {
        if (e.key === "Escape") onClose();
      }}
      onContextMenu={(e) => e.preventDefault()}
    >
      {items.map((item: any) => (
        <button
          type="button"
          key={item.label ?? item.id}
          className={cn(
            "relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            item.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
            item.disabled ? props.disabledItemClassName : props.itemClassName,
          )}
          style={item.disabled ? props.disabledItemStyle : props.itemStyle}
          onClick={() => {
            if (!item.disabled && item.action) {
              item.action();
              onClose();
            }
          }}
        >
          {item.icon && <item.icon className="mr-2 h-4 w-4" />}
          {item.label}
        </button>
      ))}
    </div>,
    document.body,
  );
}

export const shadcnContextMenuExtension = contextMenuExtension.configure({
  defaultRenderer: ShadcnContextMenuRenderer,
  preventDefault: true,
  theme: {
    container:
      "lexkit-context-menu z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
    item: "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground",
    itemDisabled: "opacity-50 cursor-not-allowed pointer-events-none",
  },
});
