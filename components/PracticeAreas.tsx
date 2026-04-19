"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Heart, FileText, Shield, Building2, Banknote, ArrowRight } from "lucide-react";

const AREAS = [
  {
    icon: Heart,
    title: "Matrimonial Law",
    tag: "Primary",
    tagColor: "#C9A84C",
    desc: "Comprehensive legal support in all matrimonial disputes — from divorce and judicial separation to maintenance, child custody, and matrimonial property rights. Advocates sensitively across both contested and mutually agreed proceedings.",
    points: [
      "Divorce & Judicial Separation",
      "Child Custody & Guardianship",
      "Maintenance & Alimony",
      "Domestic Violence (PWDVA)",
      "Restitution of Conjugal Rights",
      "Matrimonial Property Disputes",
    ],
    iconBg: "rgba(239,68,68,0.1)",
    iconColor: "#ef4444",
  },
  {
    icon: Banknote,
    title: "Section 138 / NI Act",
    tag: "Primary",
    tagColor: "#C9A84C",
    desc: "Specialised representation in cheque dishonour cases under Section 138 of the Negotiable Instruments Act. From issuing the mandatory legal notice within 30 days to conducting trial and securing conviction or settlement.",
    points: [
      "Cheque Bounce Complaints",
      "Legal Notice (30-day)",
      "Complaint Filing & Trial",
      "Conviction & Compensation",
      "Defence in NI Act Cases",
      "Recovery & Negotiated Settlement",
    ],
    iconBg: "rgba(99,102,241,0.1)",
    iconColor: "#6366f1",
  },
  {
    icon: Shield,
    title: "Criminal Law",
    tag: "Primary",
    tagColor: "#C9A84C",
    desc: "Robust defence and prosecution in criminal matters ranging from bail applications to trials. Committed to upholding rights at every stage of the criminal justice process — from FIR to final verdict.",
    points: [
      "Bail & Anticipatory Bail",
      "Criminal Defence & Trial",
      "FIR Quashing (Section 482)",
      "Fraud & Financial Offences",
      "Cyber Crime & IPC Offences",
      "Appeals & Revisions",
    ],
    iconBg: "rgba(245,158,11,0.1)",
    iconColor: "#f59e0b",
  },
  {
    icon: Building2,
    title: "Tribunals & Forums",
    tag: "Secondary",
    tagColor: "#6B7280",
    desc: "Representation before specialised adjudicatory bodies including Consumer Forums, Labour Courts, Revenue Tribunals, and administrative authorities across Delhi and Haryana.",
    points: [
      "Consumer Disputes (DCDRC)",
      "Labour & Employment Matters",
      "Revenue & Tenancy Tribunals",
      "Rent Controller",
      "Motor Accident Claims (MACT)",
      "National Commission Matters",
    ],
    iconBg: "rgba(16,185,129,0.1)",
    iconColor: "#10b981",
  },
  {
    icon: FileText,
    title: "Civil Law",
    tag: "Primary",
    tagColor: "#C9A84C",
    desc: "End-to-end representation in civil disputes including property matters, contractual disagreements, injunctions, and recovery suits. Experienced in both trial court proceedings and appellate matters.",
    points: [
      "Property & Title Disputes",
      "Contractual Disputes & Recovery",
      "Injunctions & Stay Orders",
      "Declaratory Suits",
      "Rent & Eviction Proceedings",
      "Execution of Decrees",
    ],
    iconBg: "rgba(59,130,246,0.1)",
    iconColor: "#3b82f6",
  },
];

export default function PracticeAreas() {
  const ref = useScrollReveal(0.05) as React.RefObject<HTMLDivElement>;

  return (
    <div ref={ref} className="section-pad" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="section-label">
            <span className="w-8 h-px" style={{ background: "var(--gold)" }} />
            Legal Expertise
            <span className="w-8 h-px" style={{ background: "var(--gold)" }} />
          </span>
          <h2
            className="font-display font-700 text-3xl sm:text-4xl lg:text-5xl mt-4 mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Practice Areas
          </h2>
          <p
            className="font-body text-base max-w-xl mx-auto"
            style={{ color: "var(--text-muted)" }}
          >
            Specialised representation across civil, criminal, matrimonial and NI Act
            matters — with deep knowledge of Delhi and Haryana legal procedure.
          </p>
        </div>

        {/* Cards grid — 2 cols; last card centred when alone */}
        <div className="grid md:grid-cols-2 gap-6 xl:gap-8">
          {AREAS.map((area, i) => {
            const isLast = i === AREAS.length - 1;
            return (
              <div
                key={area.title}
                className={`reveal reveal-delay-${(i % 4) + 1} premium-card rounded-3xl p-8 group relative overflow-hidden${
                  isLast ? " md:col-span-2 md:max-w-[calc(50%-1rem)] md:mx-auto w-full" : ""
                }`}
              >
                {/* Coloured top bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
                  style={{
                    background: `linear-gradient(90deg, ${area.iconColor}60, ${area.iconColor}20)`,
                  }}
                />

                {/* Card header */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-base group-hover:scale-110"
                      style={{ background: area.iconBg }}
                    >
                      <area.icon size={22} style={{ color: area.iconColor }} />
                    </div>
                    <div>
                      <h3
                        className="font-display font-700 text-lg"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {area.title}
                      </h3>
                      <span
                        className="font-body text-[10px] uppercase tracking-widest font-600 px-2 py-0.5 rounded-full"
                        style={{
                          color: area.tagColor,
                          background:
                            area.tagColor === "#C9A84C"
                              ? "rgba(201,168,76,0.1)"
                              : "rgba(107,114,128,0.1)",
                        }}
                      >
                        {area.tag}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p
                  className="font-body text-sm leading-relaxed mb-5"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {area.desc}
                </p>

                {/* Points */}
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6">
                  {area.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2">
                      <span
                        className="w-1 h-1 rounded-full flex-shrink-0"
                        style={{ background: area.iconColor }}
                      />
                      <span
                        className="font-body text-xs"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {pt}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="https://wa.me/918571090070?text=Hello%2C%20I%20need%20help%20with%20a%20legal%20matter."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body text-sm font-500 transition-base group-hover:gap-3"
                  style={{ color: area.iconColor }}
                >
                  Get a Consultation
                  <ArrowRight size={14} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
