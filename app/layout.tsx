import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GLUVOK — Industrial Weighbridge Automation & Center Management",
  description:
    "An architectural operating system for high-throughput industrial weighing, double-entry weighbridge ledger reconciliation, and automated camera verification.",
  keywords: [
    "industrial weighbridge system",
    "weighbridge automation software",
    "edge camera verification",
    "double entry weighment",
    "factory commodity management",
    "truck weighing ledger",
  ],
  authors: [{ name: "Gluvok Systems" }],
  openGraph: {
    title: "GLUV\\OK — Industrial Weighbridge & Center Management",
    description:
      "Modern operating system for industrial weighbridges, multi-tenant procurement centers, and automated camera gatekeeping.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        manrope.variable,
        geistSans.variable,
        geistMono.variable,
        "scroll-smooth selection:bg-[#111111] selection:text-[#FFFFFF]"
      )}
    >
      <body className="min-h-screen bg-[var(--bg-canvas)] text-[var(--text-primary)] font-sans antialiased selection:bg-[#111111] selection:text-[#FFFFFF]">
        {children}
      </body>
    </html>
  );
}
