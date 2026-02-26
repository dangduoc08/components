import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const meta = {
  title: "UI/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    disabled: {
      control: "boolean",
    },
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "search", "tel", "url"],
    },
  },
  args: {
    disabled: false,
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor="input-email">Email</Label>
      <Input id="input-email" type="email" placeholder="Enter your email" />
    </div>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor="input-username">Username</Label>
      <Input id="input-username" placeholder="johndoe" />
      <p className="text-muted-foreground text-sm">
        This is your public display name.
      </p>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    placeholder: "Disabled input",
    disabled: true,
  },
};

export const Password: Story = {
  render: () => (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor="input-password">Password</Label>
      <Input
        id="input-password"
        type="password"
        placeholder="Enter your password"
      />
    </div>
  ),
};

export const File: Story = {
  render: () => (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor="input-file">Upload file</Label>
      <Input id="input-file" type="file" />
    </div>
  ),
};

export const WithButton: Story = {
  render: () => (
    <div className="flex gap-2">
      <Input placeholder="Search..." className="w-64" />
      <Button>
        <SearchIcon />
        Search
      </Button>
    </div>
  ),
};

export const Form: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="form-name">Full Name</Label>
        <Input id="form-name" placeholder="John Doe" />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="form-email">Email</Label>
        <Input id="form-email" type="email" placeholder="john@example.com" />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="form-password">Password</Label>
        <Input id="form-password" type="password" />
      </div>
      <Button className="w-full">Submit</Button>
    </div>
  ),
};
