import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Box } from "./box";

export interface ButtonProps {
  variant?: "default" | "primary" | "secondary"; // 기존 variant 타입 정의
  children: React.ReactNode;
  onClick?: () => void;
}

const meta = {
  title: "Ui/Project1/Box",
  component: Box,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],

  args: { onClick: fn(), children: "안녕" },
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
