import Link from "next/link";
import { LogoMark } from "@/components/brand/Logo";
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
      <div className="mx-auto flex w-[min(1200px,100%-32px)] flex-wrap items-center justify-between gap-5 md:w-[min(1200px,100%-48px)]">
        <span className="inline-flex items-center gap-3">
          <LogoMark size={22} />
          Agents Kit by {SITE.author}. Code is MIT licensed.
        </span>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          {LINKS.map((link) =>
            link.href.startsWith("http") ? (
              <a key={link.label} href={link.href} rel="noopener" className="link-grow pb-0.5 hover:text-fg">
                {link.label}
              </a>
            ) : (
              <Link key={link.label} href={link.href} className="link-grow pb-0.5 hover:text-fg">
                {link.label}
              </Link>
            ),
          )}
          <a href={`mailto:${SITE.email}`} className="link-grow pb-0.5 hover:text-fg">
            {SITE.email}
          </a>
        </nav>
      </div>
    </footer>
  );
}
