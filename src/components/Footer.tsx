import { profile } from "@/data/portfolio";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card-solid/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8">
        <div className="text-center sm:text-left">
          <p className="font-display text-sm font-medium text-foreground">
            {profile.name}
          </p>
          <p className="mt-1 text-sm text-muted">
            © {new Date().getFullYear()} · Built with Next.js & Tailwind CSS
          </p>
        </div>
        <div className="flex items-center gap-2">
          {[
            { href: profile.socials.github, label: "GitHub", Icon: GitHubIcon },
            { href: profile.socials.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
            { href: `mailto:${profile.email}`, label: "Email", Icon: MailIcon },
          ].map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent/35 hover:text-foreground"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
