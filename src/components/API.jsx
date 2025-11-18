import React from "react";
import { Reveal, Section, HoverCard } from "./Animate";

const CodeBlock = () => (
  <div className="relative">
    <div className="pointer-events-none absolute -inset-1 rounded-xl bg-gradient-to-r from-emerald-500/20 to-fuchsia-500/20 blur" />
    <pre className="relative rounded-lg border border-white/10 bg-black/60 p-4 text-[12px] leading-relaxed text-emerald-200 overflow-x-auto">
{`// Example: create a TWAP buy on a pump.fun memecoin
POST /api/v1/orders
{
  "venue": "pump.fun",
  "token": "$FROG",
  "side": "buy",
  "size_sol": 10,
  "algo": "twap",
  "duration_sec": 300
}
`}
    </pre>
  </div>
);

const APISection = () => {
  return (
    <Section className="border-b border-white/10 bg-[#0b0d12]" id="api">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-16 sm:px-6 md:grid-cols-2 lg:px-8">
        <div className="space-y-4">
          <Reveal>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">API-First Trading Engine for Power Users</h2>
          </Reveal>
          <Reveal delay={0.04}><p className="text-white/70">Scale your Solana memecoin trading with our REST and WebSocket APIs. Build custom strategies, plug into your own bots, or self-host the core engine for full privacy and control.</p></Reveal>
          <ul className="grid gap-2 text-white/80">
            <Reveal as="li">REST & WebSocket API access</Reveal>
            <Reveal as="li" delay={0.04}>Programmatic order submission to pump.fun & DEXs</Reveal>
            <Reveal as="li" delay={0.08}>Webhooks for fills, liquidations, and PnL events</Reveal>
            <Reveal as="li" delay={0.12}>Self-hostable engine (optional)</Reveal>
          </ul>
        </div>
        <Reveal delay={0.06}>
          <HoverCard>
            <CodeBlock />
            <p className="mt-2 text-xs text-white/60">Turn ideas into executable strategies with a single API call.</p>
          </HoverCard>
        </Reveal>
      </div>
    </Section>
  );
};

export default APISection;
