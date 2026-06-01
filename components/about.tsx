"use client";

import { motion } from "framer-motion";
import { Lock, Workflow, Cpu } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const STRENGTHS = [
  {
    icon: Cpu,
    title: "System design & backend architecture",
    body: "Designing services, data models, and APIs that hold up as traffic, teams, and requirements grow.",
  },
  {
    icon: Lock,
    title: "Privacy & security-minded implementation",
    body: "Zero-knowledge proofs, JWT-based auth, session revocation, encryption, and role-based access — built in by default, not bolted on.",
  },
  {
    icon: Workflow,
    title: "Full-stack product shipping",
    body: "From native mobile apps and offline sync to web dashboards, I take work end-to-end and ship things users actually use.",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-16">
          <SectionHeading
            eyebrow="About"
            title={
              <>
                I build product-minded software with a bias for systems that are
                fast, secure, and easy to trust.
              </>
            }
            description={
              <>
                My favorite problems live below the pretty UI: auth, data
                modeling, database performance, cryptography, offline sync, and
                backend architecture. I like clean APIs, readable code,
                practical architecture, and interfaces that tell a story
                without making the visitor work too hard.
              </>
            }
          />

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {STRENGTHS.map(({ icon: Icon, title, body }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: 0.05 + i * 0.08,
                }}
                className="card card-hover group p-5"
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-md border border-[var(--color-border)] bg-[var(--color-surface-2)] text-[var(--color-accent)]">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="text-base font-semibold text-[var(--color-fg)]">
                  {title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-fg-muted)]">
                  {body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
