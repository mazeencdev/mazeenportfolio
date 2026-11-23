"use client";

import { ArrowUpRight } from "lucide-react";
import { SOCIAL_LINKS } from "@/data/portfolio";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <>
      <section id="contact" className="contact page-width">
        <div className="contact-card">
          <div className="contact-glow" aria-hidden="true" />
          <Reveal>
            <p className="eyebrow">Let&apos;s make something</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2>
              Have an idea worth <em>shipping?</em>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <a className="email-link" href="mailto:mazeencdev@gmail.com">
              mazeencdev@gmail.com <ArrowUpRight size={22} strokeWidth={1.6} />
            </a>
          </Reveal>
        </div>
      </section>
      <footer className="page-width site-footer">
        <p>© {new Date().getFullYear()} Mazeen Chawdhury · New York City</p>
        <div>
          {SOCIAL_LINKS.map((link) => (
            <a key={link.label} href={link.url} target={link.url.startsWith("mailto") ? undefined : "_blank"} rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </footer>
    </>
  );
}
