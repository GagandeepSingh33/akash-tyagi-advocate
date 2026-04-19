"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X, Scale } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { label: "Home",           href: "#home" },
  { label: "About",          href: "#about" },
  { label: "Practice Areas", href: "#practice" },
  { label: "Courts",         href: "#courts" },
  { label: "Articles",       href: "#articles" },
  { label: "FAQ",            href: "#faq" },
  { label: "Contact",        href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Scrollspy: track which section is in view
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Shadow on scroll
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setMobileOpen(false);
      const target = document.querySelector(href);
      if (target) {
        const offset = 72; // navbar height
        const top = (target as HTMLElement).getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    },
    []
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled
          ? "nav-blur border-b shadow-sm"
          : "bg-transparent"
      }`}
      style={{
        borderColor: isScrolled ? "var(--border)" : "transparent",
        boxShadow: isScrolled ? "0 1px 20px var(--shadow-color)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-3 group focus-gold rounded-lg"
            aria-label="Akash Tyagi Advocate - Home"
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
              style={{ background: "linear-gradient(135deg, #C9A84C, #e8c96a)" }}
            >
              <Scale size={18} className="text-navy-950" strokeWidth={2.2} />
            </div>
            <div className="leading-tight">
              <span
                className="block font-display font-700 text-[1.05rem] tracking-tight"
                style={{ color: "var(--text-primary)" }}
              >
                Akash Tyagi
              </span>
              <span
                className="block font-body text-[0.65rem] uppercase tracking-[0.18em] font-500"
                style={{ color: "var(--gold)" }}
              >
                Advocate
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-500 transition-all duration-250 focus-gold ${
                    isActive
                      ? "font-600"
                      : "hover:opacity-90"
                  }`}
                  style={{
                    color: isActive ? "var(--gold)" : "var(--text-secondary)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                      style={{ background: "var(--gold)" }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            {/* CTA Button - Desktop */}
            <a
              href="tel:+918571090070"
              className="hidden lg:inline-flex items-center gap-2 btn-gold text-xs px-5 py-2.5"
              aria-label="Call Akash Tyagi"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.61-.61a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
              </svg>
              Call Now
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="lg:hidden p-2 rounded-lg transition-base focus-gold"
              style={{ color: "var(--text-primary)" }}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden mobile-menu ${mobileOpen ? "open" : ""}`}
        aria-hidden={!mobileOpen}
      >
        <div
          className="nav-blur border-t px-5 py-5 space-y-1"
          style={{ borderColor: "var(--border)" }}
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-500 transition-base ${
                  isActive ? "font-600" : ""
                }`}
                style={{
                  color: isActive ? "var(--gold)" : "var(--text-secondary)",
                  background: isActive ? "var(--gold-pale)" : "transparent",
                }}
              >
                {isActive && (
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: "var(--gold)" }}
                  />
                )}
                {link.label}
              </a>
            );
          })}
          <div className="pt-3 flex gap-3">
            <a href="tel:+918571090070" className="btn-gold flex-1 text-xs py-3">
              📞 Call Now
            </a>
            <a
              href="https://wa.me/918571090070"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex-1 text-xs py-3"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
