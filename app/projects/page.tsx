"use client";

import { motion } from "framer-motion";
import { FolderGit2, ExternalLink, Cpu } from "lucide-react";

const projects = [
  {
    title: "PipelineX - Enterprise Sales CRM",
    description:
      "A comprehensive sales pipeline CRM integrated with multi-channel communication tools, automated lead scoring, and real-time deal tracking to manage high-volume sales workflows seamlessly.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind", "Authentication"],
  },
  {
    title: "Algocache - Distributed In-Memory Cache",
    description:
      "A high-performance caching service built from scratch implementing custom eviction policies (LRU/LFU), O(1) time complexity data structures, and optimized concurrency handling for backend systems.",
    tags: ["C++", "Data Structures", "Algorithms", "Backend"],
  },
  {
    title: "SyncFlow - Real-Time Collaborative Workspace",
    description:
      "An internal coordination and operations platform featuring real-time document editing, granular role-based access control (RBAC), and low-latency WebSocket synchronization.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "WebSockets", "Tailwind"],
  },
  {
    title: "FinScale - Automated Subscription Engine",
    description:
      "A backend-heavy payment processing and subscription management engine equipped with webhook handlers, automated invoice generation, and robust ledger balancing logic.",
    tags: [
      "Next.js",
      "Python",
      "PostgreSQL",
      "Authentication",
      "API Integration",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex items-center gap-3 mb-8"
      >
        <div className="p-3 bg-accentBlue/10 text-accentBlue rounded-xl border border-accentBlue/30 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
          <FolderGit2 size={24} />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">Featured Projects</h1>
          <p className="text-sm text-slate-400">
            Full-stack systems and engineering platforms
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-cardBg border border-borderDark p-6 rounded-2xl flex flex-col justify-between hover:border-accentBlue/60 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all group"
          >
            <div>
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <ExternalLink
                  size={18}
                  className="text-slate-500 group-hover:text-accentBlue transition-colors cursor-pointer"
                />
              </div>

              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-darkBg border border-borderDark text-xs font-medium text-slate-300 mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Work in Progress
              </div>

              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tIndex) => (
                <span
                  key={tIndex}
                  className="text-xs bg-darkBg text-slate-300 px-3 py-1 rounded-full border border-borderDark"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
