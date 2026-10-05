"use client";

import { motion } from "framer-motion";
import { GraduationCap, Cpu } from "lucide-react";

const skills = [
  "Next.js",
  "PostgreSQL",
  "Authentication",
  "C++",
  "Python",
  "Java",
  "Data Structures",
  "Algorithms",
  "Frontend and Backend",
  "Framer",
  "Figma",
  "Tailwind",
  "TypeScript",
];

const education = [
  {
    degree: "Bachelors of Computer Science",
    institution: "Manhattan University",
    period: "AUG 2024 - MAY 2028",
  },
  {
    degree: "High School Diploma",
    institution: "Dewitt Clinton High School",
    period: "SEPT 2021 - JUNE 2024",
  },
];

export default function SkillsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
      {/* Skills Section */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="p-3 bg-accentBlue/10 text-accentBlue rounded-xl border border-accentBlue/30 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            <Cpu size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Technical Skills</h1>
            <p className="text-sm text-slate-400">
              Frameworks, languages, and competencies
            </p>
          </div>
        </motion.div>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-cardBg border border-borderDark text-slate-200 px-4 py-2 rounded-xl text-sm font-medium shadow-sm hover:border-accentBlue/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="p-3 bg-accentBlue/10 text-accentBlue rounded-xl border border-accentBlue/30 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            <GraduationCap size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Education</h1>
            <p className="text-sm text-slate-400">
              Academic background and qualifications
            </p>
          </div>
        </motion.div>

        <div className="space-y-4">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.01 }}
              className="bg-cardBg border border-borderDark p-6 rounded-2xl hover:border-accentBlue/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all"
            >
              <span className="text-xs font-semibold text-accentBlue">
                {edu.period}
              </span>
              <h3 className="text-lg font-bold text-white mt-1">
                {edu.degree}
              </h3>
              <p className="text-slate-400 text-sm">{edu.institution}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
