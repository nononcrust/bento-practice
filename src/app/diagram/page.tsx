import Genius from "@/assets/images/genius.svg";
import { AutoSuggestCard } from "@/components/diagram/auto-suggest-card";
import { AutomatorCommunityCard } from "@/components/diagram/automator-community-card";
import { SyncAutomationCard } from "@/components/diagram/sync-automation-card";
import { TransformIdeaCard } from "@/components/diagram/transform-idea-card";
import { SunDim } from "lucide-react";

export default function DiagramPage() {
  return (
    <main className="bg-[#0E0E11] min-h-screen bg-[url('/images/stars-bg.png')] pb-32">
      <section className="pt-12 container">
        <div className="flex justify-center">
          <div className="relative flex flex-col w-[329px] h-[329px] justify-end">
            <Blur />
            <Genius className="w-[329px] h-[329px] left-1/2 -translate-x-1/2 absolute" />
            <div className="flex justify-center flex-col">
              <h2 className="text-center text-7xl font-bold bg-clip-text from-white to-white/[0.43] from-65% text-transparent bg-gradient-135 z-10">
                Genius
              </h2>
              <p className="z-10 text-center mt-5 mb-6 text-xl text-[#A9A9A9]">
                Your AI design companion in Figma.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <GeniusDesignButton />
          <p className="text-sm mt-3 text-[#A9A9A9]">Coming soon</p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-6">
          <TransformIdeaCard />
          <AutomatorCommunityCard />
          <AutoSuggestCard />
          <SyncAutomationCard />
        </div>
      </section>
    </main>
  );
}

const Blur = () => {
  return (
    <div
      className="w-[329px] h-[243px] absolute left-0 right-0 top-92px z-10"
      style={{ backgroundImage: "linear-gradient(transparent, #0E0E11 45%)" }}
    />
  );
};

const GeniusDesignButton = () => {
  return (
    <div className="rounded-full h-[46px] flex px-4 bg-[#212124] items-center border border-white/[0.08] hover:border-white/[0.2] transition cursor-pointer">
      <SunDim className="w-6 h-6 text-white" />
      <p className="text-white ml-2">genius.design</p>
    </div>
  );
};
