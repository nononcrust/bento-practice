import { cn } from "@/lib/utils";

interface TitleProps extends React.ComponentPropsWithoutRef<"h1"> {}

export const Title = ({ className, children, ...props }: TitleProps) => {
  return (
    <h1
      className={cn(
        "text-center md:text-left font-bold text-2xl md:text-3xl text-gray-800",
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  );
};
