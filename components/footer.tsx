"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { SITE } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-8">
      <div className="container-page flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2 text-sm text-[var(--color-fg-muted)]">
          <span className="grid h-6 w-6 place-items-center rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] font-mono text-[10px] text-[var(--color-fg)]">
            SG
          </span>
          <span>
            © {new Date().getFullYear()} {SITE.name}
          </span>
          <span className="hidden text-[var(--color-fg-dim)] sm:inline">·</span>
          <span className="hidden font-mono text-xs text-[var(--color-fg-dim)] sm:inline">
            Built with Next.js, TypeScript, and a lot of coffee.
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <a
            href={SITE.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="grid h-9 w-9 place-items-center rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-fg-muted)] transition-colors hover:border-[var(--color-border-strong)] hover:text-[var(--color-fg)]"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="grid h-9 w-9 place-items-center rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-fg-muted)] transition-colors hover:border-[var(--color-border-strong)] hover:text-[var(--color-fg)]"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${SITE.email}`}
            aria-label="Email"
            className="grid h-9 w-9 place-items-center rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-fg-muted)] transition-colors hover:border-[var(--color-border-strong)] hover:text-[var(--color-fg)]"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
