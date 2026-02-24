import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  BadgeCheckIcon,
  BookmarkIcon,
  Loader2Icon,
  SparklesIcon,
  Trash2Icon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const meta = {
  title: "UI/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["default", "secondary", "destructive", "outline"],
    },
  },
  args: {
    variant: "default",
    children: "Badge",
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
};

export const WithIconStart: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge variant="default">
        <BadgeCheckIcon />
        Verified
      </Badge>
      <Badge variant="outline">
        <BookmarkIcon />
        Bookmark
      </Badge>
    </div>
  ),
};

export const WithIconEnd: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge variant="default">
        Verified
        <BadgeCheckIcon />
      </Badge>
      <Badge variant="outline">
        Bookmark
        <BookmarkIcon />
      </Badge>
    </div>
  ),
};

export const WithSpinner: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge variant="destructive">
        <Trash2Icon />
        Deleting
      </Badge>
      <Badge variant="secondary">
        <SparklesIcon />
        Generating
      </Badge>
      <Badge variant="outline">
        <Loader2Icon className="animate-spin" />
        Loading
      </Badge>
    </div>
  ),
};

export const AsLink: Story = {
  render: () => (
    <Badge asChild variant="outline">
      <a href="/example">Link Badge</a>
    </Badge>
  ),
};

export const CustomColors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge className="bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900 dark:text-blue-300 dark:border-blue-800">
        Blue
      </Badge>
      <Badge className="bg-green-100 text-green-700 border-green-200 dark:bg-green-900 dark:text-green-300 dark:border-green-800">
        Green
      </Badge>
      <Badge className="bg-sky-100 text-sky-700 border-sky-200 dark:bg-sky-900 dark:text-sky-300 dark:border-sky-800">
        Sky
      </Badge>
      <Badge className="bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900 dark:text-purple-300 dark:border-purple-800">
        Purple
      </Badge>
      <Badge className="bg-red-100 text-red-700 border-red-200 dark:bg-red-900 dark:text-red-300 dark:border-red-800">
        Red
      </Badge>
    </div>
  ),
};
