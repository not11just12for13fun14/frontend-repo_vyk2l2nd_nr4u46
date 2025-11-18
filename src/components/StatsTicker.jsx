import React, { useEffect, useRef } from "react";

// Lightweight number ticker without extra deps
export default function StatsTicker({ from = 0, to = 1000, duration = 1400, prefix = "", suffix = "" }) {
  const ref = useRef(null);
  useEffect(() => {
    const start = performance.now();
    const step = (now) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = Math.floor(from + (to - from) * eased);
      if (ref.current) ref.current.textContent = `${prefix}${val.toLocaleString()}${suffix}`;
      if (p < 1) requestAnimationFrame(step);
    };
    const id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, [from, to, duration, prefix, suffix]);
  return <span ref={ref}>{prefix}{from.toLocaleString()}{suffix}</span>;
}
