import { ArrowRight, GithubLogo, TerminalWindow } from "@phosphor-icons/react/dist/ssr";
import { ButtonLink } from "@/components/ButtonLink";
import { CopyButton } from "@/components/CopyButton";
import { RevenueFlip } from "@/components/console/RevenueFlip";
import { StatusBoard } from "@/components/console/StatusBoard";
import { Magnetic } from "@/components/fx/Magnetic";
import { PointerGlow } from "@/components/fx/PointerGlow";
import { Tilt } from "@/components/fx/Tilt";
import { WordReveal } from "@/components/fx/WordReveal";
import { Reveal } from "@/components/Reveal";
import { INCIDENT_ROWS } from "@/lib/incident";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <PointerGlow>
      <div aria-hidden className="grid-bg pointer-events-none absolute inset-0 -z-10" />
      <section className="mx-auto grid w-[min(1200px,100%-32px)] items-center gap-14 pb-16 pt-14 md:w-[min(1200px,100%-48px)] md:grid-cols-[1.05fr_1fr] md:gap-16 md:pb-24 md:pt-24">
        <div>
          <WordReveal
            text="Every check was green. It earned $0."
            muted={["It", "earned"]}
            className="max-w-[12ch] text-[clamp(2.7rem,5.8vw,4.8rem)] font-semibold leading-[1.0] tracking-[-0.05em]"
          />
          <Reveal delay={0.5}>
            <p className="mt-7 max-w-[44ch] text-[1.15rem] leading-relaxed text-muted">
              Five small Python modules that catch the failures autonomous agents hide behind healthy dashboards. Free,
              MIT, standard library.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Magnetic>
                <ButtonLink href={SITE.github}>
                  <GithubLogo size={18} weight="bold" aria-hidden />
                  Read the code
                </ButtonLink>
              </Magnetic>
              <Magnetic>
                <ButtonLink href="/#incidents" variant="ghost">
                  See what broke
                  <ArrowRight size={15} weight="bold" aria-hidden />
                </ButtonLink>
              </Magnetic>
            </div>
            <div className="mt-10 inline-flex items-center gap-4 rounded-[12px] border border-line bg-surface/70 py-2.5 pl-4 pr-2.5 font-mono backdrop-blur">
              <code className="inline-flex items-center gap-2.5 whitespace-nowrap text-[13px] sm:text-sm">
                <TerminalWindow size={17} className="hidden text-accent sm:block" aria-hidden />
                {SITE.installCommand}
              </code>
              <CopyButton text={SITE.installCommand} />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <Tilt max={5} className="group">
            <StatusBoard
              rows={INCIDENT_ROWS}
              revealed={0}
              title="seven / production"
              footer={<RevenueFlip />}
            />
          </Tilt>
          <p className="mt-4 font-mono text-[12.5px] text-muted">
            Real figures from my own agent system, September 2026.
          </p>
        </Reveal>
      </section>
    </PointerGlow>
  );
}
