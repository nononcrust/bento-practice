"use client";

import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import { useEffect, useState } from "react";

export const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 h-14 flex transition-all bg-white z-50",
        scrollY !== 0 && "drop-shadow-md",
      )}
    >
      <div className="container flex justify-between px-4 items-center">
        <p className="font-semibold">토스</p>
        <MenuIcon />
      </div>
    </header>
  );
};
