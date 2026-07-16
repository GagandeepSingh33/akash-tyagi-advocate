import { articleData } from "@/lib/articleData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Generate static routes at build time
export function generateStaticParams() {
  return Object.keys(articleData).map((slug) => ({
    slug: slug,
  }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articleData[params.slug as keyof typeof articleData];

  if (!article) {
    notFound();
  }

  return (
    <main className="relative min-h-screen flex flex-col" style={{ background: "var(--bg-primary)" }}>
      {/* We reuse the Navbar for consistent branding, but it might need a standard background if not at top. 
          Assuming Navbar handles its own scroll state. */}
      <Navbar />

      <div className="flex-grow pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          
          {/* Back Button */}
          <Link 
            href="/#articles"
            className="inline-flex items-center gap-2 font-body text-sm mb-10 transition-base hover:text-gold"
            style={{ color: "var(--text-secondary)" }}
          >
            <ArrowLeft size={16} />
            Back to Articles
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span
                className="font-body text-xs font-700 uppercase tracking-widest px-3 py-1.5 rounded-full"
                style={{
                  color: article.categoryColor,
                  background: `${article.categoryColor}15`,
                }}
              >
                {article.category}
              </span>
              <div className="flex items-center gap-4 font-body text-sm" style={{ color: "var(--text-muted)" }}>
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  {article.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={14} />
                  {article.readTime}
                </span>
              </div>
            </div>

            <h1 
              className="font-display font-700 text-3xl sm:text-4xl lg:text-5xl leading-tight mb-8"
              style={{ color: "var(--text-primary)" }}
            >
              {article.title}
            </h1>

            {/* Author Block */}
            <div className="flex items-center gap-4 pt-6" style={{ borderTop: "1px solid var(--border)" }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center font-display font-700 text-lg text-white" style={{ background: "var(--gold)" }}>
                AT
              </div>
              <div>
                <p className="font-body font-600 text-sm" style={{ color: "var(--text-primary)" }}>
                  Advocate Akash Tyagi
                </p>
                <p className="font-body text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                  Legal Consultant, Delhi District Courts
                </p>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <article 
            className="article-content font-body text-[1.05rem] leading-relaxed mb-16"
            style={{ color: "var(--text-secondary)" }}
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* CTA Box */}
          <div className="rounded-3xl p-8 sm:p-10 text-center" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }}>
            <h3 className="font-display font-600 text-2xl mb-3" style={{ color: "var(--text-primary)" }}>
              Need Legal Assistance?
            </h3>
            <p className="font-body text-sm mb-6 max-w-md mx-auto" style={{ color: "var(--text-muted)" }}>
              If you are facing a legal issue related to this topic, get in touch for a professional consultation and strategic guidance.
            </p>
            <Link 
              href="/#contact"
              className="btn-gold inline-flex items-center gap-2"
            >
              Schedule a Consultation
              <ChevronRight size={16} />
            </Link>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
