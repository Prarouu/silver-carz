"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { fadeUp, staggerContainer } from "@/lib/animations";

const stats = [
  { value: "6+", label: "Years experience" },
  { value: "1,200+", label: "Cars detailed" },
  { value: "97%", label: "Repeat clients" },
  { value: "Same day", label: "Express slots" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-screen flex flex-col pt-20 overflow-hidden"
    >
      <div aria-hidden className="premium-glow pointer-events-none absolute inset-0 z-0" />
      <div className="section-padding relative z-10 flex flex-1 flex-col lg:flex-row lg:items-center gap-10 lg:gap-8 mx-auto w-full max-w-7xl py-12 lg:py-0">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex-1 max-w-xl"
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 text-xs font-medium tracking-[0.14em] uppercase text-silver-muted"
          >
            <span className="section-index mr-2">[01]</span>
            Silver Carz · Rajendra Nagar, Nagpur
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-[3.75rem] font-semibold leading-[1.05] tracking-tight text-foreground"
          >
            Premium car detailing{" "}
            <span className="block text-silver">&amp; car wash in Nagpur.</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-md text-base md:text-lg text-silver-muted leading-relaxed"
          >
            Studio-grade car wash from ₹200, interior deep cleaning, ceramic
            coating, and paint correction — a showroom finish for drivers
            across Nagpur, every time.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5"
          >
            <Button variant="circle" href="#contact" cursorLabel="Book">
              Book a detail
            </Button>
            <Button variant="ghost" href="#prices" cursorLabel="Rates">
              View rate card
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: imageY, scale: imageScale }}
          className="relative flex-1 min-h-[320px] lg:min-h-[560px] -mr-5 md:-mr-10 lg:-mr-16 premium-card overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent z-10 pointer-events-none lg:block hidden" />
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none lg:hidden" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
          <Image
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=80"
            alt="Premium car detailing in Nagpur — polished luxury black car at Silver Carz studio"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
        </motion.div>
      </div>

      <div className="relative z-20 section-padding pb-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="mx-auto max-w-7xl premium-card px-5 py-6 md:px-10 md:py-7"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-border">
            {stats.map((stat) => (
              <div key={stat.label} className="md:px-6 first:md:pl-0 last:md:pr-0">
                <p className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-semibold text-foreground">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs tracking-wide text-silver-muted uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
