export function Logo({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex flex-col items-start gap-1 ${className}`}
      data-cursor
      data-cursor-label="Home"
      data-cursor-size="52"
    >
      <svg
        viewBox="0 0 180 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-auto md:h-6"
        aria-hidden
      >
        <path
          d="M4 18C18 8 42 4 70 6C108 8.5 140 4 176 10"
          stroke="white"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M132 12C142 10 156 8 172 10"
          stroke="#E10600"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>
      <span className="font-[family-name:var(--font-display)] text-sm md:text-base font-semibold tracking-[0.28em] text-silver uppercase">
        Silver Carz
      </span>
    </div>
  );
}
