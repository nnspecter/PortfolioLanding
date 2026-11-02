import type { HTMLAttributes } from "react";
import { cn } from "@/shared/lib";
import { Container } from "./container";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id: string;
  containerClassName?: string;
}

// Page section with the standard divider and content container.
export function Section({ id, className, containerClassName, children, ...props }: SectionProps) {
  return (
    <section id={id} className={cn("border-b border-[#26262B]", className)} {...props}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
