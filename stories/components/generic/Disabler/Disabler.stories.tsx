import type { Meta, StoryObj } from "@storybook/react";

import Disabler from "./";
import { Button } from "../../input";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Disabler> = {
  title: "generic/Disabler",
  component: Disabler,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    children: [
      <Button bottom="10px">Button 1</Button>,
      <Button bottom="10px" type="filled">
        Button 2
      </Button>,
      <Button bottom="10px" type="warn">
        Button 3
      </Button>,
      <Button loading>Button 4</Button>,
    ],
  },
};

export default meta;
type Story = StoryObj<typeof Disabler>;

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Enabled: Story = {
  args: {
    disabled: false,
  },
};
