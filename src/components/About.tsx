import Section from "./Section";
import { Reveal, Stagger, Item, scaleIn } from "./motion-primitives";
import { profile } from "@/data/portfolio";

const highlights = [
  { value: "MCA", label: "Postgraduate", accent: "from-accent/20 to-accent/5" },
  { value: "2+", label: "Internships", accent: "from-accent-2/20 to-accent-2/5" },
  { value: "4+", label: "Projects shipped", accent: "from-accent/20 to-accent-2/10" },
  { value: "Live", label: "Client websites", accent: "from-accent-2/20 to-accent/5" },
];

export default function About() {
  return (
    <Section id="about" eyebrow="01 — Intro" title="About me" alt>
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-7">
          <div className="glass-card rounded-2xl p-6 sm:p-8 lg:rounded-3xl">
            <p className="text-lg leading-[1.75] text-muted sm:text-xl">
              {profile.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Next.js", "React", "TypeScript", "MERN", "Tailwind"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-border bg-background/50 px-3 py-1.5 font-mono text-xs text-accent sm:text-sm"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
        </Reveal>

        <Stagger className="grid grid-cols-2 gap-4 lg:col-span-5">
          {highlights.map((h) => (
            <Item key={h.label} variants={scaleIn}>
              <div
                className={`glass-card-interactive gradient-edge-top flex h-full flex-col items-center justify-center rounded-2xl p-5 text-center sm:p-6`}
              >
                <div
                  className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${h.accent}`}
                >
                  <span className="h-2 w-2 rounded-full bg-accent" />
                </div>
                <p className="font-display text-2xl font-bold text-gradient sm:text-3xl">
                  {h.value}
                </p>
                <p className="mt-1.5 text-sm text-muted">{h.label}</p>
              </div>
            </Item>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
