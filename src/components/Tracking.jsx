import React from "react";

const FeedRow = ({ text, pill }) => (
  <div className="flex items-center justify-between rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm text-white/80">
    <span>{text}</span>
    {pill && <span className="text-[10px] rounded bg-white/5 px-2 py-0.5 text-white/60">{pill}</span>}
  </div>
);

const Tracking = () => {
  return (
    <section className="border-b border-white/10 bg-[#0b0d12]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-14 sm:px-6 md:grid-cols-2 lg:px-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Real-Time Trade Tracking for Every Meme</h2>
          <p className="text-white/70">Track every order, fill, and partial fill in real-time. Watch how your TWAP, snipers, and ladder algos execute across pump.fun and Solana DEXs.</p>
          <ul className="grid gap-2 text-white/80">
            <li>Per-order execution breakdown</li>
            <li>Slippage and fee analysis</li>
            <li>Strategy-level PnL and risk metrics</li>
            <li>Exportable reports for your alpha groups</li>
          </ul>
        </div>
        <div className="space-y-2">
          <FeedRow text="$DOGCAT • BUY • pump.fun • Filled 3.2 SOL @ 0.000012" pill="FILLED" />
          <FeedRow text="$MOON • SELL • Raydium • Partial Fill 1.0 / 5.0 SOL" pill="PARTIAL" />
          <FeedRow text="$MEME • BUY • TWAP • 4/10 slices executed" pill="IN PROGRESS" />
          <FeedRow text="$FROG • SELL • Ladder • Next leg in 2m" pill="SCHEDULED" />
        </div>
      </div>
    </section>
  );
};

export default Tracking;
