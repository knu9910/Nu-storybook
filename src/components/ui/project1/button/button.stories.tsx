import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

// Storybook 메타 데이터 설정
const meta = {
  title: "Ui/Project1/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    children: "", // 기본 children 값
    variant: "default", // 기본 variant 설정
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

// Story 정의
export const Default: Story = {
  args: {
    variant: "default", // 기본 variant 설정
    children: "디폴트", // 버튼 텍스트
  },
};

export const Primary: Story = {
  args: {
    variant: "primary", // primary 스타일 적용
    children: "검색", // 버튼 텍스트
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary", // secondary 스타일 적용
    children: "검색", // 버튼 텍스트
  },
};
export const Green: Story = {
  args: {
    variant: "green", // secondary 스타일 적용
    children: "검색", // 버튼 텍스트
  },
};
