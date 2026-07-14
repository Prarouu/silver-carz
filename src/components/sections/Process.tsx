"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { fadeUp } from "@/lib/animations";

const steps = [
  { n: "01", title: "Inspect", text: "Surface evaluation and finish goals." },
  { n: "02", title: "Prep", text: "Wash, decontaminate, and mask." },
  { n: "03", title: "Refine", text: "Correction, polish, or coating." },
  { n: "04", title: "Reveal", text: "Final QA under studio lighting." },
];

export function Process() {
  return (
    <SectionWrapper
      id="process"
      index="03"
      eyebrow="Process"
      title="Four clean steps."
      description="Transparent workflow so you always know what stage your car is in."
      className="bg-surface/40"
    >
      <div className="premium-card grid gap-8 p-6 md:grid-cols-4 md:p-10">
        {steps.map((step) => (
          <motion.div
            key={step.n}
            variants={fadeUp}
            className="relative border-t border-border pt-6"
          >
            <span className="text-xs tracking-[0.2em] text-accent">{step.n}</span>
            <h3 className="mt-3 text-xl font-medium text-foreground">
              {step.title}
            </h3>
            <p className="mt-2 text-sm text-silver-muted">{step.text}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
