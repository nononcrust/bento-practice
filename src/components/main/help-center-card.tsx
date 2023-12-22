import helpCenter from "@/assets/icons/035.상담,고객지원.svg";
import { Card } from "@/components/card";
import Image from "next/image";

export const HelpCenterCard = () => {
  return (
    <Card className="p-0 overflow-hidden">
      <div className="p-8">
        <Image src={helpCenter} className="w-12 h-12 mb-2" alt="" />
        <Card.Title>실시간 문의</Card.Title>
        <Card.Subtitle>
          전문 매니저가 실시간으로 소통하며 비즈니스 상황에 맞는 맞춤 지원을
          해드려요.
        </Card.Subtitle>
      </div>
      <div className="ml-8 h-full rounded-tl-3xl bg-gray-100 p-8 flex flex-col gap-5 overflow-hidden">
        <ChatItem />
        <ChatItem />
        <ChatItem />
      </div>
    </Card>
  );
};

const ChatItem = () => {
  return (
    <div className="flex gap-4">
      <div className="min-w-12 h-12 rounded-full bg-gray-200" />
      <div className="flex flex-col gap-2 justify-center">
        <div className="w-56 h-4 rounded-full bg-gray-200" />
        <div className="w-32 h-4 rounded-full bg-gray-200" />
      </div>
    </div>
  );
};
