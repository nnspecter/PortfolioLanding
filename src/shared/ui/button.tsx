import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/shared/lib";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "link";
type ButtonSize = "default" | "sm" | "lg" | "icon";

interface ButtonStyleProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const baseStyles =
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-500 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer active:scale-95 box-border leading-none [&_svg]:transition-colors [&_svg]:duration-500";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-white text-black font-semibold border border-white shadow-[inset_0_0_0_0_#0A0A0A] hover:shadow-[inset_0_100px_0_0_#0A0A0A] hover:text-white hover:border-white",
  secondary:
    "bg-[#1C1C1F] text-white border border-[#2E2E32] shadow-[inset_0_0_0_0_#ffffff] hover:shadow-[inset_0_-100px_0_0_#ffffff] hover:text-black hover:border-white",
  outline:
    "bg-transparent text-white border border-[#2E2E32] shadow-[inset_0_0_0_0_#ffffff] hover:shadow-[inset_0_-100px_0_0_#ffffff] hover:text-black hover:border-white",
  ghost: "text-neutral-400 hover:text-white hover:bg-[#1A1A1E] border border-transparent",
  link: "text-white underline-offset-4 hover:underline p-0 h-auto border-0",
};

const sizeStyles: Record<ButtonSize, string> = {
  default: "h-10 px-4 py-2",
  sm: "h-8 rounded-md px-3 text-xs",
  lg: "h-11 rounded-lg px-6 text-sm font-semibold",
  icon: "h-10 w-10 p-0",
};

// Button look for any element, e.g. a link styled as a button
// (nesting <button> inside <a> is invalid HTML).
export function buttonVariants({ variant = "primary", size = "default" }: ButtonStyleProps = {}) {
  return cn(baseStyles, variantStyles[variant], sizeStyles[size]);
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, ButtonStyleProps {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, type = "button", ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
);
Button.displayName = "Button";
