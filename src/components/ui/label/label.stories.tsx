import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const meta = {
  title: "UI/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Email address",
  },
};

export const WithInput: Story = {
  render: () => (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor="label-email">Email</Label>
      <Input id="label-email" type="email" placeholder="Enter your email" />
    </div>
  ),
};

export const WithCheckbox: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="label-terms" />
      <Label htmlFor="label-terms">Accept terms and conditions</Label>
    </div>
  ),
};

export const Required: Story = {
  render: () => (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor="label-required">
        Email <span className="text-destructive">*</span>
      </Label>
      <Input
        id="label-required"
        type="email"
        placeholder="Enter your email"
        required
      />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor="label-disabled" className="opacity-50">
        Disabled label
      </Label>
      <Input id="label-disabled" placeholder="Disabled" disabled />
    </div>
  ),
};
