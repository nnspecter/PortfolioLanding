type Tone = "default" | "accent" | "muted";

const toneStyles: Record<Tone, string> = {
  default: "text-white font-medium",
  accent: "text-emerald-400 font-medium",
  muted: "text-neutral-300 font-mono text-xs",
};

interface KeyValueListProps {
  items: { label: string; value: string; tone?: Tone }[];
}

export function KeyValueList({ items }: KeyValueListProps) {
  return (
    <dl className="p-3.5 rounded-md bg-[#161618] border border-[#26262B] space-y-2">
      {items.map(({ label, value, tone = "default" }) => (
        <div key={label} className="flex items-center justify-between text-xs sm:text-sm">
          <dt className="text-neutral-400 font-mono">{label}</dt>
          <dd className={toneStyles[tone]}>{value}</dd>
        </div>
      ))}
    </dl>
  );
}
