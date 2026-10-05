import "./globals.css";
import Navbar from "@/components/Navbar";
import type { Metadata } from "node_modules/next/types";

export const metadata: Metadata = {
  title: "Mazeen Chawdhury - Portfolio",
  description: "Software Engineer & CS Student Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-darkBg text-slate-100 min-h-screen flex flex-col font-sans selection:bg-blue-600 selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <footer className="py-6 text-center text-sm text-slate-500 border-t border-borderDark mt-12">
          © {new Date().getFullYear()} Mazeen Chawdhury. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
