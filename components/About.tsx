"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CheckCircle2, MapPin, Phone, Mail, Clock } from "lucide-react";

const HIGHLIGHTS = [
  "Enrolled with the Bar Council of Delhi",
  "6+ years of active court practice",
  "Practises in Delhi and Haryana jurisdictions",
  "Personal attention to every client and case",
  "Prompt communication — call, WhatsApp, or visit",
  "Rohini District Courts, Delhi HC & P&H HC",
];

export default function About() {
  const ref = useScrollReveal(0.1) as React.RefObject<HTMLDivElement>;

  return (
    <div
      ref={ref}
      className="section-pad relative"
      style={{ background: "var(--bg-secondary)" }}
    >
      {/* Decorative side accent */}
      <div
        className="absolute left-0 top-1/4 bottom-1/4 w-0.5 hidden lg:block"
        style={{ background: "linear-gradient(to bottom, transparent, var(--gold), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="section-label">
            <span className="w-8 h-px" style={{ background: "var(--gold)" }} />
            Who I Am
            <span className="w-8 h-px" style={{ background: "var(--gold)" }} />
          </span>
          <h2
            className="font-display font-700 text-3xl sm:text-4xl lg:text-5xl mt-4"
            style={{ color: "var(--text-primary)" }}
          >
            About the Advocate
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-start">
          {/* Left col — bio text */}
          <div className="lg:col-span-3 space-y-6">
            <div className="reveal reveal-delay-1">
              <div className="gold-line-left">
                <p
                  className="font-display italic text-xl sm:text-2xl leading-relaxed"
                  style={{ color: "var(--text-primary)" }}
                >
                  "I believe the law should be a shield for the ordinary person —
                  not a labyrinth that confounds them."
                </p>
              </div>
            </div>

            <p
              className="font-body text-base leading-relaxed reveal reveal-delay-2"
              style={{ color: "var(--text-secondary)" }}
            >
              Advocate Akash Tyagi is an experienced lawyer enrolled with the{" "}
              <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>
                Bar Council of Delhi
              </strong>
              , with over six years of rigorous court practice. Based out of Chamber
              No. 425 at the Rohini District Courts, he has built a practice
              grounded in diligence, client empathy, and an unrelenting pursuit of
              favourable outcomes.
            </p>

            <p
              className="font-body text-base leading-relaxed reveal reveal-delay-2"
              style={{ color: "var(--text-secondary)" }}
            >
              His work spans three core disciplines —{" "}
              <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>
                Matrimonial, Civil, and Criminal Law
              </strong>{" "}
              — and extends to Tribunals and Consumer Commissions across Delhi and
              Haryana. He regularly appears before the Delhi District Courts, the
              Delhi High Court, and the Punjab &amp; Haryana High Court.
            </p>

            <p
              className="font-body text-base leading-relaxed reveal reveal-delay-3"
              style={{ color: "var(--text-secondary)" }}
            >
              Akash Tyagi is known among clients for his accessibility and
              transparency. He ensures that each client understands the legal
              process and strategy at every stage — because informed clients make
              empowered decisions.
            </p>

            {/* Highlights grid */}
            <div className="grid sm:grid-cols-2 gap-3 pt-4 reveal reveal-delay-3">
              {HIGHLIGHTS.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2
                    size={16}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: "var(--gold)" }}
                  />
                  <span
                    className="font-body text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right col — Contact card */}
          <div className="lg:col-span-2 reveal reveal-delay-4">
            <div
              className="rounded-3xl p-8 space-y-6 sticky top-24"
              style={{
                background: "var(--bg-tertiary)",
                border: "1px solid var(--card-border)",
                boxShadow: "0 4px 30px var(--shadow-color)",
              }}
            >
              <div>
                <h3
                  className="font-display font-600 text-xl mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  Office &amp; Contact
                </h3>
                <div className="gold-divider" />
              </div>

              {/* Address */}
              <div className="flex gap-3.5">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "var(--gold-pale)" }}
                >
                  <MapPin size={16} style={{ color: "var(--gold)" }} />
                </div>
                <div>
                  <p
                    className="font-body font-600 text-sm mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Office Address
                  </p>
                  <p
                    className="font-body text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Ch. No. 425, 4th Floor,
                    <br />
                    Lawyers Chamber Block,
                    <br />
                    Rohini District Courts,
                    <br />
                    Rohini, Delhi – 110085
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-3.5">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "var(--gold-pale)" }}
                >
                  <Phone size={16} style={{ color: "var(--gold)" }} />
                </div>
                <div>
                  <p
                    className="font-body font-600 text-sm mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Phone / WhatsApp
                  </p>
                  <a
                    href="tel:+918571090070"
                    className="font-body text-sm transition-base"
                    style={{ color: "var(--text-secondary)" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color = "var(--gold)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-secondary)")
                    }
                  >
                    +91 85710 90070
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-3.5">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "var(--gold-pale)" }}
                >
                  <Mail size={16} style={{ color: "var(--gold)" }} />
                </div>
                <div>
                  <p
                    className="font-body font-600 text-sm mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Email
                  </p>
                  <a
                    href="mailto:advakashtyagi25@gmail.com"
                    className="font-body text-sm break-all transition-base"
                    style={{ color: "var(--text-secondary)" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color = "var(--gold)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-secondary)")
                    }
                  >
                    advakashtyagi25@gmail.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-3.5">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "var(--gold-pale)" }}
                >
                  <Clock size={16} style={{ color: "var(--gold)" }} />
                </div>
                <div>
                  <p
                    className="font-body font-600 text-sm mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Office Hours
                  </p>
                  <p
                    className="font-body text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Mon – Fri: 10 AM – 6 PM
                    <br />
                    Saturday: 10 AM – 2 PM
                  </p>
                </div>
              </div>

              <div
                className="pt-2 border-t"
                style={{ borderColor: "var(--border)" }}
              >
                <a
                  href="https://wa.me/918571090070?text=Hello%20Akash%20ji%2C%20I%20need%20legal%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full"
                >
                  Book a Free Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
