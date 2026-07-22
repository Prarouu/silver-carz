"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { fadeUp } from "@/lib/animations";
import { site, whatsappLink } from "@/lib/site";

function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const name = String(data.get("name") ?? "").trim();
  const phone = String(data.get("phone") ?? "").trim();
  const service = String(data.get("service") ?? "").trim();
  const message = String(data.get("message") ?? "").trim();

  const text = [
    "New booking request — Silver Carz",
    "",
    `Name: ${name || "-"}`,
    `Phone: ${phone || "-"}`,
    `Service: ${service || "-"}`,
    message ? `Message: ${message}` : null,
  ]
    .filter((line) => line !== null)
    .join("\n");

  window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
}

export function Contact() {
  return (
    <SectionWrapper
      id="contact"
      index="08"
      eyebrow="Contact"
      title="Book your slot."
      description="Share your car details — we'll confirm your appointment within a few hours."
    >
      <motion.form
        variants={fadeUp}
        onSubmit={handleSubmit}
        className="mx-auto max-w-2xl premium-card p-6 md:p-10 space-y-5"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-xs tracking-wide uppercase text-silver-muted">
              Name
            </span>
            <input
              name="name"
              required
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
              name="phone"
              type="tel"
              required
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
            name="service"
            required
            data-cursor
            data-cursor-label="Pick"
            data-cursor-size="48"
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-accent"
            defaultValue=""
          >
            <option value="" disabled>
              Select a service
            </option>
            <option>Basic Water Wash</option>
            <option>Touchless Shampoo Wash</option>
            <option>Touchless Wash + Vacuum + Polish</option>
            <option>Premium Car Spa</option>
            <option>Interior Deep Cleaning</option>
            <option>Engine Bay Cleaning</option>
            <option>Ceramic / PPF Shampoo Wash</option>
            <option>Premium Detailing Wash</option>
            <option>Rubbing &amp; Polishing</option>
            <option>Ceramic Coating</option>
            <option>Other (Denting / Painting / Service / Repairing)</option>
          </select>
        </label>
        <label className="block">
          <span className="mb-2 block text-xs tracking-wide uppercase text-silver-muted">
            Message
          </span>
          <textarea
            name="message"
            rows={4}
            data-cursor
            data-cursor-label="Type"
            data-cursor-size="40"
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-accent resize-none"
            placeholder="Car model, preferred date..."
          />
        </label>
        <Button type="submit" variant="pill" cursorLabel="Send" className="w-full sm:w-auto">
          Request booking on WhatsApp
        </Button>
        <p className="text-xs text-silver-muted">
          Prefer to talk?{" "}
          <a
            href={site.phoneHref}
            className="text-foreground underline underline-offset-4 hover:text-accent transition-colors"
          >
            Call {site.phone}
          </a>{" "}
          · {site.hours.label}
        </p>
      </motion.form>
    </SectionWrapper>
  );
}
