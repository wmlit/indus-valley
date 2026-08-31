import { offices } from "@/lib/site";
import { Figure } from "../ui/figure";
import { Reveal } from "../ui/reveal";
import { Clock, Envelope, Phone, Pin } from "../ui/icons";
import { ArrowRight, Container, cx } from "../ui/primitives";

/**
 * Both offices, side by side. Shown together deliberately — the US office and
 * the Hyderabad delivery centre are the onsite–offshore model, so splitting
 * them across pages would undersell it.
 */
export function Offices({
  eyebrow = "Where we are",
  lead = "Two offices,",
  trail = "one working day that never closes.",
  sub = "Senior practitioners sit with the business in Ohio. Delivery carries on in Hyderabad after the US day ends — which is how 24×7 support is a schedule rather than a promise.",
  className,
}: {
  eyebrow?: string;
  lead?: string;
  trail?: string;
  sub?: string;
  className?: string;
}) {
  return (
    <section className={cx("bg-cream pb-20 sm:pb-24", className)}>
      <Container>
        {eyebrow ? (
          <Reveal>
            <span className="micro text-clay">{eyebrow}</span>
          </Reveal>
        ) : null}
        <Reveal delay={80}>
          <h2
            className={cx(
              "max-w-[20ch] text-[clamp(1.8rem,3.9vw,2.7rem)]",
              eyebrow && "mt-5",
            )}
          >
            <span className="text-ink">{lead}</span>{" "}
            <span className="text-faint">{trail}</span>
          </h2>
        </Reveal>
        {sub ? (
          <Reveal delay={150}>
            <p className="mt-6 max-w-[58ch] text-[15px] leading-[1.7] text-muted">{sub}</p>
          </Reveal>
        ) : null}

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {offices.map((o, i) => (
            <Reveal key={o.id} delay={i * 110}>
              <article className="group flex h-full flex-col overflow-hidden rounded-slab bg-chalk hairline transition-shadow duration-500 hover:shadow-float">
                <div className="relative overflow-hidden">
                  <Figure
                    slot={o.slot}
                    alt={o.alt}
                    ratio="16/9"
                    px="2000×1125"
                    sizes="(max-width: 1024px) 100vw, 570px"
                    className="transition-transform duration-900 ease-out-soft group-hover:scale-[1.03]"
                  />
                  <span
                    className={cx(
                      "absolute top-5 left-5 rounded-full px-3 py-1.5 text-[11.5px] font-medium backdrop-blur-md",
                      i === 0
                        ? "bg-clay text-white"
                        : "bg-ink/60 text-white hairline-light",
                    )}
                  >
                    {o.label}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <h3 className="text-[21px] tracking-[-0.03em] text-ink">{o.city}</h3>
                  <span className="micro mt-2 text-faint">{o.country}</span>

                  <p className="mt-5 text-[14px] leading-[1.7] text-muted">
                    {o.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>

                  <p className="mt-5 max-w-[44ch] text-[13.5px] leading-[1.6] text-ink-soft">
                    {o.note}
                  </p>

                  <ul className="mt-7 flex flex-col gap-3 border-t border-line-soft pt-6">
                    {o.phone ? (
                      <Row icon={<Phone className="size-4" />} href={`tel:${o.phone.replace(/[^\d]/g, "")}`}>
                        {o.phone}
                      </Row>
                    ) : null}
                    <Row icon={<Envelope className="size-4" />} href={`mailto:${o.email}`}>
                      {o.email}
                    </Row>
                    <Row icon={<Clock className="size-4" />}>{o.hours}</Row>
                  </ul>

                  <a
                    href={o.maps}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-5 py-3 text-[13px] font-medium text-cream transition-colors hover:bg-ink-soft"
                  >
                    <Pin className="size-4" />
                    Open in Maps
                    <ArrowRight className="size-3" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Row({
  icon,
  href,
  children,
}: {
  icon: React.ReactNode;
  href?: string;
  children: React.ReactNode;
}) {
  const body = (
    <>
      <span className="text-clay">{icon}</span>
      <span className={cx("text-[13.5px]", href ? "text-ink" : "text-muted")}>{children}</span>
    </>
  );
  return (
    <li>
      {href ? (
        <a href={href} className="flex items-center gap-3 transition-colors hover:text-clay">
          {body}
        </a>
      ) : (
        <span className="flex items-center gap-3">{body}</span>
      )}
    </li>
  );
}
