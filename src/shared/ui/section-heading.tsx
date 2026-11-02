import { cn } from "@/shared/lib";
import { Badge } from "./badge";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
}

// Badge + title + lead text that opens a section; centered on mobile.
export function SectionHeading({ eyebrow, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl mx-auto md:mx-0 space-y-3 text-center md:text-left", className)}>
      <Badge variant="outline">{eyebrow}</Badge>
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-[-0.04em]">
        {title}
      </h2>
      <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">{description}</p>
    </div>
  );
}
