import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ChipRow, Split } from "@/components/sections/bits";
import { CtaBand } from "@/components/sections/cta-band";
import { Sparkline } from "@/components/art/valley";
import { Reveal } from "@/components/ui/reveal";
import { Container, cx } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Enterprise Performance Management & BI",
  description:
    "More than two decades of consolidation, budgeting, forecasting, profit and cost management, account reconciliation and data visualization — concept to completion.",
};

/* ------------------------------------------------------------------
   Each offering carries its own live figure. Same visual language,
   five different marks — nothing is a stock illustration.
------------------------------------------------------------------- */

const offerings = [
  {
    title: "Consolidation and Reporting",
    body: "One spine for the group close, with entity roll-ups that reconcile without a spreadsheet in the middle.",
    figure: <ConsolidationTree />,
  },
  {
    title: "Budgeting and Forecasting",
    body: "Plans that update as actuals land, with driver-based re-forecasts instead of an annual guess.",
    figure: <ForecastCurve />,
  },
  {
    title: "Profit and Cost Management",
    body: "Allocations traced end to end, so a margin number can be explained back to the transaction.",
    figure: <CostWaterfall />,
  },
  {
    title: "Account Reconciliation",
    body: "Reconciliations tracked, aged and evidenced — the close stops depending on who remembers what.",
    figure: <ReconTicks />,
  },
  {
    title: "Reporting, Analysis and Data Visualization",
    body: "One reporting layer people actually open, built on numbers they already trust.",
    figure: <DashboardGrid />,
  },
];

export default function EpmBiPage() {
  return (
    <>
      <PageHero
        slot="EPM-HERO"
        px="21:9 · 2800×1200"
        eyebrow="Enterprise Performance Management & BI"
        lead="Plan it, close it,"
        trail="then explain it."
        sub="Indus Valley has been serving clients for more than two decades in the field of Enterprise Performance Management and Business Intelligence. Our offerings run from concept to completion."
        alt="Corporate finance floor at blue hour"
      />

      {/* five offerings */}
      <section className="bg-cream py-20 sm:py-24">
        <Container>
          <Reveal>
            <h2 className="max-w-[19ch] text-[clamp(1.8rem,3.9vw,2.7rem)]">
              <span className="text-ink">Five things we are asked for,</span>{" "}
              <span className="text-faint">over and over.</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {offerings.map((o, i) => (
              <Reveal
                key={o.title}
                delay={i * 90}
                className={cx(i === 0 && "md:col-span-2 lg:col-span-1")}
              >
                <div className="flex h-full flex-col rounded-slab bg-chalk p-6 hairline transition-all duration-500 ease-out-soft hover:-translate-y-1 hover:shadow-float sm:p-7">
                  <div className="rounded-2xl bg-cream p-4">{o.figure}</div>
                  <h3 className="mt-6 text-[17px] tracking-[-0.03em] text-ink">{o.title}</h3>
                  <p className="mt-2.5 text-[13.5px] leading-[1.65] text-muted">{o.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Split
        eyebrow="The close"
        lead="Eleven days down to six,"
        trail="and it stayed there."
        body="A shorter close is not a reporting problem — it is a consolidation, reconciliation and ownership problem. We work the three together, then hand you something your team can run without us."
        bullets={[
          "Consolidation logic documented and owned inside your team",
          "Reconciliations aged and evidenced, not rediscovered each month",
          "Reporting rebuilt on the numbers the close actually produces",
        ]}
        media={<CloseCycle />}
      />

      <ChipRow
        label="Toolset we work in"
        items={[
          "Hyperion Suite",
          "Oracle EPM",
          "Applied OLAP Dodeca",
          "DB2",
          "SQL Server",
          "UNIX",
          "Essbase reporting",
        ]}
      />

      <CtaBand />
    </>
  );
}

/* ------------------------------------------------------------------
   Figures
------------------------------------------------------------------- */

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 200 96" fill="none" aria-hidden className="h-24 w-full">
      {children}
    </svg>
  );
}

function ConsolidationTree() {
  const leaves = [26, 76, 126, 176];
  return (
    <Frame>
      <rect x="72" y="8" width="56" height="20" rx="6" fill="#E2622B" />
      <rect x="86" y="16" width="28" height="3" rx="1.5" fill="#fff" fillOpacity="0.75" />
      {leaves.map((x) => (
        <g key={x}>
          <path
            d={`M100 28v14H${x}v14`}
            stroke="#100e0c"
            strokeOpacity="0.18"
            strokeWidth="1.2"
          />
          <rect x={x - 22} y="60" width="44" height="20" rx="6" fill="#fff" stroke="#100e0c" strokeOpacity="0.12" />
          <rect x={x - 12} y="68" width="24" height="3" rx="1.5" fill="#100e0c" fillOpacity="0.18" />
        </g>
      ))}
    </Frame>
  );
}

function ForecastCurve() {
  return (
    <div className="flex h-24 flex-col justify-center">
      <Sparkline
        uid="epm-fc"
        points={[22, 26, 24, 31, 34, 33, 40, 46, 44, 52]}
        className="h-16 w-full"
      />
      <div className="micro mt-2 flex justify-between text-faint">
        <span>Actuals</span>
        <span>Re-forecast</span>
      </div>
    </div>
  );
}

function CostWaterfall() {
  const bars = [
    { x: 12, y: 20, h: 52, tone: "ink" },
    { x: 52, y: 34, h: 16, tone: "line" },
    { x: 92, y: 46, h: 14, tone: "line" },
    { x: 132, y: 54, h: 10, tone: "line" },
    { x: 168, y: 32, h: 40, tone: "clay" },
  ];
  return (
    <Frame>
      <path d="M8 78h184" stroke="#100e0c" strokeOpacity="0.12" strokeWidth="1" />
      {bars.map((b, i) => (
        <rect
          key={i}
          x={b.x}
          y={b.y}
          width="24"
          height={b.h}
          rx="4"
          fill={b.tone === "clay" ? "#E2622B" : b.tone === "ink" ? "rgba(16,14,12,0.6)" : "rgba(16,14,12,0.14)"}
        />
      ))}
    </Frame>
  );
}

function ReconTicks() {
  const rows = [0, 1, 2, 3];
  return (
    <Frame>
      {rows.map((r) => (
        <g key={r}>
          <rect x="10" y={8 + r * 21} width="180" height="15" rx="5" fill="#fff" stroke="#100e0c" strokeOpacity="0.1" />
          <circle cx="21" cy={15.5 + r * 21} r="4.5" fill={r < 3 ? "#E2622B" : "rgba(16,14,12,0.14)"} />
          {r < 3 ? (
            <path
              d={`M19 ${15.5 + r * 21}l1.6 1.6 2.6-2.9`}
              stroke="#fff"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ) : null}
          <rect x="33" y={13.5 + r * 21} width={r === 3 ? 46 : 78} height="4" rx="2" fill="#100e0c" fillOpacity="0.16" />
        </g>
      ))}
    </Frame>
  );
}

function DashboardGrid() {
  return (
    <Frame>
      <rect x="10" y="8" width="86" height="34" rx="7" fill="#fff" stroke="#100e0c" strokeOpacity="0.1" />
      <path d="M20 34l14-11 12 7 14-14 16 9" stroke="#E2622B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="104" y="8" width="86" height="34" rx="7" fill="#fff" stroke="#100e0c" strokeOpacity="0.1" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={116 + i * 18} y={34 - (8 + i * 5)} width="10" height={8 + i * 5} rx="3" fill="rgba(16,14,12,0.18)" />
      ))}
      <rect x="10" y="50" width="180" height="30" rx="7" fill="#fff" stroke="#100e0c" strokeOpacity="0.1" />
      <rect x="22" y="62" width="60" height="5" rx="2.5" fill="#E2622B" />
      <rect x="90" y="62" width="88" height="5" rx="2.5" fill="rgba(16,14,12,0.12)" />
    </Frame>
  );
}

function CloseCycle() {
  const rows = [
    { label: "Before", days: 11.4, w: 100, tone: "ink" },
    { label: "After", days: 6.2, w: 54, tone: "clay" },
  ];
  return (
    <div className="rounded-slab bg-chalk p-7 hairline sm:p-9">
      <span className="micro text-faint">Close cycle, working days</span>
      <div className="mt-7 flex flex-col gap-6">
        {rows.map((r) => (
          <div key={r.label}>
            <div className="flex items-baseline justify-between">
              <span className="text-[13.5px] text-ink-soft">{r.label}</span>
              <span className="text-[22px] font-medium tracking-[-0.03em] text-ink tnum">
                {r.days}
                <span className="ml-1 text-[12px] text-muted">days</span>
              </span>
            </div>
            <div className="mt-2.5 h-2.5 w-full overflow-hidden rounded-full bg-line">
              <div
                style={{ width: `${r.w}%` }}
                className={cx("h-full rounded-full", r.tone === "clay" ? "bg-clay" : "bg-ink/25")}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-7 text-[12.5px] leading-snug text-muted">
        Illustrative of the pattern we work toward. Actual baselines and targets
        come out of the assessment.
      </p>
    </div>
  );
}
