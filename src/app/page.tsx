import { ChatCard } from "@/components/main/chat-card";
import { HelpCenterCard } from "@/components/main/help-center-card";
import { ServiceCard } from "@/components/main/service-card";
import { ZoomCard } from "@/components/main/zoom-card";

export default function Home() {
  return (
    <>
      <BentoSection />
    </>
  );
}

const BentoSection = () => {
  return (
    <section className="container pt-16 grid grid-cols-3 gap-4 pb-32">
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
