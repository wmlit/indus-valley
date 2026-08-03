"use client";

import { useId, useState, type ReactNode } from "react";
import { cx } from "./primitives";

export type AccordionItem = {
  title: ReactNode;
  meta?: ReactNode;
  body: ReactNode;
};

export function Accordion({
  items,
  defaultOpen = 0,
  tone = "light",
  className,
}: {
  items: AccordionItem[];
  defaultOpen?: number | null;
  tone?: "light" | "dark";
  className?: string;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const baseId = useId();

  return (
    <div className={cx("flex flex-col gap-2.5", className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className={cx(
              "overflow-hidden rounded-2xl transition-colors duration-500",
              tone === "light"
                ? isOpen
                  ? "bg-clay-wash hairline"
                  : "bg-chalk hairline hover:bg-cream-deep/60"
                : isOpen
                  ? "bg-white/[0.09] hairline-light"
                  : "bg-white/[0.04] hairline-light hover:bg-white/[0.07]",
            )}
          >
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${baseId}-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
              >
                <span
                  className={cx(
                    "flex-1 text-[15px] font-medium tracking-[-0.02em] sm:text-[17px]",
                    tone === "light" ? "text-ink" : "text-white",
                  )}
                >
                  {item.title}
                </span>
                {item.meta ? (
                  <span
                    className={cx(
                      "hidden text-[13px] sm:block",
                      tone === "light" ? "text-muted" : "text-white/50",
                    )}
                  >
                    {item.meta}
                  </span>
                ) : null}
                <Plus open={isOpen} tone={tone} />
              </button>
            </h3>
            <div
              id={`${baseId}-${i}`}
              className={cx(
                "grid transition-all duration-500 ease-out-soft",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <div
                  className={cx(
                    "px-5 pb-5 text-[14px] leading-[1.7] sm:px-6 sm:pb-6 sm:text-[15px]",
                    tone === "light" ? "text-muted" : "text-white/55",
                  )}
                >
                  {item.body}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Plus({ open, tone }: { open: boolean; tone: "light" | "dark" }) {
  return (
    <span
      aria-hidden
      className={cx(
        "relative grid size-6 shrink-0 place-items-center rounded-full transition-colors duration-300",
        tone === "light"
          ? open
            ? "bg-clay text-white"
            : "text-muted hairline"
          : open
            ? "bg-clay text-white"
            : "text-white/50 hairline-light",
      )}
    >
      <span className="absolute h-px w-2.5 bg-current" />
      <span
        className={cx(
          "absolute h-2.5 w-px bg-current transition-transform duration-400 ease-out-soft",
          open && "scale-y-0",
        )}
      />
    </span>
  );
}
