"use client";

import { useInView } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { StatusBoard } from "@/components/console/StatusBoard";
import { INCIDENT_ROWS, INCIDENTS, type Incident } from "@/lib/incident";

type StepProps = {
  incident: Incident;
  index: number;
  isActive: boolean;
  onEnter: (index: number) => void;
};

function Step({ incident, index, isActive, onEnter }: StepProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.6, margin: "-10% 0px -30% 0px" });

  useEffect(() => {
    if (isInView) onEnter(index);
  }, [isInView, index, onEnter]);

  return (
    <div ref={ref} className="flex min-h-[62vh] items-center py-10 md:min-h-[78vh]">
      <div className={`transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-35"}`}>
        <span className="font-mono text-[13px] text-accent">fixed by {incident.fix}</span>
        <h3 className="mt-3 max-w-[22ch] text-[clamp(1.6rem,2.8vw,2.3rem)] font-semibold leading-[1.1] tracking-[-0.035em]">
          {incident.title}
        </h3>
        <p className="mt-4 max-w-[46ch] text-[1.05rem] leading-relaxed text-muted">{incident.body}</p>
      </div>
    </div>
  );
}

// Scrollytelling: the board stays pinned while each incident turns its row from green to the truth.
export function IncidentStory() {
  const [active, setActive] = useState(-1);
  const handleEnter = useCallback((index: number) => setActive((prev) => Math.max(prev, index)), []);

  return (
    <div className="grid gap-6 md:grid-cols-[1fr_1fr] md:gap-16">
      <div className="top-28 z-10 md:sticky md:self-start md:pt-[18vh]">
        <StatusBoard rows={INCIDENT_ROWS} revealed={active + 1} title="seven / production / what the dashboard said" />
        <p className="mt-4 font-mono text-[12.5px] text-muted">
          Green is what monitoring reported. Orange is what was happening.
        </p>
      </div>
      <div>
        {INCIDENTS.map((incident, i) => (
          <Step key={incident.title} incident={incident} index={i} isActive={i === active} onEnter={handleEnter} />
        ))}
      </div>
    </div>
  );
}
