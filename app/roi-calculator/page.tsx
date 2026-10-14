import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { RoiCalculator } from "@/components/roi-calculator";

export const metadata: Metadata = {
  title: "Weighbridge Automation ROI Calculator // GLUVOK by LWT",
  description:
    "Calculate the measurable financial return, staffing cost reduction, and payback timeline of automating industrial weighbridge operations with Gluvok by Lathey Weigh Trix.",
};

export default function RoiCalculatorPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-canvas)] text-[var(--text-primary)] flex flex-col">
      {/* ─────────────────────────────────────────────────────────────
          1. HEADER (Matches Landing Page Style)
      ───────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-[var(--bg-canvas)]/90 backdrop-blur-md border-b border-[var(--border-hairline)] px-6 lg:px-16 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-xs font-sans text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
          >
            <ArrowLeft className="size-3.5" />
            <span>Back to Overview</span>
          </Link>
          <span className="text-[var(--border-hairline)]" aria-hidden="true">|</span>
          <div className="flex items-baseline gap-2">
            <span className="font-heading font-extrabold text-xl tracking-tight text-[var(--text-primary)]">
              GLUVOK
            </span>
            <span className="text-[9px] font-mono font-medium tracking-wider text-[var(--text-muted)]">
              by LWT
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/#book-demo"
            className="h-8 px-3.5 rounded-[6px] bg-[var(--olive-accent)] text-[#FFFFFF] font-sans text-xs font-medium hover:bg-[var(--olive-accent-hover)] transition-all flex items-center gap-1.5"
          >
            <span>Book a Demo</span>
            <ArrowRight className="size-3" />
          </Link>
        </div>
      </header>

      {/* ─────────────────────────────────────────────────────────────
          2. MAIN CONTENT
      ───────────────────────────────────────────────────────────── */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-6 lg:px-16 py-12 sm:py-20">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] block mb-3">
            SAVINGS &amp; INVESTMENT MODEL
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[var(--text-primary)] mb-4 text-balance">
            Calculate What Automation Could Save Your Business
          </h1>
          <p className="font-sans text-base text-[var(--text-muted)] leading-relaxed">
            We have not set a fixed automation price — every site setup is tailored. Compare your current operator salary expenditure against the potential amount that can be saved using Gluvok.
          </p>
        </div>

        <RoiCalculator />
      </main>

      {/* ─────────────────────────────────────────────────────────────
          3. MINIMALIST DOCUMENT FOOTER (Matches Landing Page Style)
      ───────────────────────────────────────────────────────────── */}
      <footer className="border-t border-[var(--border-hairline)] bg-[var(--bg-canvas)] px-6 lg:px-16 py-10 text-xs font-sans text-[var(--text-muted)]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-baseline gap-2">
            <span className="font-heading font-bold text-sm text-[var(--text-primary)]">GLUVOK</span>
            <span className="text-[10px] font-mono text-[var(--text-muted)]">by Lathey Weigh Trix</span>
            <span className="text-[var(--border-hairline)]">•</span>
            <span>Intelligent Weighbridge Automation</span>
          </div>
          <div className="font-mono text-[11px] text-[var(--text-muted)]">
            Analytical estimates based on your entered operational parameters.
          </div>
        </div>
      </footer>
    </div>
  );
}
