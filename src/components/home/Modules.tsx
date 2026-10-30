import {
  ArrowsClockwise,
  Cube,
  Funnel,
  Package,
  Scales,
  ShieldCheck,
  TestTube,
  Scroll,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { Reveal } from "@/components/Reveal";

const FACTS: { value: string; label: string; icon: Icon }[] = [
  { value: "5", label: "modules, one file each", icon: Cube },
  { value: "0", label: "dependencies", icon: Package },
  { value: "29", label: "tests across the five modules", icon: TestTube },
  { value: "MIT", label: "copy, ship, sell what you build", icon: Scroll },
];

const MODULES: { name: string; body: string; icon: Icon; span: string; bg: string }[] = [
  {
    name: "webhook_rail",
    body: "A payment webhook that cannot silently lose money. Verifies the raw bytes, dedupes retries, and flags test-mode orders so they never count as income.",
    icon: ShieldCheck,
    span: "md:col-span-4", bg: "bg-[linear-gradient(135deg,var(--tint),transparent_70%)]",
  },
  {
    name: "gates",
    body: "Fail open on “couldn't measure”, closed on “measured bad”. Stops a gate blocking everything because an API returned 429.",
    icon: Funnel,
    span: "md:col-span-2", bg: "",
  },
  {
    name: "staleness",
    body: "Catches loops that run forever and change nothing. A health check asks if it ran. This asks if running it did anything.",
    icon: ArrowsClockwise,
    span: "md:col-span-2", bg: "bg-surface-2",
  },
  {
    name: "attention",
    body: "Budget arbitration that proves nothing starves. One tunable can quietly become an off-switch for a third of your system.",
    icon: Scales,
    span: "md:col-span-2", bg: "dots",
  },
  {
    name: "delivery",
    body: "Idempotent fulfilment that never drops a paid order, and never sends the sales page to the person who just bought it.",
    icon: Package,
    span: "md:col-span-2", bg: "bg-[linear-gradient(200deg,var(--tint),transparent_65%)]",
  },
];

export function Facts() {
  return (
    <div className="mt-16 grid grid-cols-2 border-y border-line md:grid-cols-4">
      {FACTS.map(({ value, label, icon: FactIcon }, i) => (
        <div
          key={label}
          className={`flex items-start gap-3 px-5 py-6 md:px-6 ${i % 2 === 1 ? "border-l border-line" : ""} ${i >= 2 ? "border-t border-line md:border-t-0" : ""} ${i === 2 ? "md:border-l" : ""}`}
        >
          <FactIcon size={20} className="mt-1 shrink-0 text-accent" aria-hidden />
          <div>
            <strong className="block text-[1.6rem] font-semibold leading-tight tracking-[-0.03em]">{value}</strong>
            <span className="text-[14.5px] text-muted">{label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Modules() {
  return (
    <section id="modules" className="pt-20 md:pt-28">
      <h2 className="max-w-[20ch] text-[clamp(1.9rem,3.5vw,2.7rem)] font-semibold leading-[1.08] tracking-[-0.035em]">
        Five failures that never raise an error
      </h2>
      <p className="mt-4 max-w-[60ch] text-muted">
        Each module is one file with tests. Install the package or copy only the file you need.
      </p>
      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-6">
        {MODULES.map(({ name, body, icon: ModuleIcon, span, bg }, i) => (
          <Reveal key={name} delay={i * 0.05} className={`${span} group rounded-[14px] border border-line bg-surface transition-colors hover:border-accent/50`}>
            <article className={`h-full rounded-[14px] p-7 ${bg}`}>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] border border-line bg-bg/60 text-accent">
                <ModuleIcon size={20} weight="duotone" aria-hidden />
              </span>
              <h3 className="mt-5 font-mono text-[1.05rem] font-medium">{name}</h3>
              <p className="mt-3 max-w-[52ch] text-[15.5px] leading-relaxed text-muted">{body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
