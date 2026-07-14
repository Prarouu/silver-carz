"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type Variant = "pill" | "ghost" | "circle";

type Props = {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  cursorLabel?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

export function Button({
  children,
  variant = "pill",
  href,
  cursorLabel = "Go",
  className = "",
  type = "button",
  onClick,
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";

  const styles: Record<Variant, string> = {
    pill: `${base} rounded-full bg-accent px-6 py-3 text-sm font-medium tracking-wide text-white hover:bg-[#ff1a12]`,
    ghost: `${base} rounded-full border border-border bg-transparent px-6 py-3 text-sm text-silver hover:border-silver/40 hover:text-foreground`,
    circle: `${base} relative group`,
  };

  const content =
    variant === "circle" ? (
      <>
        <span className="relative z-10 pr-14 text-sm font-medium tracking-[0.14em] uppercase text-foreground">
          {children}
        </span>
        <span className="absolute right-0 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-silver/40 text-silver group-hover:border-accent group-hover:text-accent transition-colors">
          <ArrowRight className="h-4 w-4" />
        </span>
        <span
          aria-hidden
          className="pointer-events-none absolute right-2 top-1/2 h-20 w-20 -translate-y-1/2 rounded-full bg-accent/40 blur-2xl opacity-70 group-hover:opacity-100 transition-opacity"
        />
      </>
    ) : (
      children
    );

  const cls = `${styles[variant]} ${className}`;
  const cursorProps = {
    "data-cursor": "true",
    "data-cursor-label": cursorLabel,
    "data-cursor-size": "64",
  };

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cls}
        {...cursorProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cls}
      {...cursorProps}
    >
      {content}
    </motion.button>
  );
}
