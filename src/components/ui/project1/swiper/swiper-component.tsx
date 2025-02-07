"use client";
import { cn } from "@/lib/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Virtual } from "swiper/modules";

// Props 타입 정의
type Props = React.HTMLAttributes<HTMLElement>;
export const SwiperComponent = ({ className }: Readonly<Props>) => {
  const slides = Array.from({ length: 1000 }).map(
    (el, index) => `Slide ${index + 1}`
  );
  return (
    <div className={cn("relative p-24", className)}>
      <Swiper
        className="h-[300px]"
        modules={[Virtual]}
        spaceBetween={50}
        slidesPerView={3}
        virtual
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide
            className="bg-black text-white"
            key={slideContent}
            virtualIndex={index}
          >
            {slideContent}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
