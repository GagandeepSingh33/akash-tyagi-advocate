"use client";

import { Scale, Phone, MessageCircle, Mail, MapPin, ExternalLink } from "lucide-react";

const QUICK_LINKS = [
  { label: "Home",           href: "#home"       },
  { label: "About",          href: "#about"      },
  { label: "Practice Areas", href: "#practice"   },
  { label: "Courts",         href: "#courts"     },
  { label: "Articles",       href: "#articles"   },
  { label: "FAQ",            href: "#faq"        },
  { label: "Contact",        href: "#contact"    },
];

const PRACTICE_AREAS = [
  "Matrimonial Law",
  "Divorce & Custody",
  "Civil Disputes",
  "Property Matters",
  "Criminal Defence",
  "Bail Applications",
  "Consumer Forum",
  "Tribunals",
];

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const top = (target as HTMLElement).getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <footer
      style={{
        background: "var(--bg-primary)",
        borderTop: "1px solid var(--border)",
      }}
    >
      {/* ── Main footer grid ── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #C9A84C, #e8c96a)" }}
              >
                <Scale size={18} className="text-navy-950" strokeWidth={2.2} />
              </div>
              <div>
                <p className="font-display font-700 text-base" style={{ color: "var(--text-primary)" }}>
                  Akash Tyagi
                </p>
                <p className="font-body text-[10px] uppercase tracking-widest font-500" style={{ color: "var(--gold)" }}>
                  Advocate
                </p>
              </div>
            </div>

            <p className="font-body text-sm leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
              Advocate &amp; Legal Consultant enrolled with the Bar Council of
              Delhi. Practising at Rohini District Courts, Delhi High Court &amp;
              Punjab and Haryana High Court.
            </p>

            <div className="space-y-3">
              <a
                href="tel:+918571090070"
                className="flex items-center gap-2.5 font-body text-sm transition-base group"
                style={{ color: "var(--text-secondary)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                <Phone size={14} style={{ color: "var(--gold)" }} />
                +91 85710 90070
              </a>
              <a
                href="mailto:advakashtyagi25@gmail.com"
                className="flex items-center gap-2.5 font-body text-sm transition-base"
                style={{ color: "var(--text-secondary)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                <Mail size={14} style={{ color: "var(--gold)" }} />
                advakashtyagi25@gmail.com
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" style={{ color: "var(--gold)" }} />
                <p className="font-body text-sm" style={{ color: "var(--text-secondary)" }}>
                  Ch. No. 425, Lawyers Chamber Block,
                  <br />
                  Rohini District Courts, Delhi – 110085
                </p>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-body font-700 text-sm uppercase tracking-widest mb-5" style={{ color: "var(--text-primary)" }}>
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="font-body text-sm transition-base"
                    style={{ color: "var(--text-muted)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice areas */}
          <div>
            <h4 className="font-body font-700 text-sm uppercase tracking-widest mb-5" style={{ color: "var(--text-primary)" }}>
              Practice Areas
            </h4>
            <ul className="space-y-2.5">
              {PRACTICE_AREAS.map((area) => (
                <li key={area}>
                  <a
                    href="#practice"
                    onClick={(e) => handleNavClick(e, "#practice")}
                    className="font-body text-sm transition-base"
                    style={{ color: "var(--text-muted)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                  >
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Book appointment */}
          <div>
            <h4 className="font-body font-700 text-sm uppercase tracking-widest mb-5" style={{ color: "var(--text-primary)" }}>
              Book Appointment
            </h4>
            <p className="font-body text-sm leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
              Appointments available via phone, WhatsApp, or walk-in at the
              chamber during office hours.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+918571090070"
                className="btn-gold w-full text-sm py-3"
              >
                <Phone size={14} />
                Call: 8571090070
              </a>
              <a
                href="https://wa.me/918571090070?text=Hello%20Akash%20ji%2C%20I%20need%20legal%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full text-sm py-3"
              >
                <MessageCircle size={14} />
                WhatsApp Chat
              </a>
            </div>

            {/* Office hours */}
            <div
              className="mt-6 p-4 rounded-2xl"
              style={{ background: "var(--gold-pale)", border: "1px solid rgba(201,168,76,0.2)" }}
            >
              <p className="font-body font-600 text-xs uppercase tracking-wider mb-2" style={{ color: "var(--gold)" }}>
                Office Hours
              </p>
              <p className="font-body text-xs" style={{ color: "var(--text-secondary)" }}>
                Mon – Fri: 10:00 AM – 6:00 PM
              </p>
              <p className="font-body text-xs" style={{ color: "var(--text-secondary)" }}>
                Saturday: 10:00 AM – 2:00 PM
              </p>
              <p className="font-body text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-center sm:text-left" style={{ color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} Akash Tyagi, Advocate. All Rights Reserved.
            <span className="mx-2 opacity-30">|</span>
            Bar Council of Delhi
          </p>

          <div className="flex items-center gap-4">
            <p className="font-body text-[11px]" style={{ color: "var(--text-muted)" }}>
              akashtyagiadvocate.in
            </p>
            <a
              href="https://wa.me/918571090070"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[11px] flex items-center gap-1 transition-base"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              WhatsApp
              <ExternalLink size={10} />
            </a>
          </div>
        </div>

        {/* Legal disclaimer */}
        <div
          className="max-w-7xl mx-auto px-5 sm:px-8 pb-6"
        >
          <p className="font-body text-[10px] leading-relaxed text-center" style={{ color: "rgba(107,114,128,0.6)" }}>
            <strong>Disclaimer:</strong> The information provided on this website is for general informational purposes only and
            does not constitute legal advice. Viewing this website or sending a message does not create an
            advocate-client relationship. For legal advice specific to your situation, please consult directly with Advocate Akash Tyagi.
            Advocate Akash Tyagi is enrolled with the Bar Council of Delhi and practices in accordance with the
            Advocates Act, 1961 and the Bar Council of India Rules.
          </p>
        </div>
      </div>
    </footer>
  );
}
