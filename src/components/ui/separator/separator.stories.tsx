import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Separator } from "@/components/ui/separator";

const meta = {
  title: "UI/Separator",
  component: Separator,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Separator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: () => (
    <div className="w-64">
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-muted-foreground text-sm">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center gap-4 text-sm">
        <span>Blog</span>
        <Separator orientation="vertical" />
        <span>Docs</span>
        <Separator orientation="vertical" />
        <span>Source</span>
      </div>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-10 items-center gap-4 text-sm">
      <span>Settings</span>
      <Separator orientation="vertical" />
      <span>Account</span>
      <Separator orientation="vertical" />
      <span>Help</span>
    </div>
  ),
};

export const WithContent: Story = {
  render: () => (
    <div className="w-64">
      <div className="flex items-center justify-between py-3">
        <span className="text-sm font-medium">Item 1</span>
        <span className="text-muted-foreground text-sm">Value 1</span>
      </div>
      <Separator />
      <div className="flex items-center justify-between py-3">
        <span className="text-sm font-medium">Item 2</span>
        <span className="text-muted-foreground text-sm">Value 2</span>
      </div>
      <Separator />
      <div className="flex items-center justify-between py-3">
        <span className="text-sm font-medium">Item 3</span>
        <span className="text-muted-foreground text-sm">Value 3</span>
      </div>
    </div>
  ),
};

export const InMenu: Story = {
  render: () => (
    <div className="w-48 rounded-md border p-1">
      <div className="hover:bg-muted flex cursor-pointer items-center justify-between rounded-sm px-2 py-1.5 text-sm">
        <span>New File</span>
        <span className="text-muted-foreground text-xs">⌘N</span>
      </div>
      <div className="hover:bg-muted flex cursor-pointer items-center justify-between rounded-sm px-2 py-1.5 text-sm">
        <span>Open...</span>
        <span className="text-muted-foreground text-xs">⌘O</span>
      </div>
      <Separator className="my-1" />
      <div className="hover:bg-muted flex cursor-pointer items-center justify-between rounded-sm px-2 py-1.5 text-sm">
        <span>Save</span>
        <span className="text-muted-foreground text-xs">⌘S</span>
      </div>
      <div className="hover:bg-muted flex cursor-pointer items-center justify-between rounded-sm px-2 py-1.5 text-sm">
        <span>Save As...</span>
        <span className="text-muted-foreground text-xs">⇧⌘S</span>
      </div>
      <Separator className="my-1" />
      <div className="hover:bg-muted flex cursor-pointer items-center justify-between rounded-sm px-2 py-1.5 text-sm">
        <span>Close</span>
        <span className="text-muted-foreground text-xs">⌘W</span>
      </div>
    </div>
  ),
};
