import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { JobCard } from "./job-card";

const meta = {
  title: "Blocks/JobCard",
  component: JobCard,
  parameters: {
    layout: "padded",
  },
  decorators: [
    (Story) => (
      <div className="w-72">
        <Story />
      </div>
    ),
  ],
  args: {
    logoUrl: "https://placehold.co/48x48",
    logoAlt: "Company logo",
    title: "Software Engineer",
    postedAtLabel: "Posted date: 04 Mar 2026",
    candidateCount: 12,
    candidatesLabel: "candidates",
    experience: "No experience",
    workType: "Full-time",
    salary: "Negotiable",
    level: "CEO",
  },
} satisfies Meta<typeof JobCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Senior: Story = {
  args: {
    title: "Senior Frontend Engineer",
    logoAlt: "Samsung",
    candidateCount: 24,
    experience: "3+ years",
    workType: "Full-time",
    salary: "$5,000",
    level: "Manager",
  },
};

export const PartTime: Story = {
  args: {
    title: "Product Designer",
    logoAlt: "Facebook",
    candidateCount: 5,
    experience: "1–2 years",
    workType: "Part-time",
    salary: "$2,000",
    level: "Senior",
  },
};

export const Grid: Story = {
  decorators: [
    (Story) => (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Story />
        <Story />
        <Story />
      </div>
    ),
  ],
};
