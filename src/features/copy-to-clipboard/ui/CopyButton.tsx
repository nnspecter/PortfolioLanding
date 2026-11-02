import { Check, Copy } from "lucide-react";
import { useCopyToClipboard } from "../model/useCopyToClipboard";

interface CopyButtonProps {
  value: string;
  title: string;
}

export function CopyButton({ value, title }: CopyButtonProps) {
  const { copied, copy } = useCopyToClipboard();

  return (
    <button
      type="button"
      onClick={() => copy(value)}
      title={title}
      aria-label={title}
      className="p-2 rounded text-neutral-400 hover:text-white hover:bg-[#26262B] transition-colors cursor-pointer"
    >
      {copied ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
    </button>
  );
}
