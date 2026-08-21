import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { IconGrid, Split } from "@/components/sections/bits";
import { DeliveryModel } from "@/components/sections/engagements";
import { CtaBand } from "@/components/sections/cta-band";
import { Figure } from "@/components/ui/figure";
import { Reveal } from "@/components/ui/reveal";
import {
  BarReport,
  Blueprint,
  CalendarArrow,
  CheckGrid,
  DocSearch,
  Exchange,
  Gauge,
  Plug,
} from "@/components/ui/icons";
import { ArrowRight, Container, cx } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Health Care",
  description:
    "Healthcare consulting for payers and providers of every size — implementation, upgrades, configuration, testing, extracts, interfaces and EDI across Facets™, HealthRules™, AMISYS Advance™, QNXT™ and Epic®.",
};

const platforms = [
  {
    name: "Facets™",
    body: "End-to-end support across implementation, upgrades, configuration and testing, plus the extracts, interfaces and EDI transactions that keep it connected.",
  },
  {
    name: "HealthRules™",
    body: "Implementation, upgrades, configuration and testing handled start to finish, backed by extracts, interfaces and EDI transaction support.",
  },
  {
    name: "AMISYS Advance™",
    body: "From implementation and upgrades through configuration and testing, with full support for extracts, interfaces and EDI transactions.",
  },
  {
    name: "QNXT™",
    body: "Configuration, testing, upgrades and implementation support, rounded out by extracts, interfaces and EDI transaction work.",
  },
  {
    name: "Epic®",
    body: "Module support, configuration and testing.",
  },
];

export default function HealthCarePage() {
  return (
    <>
      <PageHero
        slot="HC-HERO"
        px="21:9 · 2800×1200"
        eyebrow="Health Care"
        lead="Payer and provider systems."
        trail="Built by the people who actually run them."
        sub="Indus Valley Consultants delivers healthcare consulting built for payers and providers of every size — practical services and solutions that streamline operations, boost efficiency and drive lasting productivity gains across the platforms you rely on every day."
        chips={["Facets™", "HealthRules™", "AMISYS Advance™", "QNXT™", "Epic®"]}
        alt="Healthcare payer operations floor in soft daylight"
      />

      {/* platforms */}
      <section className="bg-cream py-20 sm:py-24">
        <Container>
          <Reveal>
            <h2 className="max-w-[20ch] text-[clamp(1.8rem,3.9vw,2.7rem)]">
              <span className="text-ink">Five platforms,</span>{" "}
              <span className="text-faint">two decades of implementations.</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {platforms.map((p, i) => (
              <Reveal key={p.name} delay={i * 100}>
                <div
                  className={cx(
                    "flex h-full flex-col rounded-slab p-7 sm:p-8",
                    i === 0 ? "ember-wash text-white grain" : "bg-chalk hairline",
                  )}
                >
                  <span className={cx("micro", i === 0 ? "text-white/45" : "text-faint")}>
                    Platform {i + 1}
                  </span>
                  <h3
                    className={cx(
                      "mt-6 text-[22px] tracking-[-0.03em]",
                      i === 0 ? "text-white" : "text-ink",
                    )}
                  >
                    {p.name}
                  </h3>
                  <p
                    className={cx(
                      "mt-3 text-[13.5px] leading-[1.7]",
                      i === 0 ? "text-white/60" : "text-muted",
                    )}
                  >
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Split
        eyebrow="Implementation & upgrades"
        lead="From planning phase"
        trail="to actual go-live."
        body="Indus Valley Consultants leverages the experience gained from supporting nearly two decades of implementations and upgrades, so your organization can continue the path to success."
        bullets={[
          "Scope and sequence defined against the landscape we mapped",
          "Configuration design owned by people who have configured it before",
          "Extracts, interfaces and EDI treated as first-class deliverables",
        ]}
        media={
          <Figure
            slot="HC-PAYER"
            alt="Claim paperwork and a laptop on a warm wood desk"
            ratio="3/2"
            px="1600×1067"
            sizes="(max-width: 1024px) 100vw, 560px"
            className="rounded-slab"
          />
        }
      />

      <Split
        eyebrow="Project planning & oversight"
        lead="Driving toward a timely,"
        trail="cost-effective project."
        body="Our project management team works with key stakeholders inside your organization to define the implementation strategy and project scope. Our focus is on execution — reducing the overall impact to the business while the work is underway."
        media={<DeliveryModel />}
        flip
      />

      <IconGrid
        eyebrow="Practice areas"
        lead="Eight disciplines"
        trail="staffed from within the practice."
        items={[
          { icon: CalendarArrow, title: "Project management" },
          { icon: DocSearch, title: "Business analysis" },
          { icon: Blueprint, title: "Configuration design" },
          { icon: BarReport, title: "Product knowledge" },
          { icon: Plug, title: "Custom development", body: "Interfaces and extracts" },
          { icon: Exchange, title: "EDI transactions" },
          { icon: BarReport, title: "Business intelligence & reporting" },
          { icon: CheckGrid, title: "Testing", body: "Functional, automated and performance" },
        ]}
      />

      {/* testing cross-link */}
      <section id="testing" className="scroll-mt-28 bg-cream pb-20 sm:pb-24">
        <Container>
          <Reveal>
            <Link
              href="/services/testing"
              className="group flex flex-col items-start justify-between gap-6 rounded-slab bg-chalk p-7 hairline transition-colors duration-300 hover:bg-clay-wash sm:flex-row sm:items-center sm:p-9"
            >
              <div className="flex items-start gap-5">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-cream text-clay hairline">
                  <Gauge />
                </span>
                <div>
                  <h2 className="text-[19px] text-ink">
                    Testing services, across every practice
                  </h2>
                  <p className="mt-2 max-w-[58ch] text-[13.5px] leading-[1.6] text-muted">
                    Successful completion of testing is a key component of any project.
                    Nine competencies, four roles and three delivery models — now a
                    practice of its own.
                  </p>
                </div>
              </div>
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-ink text-cream transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight />
              </span>
            </Link>
          </Reveal>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
