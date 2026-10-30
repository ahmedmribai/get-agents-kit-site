"use client";

import { Check, Copy } from "@phosphor-icons/react";
import { useState } from "react";

type CopyButtonProps = {
  text: string;
  label?: string;
};

export function CopyButton({ text, label = "Copy" }: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1600);
    } catch {
      // Clipboard can be blocked by browser permissions; the text stays selectable.
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={isCopied ? "Copied" : `${label} to clipboard`}
      className="inline-flex items-center gap-1.5 rounded-[9px] border border-line bg-surface-2 px-3 py-1.5 font-sans text-[13px] font-semibold text-fg transition-colors hover:border-muted active:scale-[0.97]"
    >
      {isCopied ? <Check size={14} weight="bold" /> : <Copy size={14} weight="bold" />}
      {isCopied ? "Copied" : label}
    </button>
  );
}
