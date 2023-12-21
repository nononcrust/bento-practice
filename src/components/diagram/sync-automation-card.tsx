import automatorIcon from "@/assets/images/automator.png";
import {
  AlignHorizontalDistributeCenterIcon,
  PlusIcon,
  XIcon,
} from "lucide-react";
import Image from "next/image";
import { Card } from "./card";

export const SyncAutomationCard = () => {
  return (
    <Card className="overflow-hidden">
      <div className="p-8 pb-4">
        <Card.Title>Sync automations with your entire team</Card.Title>
        <Card.Subtitle>
          {
            "With Automator for Teams, automations sync to the cloud\nso everyone gets a seped boost."
          }
        </Card.Subtitle>
      </div>
      <div className="flex relative">
        <Menu />
        <IconGrid />
      </div>
    </Card>
  );
};

const Menu = () => {
  return (
    <div
      className="w-[242px] absolute h-[386px] rounded-lg top-3 left-[30px] flex flex-col"
      style={{
        backgroundImage: "linear-gradient(#242325 40%,#171619)",
        border: ".5px solid rgba(0,0,0,.2)",
        boxShadow:
          "inset 0 1px 2px #525154, 0 20px 25px -5px rgba(0,0,0,.8), 0 10px 10px -5px rgba(0,0,0,.9)",
      }}
    >
      <div className="flex justify-between pl-4 pr-3 h-10 border-b items-center border-white/[0.04]">
        <div className="flex items-center">
          <Image className="w-4 h-4" src={automatorIcon} alt="automator" />
          <p className="text-white text-xs ml-3">Automator</p>
        </div>
        <XIcon className="text-white w-5 h-5" strokeWidth={1} />
      </div>
      <div className="flex px-4 h-10 items-center border-b border-white/[0.04] justify-between">
        <p className="text-[#A9A9A9] text-xs">You</p>
        <p className="text-white text-xs">Team</p>
        <p className="text-[#A9A9A9] text-xs">Community</p>
        <AlignHorizontalDistributeCenterIcon
          className="w-4 h- text-white"
          strokeWidth={1}
        />
        <PlusIcon className="w-5 h-5 text-white" strokeWidth={1} />
      </div>
      <div className="flex flex-col">
        <p className="text-white text-xs mt-3 ml-3 mb-1">Diagram</p>
        <div className="flex flex-col">
          <div className="flex p-3">
            <div className="ml-2 rounded-full bg-[#7762F6] w-[18px] h-[18px]" />
            <p className="text-white text-xs ml-3">Layout components</p>
          </div>
          <div className="flex p-3">
            <div className="ml-2 rounded-full bg-[#1CC47D] w-[18px] h-[18px]" />
            <p className="text-white text-xs ml-3">Rename Hex to Color</p>
          </div>
          <div className="flex p-3">
            <div className="ml-2 rounded-full bg-[#F24722] w-[18px] h-[18px]" />
            <p className="text-white text-xs ml-3">File structure</p>
          </div>
          <div className="flex p-3">
            <div className="ml-2 rounded-full bg-[#FFDA1D] w-[18px] h-[18px]" />
            <p className="text-white text-xs ml-3">Generate style guide</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const IconGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-4 absolute top-[22px] right-[30px]">
      <Icon />
      <Icon />
      <Icon />
      <Icon />
      <Icon />
      <Icon />
      <Icon />
      <Icon />
      <Icon />
    </div>
  );
};

const Icon = () => {
  return (
    <div
      className="w-16 h-16 rounded-xl flex justify-center items-center"
      style={{
        backgroundImage: "linear-gradient(#242325,#171619)",
        boxShadow: "inset 0 1px 2px #525154, 0 13px 10px rgba(0,0,0,.35)",
      }}
    >
      <Image src="/images/twitter.svg" alt="twitter" width={44} height={44} />;
    </div>
  );
};
