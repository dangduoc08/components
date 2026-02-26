import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  AppWindowIcon,
  BellIcon,
  CodeIcon,
  LockIcon,
  UserIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const meta = {
  title: "UI/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-96">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <p className="text-muted-foreground text-sm">
          Make changes to your account here.
        </p>
      </TabsContent>
      <TabsContent value="password">
        <p className="text-muted-foreground text-sm">
          Change your password here.
        </p>
      </TabsContent>
    </Tabs>
  ),
};

export const WithContent: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-96">
      <TabsList className="w-full">
        <TabsTrigger value="account" className="flex-1">
          Account
        </TabsTrigger>
        <TabsTrigger value="password" className="flex-1">
          Password
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="mt-4 flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="tab-name">Name</Label>
          <Input id="tab-name" defaultValue="John Doe" />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="tab-username">Username</Label>
          <Input id="tab-username" defaultValue="@johndoe" />
        </div>
        <Button>Save changes</Button>
      </TabsContent>
      <TabsContent value="password" className="mt-4 flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="current-pw">Current password</Label>
          <Input id="current-pw" type="password" />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="new-pw">New password</Label>
          <Input id="new-pw" type="password" />
        </div>
        <Button>Save password</Button>
      </TabsContent>
    </Tabs>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Tabs defaultValue="preview" className="w-80">
      <TabsList>
        <TabsTrigger value="preview">
          <AppWindowIcon />
          Preview
        </TabsTrigger>
        <TabsTrigger value="code">
          <CodeIcon />
          Code
        </TabsTrigger>
      </TabsList>
      <TabsContent value="preview" className="mt-4">
        <div className="bg-muted rounded-lg p-8 text-center text-sm">
          Preview content here
        </div>
      </TabsContent>
      <TabsContent value="code" className="mt-4">
        <pre className="bg-muted rounded-lg p-4 text-xs">
          {"<Button>Click me</Button>"}
        </pre>
      </TabsContent>
    </Tabs>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Tabs
      defaultValue="account"
      orientation="vertical"
      className="flex w-96 gap-4"
    >
      <TabsList className="h-auto flex-col">
        <TabsTrigger value="account">
          <UserIcon />
          Account
        </TabsTrigger>
        <TabsTrigger value="password">
          <LockIcon />
          Password
        </TabsTrigger>
        <TabsTrigger value="notifications">
          <BellIcon />
          Notifications
        </TabsTrigger>
      </TabsList>
      <div className="flex-1">
        <TabsContent value="account">
          <p className="text-sm">Account settings content.</p>
        </TabsContent>
        <TabsContent value="password">
          <p className="text-sm">Password settings content.</p>
        </TabsContent>
        <TabsContent value="notifications">
          <p className="text-sm">Notification settings content.</p>
        </TabsContent>
      </div>
    </Tabs>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-80">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports" disabled>
          Reports
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="mt-4">
        <p className="text-muted-foreground text-sm">Overview content.</p>
      </TabsContent>
      <TabsContent value="analytics" className="mt-4">
        <p className="text-muted-foreground text-sm">Analytics content.</p>
      </TabsContent>
    </Tabs>
  ),
};
