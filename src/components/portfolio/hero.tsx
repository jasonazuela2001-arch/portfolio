import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Clock,
  Copy,
  Mail,
  MapPin,
  ShieldCheck,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { profile, stats, trustFacts } from "@/data/portfolio";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { cn } from "@/lib/utils";

const TaglineRotator = () => {
  const prefersReducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion || paused) return;
    const id = window.setInterval(
      () => setIndex((current) => (current + 1) % profile.taglines.length),
      4200,
    );
    return () => window.clearInterval(id);
  }, [prefersReducedMotion, paused]);

  return (
    <div
      className="mt-5 min-h-[3.5rem]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <p className="sr-only">{profile.taglines[0]}</p>
      <div aria-hidden="true" className="relative">
        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={index}
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 4 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: -4 }}
            transition={{ duration: 0.24, ease: [0.4, 0, 0.2, 1] }}
            className="text-lg font-medium leading-8 text-foreground md:text-xl"
          >
            {profile.taglines[index]}
          </motion.p>
        </AnimatePresence>
      </div>
      <div className="mt-4 flex items-center gap-1.5">
        {profile.taglines.map((tagline, dotIndex) => (
          <button
            key={tagline}
            type="button"
            aria-label={`Show tagline ${dotIndex + 1}`}
            aria-pressed={dotIndex === index}
            onClick={() => setIndex(dotIndex)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              dotIndex === index
                ? "w-6 bg-primary"
                : "w-1.5 bg-border hover:bg-primary/40",
            )}
          />
        ))}
      </div>
    </div>
  );
};

export const Hero = () => {
  const { copiedValue, copy } = useCopyToClipboard();
  const emailCopied = copiedValue === profile.email;

  return (
    <section id="hero" className="hero-gradient scroll-mt-24 border-b border-border">
      <div className="mx-auto grid w-full max-w-6xl gap-x-16 gap-y-10 px-5 py-14 sm:px-8 md:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:grid-rows-[auto_auto] lg:items-start">
        <div className="animate-fade-up lg:col-start-1 lg:row-start-1">
          <span className="inline-flex items-center gap-2 rounded-full border border-trust/25 bg-trust/10 px-3 py-1 text-xs font-medium text-trust">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-trust/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-trust" />
            </span>
            {profile.availability}
          </span>

          <h1 className="mt-6 text-[2.5rem] font-bold leading-[1.05] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-[3.5rem]">
            {profile.name}
          </h1>

          <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium uppercase tracking-[0.12em] text-primary">
            <span>{profile.role}</span>
            <span className="hidden text-border sm:inline" aria-hidden="true">
              /
            </span>
            <span className="inline-flex items-center gap-1.5 text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {profile.location}
            </span>
          </p>

          <TaglineRotator />

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <a href={`mailto:${profile.email}`}>
                <Mail className="h-4 w-4" aria-hidden="true" />
                Email me
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">
                <Users className="h-4 w-4" aria-hidden="true" />
                Connect on LinkedIn
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <Button
              type="button"
              size="lg"
              variant="ghost"
              onClick={() => copy(profile.email)}
            >
              {emailCopied ? (
                <>
                  <Check className="h-4 w-4 text-primary" aria-hidden="true" />
                  Email copied
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" aria-hidden="true" />
                  Copy email
                </>
              )}
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm animate-fade-in lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:max-w-none lg:self-center">
          <div className="grid-hairlines mask-fade-b absolute inset-0 -z-10 rounded-[calc(var(--radius)+8px)] opacity-70" />
          <div className="rounded-[calc(var(--radius)+6px)] border border-border bg-card p-3 shadow-lift">
            <img
              src={profile.headshot}
              crossOrigin="anonymous"
              alt={`${profile.name}, ${profile.role}`}
              className="aspect-square w-full rounded-[var(--radius)] object-cover"
              loading="eager"
            />
            <div className="flex items-center justify-between gap-3 px-1 pt-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-trust/10 px-2.5 py-1 text-[11px] font-medium text-trust">
                <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                HIPAA Certified
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] text-muted-foreground">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                EST / PST ready
              </span>
            </div>
          </div>
        </div>

        <dl className="grid grid-cols-2 gap-4 border-t border-border pt-8 sm:grid-cols-4 lg:col-start-1 lg:row-start-2 lg:pt-6">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </dt>
              <dd className="tabular mt-1 text-2xl font-semibold text-primary">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="border-t border-border bg-card/60">
        <ul className="mx-auto grid w-full max-w-6xl gap-x-8 gap-y-4 px-5 py-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
          {trustFacts.map((fact) => (
            <li key={fact.label} className="flex items-start gap-3">
              <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-md bg-secondary text-secondary-foreground">
                <fact.icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="flex flex-col">
                <span className="text-sm font-medium text-foreground">
                  {fact.label}
                </span>
                <span className="text-xs text-muted-foreground">
                  {fact.detail}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
