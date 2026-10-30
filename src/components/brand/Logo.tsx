type LogoMarkProps = {
  size?: number;
  className?: string;
};

// A heartbeat that goes flat: the signal looked alive, then nothing.
export function LogoMark({ size = 28, className }: LogoMarkProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} aria-hidden>
      <rect width="32" height="32" rx="8" fill="#111313" />
      <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="none" stroke="#2c3231" />
      <path
        d="M5 17.5h5l2.2-6.5 3.3 12 2.5-7.5h2"
        fill="none"
        stroke="#3FD17A"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M20 17.5h7" fill="none" stroke="#FF5B38" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export function Logo() {
  return (
    <span className="inline-flex items-center gap-2.5 whitespace-nowrap text-[15px] font-semibold tracking-[-0.02em]">
      <LogoMark />
      Agents Kit
    </span>
  );
}
