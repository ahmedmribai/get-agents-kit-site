import { ArrowsClockwise, Funnel, Package, Scales, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { Counter } from "@/components/fx/Counter";
import { Spotlight } from "@/components/fx/Spotlight";
import { Reveal } from "@/components/Reveal";
import { AUDIT } from "@/lib/incident";

const RECEIPTS: { value: number; suffix?: string; label: string; isAlarm?: boolean }[] = [
  { value: AUDIT.ventures, label: "ventures launched by the agent" },
  { value: AUDIT.posts, label: "blog posts published" },
  { value: AUDIT.leads, label: `leads collected, ${AUDIT.mailableLeads} of them mailable` },
  { value: 0, suffix: ".00", label: "dollars of real revenue", isAlarm: true },
];

// The numbers that made the dashboard look alive.
export function Receipts() {
  return (
    <section className="grid grid-cols-2 border-y border-line md:grid-cols-4">
      {RECEIPTS.map(({ value, suffix, label, isAlarm }, i) => (
        <Reveal
          key={label}
          delay={i * 0.07}
          className={`px-5 py-8 md:px-7 md:py-10 ${i % 2 === 1 ? "border-l border-line" : ""} ${i >= 2 ? "border-t border-line md:border-t-0" : ""} ${i === 2 ? "md:border-l" : ""}`}
        >
          <strong
            className={`block font-mono text-[clamp(2rem,3.6vw,3rem)] font-medium leading-none tracking-[-0.05em] ${isAlarm ? "text-accent" : "text-fg"}`}
          >
            {isAlarm && "$"}
            <Counter to={value} />
            {suffix}
          </strong>
          <span className="mt-3 block max-w-[22ch] text-[14.5px] leading-snug text-muted">{label}</span>
        </Reveal>
      ))}
    </section>
  );
}

const FIXES: { name: string; said: string; does: string; icon: Icon; span: string }[] = [
  {
    name: "webhook_rail",
    said: "200 OK, uptime 100%",
    does: "verify, parse, dedupe, record, then fulfil. An empty secret rejects the call instead of skipping the check. Test-mode orders never count as income.",
    icon: ShieldCheck,
    span: "md:col-span-4",
  },
  {
    name: "gates",
    said: "gate healthy",
    does: "“Couldn't measure” becomes UNKNOWN and passes, loudly logged. Only a measured bad result blocks.",
    icon: Funnel,
    span: "md:col-span-2",
  },
  {
    name: "staleness",
    said: "loop running",
    does: "Asks whether running the loop changed anything, not just whether it ran.",
    icon: ArrowsClockwise,
    span: "md:col-span-2",
  },
  {
    name: "attention",
    said: "budget balanced",
    does: "Budget arbitration that proves no part of the system starves.",
    icon: Scales,
    span: "md:col-span-2",
  },
  {
    name: "delivery",
    said: "order delivered",
    does: "Idempotent fulfilment that never drops a paid order or sends the wrong file.",
    icon: Package,
    span: "md:col-span-2",
  },
];

export function Modules() {
  return (
    <section id="modules" className="pt-24 md:pt-36">
      <Reveal>
        <h2 className="max-w-[18ch] text-[clamp(2rem,3.8vw,3rem)] font-semibold leading-[1.05] tracking-[-0.04em]">
          Five fixes, one file each
        </h2>
        <p className="mt-4 max-w-[58ch] text-muted">
          Standard library only, with tests. Install the package or copy the single file you need.
        </p>
      </Reveal>
      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-6">
        {FIXES.map(({ name, said, does, icon: FixIcon, span }, i) => (
          <Reveal key={name} delay={i * 0.07} className={span}>
            <Spotlight className="h-full rounded-[18px] border border-line bg-surface transition-transform duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1">
              <article className="relative z-[1] flex h-full flex-col p-7 md:p-8">
                <div className="flex items-center justify-between gap-4">
                  <span className="icon-tile inline-flex h-11 w-11 items-center justify-center rounded-[12px] border border-line bg-bg text-accent">
                    <FixIcon size={22} weight="duotone" aria-hidden />
                  </span>
                  <span className="font-mono text-[12.5px] text-ok line-through decoration-ok/50">{said}</span>
                </div>
                <h3 className="mt-6 font-mono text-[1.1rem] font-medium">{name}</h3>
                <p className="mt-3 max-w-[54ch] text-[15.5px] leading-relaxed text-muted">{does}</p>
              </article>
            </Spotlight>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
