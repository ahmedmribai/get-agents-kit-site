import { Broadcast, Copy as CopyIcon, Flask, Key, Pulse, Plugs } from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { CopyButton } from "@/components/CopyButton";
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
    <section className="grid items-start gap-8 pt-20 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:pt-28">
      <div className="md:sticky md:top-24">
        <h2 className="max-w-[18ch] text-[clamp(1.9rem,3.5vw,2.7rem)] font-semibold leading-[1.08] tracking-[-0.035em]">
          The money rail that had never once fired
        </h2>
        <p className="mt-4 max-w-[52ch] text-muted">
          A live product, a working checkout, a correct handler, and $0 recorded. Four separate breaks, each silent,
          stacked on top of each other.
        </p>
      </div>
      <ul className="grid gap-3.5">
        {BREAKS.map(({ title, body, icon: BreakIcon }, i) => (
          <Reveal as="li" key={title} delay={i * 0.06} className="flex gap-4 rounded-[14px] border border-line bg-surface p-6">
              <BreakIcon size={22} weight="duotone" className="mt-0.5 shrink-0 text-accent" aria-hidden />
              <div>
                <strong className="block font-semibold">{title}</strong>
                <span className="mt-1 block text-muted">{body}</span>
              </div>
          </Reveal>
        ))}
        <Reveal as="li" delay={0.3} className="flex gap-4 rounded-[14px] border border-dashed border-line p-6 text-muted">
            <Pulse size={22} className="mt-0.5 shrink-0" aria-hidden />
            Uptime, error rate and latency stayed green throughout. The endpoint was up. Nothing ever asked it to do
            anything.
        </Reveal>
      </ul>
    </section>
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
    if (part.startsWith('"')) return <span key={i} className="text-fg/80">{part}</span>;
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
  return (
    <section id="quickstart" className="pt-20 md:pt-28">
      <h2 className="text-[clamp(1.9rem,3.5vw,2.7rem)] font-semibold leading-[1.08] tracking-[-0.035em]">
        Wire it in with one call
      </h2>
      <p className="mt-4 max-w-[60ch] text-muted">
        The rail runs verify, parse, dedupe, record, then fulfil. A failed delivery never rolls back the recorded sale.
      </p>
      <Reveal className="mt-11 overflow-hidden rounded-[14px] border border-line bg-surface shadow-soft">
        <div className="flex items-center justify-between border-b border-line bg-surface-2 px-4 py-3 font-mono text-[13px] text-muted">
          <span className="inline-flex items-center gap-2">
            <Broadcast size={16} aria-hidden />
            app.py
          </span>
          <CopyButton text={QUICKSTART} />
        </div>
        <pre className="overflow-x-auto px-5 py-6 font-mono text-[14px] leading-[1.75]">
          <code>
            {QUICKSTART.split("\n").map((line, i) => (
              <span key={i} className="block">
                {highlight(line)}
                {line === "" ? " " : null}
              </span>
            ))}
          </code>
        </pre>
      </Reveal>
    </section>
  );
}
