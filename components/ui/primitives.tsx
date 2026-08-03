import Link from "next/link";
import type { ReactNode } from "react";

export function cx(...parts: (string | false | null | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

/* ------------------------------------------------------------------ */

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cx("mx-auto w-full max-w-[1180px] px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */

export function Eyebrow({
  children,
  tone = "light",
  className,
}: {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <span
      className={cx(
        "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[11px] font-medium tracking-[0.02em]",
        tone === "light"
          ? "bg-chalk/70 text-ink-soft hairline backdrop-blur-sm"
          : "bg-white/10 text-white/80 hairline-light backdrop-blur-sm",
        className,
      )}
    >
      <Dot tone={tone} />
      {children}
    </span>
  );
}

function Dot({ tone }: { tone: "light" | "dark" }) {
  return (
    <span
      aria-hidden
      className={cx(
        "size-1.5 rounded-full",
        tone === "light" ? "bg-clay" : "bg-clay",
      )}
    />
  );
}

/* ------------------------------------------------------------------ */

/**
 * The signature two-tone headline: first clause in ink, second in a soft
 * grey so the sentence reads as one line of thought that fades back.
 */
export function Headline({
  lead,
  trail,
  as: Tag = "h2",
  tone = "light",
  className,
}: {
  lead: ReactNode;
  trail?: ReactNode;
  as?: "h1" | "h2" | "h3";
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <Tag className={className}>
      <span className={tone === "light" ? "text-ink" : "text-white"}>{lead}</span>
      {trail ? (
        <>
          {" "}
          <span className={tone === "light" ? "text-faint" : "text-white/45"}>
            {trail}
          </span>
        </>
      ) : null}
    </Tag>
  );
}

/* ------------------------------------------------------------------ */

export function SectionHeading({
  eyebrow,
  lead,
  trail,
  sub,
  align = "center",
  tone = "light",
  as = "h2",
  className,
}: {
  eyebrow?: string;
  lead: ReactNode;
  trail?: ReactNode;
  sub?: ReactNode;
  align?: "center" | "left";
  tone?: "light" | "dark";
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <div
      className={cx(
        "flex flex-col",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow ? (
        <Eyebrow tone={tone} className="mb-6">
          {eyebrow}
        </Eyebrow>
      ) : null}
      <Headline
        as={as}
        lead={lead}
        trail={trail}
        tone={tone}
        className="max-w-[19ch] text-[clamp(2.1rem,5.2vw,3.6rem)] sm:max-w-[24ch]"
      />
      {sub ? (
        <p
          className={cx(
            "mt-5 max-w-[58ch] text-[15px] leading-[1.65] sm:text-base",
            tone === "light" ? "text-muted" : "text-white/55",
          )}
        >
          {sub}
        </p>
      ) : null}
    </div>
  );
}

/* ------------------------------------------------------------------ */

type BtnProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "clay" | "ghost" | "light";
  className?: string;
  size?: "sm" | "md";
};

export function Btn({
  href,
  children,
  variant = "solid",
  size = "md",
  className,
}: BtnProps) {
  const base =
    "group/btn inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 ease-out-soft active:scale-[0.98]";
  const sizes = {
    sm: "h-9 px-4 text-[13px]",
    md: "h-11 px-5 text-sm sm:h-12 sm:px-6",
  };
  const variants = {
    solid: "bg-ink text-cream hover:bg-ink-soft shadow-lift",
    clay: "bg-clay text-white hover:bg-clay-deep shadow-lift",
    light: "bg-chalk text-ink hairline hover:bg-cream shadow-lift",
    ghost:
      "bg-transparent text-ink hairline hover:bg-chalk/70 backdrop-blur-sm",
  };

  const external = href.startsWith("mailto:") || href.startsWith("tel:");
  const cls = cx(base, sizes[size], variants[variant], className);

  if (external) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/* ------------------------------------------------------------------ */

export function Card({
  children,
  className,
  tone = "light",
}: {
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark" | "clay";
}) {
  return (
    <div
      className={cx(
        "relative overflow-hidden rounded-slab",
        tone === "light" && "bg-chalk hairline",
        tone === "dark" && "kiln-wash hairline-light text-white",
        tone === "clay" && "ember-wash hairline-light text-white",
        className,
      )}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */

export function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className={cx("size-3.5 shrink-0", className)}
    >
      <path
        d="M2.5 8h11m0 0L9 3.5M13.5 8 9 12.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Check({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
      className={cx("size-5 shrink-0", className)}
    >
      <circle cx="10" cy="10" r="8.25" stroke="currentColor" strokeWidth="1.2" opacity="0.35" />
      <path
        d="m6.6 10.2 2.3 2.3 4.5-4.7"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */

export function Wordmark({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <span className={cx("inline-flex items-center gap-2.5", className)}>
      <Seal className="size-7" tone={tone} />
      <span
        className={cx(
          "text-[15px] font-semibold tracking-[-0.02em]",
          tone === "dark" ? "text-white" : "text-ink",
        )}
      >
        Indus Valley
      </span>
    </span>
  );
}

/** Concentric seal — a nod to the carved steatite seals of the Indus Valley. */
export function Seal({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const stroke = tone === "dark" ? "rgba(255,255,255,0.85)" : "rgba(16,14,12,0.85)";
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden className={className}>
      <circle cx="16" cy="16" r="15" fill="url(#seal-g)" />
      <circle cx="16" cy="16" r="15" stroke={stroke} strokeOpacity="0.18" />
      <path
        d="M6 20.5c3.2-4.6 6-6.9 8.5-6.9 2.5 0 5.3 2.3 8.5 6.9"
        stroke={stroke}
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M8.5 24c2.6-3.2 5.1-4.8 7.5-4.8s4.9 1.6 7.5 4.8"
        stroke={stroke}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeOpacity="0.55"
      />
      <circle cx="16" cy="10" r="2.1" stroke={stroke} strokeWidth="1.3" />
      <defs>
        <linearGradient id="seal-g" x1="4" y1="2" x2="27" y2="30">
          <stop stopColor="#E2622B" />
          <stop offset="0.55" stopColor="#B8431A" />
          <stop offset="1" stopColor="#8BA4B4" />
        </linearGradient>
      </defs>
    </svg>
  );
}
