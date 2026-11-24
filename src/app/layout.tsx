import type { Metadata } from "next";
import type { ReactNode } from "react";
import { conferenceFont } from "@/styles/conference-font";
import "./globals.scss";

export const metadata: Metadata = {
  title: "ResearchConnect 2026",
  description:
    "A demonstration academic conference page with illustrative program, speaker, venue, and registration information.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={conferenceFont.variable}>
      <body>{children}</body>
    </html>
  );
}
