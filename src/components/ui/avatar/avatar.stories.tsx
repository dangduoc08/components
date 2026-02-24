import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { UsersIcon, WifiIcon } from "lucide-react";
import type { TAvatarSize } from "@/components/ui/avatar";
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const PLACEHOLDER_SRC = "https://github.com/shadcn.png";

interface IAvatarStoryProps {
  size?: TAvatarSize;
  fallback?: string;
  src?: string;
}

function AvatarDemo({
  size,
  fallback = "John Doe",
  src = PLACEHOLDER_SRC,
}: IAvatarStoryProps) {
  return (
    <Avatar size={size}>
      <AvatarImage src={src} alt={fallback} />
      <AvatarFallback name={fallback} />
    </Avatar>
  );
}

const meta = {
  title: "UI/Avatar",
  component: AvatarDemo,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "radio",
      options: ["sm", "default", "lg"],
    },
    fallback: {
      control: "text",
    },
    src: {
      control: "text",
    },
  },
  args: {
    size: "default",
    fallback: "John Doe",
    src: PLACEHOLDER_SRC,
  },
} satisfies Meta<typeof AvatarDemo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FallbackOnly: Story = {
  args: {
    src: "",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <Avatar size="sm">
        <AvatarImage src={PLACEHOLDER_SRC} alt="User" />
        <AvatarFallback name="John Doe" />
      </Avatar>
      <Avatar size="default">
        <AvatarImage src={PLACEHOLDER_SRC} alt="User" />
        <AvatarFallback name="John Doe" />
      </Avatar>
      <Avatar size="lg">
        <AvatarImage src={PLACEHOLDER_SRC} alt="User" />
        <AvatarFallback name="John Doe" />
      </Avatar>
    </div>
  ),
};

export const WithBadge: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src={PLACEHOLDER_SRC} alt="User" />
      <AvatarFallback name="John Doe" />
      <AvatarBadge className="bg-green-600" />
    </Avatar>
  ),
};

export const BadgeWithIcon: Story = {
  render: () => (
    <Avatar size="lg">
      <AvatarImage src={PLACEHOLDER_SRC} alt="User" />
      <AvatarFallback name="John Doe" />
      <AvatarBadge className="bg-green-600">
        <WifiIcon />
      </AvatarBadge>
    </Avatar>
  ),
};

export const Group: Story = {
  render: () => (
    <AvatarGroup>
      <Avatar>
        <AvatarImage src={PLACEHOLDER_SRC} alt="User 1" />
        <AvatarFallback name="Nguyễn Văn An" />
      </Avatar>
      <Avatar>
        <AvatarFallback name="John Doe" />
      </Avatar>
      <Avatar>
        <AvatarFallback name="Alice Brown" />
      </Avatar>
    </AvatarGroup>
  ),
};

export const GroupWithCount: Story = {
  render: () => (
    <AvatarGroup>
      <Avatar>
        <AvatarImage src={PLACEHOLDER_SRC} alt="User 1" />
        <AvatarFallback name="Nguyễn Văn An" />
      </Avatar>
      <Avatar>
        <AvatarFallback name="John Doe" />
      </Avatar>
      <Avatar>
        <AvatarFallback name="Alice Brown" />
      </Avatar>
      <AvatarGroupCount>+3</AvatarGroupCount>
    </AvatarGroup>
  ),
};

export const GroupWithIcon: Story = {
  render: () => (
    <AvatarGroup>
      <Avatar>
        <AvatarImage src={PLACEHOLDER_SRC} alt="User 1" />
        <AvatarFallback name="Nguyễn Văn An" />
      </Avatar>
      <Avatar>
        <AvatarFallback name="John Doe" />
      </Avatar>
      <Avatar>
        <AvatarFallback name="Alice Brown" />
      </Avatar>
      <AvatarGroupCount>
        <UsersIcon />
      </AvatarGroupCount>
    </AvatarGroup>
  ),
};

export const GroupSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <AvatarGroup>
        <Avatar size="sm">
          <AvatarImage src={PLACEHOLDER_SRC} alt="User" />
          <AvatarFallback name="Nguyễn Văn An" />
        </Avatar>
        <Avatar size="sm">
          <AvatarFallback name="John Doe" />
        </Avatar>
        <AvatarGroupCount>+3</AvatarGroupCount>
      </AvatarGroup>

      <AvatarGroup>
        <Avatar size="default">
          <AvatarImage src={PLACEHOLDER_SRC} alt="User" />
          <AvatarFallback name="Nguyễn Văn An" />
        </Avatar>
        <Avatar size="default">
          <AvatarFallback name="John Doe" />
        </Avatar>
        <AvatarGroupCount>+3</AvatarGroupCount>
      </AvatarGroup>

      <AvatarGroup>
        <Avatar size="lg">
          <AvatarImage src={PLACEHOLDER_SRC} alt="User" />
          <AvatarFallback name="Nguyễn Văn An" />
        </Avatar>
        <Avatar size="lg">
          <AvatarFallback name="John Doe" />
        </Avatar>
        <AvatarGroupCount>+3</AvatarGroupCount>
      </AvatarGroup>
    </div>
  ),
};

export const DropdownTrigger: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage src={PLACEHOLDER_SRC} alt="User" />
          <AvatarFallback name="John Doe" />
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">Sign out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};
