import { Copy as CopyIcon, FileCode, Flask, Key, Plugs } from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { CopyButton } from "@/components/CopyButton";
import { Marquee } from "@/components/fx/Marquee";
import { ScrollText } from "@/components/fx/ScrollText";
import { Spotlight } from "@/components/fx/Spotlight";
import { StackCard } from "@/components/fx/StackCard";
import { Reveal } from "@/components/Reveal";

const BREAKS: { title: string; body: string; icon: Icon }[] = [
  {
    title: "Wrong service",
    body: "The webhook was registered against a sibling backend that did not own fulfilment. It had never fired once.",
    icon: Plugs,
  },
  { title: "Test mode", body: "It was registered in test mode, so a real purchase would have sent nothing at all.", icon: Flask },
  {
    title: "Empty secret",
    body: "Verification returned False for every call, so even correctly routed events were rejected.",
    icon: Key,
  },
  { title: "No dedupe", body: "Anything that did get through would have been counted twice.", icon: CopyIcon },
];

export function Incident() {
  return (
    <section className="pt-24 md:pt-36">
      <div className="grid items-start gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        <div className="md:sticky md:top-28">
          <h2 className="max-w-[16ch] text-[clamp(2rem,3.8vw,3rem)] font-semibold leading-[1.05] tracking-[-0.04em]">
            The money rail that had never once fired
          </h2>
          <p className="mt-4 max-w-[48ch] text-muted">
            A live product, a working checkout, a correct handler, and $0 recorded. Four separate breaks, each silent,
            stacked on top of each other.
          </p>
        </div>
        <div>
          {BREAKS.map(({ title, body, icon: BreakIcon }, i) => (
            <StackCard key={title} index={i} total={BREAKS.length}>
              <Spotlight className="rounded-[18px] border border-line bg-surface shadow-soft">
                <div className="relative z-[1] flex gap-5 p-7 md:p-9">
                  <span className="icon-tile flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] border border-line bg-bg/70 text-accent">
                    <BreakIcon size={24} weight="duotone" aria-hidden />
                  </span>
                  <div>
                    <strong className="block text-[1.35rem] font-semibold tracking-[-0.02em]">{title}</strong>
                    <span className="mt-2 block max-w-[46ch] leading-relaxed text-muted">{body}</span>
                  </div>
                </div>
              </Spotlight>
            </StackCard>
          ))}
        </div>
      </div>
      <ScrollText
        text="Uptime, error rate and latency stayed green the whole time. The endpoint was up. Nothing ever asked it to do anything."
        className="mx-auto mt-10 max-w-[30ch] text-center text-[clamp(1.7rem,3.6vw,2.9rem)] font-semibold leading-[1.18] tracking-[-0.035em]"
      />
    </section>
  );
}

export function Pipeline() {
  return (
    <div className="pt-24 md:pt-32">
      <Marquee items={["verify", "parse", "dedupe", "record", "fulfil"]} />
    </div>
  );
}

const QUICKSTART = `import os
from agents_kit import webhook_rail

# Lemon Squeezy sends X-Signature and X-Event-Name headers
status, body = webhook_rail.handle(
    raw_body=request.get_data(),
    signature=request.headers.get("X-Signature", ""),
    event_name=request.headers.get("X-Event-Name", ""),
    secret=os.environ["LEMONSQUEEZY_WEBHOOK_SECRET"],
    ledger=orders,        # your store: .seen(id) and .record(...)
    fulfil=send_download,
)`;

// Tiny highlighter for the one Python snippet: keywords, strings, comments.
function highlight(line: string) {
  const comment = line.indexOf("#");
  const code = comment >= 0 ? line.slice(0, comment) : line;
  const parts = code.split(/("[^"]*")/g).map((part, i) => {
    if (part.startsWith('"')) return <span key={i} className="text-[#e9c46a]">{part}</span>;
    return part.split(/\b(import|from)\b/g).map((word, j) =>
      word === "import" || word === "from" ? (
        <span key={`${i}-${j}`} className="text-accent">{word}</span>
      ) : (
        word
      ),
    );
  });
  return (
    <>
      {parts}
      {comment >= 0 && <span className="text-muted">{line.slice(comment)}</span>}
    </>
  );
}

export function QuickStart() {
  const lines = QUICKSTART.split("\n");
  return (
    <section id="quickstart" className="pt-24 md:pt-32">
      <Reveal>
        <h2 className="text-[clamp(2rem,3.8vw,3rem)] font-semibold leading-[1.05] tracking-[-0.04em]">Wire it in with one call</h2>
        <p className="mt-4 max-w-[60ch] text-muted">
          The rail runs verify, parse, dedupe, record, then fulfil. A failed delivery never rolls back the recorded sale.
        </p>
      </Reveal>
      <Reveal delay={0.1} className="mt-11">
        <Spotlight className="overflow-hidden rounded-[18px] border border-line bg-surface shadow-soft">
          <div className="relative z-[1]">
            <div className="flex items-center justify-between border-b border-line bg-surface-2 px-4 py-3 font-mono text-[13px] text-muted">
              <span className="inline-flex items-center gap-2">
                <FileCode size={16} aria-hidden />
                app.py
              </span>
              <CopyButton text={QUICKSTART} />
            </div>
            <pre className="overflow-x-auto px-5 py-6 font-mono text-[14px] leading-[1.8] md:px-7">
              <code>
                {lines.map((line, i) => (
                  <span key={i} className="grid grid-cols-[2.2rem_1fr]">
                    <span className="select-none text-right text-muted/50 pr-4">{i + 1}</span>
                    <span>{line === "" ? " " : highlight(line)}</span>
                  </span>
                ))}
              </code>
            </pre>
          </div>
        </Spotlight>
      </Reveal>
    </section>
  );
}
