import React from "react";

const Advantage = () => {
  return (
    <section className="border-b border-white/10 bg-[#0b0d12]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-14 sm:px-6 md:grid-cols-2 lg:px-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Your Edge in the Solana Memecoin Casino</h2>
          <p className="text-white/70">Stop manually spamming pump.fun. Let execution algorithms work the chaos for you.</p>
          <p className="text-white/70">
            With memecoins on Solana, timing is everything. One bad entry can ruin your entire PnL.
          </p>
          <p className="text-white/70">
            MEMEfiER routes and executes your trades using pre-built and custom algos, so you get consistent execution instead of emotional panic-clicking.
          </p>
          <p className="text-white/70">
            Whether you’re sniping new launches or managing bags through multiple exits, the engine handles the micro-decisions for you.
          </p>
        </div>
        <div className="grid gap-3 self-start rounded-xl border border-white/10 bg-black/30 p-5">
          <div className="text-white/80">• Smarter entries on low-liquidity pairs</div>
          <div className="text-white/80">• Automated scaling in/out</div>
          <div className="text-white/80">• Execution tuned for Solana fees and speed</div>
          <div className="text-white/80">• Backtested logic for pump.fun-style curves</div>
        </div>
      </div>
    </section>
  );
};

export default Advantage;
