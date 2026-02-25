import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  ArrowRightIcon,
  ArrowUpIcon,
  DownloadIcon,
  GitBranchIcon,
  Loader2Icon,
  PlusIcon,
  Trash2Icon,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "radio",
      options: [
        "default",
        "outline",
        "secondary",
        "ghost",
        "destructive",
        "link",
      ],
    },
    size: {
      control: "radio",
      options: [
        "default",
        "xs",
        "sm",
        "lg",
        "icon",
        "icon-xs",
        "icon-sm",
        "icon-lg",
      ],
    },
    disabled: {
      control: "boolean",
    },
  },
  args: {
    variant: "default",
    size: "default",
    children: "Button",
    disabled: false,
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button variant="default">Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const WithIconStart: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button variant="default">
        <GitBranchIcon data-icon="inline-start" />
        New Branch
      </Button>
      <Button variant="outline">
        <DownloadIcon data-icon="inline-start" />
        Download
      </Button>
      <Button variant="destructive">
        <Trash2Icon data-icon="inline-start" />
        Delete
      </Button>
    </div>
  ),
};

export const WithIconEnd: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button variant="default">
        Continue
        <ArrowRightIcon data-icon="inline-end" />
      </Button>
      <Button variant="outline">
        Download
        <DownloadIcon data-icon="inline-end" />
      </Button>
    </div>
  ),
};

export const IconOnly: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="default" size="icon-xs">
        <PlusIcon />
      </Button>
      <Button variant="outline" size="icon-sm">
        <PlusIcon />
      </Button>
      <Button variant="secondary" size="icon">
        <PlusIcon />
      </Button>
      <Button variant="ghost" size="icon-lg">
        <PlusIcon />
      </Button>
    </div>
  ),
};

export const Rounded: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button className="rounded-full">
        <ArrowUpIcon data-icon="inline-start" />
        Submit
      </Button>
      <Button variant="outline" className="rounded-full">
        <PlusIcon data-icon="inline-start" />
        Add
      </Button>
      <Button size="icon" className="rounded-full">
        <ArrowUpIcon />
      </Button>
    </div>
  ),
};

export const Loading: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button disabled>
        <Loader2Icon data-icon="inline-start" className="animate-spin" />
        Generating
      </Button>
      <Button variant="outline" disabled>
        <Loader2Icon data-icon="inline-start" className="animate-spin" />
        Saving
      </Button>
      <Button variant="destructive" disabled>
        <Loader2Icon data-icon="inline-start" className="animate-spin" />
        Deleting
      </Button>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button variant="default" disabled>
        Default
      </Button>
      <Button variant="outline" disabled>
        Outline
      </Button>
      <Button variant="secondary" disabled>
        Secondary
      </Button>
      <Button variant="ghost" disabled>
        Ghost
      </Button>
      <Button variant="destructive" disabled>
        Destructive
      </Button>
      <Button variant="link" disabled>
        Link
      </Button>
    </div>
  ),
};

export const AsLink: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button asChild>
        <Link href="/login">Login</Link>
      </Button>
      <Button asChild variant="outline">
        <Link href="/register">Register</Link>
      </Button>
    </div>
  ),
};
