import type { Meta, StoryObj } from "@storybook/react";

import Button from "./";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: "input/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    children: "이동하기",
    type: "linear",
    size: "medium",
    icon: "link",
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Filled: Story = {
  args: {
    type: "filled",
    size: "medium",
  },
};

export const Warn: Story = {
  args: {
    type: "warn",
    size: "medium",
  },
};

export const Loading: Story = {
  args: {
    type: "linear",
    size: "medium",
    loading: true,
  },
};
