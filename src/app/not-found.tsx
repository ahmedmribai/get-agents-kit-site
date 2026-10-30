import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="mx-auto w-[min(760px,100%-32px)] pt-20 md:pt-28">
      <h1 className="text-[clamp(2.2rem,4.4vw,3.2rem)] font-semibold leading-[1.05] tracking-[-0.04em]">
        That page does not exist.
      </h1>
      <p className="mt-4 text-muted">It may have moved, or the link is wrong.</p>
      <div className="mt-8">
        <ButtonLink href="/">
          <ArrowLeft size={15} weight="bold" aria-hidden />
          Back to Agents Kit
        </ButtonLink>
      </div>
    </section>
  );
}
