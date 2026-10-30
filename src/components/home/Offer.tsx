import { ArrowRight, CheckCircle, DownloadSimple, GithubLogo, Plus, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
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
    <section id="postmortem" className="pt-20 md:pt-28">
      <Reveal className="grid overflow-hidden rounded-[20px] border border-line bg-surface md:grid-cols-[0.85fr_1.25fr_0.9fr]">
        <Image
          src="/assets/hourglass.webp"
          alt="Glass hourglass with clockwork gears inside, sand running through"
          width={1200}
          height={900}
          className="aspect-video h-full w-full object-cover md:aspect-auto md:min-h-[340px]"
        />
        <div className="p-7 md:p-11">
          <h2 className="text-[clamp(1.9rem,3.2vw,2.5rem)] font-semibold leading-[1.08] tracking-[-0.035em]">
            The full post-mortem
          </h2>
          <p className="mt-4 max-w-[52ch] text-muted">
            The code is free. The part you can&apos;t get from the code is the diagnosis: what each symptom looked like, the
            wrong theories ruled out first, and the one measurement that showed what was happening.
          </p>
          <ul className="mt-6 grid gap-2.5">
            {INSIDE.map((item) => (
              <li key={item} className="flex gap-3 text-[15.5px]">
                <CheckCircle size={20} weight="duotone" className="mt-0.5 shrink-0 text-accent" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-center gap-4 border-t border-line bg-[linear-gradient(165deg,var(--tint),transparent_80%)] bg-surface-2 p-7 md:border-l md:border-t-0 md:p-9">
          <div className="text-[3.2rem] font-semibold leading-none tracking-[-0.045em]">{SITE.price}</div>
          <p className="flex gap-2 text-sm text-muted">
            <DownloadSimple size={18} className="shrink-0" aria-hidden />
            One-time purchase, delivered by email as a download.
          </p>
          <ButtonLink href={SITE.checkout} className="w-full">
            Get the post-mortem
            <ArrowRight size={15} weight="bold" aria-hidden />
          </ButtonLink>
          <p className="flex gap-2 text-sm text-muted">
            <ShieldCheck size={18} className="shrink-0" aria-hidden />
            <span>
              {SITE.refundDays}-day refund, no questions asked.{" "}
              <Link href="/refunds/" className="underline underline-offset-[3px]">
                Refund policy
              </Link>
            </span>
          </p>
        </div>
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
    <section className="pt-20 md:pt-28">
      <h2 className="text-[clamp(1.9rem,3.5vw,2.7rem)] font-semibold leading-[1.08] tracking-[-0.035em]">Questions</h2>
      <div className="mt-10 max-w-[820px]">
        {FAQ.map(({ q, a }) => (
          <details key={q} className="group border-t border-line py-5 last:border-b">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold [&::-webkit-details-marker]:hidden">
              {q}
              <Plus
                size={18}
                weight="bold"
                className="shrink-0 text-accent transition-transform duration-200 group-open:rotate-45"
                aria-hidden
              />
            </summary>
            <p className="mt-3 max-w-[68ch] text-muted">{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function Closing() {
  return (
    <Reveal className="mt-24 flex flex-wrap items-center justify-between gap-8 rounded-[20px] border border-line bg-[radial-gradient(ellipse_at_85%_120%,color-mix(in_srgb,var(--accent)_28%,transparent),transparent_60%)] bg-surface px-7 py-10 md:mt-32 md:px-12 md:py-16">
      <h2 className="max-w-[18ch] text-[clamp(1.9rem,3.5vw,2.7rem)] font-semibold leading-[1.08] tracking-[-0.035em]">
        Check your rail before your first sale does.
      </h2>
      <div className="flex flex-wrap gap-3">
        <ButtonLink href={SITE.github}>
          <GithubLogo size={18} weight="bold" aria-hidden />
          Read the code
        </ButtonLink>
        <ButtonLink href="/#postmortem" variant="ghost">
          Get the post-mortem
        </ButtonLink>
      </div>
    </Reveal>
  );
}
