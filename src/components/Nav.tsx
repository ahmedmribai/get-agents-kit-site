import { ArrowRight, GithubLogo } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { Logo } from "@/components/brand/Logo";
import { Magnetic } from "@/components/fx/Magnetic";
import { ScrollProgress } from "@/components/fx/ScrollProgress";
import { SITE } from "@/lib/site";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/75 backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex h-16 w-[min(1200px,100%-32px)] items-center justify-between gap-6 md:w-[min(1200px,100%-48px)]">
        <Link href="/" aria-label="Agents Kit home" className="transition-opacity hover:opacity-85">
          <Logo />
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-7 text-[14.5px] text-muted">
          <Link href="/#modules" className="link-grow hidden pb-0.5 hover:text-fg md:inline">
            Modules
          </Link>
          <Link href="/#quickstart" className="link-grow hidden pb-0.5 hover:text-fg md:inline">
            Quick start
          </Link>
          <Link href="/about/" className="link-grow hidden pb-0.5 hover:text-fg md:inline">
            About
          </Link>
          <a href={SITE.github} rel="noopener" aria-label="GitHub" className="hidden transition-colors hover:text-fg sm:inline-flex">
            <GithubLogo size={20} aria-hidden />
          </a>
          <Magnetic strength={0.2}>
            <ButtonLink href="/#postmortem" size="sm">
              Get the post-mortem
              <ArrowRight size={14} weight="bold" aria-hidden />
            </ButtonLink>
          </Magnetic>
        </nav>
      </div>
      <ScrollProgress />
    </header>
  );
}
