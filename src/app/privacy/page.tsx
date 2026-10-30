import type { Metadata } from "next";
import { DocPage, Mail } from "@/components/DocPage";

export const metadata: Metadata = {
  title: "Privacy",
  description: "What data the Agents Kit website and checkout collect.",
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage() {
  return (
    <DocPage title="Privacy">
      <h2>This website</h2>
      <p>
        This site has no accounts, no forms, no analytics and no advertising. It sets no cookies. Fonts and images are
        served from this site. It is hosted on GitHub Pages, which may keep ordinary server logs, such as IP address and
        browser type, under GitHub&apos;s own privacy statement.
      </p>
      <h2>Buying the post-mortem</h2>
      <p>
        Checkout is run by Lemon Squeezy, the merchant of record. It collects your payment details, billing address and
        email address under its own privacy policy. I receive your name, email address, country and order details so I
        can deliver the product and answer support questions. I never see your card number.
      </p>
      <h2>What I do with it</h2>
      <p>
        Order details are used only to deliver your purchase, handle refunds and support, and meet tax and accounting
        rules. Your data is never sold, and you will not get marketing email unless you ask for it.
      </p>
      <h2>Your rights</h2>
      <p>
        To access, correct or delete your data, write to <Mail />.
      </p>
    </DocPage>
  );
}
