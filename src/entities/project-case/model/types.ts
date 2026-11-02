import type { LucideIcon } from "lucide-react";

export interface ProjectCase {
  id: string;
  // Short name and icon for the case switcher.
  shortTitle: string;
  icon: LucideIcon;
  title: string;
  role: string;
  period: string;
  tagline: string;
  problem: string;
  solution: string;
  businessResult: string;
  techDetails: string[];
  tags: string[];
  metaBadge?: string;
}
