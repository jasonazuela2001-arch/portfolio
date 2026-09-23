import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in the reading zone of the viewport.
 * Uses IntersectionObserver with a band around the vertical middle of the screen
 * so the active nav item matches what the reader is actually looking at.
 */
export const useScrollSpy = (ids: string[], enabled = true) => {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    if (!enabled || ids.length === 0) return;

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [ids, enabled]);

  return activeId;
};
