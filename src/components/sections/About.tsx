"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { fadeUp } from "@/lib/animations";

export function About() {
  return (
    <SectionWrapper
      id="about"
      index="06"
      eyebrow="About us"
      title="Silver standard. Black canvas."
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <motion.p
          variants={fadeUp}
          className="text-lg md:text-xl text-silver leading-relaxed"
        >
          Silver Carz is a Mumbai-based detailing studio built around precision,
          patience, and materials that last. From sedans to luxury SUVs, every
          vehicle is treated like a showpiece — from the first rinse to the final
          inspection under studio lighting.
        </motion.p>
        <motion.div variants={fadeUp} className="premium-card p-8 md:p-10">
          <dl className="space-y-5">
            {[
              ["Location", "Mumbai, Maharashtra"],
              ["Focus", "Premium detailing & coatings"],
              ["Promise", "Showroom-grade finish"],
            ].map(([k, v]) => (
              <div
                key={k}
                className="flex items-start justify-between gap-6 border-b border-border pb-4 last:border-0 last:pb-0"
              >
                <dt className="text-xs tracking-[0.18em] uppercase text-accent">
                  {k}
                </dt>
                <dd className="text-sm text-silver text-right">{v}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
