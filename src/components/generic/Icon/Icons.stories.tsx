import type { Meta, StoryObj } from "@storybook/react";

import Icon from ".";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Icon> = {
  title: "generic/Icon",
  component: Icon,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    type: "statistic",
    size: 36,
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    type: "statistic",
    size: 36,
  },
};
