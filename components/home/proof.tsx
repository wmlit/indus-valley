import Link from "next/link";
import { featuredClients } from "@/lib/site";
import { Figure } from "../ui/figure";
import { Reveal } from "../ui/reveal";
import { Sparkline } from "../art/valley";
import { HealthCare, Ledger, NodeMesh } from "../ui/icons";
import { ArrowRight, Container, cx } from "../ui/primitives";

/* ------------------------------------------------------------------
   1 · Client wall
------------------------------------------------------------------- */

export function ClientWall() {
  const row = [...featuredClients, ...featuredClients];

  return (
    <section className="border-b border-line-soft bg-cream py-14 sm:py-16">
      <Container>
        <Reveal>
          <p className="micro text-faint">Trusted by teams at</p>
        </Reveal>
      </Container>

      <Reveal delay={120} className="marquee mask-fade-x mt-7 overflow-hidden">
        <div className="marquee-track flex w-max items-center">
          {row.map((name, i) => (
            <span key={`${name}-${i}`} className="flex items-center">
              <span
                className={cx(
                  "px-8 whitespace-nowrap text-ink/35 transition-colors duration-500 hover:text-ink sm:px-11",
                  i % 3 === 0
                    ? "text-[22px] font-semibold tracking-[-0.04em]"
                    : i % 3 === 1
                      ? "text-[16px] font-medium tracking-[0.18em] uppercase"
                      : "text-[21px] font-normal tracking-[-0.01em]",
                )}
              >
                {name}
              </span>
              <span aria-hidden className="h-5 w-px bg-line" />
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------
   2 · Three practices — image cards
------------------------------------------------------------------- */

const cards = [
  {
    slot: "HOME-PRAC-HEALTH",
    icon: HealthCare,
    kicker: "Payer systems",
    title: "Health Care",
    body: "Implementation, upgrades, configuration and EDI on Facets, HealthRules and AMISYS Advance.",
    href: "/services/health-care",
    alt: "Healthcare administration office in warm daylight",
  },
  {
    slot: "HOME-PRAC-EPM",
    icon: Ledger,
    kicker: "Plan, close, report",
    title: "Performance Management & BI",
    body: "Consolidation, budgeting, forecasting, reconciliation and data visualization — concept to completion.",
    href: "/services/epm-bi",
    alt: "Finance workspace at dusk",
  },
  {
    slot: "HOME-PRAC-INTEG",
    icon: NodeMesh,
    kicker: "Connected enterprise",
    title: "Digital Integration",
    body: "Hybrid, B2B and enterprise application integration, with the architecture work behind it.",
    href: "/services/digital-integration",
    alt: "Fibre-optic cabling in a warm-lit server room",
  },
] as const;

export function PracticeCards() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <h2 className="max-w-[16ch] text-[clamp(2rem,4.6vw,3.2rem)]">
              <span className="text-ink">Three practices,</span>{" "}
              <span className="text-faint">one delivery discipline.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-[14px] font-medium text-ink"
            >
              All services
              <span className="grid size-8 place-items-center rounded-full bg-ink text-cream transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight />
              </span>
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.slot} delay={120 + i * 110}>
              <PracticeCard {...c} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function PracticeCard({
  slot,
  icon: Ico,
  kicker,
  title,
  body,
  href,
  alt,
}: (typeof cards)[number]) {
  return (
    <Link
      href={href}
      className="group relative flex h-full flex-col overflow-hidden rounded-slab transition-shadow duration-500 hover:shadow-float"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-slab">
        <Figure
          slot={slot}
          alt={alt}
          px="4:5 · 1200×1500"
          sizes="(max-width: 768px) 100vw, 33vw"
          scrim="bottom"
          fill
          className="transition-transform duration-900 ease-out-soft group-hover:scale-[1.04]"
        />

        <span className="absolute top-5 left-5 grid size-10 place-items-center rounded-xl bg-white/15 text-white backdrop-blur-md hairline-light">
          <Ico />
        </span>

        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          <span className="micro text-white/55">{kicker}</span>
          <h3 className="mt-3 text-[21px] text-white sm:text-[23px]">{title}</h3>
          <p className="mt-2.5 max-w-[34ch] text-[13.5px] leading-[1.6] text-white/65">
            {body}
          </p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-white">
            More details
            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}

/* ------------------------------------------------------------------
   3 · Proof strip
------------------------------------------------------------------- */

const stats = [
  { k: "Years delivering", v: "30", note: "Continuous, since 1996" },
  { k: "Enterprise clients", v: "34+", note: "Toyota to Stanford" },
  { k: "Practices", v: "3", note: "Payer · EPM & BI · integration" },
  { k: "Support", v: "24×7", note: "Onsite–offshore model" },
];

export function ProofStrip() {
  return (
    <section className="bg-cream pb-12 sm:pb-16">
      <Container>
        <Reveal className="grid grid-cols-2 gap-px overflow-hidden rounded-slab bg-line lg:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.k} className="flex flex-col gap-1 bg-chalk p-6 sm:p-7">
              <span className="micro text-faint">{s.k}</span>
              <span className="mt-2 text-[34px] leading-none font-medium tracking-[-0.04em] text-ink tnum sm:text-[40px]">
                {s.v}
              </span>
              <span className="text-[12.5px] text-muted">{s.note}</span>
              {i === 1 ? (
                <Sparkline
                  uid="stat-sl"
                  points={[4, 6, 5, 9, 8, 12, 14, 13, 18]}
                  className="mt-3 h-6 w-full"
                />
              ) : null}
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
