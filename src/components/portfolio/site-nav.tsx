import { useEffect, useMemo, useState } from "react";
import { Menu, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navSections, profile } from "@/data/portfolio";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { cn } from "@/lib/utils";

const allSectionIds = ["hero", ...navSections.map((section) => section.id)];

export const SiteNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const ids = useMemo(() => allSectionIds, []);
  const activeId = useScrollSpy(ids);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-transparent bg-background/80 backdrop-blur-md transition-[border-color,box-shadow] duration-200 ease-out",
        scrolled && "border-border shadow-subtle",
      )}
    >
      <nav
        aria-label="Portfolio sections"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8"
      >
        <a
          href="#hero"
          className="group flex items-center gap-2.5 rounded-md py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <span className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground shadow-subtle">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-sm font-semibold text-foreground">
              {profile.name}
            </span>
            <span className="mt-0.5 text-[11px] text-muted-foreground">
              {profile.role}
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navSections.map((section) => {
            const isActive = activeId === section.id;
            return (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "relative block rounded-md px-3 py-2 text-sm transition-colors duration-150 ease-out hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    "after:absolute after:inset-x-3 after:-bottom-px after:h-0.5 after:origin-left after:rounded-full after:bg-primary after:transition-transform after:duration-200 after:ease-out",
                    isActive
                      ? "font-medium text-foreground after:scale-x-100"
                      : "text-muted-foreground after:scale-x-0",
                  )}
                >
                  {section.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href={`mailto:${profile.email}`}>Email me</a>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden"
                aria-label="Open navigation menu"
              >
                <Menu className="h-4 w-4" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[86vw] max-w-xs">
              <SheetHeader>
                <SheetTitle className="text-left text-base">
                  {profile.name}
                </SheetTitle>
              </SheetHeader>
              <ul className="mt-6 flex flex-col gap-1">
                {navSections.map((section) => (
                  <li key={section.id}>
                    <SheetClose asChild>
                      <a
                        href={`#${section.id}`}
                        aria-current={activeId === section.id ? "true" : undefined}
                        className={cn(
                          "block rounded-md px-3 py-2.5 text-sm transition-colors duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                          activeId === section.id
                            ? "bg-secondary font-medium text-secondary-foreground"
                            : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                        )}
                      >
                        {section.label}
                      </a>
                    </SheetClose>
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-border pt-6">
                <Button asChild className="w-full">
                  <a href={`mailto:${profile.email}`}>Email me</a>
                </Button>
                <Button asChild variant="outline" className="mt-2 w-full">
                  <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};
