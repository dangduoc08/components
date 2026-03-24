"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Briefcase,
  Calculator,
  Calendar,
  CreditCard,
  FileText,
  FolderOpen,
  Image,
  LayoutDashboard,
  LogOut,
  Mail,
  Music,
  PlusCircle,
  Settings,
  Smile,
  Star,
  Tag,
  User,
  Video,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Small } from "@/components/ui/typography";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "./index";

const meta = {
  title: "UI/Command",
  component: Command,
  parameters: { layout: "centered" },
} satisfies Meta<typeof Command>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Command className="w-md rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <Calendar />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <Smile />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem disabled>
            <Calculator />
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <User />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

export const WithDialog: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
          e.preventDefault();
          setIsOpen((prev) => !prev);
        }
      };
      document.addEventListener("keydown", onKeyDown);
      return () => document.removeEventListener("keydown", onKeyDown);
    }, []);

    return (
      <div className="flex flex-col items-center gap-4">
        <Small className="text-muted-foreground">
          Press{" "}
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
            <span className="text-xs">⌘</span>K
          </kbd>{" "}
          to open
        </Small>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="rounded-md border px-4 py-2 text-sm hover:bg-muted"
        >
          Open Command Palette
        </button>
        <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
          <Command>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Pages">
                <CommandItem onSelect={() => setIsOpen(false)}>
                  <LayoutDashboard />
                  <span>Dashboard</span>
                </CommandItem>
                <CommandItem onSelect={() => setIsOpen(false)}>
                  <Briefcase />
                  <span>Jobs</span>
                  <CommandShortcut>⌘J</CommandShortcut>
                </CommandItem>
                <CommandItem onSelect={() => setIsOpen(false)}>
                  <Settings />
                  <span>Settings</span>
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Actions">
                <CommandItem onSelect={() => setIsOpen(false)}>
                  <PlusCircle />
                  <span>New Job Posting</span>
                </CommandItem>
                <CommandItem onSelect={() => setIsOpen(false)}>
                  <LogOut />
                  <span>Log Out</span>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </CommandDialog>
      </div>
    );
  },
};

export const Scrollable: Story = {
  render: () => (
    <Command className="w-md rounded-lg border shadow-md">
      <CommandInput placeholder="Search files..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Documents">
          <CommandItem>
            <FileText />
            <span>Resume.pdf</span>
          </CommandItem>
          <CommandItem>
            <FileText />
            <span>Cover Letter.docx</span>
          </CommandItem>
          <CommandItem>
            <FileText />
            <span>Project Proposal.pdf</span>
          </CommandItem>
          <CommandItem>
            <FileText />
            <span>Meeting Notes.txt</span>
          </CommandItem>
          <CommandItem>
            <FileText />
            <span>Budget Report.xlsx</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Media">
          <CommandItem>
            <Image />
            <span>Screenshot 2024.png</span>
          </CommandItem>
          <CommandItem>
            <Image />
            <span>Profile Photo.jpg</span>
          </CommandItem>
          <CommandItem>
            <Video />
            <span>Demo Recording.mp4</span>
          </CommandItem>
          <CommandItem>
            <Music />
            <span>Podcast Episode.mp3</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Folders">
          <CommandItem>
            <FolderOpen />
            <span>Projects</span>
          </CommandItem>
          <CommandItem>
            <FolderOpen />
            <span>Archive</span>
          </CommandItem>
          <CommandItem>
            <FolderOpen />
            <span>Shared with me</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Command className="w-md rounded-lg border shadow-md">
      <CommandInput placeholder="Search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Quick Actions">
          <CommandItem>
            <Mail />
            <span>Send Email</span>
            <CommandShortcut>⌘E</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Star />
            <span>Add to Favourites</span>
            <CommandShortcut>⌘D</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Tag />
            <span>Add Tag</span>
            <CommandShortcut>⌘T</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <User />
            <span>Assign to User</span>
            <CommandShortcut>⌘U</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

export const Empty: Story = {
  render: () => (
    <Command className="w-md rounded-lg border shadow-md">
      <CommandInput placeholder="Search..." defaultValue="xyzabc" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Items">
          <CommandItem>
            <Calendar />
            <span>Calendar</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};
