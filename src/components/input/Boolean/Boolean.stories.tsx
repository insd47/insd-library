import type { Meta, StoryObj } from "@storybook/react";

import Boolean from ".";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Boolean> = {
  title: "input/Boolean",
  component: Boolean,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Boolean>;

export const Checkbox: Story = {};

export const Label: Story = {
  args: {
    label: "자동 로그인",
  },
};

export const Radio: Story = {
  args: {
    type: "radio",
  },
};
