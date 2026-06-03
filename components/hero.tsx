"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import { SITE } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28"
    >
      <div aria-hidden className="absolute inset-0 -z-10 grid-bg" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-72 w-[44rem] -translate-x-1/2 rounded-full bg-[var(--color-accent)] opacity-[0.08] blur-3xl"
      />

      <div className="container-page">
        <div className="flex flex-col gap-10">
          {/* Top meta row */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-wrap items-center justify-between gap-3"
          >
            <div className="flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] font-mono text-[10px] uppercase tracking-wider text-[var(--color-fg-muted)]">
                SG
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-fg-muted)]">
                Index 01 — Portfolio · 2026
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="chip chip-accent">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                </span>
                {SITE.status}
              </span>
              <span className="chip">
                <MapPin className="h-3 w-3" /> {SITE.location}
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <div className="flex flex-col gap-6">
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
              className="text-balance text-[clamp(2.4rem,6.4vw,5.25rem)] font-semibold leading-[0.98] tracking-[-0.035em]"
            >
              <span className="block font-mono text-sm font-normal uppercase tracking-[0.22em] text-[var(--color-fg-muted)] sm:text-base">
                Backend &amp; Full-Stack Engineer
              </span>
              <span className="mt-3 block">
                Building software that is{" "}
                <span className="font-display text-[1.05em] text-[var(--color-accent)]">
                  fast, secure,
                </span>{" "}
                and{" "}
                <span className="underline-highlight">hard to break</span>.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.12 }}
              className="max-w-2xl text-pretty text-lg leading-relaxed text-[var(--color-fg-muted)] sm:text-xl"
            >
              {SITE.heroIntro} I design systems that survive real-world
              constraints: privacy, performance, offline sync, auth, and messy
              workflows.
            </motion.p>
          </div>

          {/* CTAs + socials */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-md bg-[var(--color-fg)] px-4 py-2.5 text-sm font-medium text-[var(--color-bg)] transition-transform hover:-translate-y-0.5"
            >
              Check out my projects
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2.5 text-sm text-[var(--color-fg)] transition-colors hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-2)]"
            >
              <Mail className="h-4 w-4" /> Contact me
            </a>
            <a
              href={SITE.resumeUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-center gap-2 rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2.5 text-sm text-[var(--color-fg)] transition-colors hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-2)]"
            >
              <FileText className="h-4 w-4" /> Resume
              <ArrowUpRight className="h-3.5 w-3.5 text-[var(--color-fg-dim)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <div className="ml-1 flex items-center gap-1.5">
              <a
                href={SITE.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
                className="grid h-10 w-10 place-items-center rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-fg-muted)] transition-colors hover:border-[var(--color-border-strong)] hover:text-[var(--color-fg)]"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-fg-muted)] transition-colors hover:border-[var(--color-border-strong)] hover:text-[var(--color-fg)]"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* Highlight strip */}
          <motion.dl
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.28 }}
            className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-3"
          >
            {[
              { k: "Role", v: "Backend & Full-Stack", s: "Engineer" },
              { k: "Focus", v: "Privacy · Geo · AI", s: "Production systems" },
              { k: "Stack", v: "TS · Node · React", s: "Postgres · Solidity" },
            ].map((item) => (
              <div
                key={item.k}
                className="flex flex-col gap-1 bg-[var(--color-bg)] p-5"
              >
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-fg-dim)]">
                  {item.k}
                </dt>
                <dd className="text-base font-medium text-[var(--color-fg)]">
                  {item.v}
                </dd>
                <dd className="text-sm text-[var(--color-fg-muted)]">
                  {item.s}
                </dd>
              </div>
            ))}
          </motion.dl>

          {/* Now / currently building */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.36 }}
            className="card card-hover flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-start gap-3">
              <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-md border border-[var(--color-border)] bg-[var(--color-surface-2)] font-mono text-[10px] text-[var(--color-accent)]">
                NOW
              </span>
              <div className="flex flex-col gap-0.5">
                <span className="text-sm text-[var(--color-fg)]">
                  Building <span className="font-medium">AnonHire</span> and{" "}
                  <span className="font-medium">Lumina</span> — privacy tech
                  and offline-first GIS.
                </span>
                <span className="text-xs text-[var(--color-fg-dim)]">
                  Engineering intern at Vector Consulting Group · Jan 2026 —
                  Present
                </span>
              </div>
            </div>
            <a
              href="#work"
              className="inline-flex items-center gap-1 self-start text-sm text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-fg)] sm:self-auto"
            >
              See what I&rsquo;m shipping
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
