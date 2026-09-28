"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import Section from "./Section";
import { Reveal, Stagger, Item } from "./motion-primitives";
import { profile } from "@/data/portfolio";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "./Icons";

const phoneDigits = profile.phone.replace(/\D/g, "");

const sayHelloOptions = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: MailIcon,
  },
  {
    label: "Mobile",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    Icon: PhoneIcon,
  },
  {
    label: "LinkedIn",
    value: "Message on LinkedIn",
    href: profile.socials.linkedin,
    Icon: LinkedInIcon,
  },
  {
    label: "WhatsApp",
    value: profile.phone,
    href: `https://wa.me/${phoneDigits}`,
    Icon: WhatsAppIcon,
  },
];

export default function Contact() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const items = [
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: <MailIcon className="h-5 w-5" />,
    },
    {
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, "")}`,
      icon: <PhoneIcon className="h-5 w-5" />,
    },
    {
      label: "GitHub",
      value: "github.com/himanshu2k2",
      href: profile.socials.github,
      icon: <GitHubIcon className="h-5 w-5" />,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/himanshu-tiwari",
      href: profile.socials.linkedin,
      icon: <LinkedInIcon className="h-5 w-5" />,
    },
  ];

  return (
    <Section id="contact" eyebrow="06 — Contact" title="Let's work together">
      <Reveal>
        <div className="glass-card max-w-2xl rounded-2xl p-6 sm:p-8">
          <p className="text-lg leading-relaxed text-muted">
            I&apos;m open to frontend and full-stack roles, freelance projects, and
            collaborations. Feel free to reach out — I&apos;ll get back to you soon.
          </p>
        </div>
      </Reveal>

      <Stagger className="mt-8 grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <Item key={item.label}>
            <motion.a
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="glass-card-interactive gradient-edge-top flex min-h-[4.5rem] items-center gap-4 rounded-2xl p-5"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent/15 to-accent-2/10 text-accent">
                {item.icon}
              </span>
              <span className="min-w-0">
                <span className="block text-sm text-muted">{item.label}</span>
                <span className="block truncate font-medium">{item.value}</span>
              </span>
            </motion.a>
          </Item>
        ))}
      </Stagger>

      <Reveal delay={0.15}>
        <div className="mt-12 text-center">
          <motion.button
            type="button"
            onClick={() => setOpen(true)}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="btn-primary px-10"
          >
            Say hello
          </motion.button>
        </div>
      </Reveal>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <>
                <motion.button
                  type="button"
                  aria-label="Close contact options"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm"
                  onClick={() => setOpen(false)}
                />
                <motion.div
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="say-hello-title"
                  initial={{ opacity: 0, scale: 0.95, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 12 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="glass-card fixed top-1/2 left-1/2 z-[71] w-[min(90vw,22rem)] -translate-x-1/2 -translate-y-1/2 rounded-2xl p-6 shadow-2xl"
                >
                  <h3
                    id="say-hello-title"
                    className="font-display text-lg font-semibold"
                  >
                    Say hello
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    Choose how you&apos;d like to reach me
                  </p>

                  <ul className="mt-5 space-y-3">
                    {sayHelloOptions.map(({ label, value, href, Icon }) => (
                      <li key={label}>
                        <a
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel="noreferrer"
                          onClick={() => setOpen(false)}
                          className="glass-card-interactive gradient-edge-top flex items-center gap-3 rounded-xl p-4 transition-colors"
                        >
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-accent/15 to-accent-2/10 text-accent">
                            <Icon className="h-5 w-5" />
                          </span>
                          <span className="min-w-0 text-left">
                            <span className="block text-sm text-muted">{label}</span>
                            <span className="block truncate text-sm font-medium">
                              {value}
                            </span>
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="btn-secondary mt-5 w-full"
                  >
                    Close
                  </button>
                </motion.div>
              </>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </Section>
  );
}
