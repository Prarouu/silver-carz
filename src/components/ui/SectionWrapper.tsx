"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, staggerContainer } from "@/lib/animations";

type Props = {
  id?: string;
  children: ReactNode;
  className?: string;
  index?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
};

export function SectionWrapper({
  id,
  children,
  className = "",
  index,
  eyebrow,
  title,
  description,
}: Props) {
  return (
    <section id={id} className={`section-padding py-24 md:py-32 ${className}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto max-w-7xl"
      >
        {(index || eyebrow || title || description) && (
          <div className="mb-14 md:mb-18 max-w-2xl">
            {(index || eyebrow) && (
              <motion.p
                variants={fadeUp}
                className="mb-4 text-xs font-medium tracking-[0.14em] uppercase text-silver-muted"
              >
                {index && <span className="section-index mr-2">[{index}]</span>}
                {eyebrow}
              </motion.p>
            )}
            {title && (
              <motion.h2
                variants={fadeUp}
                className="font-[family-name:var(--font-display)] text-3xl md:text-[2.75rem] font-semibold leading-[1.08] tracking-tight text-foreground"
              >
                {title}
              </motion.h2>
            )}
            {description && (
              <motion.p
                variants={fadeUp}
                className="mt-5 text-silver-muted text-base md:text-lg leading-relaxed"
              >
                {description}
              </motion.p>
            )}
          </div>
        )}
        {children}
      </motion.div>
    </section>
  );
}
