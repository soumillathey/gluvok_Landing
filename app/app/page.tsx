import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ShieldCheck, Terminal } from "lucide-react";

export const metadata: Metadata = {
  title: "Gluvok Enterprise Console // Lathey Weigh Trix",
  description: "Access the Gluvok Weighbridge Automation & Telemetry Portal.",
};

export default function AppPage() {
  return (
    <div className="min-h-screen bg-[#07090D] text-[#F0F6FC] flex flex-col justify-between selection:bg-[#A3E635] selection:text-[#0D1117]">
      <header className="px-6 lg:px-16 h-16 border-b border-[#30363D]/80 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="font-heading font-extrabold text-lg tracking-tight text-[#F0F6FC]">
            GLUVOK
          </Link>
          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#161B22] border border-[#30363D] text-[#A3E635]">
            BY LATHEY WEIGH TRIX
          </span>
        </div>
        <Link href="/" className="font-mono text-xs text-[#8B949E] hover:text-[#F0F6FC] flex items-center gap-1.5">
          <ArrowLeft className="size-3.5" />
          <span>Home</span>
        </Link>
      </header>

      <main className="max-w-xl mx-auto px-6 py-20 text-center">
        <div className="size-12 rounded-xl bg-[#161B22] border border-[#30363D] text-[#A3E635] flex items-center justify-center mx-auto mb-6">
          <Terminal className="size-6" />
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#161B22] border border-[#30363D] text-[11px] font-mono text-[#22D3EE] mb-4">
          <ShieldCheck className="size-3.5" />
          <span>ENTERPRISE GATEWAY &amp; WEIGHMENT DISPATCH</span>
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#F0F6FC] mb-4">
          Gluvok Cloud Terminal
        </h1>
        <p className="font-sans text-sm text-[#8B949E] leading-relaxed mb-8">
          The production cloud management portal is deployed with dedicated hardware instances for authorized industrial plants. Request a deployment assessment or access the interactive ROI model below.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/#book-demo"
            className="h-11 px-6 rounded-lg bg-[#A3E635] text-[#0D1117] font-sans font-semibold text-xs flex items-center justify-center gap-2 hover:bg-[#84CC16] transition-colors"
          >
            <span>Request Demo Access</span>
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/roi-calculator"
            className="h-11 px-6 rounded-lg bg-[#161B22] border border-[#30363D] text-[#F0F6FC] font-sans font-medium text-xs flex items-center justify-center gap-2 hover:border-[#A3E635] transition-colors"
          >
            <span>Launch ROI Calculator</span>
          </Link>
        </div>
      </main>

      <footer className="border-t border-[#30363D]/80 px-6 py-6 text-center text-xs font-mono text-[#8B949E]">
        GLUVOK — Industrial Weighbridge Automation &amp; Center Management • Lathey Weigh Trix
      </footer>
    </div>
  );
}
