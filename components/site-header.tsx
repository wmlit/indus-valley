"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { company, nav } from "@/lib/site";
import { ArrowRight, cx, Wordmark } from "./ui/primitives";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [sheet, setSheet] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /**
   * Closing is deferred slightly so a diagonal move from the trigger toward
   * the panel doesn't dismiss the menu mid-travel. Opening always cancels a
   * pending close.
   */
  const openDropdown = (i: number) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(i);
  };

  const closeDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 160);
  };

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setSheet(false);
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = sheet ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [sheet]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.split("/").slice(0, 2).join("/"));

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-3 sm:pt-4">
      <div className="mx-auto flex w-full max-w-[1180px] items-center gap-3 px-4 sm:px-6">
        <nav
          aria-label="Primary"
          className={cx(
            "relative flex h-14 flex-1 items-center gap-1 rounded-full pr-1.5 pl-4 transition-all duration-500 ease-out-soft sm:pl-5",
            scrolled
              ? "bg-ink/80 shadow-float backdrop-blur-xl"
              : "bg-ink/70 backdrop-blur-lg",
            "hairline-light",
          )}
        >
          <Link href="/" className="mr-2 shrink-0" aria-label={`${company.short} — home`}>
            <Wordmark tone="dark" />
          </Link>

          {/* desktop links */}
          <ul className="ml-2 hidden flex-1 items-center gap-0.5 lg:flex">
            {nav.map((item, i) =>
              item.children ? (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => openDropdown(i)}
                  onMouseLeave={closeDropdown}
                >
                  <button
                    type="button"
                    aria-expanded={openMenu === i}
                    onClick={() => setOpenMenu(openMenu === i ? null : i)}
                    className={cx(
                      "flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[13.5px] transition-colors duration-200",
                      isActive(item.href) || openMenu === i
                        ? "text-white"
                        : "text-white/65 hover:text-white",
                    )}
                  >
                    {item.label}
                    <svg
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden
                      className={cx(
                        "size-2.5 transition-transform duration-300",
                        openMenu === i && "rotate-180",
                      )}
                    >
                      <path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                  </button>

                  {/* Starts flush against the trigger; the visual gap is this
                      element's own top padding, so the pointer never crosses
                      dead space on the way down to the panel. */}
                  <div
                    className={cx(
                      "absolute top-full left-0 w-[320px] origin-top-left pt-2.5 transition-all duration-300 ease-out-soft",
                      openMenu === i
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-1.5 opacity-0",
                    )}
                  >
                    <ul className="overflow-hidden rounded-2xl bg-chalk p-1.5 shadow-float hairline">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="group/i flex flex-col gap-0.5 rounded-xl px-3.5 py-3 transition-colors duration-200 hover:bg-clay-wash"
                          >
                            <span className="flex items-center gap-1.5 text-[13.5px] font-medium text-ink">
                              {child.label}
                              <ArrowRight className="size-3 -translate-x-1 text-clay opacity-0 transition-all duration-300 group-hover/i:translate-x-0 group-hover/i:opacity-100" />
                            </span>
                            <span className="text-[12.5px] leading-snug text-muted">
                              {child.blurb}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={cx(
                      "rounded-full px-3.5 py-2 text-[13.5px] transition-colors duration-200",
                      isActive(item.href) ? "text-white" : "text-white/65 hover:text-white",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>

          <div className="ml-auto flex items-center gap-1.5">
            <a
              href={`tel:${company.phones.main.replace(/[^\d]/g, "")}`}
              className="hidden text-[13.5px] text-white/65 transition-colors hover:text-white sm:block sm:px-3"
            >
              {company.phones.main}
            </a>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center gap-1.5 rounded-full bg-clay px-4 text-[13.5px] font-medium text-white transition-colors duration-300 hover:bg-clay-deep sm:px-5"
            >
              Get in touch
              <ArrowRight className="size-3" />
            </Link>
          </div>
        </nav>

        {/* menu button */}
        <button
          type="button"
          onClick={() => setSheet((s) => !s)}
          aria-expanded={sheet}
          aria-label={sheet ? "Close menu" : "Open menu"}
          className={cx(
            "grid size-14 shrink-0 place-items-center rounded-full transition-all duration-500 lg:hidden",
            scrolled ? "bg-ink/80 shadow-float backdrop-blur-xl" : "bg-ink/70 backdrop-blur-lg",
            "hairline-light",
          )}
        >
          <span className="relative block h-3 w-4.5">
            <span
              className={cx(
                "absolute inset-x-0 top-0 h-px bg-white transition-transform duration-300 ease-out-soft",
                sheet && "translate-y-1.5 rotate-45",
              )}
            />
            <span
              className={cx(
                "absolute inset-x-0 bottom-0 h-px bg-white transition-transform duration-300 ease-out-soft",
                sheet && "-translate-y-1.5 -rotate-45",
              )}
            />
          </span>
        </button>
      </div>

      {/* mobile sheet */}
      <div
        className={cx(
          "fixed inset-0 top-0 z-40 lg:hidden",
          sheet ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!sheet}
      >
        <div
          onClick={() => setSheet(false)}
          className={cx(
            "absolute inset-0 bg-ink/40 backdrop-blur-sm transition-opacity duration-400",
            sheet ? "opacity-100" : "opacity-0",
          )}
        />
        <div
          className={cx(
            "absolute inset-x-4 top-20 overflow-hidden rounded-slab bg-chalk p-2 shadow-float transition-all duration-500 ease-out-soft",
            sheet ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0",
          )}
        >
          <ul className="flex flex-col">
            <li>
              <Link href="/" className="block rounded-xl px-4 py-3 text-[15px] font-medium">
                Home
              </Link>
            </li>
            {nav.map((item) => (
              <li key={item.label}>
                {item.children ? (
                  <div className="px-4 pt-4 pb-1">
                    <span className="micro text-faint">{item.label}</span>
                  </div>
                ) : (
                  <Link href={item.href} className="block rounded-xl px-4 py-3 text-[15px] font-medium">
                    {item.label}
                  </Link>
                )}
                {item.children ? (
                  <ul>
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="flex items-center justify-between rounded-xl px-4 py-3 text-[15px] font-medium transition-colors hover:bg-clay-wash"
                        >
                          {child.label}
                          <ArrowRight className="text-clay" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
          <div className="mt-2 flex flex-col gap-2 border-t border-line-soft p-2 pt-4">
            <Link
              href="/contact"
              className="flex h-12 items-center justify-center gap-2 rounded-full bg-clay text-sm font-medium text-white"
            >
              Get in touch <ArrowRight />
            </Link>
            <a
              href={`tel:${company.phones.main.replace(/[^\d]/g, "")}`}
              className="flex h-12 items-center justify-center rounded-full text-sm font-medium text-muted hairline"
            >
              {company.phones.main}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
