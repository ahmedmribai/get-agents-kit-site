import { ArrowRight, GithubLogo, TerminalWindow } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { CopyButton } from "@/components/CopyButton";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section className="grid items-center gap-12 pb-10 pt-12 md:grid-cols-[1fr_1.05fr] md:gap-16 md:pt-[88px]">
      <Reveal>
        <h1 className="max-w-[13ch] text-[clamp(2.5rem,5.2vw,4.1rem)] font-semibold leading-[1.03] tracking-[-0.04em]">
          Your agent says it worked. Nothing did.
        </h1>
        <p className="mt-6 max-w-[44ch] text-[1.15rem] leading-relaxed text-muted">
          Five small Python modules that stop autonomous agents failing silently. Standard library only, free and MIT
          licensed.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={SITE.github}>
            <GithubLogo size={18} weight="bold" aria-hidden />
            Read the code
          </ButtonLink>
          <ButtonLink href="/#quickstart" variant="ghost">
            See the quick start
            <ArrowRight size={15} weight="bold" aria-hidden />
          </ButtonLink>
        </div>
      </Reveal>

      <Reveal delay={0.15} className="relative">
        <div className="aspect-[16/10] overflow-hidden rounded-[20px] border border-line shadow-soft">
          <Image
            src="/assets/panes.webp"
            alt="Five frosted glass panes leaning against a wall in warm light"
            width={1600}
            height={1000}
            priority
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute -bottom-6 left-3 right-3 flex items-center justify-between gap-4 rounded-[14px] border border-line bg-surface/90 py-3 pl-4 pr-3 font-mono text-sm shadow-soft backdrop-blur-md md:-left-7 md:right-auto">
          <code className="inline-flex items-center gap-2.5 whitespace-nowrap text-[13px] sm:text-sm">
            <TerminalWindow size={18} className="hidden text-accent sm:block" aria-hidden />
            {SITE.installCommand}
          </code>
          <CopyButton text={SITE.installCommand} label="Copy" />
        </div>
      </Reveal>
    </section>
  );
}
