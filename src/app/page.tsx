import { ChatCard } from "@/components/main/chat-card";
import { HelpCenterCard } from "@/components/main/help-center-card";
import { ServiceCard } from "@/components/main/service-card";
import { ZoomCard } from "@/components/main/zoom-card";

export default function Home() {
  return (
    <>
      <BentoSection />
      <FooterSection />
    </>
  );
}

const BentoSection = () => {
  return (
    <section className="container pt-16 grid grid-cols-1 md:grid-cols-3 gap-4 pb-32">
      <HelpCenterCard />
      <ServiceCard />
      <ChatCard />
      <ZoomCard />
    </section>
  );
};

// const Blur = () => {
//   return (
//     <div
//       className="w-full h-[160px] absolute left-0 right-0 bottom-0 z-10"
//       style={{ backgroundImage: "linear-gradient(transparent, #FFFFFF 80%)" }}
//     />
//   );
// };

// interface IconHeaderProps {
//   className?: string;
//   children: React.ReactNode;
// }

// const IconHeader = ({ children, className }: IconHeaderProps) => {
//   return (
//     <div className={cn("bg-white border rounded-full p-2", className)}>
//       {children}
//     </div>
//   );
// };

const FooterSection = () => {
  return (
    <section className="py-32 bg-zinc-800">
      <div className="container">
        <h2 className="text-4xl font-bold text-white">
          더 자세히 알고 싶다면?
        </h2>
        <button className="h-16 flex items-center rounded-full px-8 font-semibold text-lg text-white mt-8 bg-gradient-to-b from-primary to-primary-dark from-40%">
          자세히 알아보기
        </button>
      </div>
    </section>
  );
};
