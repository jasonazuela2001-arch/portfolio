import { toast } from "sonner";
import { ArrowUpRight, Check, Clock, Copy, Mail, ShieldCheck } from "lucide-react";

import { Reveal } from "@/components/portfolio/reveal";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { Button } from "@/components/ui/button";
import { contactLinks, profile } from "@/data/portfolio";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";

export const Contact = () => {
  const { copiedValue, copy } = useCopyToClipboard();

  const handleCopy = async (value: string, label: string) => {
    const ok = await copy(value);
    if (ok) {
      toast.success(`${label} copied`, { description: value });
    } else {
      toast.error(`Could not copy ${label.toLowerCase()}`, {
        description: "Please select and copy it manually.",
      });
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-b border-border bg-secondary/40 py-16 md:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let's get your front desk covered"
            description="Available full-time across US business hours. Reach out directly — I usually reply the same day."
          />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          {contactLinks.map((link, index) => {
            const isCopied = copiedValue === link.value;
            return (
              <Reveal key={link.id} delay={index * 0.06} className="h-full">
                <article className="group flex h-full flex-col justify-between gap-6 rounded-[var(--radius)] border border-border bg-card p-6 shadow-subtle transition-[box-shadow,transform] duration-200 ease-out hover:-translate-y-px hover:shadow-lift">
                  <div>
                    <span className="grid h-10 w-10 place-items-center rounded-md bg-secondary text-secondary-foreground transition-colors duration-150 ease-out group-hover:bg-primary group-hover:text-primary-foreground">
                      <link.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      {link.label}
                    </h3>
                    <p className="mt-1.5 break-words text-sm font-medium text-foreground">
                      {link.value}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Button asChild size="sm" variant="outline">
                      <a
                        href={link.href}
                        {...(link.id === "linkedin"
                          ? { target: "_blank", rel: "noreferrer" }
                          : {})}
                      >
                        {link.id === "email" ? (
                          <Mail className="h-4 w-4" aria-hidden="true" />
                        ) : null}
                        {link.id === "email" ? "Send email" : null}
                        {link.id === "phone" ? "Call now" : null}
                        {link.id === "linkedin" ? "Open profile" : null}
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </Button>

                    {link.copyable ? (
                      <Button
                        type="button"
                        size="sm"
                        variant="ghost"
                        onClick={() => handleCopy(link.value, link.label)}
                      >
                        {isCopied ? (
                          <Check className="h-4 w-4 text-primary" aria-hidden="true" />
                        ) : (
                          <Copy className="h-4 w-4" aria-hidden="true" />
                        )}
                        {isCopied ? "Copied" : "Copy"}
                      </Button>
                    ) : null}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-col gap-4 rounded-[var(--radius)] border border-border bg-card p-6 shadow-subtle sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
                {profile.availability}
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-trust" aria-hidden="true" />
                HIPAA-compliant handling of patient information
              </span>
            </div>
            <Button asChild size="lg" className="shrink-0">
              <a href={`mailto:${profile.email}?subject=Healthcare%20VA%20opportunity`}>
                <Mail className="h-4 w-4" aria-hidden="true" />
                Start a conversation
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
