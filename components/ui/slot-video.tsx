"use client";

import { useEffect, useRef } from "react";
import { cx } from "./primitives";

/**
 * Background video for an image slot.
 *
 * Never eager: `preload="none"` means nothing downloads until the element
 * scrolls into view, and the slot's still image stands in as the poster, so
 * the first paint is identical whether or not the video ever loads. Pauses
 * itself on the way out, so a page with several loops only decodes the one
 * you are looking at.
 *
 * Sits out entirely — poster only — when the visitor asked for reduced motion
 * or is on a metered connection.
 */
export function SlotVideo({
  src,
  poster,
  className,
}: {
  src: string;
  poster?: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // React renders muted as an attribute but does not reliably set the DOM
    // property on hydration. Without the property, Chrome treats this as an
    // unmuted autoplay and rejects play(). Set it directly.
    el.muted = true;
    el.defaultMuted = true;

    const reduced =
      typeof matchMedia === "function" &&
      matchMedia("(prefers-reduced-motion: reduce)").matches;

    const conn = (navigator as { connection?: { saveData?: boolean } }).connection;
    if (reduced || conn?.saveData) return;

    let blocked = false;

    const attempt = () => {
      const p = el.play();
      if (p) {
        p.catch(() => {
          // Some policies still refuse until the visitor interacts. Arm a
          // one-shot retry rather than leaving a frozen poster.
          if (blocked) return;
          blocked = true;
          const retry = () => {
            el.muted = true;
            el.play().catch(() => {});
            window.removeEventListener("pointerdown", retry);
            window.removeEventListener("keydown", retry);
          };
          window.addEventListener("pointerdown", retry, { once: true });
          window.addEventListener("keydown", retry, { once: true });
        });
      }
    };

    if (typeof IntersectionObserver === "undefined") {
      attempt();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) attempt();
        else el.pause();
      },
      { rootMargin: "150px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden
      tabIndex={-1}
      disablePictureInPicture
      className={cx("absolute inset-0 size-full object-cover", className)}
    />
  );
}
