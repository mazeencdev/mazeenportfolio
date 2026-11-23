"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";
import { CodeXml, Database, PenTool, Workflow } from "lucide-react";
import { EXPERIENCE, PROJECTS, SKILL_GROUPS, TOOLS } from "@/data/portfolio";
import Reveal, { EASE } from "./Reveal";

const ICONS = [CodeXml, Database, PenTool, Workflow];

function Counter({ to, label }: { to: number; label: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const el = ref.current;
    const controls = animate(0, to, {
      duration: 1.4,
      ease: EASE,
      onUpdate: (v) => (el.textContent = String(Math.round(v)).padStart(2, "0")),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <div className="stat">
      <span ref={ref} className="stat-num">
        00
      </span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

function SkillCard({ group, index }: { group: (typeof SKILL_GROUPS)[number]; index: number }) {
  const Icon = ICONS[index % ICONS.length];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-80px" });
  const [lit, setLit] = useState(-1);

  useEffect(() => {
    if (!inView) return;
    let i = -1;
    let interval: ReturnType<typeof setInterval> | undefined;
    const step = () => {
      i = (i + 1) % group.items.length;
      setLit(i);
    };
    const start = setTimeout(() => {
      step();
      interval = setInterval(step, 1400);
    }, 600 + index * 350);
    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, [inView, group.items.length, index]);

  return (
    <motion.div
      ref={ref}
      className={`skill-card skill-${index}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: index * 0.08, ease: EASE }}
    >
      <div className="skill-head">
        <span className="skill-icon">
          <Icon size={18} />
        </span>
        <span className="skill-count">{String(group.items.length).padStart(2, "0")}</span>
      </div>
      <h3>{group.title}</h3>
      <p>{group.blurb}</p>
      <div className="skill-chips">
        {group.items.map((item, i) => (
          <motion.span
            key={item}
            className={`skill-chip${lit === i ? " is-lit" : ""}`}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.25 + i * 0.06, ease: EASE }}
          >
            {item}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section page-width">
      <div className="section-heading">
        <Reveal>
          <p className="eyebrow">Skills</p>
          <h2>
            Full stack, <em>end to end.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="section-note">I design it, build the front end, wire up the data and ship it. Here is what I reach for.</p>
        </Reveal>
      </div>

      <Reveal className="stats-row">
        <Counter to={PROJECTS.length} label="Products shipped" />
        <Counter to={EXPERIENCE.length} label="Current roles" />
        <Counter to={TOOLS.length} label="Tools in rotation" />
      </Reveal>

      <div className="skill-grid">
        {SKILL_GROUPS.map((group, i) => (
          <SkillCard key={group.title} group={group} index={i} />
        ))}
      </div>
    </section>
  );
}
