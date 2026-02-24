import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  BookOpenIcon,
  HomeIcon,
  LayoutDashboardIcon,
  SettingsIcon,
  UsersIcon,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const NAV_ITEMS = [
  { title: "Dashboard", icon: LayoutDashboardIcon },
  { title: "Home", icon: HomeIcon },
  { title: "Users", icon: UsersIcon },
  { title: "Docs", icon: BookOpenIcon },
];

interface ISidebarStoryProps {
  side?: "left" | "right";
  variant?: "sidebar" | "floating" | "inset";
  collapsible?: "offcanvas" | "icon" | "none";
  defaultOpen?: boolean;
}

function SidebarDemo({
  side,
  variant,
  collapsible,
  defaultOpen = true,
}: ISidebarStoryProps) {
  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <Sidebar side={side} variant={variant} collapsible={collapsible}>
        <SidebarHeader>
          <div className="flex items-center gap-2 px-2 py-1">
            <div className="bg-primary size-6 rounded-md" />
            <span className="font-semibold text-sm">Owlky</span>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {NAV_ITEMS.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton tooltip={item.title}>
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Settings">
                <SettingsIcon />
                <span>Settings</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>

      <main className="flex flex-1 flex-col gap-4 p-4">
        <div className="flex items-center gap-2">
          <SidebarTrigger />
          <span className="text-muted-foreground text-sm">Main content</span>
        </div>
        <div className="bg-muted/40 flex-1 rounded-xl" />
      </main>
    </SidebarProvider>
  );
}

const meta = {
  title: "UI/Sidebar",
  component: SidebarDemo,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    side: {
      control: "radio",
      options: ["left", "right"],
    },
    variant: {
      control: "radio",
      options: ["sidebar", "floating", "inset"],
    },
    collapsible: {
      control: "radio",
      options: ["offcanvas", "icon", "none"],
    },
    defaultOpen: {
      control: "boolean",
    },
  },
  args: {
    side: "left",
    variant: "sidebar",
    collapsible: "offcanvas",
    defaultOpen: true,
  },
} satisfies Meta<typeof SidebarDemo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Expanded: Story = {
  args: {
    defaultOpen: true,
  },
};

export const Collapsed: Story = {
  args: {
    defaultOpen: false,
  },
};

export const IconCollapsible: Story = {
  args: {
    collapsible: "icon",
    defaultOpen: false,
  },
};

export const FloatingVariant: Story = {
  args: {
    variant: "floating",
  },
};

export const InsetVariant: Story = {
  args: {
    variant: "inset",
  },
};

export const RightSide: Story = {
  args: {
    side: "right",
  },
};

export const NotCollapsible: Story = {
  args: {
    collapsible: "none",
  },
};
