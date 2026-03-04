import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Blockquote } from "./blockquote";
import { Code } from "./code";
import { H1 } from "./h1";
import { H2 } from "./h2";
import { H3 } from "./h3";
import { H4 } from "./h4";
import { Large } from "./large";
import { Lead } from "./lead";
import { List } from "./list";
import { Muted } from "./muted";
import { P } from "./p";
import { Small } from "./small";

const meta = {
  title: "UI/Typography",
  component: H1,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof H1>;

export default meta;

type Story = StoryObj<typeof meta>;

export const H1Story: Story = {
  name: "H1",
  render: () => <H1>Taxing Laughter: The Joke Tax Chronicles</H1>,
};

export const H2Story: Story = {
  name: "H2",
  render: () => <H2>The People of the Kingdom</H2>,
};

export const H3Story: Story = {
  name: "H3",
  render: () => <H3>The Joke Tax</H3>,
};

export const H4Story: Story = {
  name: "H4",
  render: () => <H4>People stopped telling jokes</H4>,
};

export const PStory: Story = {
  name: "P",
  render: () => (
    <P>
      The king, seeing how much happier his subjects were, realized the error of
      his ways and repealed the joke tax.
    </P>
  ),
};

export const LeadStory: Story = {
  name: "Lead",
  render: () => (
    <Lead>
      A modal dialog that interrupts the user with important content and expects
      a response.
    </Lead>
  ),
};

export const LargeStory: Story = {
  name: "Large",
  render: () => <Large>Are you absolutely sure?</Large>,
};

export const SmallStory: Story = {
  name: "Small",
  render: () => <Small>Email address</Small>,
};

export const MutedStory: Story = {
  name: "Muted",
  render: () => <Muted>Enter your email address.</Muted>,
};

export const BlockquoteStory: Story = {
  name: "Blockquote",
  render: () => (
    <Blockquote>
      "After all," he said, "everyone enjoys a good joke, so it&apos;s only fair
      that they should pay for the privilege."
    </Blockquote>
  ),
};

export const CodeStory: Story = {
  name: "Code",
  render: () => (
    <P>
      Use the <Code>@radix-ui/react-alert-dialog</Code> package to create
      accessible alert dialogs.
    </P>
  ),
};

export const ListStory: Story = {
  name: "List",
  render: () => (
    <List>
      <li>1st level of puns: 5 gold coins</li>
      <li>2nd level of jokes: 10 gold coins</li>
      <li>3rd level of one-liners: 20 gold coins</li>
    </List>
  ),
};

export const All: Story = {
  render: () => (
    <div className="max-w-2xl">
      <H1>Taxing Laughter: The Joke Tax Chronicles</H1>
      <P>
        Once upon a time, in a far-off land, there was a very lazy king who
        spent all day lounging on his throne. One day, his advisors came to him
        with a problem: the kingdom was running out of money.
      </P>
      <H2>The People of the Kingdom</H2>
      <P>
        The people of the kingdom were not amused. They grumbled and complained,
        but the king refused to listen. After all, he was the king, and he could
        do as he pleased.
      </P>
      <H3>The Joke Tax</H3>
      <P>
        The king thought long and hard, and finally came up with{" "}
        <a
          href="/joke-tax"
          className="font-medium underline underline-offset-4"
        >
          a brilliant plan
        </a>
        : he would tax the jokes in the kingdom.
      </P>
      <Blockquote>
        "After all," he said, "everyone enjoys a good joke, so it&apos;s only
        fair that they should pay for the privilege."
      </Blockquote>
      <H4>People stopped telling jokes</H4>
      <P>
        The king, seeing how much happier his subjects were, realized the error
        of his ways and repealed the joke tax.
      </P>
      <H3>The Joke Tax Chronicles Table</H3>
      <P>
        The king&apos;s subjects were divided into three tiers of taxation based
        on the quality of their jokes:
      </P>
      <List>
        <li>1st level of puns: 5 gold coins</li>
        <li>2nd level of jokes: 10 gold coins</li>
        <li>3rd level of one-liners: 20 gold coins</li>
      </List>
      <P>
        To install the joke tax calculator, run{" "}
        <Code>@radix-ui/react-alert-dialog</Code> and follow the setup guide.
      </P>
      <Lead>
        A modal dialog that interrupts the user with important content and
        expects a response.
      </Lead>
      <Large>Are you absolutely sure?</Large>
      <Small>Email address</Small>
      <Muted>Enter your email address.</Muted>
    </div>
  ),
};
