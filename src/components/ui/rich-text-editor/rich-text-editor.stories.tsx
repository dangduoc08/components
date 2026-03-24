import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { RichTextEditor } from "./rich-text-editor";

const meta = {
  title: "UI/RichTextEditor",
  component: RichTextEditor,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof RichTextEditor>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-150">
      <RichTextEditor />
    </div>
  ),
};
