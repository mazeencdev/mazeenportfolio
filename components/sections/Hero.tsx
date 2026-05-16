import { HERO } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="max-w-2xl mx-auto px-6 pt-14 pb-16">
      <p
        className="text-base leading-relaxed mb-4"
        style={{ color: "var(--text)" }}
      >
        {HERO.bio}
      </p>
      <p
        className="text-base leading-relaxed mb-6"
        style={{ color: "var(--muted)" }}
      >
        {HERO.bio2}
      </p>
      <div
        className="flex items-center gap-2 text-sm"
        style={{ color: "var(--muted)" }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
          style={{ background: "var(--red)" }}
        />
        currently working on{" "}
        <a href="#" className="link-underline" style={{ color: "var(--text)" }}>
          {HERO.currentRole}
        </a>
      </div>
    </section>
  );
}
