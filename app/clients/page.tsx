import type { Metadata } from "next";
import { clients } from "@/lib/site";
import { PageHero } from "@/components/sections/page-hero";
import { ChipRow } from "@/components/sections/bits";
import { CtaBand } from "@/components/sections/cta-band";
import { Testimonial } from "@/components/home/team";
import { Figure } from "@/components/ui/figure";
import { Reveal } from "@/components/ui/reveal";
import { ArrowRight, Container, cx } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Clients",
  description:
    "Thirty-four enterprises — from Toyota and Kroger to Carestream Health and Stanford University — have trusted Indus Valley Consultants with their systems.",
};

const work = [
  {
    slot: "CLIENT-WORK-1",
    tag: "Middleware & B2B",
    title: "Key B2B mappings over the standard EDI framework",
    body: "Middleware strategy, integration delivery and custom webMethods rollouts where unique internal integrations were required.",
    client: "Carestream Health",
    alt: "Enterprise operations floor at dusk",
  },
  {
    slot: "CLIENT-WORK-2",
    tag: "Payer systems",
    title: "Implementation and upgrade programmes",
    body: "Planning through go-live on Facets, HealthRules and AMISYS Advance — configuration design, EDI transactions, extracts and the testing around all of it.",
    client: "Healthcare payers",
    alt: "Healthcare administration corridor",
  },
  {
    slot: "CLIENT-WORK-3",
    tag: "EPM & BI",
    title: "Consolidation, forecasting and the monthly close",
    body: "Budgeting, profit and cost management, account reconciliation and reporting built on one spine rather than five disconnected tools.",
    client: "Finance organisations",
    alt: "Finance floor at night seen through glass",
  },
];

export default function ClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our clients"
        lead="Thirty-four enterprises."
        trail="Most of them came back."
        sub="Trust comes with time. These are organisations that engaged us once and then kept engaging us — across payer systems, integration and enterprise performance management."
      />

      {/* logo wall */}
      <section className="bg-cream pb-20 sm:pb-24">
        <Container>
          <Reveal className="grid grid-cols-2 gap-px overflow-hidden rounded-slab bg-line sm:grid-cols-3 lg:grid-cols-6">
            {clients.map((name, i) => (
              <div
                key={name}
                className={cx(
                  "flex min-h-[104px] items-center justify-center bg-chalk px-4 text-center transition-colors duration-300 hover:bg-clay-wash",
                )}
              >
                <span
                  className={cx(
                    "text-ink/45 transition-colors duration-300 hover:text-ink",
                    i % 3 === 0
                      ? "text-[16px] font-semibold tracking-[-0.03em]"
                      : i % 3 === 1
                        ? "text-[12px] font-medium tracking-[0.14em] uppercase"
                        : "text-[16px] font-normal",
                  )}
                >
                  {name}
                </span>
              </div>
            ))}
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 text-[13px] text-faint">
              Client marks are the property of their respective owners and are shown
              to indicate engagement history only.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* featured work */}
      <section className="bg-cream pb-20 sm:pb-24">
        <Container>
          <Reveal>
            <h2 className="max-w-[18ch] text-[clamp(1.8rem,3.9vw,2.7rem)]">
              <span className="text-ink">The shape of the work,</span>{" "}
              <span className="text-faint">in three engagements.</span>
            </h2>
          </Reveal>

          <div className="mt-12 flex flex-col gap-4">
            {work.map((w, i) => (
              <Reveal key={w.slot} delay={i * 110}>
                <article
                  className={cx(
                    "group grid overflow-hidden rounded-slab bg-chalk hairline transition-shadow duration-500 hover:shadow-float lg:grid-cols-[1fr_1.1fr]",
                    i % 2 === 1 && "lg:grid-cols-[1.1fr_1fr]",
                  )}
                >
                  <Figure
                    slot={w.slot}
                    alt={w.alt}
                    ratio="16/10"
                    px="1800×1125"
                    sizes="(max-width: 1024px) 100vw, 560px"
                    className={cx(i % 2 === 1 && "lg:order-2")}
                  />
                  <div className="flex flex-col justify-center p-7 sm:p-10">
                    <span className="micro text-clay">{w.tag}</span>
                    <h3 className="mt-5 max-w-[22ch] text-[clamp(1.25rem,2.4vw,1.6rem)] text-ink">
                      {w.title}
                    </h3>
                    <p className="mt-4 max-w-[46ch] text-[14.5px] leading-[1.7] text-muted">
                      {w.body}
                    </p>
                    <span className="mt-7 flex items-center gap-2 text-[13px] font-medium text-ink">
                      <span className="grid size-7 place-items-center rounded-full bg-clay text-white">
                        <ArrowRight className="size-3" />
                      </span>
                      {w.client}
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Testimonial />

      <ChipRow
        label="Industries we work across"
        items={[
          "Healthcare payers",
          "Banking & inter-banking operations",
          "Telecom",
          "Retail & manufacturing",
          "Higher education",
          "Product, web portal & web services",
          "Database & ERP applications",
        ]}
      />

      <CtaBand />
    </>
  );
}
