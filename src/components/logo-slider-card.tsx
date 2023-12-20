"use client";

import { cn } from "@/lib/utils";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { Card } from "./card";

export const LogoSliderCard = () => {
  return (
    <Card className="p-0">
      <div className="p-8 pb-4">
        <Card.Title>함께하는 기업</Card.Title>
        <Card.Subtitle>
          AI 기반 디자인 유틸리티를 사용하여 창의력을 발휘하고 아이디어에
        </Card.Subtitle>
      </div>
      <LogoSlider direction="left" />
      <LogoSlider className="mt-2" direction="right" />
    </Card>
  );
};

const logos = Array(10).fill(0);

const animation = {
  duration: 25000,
  easing: (t: number) => t,
};

interface LogoSliderProps extends React.ComponentPropsWithoutRef<"div"> {
  direction?: "left" | "right";
}

export const LogoSlider = ({
  className,
  direction = "left",
  ...props
}: LogoSliderProps) => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "precision",
    drag: false,
    slides: { perView: "auto" },
    created(s) {
      s.moveToIdx(direction === "left" ? 5 : -5, true, animation);
    },
    updated(s) {
      s.moveToIdx(
        direction === "left"
          ? s.track.details.abs + 5
          : s.track.details.abs - 5,
        true,
        animation,
      );
    },
    animationEnded(s) {
      s.moveToIdx(
        direction === "left"
          ? s.track.details.abs + 5
          : s.track.details.abs - 5,
        true,
        animation,
      );
    },
  });

  return (
    <div ref={sliderRef} className={cn("keen-slider", className)} {...props}>
      {logos.map((_, index) => (
        <div
          key={index}
          className="keen-slider__slide"
          style={{ minWidth: 80, maxWidth: 80, height: 64 }}
        >
          <div className="w-16 h-16 bg-gray-200 rounded-full" />
        </div>
      ))}
    </div>
  );
};
