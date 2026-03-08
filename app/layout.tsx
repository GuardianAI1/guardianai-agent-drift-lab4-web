import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GuardianAI Multi-Agent Lab — Propagation Experiment",
  description: "Deterministic multi-agent propagation experiments with recursive perturbation and trajectory stability tracking."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
