"use client";

import About from "@/components/About";
import Brands from "@/components/Brands";
import CTA from "@/components/CTA";
import Expertise from "@/components/Expertise";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="overflow-hidden px-7!">
        <Hero />
        <About />
        <Expertise />
        <Portfolio />
        <Brands />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
