"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Phone, MessageCircle, Calendar, ChevronDown, Star, Award, Users } from "lucide-react";

// ─── Stats data ──────────────────────────────────────────────
const STATS = [
  { icon: Award,  value: "6+",   label: "Years of Practice" },
  { icon: Users,  value: "500+", label: "Clients Served"   },
  { icon: Star,   value: "3",    label: "Practice Areas"   },
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  // Subtle parallax on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const orbs = heroRef.current.querySelectorAll<HTMLElement>(".orb");
      orbs.forEach((orb, i) => {
        const speed = i % 2 === 0 ? 0.15 : 0.1;
        orb.style.transform = `translateY(${scrollY * speed}px)`;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-[72px]"
    >
      {/* ── Ambient gradient orbs ── */}
      <div
        className="orb w-[600px] h-[600px] -left-40 top-10 opacity-25"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.35) 0%, transparent 70%)" }}
      />
      <div
        className="orb w-[500px] h-[500px] right-0 top-32 opacity-20"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.25) 0%, transparent 70%)" }}
      />
      <div
        className="orb w-[300px] h-[300px] left-1/3 bottom-20 opacity-10"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.4) 0%, transparent 70%)" }}
      />

      {/* ── Fine grid pattern overlay ── */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--gold) 1px, transparent 1px), linear-gradient(90deg, var(--gold) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 w-full py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* ── Left: Text content ── */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-body font-600 uppercase tracking-widest mb-8"
              style={{
                border: "1px solid rgba(201,168,76,0.35)",
                background: "rgba(201,168,76,0.06)",
                color: "var(--gold)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Bar Council of Delhi · Enrolment No. D/XXXX/20XX
            </div>

            {/* Headline */}
            <h1 className="font-display font-700 leading-[1.1] mb-6">
              <span
                className="block text-4xl sm:text-5xl xl:text-6xl"
                style={{ color: "var(--text-primary)" }}
              >
                Trusted Legal
              </span>
              <span
                className="block text-4xl sm:text-5xl xl:text-6xl text-gold-shimmer"
              >
                Counsel
              </span>
              <span
                className="block text-4xl sm:text-5xl xl:text-6xl"
                style={{ color: "var(--text-primary)" }}
              >
                in Delhi
              </span>
            </h1>

            {/* Subheading */}
            <p
              className="font-body text-lg leading-relaxed mb-3 max-w-lg mx-auto lg:mx-0"
              style={{ color: "var(--text-secondary)" }}
            >
              <strong className="font-600" style={{ color: "var(--text-primary)" }}>
                Akash Tyagi
              </strong>{" "}
              — Advocate & Legal Consultant at the{" "}
              <em className="not-italic font-500" style={{ color: "var(--gold)" }}>
                Rohini District Courts
              </em>
              , specialising in Matrimonial, Civil &amp; Criminal matters across Delhi
              and Haryana.
            </p>

            <p
              className="font-body text-sm italic mb-10 max-w-lg mx-auto lg:mx-0"
              style={{ color: "var(--text-muted)" }}
            >
              "Every case is a person's story — and every story deserves its best outcome."
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-12">
              <a
                href="tel:+918571090070"
                className="btn-gold"
                aria-label="Call Akash Tyagi at 8571090070"
              >
                <Phone size={16} strokeWidth={2.2} />
                Call: 8571090070
              </a>
              <a
                href="https://wa.me/918571090070?text=Hello%20Akash%20ji%2C%20I%20need%20legal%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                aria-label="WhatsApp Akash Tyagi"
              >
                <MessageCircle size={16} strokeWidth={2.2} />
                WhatsApp Chat
              </a>
              <button
                onClick={scrollToContact}
                className="btn-ghost"
                aria-label="Book consultation"
              >
                <Calendar size={16} strokeWidth={2.2} />
                Book Consultation
              </button>
            </div>

            {/* Stats row */}
            <div className="flex gap-8 justify-center lg:justify-start">
              {STATS.map(({ icon: Icon, value, label }) => (
                <div key={label} className="text-center lg:text-left">
                  <div
                    className="font-display font-700 text-2xl sm:text-3xl"
                    style={{ color: "var(--gold)" }}
                  >
                    {value}
                  </div>
                  <div
                    className="font-body text-xs mt-0.5"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Premium Portrait ── */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Outer glow ring */}
              <div
                className="absolute -inset-6 rounded-[2.5rem] opacity-30"
                style={{
                  background: "radial-gradient(circle, rgba(201,168,76,0.4) 0%, transparent 70%)",
                  animation: "glowPulse 4s ease-in-out infinite",
                }}
              />

              {/* Floating card container */}
              <div
                className="portrait-float relative w-[280px] sm:w-[340px] lg:w-[400px]"
              >
                {/* Gold border frame — slightly offset */}
                <div
                  className="absolute -top-3 -right-3 w-full h-full rounded-[2.25rem] z-0"
                  style={{
                    border: "2px solid rgba(201,168,76,0.4)",
                    borderRadius: "2.25rem",
                  }}
                />
                <div
                  className="absolute -bottom-3 -left-3 w-full h-full rounded-[2.25rem] z-0"
                  style={{
                    border: "1px solid rgba(201,168,76,0.2)",
                    borderRadius: "2.25rem",
                  }}
                />

                {/* Main portrait card */}
                <div
                  className="relative z-10 overflow-hidden rounded-[2rem] group cursor-pointer"
                  style={{
                    boxShadow: "0 30px 70px rgba(0,0,0,0.3), 0 10px 30px rgba(0,0,0,0.2), 0 0 0 1px rgba(201,168,76,0.25)",
                  }}
                >
                  {/* Image placeholder / actual image */}
                  <div className="relative w-full aspect-[3/4] overflow-hidden">
                    {/* Placeholder gradient (replace with actual lawyer photo) */}
                    <div
                      className="w-full h-full flex flex-col items-center justify-center gap-4"
                      style={{
                        background: "linear-gradient(160deg, #1a2236 0%, #0A0F1E 60%, #1a1500 100%)",
                      }}
                    >
                      {/* Silhouette placeholder */}
                      <div className="relative">
                        <div
                          className="w-28 h-28 rounded-full flex items-center justify-center"
                          style={{
                            background: "rgba(201,168,76,0.12)",
                            border: "2px solid rgba(201,168,76,0.25)",
                          }}
                        >
                          <svg width="56" height="56" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="8" r="4" fill="rgba(201,168,76,0.5)" />
                            <path
                              d="M4 20c0-4 3.582-7 8-7s8 3 8 7"
                              stroke="rgba(201,168,76,0.5)"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="text-center px-6">
                        <p
                          className="font-body text-xs tracking-widest uppercase mb-1"
                          style={{ color: "rgba(201,168,76,0.5)" }}
                        >
                          Photo Placeholder
                        </p>
                        <p
                          className="font-body text-xs"
                          style={{ color: "rgba(255,255,255,0.3)" }}
                        >
                          Replace with advocate photo
                        </p>
                        <p
                          className="font-body text-xs mt-1"
                          style={{ color: "rgba(255,255,255,0.2)" }}
                        >
                          /public/lawyer.jpg
                        </p>
                      </div>
                    </div>

                    {/* Uncomment below and comment out the placeholder div above once you add your photo */}
                    {
                    <Image
                      src="/lawyer.jpg"
                      alt="Advocate Akash Tyagi – Legal Consultant, Delhi"
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      priority
                      sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 400px"
                      quality={90}
                    />
                    }

                    {/* Gradient overlay at bottom */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-2/5"
                      style={{
                        background: "linear-gradient(to top, rgba(10,15,30,0.9) 0%, transparent 100%)",
                      }}
                    />
                  </div>

                  {/* Name card overlay at bottom */}
                  <div
                    className="absolute bottom-0 left-0 right-0 p-6"
                  >
                    <div
                      className="rounded-2xl p-4"
                      style={{
                        background: "rgba(10,15,30,0.7)",
                        backdropFilter: "blur(20px)",
                        border: "1px solid rgba(201,168,76,0.2)",
                      }}
                    >
                      <p
                        className="font-display font-700 text-xl text-white tracking-tight"
                      >
                        Akash Tyagi
                      </p>
                      <p
                        className="font-body text-xs mt-0.5 font-500"
                        style={{ color: "var(--gold)" }}
                      >
                        Advocate · Bar Council of Delhi
                      </p>
                      <div className="flex items-center gap-1.5 mt-2">
                        {[1,2,3,4,5].map(i => (
                          <Star key={i} size={10} fill="#C9A84C" color="#C9A84C" />
                        ))}
                        <span
                          className="font-body text-[10px] ml-1"
                          style={{ color: "rgba(255,255,255,0.5)" }}
                        >
                          Highly Rated
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badge — top left pop-out */}
                <div
                  className="absolute -top-4 -left-4 z-20 px-3.5 py-2 rounded-2xl shadow-gold"
                  style={{
                    background: "linear-gradient(135deg, #C9A84C, #e8c96a)",
                  }}
                >
                  <p className="font-body font-700 text-[11px] text-navy-950 uppercase tracking-wider">
                    6+ Years
                  </p>
                  <p className="font-body font-500 text-[9px] text-navy-950 opacity-80">
                    Experience
                  </p>
                </div>

                {/* Floating badge — bottom right pop-out */}
                <div
                  className="absolute -bottom-5 -right-4 z-20 px-3.5 py-2.5 rounded-2xl"
                  style={{
                    background: "var(--card-bg)",
                    border: "1px solid rgba(201,168,76,0.3)",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
                  }}
                >
                  <p
                    className="font-body font-700 text-[11px] uppercase tracking-wider"
                    style={{ color: "var(--gold)" }}
                  >
                    Delhi HC
                  </p>
                  <p
                    className="font-body font-400 text-[9px]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    P&amp;H HC
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span
          className="font-body text-[11px] uppercase tracking-widest"
          style={{ color: "var(--text-muted)" }}
        >
          Scroll
        </span>
        <ChevronDown
          size={18}
          style={{ color: "var(--gold)" }}
          className="animate-bounce"
        />
      </div>
    </div>
  );
}
