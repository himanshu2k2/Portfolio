"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

const easeOut = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: easeOut } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easeOut },
  },
};

export const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const noMotion: Variants = {
  hidden: { opacity: 1 },
  show: { opacity: 1 },
};

function useMotionVariants(variants: Variants): Variants {
  const reduced = useReducedMotion();
  return reduced ? noMotion : variants;
}

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  amount?: number;
  once?: boolean;
};

export function Reveal({
  children,
  className,
  variants = fadeUp,
  delay = 0,
  amount = 0.2,
  once = true,
}: RevealProps) {
  const activeVariants = useMotionVariants(variants);

  return (
    <motion.div
      className={className}
      variants={activeVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = {
  children: React.ReactNode;
  className?: string;
  amount?: number;
  once?: boolean;
};

export function Stagger({
  children,
  className,
  amount = 0.15,
  once = true,
}: StaggerProps) {
  const activeVariants = useMotionVariants(container);

  return (
    <motion.div
      className={className}
      variants={activeVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  );
}

type ItemProps = {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
};

export function Item({ children, className, variants = fadeUp }: ItemProps) {
  const activeVariants = useMotionVariants(variants);

  return (
    <motion.div className={className} variants={activeVariants}>
      {children}
    </motion.div>
  );
}
