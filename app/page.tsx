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
            <a href="#why-gluvok" className="hover:text-[var(--text-primary)] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#111111] rounded-[4px] py-1">
              Why Gluvok
            </a>
            <a href="#modules" className="hover:text-[var(--text-primary)] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#111111] rounded-[4px] py-1">
              System Modules
            </a>
            <a href="#live-ledger" className="hover:text-[var(--text-primary)] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#111111] rounded-[4px] py-1">
              Live Ledger
            </a>
            <a href="#calculator" className="hover:text-[var(--text-primary)] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#111111] rounded-[4px] py-1">
              Savings Calculator
            </a>
            <a href="#disputes" className="hover:text-[var(--text-primary)] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#111111] rounded-[4px] py-1">
              Dispute Protocol
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
                <section className="px-6 lg:px-16 pt-10 sm:pt-14 pb-12 sm:pb-16 max-w-6xl mx-auto w-full">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[var(--olive-wash)] border border-[var(--olive-border)] text-[11px] font-sans font-medium text-[var(--olive-text)] mb-4 transition-colors duration-200">
            <span className="size-1.5 rounded-full bg-[var(--olive-accent)] inline-block transition-colors duration-200" aria-hidden="true" />
            UNMANNED WEIGHBRIDGE AUTOMATION // 100% ANTI-TAMPER CLOUD SYSTEM
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-[68px] leading-[1.08] tracking-[-0.03em] text-[var(--text-primary)] mb-3 max-w-4xl text-balance">
            100% Prevention on Weight Manipulation. Zero Operator Fraud.
          </h1>

          <h2 className="font-heading text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-3 max-w-3xl">
            Mitigate On-Site Operator Dependence with Automatic ANPR, Direct Dispute Imagery &amp; Real-Time Cloud Intelligence.
          </h2>

          <p className="font-sans text-base sm:text-lg text-[var(--text-muted)] leading-relaxed max-w-3xl mb-4 font-normal">
            Traditional weighbridges lose millions to manual weight tampering, operator-driver collusion, billing disputes, and heavy 24/7 staffing costs. Gluvok automates the entire weighing cycle: capturing direct indicator weights, multi-angle dispute photographs, and automatic license plates straight to a global cloud ledger—without requiring operators on-site.
          </p>

          <div className="p-4 sm:p-5 rounded-[12px] bg-[var(--olive-wash)] border border-[var(--olive-border)] max-w-3xl mb-6 transition-colors duration-200">
            <p className="font-sans text-sm sm:text-base font-semibold text-[var(--text-primary)] leading-relaxed">
              Autonomous Weighing. Direct Scale Evidence. Instant Dispute Settlement. Global Remote Analytics.
            </p>
            <p className="font-sans text-xs sm:text-sm text-[var(--text-muted)] mt-1.5">
              Every incoming and outgoing vehicle is automatically identified, photographed on the platform, and permanently recorded to the cloud with zero human intervention.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3.5 mb-8 sm:mb-10">
            <Button
              size="lg"
              className="text-sm font-semibold"
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
              size="lg"
              className="text-sm"
              onClick={() => {
                const el = document.getElementById("book-demo");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Request Automation Demo
            </Button>
          </div>

          {/* 4 Metric Bento Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
            <div className="p-4 sm:p-5 rounded-[12px] bg-[var(--surface-card)] border border-[var(--border-hairline)]">
              <div className="flex items-center gap-2 mb-2 text-[var(--olive-accent)]">
                <ShieldCheck className="size-4" />
                <span className="font-mono text-xs uppercase tracking-wider font-semibold">ANTI-TAMPER</span>
              </div>
              <div className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)] tabular-nums">
                100% Lock
              </div>
              <div className="font-sans text-xs text-[var(--text-muted)] mt-2 leading-relaxed">
                Direct encrypted indicator capture prevents manual keyboard alteration or weight manipulation.
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-[12px] bg-[var(--surface-card)] border border-[var(--border-hairline)]">
              <div className="flex items-center gap-2 mb-2 text-[var(--olive-accent)]">
                <Camera className="size-4" />
                <span className="font-mono text-xs uppercase tracking-wider font-semibold">DISPUTE PROOF</span>
              </div>
              <div className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
                Direct Images
              </div>
              <div className="font-sans text-xs text-[var(--text-muted)] mt-2 leading-relaxed">
                Multi-angle camera snapshots of truck, cargo bed, and license plate stored for every weighment.
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-[12px] bg-[var(--surface-card)] border border-[var(--border-hairline)]">
              <div className="flex items-center gap-2 mb-2 text-[var(--olive-accent)]">
                <Scan className="size-4" />
                <span className="font-mono text-xs uppercase tracking-wider font-semibold">AUTOMATIC ANPR</span>
              </div>
              <div className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)] tabular-nums">
                &lt; 1 Second
              </div>
              <div className="font-sans text-xs text-[var(--text-muted)] mt-2 leading-relaxed">
                High-speed OCR vehicle recognition eliminates queue bottlenecks and manual typing errors.
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-[12px] bg-[var(--surface-card)] border border-[var(--border-hairline)]">
              <div className="flex items-center gap-2 mb-2 text-[var(--olive-accent)]">
                <Cloud className="size-4" />
                <span className="font-mono text-xs uppercase tracking-wider font-semibold">CLOUD &amp; ANALYTICS</span>
              </div>
              <div className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
                Global Live
              </div>
              <div className="font-sans text-xs text-[var(--text-muted)] mt-2 leading-relaxed">
                Real-time incoming/outgoing weighments and visual analytical graphs accessible worldwide.
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            3. WHY GLUVOK // OPERATIONAL REALITY (Bento Box Layout)
        ───────────────────────────────────────────────────────────── */}
        <section
          id="why-gluvok"
          className="scroll-mt-24 border-t border-[var(--border-hairline)] px-6 lg:px-16 py-12 sm:py-16 max-w-6xl mx-auto w-full"
        >
          <div className="max-w-3xl mb-6 sm:mb-8">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] block mb-3">
              OPERATIONAL INTEGRITY &amp; UNMANNED AUTOMATION
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold leading-tight text-[var(--text-primary)] mb-6 text-balance">
              Eliminate Fraud. Mitigate Operators. Gain Total Cloud Visibility.
            </h2>
            <p className="font-sans text-lg sm:text-xl text-[var(--text-muted)] leading-relaxed">
              Manual weighbridge booths are the single largest source of inventory leakage, billing disputes, and recurring shift payroll. Gluvok replaces vulnerable manual intervention with autonomous, tamper-proof industrial automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-6 sm:mb-8">
            <div className="p-5 sm:p-6 rounded-[12px] bg-[var(--surface-card)] border border-[var(--border-hairline)] flex flex-col justify-between">
              <div>
                <div className="size-8 rounded-[6px] bg-[var(--olive-wash)] border border-[var(--olive-border)] flex items-center justify-center font-mono text-xs font-bold text-[var(--olive-text)] mb-6 tabular-nums" aria-hidden="true">
                  01
                </div>
                <h3 className="font-heading text-2xl font-bold text-[var(--text-primary)] mb-3">
                  100% Prevention of Weight Manipulation
                </h3>
                <p className="font-sans text-sm text-[var(--text-muted)] leading-relaxed">
                  Stop tare tampering, axle lifting, off-scale positioning, and manual slip alteration permanently. Gluvok locks directly to digital indicator signals via encrypted pipelines and only accepts stable readings when optical platform sensors verify complete vehicle occupancy. Operators cannot overwrite a single digit.
                </p>
              </div>
            </div>

            <div className="p-5 sm:p-6 rounded-[12px] bg-[var(--surface-card)] border border-[var(--border-hairline)] flex flex-col justify-between">
              <div>
                <div className="size-8 rounded-[6px] bg-[var(--olive-wash)] border border-[var(--olive-border)] flex items-center justify-center font-mono text-xs font-bold text-[var(--olive-text)] mb-6 tabular-nums" aria-hidden="true">
                  02
                </div>
                <h3 className="font-heading text-2xl font-bold text-[var(--text-primary)] mb-3">
                  Mitigate the Need for On-Site Operators
                </h3>
                <p className="font-sans text-sm text-[var(--text-muted)] leading-relaxed">
                  Transform continuous 24/7 weighbridge centers into autonomous, unmanned stations. Automated boom barriers, smart traffic lights, bilingual voice guidance, and driver self-service kiosks guide trucks through weighing in under 30 seconds—slashing 60% to 80% of routine staffing overhead.
                </p>
              </div>
            </div>

            <div className="p-5 sm:p-6 rounded-[12px] bg-[var(--surface-card)] border border-[var(--border-hairline)] flex flex-col justify-between">
              <div>
                <div className="size-8 rounded-[6px] bg-[var(--olive-wash)] border border-[var(--olive-border)] flex items-center justify-center font-mono text-xs font-bold text-[var(--olive-text)] mb-6 tabular-nums" aria-hidden="true">
                  03
                </div>
                <h3 className="font-heading text-2xl font-bold text-[var(--text-primary)] mb-3">
                  Direct Weighbridge Images for Every Dispute
                </h3>
                <p className="font-sans text-sm text-[var(--text-muted)] leading-relaxed">
                  End arguments with suppliers, contractors, and transporters instantly. Every single weighment transaction automatically embeds high-resolution camera images of the front vehicle plate, overhead cargo bed load, and rear axle position—permanently stored on the cloud and printed on slips as indisputable evidence.
                </p>
              </div>
            </div>

            <div className="p-5 sm:p-6 rounded-[12px] bg-[var(--surface-card)] border border-[var(--border-hairline)] flex flex-col justify-between">
              <div>
                <div className="size-8 rounded-[6px] bg-[var(--olive-wash)] border border-[var(--olive-border)] flex items-center justify-center font-mono text-xs font-bold text-[var(--olive-text)] mb-6 tabular-nums" aria-hidden="true">
                  04
                </div>
                <h3 className="font-heading text-2xl font-bold text-[var(--text-primary)] mb-3">
                  Real-Time Cloud Ledger &amp; Global Analytical Graphs
                </h3>
                <p className="font-sans text-sm text-[var(--text-muted)] leading-relaxed">
                  Monitor all incoming raw materials and outgoing finished dispatches live in the cloud. Access real-time executive dashboards with tonnage throughput graphs, turnaround time analytics, and tamper alerts securely from any browser, smartphone, or corporate headquarters anywhere in the world.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-[12px] bg-[var(--surface-card)] border border-[var(--border-hairline)] text-center">
            <p className="font-heading text-lg sm:text-xl font-bold text-[var(--text-primary)] max-w-3xl mx-auto">
              From incoming raw materials to outbound dispatches: 100% verified weight, photographic proof on every transaction, and zero operator dependency.
            </p>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            4. THE 7 SYSTEM MODULES (Asymmetrical Bento Grid)
        ───────────────────────────────────────────────────────────── */}
        <section
          id="modules"
          className="scroll-mt-24 border-t border-[var(--border-hairline)] px-6 lg:px-16 py-12 sm:py-16 max-w-6xl mx-auto w-full"
        >
          <div className="max-w-3xl mb-6 sm:mb-8">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] block mb-3">
              SYSTEM MODULES &amp; ARCHITECTURE
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold leading-tight text-[var(--text-primary)] mb-6 text-balance">
              The 6 Pillars of Complete Weighbridge Automation
            </h2>
            <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-[var(--text-primary)] mb-4">
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
                <h3 className="font-heading text-xl font-bold text-[var(--text-primary)] mb-2">
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
                <h3 className="font-heading text-xl font-bold text-[var(--text-primary)] mb-2">
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
                <h3 className="font-heading text-xl font-bold text-[var(--text-primary)] mb-2">
                  Automatic ANPR / OCR
                </h3>
                <p className="font-sans text-sm text-[var(--text-muted)] leading-relaxed">
                  High-speed neural optical engine reads commercial plates in under 1 second—even with dirt, dust, or night illumination—auto-linking ERP delivery orders without manual typing.
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
                <h3 className="font-heading text-xl font-bold text-[var(--text-primary)] mb-2">
                  Unmanned Center Automation
                </h3>
                <p className="font-sans text-sm text-[var(--text-muted)] leading-relaxed">
                  Mitigate on-site operator dependence completely. Automated boom barriers, bilingual voice guidance, and driver self-service kiosks manage full weighments without a booth attendant.
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
                <h3 className="font-heading text-xl font-bold text-[var(--text-primary)] mb-2">
                  Real-Time Cloud Ledger
                </h3>
                <p className="font-sans text-sm text-[var(--text-muted)] leading-relaxed">
                  Every inbound raw material load and outbound dispatch streams to the central cloud instantly. Automated SMS/WhatsApp receipts and ERP webhooks broadcast verified data in real time.
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
                <h3 className="font-heading text-xl font-bold text-[var(--text-primary)] mb-2">
                  Global Analytical Graphs
                </h3>
                <p className="font-sans text-sm text-[var(--text-muted)] leading-relaxed">
                  Remotely accessible worldwide. Visual graphs tracking daily tonnage throughput, turnaround times (TAT), commodity distribution, and automated anomaly alerts across all facilities.
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

          {/* Core Assurance Callout */}
          <div className="p-5 sm:p-6 rounded-[12px] bg-[var(--surface-card)] border border-[var(--border-hairline)]">
            <h4 className="font-heading text-2xl font-bold text-[var(--text-primary)] mb-3">
              100% Prevention of Weight Manipulation. Zero Blind Spots.
            </h4>
            <p className="font-sans text-base text-[var(--text-muted)] leading-relaxed mb-4">
              Gluvok bridges the physical weighbridge and the digital executive office. By combining hardware-locked indicator reads, automatic ANPR, multi-angle camera snapshots, and unmanned driver kiosks, every kilogram entering or exiting your plant is verified with mathematical and visual proof.
            </p>
            <p className="font-sans text-base font-semibold text-[var(--text-primary)]">
              No manual slip overwriting. No operator bias. No unresolved disputes. Just clean, tamper-proof operational truth streaming live to your cloud.
            </p>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            5. LIVE PRODUCTION LEDGER (Faux-OS Window Chrome Spec)
        ───────────────────────────────────────────────────────────── */}
        <section
          id="live-ledger"
          className="scroll-mt-24 border-t border-[var(--border-hairline)] px-6 lg:px-16 py-12 sm:py-16 max-w-6xl mx-auto w-full"
        >
          <div className="max-w-3xl mb-5 sm:mb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] block mb-2">
              REAL-TIME CLOUD STREAM // INCOMING &amp; OUTGOING WEIGHMENTS
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-[var(--text-primary)] mb-4 text-balance">
              Live Cloud Ledger with Photographic Dispute Audit
            </h2>
            <p className="font-sans text-base sm:text-lg text-[var(--text-muted)]">
              Remotely monitor all incoming raw materials and outgoing product dispatches in real time across all centers—complete with direct scale camera imagery, automatic ANPR validation, and 100% tamper-locked weights.
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
          className="scroll-mt-24 border-t border-[var(--border-hairline)] px-6 lg:px-16 py-12 sm:py-16 max-w-6xl mx-auto w-full"
        >
          <div className="max-w-3xl mb-5 sm:mb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] block mb-3">
              SAVINGS &amp; INVESTMENT MODEL
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-[var(--text-primary)] text-balance mb-4">
              Calculate What Automation Could Save Your Business
            </h2>
            <p className="font-sans text-base sm:text-lg text-[var(--text-muted)] leading-relaxed mb-3">
              Every weighbridge facility has a distinct operational footprint. While Gluvok deployment is custom-tailored per site, explore your current operator salary expenditure and see the potential amount that can be saved using Gluvok.
            </p>
            <p className="font-sans text-base text-[var(--text-muted)] leading-relaxed mb-6">
              We have not set a fixed automation price because hardware requirements (cameras, indicators, boom barriers) vary by station. Enter your shift count and operator salaries below to review your recurring staffing costs and potential savings.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button
                size="lg"
                className="text-sm font-semibold"
                onClick={() => {
                  const el = document.getElementById("roi-calculator");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Calculate Your ROI
                <ArrowRight className="size-4 ml-1" aria-hidden="true" />
              </Button>
            </div>
          </div>

          {/* Enterprise ROI Calculator Engine */}
          <div>
            <RoiCalculator />
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            7. DISPUTE RESOLUTION PROTOCOL (Bento Grid)
        ───────────────────────────────────────────────────────────── */}
        <section
          id="disputes"
          className="scroll-mt-24 border-t border-[var(--border-hairline)] px-6 lg:px-16 py-12 sm:py-16 max-w-6xl mx-auto w-full"
        >
          <div className="max-w-3xl mb-6 sm:mb-8">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] block mb-3">
              PHOTOGRAPHIC DISPUTE PROTOCOL
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold leading-tight text-[var(--text-primary)] mb-4 text-balance">
              Direct Weighbridge Images Resolve Disputes in Under 60 Seconds
            </h2>
            <p className="font-sans text-base sm:text-lg text-[var(--text-muted)]">
              How multi-angle evidentiary snapshots eliminate costly arguments with suppliers, contractors, and transporters:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Case 1 */}
            <div className="p-5 sm:p-6 rounded-[12px] bg-[var(--surface-card)] border border-[var(--border-hairline)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="yellow">Weight Shortage Dispute</Badge>
                  <span className="font-mono text-xs text-[var(--text-muted)]">#TK-101</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-[var(--text-primary)] mb-2">
                  Supplier Claims 32.5 MT vs 29.8 MT Logged
                </h3>
                <p className="font-sans text-xs text-[var(--text-muted)] leading-relaxed mb-4">
                  <strong>Logged Dispute:</strong> Inbound scrap supplier claimed full 32.5 MT dispatch and disputed the lower receiver weighment slip.
                </p>
                <div className="p-3 rounded-[6px] bg-[#F9F9F8] border border-[var(--border-hairline)] font-sans text-xs text-[var(--text-primary)]">
                  <strong>Direct Image Proof:</strong> High-resolution top-down camera photo revealed cargo bed was only 75% full upon platform arrival. Stamped watermarked image dismissed claim immediately.
                </div>
              </div>
              <div className="mt-6 pt-3 border-t border-[var(--border-hairline)] text-xs font-mono text-[var(--olive-text)] transition-colors duration-200">
                Resolved via Top Bed Camera Proof
              </div>
            </div>

            {/* Case 2 */}
            <div className="p-5 sm:p-6 rounded-[12px] bg-[var(--surface-card)] border border-[var(--border-hairline)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="blue">Plate &amp; Truck Swap</Badge>
                  <span className="font-mono text-xs text-[var(--text-muted)]">#TK-102</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-[var(--text-primary)] mb-2">
                  Ghost Trucking &amp; Paper Challan Swap
                </h3>
                <p className="font-sans text-xs text-[var(--text-muted)] leading-relaxed mb-4">
                  <strong>Logged Dispute:</strong> Driver attempted to use a forged paper challan for a different heavier truck to claim unauthorized payout.
                </p>
                <div className="p-3 rounded-[6px] bg-[#F9F9F8] border border-[var(--border-hairline)] font-sans text-xs text-[var(--text-primary)]">
                  <strong>Direct Image Proof:</strong> Automatic ANPR recognized actual vehicle plate within 800ms; cabin photo captured driver face. System auto-locked barrier and alerted manager dashboard.
                </div>
              </div>
              <div className="mt-6 pt-3 border-t border-[var(--border-hairline)] text-xs font-mono text-[var(--olive-text)] transition-colors duration-200">
                Blocked by Automatic ANPR &amp; Cab Photo
              </div>
            </div>

            {/* Case 3 */}
            <div className="p-5 sm:p-6 rounded-[12px] bg-[var(--surface-card)] border border-[var(--border-hairline)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="red">Axle Ramp Manipulation</Badge>
                  <span className="font-mono text-xs text-[var(--text-muted)]">#TK-103</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-[var(--text-primary)] mb-2">
                  Off-Scale Axle Cheating on Tare
                </h3>
                <p className="font-sans text-xs text-[var(--text-muted)] leading-relaxed mb-4">
                  <strong>Logged Dispute:</strong> Driver stopped with rear wheels partially on approach ramp to artificially lower tare weight by 1,200 kg.
                </p>
                <div className="p-3 rounded-[6px] bg-[#F9F9F8] border border-[var(--border-hairline)] font-sans text-xs text-[var(--text-primary)]">
                  <strong>Direct Image Proof:</strong> Optical wheel sensors and rear camera detected tire overhang. Weight capture was blocked; bilingual voice instruction instructed driver to pull forward.
                </div>
              </div>
              <div className="mt-6 pt-3 border-t border-[var(--border-hairline)] text-xs font-mono text-[var(--olive-text)] transition-colors duration-200">
                Prevented via Optical Boundary Sensors
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            8. MINIMALIST FAQ (Border-Bottom Divided Accordion, Sharp +/-)
        ───────────────────────────────────────────────────────────── */}
        <section
          id="faq"
          className="scroll-mt-24 border-t border-[var(--border-hairline)] px-6 lg:px-16 py-12 sm:py-16 max-w-4xl mx-auto w-full"
        >
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] block mb-3">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-[var(--text-primary)] mb-4 text-balance">
              Answers to Key Operational &amp; Automation Questions
            </h2>
          </div>

          <Accordion className="w-full">
            <AccordionItem value="faq-1">
              <AccordionTrigger>
                How does Gluvok guarantee 100% prevention against weight manipulation?
              </AccordionTrigger>
              <AccordionContent>
                Gluvok establishes a direct, encrypted hardware communication channel with your scale indicator (supporting Mettler-Toledo, Avery Weigh-Tronix, Cardinal, Essae, and all digital indicators). Weight is captured only when positioning IR sensors confirm the truck is 100% on the platform and scale readings have stabilized. Manual typing, back-end SQL tampering, and operator overrides are cryptographically locked out.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-2">
              <AccordionTrigger>
                How are weighbridge camera images captured and used to resolve disputes?
              </AccordionTrigger>
              <AccordionContent>
                The exact millisecond the weight settles, Gluvok automatically triggers high-resolution IP cameras capturing front vehicle license plate, top-down cargo bed load, and rear axle position. These timestamped photos are embedded directly on the digital receipt and permanently archived in the cloud. If any supplier or transporter questions tonnage, management can pull up photographic evidence within seconds.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-3">
              <AccordionTrigger>
                How does Automatic ANPR perform in dusty industrial environments?
              </AccordionTrigger>
              <AccordionContent>
                Our neural ANPR optical engine is specifically trained on commercial truck number plates across heavy industrial environments (cement plants, mines, grain hubs). It utilizes specialized ANPR cameras with adaptive IR illumination that accurately read embossed, painted, high-security, dirty, or damaged plates in sub-second time, day or night.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-4">
              <AccordionTrigger>
                Can Gluvok really run our weighbridge completely unmanned without operators?
              </AccordionTrigger>
              <AccordionContent>
                Yes. Gluvok integrates automated boom barriers, traffic signals, bilingual voice instructions, and rugged driver self-service kiosks. The driver simply pulls onto the scale, the ANPR camera verifies the vehicle, weight settles automatically, barriers open, and a digital QR receipt is generated. Facilities can eliminate 60% to 80% of manual operator staffing while running 24/7.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-5">
              <AccordionTrigger>
                How do the real-time cloud ledger and global analytical graphs work?
              </AccordionTrigger>
              <AccordionContent>
                Every weighment across all your facilities synchronizes instantly to your secure cloud dashboard. Plant owners and corporate executives can log in from anywhere in the world on a phone, tablet, or PC to view live incoming/outgoing tonnage, turnaround times (TAT), supplier yield analysis, and automated alerts for weight variances.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-6">
              <AccordionTrigger>
                What happens if internet connectivity drops at a remote plant?
              </AccordionTrigger>
              <AccordionContent>
                Gluvok operates with dual-mode edge computing. If the local internet drops, the on-site edge controller continues to run unmanned weighments, capture ANPR, lock anti-tamper weights, and save camera images locally without interruption. The moment internet connectivity restores, all queued transactions automatically synchronize to the central cloud ledger.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            9. DEPLOYMENT INTAKE (Crisp Minimalist Card)
        ───────────────────────────────────────────────────────────── */}
        <section
          id="book-demo"
          className="scroll-mt-24 border-t border-[var(--border-hairline)] px-6 lg:px-16 py-12 sm:py-16 max-w-4xl mx-auto w-full"
        >
          <div className="text-center mb-6 sm:mb-8">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] block mb-3">
              OPERATIONAL SOVEREIGNTY
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-[var(--text-primary)] leading-tight mb-4 text-balance">
              Your Weighbridge. Your Data. Your Control.
            </h2>
            <p className="font-sans text-base text-[var(--text-muted)] max-w-2xl mx-auto mb-3">
              You should not have to depend entirely on manual records to understand your own operations.
            </p>
            <p className="font-sans text-base text-[var(--text-muted)] max-w-2xl mx-auto mb-6">
              With Gluvok, your facility can move toward a connected weighing workflow where vehicle identification, weight capture, digital records, and camera monitoring work together.
            </p>
            <div className="p-4 rounded-[8px] bg-[var(--olive-wash)] border border-[var(--olive-border)] max-w-xl mx-auto mb-5">
              <p className="font-heading text-base font-bold text-[var(--text-primary)]">
                Reduce manual dependency. Strengthen accountability. Make decisions with better data.
              </p>
            </div>
            <h3 className="font-heading text-2xl font-bold text-[var(--text-primary)] mb-2">
              Take the Next Step Toward Autonomous Weighbridge Operations.
            </h3>
            <p className="font-sans text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-4">
              Discover how Gluvok can help your facility reduce recurring costs, improve transaction traceability, and modernize weighbridge management.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button
                size="lg"
                className="text-sm font-semibold"
                onClick={() => {
                  const el = document.getElementById("factory-name-input");
                  el?.focus();
                }}
              >
                Book a Demo
                <ArrowRight className="size-4 ml-1" aria-hidden="true" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-sm"
                onClick={() => {
                  const el = document.getElementById("calculator");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Discuss Your ROI
              </Button>
            </div>
          </div>

          <div className="bg-[var(--surface-card)] border border-[var(--border-hairline)] p-6 sm:p-7 rounded-[12px] max-w-2xl mx-auto">
            {submitted ? (
              <div className="py-8 text-center space-y-3" role="status" aria-live="polite">
                <div className="size-10 rounded-full bg-[var(--olive-wash)] text-[var(--olive-text)] border border-[var(--olive-border)] flex items-center justify-center mx-auto text-xl font-bold transition-colors duration-200" aria-hidden="true">
                  ✓
                </div>
                <h3 className="font-heading text-2xl font-bold text-[var(--text-primary)]">
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
              Gluvok — Intelligent Weighbridge Automation by Lathey Weigh Trix.
            </p>
          </div>

          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center gap-6 font-sans text-xs text-[var(--text-muted)]">
            <a href="#why-gluvok" className="hover:text-[var(--text-primary)] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#111111] rounded-[2px]">
              Why Gluvok
            </a>
            <a href="#modules" className="hover:text-[var(--text-primary)] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#111111] rounded-[2px]">
              Modules
            </a>
            <a href="#live-ledger" className="hover:text-[var(--text-primary)] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#111111] rounded-[2px]">
              Ledger
            </a>
            <a href="#calculator" className="hover:text-[var(--text-primary)] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#111111] rounded-[2px]">
              Calculator
            </a>
            <a href="#disputes" className="hover:text-[var(--text-primary)] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#111111] rounded-[2px]">
              Disputes
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
