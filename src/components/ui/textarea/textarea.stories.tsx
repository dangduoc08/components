import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Muted, Small } from "@/components/ui/typography";

import { Textarea } from "./textarea";

const meta = {
  title: "UI/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    disabled: {
      control: "boolean",
    },
  },
  args: {
    disabled: false,
  },
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Type your message here.",
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-80 gap-3">
      <Label htmlFor="textarea-label">Your message</Label>
      <Textarea
        id="textarea-label"
        placeholder="Type your message here."
        rows={6}
      />
    </div>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <div className="grid w-80 gap-3">
      <Label htmlFor="textarea-description">Your Message</Label>
      <Textarea
        id="textarea-description"
        placeholder="Type your message here."
      />
      <Muted>Your message will be copied to the support team.</Muted>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    placeholder: "Type your message here.",
    disabled: true,
  },
};

export const Invalid: Story = {
  args: {
    placeholder: "Type your message here.",
    "aria-invalid": true,
  },
};

export const WithButton: Story = {
  render: () => (
    <div className="grid w-80 gap-2">
      <Textarea placeholder="Type your message here." />
      <Button>
        <Small>Send message</Small>
      </Button>
    </div>
  ),
};
