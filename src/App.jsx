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
    <div className="min-h-screen bg-[#07080c] text-white relative overflow-hidden">
      {/* Background FX */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-20 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.12),transparent_60%)] blur-2xl" />
        <div className="absolute top-0 right-0 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(217,70,239,0.12),transparent_60%)] blur-2xl" />
        <div className="absolute bottom-[-10%] left-1/3 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.08),transparent_60%)] blur-2xl" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.4))]" />
        <div className="absolute inset-0 opacity-[0.08] bg-[url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'56\' height=\'56\' viewBox=\'0 0 56 56\'><path d=\'M0 55h56v1H0zM55 0v56h1V0z\' fill=\'%23ffffff\' fill-opacity=\'0.6\'/></svg>')]" />
      </div>

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
