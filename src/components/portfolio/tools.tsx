import { Reveal } from "@/components/portfolio/reveal";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { toolCategories } from "@/data/portfolio";

export const Tools = () => (
  <section
    id="tools"
    className="scroll-mt-24 border-b border-border bg-background py-16 md:py-24"
  >
    <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
      <Reveal>
        <SectionHeading
          eyebrow="Systems & tools"
          title="Fluent in the systems your team already runs"
          description="Payer portals, EHRs, and the everyday collaboration stack — no onboarding ramp on the basics."
        />
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {toolCategories.map((category, index) => (
          <Reveal key={category.label} delay={index * 0.06}>
            <article className="group h-full rounded-[var(--radius)] border border-border bg-card p-5 shadow-subtle transition-[box-shadow,transform] duration-200 ease-out hover:-translate-y-px hover:shadow-lift">
              <span className="inline-grid h-10 w-10 place-items-center rounded-md bg-secondary text-secondary-foreground transition-colors duration-150 ease-out group-hover:bg-primary group-hover:text-primary-foreground">
                <category.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {category.label}
              </h3>
              <ul className="mt-3 space-y-2">
                {category.tools.map((tool) => (
                  <li
                    key={tool}
                    className="flex items-center gap-2 text-sm text-foreground"
                  >
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary/50"
                      aria-hidden="true"
                    />
                    {tool}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
