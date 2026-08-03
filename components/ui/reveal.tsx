"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

/**
 * Fades + lifts its children the first time they scroll into view.
 * Purely additive: the CSS in globals.css keeps content visible when JS or
 * IntersectionObserver is unavailable (see the <noscript> block in layout).
 */
export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className,
  id,
}: {
  children: ReactNode;
  delay?: number;
  as?: ElementType;
  className?: string;
  id?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      id={id}
      data-reveal={shown ? "shown" : "hidden"}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined}
      className={className}
    >
      {children}
    </Tag>
  );
}
