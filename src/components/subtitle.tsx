import { cn } from "@/lib/utils";

interface SubtitleProps extends React.ComponentPropsWithoutRef<"h2"> {}

export const Subtitle = ({ className, children, ...props }: SubtitleProps) => {
  return (
    <h2
      className={cn(
        "text-center md:text-left font-medium md:text-xl text-gray-400 mt-2",
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
};
