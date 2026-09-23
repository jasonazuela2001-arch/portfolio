import { Check } from "lucide-react";

import { Reveal } from "@/components/portfolio/reveal";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { skillGroups } from "@/data/portfolio";

const HIGHLIGHTED = new Set([
  "HIPAA Compliant Records Handling",
  "Insurance Verification & Eligibility",
  "Patient Pre-Appointment Registration",
]);

export const Skills = () => (
  <section
    id="skills"
    className="scroll-mt-24 border-b border-border bg-secondary/40 py-16 md:py-24"
  >
    <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
      <Reveal>
        <SectionHeading
          eyebrow="Core expertise"
          title="What I handle end-to-end"
          description="Ten core competencies built across three years of healthcare, travel, and telecommunications accounts. Select a group to see how the work breaks down."
        />
      </Reveal>

      <Reveal>
        <Tabs defaultValue={skillGroups[0].id} className="w-full">
          <TabsList className="h-auto w-full flex-wrap justify-start gap-1 rounded-[var(--radius)] border border-border bg-card p-1.5 shadow-subtle sm:w-auto">
            {skillGroups.map((group) => (
              <TabsTrigger
                key={group.id}
                value={group.id}
                className="gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors duration-150 ease-out data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground data-[state=active]:shadow-none"
              >
                <group.icon className="h-4 w-4" aria-hidden="true" />
                {group.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {skillGroups.map((group) => (
            <TabsContent
              key={group.id}
              value={group.id}
              className="mt-6 focus-visible:outline-none"
            >
              <div className="rounded-[var(--radius)] border border-border bg-card p-6 shadow-subtle md:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {group.label}
                  </h3>
                  <p className="text-sm text-muted-foreground">{group.blurb}</p>
                </div>

                <ul className="mt-6 flex flex-wrap gap-2.5">
                  {group.skills.map((skill, index) => {
                    const highlighted = HIGHLIGHTED.has(skill);
                    return (
                      <li
                        key={skill}
                        style={{ animationDelay: `${index * 45}ms` }}
                        className="animate-fade-up"
                      >
                        <span
                          className={
                            highlighted
                              ? "inline-flex items-center gap-1.5 rounded-full border border-transparent bg-trust px-3.5 py-1.5 text-xs font-medium text-trust-foreground transition-transform duration-150 ease-out hover:-translate-y-px"
                              : "inline-flex items-center gap-1.5 rounded-full border border-border bg-accent px-3.5 py-1.5 text-xs font-medium text-accent-foreground transition-colors duration-150 ease-out hover:border-primary/40 hover:bg-secondary"
                          }
                        >
                          {highlighted ? (
                            <Check className="h-3.5 w-3.5" aria-hidden="true" />
                          ) : null}
                          {skill}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </Reveal>
    </div>
  </section>
);
