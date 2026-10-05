"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="relative max-w-4xl mx-auto px-6 py-20 flex flex-col items-center text-center overflow-hidden">
      {/* Background glowing ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accentBlue/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      {/* Bobbing badge */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accentBlue/10 text-accentBlue text-xs font-semibold mb-6 border border-accentBlue/30 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
      >
        <span className="w-2 h-2 rounded-full bg-accentBlue animate-ping" />
        Available for Opportunities
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4"
      >
        Hi, I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-accentBlue">
          Mazeen Chawdhury
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg md:text-xl text-slate-400 max-w-2xl mb-8 leading-relaxed"
      >
        Software Engineer & Computer Science student at Manhattan University.
        Passionate about building robust web applications, scalable systems, and
        intuitive user interfaces.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-wrap justify-center gap-4 mb-12 text-sm text-slate-400"
      >
        <span className="flex items-center gap-1.5">
          <MapPin size={16} className="text-accentBlue" /> Bronx, New York City
        </span>
        <span className="flex items-center gap-1.5">
          <Phone size={16} className="text-accentBlue" /> 347-757-1135
        </span>
        <span className="flex items-center gap-1.5">
          <Mail size={16} className="text-accentBlue" /> mazeencdev@gmail.com
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex gap-4"
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/projects"
            className="flex items-center gap-2 bg-accentBlue hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-xl transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]"
          >
            View Projects <ArrowRight size={18} />
          </Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-cardBg hover:bg-borderDark text-slate-200 font-medium px-6 py-3 rounded-xl border border-borderDark transition-all"
          >
            Get in Touch
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
