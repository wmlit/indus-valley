import type { Metadata } from "next";
import Link from "next/link";
import { faqs } from "@/lib/site";
import { PageHero } from "@/components/sections/page-hero";
import { FaqSection, Split } from "@/components/sections/bits";
import { DeliveryTimeline, Engagements } from "@/components/sections/engagements";
import { CtaBand } from "@/components/sections/cta-band";
import { Figure } from "@/components/ui/figure";
import { Reveal } from "@/components/ui/reveal";
import { CheckGrid, HealthCare, HexChain, Ledger, NodeMesh } from "@/components/ui/icons";
import { ArrowRight, Container } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Healthcare payer systems, enterprise performance management & BI, digital integration and testing — delivered onsite, offshore or blended.",
};

const practices = [
  {
    n: "01",
    slot: "SRV-CARD-1",
    icon: HealthCare,
    title: "Health Care",
    href: "/services/health-care",
    body: "Consulting for payers of any size — implementation and upgrades, configuration design, EDI, extracts and reporting.",
    points: ["Facets™", "HealthRules™", "AMISYS Advance™"],
    alt: "Healthcare administration office in warm daylight",
  },
  {
    n: "02",
    slot: "SRV-CARD-2",
    icon: Ledger,
    title: "Enterprise Performance Management & BI",
    href: "/services/epm-bi",
    body: "More than two decades of consolidation, planning and reporting work, from concept to completion.",
    points: ["Consolidation", "Budgeting & forecasting", "Data visualization"],
    alt: "Finance workspace at dusk",
  },
  {
    n: "03",
    slot: "SRV-CARD-3",
    icon: NodeMesh,
    title: "Digital Integration",
    href: "/services/digital-integration",
    body: "End-to-end, future-ready enterprise application integration with the architecture work behind it.",
    points: ["Hybrid integration", "B2B services", "24×7 support"],
    alt: "Fibre-optic cabling in a warm-lit server room",
  },
  {
    n: "04",
    slot: "SRV-CARD-4",
    icon: CheckGrid,
    title: "Testing Services",
    href: "/services/testing",
    body: "Flexible, scalable testing tailored to the project — functional, automated and performance, across every practice.",
    points: ["Test management", "Automation", "Performance"],
    alt: "World map of light trails across time zones",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        lead="Three practices,"
        trail="one delivery discipline."
        sub="Most clients arrive with a problem in one practice and discover it lives in two. We are set up so that does not become your problem."
      />

      {/* practice cards */}
      <section className="bg-cream pb-20 sm:pb-24">
        <Container>
          <div className="grid gap-4 lg:grid-cols-2">
            {practices.map((p, i) => {
              const Ico = p.icon;
              return (
                <Reveal key={p.n} delay={i * 100}>
                  <Link
                    href={p.href}
                    className="group flex h-full flex-col overflow-hidden rounded-slab bg-chalk hairline transition-all duration-500 ease-out-soft hover:-translate-y-1 hover:shadow-float"
                  >
                    <div className="relative overflow-hidden">
                      <Figure
                        slot={p.slot}
                        alt={p.alt}
                        ratio="3/2"
                        px="1400×933"
                        sizes="(max-width: 1024px) 100vw, 570px"
                        className="transition-transform duration-900 ease-out-soft group-hover:scale-[1.04]"
                      />
                      <span className="absolute top-5 left-5 grid size-10 place-items-center rounded-xl bg-ink/60 text-white backdrop-blur-md hairline-light">
                        <Ico />
                      </span>
                      <span className="micro absolute top-6 right-6 text-white/70">{p.n}</span>
                    </div>

                    <div className="flex flex-1 flex-col p-7 sm:p-8">
                      <h2 className="text-[21px] tracking-[-0.03em] text-ink sm:text-[23px]">
                        {p.title}
                      </h2>
                      <p className="mt-3 max-w-[46ch] text-[14px] leading-[1.7] text-muted">
                        {p.body}
                      </p>
                      <ul className="mt-6 flex flex-wrap gap-2">
                        {p.points.map((pt) => (
                          <li
                            key={pt}
                            className="rounded-full bg-cream px-3 py-1.5 text-[12.5px] text-ink-soft hairline"
                          >
                            {pt}
                          </li>
                        ))}
                      </ul>
                      <span className="mt-auto inline-flex items-center gap-1.5 pt-7 text-[13px] font-medium text-clay">
                        More details
                        <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <Split
        eyebrow="Delivery model"
        lead="Onsite – offshore,"
        trail="or onshore only."
        body="Senior practitioners stay close to the business while the build continues around the clock. If your constraints require onshore-only, that is a supported model too — and 24×7 support and maintenance sits behind both."
        bullets={[
          "Follow-the-sun build with onshore accountability",
          "Staff augmentation inside your existing delivery team",
          "Managed service where we own the outcome end to end",
        ]}
        media={<DeliveryTimeline />}
        flip
      />

      <Engagements />

      {/* blockchain cross-link */}
      <section className="bg-cream pb-20 sm:pb-24">
        <Container>
          <Reveal>
            <Link
              href="/services/blockchain"
              className="group flex flex-col items-start justify-between gap-6 rounded-slab bg-chalk p-7 hairline transition-colors duration-300 hover:bg-clay-wash sm:flex-row sm:items-center sm:p-9"
            >
              <div className="flex items-start gap-5">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-cream text-clay hairline">
                  <HexChain />
                </span>
                <div>
                  <h2 className="text-[19px] text-ink">Blockchain, through BlockRock Technologies</h2>
                  <p className="mt-2 max-w-[58ch] text-[13.5px] leading-[1.6] text-muted">
                    Strategy assessment, rapid prototyping, smart contracts and dApp
                    development — for enterprises that have understood both the
                    opportunity and the complexity.
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

      <FaqSection items={faqs} />
      <CtaBand />
    </>
  );
}

