"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { AUDIT } from "@/lib/incident";

// The revenue tile: shows the dashboard's number, then flips to the real one.
export function RevenueFlip() {
  const reduce = useReducedMotion();
  const [isTrue, setIsTrue] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsTrue(true), reduce ? 0 : 2600);
    return () => clearTimeout(timer);
  }, [reduce]);

  return (
    <div className="border-t border-line bg-surface-2/70 px-5 py-5">
      <div className="flex items-end justify-between gap-4">
        <div>
          <span className="block font-mono text-[12.5px] text-muted">{isTrue ? "revenue, live mode" : "revenue, dashboard"}</span>
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isTrue ? "real" : "test"}
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -14 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className={`mt-1 block font-mono text-[2.6rem] font-medium leading-none tracking-[-0.04em] ${isTrue ? "text-accent" : "text-ok"}`}
            >
              {isTrue ? AUDIT.realRevenue : AUDIT.testRevenue}
            </motion.span>
          </AnimatePresence>
        </div>
        <AnimatePresence>
          {isTrue && (
            <motion.span
              initial={reduce ? false : { opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="max-w-[17ch] text-right font-mono text-[12.5px] leading-snug text-muted"
            >
              all {AUDIT.testOrders} orders were test mode
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
