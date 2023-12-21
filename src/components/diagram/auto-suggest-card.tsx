import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";
import { Card } from "./card";

export const AutoSuggestCard = () => {
  return (
    <Card className="p-8 pb-0 overflow-hidden">
      <Card.Title>Auto-suggests as you design</Card.Title>
      <Card.Subtitle>
        {
          "Improve your workflow and design more\nefficiently with AI-powered in-line suggestions."
        }
      </Card.Subtitle>
      <div className="flex justify-center mt-8">
        <Mobile />
      </div>
    </Card>
  );
};

const Mobile = () => {
  return (
    <div className="w-[230px] h-[500px] border rounded-2xl bg-[#1B1B1E] border-[#2D2D2D] px-[14px] pt-2 overflow-hidden">
      <MobileStatusBar />
      <MobileSearchInput />
      <div className="flex gap-2 mt-4">
        <MobilePill enabled>Pizza</MobilePill>
        <MobilePill>Salad</MobilePill>
        <MobilePill>Chicken</MobilePill>
        <MobilePill>Italy</MobilePill>
      </div>
    </div>
  );
};

const MobileStatusBar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="w-[60px]">
        <div className="text-white text-[10px] ml-4">9:41</div>
      </div>
      <div className="bg-black rounded-full h-[20px] w-[80px]" />
      <div className="flex justify-end w-[60px]">
        <div className="flex gap-1 mr-2">
          <div className="text-white text-[10px]">0</div>
          <div className="text-white text-[10px]">0</div>
          <div className="text-white text-[10px]">0</div>
        </div>
      </div>
    </div>
  );
};

const MobileSearchInput = () => {
  return (
    <div className="mt-3 rounded-full bg-[#29292B] flex items-center px-3 h-8">
      <SearchIcon className="text-white w-3 h-3" />
      <div className="text-[#EEEEEE] opacity-50 text-[11px] ml-[10px]">
        Search food, groceries, etc.
      </div>
    </div>
  );
};

interface MobileChipProps {
  children: React.ReactNode;
  enabled?: boolean;
}

const MobilePill = ({ children, enabled = false }: MobileChipProps) => {
  return (
    <div
      className={cn(
        "h-[22px] bg-[#29292B] rounded-[6px] flex justify-center items-center px-3",
        enabled && "bg-[#424242]",
      )}
    >
      <div
        className={cn(
          "text-white text-[11px] opacity-50",
          enabled && "opacity-100",
        )}
      >
        {children}
      </div>
    </div>
  );
};
