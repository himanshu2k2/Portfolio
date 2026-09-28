"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { profile } from "@/data/portfolio";
import {
  ArrowDownIcon,
  ExternalIcon,
  GitHubIcon,
  LinkedInIcon,
  LocationIcon,
  MailIcon,
} from "./Icons";

const roles = [
  "Frontend Developer",
  "Next.js & React Engineer",
  "Full-Stack (MERN) Developer",
  "UI-focused Builder",
];

const techStack = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function RoleRotator() {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % roles.length);
    }, 2800);
    return () => clearInterval(id);
  }, [reduced]);

  if (reduced) {
    return <span className="text-gradient">{roles[0]}</span>;
  }

  return (
    <span className="relative inline-flex h-[1.4em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-gradient"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <section
      id="home"
      className="bg-grid relative flex min-h-[100dvh] items-center"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-5 py-28 text-center sm:px-8 lg:py-32"
      >
        <motion.div
          variants={item}
          className="relative flex items-center justify-center"
        >
          {!reduced && (
            <>
              <motion.div
                aria-hidden
                className="absolute h-64 w-64 rounded-full bg-gradient-to-tr from-accent/40 to-accent-2/40 blur-3xl"
                animate={{ opacity: [0.3, 0.55, 0.3], scale: [1, 1.06, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                aria-hidden
                className="absolute h-64 w-64 rounded-full border border-accent/25"
                animate={{ rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                style={{
                  maskImage:
                    "linear-gradient(transparent, white, transparent, transparent)",
                  WebkitMaskImage:
                    "linear-gradient(transparent, white, transparent, transparent)",
                }}
              />
            </>
          )}

          <motion.div
            whileHover={reduced ? undefined : { scale: 1.03 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="relative h-40 w-40 overflow-hidden rounded-full border border-border-strong bg-card shadow-[0_0_80px_-12px] shadow-accent/30 sm:h-48 sm:w-48"
          >
            <Image
              src={profile.avatar}
              alt={`Portrait of ${profile.name}`}
              fill
              priority
              sizes="(max-width: 640px) 10rem, 12rem"
              className="object-cover"
            />
          </motion.div>
        </motion.div>

        <div className="flex flex-col items-center">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card/80 px-4 py-2 text-sm text-muted backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              {!reduced && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              )}
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for opportunities
          </motion.span>

          <motion.p
            variants={item}
            className="mt-8 font-mono text-sm tracking-widest text-muted uppercase"
          >
            Portfolio · {new Date().getFullYear()}
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m{" "}
            <span className="text-gradient">{profile.name.split(" ")[0]}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 text-xl font-medium sm:text-2xl lg:text-[1.75rem]"
          >
            <RoleRotator />
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-6 flex flex-wrap items-center justify-center gap-2"
          >
            {techStack.map((tech) => (
              <span key={tech} className="tag">
                {tech}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={item}
            className="mt-5 flex items-center justify-center gap-2 text-sm text-muted"
          >
            <LocationIcon className="h-4 w-4 shrink-0 text-accent" />
            {profile.location}
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={reduced ? undefined : { scale: 1.03 }}
              whileTap={reduced ? undefined : { scale: 0.97 }}
              className="btn-primary"
            >
              Get in touch
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={reduced ? undefined : { scale: 1.03 }}
              whileTap={reduced ? undefined : { scale: 0.97 }}
              className="btn-secondary"
            >
              View projects
              {!reduced && (
                <motion.span
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowDownIcon className="h-4 w-4" />
                </motion.span>
              )}
            </motion.a>
            <motion.a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              whileHover={reduced ? undefined : { scale: 1.03 }}
              whileTap={reduced ? undefined : { scale: 0.97 }}
              className="btn-secondary"
            >
              Resume
              <ExternalIcon className="h-4 w-4" />
            </motion.a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 flex items-center justify-center gap-3"
          >
            {[
              { href: profile.socials.github, label: "GitHub profile", Icon: GitHubIcon },
              {
                href: profile.socials.linkedin,
                label: "LinkedIn profile",
                Icon: LinkedInIcon,
              },
              { href: `mailto:${profile.email}`, label: "Send email", Icon: MailIcon },
            ].map(({ href, label, Icon }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                whileHover={reduced ? undefined : { y: -3 }}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent/40 hover:text-foreground"
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {!reduced && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          aria-hidden
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-9 w-5 items-start justify-center rounded-full border border-border-strong p-1"
          >
            <span className="h-1.5 w-1 rounded-full bg-accent" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
