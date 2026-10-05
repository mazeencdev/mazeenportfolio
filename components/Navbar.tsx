import { Download, Menu } from "lucide-react";

export default function Navbar() {
  const links = [
    { label: "Work", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "About", href: "#about" },
  ];

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary navigation">
        <a href="#top" className="wordmark" aria-label="Mazeen Chawdhury, home">
          <span className="wordmark-mark">M</span><span>Mazeen.</span>
        </a>
        <div className="nav-links">
          {links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </div>
        <a className="nav-resume" href="/MCResume.pdf" target="_blank" rel="noreferrer"><Download size={14} strokeWidth={1.8} /><span>Résumé</span></a>
        <a className="nav-menu" href="#work" aria-label="Jump to work"><Menu size={19} /></a>
      </nav>
    </header>
  );
}
