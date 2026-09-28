"use client";

import { motion } from "motion/react";
import Section from "./Section";
import { Stagger, Item } from "./motion-primitives";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="03 — Career" title="Work experience">
      <Stagger className="relative space-y-0 pl-6 sm:pl-8">
        <motion.span
          aria-hidden
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="absolute top-2 bottom-2 left-0 w-px origin-top bg-gradient-to-b from-accent/50 via-border to-transparent"
        />

        {experiences.map((exp, index) => (
          <Item key={exp.company} className="relative pb-10 last:pb-0">
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 18,
                delay: 0.1,
              }}
              className="absolute -left-[29px] top-6 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-background sm:-left-[33px]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            </motion.span>

            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="glass-card-interactive gradient-edge-top rounded-2xl p-6 sm:ml-2"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs tracking-wider text-accent uppercase">
                    {index === 0 ? "Current role" : "Previous role"}
                  </p>
                  <h3 className="font-display mt-1 text-lg font-semibold sm:text-xl">
                    {exp.role}
                  </h3>
                  <p className="mt-0.5 font-medium text-foreground/90">
                    {exp.company}
                  </p>
                </div>
                <div className="text-right text-sm text-muted">
                  <p className="font-mono text-foreground/80">{exp.period}</p>
                  <p>{exp.location}</p>
                </div>
              </div>

              <ul className="mt-5 space-y-2.5">
                {exp.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex gap-3 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-2" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </Item>
        ))}
      </Stagger>
    </Section>
  );
}
