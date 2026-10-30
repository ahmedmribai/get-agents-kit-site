import type { ReactNode } from "react";
import { SITE } from "@/lib/site";

type DocPageProps = {
  title: string;
  showUpdated?: boolean;
  children: ReactNode;
};

// Shared layout for About, Terms, Refunds and Privacy.
export function DocPage({ title, showUpdated = true, children }: DocPageProps) {
  return (
    <article className="doc mx-auto w-[min(760px,100%-32px)] pt-14 md:pt-20">
      <h1 className="text-[clamp(2.2rem,4.4vw,3.2rem)] font-semibold leading-[1.05] tracking-[-0.04em]">{title}</h1>
      {showUpdated && <p className="!mt-3 text-[14.5px]">Last updated: {SITE.updated}</p>}
      {children}
    </article>
  );
}

export function Mail() {
  return <a href={`mailto:${SITE.email}`}>{SITE.email}</a>;
}
