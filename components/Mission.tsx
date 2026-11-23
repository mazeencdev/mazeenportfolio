"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { MapPin } from "lucide-react";
import { ABOUT, HERO, MISSION } from "@/data/portfolio";
import Reveal from "./Reveal";

function Word({ word, progress, range }: { word: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  const y = useTransform(progress, range, [6, 0]);
  return (
    <motion.span className="mission-word" style={{ opacity, y }}>
      {word}{" "}
    </motion.span>
  );
}

export default function Mission() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 45%"] });
  const words = MISSION.split(" ");

  return (
    <section className="mission page-width" aria-label="Mission">
      <div className="mission-band" ref={ref}>
        <span className="mission-kicker">My mission</span>
        <p className="mission-text">
          {words.map((word, i) => (
            <Word key={i} word={word} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} />
          ))}
        </p>
      </div>
      <div className="about-row">
        <Reveal>
          <p>{HERO.bio2.charAt(0).toUpperCase() + HERO.bio2.slice(1)}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="about-facts">
            <li>{ABOUT.school}</li>
            <li>
              <MapPin size={14} /> {ABOUT.location}
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
