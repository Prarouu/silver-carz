"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { fadeUp } from "@/lib/animations";
import { faqs } from "@/lib/faq";
import { site } from "@/lib/site";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <SectionWrapper
      id="faq"
      index="07"
      eyebrow="FAQ"
      title="Questions, answered."
      description="Everything Nagpur car owners usually ask before booking."
      className="bg-surface/40"
    >
      <div className="mx-auto max-w-3xl space-y-3">
        {faqs.map((faq, i) => {
          const isOpen = open === i;
          return (
            <motion.div key={faq.q} variants={fadeUp} className="premium-card overflow-hidden">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                data-cursor
                data-cursor-label={isOpen ? "Close" : "Open"}
                data-cursor-size="48"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-7 md:py-5"
              >
                <h3 className="text-sm font-medium text-foreground md:text-base">
                  {faq.q}
                </h3>
                <Plus
                  className={`h-4 w-4 shrink-0 text-accent transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p className="px-5 pb-5 text-sm leading-relaxed text-silver-muted md:px-7 md:pb-6">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        variants={fadeUp}
        className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-4 text-center"
      >
        <p className="text-sm text-silver-muted">
          Still have a question? We reply fastest on WhatsApp.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="#contact" variant="pill" cursorLabel="Book">
            Book a slot
          </Button>
          <Button href={site.phoneHref} variant="ghost" cursorLabel="Call">
            Call {site.phone}
          </Button>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
