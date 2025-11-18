import React from "react";
import { Reveal, Section, HoverCard } from "./Animate";

const QA = ({ q, a, delay = 0 }) => (
  <Reveal delay={delay}>
    <HoverCard>
      <div className="rounded-xl border border-white/10 bg-[#0b0d12] p-5">
        <div className="font-medium text-white">{q}</div>
        <p className="text-white/70 text-sm mt-1">{a}</p>
      </div>
    </HoverCard>
  </Reveal>
);

const FAQ = () => {
  return (
    <Section className="border-b border-white/10 bg-[#0a0b0f]" id="faq">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Frequently Asked Questions</h2>
        </Reveal>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <QA q="Is MEMEfiER custodial?" a="No. MEMEfiER is fully non-custodial. You connect your Solana wallet and trades execute directly from your addresses." />
          <QA q="Which wallets do you support?" a="Popular wallets like Phantom, Backpack, Solflare, OKX Wallet, and more." delay={0.04} />
          <QA q="Does this only work on pump.fun?" a="We support pump.fun and major Solana DEXs including Raydium and Orca." delay={0.08} />
          <QA q="Do I need to know how to code?" a="No. The UI lets you create strategies visually. Coding is optional for the API." delay={0.12} />
          <QA q="Is there a fee to use the platform?" a="We use simple pricing: subscription + optional performance or per-order fees depending on plan." delay={0.16} />
          <QA q="Can I run my own instance?" a="Yes. Pro users can self-host the core engine for privacy and custom routing." delay={0.2} />
          <QA q="Is this compliant with Solana gas/fees?" a="Yes. All execution is optimized for Solana’s low fees and fast finality." delay={0.24} />
          <QA q="How do you protect from MEV?" a="We apply venue- and pool-aware execution, sizing, and slippage controls to reduce toxic fills and MEV exposure." delay={0.28} />
        </div>
      </div>
    </Section>
  );
};

export default FAQ;
