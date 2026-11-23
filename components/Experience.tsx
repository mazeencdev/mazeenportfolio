"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { EXPERIENCE } from "@/data/portfolio";
import Reveal, { EASE } from "./Reveal";

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  return (
    <section id="experience" className="section page-width">
      <div className="section-heading">
        <Reveal>
          <p className="eyebrow">Experience</p>
          <h2>
            Where I&apos;m <em>building now.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="section-note">Two companies, both founded in 2026: one for hospitals, one for small-business payments.</p>
        </Reveal>
      </div>

      <div className="timeline" ref={ref}>
        <div className="timeline-rail" aria-hidden="true">
          <motion.span style={{ scaleY }} />
        </div>
        {EXPERIENCE.map((item, i) => (
          <motion.article
            key={item.company}
            className="timeline-item"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: EASE }}
          >
            <span className={`timeline-dot${item.active ? " is-active" : ""}`} aria-hidden="true" />
            <div className="timeline-card">
              <div className="timeline-top">
                <h3>
                  {item.role} <span>@ {item.company}</span>
                </h3>
                <span className="timeline-period">{item.period}</span>
              </div>
              <p>{item.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
