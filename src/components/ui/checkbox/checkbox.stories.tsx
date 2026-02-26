import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const meta = {
  title: "UI/Checkbox",
  component: Checkbox,
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
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <div className="flex items-start gap-2">
      <Checkbox id="notifications" className="mt-0.5" />
      <div className="flex flex-col gap-1">
        <Label htmlFor="notifications">Email notifications</Label>
        <p className="text-muted-foreground text-sm">
          Receive emails about your account activity.
        </p>
      </div>
    </div>
  ),
};

export const Checked: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="checked" defaultChecked />
      <Label htmlFor="checked">Checked by default</Label>
    </div>
  ),
};

export const Indeterminate: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="indeterminate" checked="indeterminate" />
      <Label htmlFor="indeterminate">Indeterminate</Label>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Checkbox id="disabled-unchecked" disabled />
        <Label htmlFor="disabled-unchecked">Disabled unchecked</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="disabled-checked" disabled defaultChecked />
        <Label htmlFor="disabled-checked">Disabled checked</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          id="disabled-indeterminate"
          disabled
          checked="indeterminate"
        />
        <Label htmlFor="disabled-indeterminate">Disabled indeterminate</Label>
      </div>
    </div>
  ),
};

export const Group: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <p className="text-sm font-medium">Select your interests</p>
      {[
        { id: "design", label: "Design" },
        { id: "engineering", label: "Engineering" },
        { id: "product", label: "Product" },
        { id: "marketing", label: "Marketing" },
      ].map(({ id, label }) => (
        <div key={id} className="flex items-center gap-2">
          <Checkbox id={id} />
          <Label htmlFor={id}>{label}</Label>
        </div>
      ))}
    </div>
  ),
};

export const SelectAll: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Checkbox id="select-all" checked="indeterminate" />
        <Label htmlFor="select-all" className="font-medium">
          Select all
        </Label>
      </div>
      <div className="border-border ml-1 flex flex-col gap-2.5 border-l pl-4">
        {["React", "Vue", "Angular", "Svelte"].map((item) => (
          <div key={item} className="flex items-center gap-2">
            <Checkbox
              id={item.toLowerCase()}
              defaultChecked={item === "React"}
            />
            <Label htmlFor={item.toLowerCase()}>{item}</Label>
          </div>
        ))}
      </div>
    </div>
  ),
};
