import "./globals.css";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";

const sans = Geist({ subsets: ["latin"], variable: "--font-sans" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });
// Bundled locally so the build never depends on fetching it from Google Fonts.
const serif = localFont({
  src: [
    { path: "./fonts/InstrumentSerif-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/InstrumentSerif-Italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-serif",
  display: "swap",
});
const hand = localFont({ src: "./fonts/Caveat-Variable.woff2", weight: "400 700", variable: "--font-hand", display: "swap" });

export const metadata: Metadata = {
  title: "Mazeen Chawdhury — Full-stack engineer",
  description: "Portfolio of Mazeen Chawdhury, a full-stack engineer and designer in New York City.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} ${hand.variable} ${serif.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
