import React from "react";
import { Reveal, Section } from "./Animate";

const Footer = () => {
  return (
    <footer className="bg-[#08090d]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          <Reveal>
            <div>
              <h4 className="text-white mb-3 font-semibold">Company</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white/90">Home</a></li>
                <li><a href="#" className="hover:text-white/90">Docs</a></li>
                <li><a href="#" className="hover:text-white/90">Contact</a></li>
                <li><a href="#" className="hover:text-white/90">Blog</a></li>
                <li><a href="#" className="hover:text-white/90">Brand Kit</a></li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.04}>
            <div>
              <h4 className="text-white mb-3 font-semibold">Product</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#features" className="hover:text-white/90">Features</a></li>
                <li><a href="#api" className="hover:text-white/90">API</a></li>
                <li><a href="#" className="hover:text-white/90">Security</a></li>
                <li><a href="#" className="hover:text-white/90">Status</a></li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div>
              <h4 className="text-white mb-3 font-semibold">Stay Updated</h4>
              <div className="flex gap-2">
                <input className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="example@email.com" />
                <button className="rounded-md bg-gradient-to-r from-emerald-500 to-fuchsia-500 px-4 text-sm font-semibold text-white">Subscribe</button>
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.12}>
          <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/60">© 2025 MEMEfiER. All rights reserved.</div>
        </Reveal>
      </div>
    </footer>
  );
};

export default Footer;
