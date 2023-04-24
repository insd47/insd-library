import type { Meta, StoryObj } from "@storybook/react";

import Block from "./";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Block> = {
  title: "generic/Block",
  component: Block,
  tags: ["autodocs"],
  args: {
    children: "an 'div' with 'display: block'",
  },
};

export default meta;
type Story = StoryObj<typeof Block>;

export const Default: Story = {
  args: {
    children: "an 'div' with 'display: block'",
  },
};
