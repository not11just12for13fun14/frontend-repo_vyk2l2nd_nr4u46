import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Advantage from "./components/Advantage";
import Venues from "./components/Venues";
import APISection from "./components/API";
import Proofs from "./components/Proofs";
import Tracking from "./components/Tracking";
import Stats from "./components/Stats";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#0a0b0f] text-white">
      <Navbar />
      <Hero />
      <Advantage />
      <Venues />
      <APISection />
      <Proofs />
      <Tracking />
      <Stats />
      <Features />
      <HowItWorks />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
