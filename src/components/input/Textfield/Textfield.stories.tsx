import type { Meta, StoryObj } from "@storybook/react";

import Textfield from ".";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Textfield> = {
  title: "input/Textfield",
  component: Textfield,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Textfield>;

export const Default: Story = {
  args: {
    rightIconButton: "search",
    placeholder: "검색",
  },
};

export const Label = {
  args: {
    label: "이메일 주소",
    type: "email",
    icon: "email",
    placeholder: "so@example.com",
    assistive: "최소 8자 이상 입력해주세요.",
  },
};

export const Error: Story = {
  args: {
    type: "password",
    value: "verysecretvalue",
    error: "비밀번호가 일치하지 않습니다.",
  },
};
