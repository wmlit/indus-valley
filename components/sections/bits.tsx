import { Accordion } from "../ui/accordion";
import { Reveal } from "../ui/reveal";
import type { Icon } from "../ui/icons";
import { Container, SectionHeading, cx } from "../ui/primitives";

/* ------------------------------------------------------------------
   A hairline grid of labelled icons — the workhorse for capability,
   competency and practice-area lists.
------------------------------------------------------------------- */

export function IconGrid({
  eyebrow,
  lead,
  trail,
  sub,
  items,
  cols = 4,
  align = "center",
  className,
}: {
  eyebrow?: string;
  lead: string;
  trail?: string;
  sub?: string;
  items: { icon?: Icon; title: string; body?: string }[];
  cols?: 3 | 4;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <section className={cx("bg-cream py-20 sm:py-24", className)}>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={eyebrow}
            lead={lead}
            trail={trail}
            sub={sub}
            align={align}
            className={align === "center" ? "mx-auto" : undefined}
          />
        </Reveal>

        <div
          className={cx(
            "mt-12 grid gap-px overflow-hidden rounded-slab bg-line sm:grid-cols-2",
            cols === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3",
          )}
        >
          {items.map((it, i) => {
            const Ico = it.icon;
            return (
              <Reveal
                key={it.title}
                delay={40 * i}
                className="flex flex-col bg-chalk p-6 transition-colors duration-300 hover:bg-clay-wash sm:p-7"
              >
                {Ico ? (
                  <span className="grid size-10 place-items-center rounded-xl bg-cream text-clay hairline">
                    <Ico />
                  </span>
                ) : null}
                <span className={cx("text-[15px] font-medium text-ink", Ico ? "mt-5" : "")}>
                  {it.title}
                </span>
                {it.body ? (
                  <span className="mt-2 text-[13px] leading-[1.6] text-muted">{it.body}</span>
                ) : null}
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------
   Split — copy on one side, a figure or diagram on the other.
------------------------------------------------------------------- */

export function Split({
  eyebrow,
  lead,
  trail,
  body,
  bullets,
  media,
  flip,
  className,
}: {
  eyebrow?: string;
  lead: string;
  trail?: string;
  body?: string;
  bullets?: string[];
  media: React.ReactNode;
  flip?: boolean;
  className?: string;
}) {
  return (
    <section className={cx("bg-cream pb-20 sm:pb-24", className)}>
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className={cx(flip && "lg:order-2")}>
            {eyebrow ? (
              <Reveal>
                <span className="micro text-clay">{eyebrow}</span>
              </Reveal>
            ) : null}
            <Reveal delay={80}>
              <h2 className="mt-5 text-[clamp(1.8rem,3.9vw,2.7rem)]">
                <span className="text-ink">{lead}</span>
                {trail ? <span className="text-faint"> {trail}</span> : null}
              </h2>
            </Reveal>
            {body ? (
              <Reveal delay={150}>
                <p className="mt-6 max-w-[50ch] text-[15px] leading-[1.7] text-muted">{body}</p>
              </Reveal>
            ) : null}
            {bullets?.length ? (
              <Reveal delay={220}>
                <ul className="mt-7 flex flex-col gap-3">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-[14.5px] text-ink-soft">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-clay" />
                      {b}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ) : null}
          </div>

          <Reveal delay={140} className={cx(flip && "lg:order-1")}>
            {media}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------
   Chip row — flat lists (industries, tools, roles)
------------------------------------------------------------------- */

export function ChipRow({
  label,
  items,
  className,
}: {
  label: string;
  items: string[];
  className?: string;
}) {
  return (
    <section className={cx("bg-cream pb-20 sm:pb-24", className)}>
      <Container>
        <Reveal className="rounded-slab bg-chalk p-7 hairline sm:p-9">
          <span className="micro text-faint">{label}</span>
          <ul className="mt-6 flex flex-wrap gap-2">
            {items.map((i) => (
              <li
                key={i}
                className="rounded-full bg-cream px-4 py-2.5 text-[13.5px] text-ink-soft hairline transition-colors duration-300 hover:bg-clay-wash"
              >
                {i}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------
   FAQ
------------------------------------------------------------------- */

export function FaqSection({
  items,
  lead = "Got any questions?",
  trail = "We've got answers.",
  className,
}: {
  items: { q: string; a: string }[];
  lead?: string;
  trail?: string;
  className?: string;
}) {
  return (
    <section className={cx("bg-cream pb-20 sm:pb-24", className)}>
      <Container>
        <Reveal>
          <SectionHeading eyebrow="FAQs" lead={lead} trail={trail} className="mx-auto" />
        </Reveal>
        <Reveal delay={140} className="mx-auto mt-12 max-w-[800px]">
          <Accordion defaultOpen={0} items={items.map((f) => ({ title: f.q, body: f.a }))} />
        </Reveal>
      </Container>
    </section>
  );
}
