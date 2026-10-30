import {
  ArrowsClockwise,
  Cube,
  Funnel,
  Package,
  Scales,
  Scroll,
  ShieldCheck,
  TestTube,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { Counter } from "@/components/fx/Counter";
import { Spotlight } from "@/components/fx/Spotlight";
import { Reveal } from "@/components/Reveal";

const FACTS: { value: number | string; label: string; icon: Icon }[] = [
  { value: 5, label: "modules, one file each", icon: Cube },
  { value: 0, label: "dependencies", icon: Package },
  { value: 29, label: "tests across the five modules", icon: TestTube },
  { value: "MIT", label: "copy, ship, sell what you build", icon: Scroll },
];

const MODULES: { name: string; body: string; icon: Icon; span: string; bg: string }[] = [
  {
    name: "webhook_rail",
    body: "A payment webhook that cannot silently lose money. Verifies the raw bytes, dedupes retries, and flags test-mode orders so they never count as income.",
    icon: ShieldCheck,
    span: "md:col-span-4",
    bg: "bg-[linear-gradient(135deg,var(--tint),transparent_70%)]",
  },
  {
    name: "gates",
    body: "Fail open on “couldn't measure”, closed on “measured bad”. Stops a gate blocking everything because an API returned 429.",
    icon: Funnel,
    span: "md:col-span-2",
    bg: "",
  },
  {
    name: "staleness",
    body: "Catches loops that run forever and change nothing. A health check asks if it ran. This asks if running it did anything.",
    icon: ArrowsClockwise,
    span: "md:col-span-2",
    bg: "bg-surface-2",
  },
  {
    name: "attention",
    body: "Budget arbitration that proves nothing starves. One tunable can quietly become an off-switch for a third of your system.",
    icon: Scales,
    span: "md:col-span-2",
    bg: "dots",
  },
  {
    name: "delivery",
    body: "Idempotent fulfilment that never drops a paid order, and never sends the sales page to the person who just bought it.",
    icon: Package,
    span: "md:col-span-2",
    bg: "bg-[linear-gradient(200deg,var(--tint),transparent_65%)]",
  },
];

export function Facts() {
  return (
    <div className="grid grid-cols-2 border-y border-line md:grid-cols-4">
      {FACTS.map(({ value, label, icon: FactIcon }, i) => (
        <Reveal
          key={label}
          delay={i * 0.06}
          className={`group flex items-start gap-3.5 px-5 py-7 md:px-7 ${i % 2 === 1 ? "border-l border-line" : ""} ${i >= 2 ? "border-t border-line md:border-t-0" : ""} ${i === 2 ? "md:border-l" : ""}`}
        >
          <span className="icon-tile mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border border-line bg-surface text-accent">
            <FactIcon size={18} weight="duotone" aria-hidden />
          </span>
          <div>
            <strong className="block text-[1.9rem] font-semibold leading-none tracking-[-0.04em]">
              {typeof value === "number" ? <Counter to={value} /> : value}
            </strong>
            <span className="mt-1.5 block text-[14px] text-muted">{label}</span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function Modules() {
  return (
    <section id="modules" className="pt-24 md:pt-36">
      <Reveal>
        <h2 className="max-w-[20ch] text-[clamp(2rem,3.8vw,3rem)] font-semibold leading-[1.05] tracking-[-0.04em]">
          Five failures that never raise an error
        </h2>
        <p className="mt-4 max-w-[60ch] text-muted">
          Each module is one file with tests. Install the package or copy only the file you need.
        </p>
      </Reveal>
      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-6">
        {MODULES.map(({ name, body, icon: ModuleIcon, span, bg }, i) => (
          <Reveal key={name} delay={i * 0.07} className={span}>
            <Spotlight className="h-full rounded-[16px] border border-line bg-surface transition-transform duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1">
              <article className={`relative z-[1] h-full rounded-[16px] p-7 md:p-8 ${bg}`}>
                <span className="icon-tile inline-flex h-11 w-11 items-center justify-center rounded-[12px] border border-line bg-bg/70 text-accent">
                  <ModuleIcon size={22} weight="duotone" aria-hidden />
                </span>
                <h3 className="mt-6 font-mono text-[1.08rem] font-medium">{name}</h3>
                <p className="mt-3 max-w-[52ch] text-[15.5px] leading-relaxed text-muted">{body}</p>
              </article>
            </Spotlight>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
