"use client";

import { motion } from "motion/react";
import Section from "./Section";
import { Stagger, Item } from "./motion-primitives";
import { projects, type Project } from "@/data/portfolio";
import { ExternalIcon, GitHubIcon } from "./Icons";

function ProjectLinks({ project }: { project: Project }) {
  if (!project.liveUrl && !project.githubUrl) return null;

  return (
    <div className="flex shrink-0 items-center gap-2">
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${project.title} live site`}
          className="inline-flex h-10 items-center gap-1.5 rounded-full border border-accent/35 bg-accent/5 px-4 text-sm font-medium text-accent transition-colors hover:bg-accent/10"
        >
          View Live
          <ExternalIcon className="h-3.5 w-3.5" />
        </a>
      )}
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} source on GitHub`}
          title="View source on GitHub"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent/40 hover:text-foreground"
        >
          <GitHubIcon className="h-5 w-5" />
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <Section id="projects" eyebrow="04 — Work" title="Featured projects" alt>
      <Stagger className="grid gap-5 lg:grid-cols-2">
        <Item className="lg:col-span-2">
          <motion.article
            whileHover={{ y: -6 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="glass-card-interactive gradient-edge-top group relative overflow-hidden rounded-2xl p-6 sm:p-8 lg:rounded-3xl"
          >
            <div className="absolute top-4 right-4">
              <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                Featured
              </span>
            </div>

            <div className="max-w-3xl">
              <h3 className="font-display text-xl font-semibold transition-colors group-hover:text-accent sm:text-2xl">
                {featured.title}
              </h3>
              <p className="mt-2 text-muted">{featured.description}</p>
            </div>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {featured.points.map((point, idx) => (
                <li
                  key={idx}
                  className="flex gap-3 text-sm leading-relaxed text-muted"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {featured.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border bg-background/60 px-2.5 py-1 font-mono text-xs text-accent-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <ProjectLinks project={featured} />
            </div>
          </motion.article>
        </Item>

        {rest.map((project) => (
          <Item key={project.title} className="h-full">
            <motion.article
              whileHover={{ y: -6 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="glass-card-interactive gradient-edge-top group flex h-full flex-col rounded-2xl p-6"
            >
              <h3 className="font-display text-lg font-semibold transition-colors group-hover:text-accent">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{project.description}</p>

              <ul className="mt-4 flex-1 space-y-2.5">
                {project.points.slice(0, 2).map((point, idx) => (
                  <li
                    key={idx}
                    className="flex gap-3 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-2" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex items-end justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border bg-background/60 px-2.5 py-1 font-mono text-xs text-accent-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <ProjectLinks project={project} />
              </div>
            </motion.article>
          </Item>
        ))}
      </Stagger>
    </Section>
  );
}
