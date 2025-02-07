import type { Meta, StoryObj } from "@storybook/react";
import { Wbox } from "./wbox";

const meta = {
  title: "Ui/Project1/Wbox",
  component: Wbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],

  args: {
    customFn: (cur: boolean) => console.log("customFn 실행됨:", cur),
  }, // 설정과 기본으로 넣어주는 값

  //   argTypes: {
  //     variant: {
  //       control: {
  //         type: "select",
  //         options: ["default", "primary", "secondary"], // 드롭다운 메뉴에서 선택
  //       },
  //     },
  //     children: {
  //       description: "자식",
  //     },
  //     customFn: {
  //       description: "Boolean 값을 인자로 받는 콜백 함수",
  //       action: "clicked", // Storybook 액션 패널에서 실행 기록 확인 가능
  //       table: {
  //         type: { summary: "(cur: boolean) => void" }, // 타입 요약
  //       },
  //       control: {
  //         type: "boolean", // Storybook UI에서 boolean 값 변경 가능
  //       },
  //     },
  //   },
} satisfies Meta<typeof Wbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { variant: "default" },
  play: ({ args }) => {
    args.customFn(true); // customFn을 호출하여 true 전달
  },
};
export const Secondary: Story = { args: { variant: "secondary" } };
export const Primary: Story = { args: { variant: "primary" } };
