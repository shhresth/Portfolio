"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { SKILL_GROUPS } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="container-page flex flex-col gap-12">
        <SectionHeading
          eyebrow="Skills"
          title={
            <>
              Grouped by what I actually do, not by what looks impressive on a
              badge wall.
            </>
          }
          description={
            <>
              A short list of the tools and stacks I reach for in production. I
              care more about using the right tool than collecting every
              possible one.
            </>
          }
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.04 + i * 0.06,
              }}
              className="card card-hover p-5"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-fg-muted)]">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface-2)] px-2 py-1 font-mono text-xs text-[var(--color-fg)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
