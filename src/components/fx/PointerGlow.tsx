"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";

type PointerGlowProps = {
  children: ReactNode;
  className?: string;
};

// Section with slow aurora blobs plus a soft light that follows the cursor.
export function PointerGlow({ children, className = "" }: PointerGlowProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(event: PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--gx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--gy", `${event.clientY - rect.top}px`);
  }

  return (
    <div ref={ref} onPointerMove={handleMove} className={`pointer-glow relative isolate overflow-hidden ${className}`}>
      <div aria-hidden className="aurora pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <span className="aurora-blob aurora-a" />
        <span className="aurora-blob aurora-b" />
      </div>
      {children}
    </div>
  );
}
