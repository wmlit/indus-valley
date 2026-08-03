import { Figure } from "../ui/figure";
import { Reveal } from "../ui/reveal";
import { Container, cx } from "../ui/primitives";

/**
 * Standard page opener. Two registers:
 *  – with `slot`: half-height full-bleed photograph, title over the lower left
 *  – without:     type-led on cream, for pages that should stay quiet
 */
export function PageHero({
  eyebrow,
  lead,
  trail,
  sub,
  slot,
  alt,
  px,
  chips,
}: {
  eyebrow?: string;
  lead: string;
  trail?: string;
  sub?: string;
  slot?: string;
  alt?: string;
  px?: string;
  chips?: string[];
}) {
  if (!slot) {
    return (
      <section className="bg-cream pt-36 pb-16 sm:pt-44 sm:pb-20">
        <Container>
          {eyebrow ? (
            <Reveal>
              <span className="micro text-clay">{eyebrow}</span>
            </Reveal>
          ) : null}
          <Reveal delay={90} as="h1" className="mt-6 max-w-[17ch] text-[clamp(2.4rem,6vw,4.4rem)]">
            <span className="text-ink">{lead}</span>
            {trail ? <span className="text-faint"> {trail}</span> : null}
          </Reveal>
          {sub ? (
            <Reveal delay={180}>
              <p className="mt-7 max-w-[58ch] text-[16px] leading-[1.7] text-muted sm:text-[17px]">
                {sub}
              </p>
            </Reveal>
          ) : null}
          {chips?.length ? <Chips items={chips} tone="light" /> : null}
        </Container>
      </section>
    );
  }

  return (
    <section className="relative isolate flex h-[66svh] min-h-[460px] flex-col justify-end overflow-hidden">
      <Figure
        slot={slot}
        alt={alt ?? lead}
        px={px}
        sizes="100vw"
        priority
        scrim="bottom"
        fill
      />
      <Container className="relative pb-12 sm:pb-16">
        {eyebrow ? (
          <Reveal>
            <span className="micro text-white/60">{eyebrow}</span>
          </Reveal>
        ) : null}
        <Reveal delay={90} as="h1" className="mt-5 max-w-[17ch] text-[clamp(2.4rem,6vw,4.4rem)]">
          <span className="text-white">{lead}</span>
          {trail ? <span className="text-white/55"> {trail}</span> : null}
        </Reveal>
        {sub ? (
          <Reveal delay={180}>
            <p className="mt-6 max-w-[54ch] text-[15px] leading-[1.7] text-white/70 sm:text-base">
              {sub}
            </p>
          </Reveal>
        ) : null}
        {chips?.length ? <Chips items={chips} tone="dark" /> : null}
      </Container>
    </section>
  );
}

function Chips({ items, tone }: { items: string[]; tone: "light" | "dark" }) {
  return (
    <Reveal delay={260}>
      <ul className="mt-8 flex flex-wrap gap-2">
        {items.map((c) => (
          <li
            key={c}
            className={cx(
              "rounded-full px-3.5 py-2 text-[13px] font-medium backdrop-blur-sm",
              tone === "dark"
                ? "bg-white/12 text-white hairline-light"
                : "bg-chalk text-ink-soft hairline",
            )}
          >
            {c}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
