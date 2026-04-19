"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight, BookOpen, Clock } from "lucide-react";

const ARTICLES = [
  {
    category: "Matrimonial Law",
    categoryColor: "#ef4444",
    title: "Understanding Divorce Grounds Under the Hindu Marriage Act, 1955",
    excerpt:
      "A plain-language guide to the legal grounds for divorce in India — from cruelty and desertion to mutual consent — and what you need to know before filing a petition.",
    readTime: "6 min read",
    date: "July 2024",
  },
  {
    category: "Criminal Law",
    categoryColor: "#f59e0b",
    title: "Anticipatory Bail: When to Apply, How It Works, and What to Expect",
    excerpt:
      "Facing a potential arrest? Anticipatory bail under Section 438 CrPC can be a crucial protection. Here's a clear breakdown of the process, timelines, and legal strategy.",
    readTime: "8 min read",
    date: "June 2024",
  },
  {
    category: "NI Act / Section 138",
    categoryColor: "#6366f1",
    title: "Cheque Bounce Under Section 138 NI Act: Your Complete Legal Guide",
    excerpt:
      "Has a cheque issued to you bounced? Section 138 of the Negotiable Instruments Act provides a strong criminal remedy. This guide covers the 30-day notice, complaint process, timelines, and what compensation you can claim.",
    readTime: "7 min read",
    date: "May 2024",
  },
  {
    category: "Consumer Law",
    categoryColor: "#10b981",
    title: "Filing a Consumer Complaint in Delhi: A Step-by-Step Guide",
    excerpt:
      "Cheated by a service provider? The Consumer Protection Act, 2019 empowers you to seek redress. This guide walks you through the complaint process at the DCDRC.",
    readTime: "5 min read",
    date: "April 2024",
  },
  {
    category: "Civil Law",
    categoryColor: "#3b82f6",
    title: "Property Disputes in Delhi: Your Legal Remedies Explained",
    excerpt:
      "From title disputes and illegal possession to builder-buyer conflicts, this article outlines the civil remedies available to property owners in Delhi courts.",
    readTime: "7 min read",
    date: "March 2024",
  },
];

export default function Articles() {
  const ref = useScrollReveal(0.05) as React.RefObject<HTMLDivElement>;

  return (
    <div ref={ref} className="section-pad" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div className="reveal">
            <span className="section-label">
              <span className="w-8 h-px" style={{ background: "var(--gold)" }} />
              Legal Insights
            </span>
            <h2
              className="font-display font-700 text-3xl sm:text-4xl lg:text-5xl mt-4"
              style={{ color: "var(--text-primary)" }}
            >
              Articles &amp; Guides
            </h2>
          </div>
          <p
            className="font-body text-sm max-w-sm reveal reveal-delay-2"
            style={{ color: "var(--text-muted)" }}
          >
            Plain-language legal writing for everyday people navigating the
            Indian justice system.
          </p>
        </div>

        {/* Articles grid — 2 cols; last card centred when alone */}
        <div className="grid sm:grid-cols-2 gap-6">
          {ARTICLES.map((article, i) => {
            const isLast = i === ARTICLES.length - 1;
            return (
              <article
                key={article.title}
                className={`reveal reveal-delay-${(i % 4) + 1} premium-card rounded-3xl p-7 group cursor-pointer${
                  isLast ? " sm:col-span-2 sm:max-w-[calc(50%-0.75rem)] sm:mx-auto w-full" : ""
                }`}
              >
                {/* Top row */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="font-body text-[10px] font-700 uppercase tracking-widest px-2.5 py-1 rounded-full"
                    style={{
                      color: article.categoryColor,
                      background: `${article.categoryColor}15`,
                    }}
                  >
                    {article.category}
                  </span>
                  <div
                    className="flex items-center gap-1.5 font-body text-[11px]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <Clock size={11} />
                    {article.readTime}
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="font-display font-700 text-lg leading-snug mb-3 group-hover:text-gold transition-base"
                  style={{ color: "var(--text-primary)" }}
                >
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p
                  className="font-body text-sm leading-relaxed mb-5"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {article.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span
                    className="font-body text-xs"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {article.date}
                  </span>
                  <span
                    className="inline-flex items-center gap-1.5 font-body text-sm font-500 transition-base group-hover:gap-3"
                    style={{ color: "var(--gold)" }}
                  >
                    Read More
                    <ArrowRight size={13} />
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10 reveal">
          <div
            className="inline-flex items-center gap-2 font-body text-sm"
            style={{ color: "var(--text-muted)" }}
          >
            <BookOpen size={15} style={{ color: "var(--gold)" }} />
            More articles on legal rights, court procedures &amp; practical guidance coming soon.
          </div>
        </div>
      </div>
    </div>
  );
}
