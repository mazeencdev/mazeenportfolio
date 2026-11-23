"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, type Project } from "@/data/portfolio";
import Reveal, { EASE } from "./Reveal";

const HUES = [200, 186, 214];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [5, -5]), { stiffness: 160, damping: 18 });
  const ry = useSpring(useTransform(mx, [0, 1], [-7, 7]), { stiffness: 160, damping: 18 });
  const host = project.url ? project.url.replace(/^https?:\/\//, "").replace(/\/$/, "") : project.title;

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    mx.set(x);
    my.set(y);
    e.currentTarget.style.setProperty("--mx", `${x * 100}%`);
    e.currentTarget.style.setProperty("--my", `${y * 100}%`);
  };

  return (
    <motion.a
      href={project.url || undefined}
      target={project.url ? "_blank" : undefined}
      rel={project.url ? "noreferrer" : undefined}
      className={`project-card${project.url ? " has-link" : ""}${index === 0 ? " is-featured" : ""}`}
      style={{ "--hue": HUES[index % HUES.length] } as React.CSSProperties}
      onMouseMove={onMove}
      onMouseLeave={() => {
        mx.set(0.5);
        my.set(0.5);
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay: index * 0.08, ease: EASE }}
    >
      <div className="project-info">
        <div className="project-meta">
          <span>0{index + 1}</span>
          <span>{project.year}</span>
        </div>
        <h3>{project.title}</h3>
        <p className="project-label">{project.label}</p>
        <p className="project-desc">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className={tag === "w.i.p." ? "tag tag-wip" : "tag"}>
              {tag}
            </span>
          ))}
        </div>
        {project.url && (
          <span className="project-link">
            Visit live site <ArrowUpRight size={15} />
          </span>
        )}
      </div>

      <div className="project-stage" aria-hidden="true">
        <motion.div className="project-window" style={{ rotateX: rx, rotateY: ry }}>
          <div className="mini-bar">
            <i />
            <i />
            <i />
            <span>{host}</span>
          </div>
          <div className="window-body">
            <div className="window-nav">
              <b>{project.title}</b>
              <span />
              <span />
              <span />
            </div>
            <span className="window-hero" />
            <span className="window-line" />
            <span className="window-line short" />
            <div className="window-grid">
              <span />
              <span />
              <span />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.a>
  );
}

export default function Work() {
  return (
    <section id="work" className="section page-width">
      <div className="section-heading">
        <Reveal>
          <p className="eyebrow">Shipped</p>
          <h2>
            Things I&apos;ve built <em>and shipped.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="section-note">Real tools for dealerships, small businesses and students, built end to end, from the database to the last hover state.</p>
        </Reveal>
      </div>
      <div className="project-grid">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
