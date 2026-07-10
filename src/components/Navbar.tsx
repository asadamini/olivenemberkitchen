import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "../data/menu";
import { Logo } from "./Logo";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
        <div className="container header-inner">
          <Logo light={!isScrolled} />
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <a className="button button-primary desktop-cta" href="#quote">
            Order Catering
          </a>
          <button className="icon-button mobile-menu-button" type="button" onClick={() => setIsOpen((open) => !open)} aria-expanded={isOpen} aria-label="Toggle navigation">
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {isOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
                {link.label}
              </a>
            ))}
            <a className="button button-primary" href="#quote" onClick={() => setIsOpen(false)}>
              Order Catering
            </a>
          </nav>
        )}
      </header>
      <div className="mobile-bottom-cta" aria-label="Mobile quick actions">
        <a href="#quote">Order Catering</a>
        <a href="#quote">Request Quote</a>
      </div>
    </>
  );
}
