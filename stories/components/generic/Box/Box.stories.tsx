import type { Meta, StoryObj } from "@storybook/react";

import Box from "./";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Box> = {
  title: "generic/Box",
  component: Box,
  tags: ["autodocs"],
  args: {
    children: [
      <Box>hello</Box>,
      <Box>this is a box</Box>,
      <Box>i'm very flexible</Box>,
    ],
  },
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Vertical: Story = {
  args: {
    d: "v",
  },
};

export const Horizontal: Story = {
  args: {
    d: "h",
  },
};
