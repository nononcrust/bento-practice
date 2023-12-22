import conference from "@/assets/icons/006.화상회의.svg";
import Image from "next/image";
import { Card } from "../card";

export const ZoomCard = () => {
  return (
    <Card className="p-0 col-span-2 overflow-hidden">
      <div className="p-8">
        <Image src={conference} className="w-12 h-12 mb-2" alt="" />
        <Card.Title>줌 화상회의</Card.Title>
        <Card.Subtitle>화상회의를 통한 실시간 소통이 가능합니다.</Card.Subtitle>
      </div>
      {/* <div className="grid grid-cols-3 bg-gray-100 h-full p-2 gap-2 w-[600px]">
        <ZoomItem />
        <ZoomItem />
        <ZoomItem />
        <ZoomItem />
        <ZoomItem />
        <ZoomItem />
      </div> */}
    </Card>
  );
};

const ZoomItem = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100">
      <div className="w-16 h-16 bg-gray-200 rounded-full" />
    </div>
  );
};
