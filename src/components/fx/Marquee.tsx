import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

type MarqueeProps = {
  items: string[];
};

// One kinetic band for the page: the order the webhook rail runs in. Pauses on hover.
export function Marquee({ items }: MarqueeProps) {
  const row = (
    <div className="flex shrink-0 items-center gap-10 pr-10" aria-hidden>
      {items.map((item) => (
        <span key={item} className="flex items-center gap-10">
          <span className="font-mono text-[clamp(1.6rem,3.6vw,3rem)] font-medium tracking-[-0.03em] text-fg/90">{item}</span>
          <ArrowRight size={28} className="text-accent" />
        </span>
      ))}
    </div>
  );

  return (
    <div className="marquee group relative flex overflow-hidden border-y border-line py-7 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
      <p className="sr-only">The rail runs in this order: {items.join(", ")}.</p>
      <div className="marquee-track flex">
        {row}
        {row}
      </div>
    </div>
  );
}
