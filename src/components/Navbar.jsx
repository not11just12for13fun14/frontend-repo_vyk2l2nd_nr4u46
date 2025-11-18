import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#0a0b0f]/70 backdrop-blur-md">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Glow */}
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-40">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
        </div>
        <div className="flex items-center gap-2">
          <motion.div
            initial={{ rotate: -8, scale: 0.9 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 14 }}
            className="h-8 w-8 rounded bg-gradient-to-br from-emerald-400/80 to-fuchsia-500/80 shadow-lg shadow-emerald-500/20"
          />
          <span className="text-sm font-semibold tracking-wide text-white/90">MEMEfiER</span>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          <a href="#features" className="hover:text-white/90 transition-colors">Features</a>
          <a href="#api" className="hover:text-white/90 transition-colors">API</a>
          <a href="#faq" className="hover:text-white/90 transition-colors">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#docs" className="hidden text-xs text-emerald-300/90 hover:text-emerald-200 md:inline transition-colors">View Docs</a>
          <a href="#launch" className="rounded-md bg-gradient-to-r from-emerald-500 to-fuchsia-500 px-3 py-2 text-xs font-semibold text-white shadow-lg shadow-emerald-500/20 hover:opacity-95 transition">Launch App</a>
          <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded border border-white/10 text-white/80">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
