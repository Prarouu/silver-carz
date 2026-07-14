"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { fadeUp } from "@/lib/animations";

const categories = ["Hatchback", "Sedan", "SUV / MUV"] as const;

const rateCard = [
  { service: "Basic Water Wash", prices: ["₹200", "₹250", "₹300"] },
  { service: "Touchless Shampoo Wash", prices: ["₹350", "₹400", "₹450"] },
  {
    service: "Touchless Wash + Vacuum + Tyre / Interior Polish",
    prices: ["₹600", "₹700", "₹800"],
  },
  {
    service: "Premium Car Spa (Wash + Vacuum + Polish + Wax)",
    prices: ["₹1,200", "₹1,400", "₹1,600"],
  },
  {
    service: "Interior Deep Cleaning",
    prices: ["₹2,000", "₹2,500", "₹2,800"],
  },
  { service: "Engine Bay Cleaning", prices: ["₹600", "₹650", "₹700"] },
  {
    service: "Ceramic / PPF Shampoo Wash",
    prices: ["₹700", "₹750", "₹800"],
  },
  {
    service: "Premium Detailing Wash (Full Exterior / Interior / Wax)",
    prices: ["₹3,000", "₹3,500", "₹4,000"],
  },
  { service: "Rubbing & Polishing", prices: ["₹2,500", "₹2,800", "₹3,500"] },
  { service: "Ceramic Coating", prices: ["₹13,000", "₹15,000", "₹18,000"] },
];

const alsoDone = ["Denting", "Painting", "Service", "Repairing"];

export function Pricing() {
  const [vehicle, setVehicle] = useState(0);

  return (
    <SectionWrapper
      id="prices"
      index="05"
      eyebrow="Rate card"
      title="Transparent pricing."
      description="Pick your vehicle type — see exact rates instantly. All prices in INR."
      className="bg-surface/40"
    >
      {/* Mobile: tabbed card list */}
      <motion.div variants={fadeUp} className="md:hidden premium-card p-4 sm:p-5">
        <p className="mb-3 text-xs uppercase tracking-[0.14em] text-silver-muted">
          Select your vehicle
        </p>
        <div className="grid grid-cols-3 gap-2 rounded-2xl bg-black/40 p-1">
          {categories.map((cat, i) => (
            <button
              key={cat}
              type="button"
              onClick={() => setVehicle(i)}
              className={`rounded-xl px-2 py-2.5 text-[11px] font-medium uppercase tracking-wide transition-colors ${
                vehicle === i
                  ? "bg-accent text-white"
                  : "text-silver-muted hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.ul
            key={vehicle}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mt-4 space-y-2"
          >
            {rateCard.map((row, i) => (
              <li key={row.service}>
                <a
                  href="#contact"
                  className="flex items-start justify-between gap-4 rounded-2xl border border-white/[0.05] bg-white/[0.02] px-4 py-3.5 active:border-accent/30"
                >
                  <div className="min-w-0">
                    <span className="text-[10px] text-accent/80">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-0.5 text-sm leading-snug text-silver">
                      {row.service}
                    </p>
                  </div>
                  <p className="shrink-0 text-base font-semibold text-foreground">
                    {row.prices[vehicle]}
                  </p>
                </a>
              </li>
            ))}
          </motion.ul>
        </AnimatePresence>

        <div className="mt-5">
          <Button href="#contact" variant="pill" className="w-full" cursorLabel="Book">
            Book for {categories[vehicle]}
          </Button>
        </div>
      </motion.div>

      {/* Desktop: full table */}
      <motion.div variants={fadeUp} className="hidden md:block premium-card overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/[0.06] bg-accent/95 text-white">
              <th className="px-5 py-4 text-left text-xs font-medium uppercase tracking-[0.14em]">
                Service
              </th>
              {categories.map((cat) => (
                <th
                  key={cat}
                  className="px-4 py-4 text-center text-xs font-medium uppercase tracking-[0.12em]"
                >
                  {cat}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rateCard.map((row, i) => (
              <tr
                key={row.service}
                className={`border-b border-white/[0.04] ${
                  i % 2 === 0 ? "bg-white/[0.015]" : ""
                }`}
              >
                <td className="px-5 py-4 pr-8 text-silver leading-snug">
                  <span className="mr-2 text-[10px] text-accent/80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {row.service}
                </td>
                {row.prices.map((price) => (
                  <td
                    key={price}
                    className="px-4 py-4 text-center font-medium text-foreground whitespace-nowrap"
                  >
                    {price}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="mt-5 premium-card px-5 py-6 md:px-8 md:py-8"
      >
        <span className="inline-block rounded-full bg-accent px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-white">
          Also done here
        </span>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 md:divide-x md:divide-white/[0.06]">
          {alsoDone.map((item) => (
            <p
              key={item}
              className="rounded-xl border border-white/[0.05] py-3 text-center text-sm font-medium text-silver sm:border-0 sm:py-0 md:px-4 first:md:pl-0 last:md:pr-0"
            >
              {item}
            </p>
          ))}
        </div>
      </motion.div>

      <motion.div variants={fadeUp} className="mt-8 hidden justify-center md:flex">
        <Button href="#contact" variant="pill" cursorLabel="Book">
          Book a service
        </Button>
      </motion.div>
    </SectionWrapper>
  );
}
