import type { Metadata } from "next";
import { DocPage, Mail } from "@/components/DocPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Refund policy",
  description: "How refunds work for the Agents Kit post-mortem.",
  alternates: { canonical: "/refunds/" },
};

export default function RefundsPage() {
  return (
    <DocPage title="Refund policy">
      <p>If the post-mortem is not useful to you, you can get your money back.</p>
      <h2>{SITE.refundDays} days, no questions asked</h2>
      <p>
        Email <Mail /> within {SITE.refundDays} days of your purchase, with the email address you bought with or your
        order number. You will receive a full refund.
      </p>
      <h2>How it is paid back</h2>
      <p>
        Refunds are issued through Lemon Squeezy to the original payment method. Your bank or card provider may take a
        few business days to show it.
      </p>
      <h2>After {SITE.refundDays} days</h2>
      <p>Requests after {SITE.refundDays} days are handled case by case. If something was wrong with your download, write anyway.</p>
    </DocPage>
  );
}
