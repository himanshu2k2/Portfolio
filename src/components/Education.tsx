"use client";

import { motion } from "motion/react";
import Section from "./Section";
import { Stagger, Item } from "./motion-primitives";
import { achievements, education } from "@/data/portfolio";
import { AwardIcon } from "./Icons";

export default function Education() {
  return (
    <Section
      id="education"
      eyebrow="05 — Background"
      title="Education & achievements"
      alt
    >
      <div className="grid gap-6 lg:grid-cols-5">
        <Stagger className="space-y-5 lg:col-span-3">
          {education.map((edu) => (
            <Item key={edu.degree}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="glass-card-interactive gradient-edge-top rounded-2xl p-6"
              >
                <p className="font-mono text-sm text-accent">{edu.period}</p>
                <h3 className="font-display mt-2 text-lg font-semibold">
                  {edu.degree.includes("(Honors)") ? (
                    <>
                      {edu.degree.replace(" (Honors)", "")}{" "}
                      <span className="font-display text-base font-bold text-gradient sm:text-lg">
                        (Honors)
                      </span>
                    </>
                  ) : (
                    edu.degree
                  )}
                </h3>
                <p className="mt-1.5 text-sm text-muted">{edu.institution}</p>
                <p className="text-sm text-muted">{edu.location}</p>
              </motion.div>
            </Item>
          ))}
        </Stagger>

        <Stagger className="lg:col-span-2">
          <Item>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="glass-card-interactive gradient-edge-top h-full rounded-2xl p-6"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent-2/25 to-accent/10 text-accent-2">
                  <AwardIcon className="h-4 w-4" />
                </span>
                <h3 className="text-sm font-semibold tracking-wide text-foreground uppercase">
                  Achievements & awards
                </h3>
              </div>
              <ul className="mt-5 space-y-4">
                {achievements.map((item, idx) => {
                  const highlight = "Runner-up";
                  const hasHighlight = item.startsWith(highlight);
                  const rest = hasHighlight ? item.slice(highlight.length) : item;

                  return (
                    <li
                      key={idx}
                      className="flex gap-3 text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-2" />
                      <span>
                        {hasHighlight ? (
                          <>
                            <span className="font-display text-base font-bold text-gradient sm:text-lg">
                              {highlight}
                            </span>
                            {rest}
                          </>
                        ) : (
                          item
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </Item>
        </Stagger>
      </div>
    </Section>
  );
}
