export interface ProjectCase {
  id: string;
  title: string;
  role: string;
  period: string;
  badge: string;
  badgeVariant?: "cyan" | "emerald" | "violet" | "amber" | "default";
  company: string;
  description: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
  tags: string[];
  icon: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  skills: {
    name: string;
    level: string;
    badge?: string;
  }[];
}

export interface MetricItem {
  value: string;
  label: string;
  sublabel: string;
  icon: string;
  color: string;
}

