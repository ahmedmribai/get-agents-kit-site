import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  size?: "md" | "sm";
  className?: string;
};

const BASE =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[14px] border font-semibold transition-[transform,filter,border-color] duration-200 active:translate-y-px active:scale-[0.98]";
const VARIANTS = {
  primary: "border-transparent bg-accent text-accent-ink hover:brightness-110",
  ghost: "border-line text-fg hover:border-muted",
};
const SIZES = {
  md: "px-[22px] py-[13px] text-[15px]",
  sm: "px-4 py-2 text-sm",
};

export function ButtonLink({ href, children, variant = "primary", size = "md", className = "" }: ButtonLinkProps) {
  const classes = `${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${className}`;
  const isExternal = href.startsWith("http");
  if (isExternal) {
    return (
      <a href={href} rel="noopener" className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
