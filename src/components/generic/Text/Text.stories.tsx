import type { Meta, StoryObj } from "@storybook/react";

import Text from ".";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Text> = {
  title: "generic/Text",
  component: Text,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: "Hello, world!",
  },
};

export const Title: Story = {
  args: {
    children: "Hello, world!",
    type: "title",
    template: 1,
  },
};

export const Limited: Story = {
  args: {
    type: "paragraph",
    style: {
      width: 400,
    },
    maxLines: 3,
    children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In mollis nunc sed id semper. Suspendisse in est ante in nibh mauris cursus mattis. Elementum integer enim neque volutpat ac tincidunt vitae semper. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Congue mauris rhoncus aenean vel. Etiam erat velit scelerisque in dictum non consectetur. Lectus proin nibh nisl condimentum id venenatis a. Erat imperdiet sed euismod nisi porta lorem. Dui vivamus arcu felis bibendum ut tristique et.    `,
  },
};
