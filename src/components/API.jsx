import React from "react";

const CodeBlock = () => (
  <pre className="rounded-lg border border-white/10 bg-black/60 p-4 text-[12px] leading-relaxed text-emerald-200 overflow-x-auto">
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
);

const APISection = () => {
  return (
    <section className="border-b border-white/10 bg-[#0b0d12]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-14 sm:px-6 md:grid-cols-2 lg:px-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">API-First Trading Engine for Power Users</h2>
          <p className="text-white/70">Scale your Solana memecoin trading with our REST and WebSocket APIs. Build custom strategies, plug into your own bots, or self-host the core engine for full privacy and control.</p>
          <ul className="grid gap-2 text-white/80">
            <li>REST & WebSocket API access</li>
            <li>Programmatic order submission to pump.fun & DEXs</li>
            <li>Webhooks for fills, liquidations, and PnL events</li>
            <li>Self-hostable engine (optional)</li>
          </ul>
        </div>
        <div>
          <CodeBlock />
          <p className="mt-2 text-xs text-white/60">Turn ideas into executable strategies with a single API call.</p>
        </div>
      </div>
    </section>
  );
};

export default APISection;
