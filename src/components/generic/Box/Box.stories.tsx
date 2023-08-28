import type { Meta, StoryObj } from "@storybook/react";

import Box from ".";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Box> = {
  title: "generic/Box",
  component: Box,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    children: [<p style={{ margin: 0 }}>This is Box</p>],
  },
};

export default meta;
type Story = StoryObj<typeof Box>;

export const DefaultBox: Story = {
  args: {
    padding: 20,
    background: "fg2",
    border: 2,
    radius: 2,
  },
};

export const ButtonBox: Story = {
  args: {
    padding: 20,
    background: "fg3",
    border: 1,
    radius: 3,
  },
};
