"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "./button";
import { Card } from "./card";

export const ReviewSection = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="mt-32 container">
      <div className="md:columns-3 relative">
        <Card className="break-inside-avoid min-h-[400px] mb-4" />
        <Card className="break-inside-avoid min-h-[500px] mb-4" />
        <Card className="break-inside-avoid min-h-[300px] mb-4" />
        <Card
          className={cn(
            "break-inside-avoid min-h-[500px] mb-4",
            !showAll && "max-md:hidden",
          )}
        />
        <Card
          className={cn(
            "break-inside-avoid min-h-[300px] mb-4",
            !showAll && "max-md:hidden",
          )}
        />
        <Card
          className={cn(
            "break-inside-avoid min-h-[400px] mb-4",
            !showAll && "max-md:hidden",
          )}
        />
        <Card
          className={cn(
            "break-inside-avoid min-h-[400px] mb-4",
            !showAll && "max-md:hidden",
          )}
        />
        <Card
          className={cn(
            "break-inside-avoid min-h-[300px] mb-4",
            !showAll && "max-md:hidden",
          )}
        />
        <Card
          className={cn(
            "break-inside-avoid min-h-[400px] mb-4",
            !showAll && "max-md:hidden",
          )}
        />
        <Card
          className={cn(
            "break-inside-avoid min-h-[600px] mb-4",
            !showAll && "max-md:hidden",
          )}
        />
        <Card
          className={cn(
            "break-inside-avoid min-h-[300px] mb-4",
            !showAll && "max-md:hidden",
          )}
        />
        <Card
          className={cn(
            "break-inside-avoid min-h-[500px] mb-4",
            !showAll && "max-md:hidden",
          )}
        />
        <Card
          className={cn(
            "break-inside-avoid min-h-[300px] mb-4",
            !showAll && "max-md:hidden",
          )}
        />
        <Card
          className={cn(
            "break-inside-avoid min-h-[600px] mb-4",
            !showAll && "max-md:hidden",
          )}
        />
        <Card
          className={cn(
            "break-inside-avoid min-h-[400px] mb-4",
            !showAll && "max-md:hidden",
          )}
        />
        {!showAll && <Blur />}
      </div>
      <div className="flex justify-center md:hidden mt-4">
        <Button
          className="rounded-full"
          variant="outline"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "접기" : "더보기"}
        </Button>
      </div>
    </section>
  );
};

const Blur = () => {
  return (
    <div className="h-[200px] bg-gradient-to-b to-white absolute bottom-0 from-50% w-full from-transparent" />
  );
};
