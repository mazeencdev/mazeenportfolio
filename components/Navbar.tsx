"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Code2,
  Briefcase,
  FolderGit2,
  GraduationCap,
  Mail,
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/", icon: Code2 },
    { name: "Experience", href: "/experience", icon: Briefcase },
    { name: "Projects", href: "/projects", icon: FolderGit2 },
    { name: "Skills", href: "/skills", icon: GraduationCap },
    { name: "Contact", href: "/contact", icon: Mail },
  ];

  return (
    <header className="sticky top-0 z-50 bg-darkBg/80 backdrop-blur-md border-b border-borderDark">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-bold text-lg text-white tracking-wider flex items-center gap-2"
        >
          <span className="w-3 h-3 rounded-full bg-accentBlue"></span>
          MC
        </Link>
        <nav className="flex gap-1 md:gap-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? "bg-accentBlue/10 text-accentBlue border border-accentBlue/30"
                    : "text-slate-400 hover:text-white hover:bg-cardBg"
                }`}
              >
                <Icon size={16} />
                <span className="hidden sm:inline">{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
