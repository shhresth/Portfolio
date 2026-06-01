"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { ProjectVisual } from "@/components/project-visual";
import { PROJECTS } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <section id="work" className="py-20 sm:py-28">
      <div className="container-page flex flex-col gap-12">
        <SectionHeading
          eyebrow="Selected work"
          title={
            <>
              Flagship projects that prove I can take work from idea to
              production.
            </>
          }
          description={
            <>
              A short, intentional list. Every project here is something I
              shipped or actively maintain — a mix of applied cryptography,
              offline-first mobile, and enterprise workflow software.
            </>
          }
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => {
            const isFlagship = project.category === "flagship";
            const isFeatured = isFlagship && i === 0;
            const isSide = project.category === "side";

            return (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: 0.05 + i * 0.08,
                }}
                className={cn(
                  "card card-hover group flex flex-col overflow-hidden",
                  isFeatured && "lg:col-span-2"
                )}
              >
                <ProjectVisual
                  variant={project.visual}
                  className={cn(isSide && "aspect-[21/9]")}
                />

                {isSide ? (
                  <SideBody project={project} />
                ) : (
                  <CardBody project={project} />
                )}
              </motion.article>
            );
          })}
        </div>

        <div className="flex justify-center">
          <a
            href="https://github.com/shhresth?tab=repositories"
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex items-center gap-2 text-sm text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-fg)]"
          >
            <Sparkles className="h-3.5 w-3.5 text-[var(--color-accent)]" />
            13 repos, more cooking — see all on GitHub
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

function CardBody({ project }: { project: (typeof PROJECTS)[number] }) {
  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-semibold tracking-tight text-[var(--color-fg)]">
              {project.title}
            </h3>
            {project.status ? (
              <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-2)] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[var(--color-fg-muted)]">
                {project.status}
              </span>
            ) : null}
          </div>
          <span className="font-mono text-xs text-[var(--color-fg-dim)]">
            {project.period}
          </span>
        </div>
      </div>

      <p className="text-pretty text-[15px] leading-relaxed text-[var(--color-fg-muted)]">
        {project.oneLiner}
      </p>

      <p className="text-sm leading-relaxed text-[var(--color-fg-dim)]">
        {project.why}
      </p>

      <ul className="mt-1 space-y-1.5 text-sm text-[var(--color-fg-muted)]">
        {project.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap items-end justify-between gap-3 pt-2">
        <ul className="flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <li
              key={s}
              className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface-2)] px-2 py-0.5 font-mono text-[11px] text-[var(--color-fg-muted)]"
            >
              {s}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          {project.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1 text-sm text-[var(--color-fg)] transition-colors hover:text-[var(--color-accent)]"
            >
              {l.label}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function SideBody({ project }: { project: (typeof PROJECTS)[number] }) {
  return (
    <div className="flex flex-col gap-3 p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-[var(--color-fg)]">
          {project.title}
        </h3>
        <span className="font-mono text-[11px] text-[var(--color-fg-dim)]">
          {project.period}
        </span>
      </div>
      <p className="text-sm leading-relaxed text-[var(--color-fg-muted)]">
        {project.oneLiner}
      </p>
      <div className="mt-1 flex items-center justify-between gap-3">
        <ul className="flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <li
              key={s}
              className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface-2)] px-2 py-0.5 font-mono text-[11px] text-[var(--color-fg-muted)]"
            >
              {s}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          {project.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1 text-sm text-[var(--color-fg)] transition-colors hover:text-[var(--color-accent)]"
            >
              {l.label}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
