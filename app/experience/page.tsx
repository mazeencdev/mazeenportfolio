"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Salesman",
    company: "City World Ford",
    period: "JULY 2026 - PRESENT",
    description:
      "Guide customers through vehicle selection, financing options, and the purchase process while building relationships and managing a high-volume sales pipeline.",
    source: "Mazeen_Chawdhury_Resume.pdf",
  },
  {
    role: "Founder",
    company: "Cliniq",
    period: "MAY 2026 - PRESENT",
    description:
      "Founder of Cliniq, meant to streamline operations, reduce administrative friction, and improve internal coordination through modern workflow software.",
    source: "Mazeen_Chawdhury_Resume.pdf",
  },
  {
    role: "Software Engineer Intern",
    company: "SYNK",
    period: "JAN 2026 - APRIL 2026",
    description:
      "Using Next.js and Prisma to refine the user experience and enhance the website to a greater level.",
    source: "Mazeen_Chawdhury_Resume.pdf",
  },
  {
    role: "Web Developer",
    company: "Manhattan University",
    period: "APRIL 2025 - JAN 2026",
    description:
      "Using Framer and React Framework to keep the school page updated and attract new students to Manhattan University.",
    source: "Mazeen_Chawdhury_Resume.pdf",
  },
];

export default function ExperiencePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex items-center gap-3 mb-8"
      >
        <div className="p-3 bg-accentBlue/10 text-accentBlue rounded-xl border border-accentBlue/30 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
          <Briefcase size={24} />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">Work Experience</h1>
          <p className="text-sm text-slate-400">
            My professional background and roles
          </p>
        </div>
      </motion.div>

      <div className="space-y-6 border-l border-borderDark ml-4 pl-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
            className="relative bg-cardBg border border-borderDark p-6 rounded-2xl shadow-sm hover:border-accentBlue/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all"
          >
            <span className="absolute -left-[35px] top-6 w-4 h-4 rounded-full bg-accentBlue border-4 border-darkBg shadow-[0_0_10px_#3b82f6]"></span>
            <span className="text-xs font-semibold text-accentBlue tracking-wide">
              {exp.period}
            </span>
            <h3 className="text-xl font-bold text-white mt-1">{exp.role}</h3>
            <h4 className="text-sm font-medium text-slate-300 mb-3">
              {exp.company}
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
