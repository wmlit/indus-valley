import { capabilities } from "@/lib/site";
import { Accordion } from "../ui/accordion";
import { Compare } from "../ui/compare";
import { Reveal } from "../ui/reveal";
import { OrderedStack, TangledStack } from "../art/valley";
import { CheckCircle, Drag } from "../ui/icons";
import {
  ArrowRight,
  Btn,
  Container,
  Headline,
  SectionHeading,
  cx,
} from "../ui/primitives";

/* ------------------------------------------------------------------
   6 · How it lands
------------------------------------------------------------------- */

const promises = [
  {
    title: "The whole landscape, not one system",
    body: "We map integrations, configuration and reporting together — the problem is rarely where it first appears.",
  },
  {
    title: "A sequenced, evidence-backed plan",
    body: "Recommendations ranked by impact, each traceable to something measured in the assessment.",
  },
  {
    title: "Delivery that does not stall",
    body: "Onsite–offshore, 24×7 support and maintenance, and senior people who stay through cutover.",
  },
];

export function HowItLands() {
  return (
    <section className="bg-cream pb-20 sm:pb-28">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <div className="relative">
              <Compare
                className="aspect-[4/3.2]"
                caption="Integration landscape"
                beforeLabel="Point to point"
                afterLabel="Integrated"
                before={<TangledStack />}
                after={<OrderedStack />}
              />
              <span className="micro mt-4 flex items-center justify-center gap-2 text-faint">
                <Drag className="size-4" />
                Drag to compare
              </span>
            </div>
          </Reveal>

          <div className="lg:pl-4">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-chalk px-3.5 py-1.5 text-[11px] font-medium text-ink-soft hairline">
                <span className="size-1.5 rounded-full bg-clay" />
                Modernisation without the rip-and-replace
              </span>
            </Reveal>

            <Reveal delay={100}>
              <Headline
                as="h2"
                lead="Replacement isn't necessary,"
                trail="connection usually is."
                className="mt-6 text-[clamp(2rem,4.4vw,3rem)]"
              />
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-6 max-w-[48ch] text-[15px] leading-[1.7] text-muted">
                We don&apos;t believe in impossible challenges. With innovative tools,
                tested templates and carefully designed organisational frameworks,
                we get you closer to your goals faster — without tearing out what
                already works.
              </p>
            </Reveal>

            <Reveal delay={260}>
              <ul className="mt-8 flex flex-col gap-2">
                {promises.map((p) => (
                  <li
                    key={p.title}
                    className="flex items-start gap-3.5 rounded-2xl bg-chalk p-5 hairline transition-colors duration-300 hover:bg-clay-wash"
                  >
                    <CheckCircle className="mt-0.5 text-clay" />
                    <span className="flex flex-col">
                      <span className="text-[15px] font-medium text-ink">{p.title}</span>
                      <span className="mt-1 text-[13px] leading-snug text-muted">{p.body}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={340}>
              <Btn href="/services/digital-integration" className="mt-8">
                Explore digital integration
                <ArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-0.5" />
              </Btn>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------
   7 · Capability index
------------------------------------------------------------------- */

const total = capabilities.reduce((n, c) => n + c.count, 0);

export function CapabilityIndex() {
  return (
    <section className="bg-cream pb-20 sm:pb-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Capability index"
            lead={`${total} delivery capabilities,`}
            trail="across three practices."
            sub="The full list of what our consultants actually do on client sites — grouped the way we staff it."
            className="mx-auto"
          />
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {["Onsite, offshore or blended", "Testing runs across every practice"].map((t) => (
              <span key={t} className="flex items-center gap-2 text-[13.5px] text-muted">
                <CheckCircle className="size-[18px] text-clay" />
                {t}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200} className="mx-auto mt-12 max-w-[880px]">
          <Accordion
            defaultOpen={0}
            items={capabilities.map((c) => ({
              title: c.group,
              meta: `${c.count} ${c.count === 1 ? "capability" : "capabilities"}`,
              body: (
                <ul className="flex flex-wrap gap-2 pt-1">
                  {c.items.map((item) => (
                    <li
                      key={item}
                      className={cx(
                        "rounded-full bg-chalk px-3.5 py-2 text-[13px] text-ink-soft hairline",
                      )}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              ),
            }))}
          />
        </Reveal>
      </Container>
    </section>
  );
}
