import React from "react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#0a0b0f]/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded bg-gradient-to-br from-emerald-400/80 to-fuchsia-500/80" />
          <span className="text-sm font-semibold tracking-wide text-white/90">MEMEfiER</span>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          <a href="#" className="hover:text-white/90">Docs</a>
          <a href="#" className="hover:text-white/90">Blog</a>
          <a href="#" className="hover:text-white/90">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#" className="hidden text-xs text-emerald-300/90 hover:text-emerald-200 md:inline">View Docs</a>
          <a href="#" className="rounded-md bg-gradient-to-r from-emerald-500 to-fuchsia-500 px-3 py-2 text-xs font-semibold text-white shadow-lg shadow-emerald-500/20 hover:opacity-95">Launch App</a>
          <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded border border-white/10 text-white/80">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
