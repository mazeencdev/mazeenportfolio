"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, Copy, FileText, Mail } from "lucide-react";
import { EXPERIENCE, HERO, PROJECTS, TOOLS } from "@/data/portfolio";
import { EASE, LinkedInIcon } from "./Reveal";

const HUES = [200, 186, 214];
const CYCLE_MS = 3600;

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 28, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.9, delay, ease: EASE },
});

function hostname(url: string | undefined, fallback: string) {
  if (!url) return fallback;
  try {
    return new URL(url).hostname;
  } catch {
    return url;
  }
}

function ShippedCard() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const project = PROJECTS[index];
  const hue = HUES[index % HUES.length];

  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => setIndex((i) => (i + 1) % PROJECTS.length), CYCLE_MS);
    return () => clearTimeout(id);
  }, [index, paused]);

  return (
    <a
      className="bento-card shipped-card"
      href={project.url || "#work"}
      target={project.url ? "_blank" : undefined}
      rel={project.url ? "noreferrer" : undefined}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{ "--hue": hue } as React.CSSProperties}
    >
      <div className="card-top">
        <span className="card-label">
          <span className="live-dot" /> Shipped
        </span>
        <span className="card-count">
          0{index + 1}
          <span>/0{PROJECTS.length}</span>
        </span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={project.slug}
          className="shipped-body"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.45, ease: EASE }}
        >
          <div>
            <h3>{project.title}</h3>
            <p>{project.label}</p>
          </div>
          <div className="mini-browser">
            <div className="mini-bar">
              <i />
              <i />
              <i />
              <span>{hostname(project.url, project.title)}</span>
            </div>
            <div className="mini-screen">
              <motion.span className="mini-hero" initial={{ width: "20%" }} animate={{ width: "62%" }} transition={{ duration: 0.9, ease: EASE, delay: 0.1 }} />
              <motion.span className="mini-line" initial={{ width: 0 }} animate={{ width: "44%" }} transition={{ duration: 0.8, ease: EASE, delay: 0.25 }} />
              <div className="mini-tiles">
                {[0, 1, 2].map((t) => (
                  <motion.span key={t} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.35 + t * 0.08 }} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="card-bottom">
        <span className="chip">{project.tags.slice(0, 2).join(" · ")}</span>
        <ArrowUpRight size={16} />
      </div>
      <div className="progress-track" aria-hidden="true">
        {PROJECTS.map((p, i) => (
          <span key={p.slug} className={i < index ? "is-done" : undefined}>
            {i === index && (
              <motion.i
                key={`${index}-${paused}`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: paused ? 0.5 : 1 }}
                transition={{ duration: paused ? 0.3 : CYCLE_MS / 1000, ease: "linear" }}
              />
            )}
          </span>
        ))}
      </div>
    </a>
  );
}

function NowCard() {
  const [time, setTime] = useState<string | null>(null);
  const current = EXPERIENCE.filter((e) => e.active);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", timeZone: "America/New_York" });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bento-card now-card">
      <div className="orb" aria-hidden="true">
        <span className="orb-a" />
        <span className="orb-b" />
        <span className="monogram">MC</span>
      </div>
      <div className="now-meta">
        <span className="card-label">
          <span className="live-dot" /> Now
        </span>
        <ul>
          {current.map((e) => (
            <li key={e.company}>
              {e.role} <span>@ {e.company}</span>
            </li>
          ))}
        </ul>
        <p className="now-time">
          NYC <span suppressHydrationWarning>{time ?? "—"}</span>
        </p>
      </div>
    </div>
  );
}

function StackCard() {
  const row = [...TOOLS, ...TOOLS];
  return (
    <div className="bento-card stack-card">
      <p>
        The stack I ship with
        <br />
        <span>{TOOLS.length} tools, every day</span>
      </p>
      <div className="stack-marquee" aria-label={TOOLS.join(", ")}>
        <div className="stack-track">
          {row.map((tool, i) => (
            <span key={`${tool}-${i}`} aria-hidden={i >= TOOLS.length}>
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function SocialGrid() {
  const [copied, setCopied] = useState(false);
  const email = "mazeencdev@gmail.com";

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <div className="social-grid">
      <a className="social-tile" href="https://www.linkedin.com/in/mazeenc/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
        <LinkedInIcon />
      </a>
      <a className="social-tile" href={`mailto:${email}`} aria-label="Email">
        <Mail size={18} />
      </a>
      <a className="social-tile" href="/MCResume.pdf" target="_blank" rel="noreferrer" aria-label="Résumé">
        <FileText size={18} />
      </a>
      <button className="social-tile" type="button" onClick={copy} aria-label="Copy email address">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span key={copied ? "ok" : "copy"} initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }} transition={{ duration: 0.18 }}>
            {copied ? <Check size={18} /> : <Copy size={18} />}
          </motion.span>
        </AnimatePresence>
      </button>
    </div>
  );
}

export default function Hero() {
  const words = ["a", "full-stack", "engineer"];
  return (
    <section id="top" className="hero page-width">
      <div className="hero-copy">
        <motion.div className="status-pill" {...rise(0.1)}>
          <span className="live-dot" /> Available for work
        </motion.div>
        <h1>
          <motion.span className="h1-line" {...rise(0.2)}>
            Hi, I&apos;m
          </motion.span>
          {words.map((w, i) => (
            <motion.span key={w} className="h1-line" {...rise(0.3 + i * 0.1)}>
              {w}
              {i === words.length - 1 && (
                <span className="spin-mark" aria-hidden="true">
                  ✦
                </span>
              )}
            </motion.span>
          ))}
        </h1>
        <motion.p className="hero-intro" {...rise(0.65)}>
          I&apos;m Mazeen, a full-stack developer and designer in {HERO.location.replace(/\b\w/g, (c) => c.toUpperCase())} who
          loves building applications that look clean and feel effortless.
        </motion.p>
        <motion.div className="hero-actions" {...rise(0.75)}>
          <a href="#work" className="btn btn-primary">
            See what I&apos;ve shipped
          </a>
          <a href="/MCResume.pdf" target="_blank" rel="noreferrer" className="btn btn-ghost">
            Résumé <ArrowUpRight size={15} />
          </a>
        </motion.div>
      </div>

      <motion.div
        className="bento"
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.1, delayChildren: 0.35 } } }}
      >
        {[<ShippedCard key="s" />, <NowCard key="n" />, <StackCard key="t" />, <SocialGrid key="g" />].map((card, i) => (
          <motion.div
            key={i}
            className={`bento-cell cell-${i}`}
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.96 },
              show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.9, ease: EASE } },
            }}
          >
            {card}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
