import { cn } from "@/lib/utils";

interface CardProps extends React.ComponentPropsWithoutRef<"div"> {}

export const Card = ({ className, children, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        "rounded-3xl bg-[#1D1C20] min-h-[400px] max-h-[400px] border border-white/[0.08]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

interface TitleProps extends React.ComponentPropsWithoutRef<"h3"> {}

const Title = ({ className, children, ...props }: TitleProps) => {
  return (
    <h3 className={cn("text-xl text-white", className)} {...props}>
      {children}
    </h3>
  );
};

interface SubtitleProps extends React.ComponentPropsWithoutRef<"p"> {}

const Subtitle = ({ className, children, ...props }: SubtitleProps) => {
  return (
    <p
      className={cn(
        "text-stone-400 text-[15px] mt-2 whitespace-pre-wrap",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
};

Card.Title = Title;
Card.Subtitle = Subtitle;
