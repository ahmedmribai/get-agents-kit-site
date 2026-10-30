"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

type CounterProps = {
  to: number;
  className?: string;
};

// Counts up from 0 the first time it scrolls into view. Writes text directly to avoid re-renders.
export function Counter({ to, className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!isInView || reduce || !ref.current) return;
    const node = ref.current;
    const controls = animate(0, to, {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (value) => {
        node.textContent = Math.round(value).toLocaleString("en-US");
      },
    });
    return () => controls.stop();
  }, [isInView, reduce, to]);

  return (
    <span ref={ref} className={className}>
      {to.toLocaleString("en-US")}
    </span>
  );
}
