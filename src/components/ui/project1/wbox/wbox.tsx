import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

// wboxVariants 정의
const wboxVariants = cva(
  "border-2 text-black", // 기본 스타일
  {
    variants: {
      variant: {
        default: "border-black p-1", // 기본 border 색상
        secondary: "border-red-500 p-1", // 두 번째 스타일
        primary: "border-blue-500 p-1", // 파란색 border
      },
      size: {
        small: "h-4", // 작은 크기
        medium: "h-8", // 중간 크기
        large: "h-16", // 큰 크기
      },
    },
    defaultVariants: {
      variant: "default", // 기본 variant
      size: "medium", // 기본 크기
    },
  }
);

// Props 타입 정의
type Props = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof wboxVariants> & {
    customFn: (cur: boolean) => void;
  };

/** 위팩토리 박스를 정의asdasadsads합니다. <h1>asdasd</h1> */
export const Wbox = ({
  className,
  children,
  variant,
  size,
}: Readonly<Props>) => {
  return (
    <div className={cn(wboxVariants({ variant, size }), className)}>
      {children}
    </div>
  );
};
