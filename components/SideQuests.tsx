"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";
import { ArrowUpRight, Pause, Play, Volume2, VolumeX } from "lucide-react";
import { SIDE_PROJECTS } from "@/data/portfolio";
import { EASE } from "./Reveal";

type Quest = (typeof SIDE_PROJECTS)[number];

const STICKER_SPOTS = [
  { top: "-6%", left: "-4%", rotate: -12, tone: "amber" },
  { top: "8%", right: "-5%", rotate: 9, tone: "ice" },
  { bottom: "18%", left: "-6%", rotate: 6, tone: "ink" },
  { bottom: "-7%", right: "10%", rotate: -7, tone: "amber" },
  { bottom: "-5%", left: "22%", rotate: 4, tone: "ice" },
] as const;

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.6 18.3 5 18.3 5c.7 1.7.3 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5z" />
    </svg>
  );
}

/** Speedometer whose needle and odometer follow scroll progress through the quest. */
function Gauge({ progress }: { progress: MotionValue<number> }) {
  const needleRef = useRef<SVGGElement>(null);
  const [miles, setMiles] = useState(0);
  useMotionValueEvent(progress, "change", (v) => {
    setMiles(Math.max(0, Math.round(v * 2026)));
    // Rotate around the dial's hub in SVG user space (CSS transform-origin is unreliable on SVG groups).
    needleRef.current?.setAttribute("transform", `rotate(${-90 + Math.min(Math.max(v, 0), 1) * 180} 100 104)`);
  });
  const digits = String(miles).padStart(6, "0").split("");

  return (
    <div className="gauge" aria-hidden="true">
      <svg viewBox="0 0 200 120" className="gauge-dial">
        <defs>
          <linearGradient id="gauge-arc" x1="0" x2="1">
            <stop offset="0" stopColor="#5cbcff" />
            <stop offset="0.7" stopColor="#d4efff" />
            <stop offset="1" stopColor="#ffc35c" />
          </linearGradient>
        </defs>
        <path d="M22 104 A80 80 0 0 1 178 104" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="12" strokeLinecap="round" />
        <motion.path
          d="M22 104 A80 80 0 0 1 178 104"
          fill="none"
          stroke="url(#gauge-arc)"
          strokeWidth="12"
          strokeLinecap="round"
          style={{ pathLength: progress }}
        />
        {Array.from({ length: 11 }).map((_, i) => {
          const a = Math.PI - (i / 10) * Math.PI;
          const r1 = i % 5 === 0 ? 58 : 63;
          return (
            <line
              key={i}
              x1={100 + Math.cos(a) * r1}
              y1={104 - Math.sin(a) * r1}
              x2={100 + Math.cos(a) * 68}
              y2={104 - Math.sin(a) * 68}
              stroke="rgba(255,255,255,0.3)"
              strokeWidth={i % 5 === 0 ? 2.5 : 1.5}
              strokeLinecap="round"
            />
          );
        })}
        <g ref={needleRef} transform="rotate(-90 100 104)">
          <line x1="100" y1="104" x2="100" y2="44" stroke="#ffc35c" strokeWidth="3.5" strokeLinecap="round" />
        </g>
        <circle cx="100" cy="104" r="7" fill="#0d1015" stroke="#ffc35c" strokeWidth="3" />
      </svg>
      <div className="odometer">
        {digits.map((d, i) => (
          <span key={i} className="odo-digit">
            <motion.span key={d} initial={{ y: "-100%" }} animate={{ y: 0 }} transition={{ duration: 0.25, ease: EASE }}>
              {d}
            </motion.span>
          </span>
        ))}
        <span className="odo-unit">mi</span>
      </div>
    </div>
  );
}

function DemoWindow({ quest, constraints }: { quest: Quest; constraints: React.RefObject<HTMLDivElement | null> }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [time, setTime] = useState(0);

  const { scrollYProgress } = useScroll({ target: wrapRef, offset: ["start end", "center center"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [-6, -1.5]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.35 },
    );
    io.observe(video);
    return () => io.disconnect();
  }, []);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  };

  return (
    <div className="quest-stage" ref={wrapRef}>
      <motion.div className="mac-window" style={{ rotate, scale }}>
        <div className="mac-bar">
          <span className="lights">
            <i />
            <i />
            <i />
          </span>
          <span className="mac-title">{quest.title} — demo.mp4</span>
          <span className="mac-actions">
            <button type="button" onClick={toggle} aria-label={playing ? "Pause demo" : "Play demo"}>
              {playing ? <Pause size={14} /> : <Play size={14} />}
            </button>
            <button
              type="button"
              onClick={() => {
                const v = videoRef.current;
                if (!v) return;
                v.muted = !v.muted;
                setMuted(v.muted);
                if (!v.muted && v.paused) v.play().catch(() => {});
              }}
              aria-label={muted ? "Turn sound on" : "Mute"}
            >
              {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
            </button>
          </span>
        </div>
        <div className="mac-progress" aria-hidden="true">
          <span style={{ transform: `scaleX(${time})` }} />
        </div>
        <video
          ref={videoRef}
          src={quest.video}
          poster={quest.poster}
          muted
          loop
          playsInline
          preload="metadata"
          onClick={toggle}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onTimeUpdate={(e) => setTime(e.currentTarget.currentTime / (e.currentTarget.duration || 1))}
          aria-label={`${quest.title} demo video`}
        />
      </motion.div>

      {quest.stickers.map((label, i) => {
        const spot = STICKER_SPOTS[i % STICKER_SPOTS.length];
        const { rotate: r, tone, ...pos } = spot;
        return (
          <motion.button
            type="button"
            key={label}
            className={`sticker sticker-${tone}`}
            style={pos}
            drag
            dragConstraints={constraints}
            dragElastic={0.2}
            dragMomentum={false}
            initial={{ opacity: 0, scale: 0.4, rotate: r * 3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: r }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 260, damping: 14, delay: 0.4 + i * 0.12 }}
            whileHover={{ scale: 1.08, rotate: r + (i % 2 ? 6 : -6) }}
            whileDrag={{ scale: 1.15, rotate: 0, zIndex: 20, cursor: "grabbing" }}
            aria-label={`Sticker: ${label}`}
          >
            {label}
          </motion.button>
        );
      })}
      <p className="sticker-hint" aria-hidden="true">
        psst… the stickers move
      </p>
    </div>
  );
}

function Road({ quest }: { quest: Quest }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end 40%"] });
  const carX = useSpring(useTransform(scrollYProgress, [0, 1], ["5%", "95%"]), { stiffness: 90, damping: 20 });

  return (
    <div className="road-wrap" ref={ref}>
      <div className="signs">
        {quest.markers.map((m, i) => (
          <motion.div
            key={m.title}
            className="sign"
            initial={{ opacity: 0, y: 50, rotate: i % 2 ? 4 : -4 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ type: "spring", stiffness: 180, damping: 16, delay: i * 0.12 }}
          >
            <div className="sign-board">
              <span className="sign-mile">
                MILE <b>{String(i + 1).padStart(2, "0")}</b>
              </span>
              <h4>{m.title}</h4>
              <p>{m.body}</p>
            </div>
            <span className="sign-post" aria-hidden="true" />
          </motion.div>
        ))}
      </div>
      <div className="road" aria-hidden="true">
        <span className="road-dash" />
        <motion.span className="car" style={{ left: carX }}>
          <svg viewBox="0 0 64 28" width="64" height="28">
            <path d="M6 20h52v-5c0-2-1.5-3.4-3.5-3.8L46 10l-7-6.5C37.8 2.5 36.3 2 34.7 2H20c-1.6 0-3 .7-4 1.9L10 11c-2.6.4-4 2-4 4.2V20z" fill="#8fd6ff" />
            <path d="M18 10l4.5-5.5h10.7c.8 0 1.5.3 2 .8L40 10H18z" fill="#0d1015" opacity="0.65" />
            <circle cx="17" cy="21" r="5" fill="#0d1015" stroke="#d4efff" strokeWidth="2" />
            <circle cx="47" cy="21" r="5" fill="#0d1015" stroke="#d4efff" strokeWidth="2" />
            <rect x="55" y="13" width="4" height="2.5" rx="1" fill="#ffc35c" />
          </svg>
        </motion.span>
      </div>
    </div>
  );
}

function QuestBlock({ quest, index }: { quest: Quest; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 22 });

  return (
    <article className="quest" ref={ref}>
      <div className="quest-grid">
        <motion.div
          className="quest-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <Gauge progress={progress} />
          <p className="quest-kicker">
            Quest {String(index + 1).padStart(2, "0")} · {quest.platform}
          </p>
          <h3 className="quest-title">
            <a href={quest.repo} target="_blank" rel="noreferrer">
              {quest.title}
              <span className="quest-title-gh">
                <GithubIcon size={22} />
              </span>
            </a>
          </h3>
          <p className="quest-tagline">{quest.tagline}</p>
          <p className="quest-story">
            <span>{quest.kicker}.</span> {quest.story}
          </p>
          <a className="quest-cta" href={quest.repo} target="_blank" rel="noreferrer">
            <GithubIcon size={16} /> View the code <ArrowUpRight size={15} />
          </a>
        </motion.div>
        <DemoWindow quest={quest} constraints={ref} />
      </div>
      <Road quest={quest} />
    </article>
  );
}

export default function SideQuests() {
  return (
    <section id="side-quests" className="quests page-width">
      <div className="quests-head">
        <div>
          <motion.span
            className="tape"
            initial={{ opacity: 0, rotate: -14, y: -10 }}
            whileInView={{ opacity: 1, rotate: -4, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 220, damping: 12 }}
          >
            Side quests
          </motion.span>
          <h2>
            Stuff I build{" "}
            <span className="scribble">
              for fun
              <svg viewBox="0 0 220 24" preserveAspectRatio="none" aria-hidden="true">
                <motion.path
                  d="M3 15 C 40 4, 70 22, 110 12 S 180 6, 217 14"
                  fill="none"
                  stroke="#ffc35c"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, delay: 0.3, ease: EASE }}
                />
              </svg>
            </span>
            .
          </h2>
        </div>
        <p className="quests-note">No clients and no deadlines. Just things I wanted to exist, so I made them.</p>
      </div>

      {SIDE_PROJECTS.map((quest, i) => (
        <QuestBlock key={quest.slug} quest={quest} index={i} />
      ))}
    </section>
  );
}
