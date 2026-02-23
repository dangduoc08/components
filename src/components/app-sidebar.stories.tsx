import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Providers from "@/components/providers";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./app-sidebar";

const meta = {
  title: "Components/AppSidebar",
  component: AppSidebar,
  decorators: [
    (Story, { parameters }) => (
      <Providers>
        <SidebarProvider defaultOpen={parameters.defaultOpen ?? true}>
          <Story />
        </SidebarProvider>
      </Providers>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof AppSidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Expanded: Story = {
  parameters: {
    defaultOpen: true,
  },
};

export const Collapsed: Story = {
  parameters: {
    defaultOpen: false,
  },
};
