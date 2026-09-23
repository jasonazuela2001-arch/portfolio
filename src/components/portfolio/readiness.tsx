import { Reveal } from "@/components/portfolio/reveal";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { readiness } from "@/data/portfolio";

export const Readiness = () => (
  <section
    id="readiness"
    className="scroll-mt-24 border-b border-border bg-background py-16 md:py-24"
  >
    <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
      <Reveal>
        <SectionHeading
          eyebrow="Remote work readiness"
          title="Set up so the shift never drops"
          description="Redundant connectivity and power, a quiet dedicated workspace, and full-time availability across US, UK, and AU business hours."
        />
      </Reveal>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {readiness.map((item, index) => (
          <Reveal as="li" key={item.label} delay={index * 0.06} className="h-full">
            <article className="group h-full rounded-[var(--radius)] border border-border bg-card p-5 shadow-subtle transition-[box-shadow,transform] duration-200 ease-out hover:-translate-y-px hover:shadow-lift">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-md bg-accent text-accent-foreground transition-colors duration-150 ease-out group-hover:bg-primary group-hover:text-primary-foreground">
                  <item.icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {item.label}
                </h3>
              </div>
              <ul className="mt-4 space-y-2">
                {item.lines.map((line) => (
                  <li
                    key={line}
                    className="flex gap-2.5 text-sm leading-6 text-foreground"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/50"
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </ul>
    </div>
  </section>
);
