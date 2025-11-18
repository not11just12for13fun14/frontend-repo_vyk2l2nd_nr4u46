import React from "react";
import { motion } from "framer-motion";

export const fadeIn = (direction = "up", delay = 0) => {
  const y = direction === "up" ? 24 : direction === "down" ? -24 : 0;
  const x = direction === "left" ? 24 : direction === "right" ? -24 : 0;
  return {
    hidden: { opacity: 0, y, x, filter: "blur(4px)" },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
    },
  };
};

export const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export const Reveal = ({ as: As = motion.div, children, delay = 0, direction = "up", className = "" }) => (
  <As variants={fadeIn(direction, delay)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className={className}>
    {children}
  </As>
);

export const Section = ({ children, className = "" }) => (
  <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className={className}>
    {children}
  </motion.section>
);

export const HoverCard = ({ children, className = "" }) => (
  <motion.div
    whileHover={{ y: -4, scale: 1.01 }}
    transition={{ type: "spring", stiffness: 300, damping: 18 }}
    className={className}
  >
    {children}
  </motion.div>
);
