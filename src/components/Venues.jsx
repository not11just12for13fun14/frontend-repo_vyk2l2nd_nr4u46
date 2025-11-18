import React from "react";
import { HoverCard, Reveal, Section } from "./Animate";

const VenueCard = ({ title, description }) => (
  <HoverCard>
    <div className="rounded-xl border border-white/10 bg-[#0b0d12] p-5 shadow-emerald-500/10 shadow">
      <h4 className="text-white font-medium mb-2">{title}</h4>
      <p className="text-white/70 text-sm">{description}</p>
    </div>
  </HoverCard>
);

const Venues = () => {
  return (
    <Section className="border-b border-white/10 bg-[#0a0b0f]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Reveal>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Pump.fun + Solana DEXs, One Terminal</h2>
          </Reveal>
          <Reveal delay={0.05}><p className="text-white/70">Trade across your favorite Solana venues from a single algorithmic interface.</p></Reveal>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <Reveal><VenueCard title="Pump.fun" description="Snipe new launches, manage pre-launch positions, and automate early liquidity plays." /></Reveal>
          <Reveal delay={0.04}><VenueCard title="Solana DEXs" description="Route orders through Raydium, Orca and more, with smart slippage and liquidity-aware sizing." /></Reveal>
          <Reveal delay={0.08}><VenueCard title="Multiple Wallets" description="Trade from multiple Solana wallets at once. Separate strategies, shared control." /></Reveal>
        </div>
        <Reveal delay={0.12}><p className="mt-4 text-xs text-white/50">Your keys, your coins. All trades are executed directly from your connected Solana wallets.</p></Reveal>
      </div>
    </Section>
  );
};

export default Venues;
