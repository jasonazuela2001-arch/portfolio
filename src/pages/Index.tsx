import { About } from "@/components/portfolio/about";
import { Contact } from "@/components/portfolio/contact";
import { Experience } from "@/components/portfolio/experience";
import { Hero } from "@/components/portfolio/hero";
import { Readiness } from "@/components/portfolio/readiness";
import { SiteFooter } from "@/components/portfolio/site-footer";
import { SiteNav } from "@/components/portfolio/site-nav";
import { Skills } from "@/components/portfolio/skills";
import { Tools } from "@/components/portfolio/tools";

const Index = () => (
  <div className="min-h-full bg-background">
    <a
      href="#about"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
    >
      Skip to content
    </a>

    <SiteNav />

    <main>
      <Hero />
      <About />
      <Skills />
      <Tools />
      <Experience />
      <Readiness />
      <Contact />
    </main>

    <SiteFooter />
  </div>
);

export default Index;
