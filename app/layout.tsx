import "./globals.css";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

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
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
