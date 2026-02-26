import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const meta = {
  title: "UI/Switch",
  component: Switch,
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
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane mode</Label>
    </div>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <div className="flex w-72 items-center justify-between gap-4">
      <div className="flex flex-col gap-0.5">
        <Label htmlFor="notifications-switch">Email notifications</Label>
        <p className="text-muted-foreground text-sm">
          Receive emails about your account activity.
        </p>
      </div>
      <Switch id="notifications-switch" />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Switch id="disabled-off" disabled />
        <Label htmlFor="disabled-off" className="opacity-50">
          Disabled off
        </Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch id="disabled-on" disabled defaultChecked />
        <Label htmlFor="disabled-on" className="opacity-50">
          Disabled on
        </Label>
      </div>
    </div>
  ),
};

export const Form: Story = {
  render: () => (
    <div className="flex w-72 flex-col gap-4">
      <p className="text-sm font-medium">Notification preferences</p>
      {[
        {
          id: "push",
          label: "Push notifications",
          description: "Send push notifications to your device.",
        },
        {
          id: "email",
          label: "Email digests",
          description: "Receive weekly email summaries.",
        },
        {
          id: "marketing",
          label: "Marketing emails",
          description: "News, updates and promotions.",
        },
      ].map(({ id, label, description }) => (
        <div key={id} className="flex items-center justify-between gap-4">
          <div className="flex flex-col gap-0.5">
            <Label htmlFor={`pref-${id}`}>{label}</Label>
            <p className="text-muted-foreground text-xs">{description}</p>
          </div>
          <Switch id={`pref-${id}`} />
        </div>
      ))}
    </div>
  ),
};
