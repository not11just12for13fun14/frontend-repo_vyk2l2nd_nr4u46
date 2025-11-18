import React from "react";

const FinalCTA = () => {
  return (
    <section className="border-b border-white/10 bg-[#0b0d12]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">Level the Playing Field in Solana Memecoins</h2>
        <p className="mt-1 text-white/70">Memes move fast. Your trading should move faster.</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a href="#" className="rounded-md bg-gradient-to-r from-emerald-500 to-fuchsia-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 hover:opacity-95">Launch App</a>
          <a href="#" className="text-sm text-emerald-300/90 hover:text-emerald-200">Request a demo (for funds / groups)</a>
        </div>
        <p className="mt-3 text-xs text-white/60">A new generation of institutional-grade execution for the most degen corner of crypto.</p>
      </div>
    </section>
  );
};

export default FinalCTA;
