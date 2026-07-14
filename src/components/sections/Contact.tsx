"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { fadeUp } from "@/lib/animations";

export function Contact() {
  return (
    <SectionWrapper
      id="contact"
      index="07"
      eyebrow="Contact"
      title="Book your slot."
      description="Share your car details — we'll confirm your appointment within a few hours."
      className="bg-surface/40"
    >
      <motion.form
        variants={fadeUp}
        onSubmit={(e) => e.preventDefault()}
        className="mx-auto max-w-2xl premium-card p-6 md:p-10 space-y-5"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-xs tracking-wide uppercase text-silver-muted">
              Name
            </span>
            <input
              data-cursor
              data-cursor-label="Type"
              data-cursor-size="40"
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-accent"
              placeholder="Your name"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-xs tracking-wide uppercase text-silver-muted">
              Phone
            </span>
            <input
              data-cursor
              data-cursor-label="Type"
              data-cursor-size="40"
              className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-accent"
              placeholder="+91 98765 43210"
            />
          </label>
        </div>
        <label className="block">
          <span className="mb-2 block text-xs tracking-wide uppercase text-silver-muted">
            Service
          </span>
          <select
            data-cursor
            data-cursor-label="Pick"
            data-cursor-size="48"
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-accent"
            defaultValue=""
          >
            <option value="" disabled>
              Select a package
            </option>
            <option>Express</option>
            <option>Signature</option>
            <option>Ceramic Plus</option>
          </select>
        </label>
        <label className="block">
          <span className="mb-2 block text-xs tracking-wide uppercase text-silver-muted">
            Message
          </span>
          <textarea
            rows={4}
            data-cursor
            data-cursor-label="Type"
            data-cursor-size="40"
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-accent resize-none"
            placeholder="Car model, preferred date..."
          />
        </label>
        <Button type="submit" variant="pill" cursorLabel="Send" className="w-full sm:w-auto">
          Request booking
        </Button>
      </motion.form>
    </SectionWrapper>
  );
}
