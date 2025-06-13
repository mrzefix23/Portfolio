import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export const Section = ({ className, children, ...props }: HTMLAttributes<HTMLElement>) => {
  return (
    <section
      className={cn("max-w-7xl px-4 mx-auto flex items-center justify-center", className)}
      {...props}
    >
      {children}
    </section>
  );
};