import { PROJECTS } from "@/data/portfolio";
import Link from "next/link";

export default function Projects() {
  return (
    <section className="max-w-2xl mx-auto px-6 py-5 space-y-5">
      {/* Creative works */}
      <div className="section-header space-x-2">
        <span className="section-icon">🎬</span>
        <span className="section-label">what i built</span>
      </div>

      <div className="mb-14 space-y-5">
        {PROJECTS.map((project) => (
          <Link
            target="_blank"
            key={project.id}
            href={project.url}
            className="project-card block"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1 flex-wrap">
                  <span
                    className="project-title font-medium text-sm"
                    style={{ color: "var(--text)" }}
                  >
                    {project.title}
                  </span>
                  <span className="text-sm" style={{ color: "var(--muted)" }}>
                    — {project.label}
                  </span>
                </div>
                <p
                  className="text-sm leading-relaxed mb-3"
                  style={{ color: "var(--muted)" }}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2 mt-0.5 flex-shrink-0">
                <span className="text-xs" style={{ color: "var(--muted)" }}>
                  {project.year}
                </span>
                <span className="project-arrow text-sm">→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
