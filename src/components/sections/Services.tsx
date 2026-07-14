"use client";

import { motion } from "framer-motion";
import { Droplets, Sparkles, Shield, Wind } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { fadeUp } from "@/lib/animations";

const services = [
  {
    icon: Sparkles,
    title: "Exterior detailing",
    text: "Paint decontamination, polish, and mirror-finish gloss restoration.",
  },
  {
    icon: Wind,
    title: "Interior revitalize",
    text: "Deep clean, leather care, and odor extraction for a reset cabin.",
  },
  {
    icon: Shield,
    title: "Ceramic coating",
    text: "Long-term hydrophobic protection with a deep, wet-look shine.",
  },
  {
    icon: Droplets,
    title: "Paint correction",
    text: "Swirl and haze removal tuned for dark and silver finishes.",
  },
];

export function Services() {
  return (
    <SectionWrapper
      id="services"
      index="02"
      eyebrow="Services"
      title="Detailing, refined."
      description="A focused menu of packages built around finish quality — not rushed add-ons."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <motion.article
            key={service.title}
            variants={fadeUp}
            data-cursor
            data-cursor-label="View"
            data-cursor-size="56"
            whileHover={{ y: -4 }}
            className="group premium-card p-6 md:p-7 transition-colors hover:border-white/10"
          >
            <service.icon className="h-5 w-5 text-accent mb-5" />
            <h3 className="text-lg font-medium text-foreground mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-silver-muted leading-relaxed">
              {service.text}
            </p>
            <span className="mt-5 block h-px w-0 bg-accent transition-all duration-300 group-hover:w-12" />
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
