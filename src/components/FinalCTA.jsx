import React from "react";
import { Reveal, Section, HoverCard } from "./Animate";

const FinalCTA = () => {
  return (
    <Section className="border-b border-white/10 bg-[#0b0d12]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Level the Playing Field in Solana Memecoins</h2>
        </Reveal>
        <Reveal delay={0.05}><p className="mt-1 text-white/70">Memes move fast. Your trading should move faster.</p></Reveal>
        <Reveal delay={0.1}>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="#launch" className="rounded-md bg-gradient-to-r from-emerald-500 to-fuchsia-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 hover:opacity-95 transition">Launch App</a>
            <a href="#demo" className="text-sm text-emerald-300/90 hover:text-emerald-200 transition">Request a demo (for funds / groups)</a>
          </div>
        </Reveal>
        <Reveal delay={0.12}><p className="mt-3 text-xs text-white/60">A new generation of institutional-grade execution for the most degen corner of crypto.</p></Reveal>
      </div>
    </Section>
  );
};

export default FinalCTA;
