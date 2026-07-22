"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { fadeUp } from "@/lib/animations";
import { site, mapsLink, mapsEmbedUrl } from "@/lib/site";

const details = [
  {
    icon: MapPin,
    label: "Address",
    value: `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.postalCode}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: site.phone,
    href: site.phoneHref,
  },
  {
    icon: Clock,
    label: "Hours",
    value: `${site.hours.label} IST`,
  },
];

export function Location() {
  return (
    <SectionWrapper
      id="location"
      index="04"
      eyebrow="Location"
      title="Find us in Nagpur."
      description="We're at Mangalmurti Square in Rajendra Nagar — easy to reach from Takli Seem, Manish Nagar, Khamla, and Wardha Road."
    >
      <div className="grid gap-5 lg:grid-cols-[2fr_1fr]">
        <motion.div
          variants={fadeUp}
          className="premium-card overflow-hidden min-h-[320px] md:min-h-[440px]"
        >
          <iframe
            src={mapsEmbedUrl}
            title="Silver Carz studio location on Google Maps — Mangalmurti Square, Rajendra Nagar, Nagpur"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full min-h-[320px] md:min-h-[440px] border-0"
          />
        </motion.div>

        <motion.div variants={fadeUp} className="premium-card flex flex-col p-6 md:p-8">
          <dl className="space-y-6">
            {details.map((item) => (
              <div key={item.label} className="flex gap-4">
                <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <div>
                  <dt className="text-xs tracking-[0.18em] uppercase text-silver-muted">
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-silver">
                    {item.href ? (
                      <a
                        href={item.href}
                        className="hover:text-foreground transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6">
            <Button
              href={mapsLink}
              external
              variant="pill"
              cursorLabel="Maps"
              className="w-full"
            >
              Get directions
            </Button>
            <Button
              href="#contact"
              variant="ghost"
              cursorLabel="Book"
              className="w-full"
            >
              Book a slot
            </Button>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
