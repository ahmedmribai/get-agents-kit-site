import Link from "next/link";
import { SITE } from "@/lib/site";

const LINKS = [
  { href: "/about/", label: "About" },
  { href: SITE.github, label: "GitHub" },
  { href: SITE.pypi, label: "PyPI" },
  { href: "/terms/", label: "Terms" },
  { href: "/refunds/", label: "Refunds" },
  { href: "/privacy/", label: "Privacy" },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line py-9 text-[14.5px] text-muted">
      <div className="mx-auto flex w-[min(1160px,100%-32px)] flex-wrap justify-between gap-5 md:w-[min(1160px,100%-48px)]">
        <span>
          Agents Kit by {SITE.author}. Code is MIT licensed.
        </span>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          {LINKS.map((link) =>
            link.href.startsWith("http") ? (
              <a key={link.label} href={link.href} rel="noopener" className="hover:text-fg">
                {link.label}
              </a>
            ) : (
              <Link key={link.label} href={link.href} className="hover:text-fg">
                {link.label}
              </Link>
            ),
          )}
          <a href={`mailto:${SITE.email}`} className="hover:text-fg">
            {SITE.email}
          </a>
        </nav>
      </div>
    </footer>
  );
}
