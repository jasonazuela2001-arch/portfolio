import { Languages as LanguagesIcon } from "lucide-react";

import { Reveal } from "@/components/portfolio/reveal";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { credentials, languages, profile } from "@/data/portfolio";

export const About = () => (
  <section
    id="about"
    className="scroll-mt-24 border-b border-border bg-background py-16 md:py-24"
  >
    <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
      <Reveal>
        <SectionHeading
          eyebrow="About me"
          title="Behind every clean claim is a careful first conversation."
          description={profile.summary}
        />
      </Reveal>

      <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
        <div className="space-y-5">
          {profile.about.map((paragraph, index) => (
            <Reveal key={paragraph.slice(0, 24)} delay={index * 0.06}>
              <p className="max-w-[68ch] text-base leading-7 text-muted-foreground">
                {paragraph}
              </p>
            </Reveal>
          ))}

          <Reveal delay={0.18}>
            <div className="mt-8 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                <LanguagesIcon className="h-3.5 w-3.5" aria-hidden="true" />
                {languages.map((language) => `${language.name} — ${language.level}`).join(" · ")}
              </span>
              {["Healthcare", "Travel", "Telecommunications"].map((industry) => (
                <span
                  key={industry}
                  className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground transition-colors duration-150 ease-out hover:border-primary/40 hover:text-foreground"
                >
                  {industry}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="space-y-4">
          {credentials.map((credential, index) => (
            <Reveal key={credential.title} delay={0.06 * index}>
              <article className="group rounded-[var(--radius)] border border-border bg-card p-5 shadow-subtle transition-shadow duration-200 ease-out hover:shadow-card">
                <span className="inline-grid h-9 w-9 place-items-center rounded-md bg-secondary text-secondary-foreground transition-colors duration-150 ease-out group-hover:bg-primary group-hover:text-primary-foreground">
                  <credential.icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <h3 className="mt-3 text-base font-semibold text-foreground">
                  {credential.title}
                </h3>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  {credential.detail}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);
