import React from "react";

const Step = ({ step, title, text }) => (
  <div className="rounded-xl border border-white/10 bg-[#0b0d12] p-6">
    <div className="text-xs text-emerald-300/90">Step {step}</div>
    <div className="text-white font-medium">{title}</div>
    <p className="text-white/70 text-sm mt-1">{text}</p>
  </div>
);

const HowItWorks = () => {
  return (
    <section className="border-b border-white/10 bg-[#0a0b0f]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">Start Trading in Minutes</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Step step={1} title="Connect Your Wallet" text="Connect your Solana wallet (Phantom, Backpack, etc.). No signup forms, no KYC." />
          <Step step={2} title="Select or Build a Strategy" text="Pick a pre-built algo for pump.fun and DEXs or define your own rules and conditions." />
          <Step step={3} title="Deploy and Monitor" text="Hit go, watch orders execute in real-time, and adjust parameters as the market moves." />
        </div>
        <p className="mt-3 text-xs text-white/60">MEMEfiER is a non-custodial tool. You always control your funds.</p>
      </div>
    </section>
  );
};

export default HowItWorks;
