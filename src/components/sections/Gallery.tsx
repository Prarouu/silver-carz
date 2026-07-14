"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { fadeUp } from "@/lib/animations";

const shots = [
  {
    src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
    alt: "Sports car exterior shine",
  },
  {
    src: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=900&q=80",
    alt: "Luxury sedan profile",
  },
  {
    src: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=900&q=80",
    alt: "Car wheel detail",
  },
];

export function Gallery() {
  return (
    <SectionWrapper
      id="gallery"
      index="04"
      eyebrow="Gallery"
      title="Work that catches light."
      description="A sample set of finishes — swap these with real Silver Carz photos for the pitch."
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
