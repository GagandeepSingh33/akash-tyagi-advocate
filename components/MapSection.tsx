"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MapPin, Navigation } from "lucide-react";

export default function MapSection() {
  const ref = useScrollReveal(0.05) as React.RefObject<HTMLDivElement>;

  return (
    <div ref={ref} className="section-pad" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span className="section-label">
            <span className="w-8 h-px" style={{ background: "var(--gold)" }} />
            Location
            <span className="w-8 h-px" style={{ background: "var(--gold)" }} />
          </span>
          <h2
            className="font-display font-700 text-3xl sm:text-4xl mt-4"
            style={{ color: "var(--text-primary)" }}
          >
            Find the Chamber
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start reveal reveal-delay-1">
          {/* Address card */}
          <div
            className="rounded-3xl p-8 space-y-6"
            style={{
              background: "var(--bg-secondary)",
              border: "1px solid var(--card-border)",
            }}
          >
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center"
              style={{ background: "var(--gold-pale)" }}
            >
              <MapPin size={22} style={{ color: "var(--gold)" }} />
            </div>
            <div>
              <h3
                className="font-display font-700 text-lg mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                Office Address
              </h3>
              <div className="space-y-1">
                {[
                  "Chamber No. 425",
                  "4th Floor, Lawyers Chamber Block",
                  "Rohini District Courts",
                  "Rohini, Delhi – 110085",
                ].map((line) => (
                  <p
                    key={line}
                    className="font-body text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>

            <div
              className="border-t pt-5 space-y-3"
              style={{ borderColor: "var(--border)" }}
            >
              <p className="font-body text-xs uppercase tracking-widest font-600" style={{ color: "var(--text-muted)" }}>
                How to Reach
              </p>
              {[
                { icon: "🚇", text: "Metro: Rohini West / Rohini East (Red Line)" },
                { icon: "🚌", text: "DTC Bus: Route 903, 904, 906 to Rohini Courts" },
                { icon: "🚗", text: "Parking available inside court complex" },
              ].map(({ icon, text }) => (
                <div key={text} className="flex gap-2.5">
                  <span>{icon}</span>
                  <span className="font-body text-xs" style={{ color: "var(--text-secondary)" }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="https://maps.google.com/?q=Rohini+District+Courts+Delhi+110085"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold w-full gap-2"
            >
              <Navigation size={15} />
              Open in Google Maps
            </a>
          </div>

          {/* Map embed */}
          <div className="lg:col-span-2 map-wrapper reveal reveal-delay-2">
            <div
              className="overflow-hidden rounded-3xl"
              style={{
                border: "1px solid var(--card-border)",
                boxShadow: "0 8px 40px var(--shadow-color)",
              }}
            >
              {/* Google Maps embed — Rohini District Courts */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.248617013217!2d77.09574087550483!3d28.740564975617383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d063acf7a10c5%3A0x5b7b52f7b58d8de6!2sRohini%20District%20Courts!5e0!3m2!1sen!2sin!4v1721000000000!5m2!1sen!2sin"
                width="100%"
                height="420"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rohini District Courts — Advocate Akash Tyagi Chamber"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
