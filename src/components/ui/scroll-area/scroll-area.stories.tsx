import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const meta = {
  title: "UI/ScrollArea",
  component: ScrollArea,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ScrollArea>;

export default meta;

type Story = StoryObj<typeof meta>;

const TAGS = [
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "shadcn/ui",
  "Radix UI",
  "Storybook",
  "Vite",
  "ESLint",
  "Biome",
  "Vitest",
  "Playwright",
  "Zustand",
  "React Query",
  "Zod",
];

const HORIZONTAL_ITEMS = Array.from({ length: 20 }, (_, i) => ({
  id: `item-${i + 1}`,
  label: `Item ${i + 1}`,
}));

const LONG_CONTENT_PARAGRAPHS = Array.from({ length: 10 }, (_, i) => ({
  id: `paragraph-${i + 1}`,
  text: `Paragraph ${i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. `,
}));

export const Vertical: Story = {
  render: () => (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {TAGS.map((tag) => (
          <div key={tag}>
            <div className="text-sm">{tag}</div>
            <Separator className="my-2" />
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
      <div className="flex w-max gap-4 p-4">
        {HORIZONTAL_ITEMS.map((item) => (
          <div
            key={item.id}
            className="flex h-20 w-24 shrink-0 items-center justify-center rounded-md border bg-muted text-sm font-medium"
          >
            {item.label}
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
};

export const LongContent: Story = {
  render: () => (
    <ScrollArea className="h-64 w-80 rounded-md border p-4">
      <p className="text-sm leading-relaxed">
        {LONG_CONTENT_PARAGRAPHS.map((paragraph) => (
          <span key={paragraph.id}>{paragraph.text}</span>
        ))}
      </p>
    </ScrollArea>
  ),
};
