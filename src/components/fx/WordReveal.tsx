"use client";

import { motion, useReducedMotion } from "motion/react";

type WordRevealProps = {
  text: string;
  className?: string;
  /** Words to render in the muted tone, matched exactly. */
  muted?: string[];
};

// Headline whose words rise into place one after another on load.
export function WordReveal({ text, className, muted = [] }: WordRevealProps) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  return (
    <h1 className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} aria-hidden className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <motion.span
            className={`inline-block ${muted.includes(word) ? "text-muted" : ""}`}
            initial={reduce ? false : { y: "105%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.08 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}
