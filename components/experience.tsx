"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { EXPERIENCE } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28">
      <div className="container-page flex flex-col gap-12">
        <SectionHeading
          eyebrow="Experience"
          title={
            <>
              Outcome-focused work, not job-description bullets. A timeline of
              the systems I&rsquo;ve shipped.
            </>
          }
        />

        <div className="relative">
          <div
            aria-hidden
            className="absolute bottom-0 left-[11px] top-0 w-px bg-[var(--color-border)] sm:left-[15px]"
          />

          <ol className="flex flex-col gap-8">
            {EXPERIENCE.map((item, i) => (
              <motion.li
                key={item.company}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: 0.05 + i * 0.08,
                }}
                className="relative pl-8 sm:pl-12"
              >
                <span
                  aria-hidden
                  className="absolute left-0 top-1.5 grid h-6 w-6 place-items-center sm:left-1"
                >
                  <span
                    className={`h-3 w-3 rounded-full ${
                      item.current
                        ? "bg-[var(--color-accent)] shadow-[0_0_0_4px_color-mix(in_oklab,var(--color-accent)_25%,transparent)]"
                        : "bg-[var(--color-bg)] ring-2 ring-[var(--color-border-strong)]"
                    }`}
                  />
                </span>

                <div className="card card-hover p-5 sm:p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="text-lg font-semibold text-[var(--color-fg)]">
                        {item.role}
                      </h3>
                      <span className="text-[var(--color-fg-muted)]">·</span>
                      <span className="text-[var(--color-fg)]">
                        {item.company}
                      </span>
                      {item.current ? (
                        <span className="rounded-full border border-[var(--color-accent)] bg-[color-mix(in_oklab,var(--color-accent)_15%,transparent)] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)]">
                          Current
                        </span>
                      ) : null}
                    </div>
                    <span className="font-mono text-xs text-[var(--color-fg-dim)]">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-1 font-mono text-xs text-[var(--color-fg-dim)]">
                    {item.location}
                  </p>

                  <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-[var(--color-fg-muted)]">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-fg-dim)]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {item.stack.map((s) => (
                      <li
                        key={s}
                        className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface-2)] px-2 py-0.5 font-mono text-[11px] text-[var(--color-fg-muted)]"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
