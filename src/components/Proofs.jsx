import React from "react";
import { Reveal, Section, HoverCard } from "./Animate";

const Badge = ({ label }) => (
  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-white/80">
    <span className="relative flex h-1.5 w-1.5">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
    </span>
    {label}
  </div>
);

const Proofs = () => {
  return (
    <Section className="border-b border-white/10 bg-[#0a0b0f]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Verifiable On-Chain Performance</h2>
        </Reveal>
        <Reveal delay={0.05}><p className="mt-1 text-white/70">Prove your edge without doxxing your strategy.</p></Reveal>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="space-y-3 text-white/70">
            <Reveal>Anchor your trading history on-chain as cryptographic proofs.</Reveal>
            <Reveal delay={0.04}>Share PnL and performance badges without revealing your full strategy or wallet cluster.</Reveal>
            <Reveal delay={0.08}>Perfect for signal sellers, copy-trading communities, and memecoin funds.</Reveal>
            <div className="mt-2 flex flex-wrap gap-2">
              <Reveal delay={0.02}><Badge label="PnL Verified" /></Reveal>
              <Reveal delay={0.06}><Badge label="Drawdown Tracked" /></Reveal>
              <Reveal delay={0.1}><Badge label="On-Chain Signed" /></Reveal>
            </div>
          </div>
          <Reveal delay={0.06}>
            <HoverCard className="relative rounded-xl border border-white/10 bg-black/30 p-6 text-white/70 overflow-hidden">
              <div className="pointer-events-none absolute -inset-1 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(16,185,129,0.06),rgba(217,70,239,0.06),transparent)] blur-2xl" />
              <p className="relative text-sm">vCeFi for memes: commit hashed performance snapshots on Solana, selectively disclose proofs to partners, never expose full positions.</p>
            </HoverCard>
          </Reveal>
        </div>
      </div>
    </Section>
  );
};

export default Proofs;
