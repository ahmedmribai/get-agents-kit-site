import { ArrowRight, GithubLogo } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { SITE } from "@/lib/site";

export function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-[min(1160px,100%-32px)] items-center justify-between gap-6 md:w-[min(1160px,100%-48px)]">
        <Link href="/" className="inline-flex items-center gap-2.5 whitespace-nowrap font-semibold tracking-tight">
          <Image src="/icon.png" alt="" width={24} height={24} className="rounded-md" priority />
          Agents Kit
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-7 text-[15px] text-muted">
          <Link href="/#modules" className="hidden transition-colors hover:text-fg md:inline">
            Modules
          </Link>
          <Link href="/about/" className="hidden transition-colors hover:text-fg md:inline">
            About
          </Link>
          <a
            href={SITE.github}
            rel="noopener"
            className="hidden items-center gap-1.5 transition-colors hover:text-fg sm:inline-flex"
          >
            <GithubLogo size={18} weight="regular" aria-hidden />
            GitHub
          </a>
          <ButtonLink href="/#postmortem" size="sm">
            Get the post-mortem
            <ArrowRight size={14} weight="bold" aria-hidden />
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
