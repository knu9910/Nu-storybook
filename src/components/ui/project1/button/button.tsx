import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

// Button 스타일 정의
const buttonVariants = cva(
  "p-3 py-[6px] min-w-14 text-[14px] shadow-sm rounded-sm border text-[#2563EB] transition-all duration-300 hover:shadow-md hover:-translate-y-2", // 기본 스타일
  {
    variants: {
      variant: {
        default: "bg-[#eff6ff80] border-[rgb(147_197_253)]", // 기본 스타일
        primary: "bg-blue-500 text-white border-blue-500", // 파란색 스타일
        secondary:
          "bg-[#f8fafc80] border-[rgb(203 213 225] text-[#475569] border-gray-500", // 회색 스타일
      },
    },
    defaultVariants: {
      variant: "default", // 기본 variant
    },
  }
);

// Props 타입 정의 (정적 타입)
export type Props = {
  variant?: "default" | "primary" | "secondary"; // variant 타입을 명확히 지정
} & React.HTMLAttributes<HTMLElement>;

/** SCM에서 사용할 버튼입니다. */
export const Button = ({
  className,
  children,
  variant = "default",
  ...props // 추가적인 props를 모두 받아서 버튼에 전달
}: Props) => {
  return (
    <button className={cn(buttonVariants({ variant }), className)} {...props}>
      {children}
    </button>
  );
};
