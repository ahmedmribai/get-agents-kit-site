"use client";

import { CheckCircle, WarningOctagon } from "@phosphor-icons/react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { BoardRow } from "@/lib/incident";

type StatusBoardProps = {
  rows: BoardRow[];
  /** How many rows (from the top) now show the truth instead of the dashboard. */
  revealed: number;
  title: string;
  footer?: React.ReactNode;
};

function Row({ row, isTrue, delay }: { row: BoardRow; isTrue: boolean; delay: number }) {
  const reduce = useReducedMotion();
  return (
    <div className="flex items-center justify-between gap-4 border-t border-line px-5 py-3.5 font-mono text-[13.5px]">
      <span className="text-muted">{row.label}</span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isTrue ? "truth" : "says"}
          initial={reduce ? false : { opacity: 0, y: 8, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8, filter: "blur(4px)" }}
          transition={{ duration: 0.35, delay, ease: [0.16, 1, 0.3, 1] }}
          className={`inline-flex items-center gap-2 whitespace-nowrap ${isTrue ? "text-accent" : "text-ok"}`}
        >
          {isTrue ? <WarningOctagon size={16} weight="fill" aria-hidden /> : <CheckCircle size={16} weight="fill" aria-hidden />}
          {isTrue ? row.truth : row.says}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

// An ops dashboard that reports green until each row is revealed for what it really was.
export function StatusBoard({ rows, revealed, title, footer }: StatusBoardProps) {
  const allTrue = revealed >= rows.length;
  return (
    <div className="overflow-hidden rounded-[18px] border border-line bg-surface/90 shadow-soft backdrop-blur-xl">
      <div className="flex items-center justify-between gap-4 px-5 py-4">
        <span className="font-mono text-[13px] text-muted">{title}</span>
        <span className={`inline-flex items-center gap-2 font-mono text-[12.5px] ${allTrue ? "text-accent" : "text-ok"}`}>
          <span className="live-dot h-2 w-2 rounded-full bg-current" aria-hidden />
          {allTrue ? "nothing worked" : "all systems normal"}
        </span>
      </div>
      {rows.map((row, i) => (
        <Row key={row.label} row={row} isTrue={i < revealed} delay={0} />
      ))}
      {footer}
    </div>
  );
}
