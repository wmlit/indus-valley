import { newWay } from "@/lib/site";
import { Reveal } from "../ui/reveal";
import {
  MapContour,
  Route,
  ShieldCheck,
  TargetState,
  type Icon,
} from "../ui/icons";
import { Container, SectionHeading, Seal, cx } from "../ui/primitives";

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
