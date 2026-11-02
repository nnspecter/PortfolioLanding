import type { HTMLAttributes } from "react";
import { cn } from "@/shared/lib";

type BadgeVariant = "default" | "outline";

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-[#1A1A1E] text-neutral-200 border border-[#2E2E32]",
  outline: "bg-transparent text-neutral-300 border border-[#2E2E32]",
};

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium font-mono transition-colors",
        variantStyles[variant],
        className
      )}
      {...props}
    />
  );
}
