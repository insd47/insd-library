import type { Meta, StoryObj } from "@storybook/react";

import Loading from ".";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Loading> = {
  title: "generic/Loading",
  component: Loading,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Loading>;

export const Small: Story = {
  args: {
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
  },
};

export const Big: Story = {
  args: {
    size: "big",
  },
};
