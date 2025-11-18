import React from "react";

const Badge = ({ label }) => (
  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-white/80">
    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
    {label}
  </div>
);

const Proofs = () => {
  return (
    <section className="border-b border-white/10 bg-[#0a0b0f]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">Verifiable On-Chain Performance</h2>
        <p className="mt-1 text-white/70">Prove your edge without doxxing your strategy.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="space-y-3 text-white/70">
            <p>Anchor your trading history on-chain as cryptographic proofs.</p>
            <p>Share PnL and performance badges without revealing your full strategy or wallet cluster.</p>
            <p>Perfect for signal sellers, copy-trading communities, and memecoin funds.</p>
            <div className="mt-2 flex flex-wrap gap-2">
              <Badge label="PnL Verified" />
              <Badge label="Drawdown Tracked" />
              <Badge label="On-Chain Signed" />
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-black/30 p-6 text-white/70">
            <p className="text-sm">vCeFi for memes: commit hashed performance snapshots on Solana, selectively disclose proofs to partners, never expose full positions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proofs;
