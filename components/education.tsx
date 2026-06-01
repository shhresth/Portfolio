"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { EDUCATION } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="py-20 sm:py-28">
      <div className="container-page flex flex-col gap-12">
        <SectionHeading
          eyebrow="Education"
          title={
            <>
              Trust-building context, not the main event.
            </>
          }
        />

        <div className="grid gap-4 md:grid-cols-2">
          {EDUCATION.map((e, i) => (
            <motion.div
              key={e.school}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.04 + i * 0.08,
              }}
              className="card card-hover flex items-start gap-4 p-5"
            >
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-[var(--color-border)] bg-[var(--color-surface-2)] text-[var(--color-accent)]">
                <GraduationCap className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-[var(--color-fg)]">
                  {e.degree}
                </h3>
                <p className="text-sm text-[var(--color-fg-muted)]">
                  {e.school}
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-2 font-mono text-xs text-[var(--color-fg-dim)]">
                  <span>{e.period}</span>
                  {e.detail ? (
                    <>
                      <span>·</span>
                      <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-2)] px-2 py-0.5 text-[var(--color-fg-muted)]">
                        {e.detail}
                      </span>
                    </>
                  ) : null}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
