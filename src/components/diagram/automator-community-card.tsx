import { Card } from "./card";

export const AutomatorCommunityCard = () => {
  return (
    <Card className="overflow-hidden">
      <div className="p-8">
        <Card.Title>Tap into the Automator community</Card.Title>
        <Card.Subtitle>
          Run & remix automations built and used by thousands of other
          designers.
        </Card.Subtitle>
      </div>
      <div className="flex gap-4 px-8">
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
    </Card>
  );
};

const CardItem = () => {
  return (
    <div
      className="min-w-[240px] h-[230px] rounded-[32px] duration-300 transition border-transparent hover:border-[#6553C6] border p-7 flex flex-col"
      style={{
        backgroundImage: "linear-gradient(#242325, #171619)",
        boxShadow:
          "inset 0 1px 2px #525154, 0 20px 25px -5px rgba(0,0,0,.8), 0 10px 10px -5px rgba(0,0,0,.9)",
      }}
    >
      <div className="flex">
        <div className="rounded-full text-white text-[10px] text-semibold bg-[#7862F6] h-[26px] px-3 flex items-center">
          Productivity
        </div>
      </div>
      <p className="mt-4 text-white font-medium">
        {"Create & Set\nFile Thumbnail"}
      </p>
      <p className="text-xs text-[#A9A9A9] mt-2">
        {"This automation quickly creates and sets a file's thumbnail"}
      </p>
      <div className="flex">
        <div className="bg-[#2B2B2B] rounded-full px-4 h-8 flex items-center text-white text-xs mt-4">
          Download
        </div>
      </div>
    </div>
  );
};
