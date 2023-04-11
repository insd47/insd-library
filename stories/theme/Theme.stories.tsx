import type { Meta, StoryObj } from "@storybook/react";

import ThemeTest from ".";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof ThemeTest> = {
  title: "generic/themeteest",
  component: ThemeTest,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ThemeTest>;

export const Default: Story = {};
