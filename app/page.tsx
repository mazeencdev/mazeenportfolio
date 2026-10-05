import Link from "next/link";
import { ArrowRight, Github, Mail, Phone, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 flex flex-col items-center text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accentBlue/10 text-accentBlue text-xs font-semibold mb-6 border border-accentBlue/20">
        Available for Opportunities
      </div>

      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
        Hi, I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-accentBlue">
          Mazeen Chawdhury
        </span>
      </h1>

      <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-8 leading-relaxed">
        Software Engineer & Computer Science student at Manhattan University.
        Passionate about building robust web applications, scalable systems, and
        intuitive user interfaces.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm text-slate-400">
        <span className="flex items-center gap-1.5">
          <MapPin size={16} className="text-accentBlue" /> Bronx, New York City
        </span>
        <span className="flex items-center gap-1.5">
          <Phone size={16} className="text-accentBlue" /> 347-757-1135
        </span>
        <span className="flex items-center gap-1.5">
          <Mail size={16} className="text-accentBlue" /> mazeencdev@gmail.com
        </span>
      </div>

      <div className="flex gap-4">
        <Link
          href="/projects"
          className="flex items-center gap-2 bg-accentBlue hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-xl transition-all shadow-lg shadow-blue-500/20"
        >
          View Projects <ArrowRight size={18} />
        </Link>
        <Link
          href="/contact"
          className="flex items-center gap-2 bg-cardBg hover:bg-borderDark text-slate-200 font-medium px-6 py-3 rounded-xl border border-borderDark transition-all"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
}
