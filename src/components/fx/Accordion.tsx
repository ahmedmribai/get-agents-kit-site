"use client";

import { Plus } from "@phosphor-icons/react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useId, useState } from "react";

type AccordionItem = { q: string; a: string };

// FAQ list with animated open and close. One item open at a time.
export function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduce = useReducedMotion();
  const baseId = useId();

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map(({ q, a }, i) => {
        const isOpen = openIndex === i;
        const panelId = `${baseId}-panel-${i}`;
        return (
          <div key={q}>
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="group flex w-full items-center justify-between gap-6 py-6 text-left text-[1.05rem] font-semibold transition-colors hover:text-accent"
            >
              {q}
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line transition-[transform,border-color,background-color] duration-300 group-hover:border-accent/60 ${isOpen ? "rotate-45 bg-accent text-accent-ink" : "text-accent"}`}
              >
                <Plus size={16} weight="bold" aria-hidden />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  key="panel"
                  initial={reduce ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-[68ch] pb-6 text-muted">{a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
