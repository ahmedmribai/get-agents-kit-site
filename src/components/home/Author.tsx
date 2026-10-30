import { LogoMark } from "@/components/brand/Logo";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/site";

// Personal note in the founder's own voice.
export function Author() {
  return (
    <section className="pt-24 md:pt-36">
      <Reveal className="grid gap-10 rounded-[24px] border border-line bg-surface p-7 md:grid-cols-[0.8fr_1.2fr] md:gap-16 md:p-14">
        <blockquote className="text-[clamp(1.6rem,3vw,2.4rem)] font-semibold leading-[1.15] tracking-[-0.035em]">
          &ldquo;The site is up. Everything that reports back from it is not.&rdquo;
          <footer className="mt-5 font-mono text-[13px] font-normal tracking-normal text-muted">
            from my own audit, September 2026
          </footer>
        </blockquote>
        <div className="text-[1.05rem] leading-relaxed text-muted">
          <p>
            I built an autonomous agent company and let it run for months. It launched 40 ventures, published over a
            thousand posts and collected two thousand leads. Every dashboard was green.
          </p>
          <p className="mt-4">
            It earned nothing. Not because it crashed, but because five failures were invisible from the outside. When I
            finally audited it, the only &ldquo;revenue&rdquo; on record came from test-mode orders.
          </p>
          <p className="mt-4">
            Agents Kit is what I wish I had on day one: the five fixes as small, tested files, and the full write-up of
            how each one was found.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <LogoMark size={36} />
            <div>
              <span className="block font-semibold text-fg">{SITE.author}</span>
              <span className="block font-mono text-[12.5px]">maker of Agents Kit</span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
