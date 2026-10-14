"use client";

import * as React from "react";
import {
  ArrowRight,
  ShieldCheck,
  Camera,
  Scan,
  UserX,
  Cloud,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { RoiCalculator } from "@/components/roi-calculator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
// Real weighment records directly from Gluvok database seed fixtures
const REAL_WEIGHMENT_RECORDS = [
  {
    ticket: "WB-2026-1024",
    vehicle: "KA 01 EA 1024",
    customer: "Ramesh Kumar",
    father: "Suresh Kumar",
    commodity: "Wheat",
    center: "North Automatic Scale",
    gross: 42500,
    tare: 14200,
    net: 28300,
    rate: 28.5,
    total: 806550,
    status: "Auto-Approved",
    time: "Today, 10:15 AM",
    badgeVariant: "green" as const,
  },
  {
    ticket: "WB-2026-9080",
    vehicle: "MH 12 PQ 9080",
    customer: "Anita Patel",
    father: "Mahesh Patel",
    commodity: "Scrap Copper",
    center: "Main Weighbridge",
    gross: 31200,
    tare: 12100,
    net: 19100,
    rate: 650.0,
    total: 12415000,
    status: "Verified",
    time: "Today, 11:40 AM",
    badgeVariant: "green" as const,
  },
  {
    ticket: "WB-2026-4421",
    vehicle: "DL 03 CC 4421",
    customer: "Vikram Singh",
    father: "Balwan Singh",
    commodity: "Corn",
    center: "North Automatic Scale",
    gross: 38900,
    tare: 13400,
    net: 25500,
    rate: 22.0,
    total: 561000,
    status: "Auto-Approved",
    time: "Yesterday, 02:20 PM",
    badgeVariant: "green" as const,
  },
  {
    ticket: "WB-2026-3312",
    vehicle: "GJ 06 ZZ 3312",
    customer: "Sunil Verma",
    father: "Kishan Verma",
    commodity: "Sugarcane",
    center: "East Grain Terminal",
    gross: 46800,
    tare: 15300,
    net: 31500,
    rate: 3.8,
    total: 119700,
    status: "Verified",
    time: "2 Days Ago, 04:45 PM",
    badgeVariant: "green" as const,
  },
  {
    ticket: "WB-2026-6655",
    vehicle: "RJ 14 GH 6655",
    customer: "Deepak Choudhary",
    father: "Ram Niwas",
    commodity: "Soybeans",
    center: "Main Weighbridge",
    gross: 39500,
    tare: 14100,
    net: 25400,
    rate: 48.0,
    total: 1219200,
    status: "Verified",
    time: "3 Days Ago, 01:10 PM",
    badgeVariant: "green" as const,
  },
];

export default function MinimalistLandingPage() {
  const [submitted, setSubmitted] = React.useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[var(--bg-canvas)] transition-colors duration-200 text-[var(--text-primary)] flex flex-col font-sans selection:bg-[#111111] selection:text-[#FFFFFF]">
      {/* ─────────────────────────────────────────────────────────────
          ACCESSIBILITY: SKIP LINK
      ───────────────────────────────────────────────────────────── */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:px-4 focus:py-2 focus:bg-[#111111] focus:text-[#FFFFFF] focus:rounded-[6px] font-sans text-xs uppercase tracking-wider outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
      >
        Skip to main content
      </a>

      {/* ─────────────────────────────────────────────────────────────
          1. NAVIGATION (Ultra-Clean Document Header)
      ───────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-[var(--bg-canvas)]/95 backdrop-blur-sm border-b border-[var(--border-hairline)] border-t-2 border-t-[var(--olive-accent)] px-6 lg:px-12 h-16 flex items-center justify-between transition-colors duration-200">
        <div className="flex items-center gap-8">
          <a href="#" className="inline-flex flex-col group outline-none focus-visible:ring-2 focus-visible:ring-[var(--olive-accent)] rounded-[4px] px-0.5 py-0.5 select-none">
            <span className="font-heading font-black text-[23px] tracking-[-0.035em] text-[var(--text-primary)] leading-none">
              GLUVOK
            </span>
            <span className="text-[9.5px] font-sans font-medium tracking-[0.22em] uppercase text-[var(--text-muted)] leading-none mt-1.5 pl-[1px] group-hover:text-[var(--text-primary)] transition-colors">
              by <span className="font-bold text-[var(--text-primary)]">LWT</span>
            </span>
          </a>

          <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-6 text-sm font-sans text-[var(--text-muted)]">
            <a href="#modules" className="hover:text-[var(--text-primary)] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#111111] rounded-[4px] py-1">
              System Modules
            </a>
            <a href="#live-ledger" className="hover:text-[var(--text-primary)] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#111111] rounded-[4px] py-1">
              Live Ledger
            </a>
            <a href="#calculator" className="hover:text-[var(--text-primary)] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#111111] rounded-[4px] py-1">
              Savings Calculator
            </a>
            <a href="#faq" className="hover:text-[var(--text-primary)] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#111111] rounded-[4px] py-1">
              FAQ
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            className="hidden sm:inline-flex text-xs"
            onClick={() => {
              const el = document.getElementById("calculator");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Live Calculator
          </Button>
          <Button
            variant="default"
            size="sm"
            className="text-xs"
            onClick={() => {
              const el = document.getElementById("book-demo");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Go to App
          </Button>
        </div>
      </header>

      {/* ─────────────────────────────────────────────────────────────
          MAIN CONTENT WRAPPER
      ───────────────────────────────────────────────────────────── */}
      <main id="main-content" className="flex-1 flex flex-col">
        {/* ─────────────────────────────────────────────────────────────
            2. HERO SECTION (Editorial Serif Heading + Clean Sans Body)
        ───────────────────────────────────────────────────────────── */}
        <section className="min-h-[calc(100vh-4rem)] flex flex-col justify-center px-6 lg:px-16 py-6 sm:py-8 max-w-6xl mx-auto w-full">
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[var(--olive-wash)] border border-[var(--olive-border)] text-[10px] font-sans font-medium text-[var(--olive-text)] mb-2.5 transition-colors duration-200">
            <span className="size-1.5 rounded-full bg-[var(--olive-accent)] inline-block transition-colors duration-200" aria-hidden="true" />
            UNMANNED WEIGHBRIDGE AUTOMATION • ANTI-TAMPER CLOUD SYSTEM
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[46px] leading-[1.1] tracking-[-0.03em] text-[var(--text-primary)] mb-2.5 max-w-4xl text-balance">
            100% Prevention on Weight Manipulation. Zero Operator Fraud.
          </h1>

          <h2 className="font-heading text-base sm:text-lg font-semibold text-[var(--text-primary)] mb-2.5 max-w-3xl">
            Eliminate booth staff dependencies with plate recognition, multi-angle camera evidence, and cloud ledger records.
          </h2>

          <p className="font-sans text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed max-w-3xl mb-3.5 font-normal">
            Plants lose money to manual weight changes, colluding staff, billing arguments, and recurring shift wages. Gluvok automates weighing at the scale. The system locks indicator readings, takes dispute photos from three angles, and logs vehicle plates into your cloud account without booth attendants.
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Button
              className="text-xs sm:text-sm font-semibold h-10 px-5"
              onClick={() => {
                const el = document.getElementById("calculator");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Calculate Your Potential Savings
              <ArrowRight className="size-4 ml-1" aria-hidden="true" />
            </Button>
            <Button
              variant="outline"
              className="text-xs sm:text-sm h-10 px-5"
              onClick={() => {
                const el = document.getElementById("book-demo");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Request Automation Demo
            </Button>
          </div>

          {/* 4 Metric Bento Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="p-4 rounded-[12px] bg-[var(--surface-card)] border border-[var(--border-hairline)] shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
              <div className="flex items-center gap-1.5 mb-1.5 text-[var(--olive-accent)]">
                <ShieldCheck className="size-4" />
                <span className="font-mono text-[11px] uppercase tracking-wider font-semibold">ANTI-TAMPER</span>
              </div>
              <div className="font-heading text-2xl sm:text-[26px] font-bold tracking-tight text-[var(--text-primary)] tabular-nums">
                100% Lock
              </div>
              <div className="font-sans text-xs text-[var(--text-muted)] mt-1 leading-relaxed">
                Encrypted hardware capture locks indicator serial data. Operators cannot edit or retype digits.
              </div>
            </div>

            <div className="p-4 rounded-[12px] bg-[var(--surface-card)] border border-[var(--border-hairline)] shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
              <div className="flex items-center gap-1.5 mb-1.5 text-[var(--olive-accent)]">
                <Camera className="size-4" />
                <span className="font-mono text-[11px] uppercase tracking-wider font-semibold">DISPUTE PROOF</span>
              </div>
              <div className="font-heading text-2xl sm:text-[26px] font-bold tracking-tight text-[var(--text-primary)]">
                Direct Images
              </div>
              <div className="font-sans text-xs text-[var(--text-muted)] mt-1 leading-relaxed">
                Cameras capture the license plate, driver cabin, and cargo bed during each transaction to settle vendor disputes.
              </div>
            </div>

            <div className="p-4 rounded-[12px] bg-[var(--surface-card)] border border-[var(--border-hairline)] shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
              <div className="flex items-center gap-1.5 mb-1.5 text-[var(--olive-accent)]">
                <Scan className="size-4" />
                <span className="font-mono text-[11px] uppercase tracking-wider font-semibold">AUTOMATIC ANPR</span>
              </div>
              <div className="font-heading text-2xl sm:text-[26px] font-bold tracking-tight text-[var(--text-primary)] tabular-nums">
                &lt; 1 Second
              </div>
              <div className="font-sans text-xs text-[var(--text-muted)] mt-1 leading-relaxed">
                Optical recognition identifies commercial vehicle plates under one second, through dust, rain, and headlights.
              </div>
            </div>

            <div className="p-4 rounded-[12px] bg-[var(--surface-card)] border border-[var(--border-hairline)] shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
              <div className="flex items-center gap-1.5 mb-1.5 text-[var(--olive-accent)]">
                <Cloud className="size-4" />
                <span className="font-mono text-[11px] uppercase tracking-wider font-semibold">CLOUD &amp; ANALYTICS</span>
              </div>
              <div className="font-heading text-2xl sm:text-[26px] font-bold tracking-tight text-[var(--text-primary)]">
                Global Live
              </div>
              <div className="font-sans text-xs text-[var(--text-muted)] mt-1 leading-relaxed">
                Track inbound raw materials, finished product dispatches, and daily tonnage across all plants from any browser.
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            4. THE 7 SYSTEM MODULES (Asymmetrical Bento Grid)
        ───────────────────────────────────────────────────────────── */}
        <section
          id="modules"
          className="scroll-mt-24 border-t border-[var(--border-hairline)] px-6 lg:px-16 py-8 sm:py-10 max-w-6xl mx-auto w-full"
        >
          <div className="max-w-3xl mb-6 sm:mb-8">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] block mb-3">
              SYSTEM MODULES &amp; ARCHITECTURE
            </span>
            <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold leading-snug text-[var(--text-primary)] mb-6 text-balance">
              The 6 Pillars of Complete Weighbridge Automation
            </h2>
            <h3 className="font-heading text-sm sm:text-base font-semibold text-[var(--text-primary)] mb-2">
              Engineered for Zero Tampering, Unmanned Operations &amp; Worldwide Cloud Intelligence.
            </h3>
            <p className="font-sans text-lg text-[var(--text-muted)] leading-relaxed">
              When weighing relies on disconnected systems and manual records, operations remain vulnerable to fraud and human bottlenecks. Gluvok integrates every physical scale, optical sensor, camera, and cloud stream into one cohesive platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-6 sm:mb-8">
            {/* 1. 100% Anti-Tamper Weight Lock */}
            <div className="p-5 sm:p-6 rounded-[12px] bg-[var(--surface-card)] border border-[var(--border-hairline)] flex flex-col justify-between">
              <div>
                <div className="size-9 rounded-[8px] bg-[var(--olive-wash)] border border-[var(--olive-border)] flex items-center justify-center text-[var(--olive-accent)] mb-5 transition-colors duration-200" aria-hidden="true">
                  <ShieldCheck className="size-4" />
                </div>
                <h3 className="font-heading text-sm sm:text-base font-bold text-[var(--text-primary)] mb-1.5">
                  100% Anti-Tamper Scale Lock
                </h3>
                <p className="font-sans text-sm text-[var(--text-muted)] leading-relaxed">
                  Direct encrypted serial/TCP capture from digital indicators (Mettler, Avery, Cardinal, Essae). Zero keyboard editing, zero software tampering, and automatic axle-stability validation.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[var(--border-hairline)] flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-full bg-[var(--olive-wash)] border border-[var(--olive-border)] font-mono text-[11px] font-medium text-[var(--olive-text)]">
                  Hardware Direct
                </span>
                <span className="font-mono text-[11px] text-[#9B9A97]">Zero Override</span>
              </div>
            </div>

            {/* 2. Direct Weighbridge Dispute Imagery */}
            <div className="p-5 sm:p-6 rounded-[12px] bg-[var(--surface-card)] border border-[var(--border-hairline)] flex flex-col justify-between">
              <div>
                <div className="size-9 rounded-[8px] bg-[var(--olive-wash)] border border-[var(--olive-border)] flex items-center justify-center text-[var(--olive-accent)] mb-5 transition-colors duration-200" aria-hidden="true">
                  <Camera className="size-4" />
                </div>
                <h3 className="font-heading text-sm sm:text-base font-bold text-[var(--text-primary)] mb-1.5">
                  Direct Dispute Imagery
                </h3>
                <p className="font-sans text-sm text-[var(--text-muted)] leading-relaxed">
                  Synchronous multi-angle cameras capture front cabin, top cargo bed (material inspection/off-scale detection), and rear plate at the exact millisecond weight stabilizes.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[var(--border-hairline)] flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-full bg-[var(--olive-wash)] border border-[var(--olive-border)] font-mono text-[11px] font-medium text-[var(--olive-text)]">
                  Multi-Angle Proof
                </span>
                <span className="font-mono text-[11px] text-[#9B9A97]">Slip Watermark</span>
              </div>
            </div>

            {/* 3. Automatic High-Speed ANPR */}
            <div className="p-5 sm:p-6 rounded-[12px] bg-[var(--surface-card)] border border-[var(--border-hairline)] flex flex-col justify-between">
              <div>
                <div className="size-9 rounded-[8px] bg-[var(--olive-wash)] border border-[var(--olive-border)] flex items-center justify-center text-[var(--olive-accent)] mb-5 transition-colors duration-200" aria-hidden="true">
                  <Scan className="size-4" />
                </div>
                <h3 className="font-heading text-sm sm:text-base font-bold text-[var(--text-primary)] mb-1.5">
                  Automatic ANPR / OCR
                </h3>
                <p className="font-sans text-sm text-[var(--text-muted)] leading-relaxed">
                  Plate cameras read commercial registration numbers in under one second, through dust, rain, and glare. The system links incoming trucks to your ERP delivery orders with no typing.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[var(--border-hairline)] flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-full bg-[var(--olive-wash)] border border-[var(--olive-border)] font-mono text-[11px] font-medium text-[var(--olive-text)]">
                  &lt; 1s Recognition
                </span>
                <span className="font-mono text-[11px] text-[#9B9A97]">Zero Keying</span>
              </div>
            </div>

            {/* 4. Unmanned Center Driver Automation */}
            <div className="p-5 sm:p-6 rounded-[12px] bg-[var(--surface-card)] border border-[var(--border-hairline)] flex flex-col justify-between">
              <div>
                <div className="size-9 rounded-[8px] bg-[var(--olive-wash)] border border-[var(--olive-border)] flex items-center justify-center text-[var(--olive-accent)] mb-5 transition-colors duration-200" aria-hidden="true">
                  <UserX className="size-4" />
                </div>
                <h3 className="font-heading text-sm sm:text-base font-bold text-[var(--text-primary)] mb-1.5">
                  Unmanned Center Automation
                </h3>
                <p className="font-sans text-sm text-[var(--text-muted)] leading-relaxed">
                  Run stations without booth staff. Boom barriers, bilingual speakers, and touch kiosks handle the entire weighing sequence from vehicle entry to slip printing.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[var(--border-hairline)] flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-full bg-[var(--olive-wash)] border border-[var(--olive-border)] font-mono text-[11px] font-medium text-[var(--olive-text)]">
                  Autonomous Kiosk
                </span>
                <span className="font-mono text-[11px] text-[#9B9A97]">Zero Operator</span>
              </div>
            </div>

            {/* 5. Real-Time Inbound & Outbound Cloud Ledger */}
            <div className="p-5 sm:p-6 rounded-[12px] bg-[var(--surface-card)] border border-[var(--border-hairline)] flex flex-col justify-between">
              <div>
                <div className="size-9 rounded-[8px] bg-[var(--olive-wash)] border border-[var(--olive-border)] flex items-center justify-center text-[var(--olive-accent)] mb-5 transition-colors duration-200" aria-hidden="true">
                  <Cloud className="size-4" />
                </div>
                <h3 className="font-heading text-sm sm:text-base font-bold text-[var(--text-primary)] mb-1.5">
                  Real-Time Cloud Ledger
                </h3>
                <p className="font-sans text-sm text-[var(--text-muted)] leading-relaxed">
                  Scale transactions sync to your central database the moment a truck clears the platform. The system sends WhatsApp or SMS receipts to suppliers and triggers ERP inventory updates.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[var(--border-hairline)] flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-full bg-[var(--olive-wash)] border border-[var(--olive-border)] font-mono text-[11px] font-medium text-[var(--olive-text)]">
                  Sub-Second Sync
                </span>
                <span className="font-mono text-[11px] text-[#9B9A97]">In &amp; Outbound</span>
              </div>
            </div>

            {/* 6. Global Analytics & Remote Dashboard */}
            <div className="p-5 sm:p-6 rounded-[12px] bg-[var(--surface-card)] border border-[var(--border-hairline)] flex flex-col justify-between">
              <div>
                <div className="size-9 rounded-[8px] bg-[var(--olive-wash)] border border-[var(--olive-border)] flex items-center justify-center text-[var(--olive-accent)] mb-5 transition-colors duration-200" aria-hidden="true">
                  <BarChart3 className="size-4" />
                </div>
                <h3 className="font-heading text-sm sm:text-base font-bold text-[var(--text-primary)] mb-1.5">
                  Global Analytical Graphs
                </h3>
                <p className="font-sans text-sm text-[var(--text-muted)] leading-relaxed">
                  Track daily tonnage, turnaround times, and scale alerts across all your facilities from a single online dashboard.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[var(--border-hairline)] flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-full bg-[var(--olive-wash)] border border-[var(--olive-border)] font-mono text-[11px] font-medium text-[var(--olive-text)]">
                  Worldwide Access
                </span>
                <span className="font-mono text-[11px] text-[#9B9A97]">Live Analytics</span>
              </div>
            </div>
          </div>

        </section>

        {/* ─────────────────────────────────────────────────────────────
            5. LIVE PRODUCTION LEDGER (Faux-OS Window Chrome Spec)
        ───────────────────────────────────────────────────────────── */}
        <section
          id="live-ledger"
          className="scroll-mt-24 border-t border-[var(--border-hairline)] px-6 lg:px-16 py-8 sm:py-10 max-w-6xl mx-auto w-full"
        >
          <div className="max-w-3xl mb-5 sm:mb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] block mb-2">
              REAL-TIME CLOUD STREAM // INCOMING &amp; OUTGOING WEIGHMENTS
            </span>
            <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--text-primary)] mb-2 text-balance">
              Live Cloud Ledger with Photographic Dispute Audit
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[var(--text-muted)]">
              Monitor raw material arrivals and product shipments in real time. Each entry includes camera snapshots, plate readings, and scale weights.
            </p>
          </div>

          {/* Faux-OS Window Chrome */}
          <div className="rounded-[12px] border border-[var(--border-hairline)] bg-[var(--surface-card)] overflow-hidden">
            {/* Minimalist macOS-style Header Bar */}
            <div className="px-4 py-3 bg-[var(--bg-canvas)] border-b border-[var(--border-hairline)] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-[#EAEAEA]" aria-hidden="true" />
                <span className="size-2.5 rounded-full bg-[#EAEAEA]" aria-hidden="true" />
                <span className="size-2.5 rounded-full bg-[#EAEAEA]" aria-hidden="true" />
                <span className="ml-3 font-mono text-xs text-[var(--text-muted)]">
                  gluvok.production.weighments.log
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] text-[var(--text-muted)]">Filter:</span>
                <kbd className="border border-[var(--border-hairline)] rounded-[4px] bg-[#F7F6F3] font-mono text-[11px] px-1.5 py-0.5 text-[var(--text-muted)]">
                  CMD + K
                </kbd>
              </div>
            </div>

            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-[var(--bg-canvas)]">
                  <TableRow className="border-b border-[var(--border-hairline)]">
                    <TableHead className="font-mono text-xs uppercase text-[var(--text-primary)] font-medium py-3.5">
                      Receipt #
                    </TableHead>
                    <TableHead className="font-mono text-xs uppercase text-[var(--text-primary)] font-medium py-3.5">
                      Vehicle
                    </TableHead>
                    <TableHead className="font-mono text-xs uppercase text-[var(--text-primary)] font-medium py-3.5">
                      Supplier
                    </TableHead>
                    <TableHead className="font-mono text-xs uppercase text-[var(--text-primary)] font-medium py-3.5">
                      Commodity
                    </TableHead>
                    <TableHead className="font-mono text-xs uppercase text-[var(--text-primary)] font-medium py-3.5">
                      Gross → Tare
                    </TableHead>
                    <TableHead className="font-mono text-xs uppercase text-[var(--text-primary)] font-medium py-3.5">
                      Net
                    </TableHead>
                    <TableHead className="font-mono text-xs uppercase text-[var(--text-primary)] font-medium py-3.5">
                      Settlement
                    </TableHead>
                    <TableHead className="font-mono text-xs uppercase text-[var(--text-primary)] font-medium py-3.5">
                      Status
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="divide-y divide-[#EAEAEA] font-sans text-sm">
                  {REAL_WEIGHMENT_RECORDS.map((record) => (
                    <TableRow key={record.ticket} className="hover:bg-[var(--bg-canvas)] transition-colors">
                      <TableCell className="py-3.5">
                        <div className="font-mono text-xs font-medium text-[var(--text-primary)]">
                          {record.ticket}
                        </div>
                        <div className="font-mono text-[11px] text-[#9B9A97]">
                          {record.time}
                        </div>
                      </TableCell>

                      <TableCell>
                        <div className="font-sans font-medium text-sm text-[var(--text-primary)]">
                          {record.vehicle}
                        </div>
                        <div className="font-sans text-xs text-[var(--text-muted)]">
                          {record.center}
                        </div>
                      </TableCell>

                      <TableCell>
                        <div className="font-sans text-sm text-[var(--text-primary)]">
                          {record.customer}
                        </div>
                        <div className="font-sans text-xs text-[#9B9A97]">
                          S/o {record.father}
                        </div>
                      </TableCell>

                      <TableCell className="font-sans text-sm text-[var(--text-primary)]">
                        {record.commodity}
                      </TableCell>

                      <TableCell className="font-mono text-xs tabular-nums text-[var(--text-muted)]">
                        <div>{record.gross.toLocaleString()}&nbsp;kg</div>
                        <div className="text-[#9B9A97]">{record.tare.toLocaleString()}&nbsp;kg</div>
                      </TableCell>

                      <TableCell>
                        <div className="font-mono text-sm font-semibold text-[var(--text-primary)] tabular-nums">
                          {record.net.toLocaleString()}&nbsp;kg
                        </div>
                      </TableCell>

                      <TableCell>
                        <div className="font-mono text-sm font-semibold text-[var(--text-primary)] tabular-nums">
                          ₹{record.total.toLocaleString("en-IN")}
                        </div>
                        <div className="font-mono text-[10px] text-[#9B9A97]">
                          @ ₹{record.rate}/kg
                        </div>
                      </TableCell>

                      <TableCell>
                        <Badge variant={record.badgeVariant}>
                          {record.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            6. INTERACTIVE CALCULATOR (Minimalist Bento Layout)
        ───────────────────────────────────────────────────────────── */}
        <section
          id="calculator"
          className="scroll-mt-24 border-t border-[var(--border-hairline)] px-6 lg:px-16 py-8 sm:py-10 max-w-6xl mx-auto w-full"
        >
          <div className="max-w-3xl mb-5 sm:mb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] block mb-3">
              SAVINGS &amp; INVESTMENT MODEL
            </span>
            <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--text-primary)] text-balance mb-4">
              Calculate What Automation Could Save Your Business
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-4">
              Hardware configurations vary by station. Enter your shift count and operator salaries below to review your recurring payroll and see what automation could save your facility.
            </p>
          </div>

          {/* Enterprise ROI Calculator Engine */}
          <div>
            <RoiCalculator />
          </div>
        </section>



        {/* ─────────────────────────────────────────────────────────────
            8. MINIMALIST FAQ (Border-Bottom Divided Accordion, Sharp +/-)
        ───────────────────────────────────────────────────────────── */}
        <section
          id="faq"
          className="scroll-mt-24 border-t border-[var(--border-hairline)] px-6 lg:px-16 py-8 sm:py-10 max-w-4xl mx-auto w-full"
        >
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] block mb-3">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--text-primary)] mb-2 text-balance">
              Answers to Key Operational &amp; Automation Questions
            </h2>
          </div>

          <Accordion className="w-full">
            <AccordionItem value="faq-1">
              <AccordionTrigger>
                How does Gluvok guarantee 100% prevention against weight manipulation?
              </AccordionTrigger>
              <AccordionContent>
                Gluvok connects directly to the digital indicator serial port (supporting Mettler-Toledo, Avery Weigh-Tronix, Essae, and Cardinal). Weight records only after infrared positioning sensors verify the entire truck sits on the platform and scale readings stabilize. Operators cannot retype or overwrite digits.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-2">
              <AccordionTrigger>
                How are weighbridge camera images captured and used to resolve disputes?
              </AccordionTrigger>
              <AccordionContent>
                When the weight stabilizes, Gluvok triggers cameras capturing the license plate, open cargo bed, and rear axles. These photos attach to the digital receipt and upload to your cloud account. If a vendor disputes a shortage, you can pull up the timestamped photo in seconds.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-3">
              <AccordionTrigger>
                How does Automatic ANPR perform in dusty industrial environments?
              </AccordionTrigger>
              <AccordionContent>
                The cameras use infrared illumination calibrated for industrial dust, rain, and glare. The optical engine reads embossed, painted, high-security, or dirty plates in under one second, day or night.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-4">
              <AccordionTrigger>
                Can Gluvok run a weighbridge unmanned without operators?
              </AccordionTrigger>
              <AccordionContent>
                Yes. Gluvok integrates boom barriers, traffic signals, bilingual voice guidance, and driver kiosks. Drivers pull onto the platform, cameras verify the plate, the scale logs the weight, and the kiosk prints a slip or sends a QR receipt. Most facilities cut operator payroll by 60% to 80%.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-5">
              <AccordionTrigger>
                How do the real-time cloud ledger and global analytical graphs work?
              </AccordionTrigger>
              <AccordionContent>
                Scale records upload to your cloud account as soon as trucks finish weighing. Plant owners and managers can sign in from a phone, tablet, or laptop to view tonnage trends, turnaround times, and scale alerts across all sites.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-6">
              <AccordionTrigger>
                What happens if internet connectivity drops at a remote plant?
              </AccordionTrigger>
              <AccordionContent>
                The local industrial edge controller continues running weighments, reading plates, and saving photos offline. Once internet reconnects, all queued transactions sync to the cloud automatically.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            9. DEPLOYMENT INTAKE (Crisp Minimalist Card)
        ───────────────────────────────────────────────────────────── */}
        <section
          id="book-demo"
          className="scroll-mt-24 border-t border-[var(--border-hairline)] px-6 lg:px-16 py-8 sm:py-10 max-w-4xl mx-auto w-full"
        >
          <div className="text-center mb-6 sm:mb-8 max-w-2xl mx-auto">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] block mb-2">
              SCHEDULE A WALKTHROUGH
            </span>
            <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--text-primary)] leading-snug mb-2 text-balance">
              Request an Operational Walkthrough
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
              Tell us about your weighbridge stations. We will review your indicator compatibility, demonstrate camera tracking, and calculate your potential savings.
            </p>
          </div>

          <div className="bg-[var(--surface-card)] border border-[var(--border-hairline)] p-6 sm:p-7 rounded-[12px] max-w-2xl mx-auto">
            {submitted ? (
              <div className="py-8 text-center space-y-3" role="status" aria-live="polite">
                <div className="size-10 rounded-full bg-[var(--olive-wash)] text-[var(--olive-text)] border border-[var(--olive-border)] flex items-center justify-center mx-auto text-xl font-bold transition-colors duration-200" aria-hidden="true">
                  ✓
                </div>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-[var(--text-primary)]">
                  Consultation Request Received
                </h3>
                <p className="font-sans text-sm text-[var(--text-muted)] max-w-md mx-auto">
                  Our team will contact you shortly to schedule an operational walkthrough and ROI discussion tailored to your weighbridge stations.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-4"
              >
                <div>
                  <label htmlFor="factory-name-input" className="font-sans text-xs uppercase font-medium text-[var(--text-muted)] block mb-1.5">
                    Facility / Organization Name
                  </label>
                  <Input
                    id="factory-name-input"
                    name="factoryName"
                    required
                    autoComplete="organization"
                    placeholder="e.g. Apex Agro Logistics Ltd…"
                    className="bg-[var(--bg-canvas)] border-[var(--border-hairline)] rounded-[6px] text-sm text-[var(--text-primary)] placeholder:text-[#9B9A97]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name-input" className="font-sans text-xs uppercase font-medium text-[var(--text-muted)] block mb-1.5">
                      Contact Name
                    </label>
                    <Input
                      id="contact-name-input"
                      name="fullName"
                      required
                      autoComplete="name"
                      placeholder="e.g. Ramesh Kumar…"
                      className="bg-[var(--bg-canvas)] border-[var(--border-hairline)] rounded-[6px] text-sm text-[var(--text-primary)] placeholder:text-[#9B9A97]"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone-input" className="font-sans text-xs uppercase font-medium text-[var(--text-muted)] block mb-1.5">
                      Phone Number
                    </label>
                    <Input
                      id="contact-phone-input"
                      name="phone"
                      required
                      type="tel"
                      autoComplete="tel"
                      placeholder="e.g. +91 98765 43210…"
                      className="bg-[var(--bg-canvas)] border-[var(--border-hairline)] rounded-[6px] text-sm text-[var(--text-primary)] placeholder:text-[#9B9A97]"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button type="submit" size="lg" className="flex-1 font-semibold">
                    Book a Demo
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    className="flex-1"
                    onClick={() => {
                      const el = document.getElementById("calculator");
                      el?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Discuss Your ROI
                  </Button>
                </div>
              </form>
            )}
          </div>
        </section>
      </main>

      {/* ─────────────────────────────────────────────────────────────
          10. MINIMALIST DOCUMENT FOOTER
      ───────────────────────────────────────────────────────────── */}
      <footer className="border-t border-[var(--border-hairline)] bg-[var(--bg-canvas)] px-6 lg:px-16 py-14">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="flex flex-col mb-2">
              <div className="flex items-baseline gap-2">
                <span className="font-sans font-bold text-xl tracking-tight text-[var(--text-primary)] leading-none">
                  GLUVOK
                </span>
                <span className="text-[9px] font-mono font-medium tracking-wider text-[var(--text-muted)]">
                  by LWT
                </span>
              </div>
            </div>
            <p className="font-sans text-xs text-[var(--text-muted)] max-w-sm italic">
              Gluvok: Intelligent Weighbridge Automation by Lathey Weigh Trix.
            </p>
          </div>

          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center gap-6 font-sans text-xs text-[var(--text-muted)]">
            <a href="#modules" className="hover:text-[var(--text-primary)] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#111111] rounded-[2px]">
              Modules
            </a>
            <a href="#live-ledger" className="hover:text-[var(--text-primary)] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#111111] rounded-[2px]">
              Ledger
            </a>
            <a href="#calculator" className="hover:text-[var(--text-primary)] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#111111] rounded-[2px]">
              Calculator
            </a>
            <a href="#faq" className="hover:text-[var(--text-primary)] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#111111] rounded-[2px]">
              FAQ
            </a>
          </nav>
        </div>

        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-[var(--border-hairline)] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#9B9A97]">
          <div>
            &copy; 2026 GLUVOK INDUSTRIAL OPERATING SYSTEMS
          </div>
          <div>
            PROTOCOL: MINIMALIST-UI // WARM MONOCHROME
          </div>
        </div>
      </footer>

      {/* Interactive Olive Shades Palette Audition Studio */}
    </div>
  );
}
