"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform, type MotionValue } from "framer-motion";
import { ArrowUpRight, Check, Moon, Sun, Sunrise, Sunset, Volume2, VolumeX } from "lucide-react";
import { HAZE } from "@/data/portfolio";

const H = HAZE;
const SOFT = [0.16, 1, 0.3, 1] as const;

type Sky = "dawn" | "day" | "dusk" | "night";
const SKIES: { id: Sky; label: string; Icon: typeof Sun }[] = [
  { id: "dawn", label: "Dawn", Icon: Sunrise },
  { id: "day", label: "Day", Icon: Sun },
  { id: "dusk", label: "Dusk", Icon: Sunset },
  { id: "night", label: "Night", Icon: Moon },
];

function skyForHour(h: number): Sky {
  if (h >= 5 && h < 9) return "dawn";
  if (h >= 9 && h < 17) return "day";
  if (h >= 17 && h < 20) return "dusk";
  return "night";
}

/* ---------- the wordmark, clearing from haze as it scrolls in ---------- */
function Letter({ ch, i, progress }: { ch: string; i: number; progress: MotionValue<number> }) {
  const start = i * 0.08;
  const blur = useTransform(progress, [start, start + 0.55], [26, 0]);
  const filter = useTransform(blur, (b) => `blur(${b}px)`);
  const opacity = useTransform(progress, [start, start + 0.45], [0.15, 1]);
  const y = useTransform(progress, [start, start + 0.6], [40, 0]);
  return (
    <motion.span className="hz-letter" style={{ filter, opacity, y }}>
      {ch}
    </motion.span>
  );
}

function Wordmark() {
  const ref = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 95%", "start 35%"] });
  const tracking = useTransform(scrollYProgress, [0, 1], ["0.12em", "-0.045em"]);
  return (
    <motion.h3 ref={ref} className="hz-wordmark" style={{ letterSpacing: tracking }}>
      <a href={H.repo} target="_blank" rel="noreferrer" aria-label="haze on GitHub">
        {H.title.split("").map((ch, i) => (
          <Letter key={i} ch={ch} i={i} progress={scrollYProgress} />
        ))}
      </a>
    </motion.h3>
  );
}

/* ---------- Up Next card with a live countdown ---------- */
function UpNext() {
  const [idx, setIdx] = useState(0);
  const [left, setLeft] = useState(H.upNext[0].minutes * 60);
  const [toast, setToast] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const item = H.upNext[idx];

  useEffect(() => {
    const id = setInterval(() => setLeft((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(null), 1600);
    return () => clearTimeout(id);
  }, [toast]);

  const mm = String(Math.floor(left / 60)).padStart(2, "0");
  const ss = String(left % 60).padStart(2, "0");

  const complete = () => {
    setDone(true);
    setToast("Marked as completed");
    setTimeout(() => {
      const next = (idx + 1) % H.upNext.length;
      setIdx(next);
      setLeft(H.upNext[next].minutes * 60);
      setDone(false);
    }, 900);
  };

  return (
    <div className="hz-glass hz-upnext">
      <div className="hz-upnext-top">
        <span className="hz-caps">Up next</span>
        <span className="hz-countdown">
          in {mm}:{ss}
        </span>
      </div>
      <AnimatePresence mode="wait">
        <motion.p
          key={item.title}
          className={`hz-upnext-title${done ? " is-done" : ""}`}
          initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
          transition={{ duration: 0.5, ease: SOFT }}
        >
          {item.title}
        </motion.p>
      </AnimatePresence>
      <p className="hz-upnext-meta">{item.tag} · Today</p>
      <div className="hz-upnext-actions">
        <button
          type="button"
          onClick={() => {
            setLeft((s) => s + 600);
            setToast("Snoozed for 10 minutes");
          }}
        >
          Snooze
        </button>
        <button type="button" onClick={complete} className={done ? "is-done" : undefined}>
          {done ? <Check size={13} strokeWidth={2.5} /> : null} Mark as completed
        </button>
      </div>
      <AnimatePresence>
        {toast && (
          <motion.span
            className="hz-toast"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.3 }}
          >
            {toast}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ---------- natural-language entry that types itself ---------- */
function Typing() {
  const full = H.typing.text;
  const [n, setN] = useState(0);
  const [parsed, setParsed] = useState(false);

  useEffect(() => {
    let i = 0;
    const timers: ReturnType<typeof setTimeout>[] = [];
    let typer: ReturnType<typeof setInterval> | undefined;
    const run = () => {
      i = 0;
      typer = setInterval(() => {
        i += 1;
        setN(i);
        if (i >= full.length) {
          clearInterval(typer);
          timers.push(setTimeout(() => setParsed(true), 350));
          timers.push(
            setTimeout(() => {
              setParsed(false);
              setN(0);
              timers.push(setTimeout(run, 600));
            }, 3800),
          );
        }
      }, 70);
    };
    timers.push(setTimeout(run, 500));
    return () => {
      timers.forEach(clearTimeout);
      clearInterval(typer);
    };
  }, [full.length]);

  const shown = full.slice(0, n);
  const whenAt = full.indexOf("tomorrow");
  const timeAt = full.indexOf("9am");
  const seg = (a: number, b: number) => shown.slice(a, Math.min(b, shown.length));

  return (
    <div className="hz-glass hz-typing">
      <span className="hz-caps">New event</span>
      <p className="hz-typing-line" aria-label={full}>
        <span>{seg(0, whenAt)}</span>
        <mark className={parsed ? "is-on" : undefined}>{seg(whenAt, whenAt + 8)}</mark>
        <span>{seg(whenAt + 8, timeAt)}</span>
        <mark className={parsed ? "is-on" : undefined}>{seg(timeAt, timeAt + 3)}</mark>
        {!parsed && <i className="hz-caret" />}
      </p>
      <div className="hz-chips">
        <AnimatePresence>
          {parsed &&
            [H.typing.when, H.typing.time, "1h"].map((c, k) => (
              <motion.span
                key={c}
                className="hz-chip"
                initial={{ opacity: 0, y: 6, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, delay: k * 0.08, ease: SOFT }}
              >
                {c}
              </motion.span>
            ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ---------- the demo in a floating frosted frame ---------- */
function Film() {
  const video = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const v = video.current;
    if (!v) return;
    const io = new IntersectionObserver(([e]) => (e.isIntersecting ? v.play().catch(() => {}) : v.pause()), { threshold: 0.3 });
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <motion.div
      className="hz-film"
      initial={{ opacity: 0, y: 60, filter: "blur(18px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.4, ease: SOFT }}
    >
      <div className="hz-film-inner">
        <video ref={video} src={H.video} poster={H.poster} muted loop playsInline preload="metadata" aria-label="haze demo video" />
        <button
          type="button"
          className="hz-sound"
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
          <span>{muted ? "Sound off" : "Sound on"}</span>
        </button>
      </div>
    </motion.div>
  );
}

/* ---------- features as an agenda with a moving now line ---------- */
function Agenda() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 50%"] });
  const top = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [clock, setClock] = useState("08:00");
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const mins = 8 * 60 + Math.round(Math.min(Math.max(v, 0), 1) * 10 * 60);
    setClock(`${String(Math.floor(mins / 60)).padStart(2, "0")}:${String(mins % 60).padStart(2, "0")}`);
  });

  return (
    <div className="hz-agenda" ref={ref}>
      <motion.div className="hz-now" style={{ top }} aria-hidden="true">
        <span className="hz-now-time">{clock}</span>
        <span className="hz-now-dot" />
        <span className="hz-now-line" />
      </motion.div>
      {H.agenda.map((a, i) => (
        <motion.div
          key={a.title}
          className="hz-slot"
          initial={{ opacity: 0, x: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: (i % 2) * 0.08, ease: SOFT }}
        >
          <span className="hz-slot-time">{a.time}</span>
          <div className={`hz-event hz-tone-${a.tone}`}>
            <h4>{a.title}</h4>
            <p>{a.body}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function HazeQuest({ index }: { index: number }) {
  const [sky, setSky] = useState<Sky>("day");

  useEffect(() => {
    // Match the visitor's local time of day, like the app's living sky.
    const id = requestAnimationFrame(() => setSky(skyForHour(new Date().getHours())));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <article className="hz" data-sky={sky}>
      <div className="hz-sky" aria-hidden="true">
        <span className="hz-cloud c1" />
        <span className="hz-cloud c2" />
        <span className="hz-cloud c3" />
      </div>

      <div className="hz-inner">
        <header className="hz-head">
          <p className="hz-caps hz-kicker">
            <span>Quest {String(index + 1).padStart(2, "0")}</span>
            <span>{H.platform}</span>
            <span>Calendar &amp; to-do</span>
          </p>
          <div className="hz-skyswitch" role="group" aria-label="Preview the sky at different times of day">
            {SKIES.map(({ id, label, Icon }) => (
              <button key={id} type="button" className={sky === id ? "is-on" : undefined} onClick={() => setSky(id)} aria-pressed={sky === id}>
                <Icon size={14} />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </header>

        <Wordmark />

        <div className="hz-intro">
          <p className="hz-tagline">
            {H.tagline} <em>{H.taglineSoft}</em>
          </p>
          <div className="hz-intro-side">
            <p className="hz-story">{H.story}</p>
            <a className="hz-cta" href={H.repo} target="_blank" rel="noreferrer">
              <Image src={H.icon} alt="" width={28} height={28} />
              <span>View haze on GitHub</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <Film />

        <div className="hz-widgets">
          <UpNext />
          <Typing />
        </div>

        <div className="hz-day">
          <div className="hz-day-head">
            <p className="hz-caps">A day with haze</p>
            <p className="hz-day-title">
              Everything it does, <em>on the calendar.</em>
            </p>
          </div>
          <Agenda />
        </div>

        <p className="hz-stack hz-caps">{H.stack.join("  ·  ")}</p>
      </div>
    </article>
  );
}
