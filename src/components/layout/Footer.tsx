import { Logo } from "@/components/ui/Logo";

function IgIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function FbIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v7h3v-7h2.5l.5-3H14V9z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="section-padding border-t border-border bg-surface py-12 md:py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm text-silver-muted leading-relaxed">
            Premium car detailing in Mumbai. Black finish. Silver precision.
            Built for clients who notice the difference.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-10">
          <div className="text-sm text-silver-muted">
            <p className="text-foreground mb-1">Studio · Mumbai</p>
            <p>Mon–Sat · 10:00 AM – 7:00 PM IST</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Instagram"
              data-cursor
              data-cursor-label="IG"
              data-cursor-size="48"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-silver hover:border-accent hover:text-accent transition-colors"
            >
              <IgIcon className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              data-cursor
              data-cursor-label="FB"
              data-cursor-size="48"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-silver hover:border-accent hover:text-accent transition-colors"
            >
              <FbIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl text-xs text-silver-muted/70 tracking-wide">
        © {new Date().getFullYear()} Silver Carz. Demo pitch site.
      </p>
    </footer>
  );
}
