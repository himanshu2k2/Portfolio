"use client";

import { motion, useReducedMotion } from "motion/react";

export default function Background() {
  const reduced = useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="bg-dot-grid absolute inset-0 opacity-40" />

      <motion.div
        aria-hidden
        className="absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-[120px]"
        animate={
          reduced ? undefined : { x: [0, 60, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }
        }
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute top-1/3 -right-24 h-[26rem] w-[26rem] rounded-full bg-accent-2/12 blur-[120px]"
        animate={
          reduced ? undefined : { x: [0, -50, 0], y: [0, 60, 0], scale: [1, 1.1, 1] }
        }
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-0 left-1/3 h-[22rem] w-[22rem] rounded-full bg-accent/8 blur-[120px]"
        animate={
          reduced ? undefined : { x: [0, 40, 0], y: [0, -40, 0], scale: [1, 1.2, 1] }
        }
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent"
      />
    </div>
  );
}
