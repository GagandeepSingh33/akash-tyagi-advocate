"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "How do I book a consultation with Advocate Akash Tyagi?",
    a: "You can book a consultation by calling or WhatsApping at +91 85710 90070, or by filling the contact form on this website. Walk-in appointments at Chamber No. 425, Rohini District Courts are also welcome during office hours (Monday–Friday, 10 AM–6 PM).",
  },
  {
    q: "What is the fee for the first consultation?",
    a: "The initial consultation fee varies depending on the nature and complexity of your matter. Please call or WhatsApp to get a quick estimate before your first appointment. Akash Tyagi believes in transparency — there are no hidden charges.",
  },
  {
    q: "Do you handle cases in Haryana courts as well?",
    a: "Yes. Akash Tyagi regularly appears before all District Courts of Haryana and the Punjab & Haryana High Court in Chandigarh. Clients from Gurugram, Faridabad, Sonipat, Panipat, and surrounding areas are welcome.",
  },
  {
    q: "Can you help with an urgent bail matter?",
    a: "Yes, urgent bail and anticipatory bail matters are handled with priority. Please call immediately at +91 85710 90070 for urgent criminal cases. Time-sensitive matters are treated with the urgency they deserve.",
  },
  {
    q: "How long does a divorce case typically take in Delhi?",
    a: "A mutual consent divorce can be concluded in approximately 6–8 months (with a 6-month cooling-off period that may be waived by the court in appropriate cases). A contested divorce may take significantly longer depending on the issues involved and court docket. Every case is unique and timelines are assessed individually.",
  },
  {
    q: "I have a property dispute in Delhi — how can you help?",
    a: "Property disputes are one of Akash Tyagi's core areas. He can advise on title disputes, adverse possession, illegal occupation, injunctions, partition suits, and builder-buyer disputes. The first step is a detailed consultation to understand your documents and circumstances.",
  },
  {
    q: "Do you offer document review and legal drafting services?",
    a: "Yes. Services include review and drafting of legal notices, agreements, plaints, written statements, affidavits, and petitions. These can be done in person or shared electronically where appropriate.",
  },
  {
    q: "What languages do you communicate in?",
    a: "Consultations are available in Hindi and English. Court documents and pleadings are prepared in the appropriate language as required by the forum.",
  },
];

function FAQItem({
  q,
  a,
  isOpen,
  onToggle,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className="rounded-2xl overflow-hidden transition-base"
      style={{
        border: `1.5px solid ${isOpen ? "rgba(201,168,76,0.35)" : "var(--border)"}`,
        background: isOpen ? "var(--gold-pale)" : "var(--card-bg)",
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 p-6 text-left focus-gold"
        aria-expanded={isOpen}
      >
        <span
          className="font-body font-600 text-base leading-snug"
          style={{ color: "var(--text-primary)" }}
        >
          {q}
        </span>
        <span
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-base mt-0.5"
          style={{
            background: isOpen ? "var(--gold)" : "var(--bg-tertiary)",
            color: isOpen ? "#0A0F1E" : "var(--text-muted)",
          }}
        >
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>
      <div className={`accordion-content ${isOpen ? "open" : ""}`}>
        <p
          className="font-body text-sm leading-relaxed px-6 pb-6"
          style={{ color: "var(--text-secondary)" }}
        >
          {a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const ref = useScrollReveal(0.05) as React.RefObject<HTMLDivElement>;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div ref={ref} className="section-pad" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="section-label">
            <span className="w-8 h-px" style={{ background: "var(--gold)" }} />
            Common Questions
            <span className="w-8 h-px" style={{ background: "var(--gold)" }} />
          </span>
          <h2
            className="font-display font-700 text-3xl sm:text-4xl lg:text-5xl mt-4 mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Frequently Asked Questions
          </h2>
          <p
            className="font-body text-base"
            style={{ color: "var(--text-muted)" }}
          >
            Answers to the questions clients most often ask before their first
            consultation.
          </p>
        </div>

        {/* FAQ list */}
        <div className="space-y-3 reveal reveal-delay-1">
          {FAQS.map((faq, i) => (
            <FAQItem
              key={i}
              q={faq.q}
              a={faq.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        {/* Still have questions */}
        <div
          className="mt-10 rounded-3xl p-8 text-center reveal reveal-delay-2"
          style={{
            background: "var(--bg-tertiary)",
            border: "1px solid var(--card-border)",
          }}
        >
          <p
            className="font-body text-base mb-4"
            style={{ color: "var(--text-secondary)" }}
          >
            Still have a question?{" "}
            <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>
              Reach out directly.
            </span>
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+918571090070" className="btn-gold">
              Call Now
            </a>
            <a
              href="https://wa.me/918571090070?text=I%20have%20a%20legal%20question."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
