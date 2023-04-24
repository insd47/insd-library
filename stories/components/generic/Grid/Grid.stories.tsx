import type { Meta, StoryObj } from "@storybook/react";

import Grid from "./";
import { Box } from "../";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Grid> = {
  title: "generic/Grid",
  component: Grid,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    children: [
      <Box
        v="center"
        h="center"
        style={{ height: 200, backgroundColor: "red" }}
      >
        Area 1
      </Box>,
      <Box
        v="center"
        h="center"
        style={{ height: 200, backgroundColor: "green" }}
      >
        Area 2
      </Box>,
      <Box
        v="center"
        h="center"
        style={{ height: 200, backgroundColor: "blue" }}
      >
        Area 3
      </Box>,
      <Box
        v="center"
        h="center"
        style={{ height: 200, backgroundColor: "orange" }}
      >
        Area 4
      </Box>,
    ],
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;

export const Default: Story = {
  args: {
    h: "400px 200px",
    gap: "10px",
    lineGap: "10px",
  },
};
