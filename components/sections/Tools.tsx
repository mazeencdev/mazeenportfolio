import { TOOLS } from "@/data/portfolio";

export default function Tools() {
  return (
    <section className="max-w-2xl mx-auto px-6 py-5">
      <div className="section-header">
        <span className="section-icon">🛠️</span>
        <span className="section-label">tools i&apos;ve used</span>
      </div>

      <div className="flex flex-wrap gap-2">
        {TOOLS.map((tool) => (
          <span
            key={tool}
            className="tag"
            style={{ fontSize: "12px", padding: "4px 12px" }}
          >
            {tool}
          </span>
        ))}
      </div>
    </section>
  );
}
