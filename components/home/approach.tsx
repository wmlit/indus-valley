import { newWay, oldWay } from "@/lib/site";
import { RangeBar, Sparkline } from "../art/valley";
import { Figure } from "../ui/figure";
import { Reveal } from "../ui/reveal";
import {
  BlankSheet,
  BrokenLine,
  Demolish,
  MapContour,
  Route,
  ShieldCheck,
  SingleEye,
  TargetState,
  type Icon,
} from "../ui/icons";
import { Container, SectionHeading, Seal, cx } from "../ui/primitives";

const oldIcons: Icon[] = [SingleEye, BlankSheet, Demolish, BrokenLine];
const newIcons: Icon[] = [MapContour, TargetState, Route, ShieldCheck];

/* ------------------------------------------------------------------
   4 · Old way / new way
------------------------------------------------------------------- */

export function Approach() {
  return (
    <section id="approach" className="scroll-mt-28 bg-cream py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="A different approach"
            lead="A fresh approach to"
            trail="modernising what you already run."
            sub="Most vendors arrive with a product to sell and a template to fill. That is how enterprises end up replacing systems that only ever needed connecting."
            className="mx-auto"
          />
        </Reveal>

        <div className="mt-14 flex flex-col gap-4">
          <Reveal delay={80}>
            <StepSlab
              tone="light"
              title="The old way, still happening."
              steps={oldWay}
              icons={oldIcons}
            />
          </Reveal>
          <Reveal delay={200}>
            <StepSlab
              tone="dark"
              title="The new way, the way we do it."
              steps={newWay}
              icons={newIcons}
              badge
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function StepSlab({
  tone,
  title,
  steps,
  icons,
  badge,
}: {
  tone: "light" | "dark";
  title: string;
  steps: { title: string; body: string }[];
  icons: Icon[];
  badge?: boolean;
}) {
  const dark = tone === "dark";
  return (
    <div
      className={cx(
        "relative overflow-hidden rounded-slab px-6 py-8 sm:px-9 sm:py-10",
        dark ? "ember-wash text-white grain" : "bg-cream-deep/70 hairline",
      )}
    >
      <div className="relative flex items-center justify-between gap-4">
        <h3 className={cx("text-[clamp(1.35rem,2.6vw,1.8rem)]", dark ? "text-white" : "text-ink")}>
          {title}
        </h3>
        {badge ? (
          <span className="flex shrink-0 items-center gap-2 rounded-full bg-white/12 py-1.5 pr-1.5 pl-3.5 text-[11.5px] font-medium text-white/85 backdrop-blur-sm hairline-light">
            By Indus Valley
            <Seal className="size-5" tone="dark" />
          </span>
        ) : null}
      </div>

      <div
        className={cx(
          "relative mt-9 grid gap-8 border-t pt-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4",
          dark ? "border-white/12" : "border-line",
        )}
      >
        {steps.map((s, i) => {
          const Ico = icons[i];
          return (
            <div key={s.title} className="flex flex-col">
              <span
                className={cx(
                  "grid size-11 place-items-center rounded-xl",
                  dark ? "bg-white/10 text-white" : "bg-chalk text-clay hairline",
                )}
              >
                <Ico />
              </span>
              <span className={cx("micro mt-5", dark ? "text-white/40" : "text-faint")}>
                Step {i + 1}
              </span>
              <span
                className={cx(
                  "mt-3 text-[15.5px] font-medium tracking-[-0.02em]",
                  dark ? "text-white" : "text-ink",
                )}
              >
                {s.title}
              </span>
              <span
                className={cx(
                  "mt-1.5 text-[13px] leading-snug",
                  dark ? "text-white/50" : "text-muted",
                )}
              >
                {s.body}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------
   5 · The assessment
------------------------------------------------------------------- */

export function Assessment() {
  return (
    <section className="bg-cream pb-20 sm:pb-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Executive assessment"
            lead="A thorough read of your"
            trail="systems landscape."
            sub="Before anything is scoped, we map what you run today — the integrations, the configuration, the reporting spine and the debt inside all three. Every recommendation traces back to something we measured."
            className="mx-auto"
          />
        </Reveal>

        <Reveal delay={140} className="mt-14">
          <div className="relative overflow-hidden rounded-slab bg-cream-deep lg:h-[620px]">
            <Figure
              slot="HOME-ASSESS"
              alt="Layered translucent planes etched with topographic contours"
              px="3:2 · 2400×1600"
              sizes="(max-width: 1024px) 100vw, 1180px"
              fill
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-linear-to-b from-cream/25 via-transparent to-cream/40"
            />

            {/* lg:absolute so the cards' percentage offsets resolve against the
                panel — a block-level box of auto height would collapse to zero */}
            <div className="relative grid gap-3 p-4 sm:grid-cols-2 sm:p-6 lg:absolute lg:inset-0 lg:block lg:p-0">
              <MetricCard
                className="lg:absolute lg:top-[11%] lg:left-[4.5%] lg:w-[262px]"
                label="Integration debt"
                value="69"
                unit="/100"
                foot="Point-to-point links with no owner"
              >
                <Bars values={[38, 54, 44, 69, 61]} />
              </MetricCard>

              <MetricCard
                className="lg:absolute lg:top-[8%] lg:right-[4.5%] lg:w-[286px]"
                label="EDI set coverage"
                value="94"
                unit="%"
                foot="837 / 835 / 834 mapped and monitored"
              >
                <RangeBar value={94} low="0%" high="100%" className="mt-4" />
              </MetricCard>

              <MetricCard
                className="lg:absolute lg:bottom-[10%] lg:left-[7%] lg:w-[248px]"
                label="Close cycle"
                value="6.2"
                unit=" days"
                foot="Down from 11.4 at baseline"
              >
                <Sparkline
                  uid="close-sl"
                  points={[11.4, 10.8, 10.1, 9.2, 8.4, 7.6, 6.9, 6.2]}
                  stroke="#8BA4B4"
                  className="mt-4 h-9 w-full"
                />
              </MetricCard>

              <MetricCard
                className="lg:absolute lg:right-[7%] lg:bottom-[13%] lg:w-[268px]"
                label="Regression automated"
                value="62"
                unit="%"
                foot="Functional, automated and performance"
              >
                <RangeBar value={62} low="Manual" high="Automated" className="mt-4" />
              </MetricCard>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function MetricCard({
  label,
  value,
  unit,
  foot,
  children,
  className,
}: {
  label: string;
  value: string;
  unit?: string;
  foot?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cx(
        "rounded-2xl bg-chalk/82 p-4 shadow-lift backdrop-blur-md hairline sm:p-5",
        className,
      )}
    >
      <span className="micro text-faint">{label}</span>
      <div className="mt-3 flex items-baseline gap-0.5">
        <span className="text-[30px] leading-none font-medium tracking-[-0.04em] text-ink tnum">
          {value}
        </span>
        {unit ? <span className="text-[13px] text-muted">{unit}</span> : null}
      </div>
      {children}
      {foot ? <p className="mt-3.5 text-[12px] leading-snug text-muted">{foot}</p> : null}
    </div>
  );
}

function Bars({ values }: { values: number[] }) {
  return (
    <div className="mt-4 flex h-12 items-end gap-1.5">
      {values.map((v, i) => (
        <span
          key={i}
          style={{ height: `${v}%` }}
          className={cx("flex-1 rounded-[3px]", i === values.length - 2 ? "bg-clay" : "bg-ink/12")}
        />
      ))}
    </div>
  );
}
