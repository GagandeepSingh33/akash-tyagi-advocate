"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PracticeAreas from "@/components/PracticeAreas";
import Courts from "@/components/Courts";
import Articles from "@/components/Articles";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="practice">
        <PracticeAreas />
      </section>
      <section id="courts">
        <Courts />
      </section>
      <section id="articles">
        <Articles />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <MapSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
