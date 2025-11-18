import React from "react";

const Stat = ({ value, label }) => (
  <div className="rounded-xl border border-white/10 bg-[#0a0b0f] p-6">
    <div className="text-2xl font-bold text-white">{value}</div>
    <div className="text-xs text-white/60">{label}</div>
  </div>
);

const Stats = () => {
  return (
    <section className="border-b border-white/10 bg-[#0a0b0f]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <h3 className="mb-6 text-center text-2xl font-semibold text-white sm:text-3xl">Aggregated. Fast. Battle-Tested.</h3>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          <Stat value="12+" label="Integrated Solana venues & liquidity sources" />
          <Stat value="50,000+" label="Orders executed" />
          <Stat value="4,000+" label="Memecoins traded" />
          <Stat value="XXM+" label="Total volume routed" />
        </div>
        <p className="mt-4 text-center text-xs text-white/60">Numbers are constantly growing as more Solana degens plug their strategies into MEMEfiER.</p>
      </div>
    </section>
  );
};

export default Stats;
