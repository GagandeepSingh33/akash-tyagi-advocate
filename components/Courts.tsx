"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Landmark, Scale, Gavel, Building, LayoutGrid } from "lucide-react";

const COURTS = [
  {
    icon: LayoutGrid,
    name: "Delhi District Courts",
    detail: "All District & Sessions Courts",
    sub: "Rohini · Tis Hazari · Karkardooma · Saket · Dwarka · Patiala House",
    featured: true,
  },
  {
    icon: Landmark,
    name: "Delhi High Court",
    detail: "High Court of Delhi",
    sub: "Sher Shah Road, New Delhi",
    featured: true,
  },
  {
    icon: Landmark,
    name: "Punjab & Haryana HC",
    detail: "High Court of P&H",
    sub: "Chandigarh — Full Bench & Division Bench",
    featured: true,
  },
  {
    icon: Building,
    name: "Haryana District Courts",
    detail: "All District Courts — Haryana",
    sub: "Gurugram · Faridabad · Sonipat · Panipat",
    featured: false,
  },
  {
    icon: Scale,
    name: "Consumer Commissions",
    detail: "District & State CDRCs",
    sub: "Delhi · Haryana — Consumer Disputes",
    featured: false,
  },
  {
    icon: Gavel,
    name: "Tribunals & Forums",
    detail: "Specialised Adjudicatory Bodies",
    sub: "MACT · Labour Court · Rent Controller · Revenue",
    featured: false,
  },
];

export default function Courts() {
  const ref = useScrollReveal(0.05) as React.RefObject<HTMLDivElement>;

  return (
    <div ref={ref} className="section-pad" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="section-label">
            <span className="w-8 h-px" style={{ background: "var(--gold)" }} />
            Jurisdiction
            <span className="w-8 h-px" style={{ background: "var(--gold)" }} />
          </span>
          <h2
            className="font-display font-700 text-3xl sm:text-4xl lg:text-5xl mt-4 mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Courts &amp; Forums
          </h2>
          <p
            className="font-body text-base max-w-xl mx-auto"
            style={{ color: "var(--text-muted)" }}
          >
            Practising across the full hierarchy of courts and quasi-judicial
            bodies in Delhi and Haryana — from the district level to the High
            Court.
          </p>
        </div>

        {/* Courts grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {COURTS.map((court, i) => (
            <div
              key={court.name}
              className={`reveal reveal-delay-${(i % 3) + 1} premium-card rounded-2xl p-6 relative overflow-hidden group`}
            >
              {court.featured && (
                <div
                  className="absolute top-4 right-4 text-[9px] font-body font-700 uppercase tracking-widest px-2 py-0.5 rounded-full"
                  style={{
                    background: "rgba(201,168,76,0.12)",
                    color: "var(--gold)",
                    border: "1px solid rgba(201,168,76,0.2)",
                  }}
                >
                  Primary
                </div>
              )}

              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-base group-hover:scale-110"
                style={{ background: "var(--gold-pale)" }}
              >
                <court.icon size={20} style={{ color: "var(--gold)" }} />
              </div>

              <h3
                className="font-display font-700 text-base mb-1"
                style={{ color: "var(--text-primary)" }}
              >
                {court.name}
              </h3>
              <p
                className="font-body text-sm font-500 mb-2"
                style={{ color: "var(--gold)" }}
              >
                {court.detail}
              </p>
              <p
                className="font-body text-xs leading-relaxed"
                style={{ color: "var(--text-muted)" }}
              >
                {court.sub}
              </p>

              {/* Bottom accent on hover */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl"
                style={{ background: "linear-gradient(90deg, var(--gold), transparent)" }}
              />
            </div>
          ))}
        </div>

        {/* Appointment modes */}
        <div
          className="mt-12 reveal rounded-3xl p-8 sm:p-10"
          style={{
            background: "var(--bg-tertiary)",
            border: "1px solid var(--card-border)",
          }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3
                className="font-display font-700 text-xl sm:text-2xl mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                Book an Appointment
              </h3>
              <p className="font-body text-sm" style={{ color: "var(--text-muted)" }}>
                Consultations available via phone, WhatsApp, or walk-in at chamber.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a href="tel:+918571090070" className="btn-gold">
                📞 Call Now
              </a>
              <a
                href="https://wa.me/918571090070"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
