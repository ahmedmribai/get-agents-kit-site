"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";

type SpotlightProps = {
  children: ReactNode;
  className?: string;
};

// Card whose border and surface light up under the cursor.
// Pointer position is written to CSS variables directly, so React never re-renders.
export function Spotlight({ children, className = "" }: SpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(event: PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }

  return (
    <div ref={ref} onPointerMove={handleMove} className={`spotlight group relative ${className}`}>
      {children}
    </div>
  );
}
