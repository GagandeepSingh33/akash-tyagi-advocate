import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://akashtyagiadvocate.in"),
  title: {
    default: "Akash Tyagi | Advocate & Legal Consultant | Delhi Courts",
    template: "%s | Akash Tyagi Advocate",
  },
  description:
    "Akash Tyagi — Experienced Advocate & Legal Consultant at Bar Council of Delhi. Expert in Matrimonial, Civil & Criminal Law. Practicing at Delhi District Courts, Delhi High Court & Punjab & Haryana High Court. 6+ Years Experience.",
  keywords: [
    "advocate Delhi",
    "lawyer Rohini Delhi",
    "matrimonial lawyer Delhi",
    "criminal lawyer Delhi",
    "civil lawyer Delhi",
    "Rohini District Court lawyer",
    "Delhi High Court advocate",
    "legal consultant Delhi",
    "Akash Tyagi advocate",
    "Bar Council of Delhi advocate",
  ],
  authors: [{ name: "Akash Tyagi", url: "https://akashtyagiadvocate.in" }],
  creator: "Akash Tyagi",
  publisher: "Akash Tyagi",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://akashtyagiadvocate.in",
    title: "Akash Tyagi | Advocate & Legal Consultant | Delhi",
    description:
      "Expert legal representation in Matrimonial, Civil & Criminal matters. Serving clients across Delhi & Haryana courts with 6+ years of experience.",
    siteName: "Akash Tyagi Advocate",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Akash Tyagi - Advocate & Legal Consultant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akash Tyagi | Advocate & Legal Consultant | Delhi",
    description:
      "Expert legal representation in Matrimonial, Civil & Criminal matters across Delhi courts.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://akashtyagiadvocate.in",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

// JSON-LD Schema Markup
const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://akashtyagiadvocate.in/#person",
      name: "Akash Tyagi",
      jobTitle: "Advocate & Legal Consultant",
      description:
        "Akash Tyagi is an experienced Advocate enrolled with the Bar Council of Delhi with over 6 years of practice in Matrimonial, Civil, and Criminal law across Delhi and Haryana courts.",
      url: "https://akashtyagiadvocate.in",
      telephone: "+918571090070",
      email: "advakashtyagi25@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Ch. No. 425, 4th Floor, Lawyers Chamber Block, Rohini District Courts",
        addressLocality: "Rohini",
        addressRegion: "Delhi",
        postalCode: "110085",
        addressCountry: "IN",
      },
      memberOf: {
        "@type": "Organization",
        name: "Bar Council of Delhi",
      },
      knowsAbout: [
        "Matrimonial Law",
        "Civil Law",
        "Criminal Law",
        "Family Law",
        "Consumer Protection",
      ],
    },
    {
      "@type": "LegalService",
      "@id": "https://akashtyagiadvocate.in/#service",
      name: "Akash Tyagi - Legal Services",
      description:
        "Professional legal services in Matrimonial, Civil and Criminal matters across Delhi and Haryana courts.",
      url: "https://akashtyagiadvocate.in",
      telephone: "+918571090070",
      email: "advakashtyagi25@gmail.com",
      founder: { "@id": "https://akashtyagiadvocate.in/#person" },
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Ch. No. 425, 4th Floor, Lawyers Chamber Block, Rohini District Courts",
        addressLocality: "Rohini",
        addressRegion: "Delhi",
        postalCode: "110085",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 28.7041,
        longitude: 77.1025,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "10:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "10:00",
          closes: "14:00",
        },
      ],
      areaServed: ["Delhi", "Haryana"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Legal Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Matrimonial Law" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Civil Law" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Criminal Law" } },
        ],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,300;1,9..40,400&display=swap"
          rel="stylesheet"
        />
        {/* Schema.org Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
        {/* Theme Initialization Script - prevents flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="font-body antialiased gradient-mesh transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
