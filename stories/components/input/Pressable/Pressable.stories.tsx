import type { Meta, StoryObj } from "@storybook/react";

import Pressable from "./";
import { Icon as IconComponent } from "../../generic";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Pressable> = {
  title: "input/Pressable",
  component: Pressable,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    children: "안녕하세요",
  },
};

export default meta;
type Story = StoryObj<typeof Pressable>;

export const Link: Story = {
  args: {
    children: "마인크래프트 1.5.2 립버전 다운로드",
    link: (
      <a
        href="https://youtu.be/dQw4w9WgXcQ"
        target="_blank"
        rel="noopener noreferrer"
      />
    ),
  },
};

export const Text: Story = {
  args: {
    children: "누를 수 있는 텍스트",
  },
};

export const Icon: Story = {
  args: {
    type: "icon",
    children: <IconComponent type="search" size={48} />,
  },
};
