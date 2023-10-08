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

export const Scroll: Story = {
  args: {
    index: 0,
    stretch: false,
    onIndexChange: (index: number) => console.log(index),
    children: [
      <Tab key="1">Tab 1</Tab>,
      <Tab key="2">Tab 2</Tab>,
      <Tab key="3">Tab 3</Tab>,
      <Tab key="4">Tab 4</Tab>,
      <Tab key="5">Tab 5</Tab>,
      <Tab key="6">Tab 6</Tab>,
      <Tab key="7">Tab 7</Tab>,
      <Tab key="8">Tab 8</Tab>,
      <Tab key="9">Tab 9</Tab>,
      <Tab key="10">Tab 10</Tab>,
      <Tab key="11">Tab 11</Tab>,
      <Tab key="12">Tab 12</Tab>,
      <Tab key="13">Tab 13</Tab>,
      <Tab key="14">Tab 14</Tab>,
    ],
  },
};
