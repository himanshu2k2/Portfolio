"use client";

import { motion } from "motion/react";
import Section from "./Section";
import { Stagger, Item } from "./motion-primitives";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="02 — Toolkit" title="Skills & technologies">
      <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, idx) => (
          <Item
            key={group.category}
            className={idx === skills.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""}
          >
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="glass-card-interactive gradient-edge-top h-full rounded-2xl p-6"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-accent/20 to-accent-2/10 font-mono text-xs font-bold text-accent">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="text-sm font-semibold tracking-wide text-foreground uppercase">
                  {group.category}
                </h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="tag cursor-default">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </Item>
        ))}
      </Stagger>
    </Section>
  );
}
