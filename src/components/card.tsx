import { cn } from "@/lib/utils";

interface CardProps extends React.ComponentPropsWithoutRef<"div"> {
  half?: boolean;
}

export const Card = ({ className, half, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        "rounded-3xl bg-content row-span-2 p-8 min-h-[300px] max-h-[300px] flex flex-col transition border",
        half && "row-span-1 min-h-[142px] max-h-[142px]",
        className,
      )}
      {...props}
    ></div>
  );
};

interface CardTitleProps extends React.ComponentPropsWithoutRef<"h3"> {}

const CardTitle = ({ className, children, ...props }: CardTitleProps) => {
  return (
    <h3 className={cn("font-semibold text-xl", className)} {...props}>
      {children}
    </h3>
  );
};

interface CardSubtitleProps extends React.ComponentPropsWithoutRef<"p"> {}

const CardSubtitle = ({ className, children, ...props }: CardSubtitleProps) => {
  return (
    <p
      className={cn("font-medium text-[15px] text-gray-400 mt-2", className)}
      {...props}
    >
      {children}
    </p>
  );
};

Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;
