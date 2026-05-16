import { EXPERIENCE } from "@/data/portfolio";
import Link from "next/link";

export default function Experience() {
  return (
    <section className="max-w-2xl mx-auto px-6 py-5 space-y-5">
      <div className="section-header space-x-2">
        <span className="section-icon">💼</span>
        <span className="section-label">what im working on</span>
      </div>

      <div className="space-y-5">
        {EXPERIENCE.map((exp, i) => (
          <div key={i} className="exp-row">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <Link
                    target="_blank"
                    href={exp.url}
                    className="exp-company font-medium text-sm"
                    style={{ color: "var(--text)" }}
                  >
                    {exp.company}
                  </Link>
                  {exp.active && (
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-medium"
                      style={{
                        background: "var(--red-dim)",
                        color: "var(--red)",
                        border: "1px solid rgba(220,38,38,0.2)",
                      }}
                    >
                      now
                    </span>
                  )}
                </div>
                <p className="text-sm mb-1.5" style={{ color: "var(--muted)" }}>
                  {exp.role}
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--subtle)" }}
                >
                  {exp.description}
                </p>
              </div>
              <span
                className="text-xs whitespace-nowrap mt-0.5 flex-shrink-0"
                style={{ color: "var(--muted)" }}
              >
                {exp.period}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
