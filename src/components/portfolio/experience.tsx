import { Building2, CalendarDays, MapPin } from "lucide-react";

import { Reveal } from "@/components/portfolio/reveal";
import { SectionHeading } from "@/components/portfolio/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { experience } from "@/data/portfolio";

export const Experience = () => (
  <section
    id="experience"
    className="scroll-mt-24 border-b border-border bg-secondary/40 py-16 md:py-24"
  >
    <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
      <Reveal>
        <SectionHeading
          eyebrow="Experience"
          title="Three years on the front line of patient care"
          description="Most recent first. Open any role to see the day-to-day responsibilities in full."
        />
      </Reveal>

      <Reveal>
        <Accordion
          type="single"
          collapsible
          defaultValue={experience[0].id}
          className="relative space-y-3 border-l border-border pl-6 md:pl-8"
        >
          {experience.map((entry) => (
            <AccordionItem
              key={entry.id}
              value={entry.id}
              className="relative rounded-[var(--radius)] border border-border bg-card px-5 shadow-subtle transition-shadow duration-200 ease-out data-[state=open]:shadow-card md:px-6"
            >
              <span
                aria-hidden="true"
                className="absolute -left-[calc(1.5rem+5px)] top-7 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-secondary/40 md:-left-[calc(2rem+5px)]"
              />
              <AccordionTrigger className="gap-4 py-5 text-left hover:no-underline">
                <span className="flex flex-col gap-1.5">
                  <span className="text-base font-semibold text-foreground">
                    {entry.title}
                  </span>
                  <span className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Building2 className="h-3.5 w-3.5" aria-hidden="true" />
                      {entry.company}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                      {entry.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-medium text-primary">
                      <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                      {entry.period}
                    </span>
                  </span>
                </span>
              </AccordionTrigger>

              <AccordionContent className="pb-6">
                <p className="text-sm font-medium text-secondary-foreground">
                  {entry.team}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {entry.summary}
                </p>
                <ul className="mt-4 space-y-3 border-t border-border pt-4">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60"
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </div>
  </section>
);
