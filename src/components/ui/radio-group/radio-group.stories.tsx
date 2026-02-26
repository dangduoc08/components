import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const meta = {
  title: "UI/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center gap-3">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">Option One</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">Option Two</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="option-three" id="option-three" />
        <Label htmlFor="option-three">Option Three</Label>
      </div>
    </RadioGroup>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <RadioGroup defaultValue="comfortable">
      {[
        {
          value: "default",
          label: "Default",
          description: "The standard spacing between items.",
        },
        {
          value: "comfortable",
          label: "Comfortable",
          description: "A more spacious layout for better readability.",
        },
        {
          value: "compact",
          label: "Compact",
          description: "Tight spacing to fit more content on screen.",
        },
      ].map(({ value, label, description }) => (
        <div key={value} className="flex items-start gap-3">
          <RadioGroupItem
            value={value}
            id={`spacing-${value}`}
            className="mt-0.5"
          />
          <div className="flex flex-col gap-0.5">
            <Label htmlFor={`spacing-${value}`}>{label}</Label>
            <p className="text-muted-foreground text-sm">{description}</p>
          </div>
        </div>
      ))}
    </RadioGroup>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <RadioGroup defaultValue="card" className="flex flex-row gap-6">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="card" id="h-card" />
        <Label htmlFor="h-card">Card</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="paypal" id="h-paypal" />
        <Label htmlFor="h-paypal">PayPal</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="apple" id="h-apple" />
        <Label htmlFor="h-apple">Apple Pay</Label>
      </div>
    </RadioGroup>
  ),
};

export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue="default">
      <div className="flex items-center gap-3">
        <RadioGroupItem value="default" id="d-default" />
        <Label htmlFor="d-default">Default</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="disabled" id="d-disabled" disabled />
        <Label htmlFor="d-disabled" className="opacity-50">
          Disabled
        </Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="disabled-2" id="d-disabled-2" disabled />
        <Label htmlFor="d-disabled-2" className="opacity-50">
          Also disabled
        </Label>
      </div>
    </RadioGroup>
  ),
};

export const Cards: Story = {
  render: () => (
    <RadioGroup defaultValue="pro" className="flex flex-col gap-3">
      {[
        {
          value: "plus",
          label: "Plus",
          price: "$9/mo",
          description: "For individuals",
        },
        {
          value: "pro",
          label: "Pro",
          price: "$19/mo",
          description: "For small teams",
        },
        {
          value: "enterprise",
          label: "Enterprise",
          price: "$49/mo",
          description: "For large organizations",
        },
      ].map(({ value, label, price, description }) => (
        <label
          key={value}
          htmlFor={`plan-${value}`}
          className="border-border has-data-[state=checked]:border-primary flex cursor-pointer items-center gap-3 rounded-lg border p-4"
        >
          <RadioGroupItem value={value} id={`plan-${value}`} />
          <div className="flex flex-1 items-center justify-between">
            <div>
              <p className="text-sm font-medium">{label}</p>
              <p className="text-muted-foreground text-xs">{description}</p>
            </div>
            <p className="text-sm font-semibold">{price}</p>
          </div>
        </label>
      ))}
    </RadioGroup>
  ),
};
