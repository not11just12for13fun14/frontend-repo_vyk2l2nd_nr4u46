import React from "react";
import { Reveal, Section, HoverCard } from "./Animate";
import StatsTicker from "./StatsTicker";

const Stat = ({ value, label }) => (
  <HoverCard>
    <div className="rounded-xl border border-white/10 bg-[#0a0b0f] p-6">
      <div className="text-2xl font-bold text-white"><StatsTicker from={0} to={value} duration={1200} /></div>
      <div className="text-xs text-white/60">{label}</div>
    </div>
  </HoverCard>
);

const Stats = () => {
  return (
    <Section className="border-b border-white/10 bg-[#0a0b0f]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <h3 className="mb-6 text-center text-2xl font-semibold text-white sm:text-3xl">Aggregated. Fast. Battle-Tested.</h3>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          <Reveal><Stat value={12} label="Integrated Solana venues & liquidity sources" /></Reveal>
          <Reveal delay={0.04}><Stat value={50000} label="Orders executed" /></Reveal>
          <Reveal delay={0.08}><Stat value={4000} label="Memecoins traded" /></Reveal>
          <Reveal delay={0.12}><Stat value={120000000} label="Total volume routed (USD)" /></Reveal>
        </div>
        <Reveal delay={0.14}><p className="mt-4 text-center text-xs text-white/60">Numbers are constantly growing as more Solana degens plug their strategies into MEMEfiER.</p></Reveal>
      </div>
    </Section>
  );
};

export default Stats;
