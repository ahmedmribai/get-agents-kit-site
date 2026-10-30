import { ArrowRight, CheckCircle, DownloadSimple, GithubLogo, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { Accordion } from "@/components/fx/Accordion";
import { Magnetic } from "@/components/fx/Magnetic";
import { Parallax } from "@/components/fx/Parallax";
import { Spotlight } from "@/components/fx/Spotlight";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/site";

const INSIDE = [
  "The gate that failed closed and deadlocked everything",
  "The loop that ran for three weeks and produced nothing",
  "The tunable that was secretly an off-switch",
  "Delivering the sales page to the person who just bought it",
];

export function Offer() {
  return (
    <section id="postmortem" className="pt-24 md:pt-36">
      <Reveal>
        <Spotlight className="grid overflow-hidden rounded-[24px] border border-line bg-surface shadow-soft md:grid-cols-[0.85fr_1.25fr_0.9fr]">
          <div className="relative z-[1] aspect-video overflow-hidden md:aspect-auto md:min-h-[400px]">
            <Parallax distance={-80} className="absolute inset-[-10%_0]">
              <Image
                src="/assets/hourglass.webp"
                alt="Glass hourglass with clockwork gears inside, sand running through"
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
            </Parallax>
          </div>
          <div className="relative z-[1] p-7 md:p-11">
            <h2 className="text-[clamp(1.9rem,3.2vw,2.6rem)] font-semibold leading-[1.05] tracking-[-0.04em]">The full post-mortem</h2>
            <p className="mt-4 max-w-[52ch] text-muted">
              The code is free. The part you can&apos;t get from the code is the diagnosis: what each symptom looked like,
              the wrong theories ruled out first, and the one measurement that showed what was happening.
            </p>
            <ul className="mt-6 grid gap-3">
              {INSIDE.map((item) => (
                <li key={item} className="flex gap-3 text-[15.5px]">
                  <CheckCircle size={20} weight="duotone" className="mt-0.5 shrink-0 text-accent" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative z-[1] flex flex-col justify-center gap-4 border-t border-line bg-[linear-gradient(165deg,var(--tint),transparent_80%)] p-7 md:border-l md:border-t-0 md:p-9">
            <div className="text-[3.4rem] font-semibold leading-none tracking-[-0.05em]">{SITE.price}</div>
            <p className="flex gap-2 text-sm text-muted">
              <DownloadSimple size={18} className="shrink-0" aria-hidden />
              One-time purchase, delivered by email as a download.
            </p>
            <Magnetic strength={0.15}>
              <ButtonLink href={SITE.checkout} className="w-full">
                Get the post-mortem
                <ArrowRight size={15} weight="bold" aria-hidden />
              </ButtonLink>
            </Magnetic>
            <p className="flex gap-2 text-sm text-muted">
              <ShieldCheck size={18} className="shrink-0" aria-hidden />
              <span>
                {SITE.refundDays}-day refund, no questions asked.{" "}
                <Link href="/refunds/" className="underline underline-offset-[3px] hover:text-fg">
                  Refund policy
                </Link>
              </span>
            </p>
          </div>
        </Spotlight>
      </Reveal>
    </section>
  );
}

const FAQ = [
  {
    q: "Do I need the post-mortem to use the code?",
    a: "No. All five modules and their tests are free on GitHub and PyPI under the MIT licence. The post-mortem is the written diagnosis behind them.",
  },
  {
    q: "What exactly do I get when I buy?",
    a: "A Markdown document of about 12 KB covering all five incidents in full. Lemon Squeezy emails you a download link right after payment.",
  },
  {
    q: "Which Python versions are supported?",
    a: "Python 3.9 and newer. The package has no dependencies outside the standard library.",
  },
  {
    q: "Is the webhook rail only for Lemon Squeezy?",
    a: "The parser reads Lemon Squeezy payloads out of the box. The verify, dedupe and record order works for any processor that sends a hex HMAC-SHA256 signature of the raw body. Adapt the parse step to your payload.",
  },
  {
    q: "Can I get a refund?",
    a: `Yes. Email within ${SITE.refundDays} days of purchase and you get a full refund, no questions asked.`,
  },
];

export function Faq() {
  return (
    <section className="grid gap-10 pt-24 md:grid-cols-[0.7fr_1.3fr] md:gap-16 md:pt-36">
      <Reveal>
        <h2 className="text-[clamp(2rem,3.8vw,3rem)] font-semibold leading-[1.05] tracking-[-0.04em]">Questions</h2>
        <p className="mt-4 max-w-[34ch] text-muted">
          Anything else, write to{" "}
          <a href={`mailto:${SITE.email}`} className="text-fg underline underline-offset-[3px]">
            {SITE.email}
          </a>
          .
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <Accordion items={FAQ} />
      </Reveal>
    </section>
  );
}

export function Closing() {
  return (
    <Reveal className="mt-24 md:mt-36">
      <section className="relative isolate overflow-hidden rounded-[28px] border border-line">
        <Parallax distance={-90} className="absolute inset-[-12%_0] -z-10">
          <Image src="/assets/glow.webp" alt="" width={1024} height={576} className="h-full w-full object-cover opacity-70 saturate-150" />
        </Parallax>
        <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,var(--bg)_25%,color-mix(in_srgb,var(--bg)_55%,transparent)_70%,color-mix(in_srgb,var(--bg)_20%,transparent))]" />
        <div className="flex flex-wrap items-center justify-between gap-8 px-7 py-14 md:px-14 md:py-24">
          <h2 className="max-w-[16ch] text-[clamp(2.1rem,4.4vw,3.6rem)] font-semibold leading-[1.03] tracking-[-0.045em]">
            Check your rail before your first sale does.
          </h2>
          <div className="flex flex-wrap gap-3">
            <Magnetic>
              <ButtonLink href={SITE.github}>
                <GithubLogo size={18} weight="bold" aria-hidden />
                Read the code
              </ButtonLink>
            </Magnetic>
            <Magnetic>
              <ButtonLink href="/#postmortem" variant="ghost" className="bg-bg/40 backdrop-blur-md">
                Get the post-mortem
              </ButtonLink>
            </Magnetic>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
