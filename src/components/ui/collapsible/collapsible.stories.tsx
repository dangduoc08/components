"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ChevronDownIcon, FileIcon, FolderIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

const meta = {
  title: "UI/Collapsible",
  component: Collapsible,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Collapsible>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Collapsible className="w-80 space-y-2">
      <CollapsibleTrigger asChild>
        <Button variant="ghost" className="w-full justify-between">
          Can I use this in my project?
          <ChevronDownIcon className="size-4 transition-transform in-data-[state=open]:rotate-180" />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="text-muted-foreground px-1 text-sm">
        Yes. Free to use for personal and commercial projects. No attribution
        required.
      </CollapsibleContent>
    </Collapsible>
  ),
};

export const DefaultOpen: Story = {
  render: () => (
    <Collapsible defaultOpen className="w-80 space-y-2">
      <CollapsibleTrigger asChild>
        <Button variant="ghost" className="w-full justify-between">
          Opened by default
          <ChevronDownIcon className="size-4 transition-transform in-data-[state=open]:rotate-180" />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="text-muted-foreground px-1 text-sm">
        This collapsible is open on first render using the{" "}
        <code className="bg-muted rounded px-1">defaultOpen</code> prop.
      </CollapsibleContent>
    </Collapsible>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="flex w-80 flex-col gap-3">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium">Starred repositories</p>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? "Collapse" : "Expand"}
          </Button>
        </div>
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <div className="border-border rounded-lg border px-4 py-3 text-sm font-mono">
            @shadcn/ui
          </div>
          <CollapsibleContent className="space-y-2 pt-2">
            <div className="border-border rounded-lg border px-4 py-3 text-sm font-mono">
              @radix-ui/react-collapsible
            </div>
            <div className="border-border rounded-lg border px-4 py-3 text-sm font-mono">
              @radix-ui/react-dialog
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    );
  },
};

export const FAQ: Story = {
  render: () => {
    const items = [
      {
        id: "free",
        question: "Is it free to use?",
        answer:
          "Yes. Free to use for personal and commercial projects. No attribution required.",
      },
      {
        id: "framework",
        question: "Which frameworks are supported?",
        answer:
          "Next.js, Remix, Astro, and any other React-based framework. Components are built with Tailwind CSS and Radix UI.",
      },
      {
        id: "customize",
        question: "Can I customize the components?",
        answer:
          "Yes. The source code is copied into your project, so you have full control over the styling and behavior.",
      },
    ];

    return (
      <div className="w-96 space-y-2">
        {items.map(({ id, question, answer }) => (
          <Collapsible key={id}>
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className="h-auto w-full justify-between py-3 text-left font-medium"
              >
                {question}
                <ChevronDownIcon className="size-4 shrink-0 transition-transform in-data-[state=open]:rotate-180" />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="text-muted-foreground px-1 pb-3 text-sm">
              {answer}
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    );
  },
};

export const FileTree: Story = {
  render: () => {
    const FileTreeItem = ({
      name,
      children,
    }: {
      name: string;
      children?: React.ReactNode;
    }) => {
      const [isOpen, setIsOpen] = useState(false);

      return (
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger className="flex w-full cursor-pointer items-center gap-1.5 rounded px-2 py-1 text-sm hover:bg-muted">
            <ChevronDownIcon
              className={cn(
                "size-3.5 shrink-0 transition-transform",
                !isOpen && "-rotate-90",
              )}
            />
            <FolderIcon className="text-primary size-4 shrink-0" />
            {name}
          </CollapsibleTrigger>
          <CollapsibleContent className="ml-4 border-l pl-2">
            {children}
          </CollapsibleContent>
        </Collapsible>
      );
    };

    const FileItem = ({ name }: { name: string }) => (
      <div className="flex items-center gap-1.5 rounded px-2 py-1 text-sm hover:bg-muted">
        <span className="size-3.5 shrink-0" />
        <FileIcon className="text-muted-foreground size-4 shrink-0" />
        {name}
      </div>
    );

    return (
      <div className="w-64 rounded-lg border p-2">
        <FileTreeItem name="src">
          <FileTreeItem name="components">
            <FileItem name="button.tsx" />
            <FileItem name="card.tsx" />
          </FileTreeItem>
          <FileTreeItem name="hooks">
            <FileItem name="use-theme.ts" />
          </FileTreeItem>
          <FileItem name="app.tsx" />
          <FileItem name="main.tsx" />
        </FileTreeItem>
        <FileTreeItem name="public">
          <FileItem name="favicon.ico" />
        </FileTreeItem>
        <FileItem name="package.json" />
        <FileItem name="tsconfig.json" />
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <Collapsible disabled className="w-80 space-y-2">
      <CollapsibleTrigger asChild>
        <Button variant="ghost" className="w-full justify-between" disabled>
          Disabled collapsible
          <ChevronDownIcon className="size-4" />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="text-muted-foreground px-1 text-sm">
        This content is not accessible.
      </CollapsibleContent>
    </Collapsible>
  ),
};
