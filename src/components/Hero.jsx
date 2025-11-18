import React from "react";

const TerminalRow = ({ token, venue, action, tag, status }) => (
  <div className="flex items-center justify-between rounded-md border border-white/10 bg-black/40 px-3 py-2">
    <div className="flex items-center gap-2">
      <span className="text-emerald-300 font-mono">{token}</span>
      <span className="text-[10px] rounded bg-white/5 px-2 py-0.5 text-white/60">{venue}</span>
      <span className="text-[10px] rounded bg-fuchsia-500/15 px-2 py-0.5 text-fuchsia-300/90">{action}</span>
    </div>
    <div className="flex items-center gap-2">
      {status && <span className="text-[10px] rounded bg-emerald-500/15 px-2 py-0.5 text-emerald-300">{status}</span>}
      {tag && <span className="text-[10px] rounded bg-white/5 px-2 py-0.5 text-white/60">{tag}</span>}
    </div>
  </div>
);

const Hero = () => {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#0a0b0f]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(120,255,214,0.12),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(217,70,239,0.12),transparent_40%)]" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:px-8 lg:py-20">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Algorithmic Trading Terminal for Solana Memecoins
          </h1>
          <p className="max-w-xl text-white/70">
            Supercharge your pump.fun and Solana DEX trading with battle-tested execution algos built for memecoins.
          </p>
          <ul className="grid gap-2 text-sm text-white/70">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"/>Snipe new pump.fun launches in milliseconds</li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-fuchsia-400"/>Automate entries, DCA, and exits across multiple Solana wallets</li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-400"/>Optimize for slippage, MEV, and liquidity in thin memecoin pools</li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-400"/>Turn your degen ideas into rules-based execution</li>
          </ul>
          <div className="flex items-center gap-3">
            <a href="#" className="rounded-md bg-gradient-to-r from-emerald-500 to-fuchsia-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 hover:opacity-95">Launch App</a>
            <a href="#" className="text-sm text-emerald-300/90 hover:text-emerald-200">View Docs</a>
          </div>
          <p className="text-xs text-white/50">No KYC. Connect Solana wallet. Trade directly from your own addresses.</p>
        </div>
        <div className="">
          <div className="rounded-xl border border-white/10 bg-black/50 p-4 shadow-2xl shadow-emerald-500/10">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2 text-white/70">
                <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>
                <span className="text-xs">Order Blotter</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] rounded bg-white/5 px-2 py-0.5 text-white/60">Solana</span>
                <span className="text-[10px] rounded bg-white/5 px-2 py-0.5 text-white/60">pump.fun</span>
              </div>
            </div>
            <div className="grid gap-2">
              <TerminalRow token="$FROG" venue="pump.fun" action="Sniper BUY" tag="LIVE" status="PNL +214%" />
              <TerminalRow token="$MOON" venue="Raydium" action="TWAP BUY" tag="FILLED" status="" />
              <TerminalRow token="$DEGEN" venue="pump.fun" action="Ladder SELL" tag="PENDING" status="" />
              <TerminalRow token="$DOGCAT" venue="Orca" action="VWAP BUY" tag="LIVE" status="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
