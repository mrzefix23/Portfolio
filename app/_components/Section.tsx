import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {}

export const Section = ({ className, children, ...props }: SectionProps) => {
  return (
    <section
      className={cn("max-w-7xl px-4 mx-auto flex items-center justify-center", className)}
      {...props}
    >
      {children}
    </section>
  );
};