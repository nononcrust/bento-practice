"use client";

import { Card } from "@/components/diagram/card";
import { SunDim } from "lucide-react";

export const TransformIdeaCard = () => {
  return (
    <Card className="p-8">
      <Card.Title>Transforms your ideas into designs</Card.Title>
      <Card.Subtitle>
        {
          "Genius creates fully-editable UI designs\nwith just a simple product description."
        }
      </Card.Subtitle>
      <Input />
    </Card>
  );
};

const Input = () => {
  return (
    <div className="mt-28 relative">
      <div className="absolute top-0 left-0 bottom-0 right-0 -m-[0.5px] rounded-full bg-gradient-to-r from-[#565657] to-[#343437] z-0" />
      <div className="flex justify-between items-center h-[52px] rounded-full p-2 pl-4 bg-[#262629] text-[#EEEEEE] z-10">
        <div className="flex items-center">
          <SunDim className="w-6 h-6 text-white" />
          <p className="text-[#EEEEEE]/50 ml-4">
            An app to book intergalactic travel
          </p>
        </div>
        <GenerateButton />
      </div>
    </div>
  );
};

const GenerateButton = () => {
  return (
    <button
      className="rounded-full border px-5 h-full border-white/[0.16] relative hover:border-white/[0.3] transition"
      style={{
        backgroundImage:
          "radial-gradient(circle farthest-side at 50% 270%,rgba(255,255,255,.34),rgba(255,255,255,0))",
      }}
    >
      <div
        className="text-sm bg-clip-text text-transparent"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.3),#fff 75%)",
        }}
      >
        Generate
      </div>
      <div
        className="absolute top-0 left-0 bottom-0 right-0 rounded-full opacity-0 hover:opacity-1 z-10 transition"
        style={{
          backgroundImage:
            "radial-gradient(circle farthest-side at 50% 150%,rgba(255,255,255,.5),rgba(255,255,255,.5) 0%,rgba(255,255,255,0) 50%,rgba(255,255,255,0) 103%)",
        }}
      ></div>
    </button>
  );
};
