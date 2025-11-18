import React from "react";
import { Reveal, Section, HoverCard } from "./Animate";

const FeedRow = ({ text, pill, delay = 0 }) => (
  <Reveal delay={delay}>
    <div className="flex items-center justify-between rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm text-white/80">
      <span>{text}</span>
      {pill && <span className="text-[10px] rounded bg-white/5 px-2 py-0.5 text-white/60">{pill}</span>}
    </div>
  </Reveal>
);

const Tracking = () => {
  return (
    <Section className="border-b border-white/10 bg-[#0b0d12]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-16 sm:px-6 md:grid-cols-2 lg:px-8">
        <div className="space-y-4">
          <Reveal>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Real-Time Trade Tracking for Every Meme</h2>
          </Reveal>
          <Reveal delay={0.04}><p className="text-white/70">Track every order, fill, and partial fill in real-time. Watch how your TWAP, snipers, and ladder algos execute across pump.fun and Solana DEXs.</p></Reveal>
          <ul className="grid gap-2 text-white/80">
            <Reveal as="li">Per-order execution breakdown</Reveal>
            <Reveal as="li" delay={0.04}>Slippage and fee analysis</Reveal>
            <Reveal as="li" delay={0.08}>Strategy-level PnL and risk metrics</Reveal>
            <Reveal as="li" delay={0.12}>Exportable reports for your alpha groups</Reveal>
          </ul>
        </div>
        <div className="space-y-2">
          <FeedRow text="$DOGCAT • BUY • pump.fun • Filled 3.2 SOL @ 0.000012" pill="FILLED" />
          <FeedRow text="$MOON • SELL • Raydium • Partial Fill 1.0 / 5.0 SOL" pill="PARTIAL" delay={0.04} />
          <FeedRow text="$MEME • BUY • TWAP • 4/10 slices executed" pill="IN PROGRESS" delay={0.08} />
          <FeedRow text="$FROG • SELL • Ladder • Next leg in 2m" pill="SCHEDULED" delay={0.12} />
        </div>
      </div>
    </Section>
  );
};

export default Tracking;
