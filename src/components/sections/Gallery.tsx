"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { fadeUp } from "@/lib/animations";

const shots = [
  {
    src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
    alt: "Exterior car detailing and polishing finish in Nagpur — sports car shine",
  },
  {
    src: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=900&q=80",
    alt: "Premium car wash result on a luxury sedan at Silver Carz Nagpur",
  },
  {
    src: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=900&q=80",
    alt: "Alloy wheel and tyre detailing close-up after ceramic coating",
  },
];

export function Gallery() {
  return (
    <SectionWrapper
      id="gallery"
      index="05"
      eyebrow="Gallery"
      title="Work that catches light."
      description="Deep gloss, clean cabins, protected paint — the finish standard every car leaves our Nagpur studio with."
      className="bg-surface/40"
    >
      <div className="grid gap-5 md:grid-cols-3">
        {shots.map((shot, i) => (
          <motion.div
            key={shot.src}
            variants={fadeUp}
            data-cursor
            data-cursor-label="Zoom"
            data-cursor-size="64"
            className={`relative premium-card overflow-hidden ${
              i === 0 ? "md:col-span-1 min-h-[280px]" : "min-h-[280px]"
            }`}
          >
            <Image
              src={shot.src}
              alt={shot.alt}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
