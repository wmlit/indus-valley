import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ChipRow, IconGrid, Split } from "@/components/sections/bits";
import { CtaBand } from "@/components/sections/cta-band";
import { RangeBar } from "@/components/art/valley";
import { Reveal } from "@/components/ui/reveal";
import {
  AutoCheck,
  Blueprint,
  CalendarArrow,
  CheckGrid,
  DocSearch,
  Gauge,
  Users,
} from "@/components/ui/icons";
import { Container, cx } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Testing Services",
  description:
    "Flexible, scalable testing tailored to the project — functional, automated and performance testing across healthcare, banking, telecom and ERP applications.",
};

const roles = [
  { icon: Users, title: "Test Managers", body: "Own the plan, the risk and the go/no-go." },
  { icon: CheckGrid, title: "Functional / Manual Testers", body: "Depth in the business rules, not just the script." },
  { icon: AutoCheck, title: "Automation Testers", body: "Suites that survive the next release." },
  { icon: Gauge, title: "Performance Testers", body: "Load characterised before it reaches production." },
];

const models = [
  {
    title: "Executive Assessments",
    body: "A short, senior-led read of where your testing actually stands — coverage, tooling, and the risk you are carrying without knowing it.",
  },
  {
    title: "Staff Augmentation & Onshore-Only",
    body: "Experienced testers inside your team, accountable to your delivery lead, on your ground.",
  },
  {
    title: "Managed Testing Service",
    body: "We own the testing outcome end to end, blended onsite–offshore, with reporting you can take to a steering committee.",
  },
];

export default function TestingPage() {
  return (
    <>
      <PageHero
        slot="TEST-HERO"
        px="21:9 · 2800×1200"
        eyebrow="Testing Services"
        lead="Successful testing"
        trail="is not a phase, it's a discipline."
        sub="Our testing services are designed to be flexible, scalable and tailored to our clients' project needs. From small to large companies, our consultants understand your industry at every stage of the project lifecycle."
        alt="Macro grid of illuminated test indicators"
      />

      <Split
        eyebrow="Why it matters"
        lead="A robust history of success,"
        trail="across several domains."
        body="Our clients reap the benefits of working with an experienced team of professionals who know how to test and drive success. Our holistic approach focuses not only on the technical and business competencies, but on the other disciplines required to get there."
        bullets={[
          "Test strategy owned by someone senior enough to say no",
          "Automation built to survive the next release, not to demo well",
          "Performance characterised before production finds it for you",
        ]}
        media={<CoverageCard />}
        className="pt-20 sm:pt-24"
      />

      <IconGrid
        eyebrow="Competencies"
        lead="Nine competencies"
        trail="that make up the practice."
        items={[
          { icon: CalendarArrow, title: "Testing execution and delivery" },
          { icon: DocSearch, title: "Test requirement engineering" },
          { icon: Blueprint, title: "Testing programs and projects" },
          { icon: AutoCheck, title: "Test automation tools" },
          { icon: Gauge, title: "Performance testing" },
          { icon: CheckGrid, title: "Testing tool selection" },
          { icon: Users, title: "Test management tools" },
          { icon: AutoCheck, title: "Automation & performance tools" },
          { icon: DocSearch, title: "Defect tools" },
        ]}
        cols={3}
      />

      {/* roles */}
      <section className="bg-cream pb-20 sm:pb-24">
        <Container>
          <Reveal>
            <h2 className="max-w-[18ch] text-[clamp(1.8rem,3.9vw,2.7rem)]">
              <span className="text-ink">Four roles</span>{" "}
              <span className="text-faint">we staff from.</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {roles.map((r, i) => {
              const Ico = r.icon;
              return (
                <Reveal key={r.title} delay={i * 90}>
                  <div className="flex h-full flex-col rounded-slab bg-chalk p-6 hairline sm:p-7">
                    <span className="grid size-11 place-items-center rounded-xl bg-cream text-clay hairline">
                      <Ico />
                    </span>
                    <h3 className="mt-7 text-[16px] font-medium text-ink">{r.title}</h3>
                    <p className="mt-2 text-[13px] leading-[1.6] text-muted">{r.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* delivery models */}
      <section className="bg-cream pb-20 sm:pb-24">
        <Container>
          <Reveal>
            <h2 className="max-w-[18ch] text-[clamp(1.8rem,3.9vw,2.7rem)]">
              <span className="text-ink">Three delivery models,</span>{" "}
              <span className="text-faint">pick the one that fits.</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {models.map((m, i) => (
              <Reveal key={m.title} delay={i * 100}>
                <div
                  className={cx(
                    "flex h-full flex-col rounded-slab p-7 sm:p-8",
                    i === 0 ? "ember-wash text-white grain" : "bg-chalk hairline",
                  )}
                >
                  <span className={cx("micro", i === 0 ? "text-white/45" : "text-faint")}>
                    Model {i + 1}
                  </span>
                  <h3
                    className={cx(
                      "mt-6 text-[19px] tracking-[-0.03em]",
                      i === 0 ? "text-white" : "text-ink",
                    )}
                  >
                    {m.title}
                  </h3>
                  <p
                    className={cx(
                      "mt-3 text-[13.5px] leading-[1.7]",
                      i === 0 ? "text-white/60" : "text-muted",
                    )}
                  >
                    {m.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ChipRow
        label="Industries we test across"
        items={[
          "Healthcare — Facets, QNXT, HealthRules, AMISYS Advance",
          "Banking & inter-banking operations",
          "Telecom",
          "Product testing, web portal & web services",
          "Database & ERP applications",
        ]}
      />

      <CtaBand />
    </>
  );
}

function CoverageCard() {
  const rows = [
    { label: "Functional coverage", v: 88, low: "Partial", high: "Complete" },
    { label: "Regression automated", v: 62, low: "Manual", high: "Automated" },
    { label: "Performance characterised", v: 74, low: "Unknown", high: "Modelled" },
  ];
  return (
    <div className="rounded-slab bg-chalk p-7 hairline sm:p-9">
      <span className="micro text-faint">Where a testing assessment lands</span>
      <div className="mt-8 flex flex-col gap-7">
        {rows.map((r) => (
          <div key={r.label}>
            <div className="flex items-baseline justify-between">
              <span className="text-[13.5px] text-ink-soft">{r.label}</span>
              <span className="text-[20px] font-medium tracking-[-0.03em] text-ink tnum">
                {r.v}
                <span className="text-[12px] text-muted">%</span>
              </span>
            </div>
            <RangeBar value={r.v} low={r.low} high={r.high} className="mt-3" />
          </div>
        ))}
      </div>
      <p className="mt-8 text-[12.5px] leading-snug text-muted">
        Illustrative of the dimensions we score. Your baseline comes out of the
        assessment itself.
      </p>
    </div>
  );
}
