import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger step in seconds. */
  delay?: number;
  as?: "div" | "li" | "section" | "article" | "header" | "footer";
};

/**
 * Subtle scroll reveal: fades in with a 1px lift. Deliberately restrained —
 * disabled entirely when the user prefers reduced motion.
 */
export const Reveal = ({ children, className, delay = 0, as = "div" }: RevealProps) => {
  const prefersReducedMotion = useReducedMotion();
  const MotionTag = motion[as];

  if (prefersReducedMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={cn(className)}
      initial={{ opacity: 0, y: 4 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.24, ease: [0.4, 0, 0.2, 1], delay }}
    >
      {children}
    </MotionTag>
  );
};
