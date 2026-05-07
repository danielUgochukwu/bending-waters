import { cn } from "@/lib/utils"

type IconWrapProps = {
  children: React.ReactNode;
  className?: string;
};

export function IconWrap({ children, className }: IconWrapProps) {
  return (
    <div
      className={cn(
        "mb-5 flex size-10 items-center justify-center text-primary transition-colors duration-200",
        className
      )}
    >
      {children}
    </div>
  );
}
