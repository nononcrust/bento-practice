"use client";

import { cn } from "@/lib/utils";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface AosProps extends React.HTMLAttributes<HTMLDivElement> {
  type: "fade-in-up" | "fade-in";
  children: React.ReactNode;
}

export const Aos = ({
  type = "fade-in-up",
  children,
  className,
  ...props
}: AosProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className={cn(
        "opacity-0 transition duration-700 ease-out",
        type === "fade-in-up" && "translate-y-20",
        type === "fade-in-up" && isInView && "translate-y-0 opacity-100",
        type === "fade-in" && isInView && "opacity-100",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
