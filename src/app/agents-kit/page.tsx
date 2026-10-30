import type { Metadata } from "next";
import Link from "next/link";

// Old URL (linked from PyPI and the README). Static hosting has no server redirects,
// so this page refreshes to the homepage and tells search engines the canonical URL.
export const metadata: Metadata = {
  title: "Moved",
  alternates: { canonical: "/" },
  robots: { index: false },
};

export default function MovedPage() {
  return (
    <section className="mx-auto w-[min(760px,100%-32px)] pt-20">
      <meta httpEquiv="refresh" content="0; url=/" />
      <p className="text-muted">
        This page moved. <Link href="/" className="text-fg underline underline-offset-[3px]">Go to Agents Kit</Link>.
      </p>
    </section>
  );
}
