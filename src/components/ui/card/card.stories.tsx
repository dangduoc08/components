import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { BellIcon, MoreHorizontalIcon, TrendingUpIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const meta = {
  title: "UI/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">Card Content</p>
      </CardContent>
      <CardFooter>
        <p className="text-muted-foreground text-sm">Card Footer</p>
      </CardFooter>
    </Card>
  ),
};

export const WithAction: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
        <CardAction>
          <Button variant="ghost" size="icon">
            <MoreHorizontalIcon />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="text-sm">Check your inbox to view all notifications.</p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="outline" className="flex-1">
          Dismiss
        </Button>
        <Button className="flex-1">View all</Button>
      </CardFooter>
    </Card>
  ),
};

export const WithBadgeAction: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Monthly Revenue</CardTitle>
        <CardDescription>January – June 2025</CardDescription>
        <CardAction>
          <Badge variant="outline">
            <TrendingUpIcon />
            +12.5%
          </Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold">$45,231.89</p>
        <p className="text-muted-foreground text-sm">+20.1% from last month</p>
      </CardContent>
    </Card>
  ),
};

export const Form: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your details below to create your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="John Doe" />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="john@example.com" />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="outline" className="flex-1">
          Cancel
        </Button>
        <Button className="flex-1">Create account</Button>
      </CardFooter>
    </Card>
  ),
};

export const Notifications: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>
          Choose what you want to be notified about.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {[
          {
            label: "Push Notifications",
            description: "Send notifications to your device.",
          },
          {
            label: "Email Digests",
            description: "Receive weekly summary emails.",
          },
          {
            label: "Marketing Emails",
            description: "News, updates and promotions.",
          },
        ].map(({ label, description }) => (
          <div key={label} className="flex items-center justify-between gap-4">
            <div className="flex flex-col gap-0.5">
              <p className="text-sm font-medium">{label}</p>
              <p className="text-muted-foreground text-xs">{description}</p>
            </div>
            <Switch />
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Button className="w-full">Save preferences</Button>
      </CardFooter>
    </Card>
  ),
};

export const ProfileCard: Story = {
  render: () => (
    <Card className="w-72">
      <CardContent className="flex flex-col items-center gap-4 pt-6">
        <div className="bg-muted flex size-16 items-center justify-center rounded-full text-2xl font-semibold">
          JD
        </div>
        <div className="flex flex-col items-center gap-1 text-center">
          <CardTitle>John Doe</CardTitle>
          <CardDescription>Senior Frontend Engineer</CardDescription>
        </div>
        <div className="flex gap-2">
          <Badge variant="secondary">React</Badge>
          <Badge variant="secondary">TypeScript</Badge>
          <Badge variant="secondary">Next.js</Badge>
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="outline" className="flex-1">
          Message
        </Button>
        <Button className="flex-1">Follow</Button>
      </CardFooter>
    </Card>
  ),
};

export const Alert: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <div className="bg-primary/10 text-primary flex size-9 items-center justify-center rounded-full">
          <BellIcon className="size-4" />
        </div>
        <CardTitle>New message</CardTitle>
        <CardDescription>
          You have a new message from your team. Click below to view it.
        </CardDescription>
      </CardHeader>
      <CardFooter className="gap-2">
        <Button variant="outline" className="flex-1">
          Ignore
        </Button>
        <Button className="flex-1">View message</Button>
      </CardFooter>
    </Card>
  ),
};

export const Simple: Story = {
  render: () => (
    <Card className="w-80">
      <CardContent>
        <p className="text-sm">
          A minimal card with only content and no header or footer sections.
          Useful for simple information display.
        </p>
      </CardContent>
    </Card>
  ),
};
