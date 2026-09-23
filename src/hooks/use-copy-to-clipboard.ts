import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Copies text to the clipboard and exposes a short-lived `copied` flag
 * so the triggering control can show confirmation.
 */
export const useCopyToClipboard = (resetAfterMs = 2000) => {
  const [copiedValue, setCopiedValue] = useState<string | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const clearTimer = () => {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  useEffect(() => clearTimer, []);

  const copy = useCallback(
    async (value: string) => {
      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(value);
        } else {
          const el = document.createElement("textarea");
          el.value = value;
          el.setAttribute("readonly", "");
          el.style.position = "fixed";
          el.style.opacity = "0";
          document.body.appendChild(el);
          el.select();
          document.execCommand("copy");
          document.body.removeChild(el);
        }
        setCopiedValue(value);
        clearTimer();
        timeoutRef.current = window.setTimeout(() => {
          setCopiedValue(null);
          timeoutRef.current = null;
        }, resetAfterMs);
        return true;
      } catch {
        return false;
      }
    },
    [resetAfterMs],
  );

  return { copiedValue, copy };
};
