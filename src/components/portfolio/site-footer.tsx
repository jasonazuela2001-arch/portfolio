import { Mail, MapPin, Phone, ShieldCheck, Users } from "lucide-react";

import { navSections, profile } from "@/data/portfolio";

export const SiteFooter = () => (
  <footer className="bg-secondary/60 py-12 text-sm text-muted-foreground">
    <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <p className="font-serif text-lg font-semibold text-foreground">
            {profile.name}
          </p>
          <p className="mt-1 text-sm">{profile.role}</p>
          <p className="mt-3 inline-flex items-center gap-2 text-xs">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            {profile.location}
          </p>
          <p className="mt-2 text-xs">{profile.availability}</p>
        </div>

        <nav aria-label="Footer sections">
          <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
            Sections
          </h2>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2">
            {navSections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="transition-colors duration-150 ease-out hover:text-foreground"
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
            Get in touch
          </h2>
          <ul className="mt-3 space-y-2">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 transition-colors duration-150 ease-out hover:text-foreground"
              >
                <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                {profile.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${profile.phoneHref}`}
                className="inline-flex items-center gap-2 transition-colors duration-150 ease-out hover:text-foreground"
              >
                <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                {profile.phone}
              </a>
            </li>
            <li>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors duration-150 ease-out hover:text-foreground"
              >
                <Users className="h-3.5 w-3.5" aria-hidden="true" />
                LinkedIn profile
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p className="inline-flex items-center gap-2">
          <ShieldCheck className="h-3.5 w-3.5 text-trust" aria-hidden="true" />
          HIPAA-compliant handling of patient information
        </p>
      </div>
    </div>
  </footer>
);
