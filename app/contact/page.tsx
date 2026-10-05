"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex items-center gap-3 mb-8"
      >
        <div className="p-3 bg-accentBlue/10 text-accentBlue rounded-xl border border-accentBlue/30 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
          <Mail size={24} />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">Get in Touch</h1>
          <p className="text-sm text-slate-400">
            Let's discuss opportunities or collaboration
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <motion.div
          whileHover={{ y: -3 }}
          className="bg-cardBg border border-borderDark p-5 rounded-xl text-center hover:border-accentBlue/50 transition-all"
        >
          <Mail className="mx-auto text-accentBlue mb-2" size={20} />
          <h3 className="text-xs font-semibold text-slate-400 uppercase">
            Email
          </h3>
          <p className="text-sm text-white mt-1">mazeencdev@gmail.com</p>
        </motion.div>

        <motion.div
          whileHover={{ y: -3 }}
          className="bg-cardBg border border-borderDark p-5 rounded-xl text-center hover:border-accentBlue/50 transition-all"
        >
          <Phone className="mx-auto text-accentBlue mb-2" size={20} />
          <h3 className="text-xs font-semibold text-slate-400 uppercase">
            Phone
          </h3>
          <p className="text-sm text-white mt-1">347-757-1135</p>
        </motion.div>

        <motion.div
          whileHover={{ y: -3 }}
          className="bg-cardBg border border-borderDark p-5 rounded-xl text-center hover:border-accentBlue/50 transition-all"
        >
          <MapPin className="mx-auto text-accentBlue mb-2" size={20} />
          <h3 className="text-xs font-semibold text-slate-400 uppercase">
            Location
          </h3>
          <p className="text-sm text-white mt-1">Bronx, NYC</p>
        </motion.div>
      </div>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="bg-cardBg border border-borderDark p-8 rounded-2xl space-y-4 shadow-xl"
      >
        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">
            Your Name
          </label>
          <input
            type="text"
            className="w-full bg-darkBg border border-borderDark rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accentBlue text-sm transition-colors"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">
            Your Email
          </label>
          <input
            type="email"
            className="w-full bg-darkBg border border-borderDark rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accentBlue text-sm transition-colors"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">
            Message
          </label>
          <textarea
            rows={4}
            className="w-full bg-darkBg border border-borderDark rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accentBlue text-sm transition-colors"
            placeholder="Hello Mazeen, I'd like to talk about..."
          ></textarea>
        </div>

        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <button
            type="submit"
            className="w-full bg-accentBlue hover:bg-blue-600 text-white font-medium py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]"
          >
            Send Message <Send size={16} />
          </button>
        </motion.div>
      </motion.form>
    </div>
  );
}
