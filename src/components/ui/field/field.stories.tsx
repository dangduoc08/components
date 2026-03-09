import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Field } from "./field";
import { FieldContent } from "./field-content";
import { FieldDescription } from "./field-description";
import { FieldError } from "./field-error";
import { FieldGroup } from "./field-group";
import { FieldLabel } from "./field-label";
import { FieldLegend } from "./field-legend";
import { FieldSet } from "./field-set";

const meta = {
  title: "UI/Field",
  component: Field,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Field>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Field className="w-80">
      <FieldLabel htmlFor="field-default">Username</FieldLabel>
      <Input id="field-default" placeholder="Enter your username" />
    </Field>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <Field className="w-80">
      <FieldLabel htmlFor="field-desc">Email Address</FieldLabel>
      <Input id="field-desc" type="email" placeholder="email@example.com" />
      <FieldDescription>
        {"We'll never share your email with anyone."}
      </FieldDescription>
    </Field>
  ),
};

export const DescriptionAbove: Story = {
  render: () => (
    <Field className="w-80">
      <FieldLabel htmlFor="field-desc-above">Full Name</FieldLabel>
      <FieldDescription>
        Enter your legal name as it appears on your ID.
      </FieldDescription>
      <Input id="field-desc-above" placeholder="John Doe" />
    </Field>
  ),
};

export const WithError: Story = {
  render: () => (
    <Field className="w-80" data-invalid>
      <FieldLabel htmlFor="field-error">Password</FieldLabel>
      <Input
        id="field-error"
        type="password"
        placeholder="Enter your password"
        aria-invalid
      />
      <FieldError>Password must be at least 8 characters.</FieldError>
    </Field>
  ),
};

export const MultipleErrors: Story = {
  render: () => (
    <Field className="w-80" data-invalid>
      <FieldLabel htmlFor="field-multi-error">Password</FieldLabel>
      <Input
        id="field-multi-error"
        type="password"
        placeholder="Enter your password"
        aria-invalid
      />
      <FieldError
        errors={[
          { message: "Password must be at least 8 characters." },
          { message: "Password must contain at least one number." },
          { message: "Password must contain at least one symbol." },
        ]}
      />
    </Field>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Field className="w-80" data-disabled>
      <FieldLabel htmlFor="field-disabled">Username</FieldLabel>
      <Input id="field-disabled" placeholder="Cannot edit" disabled />
      <FieldDescription>This field is currently disabled.</FieldDescription>
    </Field>
  ),
};

export const WithTextarea: Story = {
  render: () => (
    <Field className="w-80">
      <FieldLabel htmlFor="field-textarea">Bio</FieldLabel>
      <Textarea id="field-textarea" placeholder="Tell us about yourself..." />
      <FieldDescription>Maximum 200 characters.</FieldDescription>
    </Field>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <FieldGroup className="w-[480px] **:data-[slot=field-content]:min-w-48">
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="h-username">Username</FieldLabel>
          <FieldDescription>Enter your preferred username.</FieldDescription>
        </FieldContent>
        <Input id="h-username" placeholder="johndoe" />
      </Field>
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="h-bio">Bio</FieldLabel>
          <FieldDescription>
            Write a short description about yourself.
          </FieldDescription>
        </FieldContent>
        <Textarea id="h-bio" placeholder="Tell us about yourself..." />
      </Field>
    </FieldGroup>
  ),
};

export const Group: Story = {
  render: () => (
    <FieldGroup className="w-80">
      <Field>
        <FieldLabel htmlFor="g-name">Full Name</FieldLabel>
        <Input id="g-name" placeholder="John Doe" />
      </Field>
      <Field>
        <FieldLabel htmlFor="g-email">Email Address</FieldLabel>
        <Input id="g-email" type="email" placeholder="email@example.com" />
        <FieldDescription>
          {"We'll never share your email with anyone."}
        </FieldDescription>
      </Field>
      <Field data-invalid>
        <FieldLabel htmlFor="g-password">Password</FieldLabel>
        <Input
          id="g-password"
          type="password"
          placeholder="Enter your password"
          aria-invalid
        />
        <FieldError>Password must be at least 8 characters.</FieldError>
      </Field>
    </FieldGroup>
  ),
};

export const Fieldset: Story = {
  render: () => (
    <FieldSet className="w-80">
      <FieldLegend>Account Details</FieldLegend>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="fs-name">Full Name</FieldLabel>
          <Input id="fs-name" placeholder="John Doe" />
        </Field>
        <Field>
          <FieldLabel htmlFor="fs-email">Email</FieldLabel>
          <Input id="fs-email" type="email" placeholder="email@example.com" />
        </Field>
      </FieldGroup>
    </FieldSet>
  ),
};
