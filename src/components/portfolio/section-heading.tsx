import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) => (
  <div
    className={cn(
      "mb-10",
      align === "center" && "mx-auto max-w-2xl text-center",
      className,
    )}
  >
    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
      {eyebrow}
    </p>
    <h2 className="mt-2 text-3xl font-semibold tracking-[-0.01em] text-foreground md:text-4xl">
      {title}
    </h2>
    {description ? (
      <p
        className={cn(
          "mt-3 text-base leading-7 text-muted-foreground",
          align === "left" && "max-w-[62ch]",
        )}
      >
        {description}
      </p>
    ) : null}
  </div>
);
