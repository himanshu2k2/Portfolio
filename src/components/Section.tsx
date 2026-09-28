import { Reveal } from "./motion-primitives";

type SectionProps = {
  id: string;
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
  className?: string;
  alt?: boolean;
};

export default function Section({
  id,
  title,
  eyebrow,
  children,
  className = "",
  alt = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 ${alt ? "section-alt" : ""} ${className}`}
    >
      <Reveal className="mb-12">
        {eyebrow && (
          <p className="mb-3 font-mono text-xs tracking-[0.2em] text-accent uppercase sm:text-sm">
            {eyebrow}
          </p>
        )}
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem]">
          {title}
        </h2>
        <div className="mt-5 flex items-center gap-3">
          <div className="h-1 w-14 rounded-full bg-gradient-to-r from-accent to-accent-2" />
          <div className="h-px flex-1 max-w-32 bg-border" />
        </div>
      </Reveal>
      {children}
    </section>
  );
}
