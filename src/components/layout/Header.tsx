"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { site } from "@/lib/site";

const links = [
  { href: "#services", label: "Services" },
  { href: "#prices", label: "Prices" },
  { href: "#location", label: "Location" },
  { href: "#gallery", label: "Gallery" },
  { href: "#about", label: "About Us" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="section-padding mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between gap-6">
        <a href="#top" aria-label="Silver Carz home">
          <Logo />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-cursor
              data-cursor-label={link.label}
              data-cursor-size="72"
              className="text-xs font-medium tracking-[0.18em] uppercase text-silver-muted hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={site.phoneHref}
          data-cursor
          data-cursor-label="Call"
          data-cursor-size="64"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-xs font-medium tracking-wide text-white hover:bg-[#ff1a12] transition-colors"
        >
          <Phone className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">{site.phone}</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
    </motion.header>
  );
}
