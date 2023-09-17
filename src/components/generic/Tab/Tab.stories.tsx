import type { Meta, StoryObj } from "@storybook/react";

import { TabList, Tab } from ".";

const meta: Meta<typeof TabList> = {
  title: "generic/Tab",
  component: TabList,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof TabList>;

export const Default: Story = {
  args: {
    index: 0,
    onIndexChange: (index: number) => console.log(index),
    children: [
      <Tab key="1">Tab 1</Tab>,
      <Tab key="2">Tab 2</Tab>,
      <Tab key="3">Tab 3</Tab>,
    ],
  },
};
