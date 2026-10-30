"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

type StackCardProps = {
  children: ReactNode;
  index: number;
  total: number;
};

// Sticky card that shrinks and dims as the next card slides over it.
export function StackCard({ children, index, total }: StackCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const isLast = index === total - 1;
  const targetScale = 1 - (total - 1 - index) * 0.035;
  const scale = useTransform(scrollYProgress, [0, 1], reduce || isLast ? [1, 1] : [1, targetScale]);
  const opacity = useTransform(scrollYProgress, [0, 1], reduce || isLast ? [1, 1] : [1, 0.55]);

  return (
    <div ref={ref} className="sticky h-[300px] md:h-[280px]" style={{ top: `${96 + index * 22}px` }}>
      <motion.div style={{ scale, opacity }} className="origin-top">
        {children}
      </motion.div>
    </div>
  );
}
