import instagramIcon from "@/assets/icons/Instagram_icon.png";
import naverBlogIcon from "@/assets/icons/naver-blog.png";
import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { Header } from "@/components/header";
import { Icon } from "@/components/icon";
import { LogoSliderCard } from "@/components/logo-slider-card";
import { ReviewSection } from "@/components/review-section";
import { cn } from "@/lib/utils";
import {
  ArrowRightIcon,
  BellIcon,
  PhoneIcon,
  SparkleIcon,
  TrophyIcon,
  ZapIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <div className="min-h-screen pb-32 bg-background">
        <BentoSection />
        <ReviewSection />
      </div>
    </>
  );
}

const BentoSection = () => {
  return (
    <main className="container pt-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="md:col-span-2 bg-zinc-800 text-white">
          <div className="flex mt-4 mb-2">
            <p className="text-primary font-semibold">Toss Payments</p>
          </div>
          <Card.Title>한국 금융의 기준, 토스 페이먼츠</Card.Title>
          <Card.Subtitle>
            AI 기반 디자인 유틸리티를 사용하여 창의력을 발휘하고 아이디어에
            생기를 불어넣으세요. 창의력을 발휘하고 아이디어에 생기를
            불어넣으세요.
          </Card.Subtitle>
          <div className="mt-8">
            <Link href="/diagram">
              <Button className="h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6">
                서비스 둘러보기
              </Button>
            </Link>
          </div>
        </Card>
        <LogoSliderCard />
        <Card>
          <div className="flex mb-4">
            <IconHeader>
              <Icon.Flag />
            </IconHeader>
          </div>
          <Card.Title>결제 데이터 리포트</Card.Title>
          <Card.Subtitle>
            AI 기반 디자인 유틸리티를 사용하여 창의력을 발휘하고 아이디어에
            생기를 불어넣으세요.
          </Card.Subtitle>
          <div className="flex flex-1 items-end">
            <Button variant="outline">자세히 보기</Button>
          </div>
        </Card>
        <Card>
          <div className="flex mb-4">
            <IconHeader>
              <Icon.People />
            </IconHeader>
          </div>
          <Card.Title>해외결제</Card.Title>
          <Card.Subtitle>
            AI 기반 디자인 유틸리티를 사용하여 창의력을 발휘하고 아이디어에
            생기를 불어넣으세요.
          </Card.Subtitle>
          <div className="flex flex-1 items-end">
            <Button variant="outline">자세히 보기</Button>
          </div>
        </Card>
        <Card>
          <div className="flex mb-4">
            <IconHeader>
              <Icon.Megaphone />
            </IconHeader>
          </div>
          <Card.Title>정산지급대행 서비스</Card.Title>
          <Card.Subtitle>
            AI 기반 디자인 유틸리티를 사용하여 창의력을 발휘하고 아이디어에
            생기를 불어넣으세요.
          </Card.Subtitle>
          <div className="flex flex-1 items-end">
            <Button variant="outline">자세히 보기</Button>
          </div>
        </Card>
        <Card>
          <div className="flex mb-4">
            <IconHeader>
              <Icon.Box />
            </IconHeader>
          </div>
          <Card.Title>현금영수증 무료발급</Card.Title>
          <Card.Subtitle>
            AI 기반 디자인 유틸리티를 사용하여 창의력을 발휘하고 아이디어에
            생기를 불어넣으세요.
          </Card.Subtitle>
          <div className="flex flex-1 items-end text-gray-400">
            1월 초 오픈예정
          </div>
        </Card>
        <Card>
          <div className="flex mb-4">
            <IconHeader>
              <Icon.Email />
            </IconHeader>
          </div>
          <Card.Title>SNS 커뮤니티</Card.Title>
          <Card.Subtitle>
            AI 기반 디자인 유틸리티를 사용하여 창의력을 발휘하고 아이디어에
            생기를 불어넣으세요.
          </Card.Subtitle>
          <div className="flex gap-2 flex-1 items-end">
            <Image className="w-10 h-10" src={instagramIcon} alt="" />
            <Image
              src={naverBlogIcon}
              className="w-10 h-10 rounded-[10px]"
              alt=""
            />
          </div>
        </Card>
        <Card half>
          <div className="flex justify-between items-enter">
            <div className="flex gap-2 items-center">
              <BellIcon className="w-5 h-5 text-primary fill-primary" />
              <Card.Title>토스 페이먼츠</Card.Title>
            </div>
            <ArrowRightIcon className="bg-gray-200 rounded-full p-1 w-6 h-6" />
          </div>
          <Card.Subtitle className="text-gray-400">
            AI 기반 디자인 유틸리티를 사용하여 창의력을 발휘하고 아이디어에
          </Card.Subtitle>
        </Card>
        <Card half>
          <div className="flex gap-2 items-center">
            <TrophyIcon className="w-4 h-4 text-primary fill-primary" />
            <Card.Title>신용카드</Card.Title>
          </div>
          <Card.Subtitle>
            AI 기반 디자인 유틸리티를 사용하여 창의력을 발휘하고 아이디어에
          </Card.Subtitle>
        </Card>
        <Card half>
          <div className="flex gap-2 items-center">
            <PhoneIcon className="w-4 h-4 text-primary fill-primary" />
            <Card.Title>휴대폰 결제</Card.Title>
          </div>
          <Card.Subtitle>
            AI 기반 디자인 유틸리티를 사용하여 창의력을 발휘하고 아이디어에
          </Card.Subtitle>
        </Card>
        <Card half>
          <div className="flex gap-2 items-center">
            <SparkleIcon className="w-5 h-5 text-primary fill-primary" />
            <Card.Title>미리받기</Card.Title>
          </div>
          <Card.Subtitle>
            AI 기반 디자인 유틸리티를 사용하여 창의력을 발휘하고 아이디어에
          </Card.Subtitle>
        </Card>
        <Card half>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <ZapIcon className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <Card.Title>오프라인 모임</Card.Title>
            </div>
            <ArrowRightIcon className="bg-gray-200 rounded-full p-1 w-6 h-6" />
          </div>
          <Card.Subtitle>
            AI 기반 디자인 유틸리티를 사용하여 창의력을 발휘하고 아이디어에
          </Card.Subtitle>
        </Card>
      </div>
    </main>
  );
};

interface IconHeaderProps {
  className?: string;
  children: React.ReactNode;
}

const IconHeader = ({ children, className }: IconHeaderProps) => {
  return (
    <div className={cn("bg-white border rounded-full p-2", className)}>
      {children}
    </div>
  );
};
