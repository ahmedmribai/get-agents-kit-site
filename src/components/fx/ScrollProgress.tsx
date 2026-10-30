"use client";

import { motion, useScroll, useSpring } from "motion/react";

// Thin accent bar under the nav that fills as the page is read.
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="absolute inset-x-0 -bottom-px h-px origin-left bg-accent"
    />
  );
}
