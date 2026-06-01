"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight, FileDown } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { SITE } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 sm:p-12"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 opacity-60"
            style={{
              background:
                "radial-gradient(ellipse 50% 60% at 100% 0%, color-mix(in oklab, var(--color-accent) 14%, transparent), transparent 60%), radial-gradient(ellipse 40% 50% at 0% 100%, color-mix(in oklab, var(--color-accent) 8%, transparent), transparent 60%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--color-border) 1px, transparent 1px), linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
              maskImage:
                "radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 80%)",
            }}
          />

          <div className="flex flex-col gap-8">
            <SectionHeading
              eyebrow="Contact"
              title={<>Let&rsquo;s build something that ships and survives production.</>}
              description={
                <>
                  Have a role, product, or idea that needs clean engineering?
                  I&rsquo;m open to full-time opportunities and interesting
                  collaborations. I usually reply within a day.
                </>
              }
            />

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${SITE.email}`}
                className="group inline-flex items-center gap-2 rounded-md bg-[var(--color-fg)] px-4 py-2.5 text-sm font-medium text-[var(--color-bg)] transition-transform hover:-translate-y-0.5"
              >
                <Mail className="h-4 w-4" />
                Email me
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={SITE.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-md border border-[var(--color-border)] bg-[var(--color-surface-2)] px-4 py-2.5 text-sm text-[var(--color-fg)] transition-colors hover:border-[var(--color-border-strong)]"
              >
                <Github className="h-4 w-4" /> View GitHub
              </a>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-md border border-[var(--color-border)] bg-[var(--color-surface-2)] px-4 py-2.5 text-sm text-[var(--color-fg)] transition-colors hover:border-[var(--color-border-strong)]"
              >
                <Linkedin className="h-4 w-4" /> Open LinkedIn
              </a>
              <a
                href={SITE.resumeUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-md border border-[var(--color-border)] bg-[var(--color-surface-2)] px-4 py-2.5 text-sm text-[var(--color-fg)] transition-colors hover:border-[var(--color-border-strong)]"
              >
                <FileDown className="h-4 w-4" /> Open resume
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-[var(--color-border)] pt-6 text-sm text-[var(--color-fg-dim)]">
              <span className="font-mono text-xs uppercase tracking-wider">
                {SITE.location}
              </span>
              <span className="hidden sm:inline">·</span>
              <a
                href={`mailto:${SITE.email}`}
                className="font-mono text-xs text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-fg)]"
              >
                {SITE.email}
              </a>
              <span className="hidden sm:inline">·</span>
              <span className="font-mono text-xs text-[var(--color-fg-muted)]">
                {SITE.phone}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
