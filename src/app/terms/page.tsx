import type { Metadata } from "next";
import Link from "next/link";
import { DocPage, Mail } from "@/components/DocPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms for using this website and buying the Agents Kit post-mortem.",
  alternates: { canonical: "/terms/" },
};

export default function TermsPage() {
  return (
    <DocPage title="Terms">
      <p>These terms cover this website and the purchase of the Agents Kit post-mortem. By buying, you agree to them.</p>
      <h2>Who sells it</h2>
      <p>
        Orders are processed by Lemon Squeezy, which acts as the merchant of record. Lemon Squeezy handles payment,
        invoicing and sales tax, and its own buyer terms also apply to your purchase.
      </p>
      <h2>What you buy</h2>
      <p>
        A digital document, the Agents Kit post-mortem, delivered as a download link by email after payment. There is no
        subscription and no recurring charge.
      </p>
      <h2>Licence for the post-mortem</h2>
      <ul>
        <li>You may read it, quote it with attribution, and apply everything in it to your own systems, commercial or not.</li>
        <li>You may not redistribute or resell the post-mortem itself, in whole or in substantial part.</li>
      </ul>
      <h2>Licence for the code</h2>
      <p>
        The code in the agents_kit package is licensed separately under the MIT licence, published with the source on{" "}
        <a href={SITE.github} rel="noopener">
          GitHub
        </a>
        . It carries no resale restriction.
      </p>
      <h2>No warranty</h2>
      <p>
        The code and the post-mortem are provided as they are, without warranty of any kind. They come from a production
        system and are tested, but your own payment rail and your own agents are your responsibility. Verify them end to
        end before you rely on them.
      </p>
      <h2>Refunds</h2>
      <p>
        See the <Link href="/refunds/">refund policy</Link>.
      </p>
      <h2>Changes</h2>
      <p>
        These terms may be updated. The date at the top shows the latest version. The terms in force when you bought
        apply to that purchase.
      </p>
      <h2>Contact</h2>
      <p>
        <Mail />
      </p>
    </DocPage>
  );
}
