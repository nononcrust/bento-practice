import chat from "@/assets/icons/002.대화,채팅.svg";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Card } from "../card";

export const ChatCard = () => {
  return (
    <Card className="p-0">
      <div className="p-8 flex flex-col">
        <Image src={chat} className="w-12 h-12 mb-2" alt="" />
        <Card.Title>1:1 채팅 상담</Card.Title>
        <Card.Subtitle>
          궁금한 점을 채팅으로 물어보시면 매니저가 친절히 답변해드릴게요.
        </Card.Subtitle>
      </div>
      <Mobile />
    </Card>
  );
};

const Mobile = () => {
  return (
    <div className="flex justify-center flex-1">
      <div className="rounded-t-3xl bg-gray-100 w-[180px] flex flex-col p-3 pb-0">
        <div className="flex gap-2 items-center">
          <div className="rounded-full bg-gray-200 w-8 h-8" />
          <div className="flex flex-col gap-1">
            <div className="h-3 rounded-full bg-gray-200 w-[100px]" />
            <div className="h-3 rounded-full bg-gray-200 w-[80px]" />
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-2">
          <ChatItem direction="left">어떻게 도와드릴까요?</ChatItem>
          <ChatItem direction="right">안녕하세요!</ChatItem>
          <ChatItem direction="right">컨설팅 진행 과정이 궁금해요</ChatItem>
          <ChatItem direction="left">컨설팅 진행 과정은...</ChatItem>
        </div>
      </div>
    </div>
  );
};

interface ChatItemProps {
  direction?: "left" | "right";
  children?: React.ReactNode;
}

const ChatItem = ({ direction = "left", children }: ChatItemProps) => {
  return (
    <div className={cn("flex", direction === "right" && "justify-end")}>
      <div
        className={cn(
          "rounded-full bg-white flex justify-center items-center text-[10px] p-1 px-2",
          direction === "left" && "rounded-tl-none",
          direction === "right" && "rounded-tr-none bg-primary text-white",
        )}
      >
        {children}
      </div>
    </div>
  );
};
