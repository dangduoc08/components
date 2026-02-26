import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { BoldIcon, InfoIcon, ItalicIcon, UnderlineIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const meta = {
  title: "UI/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const Sides: Story = {
  render: () => (
    <div className="flex gap-4">
      {(["top", "right", "bottom", "left"] as const).map((side) => (
        <Tooltip key={side}>
          <TooltipTrigger asChild>
            <Button variant="outline" className="w-24 capitalize">
              {side}
            </Button>
          </TooltipTrigger>
          <TooltipContent side={side}>
            <p>Tooltip on {side}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div className="flex gap-2">
      {[
        { icon: BoldIcon, label: "Bold (⌘B)" },
        { icon: ItalicIcon, label: "Italic (⌘I)" },
        { icon: UnderlineIcon, label: "Underline (⌘U)" },
      ].map(({ icon: Icon, label }) => (
        <Tooltip key={label}>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon">
              <Icon />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{label}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  ),
};

export const OnDisabledButton: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <span>
          <Button disabled>
            <InfoIcon />
            Disabled
          </Button>
        </span>
      </TooltipTrigger>
      <TooltipContent>
        <p>This action is not available</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const WithDelay: Story = {
  render: () => (
    <div className="flex gap-4">
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <Button variant="outline">No delay</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Appears instantly</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip delayDuration={700}>
        <TooltipTrigger asChild>
          <Button variant="outline">700ms delay</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Appears after 700ms</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};
