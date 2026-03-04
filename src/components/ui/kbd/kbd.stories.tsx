import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const meta = {
  title: "UI/Kbd",
  component: Kbd,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Kbd>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Kbd>Ctrl</Kbd>,
};

export const Grouped: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <Kbd>B</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>Shift</Kbd>
        <Kbd>Alt</Kbd>
        <Kbd>P</Kbd>
      </KbdGroup>
    </div>
  ),
};

export const WithButton: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Button variant="outline" className="justify-between gap-8">
        <span className="flex items-center gap-2">
          <SearchIcon className="size-4" />
          Search...
        </span>
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      </Button>
      <Button variant="outline" className="justify-between gap-8">
        New file
        <KbdGroup>
          <Kbd>Ctrl</Kbd>
          <Kbd>N</Kbd>
        </KbdGroup>
      </Button>
    </div>
  ),
};

export const WithTooltip: Story = {
  render: () => (
    <div className="flex gap-3">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <SearchIcon />
          </Button>
        </TooltipTrigger>
        <TooltipContent className="flex items-center gap-2">
          <span>Search</span>
          <KbdGroup>
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
          </KbdGroup>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};
