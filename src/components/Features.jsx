import React from "react";

const FeatureCard = ({ title, description }) => (
  <div className="rounded-xl border border-white/10 bg-[#0b0d12] p-6">
    <h4 className="text-white mb-1 font-medium">{title}</h4>
    <p className="text-white/70 text-sm">{description}</p>
  </div>
);

const Features = () => {
  return (
    <section className="border-b border-white/10 bg-[#0a0b0f]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">From Idea to Execution</h2>
        <p className="text-white/70">Complex memecoin strategies. Simple setup.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <FeatureCard title="Algo Orders" description="Use pre-built algos like sniper, TWAP, VWAP, ladder, and stop hunts tuned for Solana memecoins." />
          <FeatureCard title="Multi-Orders" description="Fire orders across multiple tokens and wallets in one action. Build baskets of degen plays with one click." />
          <FeatureCard title="AI Strategy Suggestions" description="Describe your idea in plain English, and let the engine suggest a rules-based strategy – including entries, exits, risk, and sizing." />
        </div>
        <div className="mt-4">
          <a href="#" className="text-sm text-emerald-300/90 hover:text-emerald-200">Explore all features →</a>
        </div>
      </div>
    </section>
  );
};

export default Features;
