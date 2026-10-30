import { ArrowRight, GithubLogo, TerminalWindow } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { CopyButton } from "@/components/CopyButton";
import { Magnetic } from "@/components/fx/Magnetic";
import { Parallax } from "@/components/fx/Parallax";
import { PointerGlow } from "@/components/fx/PointerGlow";
import { Reveal } from "@/components/Reveal";
import { Tilt } from "@/components/fx/Tilt";
import { WordReveal } from "@/components/fx/WordReveal";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <PointerGlow>
      <section className="mx-auto grid w-[min(1200px,100%-32px)] items-center gap-14 pb-12 pt-14 md:w-[min(1200px,100%-48px)] md:grid-cols-[1fr_1.05fr] md:gap-16 md:pb-20 md:pt-24">
        <div>
          <WordReveal
            text="Your agent says it worked. Nothing did."
            muted={["Nothing", "did."]}
            className="max-w-[13ch] text-[clamp(2.6rem,5.6vw,4.6rem)] font-semibold leading-[1.02] tracking-[-0.045em]"
          />
          <Reveal delay={0.45}>
            <p className="mt-6 max-w-[44ch] text-[1.15rem] leading-relaxed text-muted">
              Five small Python modules that stop autonomous agents failing silently. Standard library only, free and MIT
              licensed.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Magnetic>
                <ButtonLink href={SITE.github}>
                  <GithubLogo size={18} weight="bold" aria-hidden />
                  Read the code
                </ButtonLink>
              </Magnetic>
              <Magnetic>
                <ButtonLink href="/#quickstart" variant="ghost">
                  See the quick start
                  <ArrowRight size={15} weight="bold" aria-hidden />
                </ButtonLink>
              </Magnetic>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.25} className="relative">
          <Tilt className="group">
            <div className="aspect-[16/11] overflow-hidden rounded-[22px] border border-line shadow-soft">
              <Parallax distance={-70} className="h-[116%] -translate-y-[8%]">
                <Image
                  src="/assets/panes.webp"
                  alt="Five frosted glass panes leaning against a wall in warm light"
                  width={1600}
                  height={1000}
                  priority
                  className="h-full w-full scale-105 object-cover"
                />
              </Parallax>
            </div>
          </Tilt>
          <div className="absolute -bottom-6 left-3 right-3 z-10 flex items-center justify-between gap-4 rounded-[14px] border border-line bg-surface/85 py-3 pl-4 pr-3 font-mono shadow-soft backdrop-blur-xl md:-left-8 md:right-auto">
            <code className="inline-flex items-center gap-2.5 whitespace-nowrap text-[13px] sm:text-sm">
              <TerminalWindow size={18} className="hidden text-accent sm:block" aria-hidden />
              {SITE.installCommand}
            </code>
            <CopyButton text={SITE.installCommand} label="Copy" />
          </div>
        </Reveal>
      </section>
    </PointerGlow>
  );
}
