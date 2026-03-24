import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Italic,
  Underline,
} from "lucide-react";
import { Toggle } from "./toggle";

const meta = {
  title: "UI/Toggle",
  component: Toggle,
  parameters: { layout: "centered" },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline"],
    },
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
    },
    disabled: { control: "boolean" },
    pressed: { control: "boolean" },
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Toggle",
    variant: "default",
    size: "default",
  },
};

export const Pressed: Story = {
  args: {
    defaultPressed: true,
    children: (
      <>
        <Bold />
        Bold
      </>
    ),
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: <Bold />,
  },
};

export const WithText: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Toggle>
        <Italic />
        Italic
      </Toggle>
      <Toggle variant="outline">
        <Bold />
        Bold
      </Toggle>
      <Toggle variant="outline">
        <Underline />
        Underline
      </Toggle>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Toggle size="sm">
        <Bold />
      </Toggle>
      <Toggle size="default">
        <Bold />
      </Toggle>
      <Toggle size="lg">
        <Bold />
      </Toggle>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Toggle disabled>
        <Italic />
        Italic
      </Toggle>
      <Toggle disabled defaultPressed>
        <Bold />
        Bold
      </Toggle>
    </div>
  ),
};

export const Formatting: Story = {
  render: () => (
    <div className="flex items-center gap-1">
      <Toggle aria-label="Bold">
        <Bold />
      </Toggle>
      <Toggle aria-label="Italic">
        <Italic />
      </Toggle>
      <Toggle aria-label="Underline">
        <Underline />
      </Toggle>
    </div>
  ),
};

export const Alignment: Story = {
  render: () => (
    <div className="flex items-center gap-1">
      <Toggle variant="outline" aria-label="Align left">
        <AlignLeft />
      </Toggle>
      <Toggle variant="outline" aria-label="Align center">
        <AlignCenter />
      </Toggle>
      <Toggle variant="outline" aria-label="Align right">
        <AlignRight />
      </Toggle>
    </div>
  ),
};
