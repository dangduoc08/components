import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { BellIcon, ChromeIcon, TrendingUpIcon } from "lucide-react";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from ".";

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
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  ),
};

export const LoginForm: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account.{" "}
          <a href="/signup" className="underline underline-offset-4">
            Sign up
          </a>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" />
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <a
              href="/forgot-password"
              className="text-xs underline underline-offset-4"
            >
              Forgot your password?
            </a>
          </div>
          <Input id="password" type="password" />
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button className="w-full">Login</Button>
        <Button variant="outline" className="w-full">
          <ChromeIcon />
          Login with Google
        </Button>
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

export const SmallSize: Story = {
  render: () => (
    <div className="flex gap-4">
      <Card className="w-64">
        <CardHeader>
          <CardTitle>Default</CardTitle>
          <CardDescription>Regular card size</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Standard spacing and text.</p>
        </CardContent>
        <CardFooter>
          <Button size="sm">Action</Button>
        </CardFooter>
      </Card>
      <Card className="w-64" size="sm">
        <CardHeader>
          <CardTitle>Small</CardTitle>
          <CardDescription>Compact card size</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Reduced spacing and text.</p>
        </CardContent>
        <CardFooter>
          <Button size="sm">Action</Button>
        </CardFooter>
      </Card>
    </div>
  ),
};

export const WithImage: Story = {
  render: () => (
    <Card className="w-72">
      <Image
        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=200&fit=crop"
        alt="Design systems meetup"
        width={400}
        height={200}
        className="h-40 w-full object-cover"
      />
      <CardHeader>
        <CardTitle>Design systems meetup</CardTitle>
        <CardDescription>
          A community gathering for designers and engineers building scalable
          design systems.
        </CardDescription>
        <CardAction>
          <Badge>Featured</Badge>
        </CardAction>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">Register now</Button>
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
