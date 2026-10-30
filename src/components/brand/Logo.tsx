type LogoMarkProps = {
  size?: number;
  className?: string;
};

// Five offset panes: one pane per module, the front one solid.
export function LogoMark({ size = 28, className }: LogoMarkProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} aria-hidden>
      <defs>
        <linearGradient id="ak-tile" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#F7A774" />
          <stop offset="1" stopColor="#DE6A2A" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="url(#ak-tile)" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={i}
          x={5 + i * 2.5}
          y={6 + i * 1.5}
          width="13"
          height="15"
          rx="2.5"
          fill="#1C0D04"
          fillOpacity={i === 4 ? 1 : 0.14 + i * 0.12}
        />
      ))}
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
