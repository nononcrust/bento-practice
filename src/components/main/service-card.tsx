import calendar from "@/assets/icons/003.일정,캘린더.svg";
import Image from "next/image";
import { Card } from "../card";

export const ServiceCard = () => {
  return (
    <Card className="p-0">
      <div className="p-8">
        <Image src={calendar} className="w-12 h-12 mb-2" alt="" />
        <Card.Title>루틴, 기상알림</Card.Title>
        <Card.Subtitle>스마트한 방법으로 루틴을 시작해보세요.</Card.Subtitle>
      </div>
      <div className="flex justify-center overflow-hidden gap-4">
        <div className="min-w-[150px] h-[180px] rounded-3xl bg-gray-100 p-4"></div>
        <div className="min-w-[150px] h-[180px] rounded-3xl bg-gray-100 flex flex-col gap-4 p-6">
          <div className="bg-gray-200 rounded-full h-4 w-full" />
          <div className="bg-gray-200 rounded-full h-4 w-full" />
          <div className="bg-gray-200 rounded-full h-4 w-full" />
          <div className="bg-gray-200 rounded-full h-4 w-full" />
          <div className="bg-gray-200 rounded-full h-4 w-full" />
        </div>
        <div className="min-w-[150px] h-[180px] rounded-3xl bg-gray-100"></div>
      </div>
    </Card>
  );
};
