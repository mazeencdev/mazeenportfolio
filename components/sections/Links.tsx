import { SOCIAL_LINKS } from "@/data/portfolio";

export default function Links() {
  return (
    <section className="max-w-2xl mx-auto px-6 py-10 pb-20">
      <div className="section-header">
        <span className="section-icon">🔗</span>
        <span className="section-label">find me here</span>
      </div>

      <div className="flex flex-wrap gap-x-6 gap-y-3">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target={link.url.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="link-underline text-sm"
            style={{ color: "var(--muted)" }}
          >
            {link.label}
          </a>
        ))}
      </div>

      <p className="text-xs mt-14" style={{ color: "var(--subtle)" }}>
        © 2026 mazeen · built with next.js
      </p>
    </section>
  );
}
