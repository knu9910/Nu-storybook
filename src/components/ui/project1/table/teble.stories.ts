import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Table } from "./table";

export interface ButtonProps {
  variant?: "default" | "primary" | "secondary"; // 기존 variant 타입 정의
  children: React.ReactNode;
  onClick?: () => void;
}

const meta = {
  title: "Ui/Project1/Table",
  component: Table,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],

  args: { onClick: fn() },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
