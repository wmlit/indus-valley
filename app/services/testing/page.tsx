import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ChipRow, Split } from "@/components/sections/bits";
import { CtaBand } from "@/components/sections/cta-band";
import { Reveal } from "@/components/ui/reveal";
import {
  AutoCheck,
  CheckGrid,
  Gauge,
  ShieldCheck,
} from "@/components/ui/icons";
import { Container, cx } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Testing Services",
  description:
    "Flexible, scalable testing tailored to the project — functional, automated and performance testing across healthcare, banking, telecom and ERP applications.",
};

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
        media={<TestingGates />}
        className="pt-20 sm:pt-24"
      />

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

/* ------------------------------------------------------------------
   How a release gets through testing

   Replaces a card that scored three dimensions at 88 / 62 / 74. A reader
   sees a percentage and reads it as a measurement; a caption underneath
   does not undo that. Drawn here instead is the discipline itself — a
   run board behind, the three gates a release passes through in front,
   and nothing quantified that we have not measured on a real engagement.

   The board is deterministic (a hashed sine, no Math.random) so server
   and client render identical markup and hydration does not drift.
------------------------------------------------------------------- */

const COLS = 26;
const ROWS = 15;

const board = (() => {
  const cells: { x: number; y: number; tone: "clay" | "river" | "dim"; o: number }[] = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const h = Math.sin(c * 12.9898 + r * 78.233) * 43758.5453;
      const f = h - Math.floor(h);
      /* a slow diagonal sweep, so the board reads as a run in progress
         rather than as noise */
      const sweep = (Math.sin(c * 0.29 - r * 0.2) + 1) / 2;
      const tone = f > 0.94 ? "clay" : sweep > 0.52 ? "river" : "dim";
      cells.push({
        x: c * 10,
        y: r * 10,
        tone,
        o: tone === "clay" ? 0.75 + f * 0.25 : tone === "river" ? 0.18 + sweep * 0.3 : 0.07 + f * 0.06,
      });
    }
  }
  return cells;
})();

function RunBoard({ className }: { className?: string }) {
  return (
    <svg
      viewBox={`0 0 ${COLS * 10 - 2} ${ROWS * 10 - 2}`}
      fill="none"
      aria-hidden
      preserveAspectRatio="xMidYMid slice"
      className={className}
    >
      <defs>
        <linearGradient id="rb-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.95" />
          <stop offset="55%" stopColor="#fff" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0.08" />
        </linearGradient>
        <mask id="rb-mask">
          <rect width={COLS * 10} height={ROWS * 10} fill="url(#rb-fade)" />
        </mask>
      </defs>
      <g mask="url(#rb-mask)">
        {board.map((c, i) => (
          <rect
            key={i}
            x={c.x}
            y={c.y}
            width="8"
            height="8"
            rx="2.4"
            fill={c.tone === "clay" ? "#E2622B" : "#8BA4B4"}
            fillOpacity={c.o}
          />
        ))}
      </g>
    </svg>
  );
}

const gates = [
  {
    icon: CheckGrid,
    label: "Functional",
    note: "Does it do what the requirement actually says.",
  },
  {
    icon: AutoCheck,
    label: "Automated regression",
    note: "Built to survive the next release, not to demo well.",
  },
  {
    icon: Gauge,
    label: "Performance",
    note: "Characterised under load before production finds the ceiling.",
  },
];

function TestingGates() {
  return (
    <div className="relative isolate overflow-hidden rounded-slab kiln-wash p-6 text-white grain sm:p-8">
      {/* the run board sits behind everything, dissolving downward */}
      <RunBoard className="pointer-events-none absolute -top-6 -right-4 -left-4 h-[62%] opacity-90" />

      <div className="relative">
        <span className="micro text-white/40">How a release gets through testing</span>
      </div>

      {/* the three gates, as glass over the board */}
      <ol className="relative mt-[128px] flex flex-col gap-2.5">
        {gates.map((g, i) => {
          const Ico = g.icon;
          return (
            <li
              key={g.label}
              className="flex items-start gap-4 rounded-2xl bg-white/[0.07] p-4 shadow-lift backdrop-blur-md hairline-light"
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-clay text-white">
                <Ico className="size-[17px]" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex items-baseline gap-2.5">
                  <span className="micro text-white/35 tnum">0{i + 1}</span>
                  <span className="text-[14.5px] font-medium text-white">{g.label}</span>
                </span>
                <span className="mt-1 block text-[12.5px] leading-[1.55] text-white/45">
                  {g.note}
                </span>
              </span>
            </li>
          );
        })}
      </ol>

      {/* what comes out the other end */}
      <div className="relative mt-2.5 flex items-center gap-4 rounded-2xl bg-clay p-4">
        <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-white/15 text-white">
          <ShieldCheck className="size-[17px]" />
        </span>
        <span className="text-[14.5px] font-medium text-white">
          Released, with the evidence attached
        </span>
      </div>

      <p className="relative mt-6 text-[12.5px] leading-snug text-white/40">
        Which gates an engagement needs comes out of the assessment. Most clients
        start with the first and add the other two as the suite earns its keep.
      </p>
    </div>
  );
}
