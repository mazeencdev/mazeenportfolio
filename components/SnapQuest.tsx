"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, animate, motion, useInView, useMotionValue, useMotionValueEvent, useTransform } from "framer-motion";
import { ArrowUpRight, Check, Folder, Volume2, VolumeX } from "lucide-react";
import { SNAPNAMER } from "@/data/portfolio";
import { EASE } from "./Reveal";

const Q = SNAPNAMER;

/**
 * Darkroom / camera theme. Deliberately the opposite of the Mileage block:
 * light paper, coral + Vision-blue, screenshot marquee, shutter, film strip.
 */

/* ---------- title with a macOS screenshot selection that loops ---------- */
function MarqueeTitle() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-80px" });
  const p = useMotionValue(0);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [dims, setDims] = useState("0 × 0");
  const [flash, setFlash] = useState(0);
  const [thumb, setThumb] = useState(false);
  const left = useTransform(p, [0, 1], ["0%", "100%"]);
  const top = useTransform(p, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => setSize({ w: el.offsetWidth, h: el.offsetHeight });
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useMotionValueEvent(p, "change", (v) => {
    setDims(`${Math.round(v * size.w * 2)} × ${Math.round(v * size.h * 2)}`);
  });

  useEffect(() => {
    if (!inView) return;
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const wait = (ms: number) => new Promise<void>((r) => timers.push(setTimeout(r, ms)));
    (async () => {
      while (!cancelled) {
        p.set(0);
        setThumb(false);
        await wait(700);
        await animate(p, 1, { duration: 1.5, ease: [0.45, 0, 0.2, 1] });
        if (cancelled) break;
        await wait(250);
        setFlash((f) => f + 1);
        setThumb(true);
        await wait(2600);
        setThumb(false);
        await animate(p, 0, { duration: 0.35 });
        await wait(1400);
      }
    })();
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [inView, p]);

  return (
    <div className="snap-title-wrap" ref={ref}>
      <h3 className="snap-title">
        <a href={Q.repo} target="_blank" rel="noreferrer">
          Snap<span>Namer</span>
          <ArrowUpRight className="snap-title-arrow" size={34} strokeWidth={2.2} />
        </a>
      </h3>
      <motion.div
        className="snap-marquee"
        aria-hidden="true"
        style={{ scaleX: p, scaleY: p }}
      />
      <motion.div
        className="snap-crosshair"
        aria-hidden="true"
        style={{ left, top }}
      >
        <svg viewBox="0 0 24 24" width="26" height="26">
          <path d="M12 1v22M1 12h22" stroke="#16140f" strokeWidth="1.6" />
          <circle cx="12" cy="12" r="3" fill="none" stroke="#16140f" strokeWidth="1.6" />
        </svg>
        <span className="snap-dims">{dims}</span>
      </motion.div>
      <AnimatePresence>
        {flash > 0 && (
          <motion.div
            key={flash}
            className="snap-flash"
            aria-hidden="true"
            initial={{ opacity: 0.95 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {thumb && (
          <motion.div
            className="snap-thumb"
            aria-hidden="true"
            initial={{ opacity: 0, x: 40, y: 20, scale: 0.6, rotate: 6 }}
            animate={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: -3 }}
            exit={{ opacity: 0, x: 80, scale: 0.7 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <span className="snap-thumb-img">SnapNamer</span>
            <span className="snap-thumb-meta">
              <Check size={11} strokeWidth={3} /> copied · named · filed
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ---------- ⌘ ⇧ 4 keycaps that press themselves ---------- */
function Keycaps() {
  return (
    <div className="keycaps" aria-label="Command Shift 4">
      {["⌘", "⇧", "4"].map((k, i) => (
        <span key={k} className="keycap" style={{ animationDelay: `${i * 0.18}s` }}>
          {k}
        </span>
      ))}
      <span className="keycaps-note">and that&apos;s it.</span>
    </div>
  );
}

/* ---------- demo inside a polaroid, revealed by a camera aperture ---------- */
function Polaroid() {
  const wrap = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const inView = useInView(wrap, { once: true, margin: "-120px" });
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const v = video.current;
    if (!v) return;
    const io = new IntersectionObserver(([e]) => (e.isIntersecting ? v.play().catch(() => {}) : v.pause()), { threshold: 0.35 });
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <motion.figure
      ref={wrap}
      className="polaroid"
      initial={{ rotate: 6, y: 40, opacity: 0 }}
      whileInView={{ rotate: -2.5, y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", stiffness: 120, damping: 16 }}
      whileHover={{ rotate: 0, scale: 1.015 }}
    >
      <span className="tape tape-l" aria-hidden="true" />
      <span className="tape tape-r" aria-hidden="true" />
      <div className="polaroid-photo">
        <motion.div
          className="aperture-mask"
          initial={{ clipPath: "circle(0% at 50% 50%)" }}
          animate={inView ? { clipPath: "circle(75% at 50% 50%)" } : undefined}
          transition={{ duration: 1.1, ease: EASE, delay: 0.35 }}
        >
          <video
            ref={video}
            src={Q.video}
            poster={Q.poster}
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="SnapNamer demo video"
          />
        </motion.div>
        <motion.svg
          className="aperture-blades"
          viewBox="-50 -50 100 100"
          aria-hidden="true"
          initial={{ rotate: 0, opacity: 1, scale: 1 }}
          animate={inView ? { rotate: 120, opacity: 0, scale: 1.6 } : undefined}
          transition={{ duration: 1.2, ease: EASE, delay: 0.25 }}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <path key={i} d="M0 -48 L30 -10 L0 0 Z" transform={`rotate(${i * 60})`} fill="#16140f" stroke="#3a352b" strokeWidth="1" />
          ))}
        </motion.svg>
        <button
          type="button"
          className="polaroid-sound"
          onClick={() => {
            const v = video.current;
            if (!v) return;
            v.muted = !v.muted;
            setMuted(v.muted);
            if (!v.muted && v.paused) v.play().catch(() => {});
          }}
          aria-label={muted ? "Turn sound on" : "Mute"}
        >
          {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
        </button>
      </div>
      <figcaption>snapnamer-demo.mp4 ✦ nov &apos;26</figcaption>
    </motion.figure>
  );
}

/* ---------- the rename machine ---------- */
type Stage = "scan" | "type" | "file";

function RenameMachine() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-80px" });
  const [i, setI] = useState(0);
  const [stage, setStage] = useState<Stage>("scan");
  const [typed, setTyped] = useState(0);
  const [filed, setFiled] = useState(0);
  const item = Q.renames[i];
  const full = `${item.stamp} - ${item.app} - ${item.text}.png`;

  useEffect(() => {
    if (!inView) return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    let typer: ReturnType<typeof setInterval> | undefined;
    timers.push(
      setTimeout(() => {
        setStage("type");
        let n = 0;
        typer = setInterval(() => {
          n += 2;
          setTyped(Math.min(n, full.length));
          if (n >= full.length) {
            clearInterval(typer);
            timers.push(setTimeout(() => {
              setStage("file");
              setFiled((f) => f + 1);
            }, 450));
            timers.push(
              setTimeout(() => {
                // Reset for the next example as we advance to it.
                setStage("scan");
                setTyped(0);
                setI((x) => (x + 1) % Q.renames.length);
              }, 2300),
            );
          }
        }, 28);
      }, 1500),
    );
    return () => {
      timers.forEach(clearTimeout);
      clearInterval(typer);
    };
  }, [i, inView, full.length]);

  // Colour the typed name by part: timestamp, app, OCR text.
  const a = item.stamp.length;
  const b = a + 3 + item.app.length;
  const shown = full.slice(0, typed);
  const parts = [
    { cls: "rn-stamp", text: shown.slice(0, a) },
    { cls: "rn-sep", text: shown.slice(a, a + 3) },
    { cls: "rn-app", text: shown.slice(a + 3, b) },
    { cls: "rn-sep", text: shown.slice(b, b + 3) },
    { cls: "rn-text", text: shown.slice(b + 3) },
  ];

  return (
    <div className="rename" ref={ref}>
      <div className="rename-head">
        <span>rename machine</span>
        <span className="rename-led" data-stage={stage} />
      </div>

      <div className="rename-shot" aria-hidden="true">
        <div className="shot-bar">
          <i />
          <i />
          <i />
          <b>{item.app}</b>
        </div>
        <div className="shot-body">
          <span className={`shot-heading${stage !== "scan" ? " is-found" : ""}`}>{item.text.split(" - ")[0]}</span>
          <span className="shot-line" />
          <span className="shot-line short" />
          <div className="shot-bars">
            {[40, 55, 48, 70, 62, 85].map((h, k) => (
              <span key={k} style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
        {stage === "scan" && (
          <motion.span key={`scan-${i}`} className="scanline" initial={{ top: "0%" }} animate={{ top: "100%" }} transition={{ duration: 1.3, ease: "easeInOut" }} />
        )}
      </div>

      <div className="rename-names">
        <p className={`rn-before${stage !== "scan" ? " is-struck" : ""}`}>{item.before}</p>
        <p className="rn-after" aria-live="polite">
          {parts.map((part, k) => (
            <span key={k} className={part.cls}>
              {part.text}
            </span>
          ))}
          {stage === "type" && <span className="rn-caret" />}
        </p>
      </div>

      <div className="rename-foot">
        <div className="folder">
          <Folder size={22} />
          <span>~/Pictures/Screenshots</span>
          <motion.b key={filed} initial={{ scale: 1.6, color: "#ff5a4e" }} animate={{ scale: 1, color: "#16140f" }}>
            {filed}
          </motion.b>
          <AnimatePresence>
            {stage === "file" && (
              <motion.span
                key={`chip-${i}`}
                className="file-chip"
                initial={{ x: 140, y: -60, opacity: 1, rotate: -10, scale: 1 }}
                animate={{ x: 0, y: 0, opacity: 0, rotate: 0, scale: 0.4 }}
                transition={{ duration: 0.7, ease: EASE }}
              >
                .png
              </motion.span>
            )}
          </AnimatePresence>
        </div>
        <AnimatePresence>
          {stage === "file" && (
            <motion.span
              className="clip-toast"
              initial={{ opacity: 0, y: 12, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ type: "spring", stiffness: 400, damping: 24 }}
            >
              <Check size={13} strokeWidth={3} /> Copied to clipboard
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ---------- features as a scrolling film strip ---------- */
function FilmStrip() {
  const frames = [...Q.features, ...Q.features];
  return (
    <div className="filmstrip" aria-label="SnapNamer features">
      <div className="film-track">
        {frames.map((f, k) => (
          <div key={k} className="film-frame" aria-hidden={k >= Q.features.length}>
            <span className="film-no">
              {String((k % Q.features.length) + 1).padStart(2, "0")}A ▸
            </span>
            <h4>{f.title}</h4>
            <p>{f.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SnapQuest({ index }: { index: number }) {
  return (
    <article className="snap-quest">
      <div className="snap-grain" aria-hidden="true" />
      <div className="snap-top">
        <div>
          <p className="snap-kicker">
            Quest {String(index + 1).padStart(2, "0")} · {Q.platform} · runs in the background
          </p>
          <MarqueeTitle />
          <p className="snap-tagline">{Q.tagline}</p>
        </div>
        <Keycaps />
      </div>

      <div className="snap-grid">
        <Polaroid />
        <div className="snap-side">
          <p className="snap-story">{Q.story}</p>
          <RenameMachine />
          <div className="snap-actions">
            <a className="snap-cta" href={Q.repo} target="_blank" rel="noreferrer">
              Open on GitHub <ArrowUpRight size={16} />
            </a>
            <span className="snap-stack">{Q.stack.join(" · ")}</span>
          </div>
        </div>
      </div>

      <FilmStrip />
    </article>
  );
}
