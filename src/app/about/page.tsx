import type { Metadata } from "next";
import { DocPage, Mail } from "@/components/DocPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "Who makes Agents Kit and why it exists.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <DocPage title="About" showUpdated={false}>
      <p>Agents Kit is made by {SITE.author}.</p>
      <p>
        It came out of an autonomous agent system I ran for months. It published pages, sent email and reported healthy
        the whole time. It earned $0. It never crashed. Five failures were simply invisible from the outside: the logs
        stayed green and nothing worked.
      </p>
      <p>
        Each module in the kit is the fix for one of those failures, reduced to a single standard-library file with
        tests. The code is free under the MIT licence. The written post-mortem, which explains how each failure was
        found, is the paid part and keeps the project going.
      </p>
      <h2>Contact</h2>
      <p>
        Questions, bug reports or ideas: <Mail />, or open an issue on{" "}
        <a href={`${SITE.github}/issues`} rel="noopener">
          GitHub
        </a>
        .
      </p>
    </DocPage>
  );
}
