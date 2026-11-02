import type { HTMLAttributes } from "react";
import { cn } from "@/shared/lib";

// Page content width shared by every section.
export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-12 2xl:px-16",
        className
      )}
      {...props}
    />
  );
}
