import conference from "@/assets/icons/006.화상회의.svg";
import Image from "next/image";
import { Card } from "../card";

export const ZoomCard = () => {
  return (
    <Card className="p-0 overflow-hidden md:col-span-2">
      <div className="p-8">
        <Image src={conference} className="w-12 h-12 mb-2" alt="" />
        <Card.Title>줌 화상회의</Card.Title>
        <Card.Subtitle>화상회의를 통한 실시간 소통이 가능합니다.</Card.Subtitle>
      </div>
      <div className="justify-center flex flex-1 px-8">
        <div className="bg-gray-100 rounded-t-3xl w-full h-full flex p-4 pb-0">
          <ZoomLeft />
          <ZoomRight />
        </div>
      </div>
    </Card>
  );
};

const ZoomLeft = () => {
  return (
    <div className="bg-gray-200 rounded-tl-2xl h-full flex justify-center relative w-full">
      <div className="w-[200px] h-8 rounded-xl bg-zinc-900 bottom-4 left-1/2 -translate-x-1/2 absolute opacity-70 flex items-center justify-center gap-3">
        <div className="bg-gray-50 w-3 h-3 rounded-sm" />
        <div className="bg-gray-50 w-3 h-3 rounded-sm" />
        <div className="bg-gray-50 w-3 h-3 rounded-sm" />
        <div className="bg-gray-50 w-3 h-3 rounded-sm" />
        <div className="bg-gray-50 w-3 h-3 rounded-sm" />
        <div className="bg-gray-50 w-3 h-3 rounded-sm" />
        <div className="bg-red-500 w-3 h-3 rounded-sm" />
      </div>
      <div className="flex flex-col items-center">
        <div className="min-w-20 max-w-20 min-h-20 rounded-full bg-white mt-8" />
        <div className="w-32 h-full rounded-t-[40px] bg-white mt-4" />
      </div>
    </div>
  );
};

const ZoomRight = () => {
  return (
    <div className="bg-gray-300 rounded-r-2xl h-full p-3 gap-2 flex flex-col">
      <div className="bg-white w-8 h-8 rounded-lg" />
      <div className="bg-white w-8 h-8 rounded-lg" />
      <div className="bg-white w-8 h-8 rounded-lg" />
      <div className="bg-white w-8 h-8 rounded-lg" />
    </div>
  );
};
