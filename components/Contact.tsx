"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Send, Phone, MessageCircle, MapPin, CheckCircle, AlertCircle } from "lucide-react";

type FormData = {
  name: string;
  phone: string;
  email: string;
  matter: string;
  court: string;
  message: string;
};

type FormStatus = "idle" | "sending" | "success" | "error";

const MATTER_TYPES = [
  "Matrimonial / Family Law",
  "Civil / Property Dispute",
  "Criminal Defence",
  "Consumer Forum",
  "Tribunal / Commission",
  "General Legal Advice",
  "Other",
];

const COURTS = [
  "Rohini District Court",
  "Delhi High Court",
  "Punjab & Haryana High Court",
  "Haryana District Court",
  "Consumer Forum",
  "Tribunal / Commission",
  "Not Sure / Advise Me",
];

export default function Contact() {
  const ref = useScrollReveal(0.05) as React.RefObject<HTMLDivElement>;
  const [form, setForm] = useState<FormData>({
    name: "", phone: "", email: "", matter: "", court: "", message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const e: Partial<FormData> = {};
    if (!form.name.trim())   e.name    = "Please enter your name.";
    if (!form.phone.trim())  e.phone   = "Please enter your phone number.";
    if (!form.matter)        e.matter  = "Please select your matter type.";
    if (!form.message.trim()) e.message = "Please briefly describe your matter.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");

    // ── Simulate form submission ──
    // Replace this with a real API call, e.g. to Formspree, EmailJS, or your own endpoint.
    //await new Promise((r) => setTimeout(r, 1500));

    // For Formspree, replace the await above with:
     const res = await fetch("https://formspree.io/f/mrerkvbo", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify(form),
     });
     if (!res.ok) { setStatus("error"); return; }

    setStatus("success");
    setForm({ name: "", phone: "", email: "", matter: "", court: "", message: "" });
  };

  return (
    <div ref={ref} className="section-pad" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="section-label">
            <span className="w-8 h-px" style={{ background: "var(--gold)" }} />
            Get in Touch
            <span className="w-8 h-px" style={{ background: "var(--gold)" }} />
          </span>
          <h2
            className="font-display font-700 text-3xl sm:text-4xl lg:text-5xl mt-4 mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Book a Consultation
          </h2>
          <p className="font-body text-base max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>
            Describe your legal matter below and Advocate Akash Tyagi will get
            back to you promptly — usually within the same working day.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* ── Left: Contact methods ── */}
          <div className="lg:col-span-2 space-y-5 reveal">
            {/* Quick contact cards */}
            {[
              {
                icon: Phone,
                label: "Call Directly",
                value: "+91 85710 90070",
                sub: "Mon–Sat, 10 AM – 6 PM",
                href: "tel:+918571090070",
                cta: "Call Now",
                btnClass: "btn-gold",
              },
              {
                icon: MessageCircle,
                label: "WhatsApp",
                value: "+91 85710 90070",
                sub: "Quick response guaranteed",
                href: "https://wa.me/918571090070?text=Hello%20Akash%20ji%2C%20I%20need%20legal%20help.",
                cta: "Message Now",
                btnClass: "btn-outline",
              },
              {
                icon: MapPin,
                label: "Walk-In",
                value: "Chamber No. 425",
                sub: "4th Floor, Rohini District Courts",
                href: "https://maps.google.com/?q=Rohini+District+Courts+Delhi",
                cta: "Get Directions",
                btnClass: "btn-ghost",
              },
            ].map(({ icon: Icon, label, value, sub, href, cta, btnClass }) => (
              <div
                key={label}
                className="premium-card rounded-2xl p-6 flex gap-4"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "var(--gold-pale)" }}
                >
                  <Icon size={18} style={{ color: "var(--gold)" }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-body text-[11px] uppercase tracking-widest font-600 mb-1" style={{ color: "var(--text-muted)" }}>
                    {label}
                  </p>
                  <p className="font-body font-600 text-sm mb-0.5" style={{ color: "var(--text-primary)" }}>
                    {value}
                  </p>
                  <p className="font-body text-xs mb-3" style={{ color: "var(--text-muted)" }}>
                    {sub}
                  </p>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`${btnClass} text-xs py-2 px-4`}
                  >
                    {cta}
                  </a>
                </div>
              </div>
            ))}

            {/* Disclaimer */}
            <p className="font-body text-xs px-1 leading-relaxed" style={{ color: "var(--text-muted)" }}>
              ⚖️ <em>All information shared in this form is held in strict
              confidence. Initial consultation does not constitute a
              solicitor-client relationship until formally agreed.</em>
            </p>
          </div>

          {/* ── Right: Form ── */}
          <div className="lg:col-span-3 reveal reveal-delay-2">
            {status === "success" ? (
              <div
                className="h-full flex flex-col items-center justify-center text-center rounded-3xl p-12"
                style={{ background: "var(--bg-tertiary)", border: "1px solid var(--card-border)" }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                  style={{ background: "rgba(16,185,129,0.1)" }}
                >
                  <CheckCircle size={32} style={{ color: "#10b981" }} />
                </div>
                <h3 className="font-display font-700 text-2xl mb-3" style={{ color: "var(--text-primary)" }}>
                  Message Received!
                </h3>
                <p className="font-body text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
                  Thank you for reaching out. Advocate Akash Tyagi will review
                  your matter and respond within the same working day. For urgent
                  matters, please call directly.
                </p>
                <button onClick={() => setStatus("idle")} className="btn-outline text-sm">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-3xl p-8 sm:p-10 space-y-5"
                style={{ background: "var(--bg-tertiary)", border: "1px solid var(--card-border)" }}
                aria-label="Contact form"
              >
                {status === "error" && (
                  <div
                    className="flex items-center gap-3 p-4 rounded-xl text-sm"
                    style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", color: "#ef4444" }}
                  >
                    <AlertCircle size={16} />
                    Something went wrong. Please call directly at +91 85710 90070.
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block font-body text-sm font-500 mb-1.5" style={{ color: "var(--text-secondary)" }}>
                      Full Name <span style={{ color: "var(--gold)" }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="form-input"
                      autoComplete="name"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block font-body text-sm font-500 mb-1.5" style={{ color: "var(--text-secondary)" }}>
                      Phone / WhatsApp <span style={{ color: "var(--gold)" }}>*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="form-input"
                      autoComplete="tel"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block font-body text-sm font-500 mb-1.5" style={{ color: "var(--text-secondary)" }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com (optional)"
                    className="form-input"
                    autoComplete="email"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Matter type */}
                  <div>
                    <label className="block font-body text-sm font-500 mb-1.5" style={{ color: "var(--text-secondary)" }}>
                      Nature of Matter <span style={{ color: "var(--gold)" }}>*</span>
                    </label>
                    <select
                      name="matter"
                      value={form.matter}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="">Select matter type</option>
                      {MATTER_TYPES.map((m) => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                    </select>
                    {errors.matter && <p className="text-red-500 text-xs mt-1">{errors.matter}</p>}
                  </div>

                  {/* Court preference */}
                  <div>
                    <label className="block font-body text-sm font-500 mb-1.5" style={{ color: "var(--text-secondary)" }}>
                      Preferred Court / Forum
                    </label>
                    <select
                      name="court"
                      value={form.court}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="">Select court</option>
                      {COURTS.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block font-body text-sm font-500 mb-1.5" style={{ color: "var(--text-secondary)" }}>
                    Brief Description <span style={{ color: "var(--gold)" }}>*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Please briefly describe your legal matter, the current stage, and any urgency..."
                    rows={4}
                    className="form-input resize-none"
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-gold w-full relative overflow-hidden"
                  style={{ opacity: status === "sending" ? 0.8 : 1 }}
                >
                  {status === "sending" ? (
                    <>
                      <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Consultation Request
                    </>
                  )}
                </button>

                <p className="font-body text-xs text-center" style={{ color: "var(--text-muted)" }}>
                  Your information is confidential and will only be used to respond to your enquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
