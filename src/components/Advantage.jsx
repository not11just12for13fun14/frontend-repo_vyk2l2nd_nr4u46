import React from "react";
import { Reveal, Section, HoverCard } from "./Animate";

const Advantage = () => {
  return (
    <Section className="border-b border-white/10 bg-[#0b0d12]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-16 sm:px-6 md:grid-cols-2 lg:px-8">
        <div className="space-y-4">
          <Reveal>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Your Edge in the Solana Memecoin Casino</h2>
          </Reveal>
          <Reveal delay={0.04}><p className="text-white/70">Stop manually spamming pump.fun. Let execution algorithms work the chaos for you.</p></Reveal>
          <Reveal delay={0.08}><p className="text-white/70">With memecoins on Solana, timing is everything. One bad entry can ruin your entire PnL.</p></Reveal>
          <Reveal delay={0.12}><p className="text-white/70">MEMEfiER routes and executes your trades using pre-built and custom algos, so you get consistent execution instead of emotional panic-clicking.</p></Reveal>
          <Reveal delay={0.16}><p className="text-white/70">Whether you’re sniping new launches or managing bags through multiple exits, the engine handles the micro-decisions for you.</p></Reveal>
        </div>
        <Reveal delay={0.1}>
          <HoverCard className="grid gap-3 self-start rounded-xl border border-white/10 bg-black/30 p-5">
            <div className="text-white/80">• Smarter entries on low-liquidity pairs</div>
            <div className="text-white/80">• Automated scaling in/out</div>
            <div className="text-white/80">• Execution tuned for Solana fees and speed</div>
            <div className="text-white/80">• Backtested logic for pump.fun-style curves</div>
          </HoverCard>
        </Reveal>
      </div>
    </Section>
  );
};

export default Advantage;
