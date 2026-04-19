"use client";

import { useState, useEffect, useCallback } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Ramesh Kumar",
    location: "Rohini, Delhi",
    matter: "Matrimonial Case",
    rating: 5,
    text: "Akash ji handled my divorce case with great sensitivity and professionalism. He explained every step clearly and was always available on WhatsApp whenever I had questions. The case concluded favourably and much faster than I had expected. Highly recommend.",
    initials: "RK",
    color: "#ef4444",
  },
  {
    name: "Deepak Verma",
    location: "Pitampura, Delhi",
    matter: "Section 138 NI Act",
    rating: 5,
    text: "I had given a loan to a business associate who issued a cheque that bounced. I was unsure whether to pursue legal action but Akash ji explained the entire Section 138 process clearly. He sent the legal notice within the deadline, filed the complaint, and secured a conviction with full recovery. Truly professional and result-oriented.",
    initials: "DV",
    color: "#6366f1",
  },
  {
    name: "Vikram Singh",
    location: "Sonipat, Haryana",
    matter: "Criminal Defence",
    rating: 5,
    text: "When my family faced a false FIR, we were panicked. Akash ji guided us calmly, filed the anticipatory bail application promptly, and the bail was granted. His knowledge of criminal procedure and his calm demeanour gave us confidence throughout a very stressful time.",
    initials: "VS",
    color: "#f59e0b",
  },
  {
    name: "Priya Mehta",
    location: "North Delhi",
    matter: "Consumer Complaint",
    rating: 5,
    text: "I had a dispute with a builder who had taken my money but not delivered possession as promised. Akash ji filed a consumer complaint before the DCDRC and helped me recover the amount with interest. The process was smooth and he kept me informed at every stage.",
    initials: "PM",
    color: "#10b981",
  },
  {
    name: "Anil Nagar",
    location: "Dwarka, Delhi",
    matter: "Section 138 / Cheque Bounce",
    rating: 5,
    text: "Excellent legal representation in a cheque dishonour case. Akash Tyagi was thorough in preparing the complaint and cross-examination. The case was decided in our favour with the full cheque amount awarded as compensation. Would certainly engage him again for any future legal needs.",
    initials: "AN",
    color: "#8b5cf6",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} fill="#C9A84C" color="#C9A84C" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useScrollReveal(0.05) as React.RefObject<HTMLDivElement>;
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrent((index + TESTIMONIALS.length) % TESTIMONIALS.length);
      setTimeout(() => setIsAnimating(false), 400);
    },
    [isAnimating]
  );

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => goTo(current + 1), 6000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  const t = TESTIMONIALS[current];

  return (
    <div ref={ref} className="section-pad" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="section-label">
            <span className="w-8 h-px" style={{ background: "var(--gold)" }} />
            Client Stories
            <span className="w-8 h-px" style={{ background: "var(--gold)" }} />
          </span>
          <h2
            className="font-display font-700 text-3xl sm:text-4xl lg:text-5xl mt-4"
            style={{ color: "var(--text-primary)" }}
          >
            What Clients Say
          </h2>
        </div>

        {/* Testimonial card */}
        <div className="reveal reveal-delay-1">
          <div
            className="rounded-4xl p-8 sm:p-12 relative overflow-hidden"
            style={{
              background: "var(--bg-secondary)",
              border: "1px solid var(--card-border)",
              boxShadow: "0 8px 40px var(--shadow-color)",
            }}
          >
            {/* Background quote mark */}
            <div
              className="absolute top-6 right-8 opacity-[0.04]"
              style={{ fontSize: "160px", fontFamily: "Georgia", color: "var(--gold)", lineHeight: 1 }}
            >
              "
            </div>

            {/* Gold accent line */}
            <div
              className="absolute top-0 left-12 right-12 h-0.5 rounded-b-full"
              style={{ background: "linear-gradient(90deg, transparent, var(--gold), transparent)" }}
            />

            <div className="relative z-10">
              {/* Quote icon */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: "var(--gold-pale)" }}
              >
                <Quote size={22} style={{ color: "var(--gold)" }} />
              </div>

              {/* Text */}
              <blockquote
                className="font-display italic text-xl sm:text-2xl leading-relaxed mb-8"
                style={{ color: "var(--text-primary)" }}
              >
                "{t.text}"
              </blockquote>

              {/* Author row */}
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-display font-700 text-lg text-white flex-shrink-0"
                    style={{ background: t.color }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p
                      className="font-body font-600 text-sm"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {t.name}
                    </p>
                    <p
                      className="font-body text-xs mt-0.5"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {t.location}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-1">
                  <Stars count={t.rating} />
                  <span
                    className="font-body text-[10px] uppercase tracking-widest"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {t.matter}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="transition-all duration-300 rounded-full focus-gold"
                  style={{
                    width: i === current ? "2rem" : "0.5rem",
                    height: "0.5rem",
                    background: i === current ? "var(--gold)" : "var(--border)",
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={() => goTo(current - 1)}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-base focus-gold"
                style={{
                  border: "1.5px solid var(--border)",
                  color: "var(--text-secondary)",
                  background: "var(--card-bg)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--gold)";
                  (e.currentTarget as HTMLButtonElement).style.color = "var(--gold)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLButtonElement).style.color = "var(--text-secondary)";
                }}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => goTo(current + 1)}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-base focus-gold"
                style={{
                  border: "1.5px solid var(--border)",
                  color: "var(--text-secondary)",
                  background: "var(--card-bg)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--gold)";
                  (e.currentTarget as HTMLButtonElement).style.color = "var(--gold)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLButtonElement).style.color = "var(--text-secondary)";
                }}
                aria-label="Next testimonial"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
