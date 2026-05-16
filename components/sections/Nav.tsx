import { HERO } from "@/data/portfolio";

export default function Nav() {
  return (
    <header className="max-w-2xl mx-auto px-6 pt-12 pb-2 flex items-start justify-between">
      <div>
        <h1
          className="text-xl font-semibold tracking-tight"
          style={{ color: "var(--text)" }}
        >
          {HERO.name}
        </h1>
        <div className="flex items-center gap-3 mt-1">
          <span className="text-sm" style={{ color: "var(--muted)" }}>
            {HERO.location}
          </span>
          <span style={{ color: "var(--border-2)" }}>·</span>
          <span className="text-sm" style={{ color: "var(--muted)" }}>
            {HERO.role}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-1">
        <span className="status-dot bg-[#24ff7b]" />
        <span className="text-xs" style={{ color: "var(--muted)" }}>
          available
        </span>
      </div>
    </header>
  );
}
