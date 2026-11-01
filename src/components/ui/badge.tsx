import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "success" | "accent";
}

function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  const variantStyles = {
    default:
      "bg-[#1A1A1E] text-neutral-200 border border-[#2E2E32]",
    secondary:
      "bg-neutral-900 text-neutral-400 border border-neutral-800",
    outline:
      "bg-transparent text-neutral-300 border border-[#2E2E32]",
    success:
      "bg-[#0D2818] text-[#4ADE80] border border-[#166534]",
    accent:
      "bg-[#082F49] text-[#38BDF8] border border-[#0369A1]",
  };

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

export { Badge };
