import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const meta = {
  title: "UI/Sheet",
  component: Sheet,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Sheet>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ),
};

export const Sides: Story = {
  render: () => (
    <div className="flex gap-3">
      {(["top", "right", "bottom", "left"] as const).map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="outline" className="capitalize">
              {side}
            </Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>Sheet from {side}</SheetTitle>
              <SheetDescription>
                This sheet slides in from the {side} of the screen.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  ),
};

export const WithForm: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </SheetTrigger>
      <SheetContent className="p-6">
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-4 py-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="sheet-name">Name</Label>
            <Input id="sheet-name" placeholder="John Doe" />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="sheet-email">Email</Label>
            <Input
              id="sheet-email"
              type="email"
              placeholder="john@example.com"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="sheet-bio">Bio</Label>
            <Input id="sheet-bio" placeholder="Tell us about yourself" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
          <SheetClose asChild>
            <Button>Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

export const WithoutCloseButton: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent showCloseButton={false} className="p-6">
        <SheetHeader>
          <SheetTitle>Custom close</SheetTitle>
          <SheetDescription>
            This sheet doesn't have the default close button.
          </SheetDescription>
        </SheetHeader>
        <SheetFooter className="mt-4">
          <SheetClose asChild>
            <Button className="w-full">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};
