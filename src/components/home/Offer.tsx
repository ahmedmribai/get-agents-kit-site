import { ArrowRight, DownloadSimple, FileText, GithubLogo, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { Accordion } from "@/components/fx/Accordion";
import { Magnetic } from "@/components/fx/Magnetic";
import { Spotlight } from "@/components/fx/Spotlight";
import { Tilt } from "@/components/fx/Tilt";
import { Reveal } from "@/components/Reveal";
import { POSTMORTEM_TOC } from "@/lib/incident";
import { SITE } from "@/lib/site";

// The paid write-up, shown as the case file it is: its real table of contents.
function CaseFile() {
  return (
    <Tilt max={4} className="group">
      <div className="relative rounded-[18px] border border-line bg-[#f2efe8] p-7 text-[#1b1a17] shadow-soft md:p-9">
        <div className="flex items-center justify-between font-mono text-[12px] text-[#6d6a62]">
          <span className="inline-flex items-center gap-2">
            <FileText size={15} aria-hidden />
            POSTMORTEM.md
          </span>
          <span>about 12 KB</span>
        </div>
        <h3 className="mt-6 text-[1.6rem] font-semibold leading-tight tracking-[-0.03em]">The full post-mortem</h3>
        <p className="mt-2 text-[14.5px] text-[#55524b]">Five failures a production agent hid behind green logs.</p>
        <ol className="mt-6 grid gap-0 border-t border-[#d9d4c8]">
          {POSTMORTEM_TOC.map((item, i) => (
            <li key={item} className="flex gap-4 border-b border-[#d9d4c8] py-3 text-[14.5px]">
              <span className="w-5 shrink-0 font-mono text-[#9a958a]">{i + 1}</span>
              {item}
            </li>
          ))}
        </ol>
        <span className="absolute -right-3 -top-3 rotate-6 rounded-[8px] border-2 border-accent bg-[#f2efe8] px-3 py-1 font-mono text-[12px] font-semibold uppercase tracking-[0.12em] text-accent">
          Resolved
        </span>
      </div>
    </Tilt>
  );
}

export function Offer() {
  return (
    <section id="postmortem" className="pt-24 md:pt-36">
      <div className="grid items-center gap-12 md:grid-cols-[1.05fr_0.95fr] md:gap-16">
        <Reveal>
          <h2 className="max-w-[16ch] text-[clamp(2rem,3.8vw,3rem)] font-semibold leading-[1.05] tracking-[-0.04em]">
            The code is free. The diagnosis is the product.
          </h2>
          <p className="mt-5 max-w-[50ch] text-muted">
            What each symptom looked like, every wrong theory ruled out first, and the one measurement that finally
            showed what was happening. Apply it before your own dashboard starts lying.
          </p>
          <Spotlight className="mt-9 max-w-[440px] rounded-[18px] border border-line bg-surface">
            <div className="relative z-[1] flex flex-col gap-4 p-6 md:p-7">
              <div className="flex items-end justify-between gap-4">
                <span className="text-[3rem] font-semibold leading-none tracking-[-0.05em]">{SITE.price}</span>
                <span className="font-mono text-[12.5px] text-muted">one-time</span>
              </div>
              <Magnetic strength={0.12}>
                <ButtonLink href={SITE.checkout} className="w-full">
                  Get the post-mortem
                  <ArrowRight size={15} weight="bold" aria-hidden />
                </ButtonLink>
              </Magnetic>
              <p className="flex gap-2 text-sm text-muted">
                <DownloadSimple size={18} className="shrink-0" aria-hidden />
                Delivered by email as a download, right after payment.
              </p>
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
        <Reveal delay={0.15}>
          <CaseFile />
        </Reveal>
      </div>
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
    a: "A Markdown document of about 12 KB covering all five incidents in full, plus the pattern behind them. Lemon Squeezy emails you a download link right after payment.",
  },
  {
    q: "Are the numbers on this page real?",
    a: "Yes. They come from an audit of my own autonomous agent system in September 2026: 40 ventures, 1,003 posts, 2,090 leads, and $0.00 of real revenue.",
  },
  {
    q: "Is the webhook rail only for Lemon Squeezy?",
    a: "The parser reads Lemon Squeezy payloads out of the box. The verify, dedupe and record order works for any processor that sends a hex HMAC-SHA256 signature of the raw body. Adapt the parse step to your payload.",
  },
  {
    q: "Which Python versions are supported?",
    a: "Python 3.9 and newer. The package has no dependencies outside the standard library.",
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
      <section className="relative isolate overflow-hidden rounded-[28px] border border-line bg-surface">
        <div aria-hidden className="grid-bg absolute inset-0 -z-10" />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_90%_110%,color-mix(in_srgb,var(--accent)_30%,transparent),transparent_55%)]"
        />
        <div className="flex flex-wrap items-center justify-between gap-8 px-7 py-14 md:px-14 md:py-24">
          <div>
            <span className="inline-flex items-center gap-2 font-mono text-[13px] text-ok">
              <span className="live-dot h-2 w-2 rounded-full bg-current" aria-hidden />
              your dashboard: all systems normal
            </span>
            <h2 className="mt-4 max-w-[16ch] text-[clamp(2.1rem,4.4vw,3.6rem)] font-semibold leading-[1.03] tracking-[-0.045em]">
              Check your rail before your first sale does.
            </h2>
          </div>
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
