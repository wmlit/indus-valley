"use client";

import { useCallback, useRef, useState, type ReactNode } from "react";
import { cx } from "./primitives";

/**
 * Draggable before/after divider. Keyboard accessible via the range input,
 * which doubles as the visual handle's accessible control.
 */
export function Compare({
  before,
  after,
  beforeLabel = "Before",
  afterLabel = "After",
  caption,
  className,
}: {
  before: ReactNode;
  after: ReactNode;
  beforeLabel?: string;
  afterLabel?: string;
  caption?: string;
  className?: string;
}) {
  const [pos, setPos] = useState(52);
  const frame = useRef<HTMLDivElement>(null);

  const move = useCallback((clientX: number) => {
    const el = frame.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(96, Math.max(4, next)));
  }, []);

  return (
    <div className={cx("group relative select-none", className)}>
      <div
        ref={frame}
        onPointerDown={(e) => {
          e.currentTarget.setPointerCapture(e.pointerId);
          move(e.clientX);
        }}
        onPointerMove={(e) => {
          if (e.buttons === 1) move(e.clientX);
        }}
        className="relative h-full w-full overflow-hidden rounded-slab bg-cream-deep touch-none"
      >
        {/* after (full bleed) */}
        <div className="absolute inset-0">{after}</div>

        {/* before (clipped) */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          {before}
        </div>

        {/* labels */}
        <span className="micro absolute bottom-4 left-4 rounded-full bg-ink/55 px-2.5 py-1.5 text-white/90 backdrop-blur-sm">
          {beforeLabel}
        </span>
        <span className="micro absolute right-4 bottom-4 rounded-full bg-ink/55 px-2.5 py-1.5 text-white/90 backdrop-blur-sm">
          {afterLabel}
        </span>

        {caption ? (
          <span className="absolute top-4 left-4 rounded-full bg-ink/55 px-3 py-1.5 text-[11px] font-medium text-white/90 backdrop-blur-sm">
            {caption}
          </span>
        ) : null}

        {/* divider */}
        <div
          className="pointer-events-none absolute inset-y-0 w-px bg-white/85 shadow-[0_0_18px_rgba(255,255,255,0.55)]"
          style={{ left: `${pos}%` }}
        >
          <span className="absolute top-1/2 left-1/2 grid size-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-ink shadow-float backdrop-blur-sm">
            <svg viewBox="0 0 20 20" fill="none" aria-hidden className="size-4">
              <path
                d="M7.6 5.5 3.8 10l3.8 4.5M12.4 5.5 16.2 10l-3.8 4.5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>

      <label className="sr-only" htmlFor={`cmp-${beforeLabel}-${afterLabel}`}>
        Reveal {afterLabel} over {beforeLabel}
      </label>
      <input
        id={`cmp-${beforeLabel}-${afterLabel}`}
        type="range"
        min={4}
        max={96}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        className="absolute inset-x-0 bottom-0 h-10 w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
