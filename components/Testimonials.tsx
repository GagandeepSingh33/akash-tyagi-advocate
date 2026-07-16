"use client";

import { useState, useEffect, useCallback } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Star, ChevronLeft, ChevronRight, Quote, Plus, X, Loader2, Trash2 } from "lucide-react";
import { fetchReviews } from "@/app/actions";
import { supabase } from "@/lib/supabase";

const STATIC_TESTIMONIALS = [
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
    name: "Vikram Singh",
    location: "Sonipat, Haryana",
    matter: "Criminal Defence",
    rating: 5,
    text: "When my family faced a false FIR, we were panicked. Akash ji guided us calmly, filed the anticipatory bail application promptly, and the bail was granted. His knowledge of criminal procedure and his calm demeanour gave us confidence throughout a very stressful time.",
    initials: "VS",
    color: "#f59e0b",
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
  const [testimonials, setTestimonials] = useState<any[]>(STATIC_TESTIMONIALS);
  
  // Form state
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const wordCount = commentText.trim() === "" ? 0 : commentText.trim().split(/\s+/).length;

  useEffect(() => {
    async function loadReviews() {
      try {
        const dbReviews = await fetchReviews();
        setTestimonials([...(Array.isArray(dbReviews) ? dbReviews : []), ...STATIC_TESTIMONIALS].slice(0, 7));
      } catch (err) {
        console.error("Failed to load reviews:", err);
      }
    }
    loadReviews();
  }, []);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrent((index + testimonials.length) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 400);
    },
    [isAnimating, testimonials.length]
  );

  // Auto-advance
  useEffect(() => {
    if (testimonials.length <= 1) return;
    const timer = setInterval(() => goTo(current + 1), 6000);
    return () => clearInterval(timer);
  }, [current, goTo, testimonials.length]);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError("");
    setFormSuccess(false);

    if (!session) {
      setFormError("You must be logged in to submit a review.");
      return;
    }

    if (wordCount > 100) {
      setFormError("Comment must not exceed 100 words.");
      return;
    }

    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const location = formData.get("location") as string;

    const initials = name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);

    const colors = ["#ef4444", "#6366f1", "#f59e0b", "#10b981", "#8b5cf6", "#ec4899"];
    const color = colors[Math.floor(Math.random() * colors.length)];

    const { error } = await supabase.from("reviews").insert([
      {
        name,
        text: commentText,
        initials,
        color,
        rating,
        location: location || null,
        user_id: session.user.id,
      }
    ]);

    if (!error) {
      setFormSuccess(true);
      const dbReviews = await fetchReviews();
      setTestimonials([...(Array.isArray(dbReviews) ? dbReviews : []), ...STATIC_TESTIMONIALS].slice(0, 7));
      setCurrent(0);
      setCommentText("");
      setRating(5);
      setTimeout(() => {
        setShowForm(false);
        setFormSuccess(false);
      }, 2000);
    } else {
      setFormError("Failed to submit review.");
    }
    setIsSubmitting(false);
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this review?")) return;
    const { error } = await supabase.from("reviews").delete().eq("id", id);
    if (!error) {
      const dbReviews = await fetchReviews();
      setTestimonials([...(Array.isArray(dbReviews) ? dbReviews : []), ...STATIC_TESTIMONIALS].slice(0, 7));
      setCurrent(0);
    }
  };

  const t = testimonials[current];

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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-4">
            <h2
              className="font-display font-700 text-3xl sm:text-4xl lg:text-5xl"
              style={{ color: "var(--text-primary)" }}
            >
              What Clients Say
            </h2>
            <button 
              onClick={() => setShowForm(!showForm)}
              className="btn-outline flex items-center gap-2 text-xs py-2 px-4 rounded-full transition-base"
              style={{ borderColor: "var(--gold)", color: "var(--gold)" }}
            >
              {showForm ? <X size={14} /> : <Plus size={14} />}
              {showForm ? "Close Form" : "Write a Review"}
            </button>
          </div>
        </div>

        {/* Form Section */}
        {showForm && (
          <div className="mb-12" style={{ animation: 'fadeIn 0.4s ease-out' }}>
            <form 
              onSubmit={handleFormSubmit}
              className="max-w-2xl mx-auto rounded-3xl p-6 sm:p-8"
              style={{
                background: "var(--bg-secondary)",
                border: "1px solid var(--card-border)",
                boxShadow: "0 8px 40px var(--shadow-color)",
              }}
            >
              <h3 className="font-display font-600 text-xl mb-4" style={{ color: "var(--text-primary)" }}>
                Share your experience
              </h3>
              
              {!session ? (
                <div className="text-center py-8">
                  <p className="font-body text-sm mb-6 max-w-md mx-auto" style={{ color: "var(--text-secondary)" }}>
                    To ensure authentic reviews and allow you to manage your comments later, please sign in with Google to continue.
                  </p>
                  <button 
                    type="button"
                    onClick={() => supabase.auth.signInWithOAuth({ provider: 'google' })}
                    className="btn-gold mx-auto"
                  >
                    Sign in with Google
                  </button>
                </div>
              ) : formSuccess ? (
                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-500 text-sm font-500 text-center">
                  Thank you! Your review has been submitted successfully.
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="block font-body text-xs font-500 mb-2 uppercase tracking-wider" style={{ color: "var(--text-secondary)" }}>
                      Your Rating
                    </label>
                    <div className="flex gap-1 mb-2" onMouseLeave={() => setHoverRating(0)}>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoverRating(star)}
                          className="p-1 transition-transform hover:scale-110 focus-gold rounded-full"
                          aria-label={`Rate ${star} stars`}
                        >
                          <Star
                            size={28}
                            fill={(hoverRating || rating) >= star ? "#C9A84C" : "transparent"}
                            color={(hoverRating || rating) >= star ? "#C9A84C" : "var(--border)"}
                            className="transition-colors duration-200"
                          />
                        </button>
                      ))}
                    </div>
                    <input type="hidden" name="rating" value={rating} />
                  </div>
                  <div>
                    <label className="block font-body text-xs font-500 mb-1.5 uppercase tracking-wider" style={{ color: "var(--text-secondary)" }}>
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      name="name" 
                      required
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 rounded-xl font-body text-sm outline-none transition-all"
                      style={{ 
                        background: "var(--bg-tertiary)", 
                        border: "1px solid var(--border)",
                        color: "var(--text-primary)"
                      }}
                    />
                  </div>
                  <div>
                    <label className="block font-body text-xs font-500 mb-1.5 uppercase tracking-wider" style={{ color: "var(--text-secondary)" }}>
                      Your Location (Optional)
                    </label>
                    <input 
                      type="text" 
                      name="location" 
                      placeholder="e.g. Rohini, Delhi"
                      className="w-full px-4 py-3 rounded-xl font-body text-sm outline-none transition-all"
                      style={{ 
                        background: "var(--bg-tertiary)", 
                        border: "1px solid var(--border)",
                        color: "var(--text-primary)"
                      }}
                    />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="block font-body text-xs font-500 uppercase tracking-wider" style={{ color: "var(--text-secondary)" }}>
                        Your Comment
                      </label>
                      <span className={`font-body text-xs ${wordCount > 100 ? 'text-red-500' : 'text-gray-400'}`}>
                        {wordCount}/100 words
                      </span>
                    </div>
                    <textarea 
                      name="comment" 
                      required
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      placeholder="How did Akash Tyagi assist you?"
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl font-body text-sm outline-none transition-all resize-none"
                      style={{ 
                        background: "var(--bg-tertiary)", 
                        border: "1px solid var(--border)",
                        color: "var(--text-primary)"
                      }}
                    />
                  </div>
                  
                  {formError && (
                    <div className="text-red-500 text-xs font-500">{formError}</div>
                  )}

                  <button 
                    type="submit" 
                    disabled={isSubmitting || wordCount > 100}
                    className="btn-gold w-full flex justify-center items-center gap-2"
                  >
                    {isSubmitting ? <Loader2 size={16} className="animate-spin" /> : "Submit Review"}
                  </button>
                </div>
              )}
            </form>
          </div>
        )}

        {/* Testimonial card */}
        {testimonials.length > 0 && (
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
                {/* Delete button for owner */}
                {session && t.user_id === session.user.id && (
                  <button
                    onClick={() => handleDelete(t.id)}
                    className="absolute -top-2 right-0 p-2 text-red-500 hover:text-red-600 hover:bg-red-500/10 rounded-full transition-colors"
                    aria-label="Delete your review"
                    title="Delete your review"
                  >
                    <Trash2 size={18} />
                  </button>
                )}

                {/* Quote icon */}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: "var(--gold-pale)" }}
                >
                  <Quote size={22} style={{ color: "var(--gold)" }} />
                </div>

                {/* Text */}
                <blockquote
                  className="font-display italic text-xl sm:text-2xl leading-relaxed mb-8 min-h-[120px]"
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
                        {t.location || "Verified Client"}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    <Stars count={t.rating || 5} />
                    <span
                      className="font-body text-[10px] uppercase tracking-widest"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {t.matter || "Legal Services"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Controls */}
            {testimonials.length > 1 && (
              <div className="flex items-center justify-between mt-8">
                {/* Dots */}
                <div className="flex gap-2 flex-wrap max-w-[200px]">
                  {testimonials.map((_, i) => (
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
            )}
          </div>
        )}
      </div>
    </div>
  );
}
