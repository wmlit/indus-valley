import { capabilities } from "@/lib/site";
import { Accordion } from "../ui/accordion";
import { Reveal } from "../ui/reveal";
import { CheckCircle } from "../ui/icons";
import { Container, SectionHeading } from "../ui/primitives";

/* ------------------------------------------------------------------
   Capability index

   Previously lived in home/landing.tsx alongside "How it lands". That
   file was deleted; this section came back on its own, so it now sits
   in its own file rather than resurrecting its old housemate.
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
                      className="rounded-full bg-chalk px-3.5 py-2 text-[13px] text-ink-soft hairline"
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
