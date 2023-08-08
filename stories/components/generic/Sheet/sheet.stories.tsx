import type { Meta, StoryObj } from "@storybook/react";

import Sheet from "./";
import { Button } from "../../input";
import { CSSProperties } from "react";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Sheet> = {
  title: "generic/Sheet",
  component: Sheet,
  tags: ["autodocs"],

  args: {},
};

export default meta;

type Story = StoryObj<typeof Sheet>;

export const Y: Story = {};
