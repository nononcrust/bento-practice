"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

const logos = Array(10).fill(0);

const animation = {
  duration: 25000,
  easing: (t: number) => t,
};

export const AboutLogoSlider = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: { perView: "auto" },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider">
      {logos.map((logo, index) => (
        <div
          key={index}
          className="keen-slider__slide"
          style={{ minWidth: 180, maxWidth: 180, height: 160 }}
        >
          <div className="w-10 h-10" />
        </div>
      ))}
    </div>
  );
};
